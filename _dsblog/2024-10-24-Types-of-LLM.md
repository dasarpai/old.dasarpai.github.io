---
mathjax: true
id: 6171
title: "Types of Large Language Models (LLM)"
date: 2024-10-24
permalink: /dsblog/Types-of-LLM
tags: ["Generative AI", "Text Generation", "AI Conversation", "Content Creation", "Natural Language Processing"]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6171-Types-of-LLM.jpg
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
keywords: ["LLM", "Types of LLM", "Language Models", "Generative AI", "Text Generation", "AI Conversation", "Natural Language Processing"]
---

![](/assets/images/dspost/dsp6171-Types-of-LLM.jpg)

## **Introduction:**  
The world of Generative AI (GenAI) is expanding at an astonishing rate, with new models emerging almost daily, each sporting unique names, capabilities, versions, and sizes. For AI professionals, keeping track of these models can feel like a full-time job. But for business users, IT professionals, and software developers trying to make the right choice, understanding the model’s name and what it represents can seem overwhelming. Wouldn’t it be helpful if we could decode the meaning behind these names to know if a model fits our needs and is worth the investment? In this article, we’ll break down how the names of GenAI models can reveal clues about their functionality and suitability for specific tasks, helping you make informed decisions with confidence.

Keep in mind you cannot read the entire letter from the envelop. But, from the handwriting, address from, address to, paper of envelop, weight of envelop speaks a lots. Sometimes envelop can confuse and for that purpose reading is the only choice, but most of the time you would know whether you should read it or handover it to someone else, as you are too busy to read all the letters.

There are indeed several variants of large language models (LLMs), each tailored for specific tasks or user interactions. Each variant serves its unique purpose, making LLMs adaptable across various domains, from customer service to creative arts and technical industries. 

## **Instruct Models (Instruction-following models)**  
   - **Purpose:** These models are trained to follow instructions and produce concise, specific responses to queries.
   - **Example Models:** OpenAI's GPT-4-turbo with instruct settings, Google’s T5.
   - **Example Use Case:** A project manager inputs “Generate a weekly report summary for the team based on last week’s meeting notes.” The model returns a structured report based on the prompt. They can be used for 
        - Task automation, 
        - Question answering, 
        - Writing assistance, 
        - Code generation, and 
        - Instruction-based prompts.

## **Chat Models**  
   - **Purpose:** Designed for interactive dialogue, these models manage conversational turns, retain context, and respond coherently across exchanges.
   - **Example Models:** OpenAI's ChatGPT, Anthropic’s Claude, Google’s Bard.
   - **Example Use Case:** A healthcare chatbot discusses symptoms with patients and schedules appointments, holding context and providing personalized responses. These models can be used for creating
        - Customer support bots, 
        - Personal assistants, 
        - Tutoring bots, and 
        - Interactive Q&A.

## **Code Models**  
   - **Purpose:** Code models are tuned to understand, generate, and refactor code, aiding programming tasks.
   - **Example Models:** OpenAI's Codex, GitHub Copilot, Meta’s CodeLLaMA.
   - **Example Use Case:** A developer asks, “How do I implement a binary search algorithm?” The model generates code with comments explaining each step. They can be used for 
        - Code completion, 
        - Code debugging, 
        - Documentation generation, and 
        - Code refactoring.

## **Vision Models**  
   - **Purpose:** Vision models integrate text and image processing, interpreting and linking visual content with textual input.
   - **Example Models:** OpenAI’s GPT-4 with vision, Google’s Bard with image capabilities, DeepMind’s Flamingo.
   - **Example Use Case:** An e-commerce assistant identifies products in customer-uploaded photos, suggesting similar items from the catalog. These models can be used for 
        - Image captioning, 
        - Object recognition, 
        - Multi-modal content generation, and 
        - Visual Q&A.

## **Embedding Models**  
   - **Purpose:** Optimized to transform text into embeddings, these models facilitate similarity searches and semantic comparisons.
   - **Example Models:** OpenAI’s Ada embeddings, Google’s Universal Sentence Encoder, Cohere’s embeddings.
   - **Example Use Case:**  These models can be used for 
        - Semantic search, 
        - Recommendation engines, 
        - Clustering, and 
        - Information retrieval.

## **Multimodal Models**  
   - **Purpose:** Capable of processing multiple data types, these models handle text, images, audio, and sometimes video for more comprehensive responses.
   - **Example Models:** Meta’s ImageBind, OpenAI’s GPT-4 with multimodal capabilities.
   - **Example Use Case:** A smart assistant in augmented reality uses visual and text input to explain objects, overlaying instructions and tips in real-time. These models can be used for
        - Complex queries involving text and images, 
        - Virtual assistants that can process sensory data, and 
        - Interactive educational tools.

