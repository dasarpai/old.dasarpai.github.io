---
mathjax: true
id: 6087
title: What is LLM
date: 2023-08-18
permalink: '/dsblog/what-is-llm'
tags: [LLM, GPT, BERT, Machine Learning, NLP]
categories:


header:
    teaser: /assets/images/dspost/dsp6087-What-is-LLM.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---


![What is LLM]( /assets/images/dspost/dsp6087-What-is-LLM.jpg)

# What is Large Language Model

## Introduction
LLM stands for **Large Language Model**. It is a type of artificial intelligence (AI) model that is trained on a massive dataset of text and code. This allows LLMs to learn the statistical relationships between words and phrases, and to generate text that is similar to the text that they were trained on.

LLMs are still under development, but they have already been shown to be capable of performing a wide variety of tasks:

* **Natural language understanding:** LLMs can understand the meaning of text, summarise it, and translate it to other languages.
* **Natural language generation:** LLMs can generate text, translate languages, and write different kinds of creative content.
* **Coding:** LLMs can write and understand code.
* **Commonsense reasoning:** LLMs can reason about the world and answer questions about hypothetical situations.
* **Conversational AI and chatbots**
* **Classification and categorization**
* **Sentiment analysis**

LLMs are a powerful tool that can be used for a variety of tasks. They are still under development, but they have the potential to revolutionize the way we interact with computers.

## What is LLM Model?
Large Language Models are a broader concept that encompasses various architectures and approaches for building models that can understand and generate human language text. These models are trained on massive amounts of text data to learn the statistical patterns, grammar, semantics, and context of language. They are capable of tasks like text completion, language translation, question answering, summarization, and more.

There is no clear definition or size limit when a model is called a large language model. It depends on the context and the comparison with other models. For example, some models that were considered large a few years ago may be considered small or medium today, as new models with more parameters and data are developed.

Important parameters that can be used to tell whether a model is LLM or not.
- The number of parameters: This is the number of weights or variables that the model can learn and adjust during training. The more parameters, the more complex and expressive the model can be, but also the more computationally expensive and prone to overfitting. For example, LSTM has about 100 million parameters, GRU has about 50 million parameters, ByteNet has about 200 million parameters, Switch Transformer has about 1.6 billion parameters, and GShard has about 600 billion parameters.
- The number of layers: This is the number of processing units or modules that the model has. Each layer can perform a different function or operation on the input or output data. The more layers, the more hierarchical and abstract the model can be, but also the more difficult to train and optimize. For example, LSTM has 4 layers, GRU has 3 layers, ByteNet has 15 layers for each sub-network, Switch Transformer has 24 layers for each expert*, and GShard has 28 layers for each expert*.
- The amount of data: This is the amount of text data that the model is trained on. The more data, the more diverse and generalizable the model can be, but also the more noisy and biased the data may be. For example, LSTM and GRU are trained on Wikipedia articles, ByteNet is trained on WMT datasets for machine translation, Switch Transformer is trained on C4 dataset for natural language understanding, and GShard is trained on WMT’14 En-De dataset for machine translation.

**Expert:** An expert is a person who has special skill or knowledge in a particular field or area of study. An expert is a neural network module that can process a subset of the input data and produce an output. Each expert has a different attention pattern or head configuration, which means that it can focus on different aspects of the input data. For example, one expert may pay more attention to the syntax of the input, while another expert may pay more attention to the semantics. **Encoder expert** can process a subset of the source tokens and produce an output vector for each token. **Decoder expert** can process a subset of the target tokens and produce an output vector for each token. The output vectors are then combined by a routing network to form the final decoder output. **Attention expert** can perform a different type of attention, such as self-attention, cross-attention, or global attention, on a subset of the input or output tokens. The output vectors are then combined by a routing network to form the final attention output.

According to the paper **GShard: Scaling Giant Models with Conditional Computation and Automatic Sharding**, the number of experts that GShard supports depends on the number of shards and the number of experts per shard. The paper reports experiments with different configurations of these parameters, such as:

- 8 shards, each with 64 experts, for a total of 512 experts.
- 128 shards, each with 64 experts, for a total of 8192 experts.
- 256 shards, each with 256 experts, for a total of 65536 experts.


