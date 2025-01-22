import { createOpenAI } from '@ai-sdk/openai'
import { createAnthropic } from '@ai-sdk/anthropic'

import { generateText, streamText, tool } from 'ai'
import { z } from 'zod'
import { generateFullCharacterFileSystemPrompt } from '../lib/ai/systemPrompts.js'
import { createAgent, deleteAgent, listAllAiagents } from '../lib/fleek-infra/index.js'
import { generateFullCharacterFileSystemPrompt2 } from '../lib/ai/systemPromt2.js'
import { generateFullCharacterFileSystemPrompt3 } from '../lib/ai/systemPromt3.js'
const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

let deployedAgentId = null

const deployAgent = async ({ characterFile }) => {
  console.log(characterFile)
  try {
    if (deployedAgentId) {
      await deleteAgent(deployedAgentId)
    } else {
      const agents = await listAllAiagents()
      agents.data.map(async (agent) => {
        await deleteAgent(agent.id)
      })
    }
    const agent = await createAgent(characterFile)
    deployedAgentId = agent.id
    console.log(agent)
    return {
      status: 'success',
      data: JSON.stringify(agent)
    }
  } catch (error) {
    console.log(error)
  }
}

const summarizeMessages = async (messages) => {
  const summaryPrompt = {
    role: 'system',
    content: 'Summarize the following messages to retain the main ideas and important details:'
  }
  const response = await generateText({
    model: anthropic('claude-3-5-sonnet-latest'),
    messages: [summaryPrompt, ...messages],
    max_tokens: 500,
    temperature: 1
  })

  console.log('summaries: ', response.text)
  console.log('Summarized usage: ', response.usage)

  return response.text
}

export const generateFullCharacterFile = async (req, res) => {
  try {
    const { messages } = req.body
    // console.log(messages)

    const filteredMessages = messages.filter((message) => message.content != null && message.content !== undefined)
    const filteredUserMessages = messages.filter((message) => message.role === 'user' && message.role === 'assitant' && message.content != null && message.content !== undefined)

    const MAX_TOKENS = 8192
    const MAX_CONTEXT_TOKENS = 3000
    // Separate last 4 messages
    const lastMessagesCount = 4
    const lastMessages = filteredMessages.slice(-lastMessagesCount)
    const earlierMessages = filteredUserMessages.slice(0, -lastMessagesCount)

    // Estimate token usage and summarize earlier messages if needed
    let currentTokens = lastMessages.reduce((total, message) => total + message.content.length / 4, 0) // Approximation

    let summarizedMessage = ''
    if (currentTokens < MAX_CONTEXT_TOKENS) {
      const earlierMessagesTokens = earlierMessages.reduce(
        (total, message) => total + message.content.length / 4,
        0
      )

      if (currentTokens + earlierMessagesTokens > MAX_CONTEXT_TOKENS) {
        summarizedMessage = await summarizeMessages(earlierMessages)
        currentTokens += summarizedMessage.length / 4
      } else {
        summarizedMessage = earlierMessages.map((msg) => msg.content).join('\n')
        currentTokens += earlierMessagesTokens
      }
    }

    const messagesForRequest = [
      {
        role: 'system',
        content: generateFullCharacterFileSystemPrompt2
      },
      {
        role: 'system',
        content: messages.length % 3 === 0
          ? `'# CRITICAL CRITICAL CRITICAL JSON SYNTAX VALIDATION RULES
              # STRICT OUTPUT FORMAT ENFORCEMENT

              1. MANDATORY OUTPUT STRUCTURE:
              Every single response MUST follow this exact format without exception:
              {
              "message": "Your message here",
              "characterFileJson": {
                  // Full JSON object
              }
              }

              2. FORMAT RULES:
              - NEVER respond with plain text
              - NEVER skip the message or characterFileJson fields
              - NEVER change the field names
              - NEVER add extra fields
              - EVERY response must be valid JSON
              - ALWAYS wrap the entire response in curly braces
              - ALWAYS include both required fields

              3. FIELD REQUIREMENTS:
              message:
              - Must be a string
              - Must be properly escaped
              - Must contain the next conversation step

              characterFileJson:
              - Must contain complete character file
              - Must be updated with latest information
              - Must maintain all required fields

              4. STRUCTURE VALIDATION:
              Before sending ANY response, verify:
              - Response starts with {
              - Response ends with }
              - Has "message" field
              - Has "characterFileJson" field
              - Both fields properly formatted

              5. NO EXCEPTIONS:
              - Even for errors or notifications
              - Even for deployment messages
              - Even for simple confirmations
              - Even for questions to user
              EVERY response must maintain this structure

              Example of correct format even for simple responses:
              {
              "message": "Could you tell me more about that?",
              "characterFileJson": {
                  // Full current JSON state
              }
              }
              1. STRING FORMATTING:
              - Never use regular quotes (") inside JSON strings - use escaped quotes (\") instead
              - Never use backticks in JSON
              - Always check for all closing brackets and braces and parantheses
              - Escape all special characters in strings properly:
                - New lines: \n
                - Quotes: \"
                - Backslashes: \\
                - Control characters are not allowed

              2. MESSAGE FORMATTING:
              - Always use proper JSON string escaping in the "message" field
              - Break long messages into multiple lines using \n
              - Never include raw quotes, backticks or control characters
              - Example correct format:
              {
              "message": "Here's the deployment status:\\n- Status: Complete\\n- ID: abc123\\n\\nWould you like to proceed?",
              "characterFileJson": {...}
              }`
          : 'Make sure JSON syntx is correct as you do a lot of mistakes in JSON syntax, like missing parenthesis, comma, closing brackets etc.'
      },
      ...(summarizedMessage
        ? [
            {
              role: 'system',
              content: `Summary of earlier messages: ${summarizedMessage}`
            }
          ]
        : earlierMessages),
      ...lastMessages
    ]

    // console.log(messagesForRequest)

    const { textStream } = streamText({
      model: anthropic('claude-3-5-sonnet-latest'),
      messages: messagesForRequest,
      tools: {
        deployAgent: tool({
          description: 'Deploy character file to fleek infra, Basically to deploy the agent',
          parameters: z.object({ characterFile: z.string().describe('The character file to deploy') }),
          execute: deployAgent
        })
      },
      maxSteps: 3,
      temperature: 0.5
    })

    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    // Get the ReadableStream from the response
    for await (const delta of textStream) {
      // Client's useChat is configured to use streamProtocol 'text', so we can send text deltas directly
      // without SSE framing.
      res.write(delta)
    }

    res.end()
  } catch (error) {
    console.log(error)
  }
}
