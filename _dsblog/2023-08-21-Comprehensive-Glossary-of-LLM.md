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

## Embedding in Transformer 

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

### Architecture Types of Transformer
**Encoder:** When we are interested in predicting middle token from surrounding tokens, this is called encoding. Models of this architectures are called autoencoding models. BERT transformer is Encoder transformer.	

**Decoder:** When we want to predicting next word from previous words, this is called decoding. Models of this architecture are called autogressive models. GPT transformer is Decoder transformer.	

**Encoder-Decoder:** When we want to predicting corresponding word in language 2 from a parallel sentence in language 1. This is called encoding-decoing. This is also called sequence2sequence or seq2seq task. This kind of transformer is called encoder-decoder transformer. T5 transformer is Encoder-Decoder Model.

## AI Experiments

**What is playground mode in Colab?:** Playground mode is essentially just a pre-configured notebook that’s optimized for quick experimentation. Colaboratory sets up a Python environment with a bunch of commonly-used machine learning libraries already installed, including TensorFlow, Scikit-learn, and PyTorch. If somebody shares code with you need not to worry about pip install. Just run the code. Without configuration or pip install, code will run. Nothing can be saved in playground mode. [More...](https://saturncloud.io/blog/what-is-playground-mode-in-googles-colaboratory/)



## Task categories in Text Processing
 - Natural language understanding (NLU)
 - Unconditional generation
 - Conditional generation. 

## GLUE

### What is GLUE?
General Language Understanding Evaluation (GLUE) benchmark is a collection of resources for training, evaluating, and analyzing natural language understanding systems.

- It is a benchmark of nine tasks 
- Each task has corresponding dataset.
- Dataset and task both are known by the same name.
= These are sentence or sentence-pair language understanding tasks 
- It is built on established existing datasets and selected to cover a diverse range of dataset sizes, text genres, and degrees of difficulty.
- A diagnostic dataset **designed to evaluate and analyze model performance** with respect to a wide range of linguistic phenomena found in natural language
- A **public leaderboard for tracking performance** on the benchmark and a dashboard for visualizing the performance of models on the diagnostic set.

### NLP Tasks Types and NLP Tasks in GLUE
- Single-sentence tasks like CoLA and SST-2
- Similarity and paraphrasing tasks like MRPC, STS-B and QQP
- Natural language inference tasks MNLI, QNLI, RTE and WNLI

### GLUE Single Sentence Tasks

#### CoLA 
This is single sentence NLP task. CoLA or Corpus of Linguistic Acceptability. The corresponding dataset consists of English acceptability judgments drawn from books and journal articles on linguistic theory. The goal of the CoLA task is to assess a model's ability to determine whether a given sentence is grammatically and semantically correct or not. Given a sentence, the task is to predict whether the sentence is linguistically acceptable or if it contains grammatical errors or awkward phrasing that makes it unacceptable. Evaluation Metrics: "Matthews correlation coefficient". It's value range between -1 to 1.

#### SST2
This is single sentence NLP task. SST-2 The Stanford Sentiment Treebank. The corresponding dataset consists of sentences from movie reviews and human annotations of their sentiment. The task is to predict the sentiment of a given sentence.Evaluation Metrics:  Accuracy.

### GLUE Similarity and Paraphrase Tasks

#### MRPC 
The Microsoft Research Paraphrase Corpus [Dolan2005]. A corpus of sentence pairs automatically extracted from online news sources, with human annotations for whether the sentences in the pair are semantically equivalent. Evaluation Metrics:: Accuracy and F1.

#### QQP 
QQP The Quora Question Pairs.  It is a collection of question pairs from the community question-answering website Quora. The task is to determine whether a pair of questions are semantically equivalent. It is a paraphrasing task. Evaluation Metrics:: Accuracy and F1.

#### STS-B 
The Semantic Textual Similarity [Cer2017] dataset is a collection of sentence pairs drawn from news headlines, video and image captions, and natural language inference data. Each pair is human-annotated with a similarity score from 1 to 5. Evaluation Metrics: Pearson and Spearman correlation coefficients.

### Inference Tasks

#### MNLI 
The Multi-Genre Natural Language Inference Corpus [Williams2018]. A crowdsourced collection of sentence pairs with textual entailment annotations. Given a premise sentence and a hypothesis sentence, the task is to predict whether the premise entails the hypothesis (entailment), contradicts the hypothesis (contradiction), or neither (neutral).  The premise sentences are gathered from ten different sources, including transcribed speech, fiction, and government reports. Evaluation Metrics: Matched, Unmatched Accuracy.

#### QNLI 
The Question-Answering Natural Language Inference Dataset [Rajpurkar2016].  It consists of question-paragraph pair. Where one of the sentences in the paragraph (drawn from Wikipedia) contains the answer to the corresponding question (written by an annotator). The task is to determine whether the context sentence contains the answer to the question.Evaluation Metrics: Accuracy.

#### RTE 
The Recognizing Textual Entailment (RTE) dataset come from a series of annual textual entailment challenges. Two classes are entailment, not_entailment. Evaluation Metrics: Accuracy.    
RTE1 [Dagan2006], RTE2 [Bar2006], RTE3 [Giampiccolo2007], and RTE5 [Bentivogli2009]. 

#### WNLI 
The Winograd Schema Challenge [Levesque2011] is a reading comprehension task in which a system must read a sentence with a pronoun and select the referent of that pronoun from a list of choices. The examples are manually constructed to foil simple statistical methods: Each one is contingent on contextual information provided by a single word or phrase in the sentence. Evaluation Metrics: Accuracy.

## NLP Tasks Based on Granularity
- Coarse-Grained Categories 
	- Lexical Semantics 
	- Predicate-Argument Structure
	- Logic 
	- Knowledge
- Fine-Grained Categories
	- Lexical Entailment, Morphological Negation, Factivity, Symmetry/Collectivity, Redundancy, Named Entities, Quantifiers
	- Core Arguments, Prepositional Phrases, Ellipsis/Implicits, Anaphora/Coreference Active/Passive, Nominalization, Genitives/Partitives, Datives, Relative Clauses,
	Coordination Scope, Intersectivity, Restrictivity
	- Negation, Double Negation, Intervals/Numbers, Conjunction, Disjunction, Conditionals, Universal, - Existential, Temporal, Upward Monotone, Downward Monotone, Non-Monotone
	- Common Sense, World Knowledge

## What is BIG-Bench?
BIG-Bench is a collaborative benchmark intended to probe large language models and extrapolate their future capabilities. It is a diverse evaluation suite that focuses on tasks believed to be beyond the capabilities of current language models. [214 tasks](https://dasarpai.com/dsblog/nlp-tasks#214-nlp-tasks-from-big-benchmark) included in BIG-bench are summarized by keyword.