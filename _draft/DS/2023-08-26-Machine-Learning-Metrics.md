---
mathjax: true
id: 6092
title: Machine Learning Metrics
date: 2023-08-21
permalink: '/dsblog/Machine-Learning-Metrics'
tags: [Machine Learning, NLP, ML Metrics, Model Evaluation, Abbreviation]
categories:


header:
    teaser: /assets/images/dspost/dsp6092-Machine-Learning-Metrics.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Comprehensive Glossary of LLM](/assets/images/dspost/dsp6092-Machine-Learning-Metrics.jpg)

# Machine Learning Metrics

## MRR 
MRR stands for "Mean Reciprocal Rank," and it is a metric commonly used in information retrieval and evaluation tasks, including those in natural language processing (NLP). MRR is used to assess the effectiveness of ranking algorithms or systems in presenting relevant information to users. MRR is often applied to tasks such as question answering, search engines, and recommendation systems. A higher MRR indicates that relevant results tend to appear higher in the ranked lists, which suggests better user experience.

Step1: Ranking of Results: Imagine you have a system that retrieves a list of possible answers or documents in response to a user's query or question. These results are usually ranked based on their perceived relevance to the query.

Step2: Reciprocal Rank: For each query or question, the reciprocal rank of the first correct (relevant) result in the ranked list is calculated as 1 divided by the position of that correct result. If the correct result is the second item, the reciprocal rank would be 1/2; if it's the fifth, the reciprocal rank would be 1/5, and so on.

Step3: Mean Reciprocal Rank (MRR): To calculate the MRR, you take the average of the reciprocal ranks across all queries or questions in your evaluation dataset. The formula for MRR is:

MRR = (1/N) * ∑(1/rank_i)

N is the total number of queries or questions.   
rank_i is the position of the correct result for the i-th query.

## MAP 
MAP stands for "Mean Average Precision". MAP focuses on evaluating the effectiveness of ranking algorithms or systems

Step1: Ranking of Results: You have a system that retrieves a ranked list of possible answers or documents in response to a user's query or question.

Step2: Precision and Recall: Precision is the ratio of relevant items retrieved to the total number of items retrieved. Recall is the ratio of relevant items retrieved to the total number of relevant items in the dataset. These two metrics are often in tension with each other; increasing precision might result in lower recall and vice versa.

Step3: Average Precision (AP) for Each Query: For each query or question, you calculate the precision at each position in the ranked list where a relevant item is retrieved. You then calculate the average of these precision values, resulting in the Average Precision (AP) for that query.

Step4: Mean Average Precision (MAP): To calculate the MAP, you take the average of the Average Precision values across all queries or questions in your evaluation dataset. The formula for MAP is:

MAP = (1/N) * ∑(AP_i)   

N is the total number of queries or questions.   
AP_i is the Average Precision for the i-th query. 

## Accuracy: 
The percentage of test samples that are correctly classified.

## Precision: 
The fraction of predicted positive samples that are actually positive.

## Recall: 
The fraction of actual positive samples that are predicted positive.

## F1 score: 
The harmonic mean of precision and recall.

## Hit@1: 
- The percentage of queries for which the correct document is ranked first.
- The percentage of images for which the correct class is in the top k predictions. It is also used in image classification tasks.

## Hit@5: 
The percentage of queries for which the correct document is ranked among the top 5 documents.

## mAP@[IoU thresholds]: 
The mean average precision over a range of intersection over union (IoU) thresholds.

## AUC: 
The area under the receiver operating characteristic curve (ROC curve).

## Log-loss: 
The negative log likelihood of the predicted labels.

## Brier score: 
The mean squared difference between the predicted probabilities and the actual labels.

## Confusion matrix: 
A table that shows the true and predicted labels for each class.

## Root mean squared error (RMSE): 
A measure of the average squared difference between the predicted and actual values.

## Mean absolute error (MAE): 
A measure of the average absolute difference between the predicted and actual values.

## R-squared: 
A measure of the proportion of the variance in the target variable that is explained by the model.

## Cohen's kappa: 
A measure of agreement between two raters, taking into account chance agreement.

## Matthews correlation coefficient (MCC): 
A measure of the accuracy of a binary classifier that takes into account both the true positive rate and the false positive rate.

## Area under the curve (AUC): 
A measure of the performance of a binary classifier at all possible thresholds.

## Precision-recall curve: 
A graphical representation of the precision and recall of a binary classifier at all possible thresholds.

## ROC curve: 
A graphical representation of the true positive rate and the false positive rate of a binary classifier at all possible thresholds.

## Mean squared logarithmic error (MSLE): 
A measure of the average squared difference between the logarithms of the predicted and actual values.

## Mean absolute percentage error (MAPE): 
A measure of the average percentage difference between the predicted and actual values.

## Root mean square logarithmic error (RMSLE): 
A measure of the average squared difference between the logarithms of the predicted and actual values, after taking the square root.

