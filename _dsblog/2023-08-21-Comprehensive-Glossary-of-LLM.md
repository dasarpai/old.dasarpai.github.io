---
mathjax: true
id: 6089
title: Comprehensive Glossary of LLM, Deep Learning, NLP, and CV Terminology
date: 2023-08-21
permalink: '/dsblog/Comprehensive-Glossary-of-LLM'
tags: [LLM, Transformer, Encoder, Decoder, Encoder-Decoder, Machine Learning, NLP, Abbreviation]
categories:


header:
    teaser: /assets/images/dspost/dsp6089-Comprehensive-Glossary-of-LLM.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![Comprehensive Glossary of LLM](/assets/images/dspost/dsp6089-Comprehensive-Glossary-of-LLM.jpg)

# Comprehensive Glossary of LLM
I am developing this Glossary slowly at my own pace. Content on this page keep changing. Better definition, better explaination are part of my learing, my evolution and advancement in the field of Deep Learning and Machine Learning. As of Aug'23 the terms are not in any order therefore if you are look for any specific term you can search on the page. When I will have 50+ terms on this page then I will try to sort them on some attribute of these terms.

## See also [Distances in Machine Learning](/dsblog/Distances-in-Machine-Learning)

## See Also [Machine Learning Metrics](/dsblog/Machine-Learning-Metrics)

## Learning Types
**Transfer Learning:** Transfer learning refers to the process of training a model on one task and then transferring its knowledge to a related task. In the context of NLP/Deep Learning, this typically involves training a large language model (LM) on a massive amount of text data using a self-supervised learning approach. Self-supervised learning involves training the model to predict missing words in sentences or other similar tasks without requiring explicit labels for the entire dataset. The result is a model that learns a rich representation of language and its underlying patterns.

Once this pre-training is done, the learned knowledge can be transferred to various downstream tasks by fine-tuning the pre-trained model. Transfer learning is highly effective because it allows the model to leverage the general language understanding it has gained from a diverse range of data. This often results in significant improvements in performance compared to training models from scratch for each specific task.

**Fine-Tuning:** Fine-tuning is the process of taking a pre-trained model, which has already learned general language patterns, and then adapting it to perform well on a specific task. In fine-tuning, the model is further trained on a smaller dataset that is specific to the target task. The idea is to adjust the pre-trained model's parameters to better align with the nuances and characteristics of the task at hand.

Fine-tuning typically involves training the top layers of the pre-trained model while keeping the lower layers, which capture more general language features, frozen. This is because the lower layers have already learned useful representations of language that are likely to be relevant across different tasks.

When you take the foundational model or base model and don't touch most of the weights it has already learned. But you provide some task-specific data, adjust a few weights, or create a new layer and train the weights in the new layer so that this new task can be done. You are not giving any new knowledge to the model. This is called Transfer Learning with finetuning. There are many kinds of transfer learning, for example.

**Pre-trained Models:** These are large neural network models that have been trained on massive amounts of data to learn general language patterns. Examples include GPT-3, BERT, RoBERTa, and more. These models serve as the basis for transfer learning and fine-tuning.

**Downstream Tasks:** These are specific tasks that you want to solve using a pre-trained model's knowledge. Examples of downstream tasks include text classification, named entity recognition, sentiment analysis, question answering, machine translation, etc.

**Feature Extraction:** This refers to using a pre-trained model as a feature extractor, where the model's intermediate layers' outputs are used as features for a downstream task. This avoids fine-tuning the entire model and can be useful when you have limited labeled data for fine-tuning.

**Domain Adaptation:** Domain adaptation focuses on adapting a pre-trained model to perform well on a target domain that might be different from the data it was pre-trained on. This is important when there is a domain shift between the pre-training data and the target task data.

**Data Augmentation:** Data augmentation involves creating new training examples by applying various transformations to the original data, such as adding noise, changing word order, or substituting synonyms. This can help increase the diversity of the training data and improve the model's robustness.

**Multi-Task Learning:** Multi-task learning involves training a model to perform multiple tasks simultaneously. This can help improve the model's generalization abilities by leveraging shared knowledge across tasks.

**Zero-Shot Learning:** Zero-shot learning is a scenario where a pre-trained model can perform a task it has never been explicitly trained on. It can achieve this by using its general language understanding to reason and infer solutions based on provided prompts or instructions.

**One-shot transfer learning:** When you give one sample or one example and ask the model to solve all the problems in a similar way.

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

