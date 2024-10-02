---
mathjax: true
id: 6143
title: Exploring Ollama & LM Studio
date: 2024-09-18
permalink: /dsblog/Exploring-Ollama
tags: [LLM, Ollama, Meta, Large Language Model]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6143-Exploring-Ollama.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: [Ollama AI, On-device AI, Local LLM frameworks, AI model management, LangChain integration]
---

![Exploring Ollama & LM Studio](/assets/images/dspost/dsp6143-Exploring-Ollama.jpg)

# Exploring Ollama & LM Studio

## Question: What is Ollama? Is it like Docker?
Ollama is a platform designed to make running and interacting with large language models (LLMs) easier. It abstracts away the complexities of managing LLM models, GPU resources, and related configurations by offering a simple CLI interface. With Ollama, you can run, manage, and deploy LLMs locally or in various cloud environments without having to worry about the intricate details of setting up environments, downloading models, or configuring them.

### Key Features of Ollama:
- **Model Management**: Ollama can download and store LLMs in a local cache for you to run, typically in a format optimized for the hardware available (like your local GPU).
- **GPU/CPU Utilization**: It detects hardware resources, such as your NVIDIA GPU, and automatically uses them for model acceleration without additional setup.
- **Service Setup**: When you install Ollama, it sets up a service running in the background that serves models on an API, so you can interact with them programmatically.

## Question: How is Ollama different from Docker?
While Ollama and Docker both deal with isolated environments, they serve different purposes:

- **Ollama** focuses specifically on running machine learning models, especially large language models, and optimizes resources to make them easily accessible and deployable.
- **Docker** is a general-purpose containerization tool that allows you to package applications with their dependencies in isolated environments. It’s used for deploying a wide variety of applications, not just models.

So, while Docker might also be used to set up machine learning environments or serve models, Ollama is specialized and optimized for the LLM use case.

In Summary: **Ollama** = Model management platform for LLMs, with easy CLI and automatic resource optimization. **Docker** = General containerization tool for deploying all types of applications in isolated environments.

## Question: How to install ollama on my machine?
Refer: https://ollama.com/download/linux, and https://github.com/ollama/ollama, and https://github.com/ollama/ollama-python
- To download Ollama on linux/wsl:    
	curl -fsSL https://ollama.com/install.sh | sh
- To run   
	ollama run phi3   
	**<font color=green>http://127.0.0.1:11434/ - ollama is running </font>**

## Question: How to create customized LLM Model (docker like image)?

If you know the working of Docker image, container, docker hub, docker command then you will feel at home with ollama commands.

Step 1: Create a ModelFile
```
FROM llama3.1

# set the temperature to 1 [higher is more creative, lower is more coherent]
PARAMETER temperature 1

# set the system message
SYSTEM """
You are Travel Advisor from Air India Airlines. Answer as AI Advisor, the assistant, only.
"""
```

Step 2: Create and run the model
```
ollama create aiadvisor -f ./Modelfile
ollama run aiadvisor
>>> hi
Hello! It's your friend AI Advisor.
```

## Question: What are the LLM available on ollama?
There are 100+ LLM available via ollama. They have different capabilities in terms of domain task like 
coding, embedding, reasoning, chatting, philosophy, medical, maths, function calling. And in terms of context window 8k, 16k, 24k, 128k etc. And in terms of hardware/gpu required or not to run these.

