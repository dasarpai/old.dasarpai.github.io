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

## GEM 
GEM (Generation, Evaluation, and Metrics) is a benchmark environment for Natural Language Generation with a focus on its Evaluation, both through human annotations and automated Metrics. Measure NLG progress across 13 datasets spanning many NLG tasks and languages.

https://gem-benchmark.com/

## MLM (masked language modeling)

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

## Metrics

### MRR 
MRR stands for "Mean Reciprocal Rank," and it is a metric commonly used in information retrieval and evaluation tasks, including those in natural language processing (NLP). MRR is used to assess the effectiveness of ranking algorithms or systems in presenting relevant information to users. MRR is often applied to tasks such as question answering, search engines, and recommendation systems. A higher MRR indicates that relevant results tend to appear higher in the ranked lists, which suggests better user experience.

Step1: Ranking of Results: Imagine you have a system that retrieves a list of possible answers or documents in response to a user's query or question. These results are usually ranked based on their perceived relevance to the query.

Step2: Reciprocal Rank: For each query or question, the reciprocal rank of the first correct (relevant) result in the ranked list is calculated as 1 divided by the position of that correct result. If the correct result is the second item, the reciprocal rank would be 1/2; if it's the fifth, the reciprocal rank would be 1/5, and so on.

Step3: Mean Reciprocal Rank (MRR): To calculate the MRR, you take the average of the reciprocal ranks across all queries or questions in your evaluation dataset. The formula for MRR is:

MRR = (1/N) * ∑(1/rank_i)

N is the total number of queries or questions.   
rank_i is the position of the correct result for the i-th query.

### MAP 
MAP stands for "Mean Average Precision". MAP focuses on evaluating the effectiveness of ranking algorithms or systems

Step1: Ranking of Results: You have a system that retrieves a ranked list of possible answers or documents in response to a user's query or question.

Step2: Precision and Recall: Precision is the ratio of relevant items retrieved to the total number of items retrieved. Recall is the ratio of relevant items retrieved to the total number of relevant items in the dataset. These two metrics are often in tension with each other; increasing precision might result in lower recall and vice versa.

Step3: Average Precision (AP) for Each Query: For each query or question, you calculate the precision at each position in the ranked list where a relevant item is retrieved. You then calculate the average of these precision values, resulting in the Average Precision (AP) for that query.

Step4: Mean Average Precision (MAP): To calculate the MAP, you take the average of the Average Precision values across all queries or questions in your evaluation dataset. The formula for MAP is:

MAP = (1/N) * ∑(AP_i)   

N is the total number of queries or questions.   
AP_i is the Average Precision for the i-th query. 

### Accuracy: 
The percentage of test samples that are correctly classified.

### Precision: 
The fraction of predicted positive samples that are actually positive.

### Recall: 
The fraction of actual positive samples that are predicted positive.

### F1 score: 
The harmonic mean of precision and recall.

### Hit@1: 
- The percentage of queries for which the correct document is ranked first.
- The percentage of images for which the correct class is in the top k predictions. It is also used in image classification tasks.

### Hit@5: 
The percentage of queries for which the correct document is ranked among the top 5 documents.

### mAP@[IoU thresholds]: 
The mean average precision over a range of intersection over union (IoU) thresholds.

### AUC: 
The area under the receiver operating characteristic curve (ROC curve).

### Log-loss: 
The negative log likelihood of the predicted labels.

### Brier score: 
The mean squared difference between the predicted probabilities and the actual labels.

### Confusion matrix: 
A table that shows the true and predicted labels for each class.

### Root mean squared error (RMSE): 
A measure of the average squared difference between the predicted and actual values.

### Mean absolute error (MAE): 
A measure of the average absolute difference between the predicted and actual values.

### R-squared: 
A measure of the proportion of the variance in the target variable that is explained by the model.

### Cohen's kappa: 
A measure of agreement between two raters, taking into account chance agreement.

### Matthews correlation coefficient (MCC): 
A measure of the accuracy of a binary classifier that takes into account both the true positive rate and the false positive rate.

### Area under the curve (AUC): 
A measure of the performance of a binary classifier at all possible thresholds.

### Precision-recall curve: 
A graphical representation of the precision and recall of a binary classifier at all possible thresholds.

### ROC curve: 
A graphical representation of the true positive rate and the false positive rate of a binary classifier at all possible thresholds.

### Mean squared logarithmic error (MSLE): 
A measure of the average squared difference between the logarithms of the predicted and actual values.

### Mean absolute percentage error (MAPE): 
A measure of the average percentage difference between the predicted and actual values.

### Root mean square logarithmic error (RMSLE): 
A measure of the average squared difference between the logarithms of the predicted and actual values, after taking the square root.

### Normalized discounted cumulative gain (NDCG): 
A measure of the ranking performance of a model.

### Precision at k (P@k): 
The percentage of the top k predictions that are correct.

### Recall at k (R@k): 
The percentage of actual positive samples that are ranked among the top k predictions.

### F1-score at k (F1@k): 
The harmonic mean of precision and recall at k.