Gopher (280B)
 Jurassic-1 (178B)

## What is the difference between LLM and Transformer Model
LLM model can be built either using Transformer Architecture or non-Tranformer architecture. When we use huge data to train a model then whatever model is output from the training process that is called LLM. When we are training a Transformer or any other neural network model only small amount of data then output model is not called LLM. LLM can work upon Text, Images, Video, Audio. Some LLMs can accept only text data for example GPT3, some can accept only with image data, some can accpet different kind of data i.e. text, image, audio for example GPT4. Some LLM takes text input and generate text output. Some LLM takes text input generate image output for example DALL-E.

## Examples of Transformer Based LLM
Transformer architecture is highly parallelizable and can capture long-range dependencies in text, making it effective for tasks like machine translation, text generation, and more

Model Name | Company Name | Parameters | Year of release | Model Capabilities
--- | --- | --- | --- | ---
LaMDA | Google | 1.6 billion | 2021 | Conversational AI
Turing NLG 17B | NVIDIA and Microsoft Research | 17 billion | 2020 | Natural Language Generation
Megatron NLG 530B (MT-NLG) | NVIDIA and Microsoft Research | 530 billion | 2021 | Natural Language Generation
Bard (BART) | Facebook AI Research (FAIR) and University College London (UCL) researchers. | 406 million | 2019 | Summarization, Translation, Question Answering
RoBERTa (Robustly Optimized BERT Pretraining Approach) | Facebook AI Research (FAIR), University of Washington and New York University. | 355 million | 2019 | Natural Language Understanding
ALBERT (A Lite BERT) | Google Research Team. | 12 million | 2019 | Natural Language Understanding
ELECTRA (Efficiently Learning an Encoder that Classifies Token Replacements Accurately) | Google Research Team. | 110 million | 2020 | Natural Language Understanding
FaluBert (Falu Language Model) | Falu AI team. | 24 million | 2020 | Chinese language understanding
Gopher (Go Programming language HelpER) model | OpenAI team. | 125 million | 2020 | Code generation for Go programming language
CodeBERT (Code BERT) model | Microsoft Research Asia team. | 400 million | 2020 | Code generation for multiple programming languages
Chinchilla model | OpenAI team. | 350 million | 2020 | Multilingual contextual representations
DialogGPT | DialogGPT | 345 million | 2019 | Open-domain conversational agent

## Example of Pathway Based LLM
* **PaLM:** Developed by Google AI, PaLM is a large language model with 540 billion parameters. It is designed to be informative and comprehensive, and it can be used for a variety of tasks, including natural language understanding, natural language generation, and machine translation.

## Examples of RNN Based LLM
The transformer architecture is the most common architecture for LLMs, but it is not the only one. Other architectures can also be used to create LLMs, and they may have different strengths and weaknesses.

* **Meena:** This is a conversational neural language model that is developed by Google AI. It is trained on a massive dataset of text and code, and it can engage in open-ended dialogue. Meena is not based on the transformer architecture, but it uses a different neural network architecture called the recurrent neural network (RNN). It has 1.37 billion parameters and can be used to generate different creative text formats, like poems, code, scripts, musical pieces, email, letters, etc.

* **Seq2Seq:** This is a sequence-to-sequence model that is used for machine translation. It is not based on the transformer architecture, but it uses a different neural network architecture called the recurrent neural network (RNN).

## What are the advantages of LLMs?
- Extensibility and adaptability. LLMs can serve as a foundation for customized use cases. Additional training on top of an LLM can create a finely tuned model for an organization's specific needs.
- Flexibility. One LLM can be used for many different tasks and deployments across organizations, users and applications.
- Performance. Modern LLMs are typically high-performing, with the ability to generate rapid, low-latency responses.
- Accuracy. As the number of parameters and the volume of trained data grow in an LLM, the transformer model is able to deliver increasing levels of accuracy.
- Ease of training. Many LLMs are trained on unlabeled data, which helps to accelerate the training process.

## What are the challenges and limitations of LLM?