## **Fine-Tuned Specialized Models**  
   - **Purpose:** Tailored for specific domains like medical, legal, or scientific fields, these models handle specialized knowledge and terminology.
   - **Example Models:** Legal-BERT, BioBERT, BloombergGPT.
   - **Example Use Case:** A legal assistant uses the model to quickly analyze case law, retrieving relevant information and saving manual review time. A fined tuned model can be used for
        - Legal document summarization, 
        - Medical diagnosis support, and 
        - Scientific literature analysis.

## **Summarization Models**  
   - **Purpose:** These models distill key information from long texts into concise summaries while retaining essential meanings.
   - **Example Models:** OpenAI’s GPT-3.5/4 with summarization settings, Hugging Face’s BART, Pegasus.
   - **Example Use Case:** A journalist summarizes a 20-page report into a brief article, capturing key findings and statistics. These models can be used by professionals for
        - Summarizing articles, 
        - Generating abstracts, 
        - Creating meeting notes, and 
        - Summarizing legal or technical documents.

## **Generative Art Models**  
   - **Purpose:** Focused on creative outputs like stories, poetry, and dialogue, these models support artistic endeavors.
   - **Example Models:** ChatGPT in creative mode, Google’s LaMDA, character AI for roleplay.
   - **Example Use Case:** An author co-writes a fantasy novel with the model, generating dialogues and descriptive passages based on story arcs. A use can perform following tasks with these kinds of models
        - Storytelling, 
        - Poetry generation, 
        - Creative writing support, and 
        - Interactive fiction.

## Model Naming Convention
There is no standard around the model convention but model repository maintainer names these model in such a way that it is easy to identify. Thus the model name contains.
- Creator (organization/individual)
- Architecture (like GPT, Llama, Bard, gemma etc)
- Capability (code, instruction, vision, language, english, multi-modal, etc.)
- Model version (1,2,3 etc.)
- Model size (1B, 3B, 7B, 11B, 70B, 504B etc.)

## Example of GenAI Models
Below are some example of GenAI models. Now, you can read one at and time and figure out who made them, what modality they serve, what are their capabilities and what performance you expect from that model.

- core42/jais-13b
- core42/jais-13b-chat
- elyza/ELYZA-japanese-Llama-2-13b
- elyza/ELYZA-japanese-Llama-2-13b-instruct
- elyza/ELYZA-japanese-Llama-2-7b
- elyza/ELYZA-japanese-Llama-2-7b-instruct
- google/codegemma-1.1-2b
- google/codegemma-1.1-7b-it 
- google/codegemma-2b 
- google/codegemma-7b 
- google/gemma-1.1-7b-it
- google/gemma-2b
- google/gemma-2b-it
- google/gemma-7b
- meta-llama/Llama-3.2-11B-Vision
- meta-llama/Llama-3.2-11B-Vision-Instruct
- meta-llama/Llama-3.2-1B
- meta-llama/Llama-3.2-1B-Instruct
- meta-llama/Llama-3.2-3B
- meta-llama/Llama-3.2-3B-Instruct
- meta-llama/Llama-3.2-90B-Vision
- meta-llama/Llama-3.2-90B-Vision-Instruct
- meta-llama/Meta-Llama-3-70B
- meta-llama/Meta-Llama-3-70B-Instruct
- meta-llama/Meta-Llama-3-8B
- meta-llama/Meta-Llama-3-8B-Instruct
- meta-llama/Meta-Llama-3.1-405B-FP8
- meta-llama/Meta-Llama-3.1-405B-Instruct-FP8
- meta-llama/Meta-Llama-3.1-70B
- meta-llama/Meta-Llama-3.1-70B-Instruct
- meta-llama/Meta-Llama-3.1-8B
- meta-llama/Meta-Llama-3.1-8B-Instruct
- microsoft/Phi-3-vision-128k-instruct
- microsoft/Phi-3-mini-128k-instruct
- microsoft/Phi-3-mini-4k-instruct
- microsoft/Phi-3-mini-4k-instruct-gguf-fp16
- microsoft/Phi-3-mini-4k-instruct-gguf-q4
- mistralai/Mixtral-8x7B-v0.1
- mistralai/Mistral-7B-Instruct-v0.3
- Mistral-7B-Instruct-v0.2
- Mistral-7B-v0.1
- Mistral-7B-Instruct-v0.1
- tiiuae/falcon-7b
- falcon-40b-instruct
- phi-2
- CodeLlama-34b-Instruct-hf
- CodeLlama-13b-Instruct-hf
- CodeLlama-7b-Instruct-hf
- Mixtral-8x7B-Instruct-v0.1


**Conclusion:**  
Decoding the names of GenAI models equips us with insights that go beyond surface-level branding. By understanding what each component of a model's name represents—its purpose, generation, size, and intended use—you can make better decisions aligned with your goals, whether you’re an AI expert or a newcomer. As the GenAI field continues to grow, being able to interpret these model names will remain a valuable skill, allowing you to stay ahead and choose the right tools to drive success in your projects.