### Chatting/Assistant/
1. alfred: A robust conversational model designed to be used for both chat and instruct use cases.
1. all-minilm: Embedding models on very large sentence level datasets.
1. An experimental 1.1B parameter model trained on the new Dolphin 2.8 dataset by Eric Hartford and based on TinyLlama.
1. Aya 23, released by Cohere, is a new family of state-of-the-art, multilingual models that support 23 languages.
1. bge-large: Embedding model from BAAI mapping texts to vectors.
1. BGE-M3 is a new Embedding model from BAAI distinguished for its versatility in Multi-Functionality, Multi-Linguality, and Multi-Granularity.
1. Command R is a Large Language Model optimized for conversational interaction and long context tasks.
1. Command R+ is a powerful, scalable large language model purpose-built to excel at real-world enterprise use cases.
1. DBRX is an open, general-purpose LLM created by Databricks.
1. deepseek-llm: An advanced language model crafted with 2 trillion bilingual tokens.
1. deepseek-v2: A strong, economical, and efficient Mixture-of-Experts language model.
1. deepseek-v2.5: An upgraded version of DeekSeek-V2 that integrates the general and coding abilities of both DeepSeek-V2-Chat and DeepSeek-Coder-V2-Instruct.
1. Dolphin 2.9 is a new model with 8B and 70B sizes by Eric Hartford based on Llama 3 that has a variety of instruction, conversational, and coding skills.
1. dolphin-mixtral: Uncensored, 8x7b and 8x22b fine-tuned models based on the Mixtral mixture of experts models that excels at coding tasks. Created by Eric Hartford.
1. everythinglm: Uncensored Llama2 based model with support for a 16K context window.
1. falcon: A large language model built by the Technology Innovation Institute (TII) for use in summarization, text generation, and chat bots.
1. Gemma is a family of lightweight, state-of-the-art open models built by Google DeepMind.
1. glm4: A strong multi-lingual general language model with competitive performance to Llama 3.
1. goliath: A language model created by combining two fine-tuned Llama 2 70B models into one.
1. Google Gemma 2 is a high-performing and efficient model available in three sizes: 2B, 9B, and 27B.
1. Hermes 3 is the latest version of the flagship Hermes series of LLMs by Nous Research
1. Llama 2 is a collection of foundation language models ranging from 7B to 70B parameters.
1. Llama 3.1 is a new state-of-the-art model from Meta available in 8B, 70B and 405B parameter sizes.
1. llama2-chinese: Llama 2 based model fine tuned to improve Chinese dialogue ability.
1. llama3-chatqa: A model from NVIDIA based on Llama 3 that excels at conversational question answering (QA) and retrieval-augmented generation (RAG).
1. llama3-gradient: This model extends LLama-3 8B's context length from 8k to over 1m tokens.
1. MegaDolphin-2.2-120b is a transformation of Dolphin-2.2-70b created by interleaving the model with itself.
1. Meta Llama 3: The most capable openly available LLM to date
1. Mistral OpenOrca is a 7 billion parameter model, fine-tuned on top of the Mistral 7B model using the OpenOrca dataset.
1. mistral-nemo: A state-of-the-art 12B model with 128k context length, built by Mistral AI in collaboration with NVIDIA.
1. mistral-small: Mistral Small is a lightweight model designed for cost-effective use in tasks like translation and summarization.
1. MistralLite is a fine-tuned model based on Mistral with enhanced capabilities of processing long contexts.
1. mixtral: A set of Mixture of Experts (MoE) model with open weights by Mistral AI in 8x7b and 8x22b parameter sizes.
1. neural-chat: A fine-tuned model based on Mistral with good coverage of domain and language.
1. notus: A 7B chat model fine-tuned with high-quality data and based on Zephyr.
1. notux: A top-performing mixture of experts model, fine-tuned with high-quality data.
1. nous-hermes: General use models based on Llama and Llama 2 from Nous Research.
1. nous-hermes2: The powerful family of models by Nous Research that excels at scientific discussion and coding tasks.
1. nuextract: A 3.8B model fine-tuned on a private high-quality synthetic dataset for information extraction, based on Phi-3.
1. OpenHermes 2.5 is a 7B model fine-tuned by Teknium on Mistral with fully open datasets.
1. orca-mini: A general-purpose model ranging from 3 billion parameters to 70 billion, suitable for entry-level hardware.
1. Phi-3 is a family of lightweight 3B (Mini) and 14B (Medium) state-of-the-art open models by Microsoft.
1. phi3.5: A lightweight AI model with 3.8 billion parameters with performance overtaking similarly and larger sized models.
1. Qwen 1.5 is a series of large language models by Alibaba Cloud spanning from 0.5B to 110B parameters
1. Qwen2 is a new series of large language models from Alibaba group
1. reader-lm: A series of models that convert HTML content to Markdown content, which is useful for content conversion tasks.
1. samantha-mistral: A companion assistant trained in philosophy, psychology, and personal relationships. Based on Mistral.
1. smollm: A family of small models with 135M, 360M, and 1.7B parameters, trained on a new high-quality dataset.
1. solar: A compact, yet powerful 10.7B large language model designed for single-turn conversation.
1. Stable LM 2 is a state-of-the-art 1.6B and 12B parameter language model trained on multilingual data in English, Spanish, German, Italian, French, Portuguese, and Dutch.
1. stable-beluga: Llama 2 based model fine tuned on an Orca-style dataset. Originally called Free Willy.
1. stablelm-zephyr: A lightweight chat model allowing accurate, and responsive output without requiring high-end hardware.
1. Starling is a large language model trained by reinforcement learning from AI feedback focused on improving chatbot helpfulness.
1. The Nous Hermes 2 model from Nous Research, now trained over Mixtral.
1. The TinyLlama project is an open endeavor to train a compact 1.1B Llama model on 3 trillion tokens.
1. vicuna: General use chat model based on Llama and Llama 2 with 2K to 16K context sizes.
1. Wizard Vicuna is a 13B parameter model based on Llama 2 trained by MelodysDreamj.
1. Wizard Vicuna Uncensored is a 7B, 13B, and 30B parameter model based on Llama 2 uncensored by Eric Hartford.
1. wizardlm-uncensored: Uncensored version of Wizard LM model
1. xwinlm: Conversational model based on Llama 2 that performs competitively on various benchmarks.
1. yarn-llama2: An extension of Llama 2 that supports a context of up to 128k tokens.
1. yarn-mistral: An extension of Mistral to support context windows of 64K or 128K.
1. Yi 1.5 is a high-performing, bilingual language model.
1. Zephyr is a series of fine-tuned versions of the Mistral and Mixtral models that are trained to act as helpful assistants.