- Development costs. To run, LLMs generally require large quantities of expensive graphics processing unit hardware and massive data sets.
- Operational costs. After the training and development period, the cost of operating an LLM for the host organization can be very high.
- Bias. A risk with any AI trained on unlabeled data is bias, as it's not always clear that known bias has been removed.
- Explainability. The ability to explain how an LLM was able to generate a specific result is not easy or obvious for users.
- Hallucination. AI hallucination occurs when an LLM provides an inaccurate response that is not based on trained data.
- Complexity. With billions of parameters, modern LLMs are exceptionally complicated technologies that can be particularly complex to troubleshoot.
- Glitch tokens. Maliciously designed prompts that cause an LLM to malfunction, known as glitch tokens, are part of an emerging trend since 2022.

## What are different types of LLM?
As of 2023 the common types are the following.

- Zero-shot model: This is a large, generalized model trained on a generic corpus of data that is able to give a fairly accurate result for general use cases, without the need for additional training. GPT-3 is often considered a zero-shot model.
- One-shot model: Fine-tuned on domain-specific data with one sample. 
- Few-shot model: Fine-tuned on domain-specific data with less than 100 samples. Additional training on top of a zero-shot model like GPT-3 can lead to a fine-tuned models.
- Language representation model. One example of a language representation model is Bidirectional Encoder Representations from Transformers (BERT), which makes use of deep learning and transformers well suited for NLP.
- Multimodal model. Originally LLMs were specifically tuned just for text, but with the multimodal approach it is possible to handle both text and images. GPT4 is multimoda modell.

## What is PaLM?

PaLM stands for Pathways Language Model. It is a large language model (LLM) developed by Google AI. PaLM has 540 billion parameters, making it one of the largest LLMs in the world.

There are four different PaLM models:

* **Gecko:** This is the smallest PaLM model, with 140 billion parameters. It is designed for use on mobile devices and embedded systems.
[Image of Gecko PaLM LLM model]
* **Otter:** This model has 280 billion parameters and is designed for use on laptops and desktops.
[Image of Otter PaLM LLM model]
* **Bison:** This is the largest PaLM model, with 540 billion parameters. It is designed for use on high-performance computing clusters.
[Image of Bison PaLM LLM model]
* **Unicorn:** This model is still under development, but it is expected to have 1.1 trillion parameters. It will be the largest PaLM model ever created.
[Image of Unicorn PaLM LLM model]

PaLM is trained on a massive dataset of text and code, including books, articles, code repositories, and websites. This allows PaLM to perform a wide variety of tasks, including:

* Natural language understanding: PaLM can understand the meaning of text and translate languages.
* Natural language generation: PaLM can generate text, translate languages, and write different kinds of creative content.
* Coding: PaLM can write and understand code.
* Commonsense reasoning: PaLM can reason about the world and answer questions about hypothetical situations.

PaLM is still under development, but it has the potential to revolutionize the way we interact with computers. It could be used to create new applications for education, healthcare, and customer service. It could also be used to develop new AI-powered tools that help us to be more productive and creative.

## What is GPT3?
There are many different versions of the GPT-3 model, each with a different number of parameters and capabilities. Here are some of the most notable versions:

* **GPT-3-small:** This is the smallest version of GPT-3, with 125 million parameters. It is designed for simple tasks and is relatively inexpensive to use.
* **GPT-3-medium:** This version has 1.3 billion parameters and is capable of more complex tasks. It is still relatively inexpensive to use.
* **GPT-3-large:** This version has 175 billion parameters and is the most powerful version of GPT-3. It is also the most expensive to use.
* **GPT-3-XL:** This version has 1.3 trillion parameters and is even more powerful than the GPT-3-large model. It is still under development, but it is expected to be released in the near future.

The size of the GPT-3 models is measured in parameters. A parameter is a variable that is used to learn the relationship between inputs and outputs in a machine learning model. The more parameters a model has, the more complex the relationships it can learn.

The size of the GPT-3 models has increased over time as the technology has improved. The first version of GPT-3, released in 2020, had only 125 million parameters. The most recent version, GPT-3-XL, has 1.3 trillion parameters.

The size of the GPT-3 models has also had an impact on their capabilities. The larger models are capable of performing more complex tasks and generating more realistic text. However, they are also more expensive to use and require more computing power.