### What is playground mode in Colab?
Playground mode is essentially just a pre-configured notebook that’s optimized for quick experimentation. Colaboratory sets up a Python environment with a bunch of commonly-used machine learning libraries already installed, including TensorFlow, Scikit-learn, and PyTorch. If somebody shares code with you need not to worry about pip install. Just run the code. Without configuration or pip install, code will run. Nothing can be saved in playground mode. [More...](https://saturncloud.io/blog/what-is-playground-mode-in-googles-colaboratory/)



## Task categories in Text Processing
 - Natural language understanding (NLU)
 - Unconditional generation
 - Conditional generation. 

## GEM 
GEM (Generation, Evaluation, and Metrics) is a benchmark environment for Natural Language Generation with a focus on its Evaluation, both through human annotations and automated Metrics. Measure NLG progress across 13 datasets spanning many NLG tasks and languages.

https://gem-benchmark.com/

## MLM (Masked Language Modeling)

Masked language modeling (MLM) is a type of language modeling task in which some of the tokens in a sequence are masked, and the model is trained to predict the missing tokens. The masked tokens can be randomly selected, or they can be selected based on their importance to the meaning of the sequence.

MLM is a powerful technique for training language models because it forces the model to learn the relationships between words and the context in which they appear. This makes MLM-trained models better at understanding and generating text than models that are not trained on MLM.

MLM is used in a variety of natural language processing tasks, like:
- Machine translation: MLM can be used to train machine translation models that are better at capturing the meaning of the source language text.
- Text summarization: MLM can be used to train text summarization models that are better at extracting the important information from a text.
- Question answering: MLM can be used to train question answering models that are better at understanding the meaning of questions and providing accurate answers.
- Natural language inference: MLM can be used to train natural language inference models that are better at understanding the relationships between sentences.

MLM is a challenging task, but it is a valuable technique for training powerful language models.

Masked language modeling help to improve the accuracy, fluency, diversity, robustness of language models.

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
- More Links
	- https://www.tensorflow.org/datasets/catalog/glue
	- [What is glue benchmark](/dsblog/ml-tasks-and-model-evaluation#what-is-glue-benchmark)

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

## SuperGLUE
The SuperGLUE (Super General Language Understanding Evaluation) benchmark is an enhanced version of the GLUE benchmark introduced to address its limitations and provide more challenging language understanding tasks for evaluating and comparing the performance of natural language processing (NLP) models. SuperGLUE builds upon the success of GLUE and aims to push the boundaries of NLP research further.

- [What is superglue benchmark?](/dsblog/ml-tasks-and-model-evaluation#what-is-superglue-benchmark)

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

## Loss function: 
A function that measures the error between the predicted and actual values. It is used to train the deep learning model.
Regularization: A technique used to prevent the deep learning model from overfitting the training data.
Early stopping: A technique used to stop the training of the deep learning model when it is no longer improving.

## What is Vector search?
Are the characters overlap in the strings between the "search query" and "document text"? You may have even heard technical terms like Hamming distance or Levenshtein distance, these are metrics for describing the similarity (or dissimilarity) of strings. For more complicated datasets, it’s also possible to make use of metrics like these. This is where vector search shines. Regardless of the types of objects we’re searching through, we use “vectors” or “vector embeddings” to convert the data we’re analyzing into simpler representations. Objects may be tabular data, pdf file, text file, image, audio, video, sensor data etc.

## What is Vector Embedding?
Vector embeddings are really just a simplified numerical representation of complex data (news article, email, voice recording, image etc), used to make it easier to run generic machine-learning algorithms on sets of that data. By taking real-world objects and translating them to vector embeddings — numerical representations — those numbers can be fed into machine learning algorithms to determine semantic similarity. For text data we know a very popular embedding called word2vec (from Google), another is GloVe (from MIT) 

## What is pinecone?
[Introduction to Vector Search for Developers](https://www.pinecone.io/learn/vector-search-basics/). Pinecone is a managed vector database that provides vector search (or “similarity search”) for developers with a straightforward API and usage-based pricing. (And it’s free to try.)

## What is [FlowiseAI](https://flowiseai.com/)?
Open source UI visual tool to build your customized LLM flow using LangchainJS, written in Node Typescript/Javascript. Open source is the core of Flowise, and it will always free for commercial and personal usage (as per them).  It supports:
- Language translation using LLM Chain with a Chat Prompt Template and Chat Model
- QnA using conversational retrieval QA chain
- Conversational agent for a chat model which utilize chat specific prompts and buffer memory

npm way to run.

```
npm install -g flowise
nnpx flowise start
```

docker way to create.

```
docker-compose up -d
```

## What is the difference between NLP, NLU and NLG.
When you are processing text for tasks like NER, Sentiment Analysis, and Token Classification you need libraries like Spacy, GloVe, and NLTK. This kind of work is called NLP.


When you need to understand the semantic meaning of the text then NLP doesn't work. For example, you are looking for a sentence "Benefits of the Yoga" in a health-related article and it doesn't have any word "Yoga" there. But, it has a section called "Spiritual Gains of Long Meditation". Based on the similar semantic meaning can we pick up the text under this heading and display it to the user? You need a different technology like NLU. LLM (Large Language Models) are good in this task.


When you need to generate new text or answer of question after analysing then it is much more complicated. You can put some common sense questions like Ram is standing in front of Mohan, Ram takes a left turn, and walks 200 meters. After that, he moved 20 degrees towards the west and walked 50 meters. How far is Ram from Mohan and what direction is his face? You cannot solve this kind of question by NLP or NLU. You need more sophisticated technology to do this work. This is called NLG. LLM models like ChatGPT, GPT4, PaLM, and BARD are good in NLG tasks.

## What is disadvantage of LLM Finetuning?
- On LLM it is very expensive.
- There are many weights and learning doesn't happens enough.
- Semantic search is better than finetuning.
- Finetuning doesn't work for QA task for specific corpus. Rather use semantic search.

## What is Confabulation or Hallucination?
When a model gives an answer that looks logically correct or convincing but is factually wrong, completely cooked-up answer. This is called hallucination. If you don't understand the domain or don't remember the facts there are chances you won't know that model is hallucinating you.

Sometimes the facts given are correct, logic is correct but the model is trying to connect some completely unrelated stuff without knowing that these ideas are completely unrelated. For example, Rabindranath Tagore who got the Nobel Prize for literature had a very good understanding of Vedanta. Kabirdaas was a great saint and his works reflect his deep understanding of Vedanta. Therefore model says Kabirdaas appreciated the work of Rabindranath Tagore. It is confabulation.



