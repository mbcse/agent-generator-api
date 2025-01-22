export const supportedModelProvidersText = JSON.stringify({
  openai: {
    name: 'OpenAI',
    description: 'GPT models, DALL-E image generation, and embeddings',
    features: ['text', 'images', 'embeddings']
  },
  anthropic: {
    name: 'Anthropic Claude',
    description: 'Claude model family including Haiku/Sonnet/Opus',
    features: ['text']
  },
  google: {
    name: 'Google AI',
    description: 'Gemini and PaLM models with embeddings',
    features: ['text', 'embeddings']
  },
  grok: {
    name: 'Grok',
    description: 'Multiple model sizes for different use cases',
    features: ['text']
  },
  groq: {
    name: 'Groq',
    description: 'Fast inference optimized models',
    features: ['text']
  },
  llama_cloud: {
    name: 'Llama Cloud',
    description: 'Cloud-hosted Llama model deployments',
    features: ['text']
  },
  llama_local: {
    name: 'Llama Local',
    description: 'Self-hosted Llama model deployments',
    features: ['text']
  },
  ollama: {
    name: 'Ollama',
    description: 'Local model deployment with custom model support',
    features: ['text']
  },
  redpill: {
    name: 'RedPill AI',
    description: 'Specialized AI models and services',
    features: ['text']
  },
  openrouter: {
    name: 'OpenRouter',
    description: 'Multi-model routing and management',
    features: ['text']
  },
  heurist: {
    name: 'Heurist',
    description: 'AI capabilities with specialized features',
    features: ['text']
  },
  together: {
    name: 'Together AI',
    description: 'Collaborative AI platform integration',
    features: ['text']
  },
  eternalai: {
    name: 'EternalAI',
    description: 'Decentralized inference platform',
    features: ['text']
  },
  galadriel: {
    name: 'Galadriel',
    description: 'Specialized AI services platform',
    features: ['text']
  },
  falai: {
    name: 'FalAI',
    description: 'Custom LORA model support',
    features: ['text']
  },
  gaianet: {
    name: 'GaiaNet',
    description: 'Distributed AI network',
    features: ['text']
  },
  ali_bailian: {
    name: 'Ali Bailian',
    description: 'Chinese language model capabilities',
    features: ['text']
  },
  volengine: {
    name: 'VolEngine',
    description: 'ByteDance AI model integration',
    features: ['text']
  },
  nanogpt: {
    name: 'NanoGPT',
    description: 'Lightweight GPT implementation',
    features: ['text']
  },
  hyperbolic: {
    name: 'Hyperbolic',
    description: 'Specialized AI model deployment',
    features: ['text']
  },
  venice: {
    name: 'Venice',
    description: 'AI model provider with various capabilities',
    features: ['text']
  },
  akash_chat_api: {
    name: 'Akash Chat API',
    description: 'Decentralized AI chat capabilities',
    features: ['text']
  },
  livepeer: {
    name: 'Livepeer',
    description: 'Streaming AI services integration',
    features: ['streaming']
  }
})
