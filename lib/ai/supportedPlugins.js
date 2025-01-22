export const supportedPluginsText = JSON.stringify({
  blockchain: {
    'plugin-0g': {
      name: 'Zero-G',
      description: 'Zero-knowledge integration capabilities for private and secure blockchain transactions, includes proof generation and verification',
      features: ['zero-knowledge proofs', 'private transactions', 'secure computation']
    },
    'plugin-3d-generation': {
      name: '3D Generation',
      description: 'Creates and manipulates 3D content for metaverse and gaming applications, supports multiple file formats and real-time rendering',
      features: ['3D modeling', 'asset generation', 'real-time rendering']
    },
    'plugin-abstract': {
      name: 'Abstract',
      description: 'Implements Abstract protocol functionality for cross-chain asset management and DeFi operations, includes automated portfolio balancing',
      features: ['cross-chain', 'DeFi integration', 'portfolio management']
    },
    'plugin-aptos': {
      name: 'Aptos',
      description: 'Full Aptos blockchain integration including transaction management, smart contract deployment, and Move module interaction',
      features: ['transaction handling', 'smart contracts', 'Move language support']
    },
    'plugin-avalanche': {
      name: 'Avalanche',
      description: 'Complete Avalanche network integration with support for C-Chain, P-Chain, and X-Chain operations, includes subnet management',
      features: ['multi-chain support', 'subnet deployment', 'asset bridging']
    },
    'plugin-coinbase': {
      name: 'Coinbase',
      description: 'Comprehensive Coinbase exchange integration with order management, portfolio tracking, and automated trading strategies',
      features: ['order execution', 'portfolio tracking', 'automated trading']
    },
    'plugin-conflux': {
      name: 'Conflux',
      description: 'Conflux blockchain integration supporting both Core and eSpace networks, includes transaction management and contract deployment',
      features: ['dual-network support', 'smart contracts', 'cross-space operations']
    },
    'plugin-cronoszkevm': {
      name: 'Cronos zkEVM',
      description: 'Integration with Cronos zkEVM for scalable and private smart contract execution, includes zero-knowledge proof generation',
      features: ['zk-rollups', 'smart contracts', 'scalability solutions']
    },
    'plugin-evm': {
      name: 'EVM',
      description: 'Universal Ethereum Virtual Machine support for contract deployment, interaction, and event monitoring across all EVM-compatible chains',
      features: ['contract deployment', 'transaction management', 'event monitoring']
    },
    'plugin-flow': {
      name: 'Flow',
      description: 'Flow blockchain integration for NFT and gaming applications, includes Cadence smart contract support and account management',
      features: ['Cadence contracts', 'NFT support', 'account management']
    },
    'plugin-fuel': {
      name: 'Fuel',
      description: 'Fuel blockchain integration supporting high-throughput applications, includes parallel transaction processing and asset management',
      features: ['parallel execution', 'asset management', 'scalability']
    },
    'plugin-icp': {
      name: 'Internet Computer',
      description: 'Internet Computer Protocol integration for deploying and managing web3 applications, includes canister management and cycles',
      features: ['canister deployment', 'cycle management', 'web3 hosting']
    },
    'plugin-multiversx': {
      name: 'MultiversX',
      description: 'Complete MultiversX blockchain support including smart contract deployment, staking, and ESDT token management',
      features: ['smart contracts', 'staking', 'token management']
    },
    'plugin-near': {
      name: 'NEAR',
      description: 'NEAR Protocol integration with support for contract deployment, account management, and Aurora EVM compatibility',
      features: ['contract deployment', 'account system', 'Aurora integration']
    },
    'plugin-solana': {
      name: 'Solana',
      description: 'Comprehensive Solana blockchain integration including program deployment, SPL token management, and NFT support',
      features: ['program deployment', 'SPL tokens', 'NFT operations']
    },
    'plugin-starknet': {
      name: 'StarkNet',
      description: 'StarkNet Layer 2 integration supporting Cairo smart contracts, account abstraction, and scalable transactions',
      features: ['Cairo contracts', 'account abstraction', 'L2 scaling']
    },
    'plugin-story': {
      name: 'Story',
      description: 'Blockchain-based storytelling platform with NFT integration, content monetization, and collaborative creation tools',
      features: ['content creation', 'NFT integration', 'monetization']
    },
    'plugin-sui': {
      name: 'Sui',
      description: 'Sui blockchain integration with Move contract support, object-centric data model, and parallel execution',
      features: ['Move contracts', 'parallel execution', 'object management']
    },
    'plugin-ton': {
      name: 'TON',
      description: 'The Open Network blockchain integration including smart contract deployment, TON payments, and DNS management',
      features: ['smart contracts', 'payments', 'DNS system']
    },
    'plugin-zksync-era': {
      name: 'zkSync Era',
      description: 'zkSync Era Layer 2 integration with EVM compatibility, zero-knowledge proofs, and scalable transaction processing',
      features: ['zk-rollups', 'EVM compatibility', 'scalability']
    }
  },
  content: {
    'plugin-image-generation': {
      name: 'Image Generation',
      description: 'Advanced AI image creation with multiple model support (DALL-E, Stable Diffusion), style transfer, and batch processing',
      features: ['multi-model support', 'style transfer', 'batch processing']
    },
    'plugin-nft-generation': {
      name: 'NFT Generation',
      description: 'Complete NFT creation suite with layered art generation, metadata management, and multi-chain deployment capabilities',
      features: ['art generation', 'metadata management', 'multi-chain support']
    },
    'plugin-video-generation': {
      name: 'Video Generation',
      description: 'AI-powered video creation with text-to-video generation, style transfer, and automated editing capabilities',
      features: ['text-to-video', 'style transfer', 'automated editing']
    }
  },
  platform: {
    'plugin-bootstrap': {
      name: 'Bootstrap',
      description: 'Platform initialization and configuration management, includes environment setup, dependency handling, and service orchestration',
      features: ['environment setup', 'dependency management', 'service orchestration']
    },
    'plugin-echochambers': {
      name: 'EchoChambers',
      description: 'Advanced chat system with room management, message threading, real-time updates, and moderation tools',
      features: ['room management', 'message threading', 'moderation']
    },
    'plugin-gitbook': {
      name: 'GitBook',
      description: 'Documentation system integration with version control, collaborative editing, and automated deployment',
      features: ['version control', 'collaborative editing', 'automated deployment']
    },
    'plugin-goat': {
      name: 'GOAT',
      description: 'Advanced optimization toolkit for performance tuning, resource allocation, and system monitoring',
      features: ['performance optimization', 'resource management', 'monitoring']
    },
    'plugin-intiface': {
      name: 'Intiface',
      description: 'Comprehensive interface management system for device control, event handling, and user interaction',
      features: ['device control', 'event handling', 'user interaction']
    },
    'plugin-node': {
      name: 'Node',
      description: 'Node.js runtime integration with process management, module handling, and runtime optimization',
      features: ['process management', 'module handling', 'runtime optimization']
    },
    'plugin-tee': {
      name: 'TEE',
      description: 'Trusted Execution Environment implementation for secure computation, data protection, and confidential processing',
      features: ['secure computation', 'data protection', 'confidential processing']
    },
    'plugin-trustdb': {
      name: 'TrustDB',
      description: 'Secure database system with encryption, access control, audit logging, and data integrity verification',
      features: ['encryption', 'access control', 'audit logging']
    }
  },
  communication: {
    'plugin-web-search': {
      name: 'Web Search',
      description: 'Advanced internet search capabilities with multi-source aggregation, content filtering, and semantic understanding',
      features: ['multi-source search', 'content filtering', 'semantic analysis']
    },
    'plugin-whatsapp': {
      name: 'WhatsApp',
      description: 'Complete WhatsApp Business API integration with automated messaging, contact management, and engagement tracking',
      features: ['automated messaging', 'contact management', 'analytics']
    },
    'plugin-twitter': {
      name: 'Twitter',
      description: 'Comprehensive Twitter/X platform integration with automated posting, engagement monitoring, and trend analysis',
      features: ['automated posting', 'engagement tracking', 'trend analysis']
    }
  }
})
