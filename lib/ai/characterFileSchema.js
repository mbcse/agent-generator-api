import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

// Helper schemas for nested types
const MessageExampleSchema = z.object({
  user: z.string(),
  content: z
    .object({
      text: z.string(),
      action: z.string().optional(),
      source: z.string().optional(),
      url: z.string().optional(),
      inReplyTo: z.string().uuid().optional(),
      attachments: z.array(z.any()).optional()
    })
    .and(z.record(z.string(), z.unknown())) // For additional properties
})

const PluginSchema = z.object({
  name: z.string(),
  description: z.string(),
  actions: z.array(z.any()).optional(),
  providers: z.array(z.any()).optional(),
  evaluators: z.array(z.any()).optional(),
  services: z.array(z.any()).optional(),
  clients: z.array(z.any()).optional()
})

// Main Character schema
export const CharacterSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  system: z.string().optional(),
  modelProvider: z.nativeEnum('ModelProviderName'),
  modelEndpointOverride: z.string().optional(),
  templates: z.record(z.string()).optional(),
  bio: z.union([z.string(), z.array(z.string())]),
  lore: z.array(z.string()),
  messageExamples: z.array(z.array(MessageExampleSchema)),
  postExamples: z.array(z.string()),
  topics: z.array(z.string()),
  adjectives: z.array(z.string()),
  knowledge: z
    .array(
      z.union([
        z.string(), // Direct knowledge strings
        z.object({
          // Individual file config
          path: z.string(),
          shared: z.boolean().optional()
        }),
        z.object({
          // Directory config
          directory: z.string(),
          shared: z.boolean().optional()
        })
      ])
    )
    .optional(),
  clients: z.array(z.nativeEnum('Clients')),
  plugins: z.union([z.array(z.string()), z.array(PluginSchema)]),
  settings: z
    .object({
      secrets: z.record(z.string()).optional(),
      voice: z
        .object({
          model: z.string().optional(),
          url: z.string().optional()
        })
        .optional(),
      model: z.string().optional(),
      embeddingModel: z.string().optional()
    })
    .optional(),
  clientConfig: z
    .object({
      discord: z
        .object({
          shouldIgnoreBotMessages: z.boolean().optional(),
          shouldIgnoreDirectMessages: z.boolean().optional()
        })
        .optional(),
      telegram: z
        .object({
          shouldIgnoreBotMessages: z.boolean().optional(),
          shouldIgnoreDirectMessages: z.boolean().optional()
        })
        .optional()
    })
    .optional(),
  style: z.object({
    all: z.array(z.string()),
    chat: z.array(z.string()),
    post: z.array(z.string())
  }),
  twitterProfile: z
    .object({
      username: z.string(),
      screenName: z.string(),
      bio: z.string(),
      nicknames: z.array(z.string()).optional()
    })
    .optional(),
  nft: z
    .object({
      prompt: z.string().optional()
    })
    .optional(),
  extends: z.array(z.string()).optional()
})

const CharacterSchemaJson = zodToJsonSchema(CharacterSchema)
const PluginSchemaJson = zodToJsonSchema(PluginSchema)
const MessageExampleSchemaJson = zodToJsonSchema(MessageExampleSchema)

export const characterFileSchemaText = `
### Character File Structure:
${JSON.stringify(CharacterSchemaJson, null, 2)}
### PluginSchema for reference
${JSON.stringify(PluginSchemaJson, null, 2)}
### MessageExampleSchema
${JSON.stringify(MessageExampleSchemaJson, null, 2)}
`