The different versions of the GPT-3 model are designed for different purposes. The smaller models are best suited for simple tasks, such as generating text or translating languages. The larger models are best suited for more complex tasks, such as writing creative content or answering questions in an informative way.

The GPT-3 models are a powerful tool that can be used for a variety of tasks. They are still under development, but they have the potential to revolutionize the way we interact with computers.

## What is GPT4?
There are two main versions of the GPT-4 model:

* **GPT-4 (8,192 tokens)**: This is the standard version of GPT-4. It has 175 billion parameters and can process text prompts up to 8,192 tokens long.
[Image of GPT-4 (8,192 tokens) language model]
* **GPT-4 (32,768 tokens)**: This is the extended version of GPT-4. It has 1.3 trillion parameters and can process text prompts up to 32,768 tokens long.
[Image of GPT-4 (32,768 tokens) language model]

The main difference between the two versions is the context length. The context length is the length of the prompt plus the maximum number of tokens in the completion. The GPT-4 (8,192 tokens) model can only process prompts that are up to 8,192 tokens long, while the GPT-4 (32,768 tokens) model can process prompts that are up to 32,768 tokens long.

The GPT-4 models are still under development, but they have already been shown to be capable of performing a wide variety of tasks, including:

* Natural language understanding: GPT-4 can understand the meaning of text and translate languages.
* Natural language generation: GPT-4 can generate text, translate languages, and write different kinds of creative content.
* Coding: GPT-4 can write and understand code.
* Commonsense reasoning: GPT-4 can reason about the world and answer questions about hypothetical situations.

The GPT-4 models are a significant step forward in the development of large language models. They are more powerful and versatile than previous models, and they have the potential to revolutionize the way we interact with computers.

## What kind of hardware (CPU, GPU, RAM) is needed to train LLM?

The hardware requirements for inference with the GPT-3 Large model (175 billion parameters) are:

* **CPU:** A minimum of 16 cores is recommended, but more cores will provide better performance.
* **GPU:** A minimum of 16 GB of VRAM is required, but more VRAM will provide better performance.
* **RAM:** A minimum of 32 GB of RAM is required, but more RAM will provide better performance.

It is also important to have a fast storage system, such as an SSD, to store the model and the data that is being processed.

Here are some specific examples of hardware that you could use for inference with the GPT-3 Large model:

* **CPU:** A server with 16 or more cores, such as the Intel Xeon Silver 4210 or the AMD EPYC 7571.
* **GPU:** A GPU with 16 GB of VRAM, such as the NVIDIA T4 or the AMD Radeon Pro VII.
* **RAM:** 32 GB of RAM.
* **Storage:** A fast SSD, such as the Samsung 980 Pro or the Western Digital SN850.

It is important to note that these are just the minimum requirements for inference with the GPT-3 Large model. If you want to achieve the best possible performance, you will need to use more powerful hardware.

## Hardware for Inference from LLM

Unfortunately, you cannot use the GPT-3 Medium model for inference without a GPU machine. The GPT-3 Medium model requires a minimum of 8 GB of VRAM, which is not available on most CPUs.

There are a few ways to get around this limitation. One way is to use a cloud computing service that provides GPU instances. For example, Google Cloud Platform offers a variety of GPU instances that you can use to run the GPT-3 Medium model.

Another way to get around this limitation is to use a smaller model. The GPT-3 Small model only requires 125 million parameters and can be run on a CPU machine. However, the GPT-3 Small model is not as powerful as the GPT-3 Medium model and cannot be used for the same tasks.

If you are looking for a way to use the GPT-3 Medium model without a GPU machine, your best option is to use a cloud computing service. This will allow you to get the performance you need without having to invest in a new machine.

## What is the Need of VRAM for LLM?
VRAM stands for Video Random Access Memory. It is a type of memory that is used by graphics cards to store the data that is needed to render images on a display. VRAM is much faster than regular RAM, which is why it is used for graphics processing.

VRAM stores the image data that is being displayed on the screen, as well as the data that is being processed by the GPU. This data includes things like textures, shaders, and geometry. VRAM also stores the results of the GPU's calculations, which are then displayed on the screen.