### Multimodal & Vision
1. BakLLaVA is a multimodal (vision) model consisting of the Mistral 7B base model augmented with the LLaVA architecture.
1. minicpm-v: A series of multimodal LLMs (MLLMs) designed for vision-language understanding.
1. LLaVA is a novel end-to-end trained large multimodal model that combines a vision encoder and Vicuna for general-purpose visual and language understanding.
1. llava-llama3: A LLaVA (vision) model fine-tuned from Llama 3 Instruct with better scores in several benchmarks.
1. llava-phi3: A new small LLaVA (vision) model fine-tuned from Phi 3 Mini.
1. moondream2 is a small vision language model designed to run efficiently on edge devices.

### Math
1. llama-pro: An expansion of Llama 2 that specializes in integrating both general language understanding and domain-specific knowledge, particularly in programming and mathematics.
1. Qwen2 Math is a series of specialized math language models built upon the Qwen2 LLMs, which significantly outperforms the mathematical capabilities of open-source models and even closed-source models (e.g., GPT4o).
1. wizard-math: Model focused on math and logic problems

### Coding
1. codellama: A large language model that can use text prompts to generate and discuss code.
1. codegeex4: A versatile model for AI software development scenarios, including code completion.
1. codeup: Great code generation model based on Llama2.
1. codebooga: A high-performing code instruct model created by merging two existing code models.
1. Magicoder is a family of 7B parameter models trained on 75K synthetic instruction data using OSS-Instruct, a novel approach to enlightening LLMs with open-source code snippets.
1. wizardcoder: State-of-the-art code generation model
1. phind-codellama: Code generation model based on Code Llama.
1. dolphincoder: A 7B and 15B uncensored variant of the Dolphin model family that excels at coding, based on StarCoder2.
1. granite-code: A family of open foundation models by IBM for Code Intelligence
1. deepseek-coder-v2: An open-source Mixture-of-Experts code language model that achieves performance comparable to GPT4-Turbo in code-specific tasks.
1. SQLCoder is a code completion model fined-tuned on StarCoder for SQL generation tasks
1. StarCoder is a code generation model trained on 80+ programming languages.
1. Yi-Coder is a series of open-source code language models that delivers state-of-the-art coding performance with fewer than 10 billion parameters.
1. Codestral is Mistral AI’s first-ever code model designed for code generation tasks.
1. Falcon2 is an 11B parameters causal decoder-only model built by TII and trained over 5T tokens.
1. Stable Code 3B is a coding model with instruct and code completion variants on par with models such as Code Llama 7B that are 2.5x larger.
1. StarCoder2 is the next generation of transparently trained open code LLMs that comes in three sizes: 3B, 7B and 15B parameters.
1. DeepSeek Coder is a capable coding model trained on two trillion code and natural language tokens.
1. CodeQwen1.5 is a large language model pretrained on a large amount of code data.
1. Mistral Large 2 is Mistral's new flagship model that is significantly more capable in code generation, mathematics, and reasoning with 128k context window and support for dozens of languages.
1. open-orca-platypus2: Merge of the Open Orca OpenChat model and the Garage-bAInd Platypus 2 model. Designed for chat and code generation.
1. CodeGemma is a collection of powerful, lightweight models that can perform a variety of coding tasks like fill-in-the-middle code completion, code generation, natural language understanding, mathematical reasoning, and instruction following.

### Embedding
1. nomic-embed-text: A high-performing open embedding model with a large token context window.
1. mxbai-embed-large
1. snowflake-arctic-embed: A suite of text embedding models by Snowflake, optimized for performance.
1. State-of-the-art large embedding model from mixedbread.ai
1. paraphrase-multilingual: Sentence-transformers (embedding) model that can be used for tasks like clustering or semantic search.

### Medical
1. medllama2: Fine-tuned Llama 2 model to answer medical questions based on an open source medical dataset.
1. meditron: Open-source medical large language model adapted from Llama 2 to the medical domain.


### Function Calling
1. Nexus Raven is a 13B instruction tuned model for function calling tasks.
1. llama3-groq-tool-use: A series of models from Groq that represent a significant advancement in open-source AI capabilities for tool use/function calling.
1. firefunction-v2: An open weights function calling model based on Llama 3, competitive with GPT-4o function calling capabilities.

### Reasoning
1. mathstral: MathΣtral: a 7B model designed for math reasoning and scientific discovery by Mistral AI.
1. Phi-2: a 2.7B language model by Microsoft Research that demonstrates outstanding reasoning and language understanding capabilities.
1. InternLM2.5 is a 7B parameter model tailored for practical scenarios with outstanding reasoning capability.
1. wizardlm2: State of the art large language model from Microsoft AI with improved performance on complex chat, multilingual, reasoning and agent use cases.
1. reflection: A high-performing model trained with a new technique called Reflection-tuning that teaches a LLM to detect mistakes in its reasoning and correct course.
1. Orca 2 is built by Microsoft research, and are a fine-tuned version of Meta's Llama 2 models. The model is designed to excel particularly in reasoning.

## Question: Can we integrate these hundreds with different UI like ChatGPT?
Yes, in fact you need NOT  to create any new UI. Hundreds of good UI are available which are integrated with these hundreds of LLMs available on Ollama. You can see below some of the popular UI via which Ollama models can be accessed.

