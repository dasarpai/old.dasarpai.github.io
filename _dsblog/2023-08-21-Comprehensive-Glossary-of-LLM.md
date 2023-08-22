---
mathjax: true
id: 6089
title: Comprehensive Glossary of LLM, Deep Learning, NLP, and CV Terminology
date: 2023-08-21
permalink: '/dsblog/Comprehensive-Glossary-of-LLM'
tags: [LLM, Transformer, Encoder, Decoder, Encoder-Decoder, Machine Learning, NLP]
categories:


header:
    teaser: /assets/images/dspost/dsp6089-Comprehensive-Glossary-of-LLM.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Comprehensive Glossary of LLM](/assets/images/dspost/dsp6089-Comprehensive-Glossary-of-LLM.jpg)

# Comprehensive Glossary of LLM
I am developing this Glossary slowly at my own pace. Content on this page keep changing. Better definition, better explaination are part of my learing, my evolution and advancement in the field of Deep Learning and Machine Learning. As of Aug'23 the terms are not in any order therefore if you are look for any specific term you can search on the page. When I will have 50+ terms on this page then I will try to sort them on some attribute of these terms.

## Learning Types
**Transfer Learning:** Transfer learning refers to the process of training a model on one task and then transferring its knowledge to a related task. In the context of NLP/Deep Learning, this typically involves training a large language model (LM) on a massive amount of text data using a self-supervised learning approach. Self-supervised learning involves training the model to predict missing words in sentences or other similar tasks without requiring explicit labels for the entire dataset. The result is a model that learns a rich representation of language and its underlying patterns.

Once this pre-training is done, the learned knowledge can be transferred to various downstream tasks by fine-tuning the pre-trained model. Transfer learning is highly effective because it allows the model to leverage the general language understanding it has gained from a diverse range of data. This often results in significant improvements in performance compared to training models from scratch for each specific task.

**Fine-Tuning:** Fine-tuning is the process of taking a pre-trained model, which has already learned general language patterns, and then adapting it to perform well on a specific task. In fine-tuning, the model is further trained on a smaller dataset that is specific to the target task. The idea is to adjust the pre-trained model's parameters to better align with the nuances and characteristics of the task at hand.

Fine-tuning typically involves training the top layers of the pre-trained model while keeping the lower layers, which capture more general language features, frozen. This is because the lower layers have already learned useful representations of language that are likely to be relevant across different tasks.


**Pre-trained Models:** These are large neural network models that have been trained on massive amounts of data to learn general language patterns. Examples include GPT-3, BERT, RoBERTa, and more. These models serve as the basis for transfer learning and fine-tuning.

**Downstream Tasks:** These are specific tasks that you want to solve using a pre-trained model's knowledge. Examples of downstream tasks include text classification, named entity recognition, sentiment analysis, question answering, machine translation, etc.

**Feature Extraction:** This refers to using a pre-trained model as a feature extractor, where the model's intermediate layers' outputs are used as features for a downstream task. This avoids fine-tuning the entire model and can be useful when you have limited labeled data for fine-tuning.

**Domain Adaptation:** Domain adaptation focuses on adapting a pre-trained model to perform well on a target domain that might be different from the data it was pre-trained on. This is important when there is a domain shift between the pre-training data and the target task data.

**Data Augmentation:** Data augmentation involves creating new training examples by applying various transformations to the original data, such as adding noise, changing word order, or substituting synonyms. This can help increase the diversity of the training data and improve the model's robustness.

**Multi-Task Learning:** Multi-task learning involves training a model to perform multiple tasks simultaneously. This can help improve the model's generalization abilities by leveraging shared knowledge across tasks.

**Zero-Shot Learning:** Zero-shot learning is a scenario where a pre-trained model can perform a task it has never been explicitly trained on. It can achieve this by using its general language understanding to reason and infer solutions based on provided prompts or instructions.

**Few-Shot Learning:** Few-shot learning extends zero-shot learning by allowing the model to see a small number of examples (few shots) from a new task before making predictions. This approach is useful when you have limited task-specific labeled data.

**Unsupervised Learning:** Unsupervised learning involves training a model on data without explicit labels. Pre-training a language model using self-supervised learning falls under this category, where the model learns from the inherent structure of the data.

**Semi-Supervised Learning:** This refers to training a model using a combination of labeled and unlabeled data. Pre-trained models can also benefit from this approach when fine-tuning on smaller labeled datasets.

**Supervised Learning:** In this learning machine learns the patters from the given data samples (X) and their predefined lables (y).

## Transformers

**Tokenization:** A process of breaking a sentence or bigger words into smaller words. Generally 750 words = 1000 tokens.
Sentence: "I love reading philosophyical literature"
Tokesn: I, love, read,ing, phil, osop, hyic, al , lite, ratu, re

**Token Encoding:** A process of assigning unique number to each token. If a word "pick" has come 5 times in a sentence and this word is encoded as 2075 then in the sentence this word will be replaced by 2075 at 5 place. Encoding is created for the token and not for the word.
Sentence: "I love reading philosophyical literature"
Tokesn: I, love, read, ing, phil, osop, hyic, al , lite, ratu, re
Encoding: 1001, 2005, 2230, 1, etc. As many tokens than many encoding. We get these numbers by assigning a unique number to unique words in the corpus.  

**Word Embedding:**	Fixed number vector of each token. Word embedding can be a 50 or 100, 200, 300 dimensional vectors. Higher the dimension better the words are represented but more time it take to learn the embedding. And more time it need to process this during the model training, down streaming task (finetuning), inferencing. Irrespetive of the context of the word embedding remains same. Keep in mind ideally these are token embedding.

**Position Embedding:** Embedding of position, which a token has in sentence. For each position corresponding position vector is generated. This is important because position of word in a sentence changes the meaning. "Dancing girl is here", "Girl is dancing here" does not have the same meaning. Without capturing the postion of a word we cannot understand the context of the word.

**Contxtual Embedding:** This is generated by combining word embedding + position embedding and then using self attention. Two sentences ""Dancing girl is here", "Girl is dancing here", girl word has come two time. Word embedding for both is the same. But, contextual embedding of the same word will be different and it depends upon the context it is used in.

**Encoder:** When we are interested in predicting middle token from surrounding tokens, this is called encoding. It is a kind of Transformer. BERT transformer is Encoder transformer.	

**Decoder:** When we want to predicting next word from previous words, this is called decoding. It is a kind of Transformer. GPT transformer is Decoder transformer.	

**Encoder-Decoder:** When we want to predicting corresponding word in language 2 from a parallel sentence in language 1. This is called encoding-decoing. This is also cal sequence2sequence or seq2seq task. This kind of transformer is called encoder-decoder transformer.
	