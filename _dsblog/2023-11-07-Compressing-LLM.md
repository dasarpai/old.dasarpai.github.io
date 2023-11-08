---
mathjax: true
id: 6099
title: Compressing Large Language Model
date: 2023-11-07
permalink: /dsblog/compressing-llm
tags: [LLM, Large Language Model, Model Compressing]
categories:
header:
    teaser: /assets/images/dspost/dsp6099-Compressing-LLM.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Compressing Large Language Model](/assets/images/dspost/dsp6099-Compressing-LLM.jpg)

# Compressing Large Language Model
## Why to compress an LLM?
Large Language Models have a large number of parameters, which contributes to their performance but also makes them resource-intensive. Creating them takes lots of time and resources but using them is not any easy. Inferencing from LLM is also resource intensive. Compressing these models is an area of research, and various techniques can be used to reduce the number of parameters while retaining reasonable performance. Below I enumerating some popular methods for model compression. Each compressing technique has its own complexity and produces a different final model, prediction results of each techniques is different.

## Widely Used Compression Techniques

- Knowledge Distillation: Knowledge distillation is a technique where a smaller model, often called a **"student model,"** is trained to mimic the behavior of a larger model, the "teacher model." By transferring the knowledge from the teacher model to the student model, you can create a smaller and more efficient model with fewer parameters.

- Pruning: Pruning involves identifying and **removing less important connections** or neurons in the neural network. This reduces the model's size while maintaining performance. Pruning can be done during or after training.

- Quantization: Quantization **reduces the precision** of the model's weights and activations. For example, you can convert 32-bit floating-point values to 16-bit or 8-bit fixed-point values, which results in a smaller model. There might be some loss of accuracy, but it can often be mitigated with fine-tuning.

- Model Architectural Changes: Redesigning the architecture of the model to use **fewer layers, smaller hidden dimensions,** or other architectural modifications can result in a more compact model. This may involve a trade-off between model size and performance.

- Knowledge Pruning: This technique focuses on removing parts of the model that are **less relevant to a specific task**, thus creating a task-specific model. By removing certain layers or modules, you can reduce the model's size while maintaining task performance.

- Parameter Sharing: **Sharing parameters across** different parts of the model can significantly reduce the number of parameters. Techniques like weight tying and weight sharing can be used for this purpose.

- Factorization: Factorization techniques represent **weight matrices in a factorized form**, reducing the number of parameters while maintaining expressiveness. One of the popular method in factorization is LoRA (Low Rank Adaptation).

- Sparse Models: Sparse models are designed with a **subset of parameters that are actively used** for each example. This can be achieved using techniques like structured sparsity or sparse attention patterns in attention-based models.

## Conclusion
The choice of compression technique depends on the specific requirements of our application, the desired model size, and the acceptable trade-offs in terms of model performance. It's common to experiment with a combination of these methods to achieve the best balance between model size and functionality for our particular use case.