*   [Open WebUI](https://github.com/open-webui/open-webui)
*   [Enchanted (macOS native)](https://github.com/AugustDev/enchanted)
*   [Hollama](https://github.com/fmaclen/hollama)
*   [Lollms-Webui](https://github.com/ParisNeo/lollms-webui)
*   [LibreChat](https://github.com/danny-avila/LibreChat)
*   [Bionic GPT](https://github.com/bionic-gpt/bionic-gpt)
*   [HTML UI](https://github.com/rtcfirefly/ollama-ui)
*   [Saddle](https://github.com/jikkuatwork/saddle)
*   [Chatbot UI](https://github.com/ivanfioravanti/chatbot-ollama)
*   [Chatbot UI v2](https://github.com/mckaywrigley/chatbot-ui)
*   [Typescript UI](https://github.com/ollama-interface/Ollama-Gui?tab=readme-ov-file)
*   [Minimalistic React UI for Ollama Models](https://github.com/richawo/minimal-llm-ui)
*   [Ollamac](https://github.com/kevinhermawan/Ollamac)
*   [big-AGI](https://github.com/enricoros/big-AGI/blob/main/docs/config-local-ollama.md)
*   [Cheshire Cat assistant framework](https://github.com/cheshire-cat-ai/core)
*   [Amica](https://github.com/semperai/amica)
*   [chatd](https://github.com/BruceMacD/chatd)
*   [Ollama-SwiftUI](https://github.com/kghandour/Ollama-SwiftUI)
*   [Dify.AI](https://github.com/langgenius/dify)
*   [MindMac](https://mindmac.app)
*   [NextJS Web Interface for Ollama](https://github.com/jakobhoeg/nextjs-ollama-llm-ui)
*   [Msty](https://msty.app)
*   [Chatbox](https://github.com/Bin-Huang/Chatbox)
*   [WinForm Ollama Copilot](https://github.com/tgraupmann/WinForm_Ollama_Copilot)
*   [NextChat](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) with [Get Started Doc](https://docs.nextchat.dev/models/ollama)
*   [Alpaca WebUI](https://github.com/mmo80/alpaca-webui)
*   [OllamaGUI](https://github.com/enoch1118/ollamaGUI)
*   [OpenAOE](https://github.com/InternLM/OpenAOE)
*   [Odin Runes](https://github.com/leonid20000/OdinRunes)
*   [LLM-X](https://github.com/mrdjohnson/llm-x) (Progressive Web App)
*   [AnythingLLM (Docker + MacOs/Windows/Linux native app)](https://github.com/Mintplex-Labs/anything-llm)
*   [Ollama Basic Chat: Uses HyperDiv Reactive UI](https://github.com/rapidarchitect/ollama_basic_chat)
*   [Ollama-chats RPG](https://github.com/drazdra/ollama-chats)
*   [QA-Pilot](https://github.com/reid41/QA-Pilot) (Chat with Code Repository)
*   [ChatOllama](https://github.com/sugarforever/chat-ollama) (Open Source Chatbot based on Ollama with Knowledge Bases)
*   [CRAG Ollama Chat](https://github.com/Nagi-ovo/CRAG-Ollama-Chat) (Simple Web Search with Corrective RAG)
*   [RAGFlow](https://github.com/infiniflow/ragflow) (Open-source Retrieval-Augmented Generation engine based on deep document understanding)
*   [StreamDeploy](https://github.com/StreamDeploy-DevRel/streamdeploy-llm-app-scaffold) (LLM Application Scaffold)
*   [chat](https://github.com/swuecho/chat) (chat web app for teams)
*   [Lobe Chat](https://github.com/lobehub/lobe-chat) with [Integrating Doc](https://lobehub.com/docs/self-hosting/examples/ollama)
*   [Ollama RAG Chatbot](https://github.com/datvodinh/rag-chatbot.git) (Local Chat with multiple PDFs using Ollama and RAG)
*   [BrainSoup](https://www.nurgo-software.com/products/brainsoup) (Flexible native client with RAG & multi-agent automation)
*   [macai](https://github.com/Renset/macai) (macOS client for Ollama, ChatGPT, and other compatible API back-ends)
*   [Olpaka](https://github.com/Otacon/olpaka) (User-friendly Flutter Web App for Ollama)
*   [OllamaSpring](https://github.com/CrazyNeil/OllamaSpring) (Ollama Client for macOS)
*   [LLocal.in](https://github.com/kartikm7/llocal) (Easy to use Electron Desktop Client for Ollama)
*   [AiLama](https://github.com/zeyoyt/ailama) (A Discord User App that allows you to interact with Ollama anywhere in discord )
*   [Ollama with Google Mesop](https://github.com/rapidarchitect/ollama_mesop/) (Mesop Chat Client implementation with Ollama)
*   [Painting Droid](https://github.com/mateuszmigas/painting-droid) (Painting app with AI integrations)
*   [Kerlig AI](https://www.kerlig.com/) (AI writing assistant for macOS)
*   [AI Studio](https://github.com/MindWorkAI/AI-Studio)
*   [Sidellama](https://github.com/gyopak/sidellama) (browser-based LLM client)
*   [LLMStack](https://github.com/trypromptly/LLMStack) (No-code multi-agent framework to build LLM agents and workflows)
*   [BoltAI for Mac](https://boltai.com) (AI Chat Client for Mac)
*   [Harbor](https://github.com/av/harbor) (Containerized LLM Toolkit with Ollama as default backend)
*   [Go-CREW](https://www.jonathanhecl.com/go-crew/) (Powerful Offline RAG in Golang)
*   [PartCAD](https://github.com/openvmp/partcad/) (CAD model generation with OpenSCAD and CadQuery)
*   [Ollama4j Web UI](https://github.com/ollama4j/ollama4j-web-ui) - Java-based Web UI for Ollama built with Vaadin, Spring Boot and Ollama4j
*   [PyOllaMx](https://github.com/kspviswa/pyOllaMx) - macOS application capable of chatting with both Ollama and Apple MLX models.
*   [Claude Dev](https://github.com/saoudrizwan/claude-dev) - VSCode extension for multi-file/whole-repo coding
*   [Cherry Studio](https://github.com/kangfenmao/cherry-studio) (Desktop client with Ollama support)
*   [ConfiChat](https://github.com/1runeberg/confichat) (Lightweight, standalone, multi-platform, and privacy focused LLM chat interface with optional encryption)
*   [Archyve](https://github.com/nickthecook/archyve) (RAG-enabling document library)
*   [crewAI with Mesop](https://github.com/rapidarchitect/ollama-crew-mesop) (Mesop Web Interface to run crewAI with Ollama)

For mobile UI, you can explore these resources.
*   [Enchanted](https://github.com/AugustDev/enchanted)
*   [Maid](https://github.com/Mobile-Artificial-Intelligence/maid)
*   [ConfiChat](https://github.com/1runeberg/confichat) (Lightweight, standalone, multi-platform, and privacy focused LLM chat interface with optional encryption)

## Question: If I want to use all these Ollama models via Jupyter Notebook then what to do?
There are dozens of libraries which integrate ollama models. You can pip install and use these libraries in your python code. Some of these popular libraries are:
*   [LangChain](https://python.langchain.com/docs/integrations/llms/ollama) and [LangChain.js](https://js.langchain.com/docs/modules/model_io/models/llms/integrations/ollama) with [example](https://js.langchain.com/docs/use_cases/question_answering/local_retrieval_qa)
*   [Firebase Genkit](https://firebase.google.com/docs/genkit/plugins/ollama)
*   [crewAI](https://github.com/crewAIInc/crewAI)
*   [LangChainGo](https://github.com/tmc/langchaingo/) with [example](https://github.com/tmc/langchaingo/tree/main/examples/ollama-completion-example)
*   [LangChain4j](https://github.com/langchain4j/langchain4j) with [example](https://github.com/langchain4j/langchain4j-examples/tree/main/ollama-examples/src/main/java)
*   [LangChainRust](https://github.com/Abraxas-365/langchain-rust) with [example](https://github.com/Abraxas-365/langchain-rust/blob/main/examples/llm_ollama.rs)
*   [LlamaIndex](https://gpt-index.readthedocs.io/en/stable/examples/llm/ollama.html)
*   [LiteLLM](https://github.com/BerriAI/litellm)
*   [OllamaFarm for Go](https://github.com/presbrey/ollamafarm)
*   [OllamaSharp for .NET](https://github.com/awaescher/OllamaSharp)
*   [Ollama for Ruby](https://github.com/gbaptista/ollama-ai)
*   [Ollama-rs for Rust](https://github.com/pepperoni21/ollama-rs)
*   [Ollama-hpp for C++](https://github.com/jmont-dev/ollama-hpp)
*   [Ollama4j for Java](https://github.com/ollama4j/ollama4j)
*   [ModelFusion Typescript Library](https://modelfusion.dev/integration/model-provider/ollama)
*   [OllamaKit for Swift](https://github.com/kevinhermawan/OllamaKit)
*   [Ollama for Dart](https://github.com/breitburg/dart-ollama)
*   [Ollama for Laravel](https://github.com/cloudstudio/ollama-laravel)
*   [LangChainDart](https://github.com/davidmigloz/langchain_dart)
*   [Semantic Kernel - Python](https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/connectors/ai/ollama)
*   [Haystack](https://github.com/deepset-ai/haystack-integrations/blob/main/integrations/ollama.md)
*   [Elixir LangChain](https://github.com/brainlid/langchain)
*   [Ollama for R - rollama](https://github.com/JBGruber/rollama)
*   [Ollama for R - ollama-r](https://github.com/hauselin/ollama-r)
*   [Ollama-ex for Elixir](https://github.com/lebrunel/ollama-ex)
*   [Ollama Connector for SAP ABAP](https://github.com/b-tocs/abap_btocs_ollama)
*   [Testcontainers](https://testcontainers.com/modules/ollama/)
*   [Portkey](https://portkey.ai/docs/welcome/integration-guides/ollama)
*   [PromptingTools.jl](https://github.com/svilupp/PromptingTools.jl) with an [example](https://svilupp.github.io/PromptingTools.jl/dev/examples/working_with_ollama)
*   [LlamaScript](https://github.com/Project-Llama/llamascript)
*   [Gollm](https://docs.gollm.co/examples/ollama-example)
*   [Ollamaclient for Golang](https://github.com/xyproto/ollamaclient)
*   [High-level function abstraction in Go](https://gitlab.com/tozd/go/fun)
*   [Ollama PHP](https://github.com/ArdaGnsrn/ollama-php)
*   [Agents-Flex for Java](https://github.com/agents-flex/agents-flex) with [example](https://github.com/agents-flex/agents-flex/tree/main/agents-flex-llm/agents-flex-llm-ollama/src/test/java/com/agentsflex/llm/ollama)

## Question: Does Ollama have plugins like github copilot? Can I use those from my visual code?
Yes, there are many plugins like that for different purpose apart from coding. Even for the coding there are dozens of plugin available with different capabilities. And you need not to pay for these plugins like you have to pay monthly to Micorosoft! Some of those plugins are :

*   [Llama Coder](https://github.com/ex3ndr/llama-coder) (Copilot alternative using Ollama)
*   [Ollama Copilot](https://github.com/bernardo-bruning/ollama-copilot) (Proxy that allows you to use ollama as a copilot like Github copilot)
*   [Copilot for Obsidian plugin](https://github.com/logancyang/obsidian-copilot)
*   [Raycast extension](https://github.com/MassimilianoPasquini97/raycast_ollama)
*   [Discollama](https://github.com/mxyng/discollama) (Discord bot inside the Ollama discord channel)
*   [Continue](https://github.com/continuedev/continue)
*   [Obsidian Ollama plugin](https://github.com/hinterdupfinger/obsidian-ollama)
*   [Logseq Ollama plugin](https://github.com/omagdy7/ollama-logseq)
*   [NotesOllama](https://github.com/andersrex/notesollama) (Apple Notes Ollama plugin)
*   [Dagger Chatbot](https://github.com/samalba/dagger-chatbot)
*   [Discord AI Bot](https://github.com/mekb-turtle/discord-ai-bot)
*   [Ollama Telegram Bot](https://github.com/ruecat/ollama-telegram)
*   [Hass Ollama Conversation](https://github.com/ej52/hass-ollama-conversation)
*   [Rivet plugin](https://github.com/abrenneke/rivet-plugin-ollama)
*   [Obsidian BMO Chatbot plugin](https://github.com/longy2k/obsidian-bmo-chatbot)
*   [Cliobot](https://github.com/herval/cliobot) (Telegram bot with Ollama support)
*   [Obsidian Local GPT plugin](https://github.com/pfrankov/obsidian-local-gpt)
*   [Open Interpreter](https://docs.openinterpreter.com/language-model-setup/local-models/ollama)
*   [twinny](https://github.com/rjmacarthy/twinny) (Copilot and Copilot chat alternative using Ollama)
*   [Wingman-AI](https://github.com/RussellCanfield/wingman-ai) (Copilot code and chat alternative using Ollama and Hugging Face)
*   [Page Assist](https://github.com/n4ze3m/page-assist) (Chrome Extension)
*   [Plasmoid Ollama Control](https://github.com/imoize/plasmoid-ollamacontrol) (KDE Plasma extension that allows you to quickly manage/control Ollama model)
*   [AI Telegram Bot](https://github.com/tusharhero/aitelegrambot) (Telegram bot using Ollama in backend)
*   [AI ST Completion](https://github.com/yaroslavyaroslav/OpenAI-sublime-text) (Sublime Text 4 AI assistant plugin with Ollama support)
*   [Discord-Ollama Chat Bot](https://github.com/kevinthedang/discord-ollama) (Generalized TypeScript Discord Bot w/ Tuning Documentation)
*   [Discord AI chat/moderation bot](https://github.com/rapmd73/Companion) Chat/moderation bot written in python. Uses Ollama to create personalities.
*   [Headless Ollama](https://github.com/nischalj10/headless-ollama) (Scripts to automatically install ollama client & models on any OS for apps that depends on ollama server)
*   [vnc-lm](https://github.com/jk011ru/vnc-lm) (A containerized Discord bot with support for attachments and web links)
*   [LSP-AI](https://github.com/SilasMarvin/lsp-ai) (Open-source language server for AI-powered functionality)
*   [QodeAssist](https://github.com/Palm1r/QodeAssist) (AI-powered coding assistant plugin for Qt Creator)
*   [Obsidian Quiz Generator plugin](https://github.com/ECuiDev/obsidian-quiz-generator)

## Question: What kind of software are LM Studio or Ollama?

Their role is to facilitate easy use of these models by providing a platform that supports multiple models, offering features like local deployment, training, and experimentation without needing to deal with the complex setup each model requires.

They are platform or interface for LLM: Both Ollama and LM Studio are software tools that allow users to interact with, run, fine-tune, and experiment with multiple large language models. They are more like model management tools or LLM execution environments rather than models themselves.

They are Model Hub: These tools serve as hubs where you can load, execute, and work with a variety of pre-trained LLMs. Instead of being limited to one specific model like GPT-4, they allow users to work with models like LLaMA, GPT-3, GPT-4, and others.

They are Model Runners: Since they enable the running and execution of multiple models.

They are LLM Execution/Management Tools: They manage various models and allow you to deploy them.

You can think of them as infrastructure that abstracts away the complexities of working with different LLMs.

## Question: What is LM Studio and how different it is from Ollama?

**Ollama** is designed for ease of use and running pre-trained models locally, perfect for developers and non-technical users who prioritize simplicity, privacy, and API-based integration. 
**LM Studio** is a research-oriented tool for AI engineers and researchers who need in-depth control over model fine-tuning, training, and experimentation, with a steeper learning curve but greater flexibility.

Here's a detailed comparison of **Ollama** and **LM Studio** in terms of their capabilities:

| **Feature/Capability**           | **Ollama**                                               | **LM Studio**                                             |
|----------------------------------|----------------------------------------------------------|-----------------------------------------------------------|
| **Primary Purpose**              | Run and manage multiple  LLMs locally                     | Research, experimentation, fine-tuning, and training of LLMs |
| **Supported Models**             | LLaMA, GPT-3, GPT-4, and other popular LLMs               | LLaMA, GPT, custom LLMs, and more, with a focus on fine-tuning |
| **Local Model Execution**        | Supports running models locally without cloud dependencies | Allows for local execution, including training and experimentation |
| **Model Fine-tuning/Training**   | No, typically runs pre-trained models                     | Yes, built for fine-tuning LLMs on custom datasets         |
| **Experimentation Tools**        | Minimal experimentation features, more focused on simple deployment | Extensive tools for experimenting with models, datasets, and hyperparameters |
| **Ease of Use**                  | Simple, user-friendly interface for non-technical users   | More advanced, with a steeper learning curve but richer in functionality for researchers |
| **Hardware Requirements**        | Optimized for running on GPUs or CPUs locally             | Requires higher-end hardware (GPUs) for fine-tuning and training |
| **Privacy**                      | Strong privacy due to local model execution               | Supports local execution for privacy, but also scales to cloud-based setups |
| **API Integration**              | Yes, offers APIs to integrate LLMs into custom applications | Primarily a standalone platform, with some ability for integration into workflows |
| **Cloud Integration**            | Primarily local execution; not designed for cloud-based workflows | Supports both local and cloud-based training environments, useful for large-scale training |
| **Model Deployment**             | Can be deployed locally or integrated via API into applications | Typically used for experimentation, research, and training, with some deployment capabilities |
| **Pre-Trained Models**           | Easy access to pre-trained models (LLaMA, GPT, etc.)      | Access to a variety of pre-trained models (hugging face and others), with emphasis on customization and fine-tuning |
| **Target Audience**              | Developers, non-technical users who want easy local LLM access | AI researchers, developers, engineers who require deeper control and experimentation |
| **Community & Support**          | Developer-focused community                               | Strong research community with contributions from AI developers |

### Key Capabilities of **Ollama**:
1. **Run LLMs Locally**: Focuses on running pre-trained models such as GPT-3, GPT-4, and LLaMA on your local machine without requiring cloud dependencies.
2. **Simple Setup**: Aimed at developers and non-technical users who want easy access to LLMs.
3. **Privacy & Security**: Since models run locally, no data is sent to external servers, enhancing privacy.
4. **API Integration**: Provides APIs to integrate models into applications, making it useful for local deployment.
5. **Resource Optimization**: Automatically manages local system resources, including CPU and GPU, to run models efficiently.

### Key Capabilities of **LM Studio**:
1. **Fine-Tuning LLMs**: Supports fine-tuning pre-trained LLMs on custom datasets, ideal for research and development.
2. **Model Training**: Enables the training of LLMs from scratch or with specific hyperparameter configurations.
3. **Advanced Experimentation**: Provides tools to run experiments, tweak models, and monitor results for research purposes.
4. **Customizable Infrastructure**: Gives more control over hardware resources and configuration, allowing for scaling on cloud or local machines.
5. **Open-Source Platform**: Built for researchers, it has a rich ecosystem of community-driven features and tools.

## Question: What are different formats to save model, specifically LLMs?
Large language models (LLMs) can be stored in various formats, each suited for different purposes and platforms. 
These formats cater to different needs, from interoperability between frameworks (ONNX) to specific hardware optimizations (OpenVINO, TensorFlow Lite). The choice of format depends on the specific requirements of the deployment environment and the tools being used.

Here are some common model formats used for LLMs:

### **1. PyTorch (`.pt`, `.pth`)**
- **Description**: Files with `.pt` or `.pth` extensions are commonly used to store PyTorch models. These files contain the model's weights and architecture.
- **Usage**: Typically used with PyTorch frameworks for loading and running models.
- **Example**: Models saved using `torch.save(model.state_dict(), 'model.pth')`.

### **2. TensorFlow (`.pb`, `.h5`, `.tf`)**
- **Description**: TensorFlow models can be saved in multiple formats:
  - **`.pb` (Protocol Buffers)**: Used for saving the complete model, including weights and architecture.
  - **`.h5` (HDF5)**: Used for saving models in Keras (which is a high-level API for TensorFlow).
  - **`.tf`**: Used for saving TensorFlow models in the SavedModel format.
- **Usage**: Used with TensorFlow for model deployment and inference.
- **Example**: Models saved using `model.save('model.h5')` or `tf.saved_model.save(model, 'saved_model')`.

### **3. ONNX (`.onnx`)**
- **Description**: Open Neural Network Exchange (ONNX) is a format for representing deep learning models. It allows interoperability between different deep learning frameworks.
- **Usage**: Enables models trained in one framework (like PyTorch) to be used in another (like TensorFlow).
- **Example**: Models converted to ONNX using `torch.onnx.export(model, inputs, 'model.onnx')`.

### **4. OpenVINO (`.bin`, `.xml`)**
- **Description**: OpenVINO uses `.bin` and `.xml` files to represent optimized models for Intel hardware.
- **Usage**: Provides acceleration for inference on Intel devices.
- **Example**: Models optimized with OpenVINO are stored in `.xml` (model structure) and `.bin` (weights) files.

### **5. GGUF (`.gguf`)**
- **Description**: Generalized Graph Universal Format (GGUF) is a format used by Meta for storing LLaMA models. It provides a standardized way to store and share large language models.
- **Usage**: <font color=green>Specifically designed for LLaMA models but can be used more broadly for LLMs.</font>
- **Example**: Models saved in GGUF format will have the `.gguf` file extension.

### **6. SavedModel (`SavedModel`)**
- **Description**: TensorFlow's SavedModel format includes a directory with serialized model weights, graph definitions, and metadata.
- **Usage**: TensorFlow's recommended format for serving models in production.
- **Example**: SavedModel format directory includes files like `saved_model.pb` and a variables directory.

### **7. Core ML (`.mlmodel`)**
- **Description**: Apple's Core ML format is used for deploying models on iOS, macOS, watchOS, and tvOS.
- **Usage**: Used for integrating machine learning models into Apple applications.
- **Example**: Models converted to Core ML using tools like `coremltools`.

### **8. TensorFlow Lite (`.tflite`)**
- **Description**: A format for deploying TensorFlow models on mobile and edge devices. It provides a smaller, more efficient representation of the model.
- **Usage**: Optimized for mobile and embedded devices.
- **Example**: Models converted to TensorFlow Lite format using `tf.lite.TFLiteConverter`.

### **9. Hugging Face (`.bin`, `config.json`, `tokenizer.json`)**
- **Description**: Hugging Face models typically use `.bin` files for weights and JSON files for configuration and tokenizers. This format is often associated with the Transformers library.
- **Usage**: Used with Hugging Face’s Transformers library for loading and fine-tuning models.
- **Example**: Models from Hugging Face's model hub include `.bin` files for weights and configuration files.

### **10. Hugging Face (`.safetensors`)**
- **Description**: SafeTensors (developed recently by hugging face) is a format developed for safely and efficiently storing tensor data, particularly for large language models. It aims to provide secure and consistent handling of model weights.
- **Usage**: Designed to improve safety and integrity in model storage by addressing issues related to file corruption and ensuring the integrity of the model data. It's increasingly used in machine learning and AI communities for its security benefits.
- **Key Features**:
  - **Safety**: Ensures data integrity and helps prevent corruption.
  - **Efficiency**: Optimized for storage and retrieval of large model weights.
  - **Compatibility**: Designed to be used with various frameworks and tools that support tensor-based models.

### Summary of Model Formats Including SafeTensors:
1. **PyTorch (`.pt`, `.pth`)**
2. **TensorFlow (`.pb`, `.h5`, `.tf`)**
3. **ONNX (`.onnx`)**
4. **Hugging Face (`.bin`, `config.json`, `tokenizer.json`)**
5. **GGUF (`.gguf`)**
6. **SavedModel (`SavedModel`)**
7. **Core ML (`.mlmodel`)**
8. **TensorFlow Lite (`.tflite`)**
9. **OpenVINO (`.bin`, `.xml`)**
10. **SafeTensors (`.safetensors`)**

## Question: What is gguf model extention?
The **GGUF** (Generalized Graph Universal Format) is designed to provide a standardized format for storing and sharing large language models. It aims to facilitate the interoperability of models across different platforms and tools. GGUF is particularly associated with Meta’s LLaMA (Large Language Model Meta AI) series of models. It is used for representing the weights and configurations of these models in a way that can be easily loaded and utilized across different environments.

GGUF format aims:
- **Standardization**: GGUF aims to standardize how model data is stored and exchanged, making it easier to work with LLaMA models and potentially other models that adopt this format.
- **Efficiency**: The format is designed to efficiently handle the large size of modern language models, ensuring that models can be loaded and processed quickly.

## Question: If I have finetuned my models using clouds like aws sagemaker, vertexai, azure and kept there then can I use them inside my ollama and LM Studio?

Yes, we can use them 

**Method 1: API integration**   
- Obtain the endpoint URL and API key from cloud platform (Vertex/AWS/Azure) ML.
- Prepare your environment for making HTTP requests.
- Send requests to the API endpoint using tools like Python’s requests library.
- Integrate the API calls into LM Studio or other tools.
- Test and validate the integration to ensure it functions correctly.

**Method 2: Model conversion and export**   
Export Models: Export models from the cloud services in formats compatible with Ollama (e.g., ONNX, TensorFlow SavedModel). This might involve  transferring the model files. Import into Ollama: If Ollama supports these formats, you can then import the models into Ollama’s environment.


## References
- https://ollama.com
- https://github.com/ollama/ollama