### Interpretability: 
A measure of how easy it is to understand and explain the predictions of a model.

### Fairness: 
A measure of how the model treats different groups of people.

### Inception score: 
A measure of the diversity and quality of the generated images by a generative adversarial network (GAN).

### Frechet Inception distance: 
A measure of the similarity between the generated images by a GAN and the real images.

### Wasserstein distance: 
A measure of the distance between the distributions of the generated images and the real images.

### Inception score: 
A measure of the diversity and quality of the generated text by a language model.

### Perplexity: 
A measure of how difficult it is to predict the next word in a sequence.

### BLEU score: 
A measure of the similarity between the generated text and the reference text.

### Intersection over union (IoU): 
A measure of the overlap between two regions. It is typically used in object detection and segmentation tasks.

### Mean average precision (mAP): 
A measure of the average precision over a range of IoU thresholds. It is also used in object detection and segmentation tasks.

### Top-5 error rate: 
The percentage of images for which the correct class is not in the top 5 predictions. It is typically used in image classification tasks.

## EM - Exact Match 
EM used in NLP task evaluation, particularly in tasks like question answering and text generation. The EM metric measures the percentage of predictions that exactly match the ground truth or reference answers.

If the model's answer matches the reference answer word-for-word, then the EM score for that particular instance is 1. If the answers do not match exactly, the EM score is 0. The EM score is then calculated as the ratio of instances where the model's answer matches the reference answer exactly to the total number of instances in the evaluation dataset.

## ROUGE 
ROUGE (Recall-Oriented Understudy for Gisting Evaluation): ROUGE is another metric used for evaluating text summarization and generation tasks. It measures the overlap of n-grams between the generated text and the reference text. [ROUGE More..](/dsblog/ml-tasks-and-model-evaluation#what-is-rouge-score)

## METEOR 
Metric for Evaluation of Translation with Explicit ORdering: METEOR is a metric that combines multiple measures including precision, recall, stemming, and synonymy. It aims to provide a balanced evaluation of machine translation quality.[METEOR More..](/dsblog/ml-tasks-and-model-evaluation#what-is-meteor-score)

## Distance Functions in Machine Learning
Every sample, record, word, sentence, object, image etc in the Machine learning language is called vector. If we want to measure the similarity or dissimilarity between two data points then we need distance function.

The choice of distance function depends on the specific task at hand and the properties of the data. For example, 
- the Euclidean distance is often used for tasks such as classification and regression, 
- the Jaccard distance is often used for tasks such as text classification, 
- the Mahalanobis distance is often used for tasks such as fraud detection.
- the Manhattan distance is often used for tasks such as clustering.

### Euclidean distance: 
This is the most common distance metric. It measures the distance between two points in a Euclidean space.

### Manhattan distance: 
This distance metric measures the distance between two points in a city block. It is also known as the L1 norm.

### Minkowski distance: 
This is a generalization of the Euclidean and Manhattan distances. It is defined by a parameter p, and the value of p determines the type of distance metric. For example, p=1 is the Manhattan distance, p=2 is the Euclidean distance, and p=infinity is the Chebyshev distance.

### Hamming distance: 
This distance metric measures the distance between two binary vectors. It is defined as the number of bits that are different between the two vectors.

### Cosine similarity: 
This distance metric measures the similarity between two vectors. It is defined as the cosine of the angle between the two vectors.

### Jaccard distance: 
This distance metric measures the similarity between two sets. It is defined as the size of the intersection of the two sets divided by the size of the union of the two sets.

### Overlap coefficient: 
This distance metric is similar to the Jaccard distance, but it is normalized to the range [0, 1].

### Sokal-Michener distance: 
This distance metric measures the similarity between two biological sequences. It is defined as the number of shared matches divided by the total number of characters in the two sequences.

### Mahalanobis distance: 
This distance metric is a generalization of the Euclidean distance. It takes into account the covariance of the data points.

### Wasserstein distance: 
This distance metric measures the difference between two probability distributions. It is often used in machine learning tasks such as anomaly detection and clustering.

### Chebyshev distance: 
This distance metric measures the maximum difference between two points. It is defined as the maximum absolute difference between the corresponding coordinates of the two points.

### Canberra distance 
This distance metric is a variation of the Manhattan distance. It is defined as the sum of the absolute differences between the corresponding coordinates of the two points, divided by the sum of the absolute values of the coordinates.

### Kendall tau distance: 
This distance metric measures the difference between the rankings of two items. It is defined as the sum of the number of times the two items are ranked in the opposite order.

### Spearman's rank correlation coefficient: 
This distance metric measures the correlation between the rankings of two items. It is defined as the Pearson correlation coefficient between the ranks of the two items.

### Jensen-Shannon divergence: 
This distance metric measures the difference between two probability distributions. It is defined as the average of the Kullback-Leibler divergences between the two distributions.

## Loss function: 
A function that measures the error between the predicted and actual values. It is used to train the deep learning model.
Regularization: A technique used to prevent the deep learning model from overfitting the training data.
Early stopping: A technique used to stop the training of the deep learning model when it is no longer improving.