The amount of VRAM that a graphics card has determines how much data it can store and process at once. This is important for games and other applications that require a lot of graphics processing. A graphics card with more VRAM will be able to handle more demanding applications without slowing down.

The amount of VRAM that you need depends on the type of games and applications that you want to use. For most games, 4GB of VRAM is sufficient. However, some more demanding games may require 6GB or more of VRAM. If you are a serious gamer or you want to use applications that require a lot of graphics processing, you should consider getting a graphics card with 8GB or more of VRAM.

Here are some of the benefits of using VRAM:

* **Faster rendering:** VRAM is much faster than regular RAM, which means that graphics cards can render images much faster. This results in smoother gameplay and better graphics quality.
* **More memory:** VRAM can store more data than regular RAM, which allows graphics cards to process more complex models and textures. This is important for games and applications that require a lot of graphics processing.
* **Less lag:** VRAM can reduce lag by storing the data that is needed to render images on the GPU. This means that the CPU does not have to access the slower main memory as often, which can improve performance.

Here are some of the drawbacks of using VRAM:

* **More expensive:** VRAM is more expensive than regular RAM. This is because it is a specialized type of memory that is designed for graphics processing.
* **Less accessible:** VRAM is not as accessible as regular RAM. This is because it is located on the graphics card, which is a separate component from the motherboard.
* **More power-hungry:** VRAM is more power-hungry than regular RAM. This is because it is a faster type of memory.

Overall, VRAM is an important part of a graphics card. It allows graphics cards to render images faster and smoother, and it can reduce lag. However, VRAM is more expensive and less accessible than regular RAM.

## Can I use Virtual Memory in place of VRAM?
No. **Virtual memory is a technique** that allows each virtual machine to have its own dedicated memory space, even if there is not having enough physical RAM on the host machine. **Virtual RAM is a portion of the hard drive** that is used as temporary memory for virtual machines. 

Virtual Memory or Vritual RAM is a technique that allows computers to use more memory than they actually have. This is done by using a portion of the hard drive as temporary memory. When the computer needs more memory than it has, it can swap data between the hard drive and the RAM.

Virtual RAM is also known as **paging** or **virtual memory**. It is a feature of most operating systems, including Windows, macOS, and Linux.

Virtual RAM is used to improve performance by allowing computers to run more programs at once. It can also be used to prevent programs from crashing when they run out of memory.

There are a few drawbacks to using virtual RAM. First, it can slow down the computer, especially if the hard drive is slow. Second, it can shorten the lifespan of the hard drive, because it is constantly being written to. Third, it can consume more power.

Overall, virtual RAM is a useful technique that can improve the performance of computers. However, it is important to be aware of the drawbacks before using it.

Here are some of the benefits of using virtual RAM:

* **Allows computers to run more programs at once:** Virtual RAM allows computers to run more programs at once by expanding the amount of available memory. This can be helpful for users who like to multitask or who have a lot of programs open at the same time.
* **Prevents programs from crashing:** Virtual RAM can help to prevent programs from crashing by providing a temporary space for data when the computer runs out of physical RAM. This can be helpful for users who are running memory-intensive programs or who have a lot of programs open at the same time.
* **Improves performance:** Virtual RAM can improve the performance of computers by reducing the amount of time that the CPU has to wait for data to be loaded from the hard drive. This can be helpful for users who are running multiple programs or who are playing games.

Here are some of the drawbacks of using virtual RAM:

* **Slows down the computer:** Virtual RAM can slow down the computer, especially if the hard drive is slow. This is because the data that is stored in virtual RAM has to be swapped back and forth between the hard drive and the RAM.
* **Shortens the lifespan of the hard drive:** Virtual RAM can shorten the lifespan of the hard drive, because it is constantly being written to. This is because the data that is stored in virtual RAM has to be written to the hard drive every time it is changed.
* **Consumes more power:** Virtual RAM can consume more power than physical RAM. This is because the hard drive has to be accessed more often when virtual RAM is used.

Overall, virtual RAM is a useful technique that can improve the performance of computers. However, it cannot be used in place of VRAM.