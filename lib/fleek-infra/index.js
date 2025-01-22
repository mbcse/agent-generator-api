import axios from 'axios'

const baseUrl = 'https://api.fleek.xyz'

const getUrl = (url) => {
  return `${baseUrl}${url}`
}

export const createAgent = async (characterFile) => {
  characterFile = JSON.parse(characterFile)
  console.log(characterFile)
  console.log(characterFile.name)
  const response = await axios.post(getUrl('/api/v1/ai-agents'), {
    config: JSON.stringify(characterFile),
    name: characterFile.name,
    projectId: process.env.FLEEK_PROJECT_ID
  }, {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.FLEEK_API_KEY
    }
  })
  console.log('CREATED AGENT: ', response.data)
  return response.data
}

export const deleteAgent = async (agentId) => {
  const response = await axios.delete(getUrl(`/api/v1/ai-agents/${agentId}`), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.FLEEK_API_KEY
    }
  })
  console.log('DELETED AGENT: ', response.data)
  return response.data
}

export const getAgent = async (agentId) => {
  const response = await axios.get(getUrl(`/api/v1/ai-agents/${agentId}`), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.FLEEK_API_KEY
    }
  })
  console.log('GET AGENT', response.data)
  return response.data
}

export const listAllAiagents = async () => {
  const response = await axios.get(getUrl('/api/v1/ai-agents'), {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.FLEEK_API_KEY
    }
  })
  console.log('LIST AGENTS: ', response.data)
  return response.data
}