## Normalized discounted cumulative gain (NDCG): 
A measure of the ranking performance of a model.

## Precision at k (P@k): 
The percentage of the top k predictions that are correct.

## Recall at k (R@k): 
The percentage of actual positive samples that are ranked among the top k predictions.

## F1-score at k (F1@k): 
The harmonic mean of precision and recall at k.

## Interpretability: 
A measure of how easy it is to understand and explain the predictions of a model.

## Fairness: 
A measure of how the model treats different groups of people.

## Inception score: 
A measure of the diversity and quality of the generated images by a generative adversarial network (GAN).

## Frechet Inception distance: 
A measure of the similarity between the generated images by a GAN and the real images.

## Wasserstein distance: 
A measure of the distance between the distributions of the generated images and the real images.

## Inception score: 
A measure of the diversity and quality of the generated text by a language model.

## Perplexity: 
A measure of how difficult it is to predict the next word in a sequence.

## BLEU score: 
A measure of the similarity between the generated text and the reference text.
[BLEU More..](/dsblog/ml-tasks-and-model-evaluation#what-is-blue-benchmark)

## Intersection over union (IoU): 
A measure of the overlap between two regions. It is typically used in object detection and segmentation tasks.

## Mean average precision (mAP): 
A measure of the average precision over a range of IoU thresholds. It is also used in object detection and segmentation tasks.

## Top-5 error rate: 
The percentage of images for which the correct class is not in the top 5 predictions. It is typically used in image classification tasks.

## EM - Exact Match 
EM used in NLP task evaluation, particularly in tasks like question answering and text generation. The EM metric measures the percentage of predictions that exactly match the ground truth or reference answers.

If the model's answer matches the reference answer word-for-word, then the EM score for that particular instance is 1. If the answers do not match exactly, the EM score is 0. The EM score is then calculated as the ratio of instances where the model's answer matches the reference answer exactly to the total number of instances in the evaluation dataset.

## ROUGE 
ROUGE (Recall-Oriented Understudy for Gisting Evaluation): ROUGE is another metric used for evaluating text summarization and generation tasks. It measures the overlap of n-grams between the generated text and the reference text. [ROUGE More..](/dsblog/ml-tasks-and-model-evaluation#what-is-rouge-score)

## METEOR 
Metric for Evaluation of Translation with Explicit ORdering: METEOR is a metric that combines multiple measures including precision, recall, stemming, and synonymy. It aims to provide a balanced evaluation of machine translation quality.[METEOR More..](/dsblog/ml-tasks-and-model-evaluation#what-is-meteor-score)

## HEQD
HEQD stands for Hierarchical Edit Distance. It is a metric used to evaluate the quality of text summarization. It is based on the edit distance between the ground truth summary and the generated summary, taking into account the hierarchical structure of the summary.

The HEQD metric is calculated as follows:

HEQD = 1 - (ED / L)
where

ED is the edit distance between the ground truth summary and the generated summary.  
L is the length of the ground truth summary.  
The HEQD metric is a more accurate measure of the quality of text summarization than the BLEU metric, as it takes into account the hierarchical structure of the summary.   

Example:

Ground truth summary:

* The cat is on the mat.
* The dog is chasing the ball.

Generated summary:

* The cat and the dog are playing.

The HEQD metric for this example would be:

HEQD = 1 - (2 / 2) = 0.5

This means that the generated summary is 50% similar to the ground truth summary.

The HEQD metric is a relatively new metric, and it is not yet as widely used as the BLEU metric. However, it is a promising metric for evaluating the quality of text summarization.

## Perplexity
In NLP and machine learning, perplexity is a measure of how well a language model predicts the next word in a sequence. It is calculated as the inverse of the probability of the model's predictions. A lower perplexity indicates that the model is better at predicting the next word.

The perplexity is calculated as follows:

Perplexity = $$exp( \frac{-1}{N * \sum(log(p(w_i)))})$$   
where

N is the number of words in the test set.   
$$w_i$$ is the i-th word in the test set.   
$$p(w_i)$$ is the probability of the model predicting word $$w_i$$.

The perplexity metric is a more robust measure of the quality of a language model than the accuracy metric. This is because the accuracy metric only measures how well the model predicts the correct word, while the perplexity metric also takes into account the probability of the model's predictions.

Here is an example of how the perplexity metric can be used to evaluate the quality of a language model:

Let's say we have a language model that is trained on a corpus of text. We want to evaluate the quality of the model by using the perplexity metric. We take a test set of text and calculate the perplexity of the model's predictions on the test set. If the perplexity is low, then the model is good at predicting the next word. If the perplexity is high, then the model is not good at predicting the next word.

The perplexity metric is a useful tool for evaluating the quality of language models. It is a more robust measure of quality than the accuracy metric, and it can be used to compare the performance of different language models.

