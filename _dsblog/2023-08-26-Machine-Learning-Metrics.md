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

## Introduction

In Machine Learning projects whether classical machine learning, deep learning, computer vision, speech processing, NLP, or any other ML project we keep building different models with different datasets. But how to know that for a particular problem model X is the best one? For that, we need to evaluate these models against certain metrics. What metrics we pick, depends upon the problem statement, data imbalance, type of data, etc. In this article, we will explore an exhaustive list of ML Metrics.

From various sources, benchmarking platforms, and research papers, I have noted 330+ metrics for evaluating Machine Learning models. I keep working on this page, expanding and defining these terms on a regular basis. Some of these metrics go over my head but I am keeping it here on this page because they have been used by the practitioners in some of their projects. After experimenting with those I will expand them here. Some of the metrics are obvious to Data Scientists. But, even if you are new to Data science it gives you an idea about these metrics.

_____

## MRR 
MRR stands for "Mean Reciprocal Rank," and it is a metric commonly used in information retrieval and evaluation tasks, including those in natural language processing (NLP). MRR is used to assess the effectiveness of ranking algorithms or systems in presenting relevant information to users. MRR is often applied to tasks such as question answering, search engines, and recommendation systems. A higher MRR indicates that relevant results tend to appear higher in the ranked lists, which suggests better user experience.

Step1: Ranking of Results: Imagine you have a system that retrieves a list of possible answers or documents in response to a user's query or question. These results are usually ranked based on their perceived relevance to the query.

Step2: Reciprocal Rank: For each query or question, the reciprocal rank of the first correct (relevant) result in the ranked list is calculated as 1 divided by the position of that correct result. If the correct result is the second item, the reciprocal rank would be 1/2; if it's the fifth, the reciprocal rank would be 1/5, and so on.

Step3: Mean Reciprocal Rank (MRR): To calculate the MRR, you take the average of the reciprocal ranks across all queries or questions in your evaluation dataset. The formula for MRR is:

MRR = (1/N) * ∑(1/rank_i)

N is the total number of queries or questions.   
rank_i is the position of the correct result for the i-th query.

Commonly used MRR@n metrics are MRR@1, MRR@3, MRR@5, MRR@10, MRR@100, MRR@1000 
_____

## MAP@n 
MAP stands for "Mean Average Precision". MAP focuses on evaluating the effectiveness of ranking algorithms or systems

Step1: Ranking of Results: You have a system that retrieves a ranked list of possible answers or documents in response to a user's query or question.

Step2: Precision and Recall: Precision is the ratio of relevant items retrieved to the total number of items retrieved. Recall is the ratio of relevant items retrieved to the total number of relevant items in the dataset. These two metrics are often in tension with each other; increasing precision might result in lower recall and vice versa.

Step3: Average Precision (AP) for Each Query: For each query or question, you calculate the precision at each position in the ranked list where a relevant item is retrieved. You then calculate the average of these precision values, resulting in the Average Precision (AP) for that query.

Step4: Mean Average Precision (MAP): To calculate the MAP, you take the average of the Average Precision values across all queries or questions in your evaluation dataset. The formula for MAP is:

MAP = (1/N) * ∑(AP_i)   

N is the total number of queries or questions.   
AP_i is the Average Precision for the i-th query. 

Commonly used MAP@n metrics are map@1, map@3, map@5, map@10, map@100, map@1000


## Mean average precision (mAP): 
A measure of the average precision over a range of IoU thresholds. It is also used in object detection and segmentation tasks.

## mAP@IoU thresholds 
The mean average precision over a range of intersection over union (IoU) thresholds.

_____

## Accuracy: 
The percentage of test samples that are correctly classified.

### acc_norm
### accuracy_cardiffnlp/tweet_topic_multi
### accuracy_cardiffnlp/tweet_topic_single
### accuracy_cosinus
### accuracy_euclidean
### accuracy_manhattan
### accuracy_tweet_eval/emoji
### accuracy_tweet_eval/emotion
### accuracy_tweet_eval/hate
### accuracy_tweet_eval/irony
### accuracy_tweet_eval/offensive
### accuracy_tweet_eval/sentiment

_____

## Precision: 
The fraction of predicted positive samples that are actually positive.

### precision_entity_span

### Precision@n
Commonly used precision@n metrics are Recall@1, Precision@3, Precision@5, Precision@10, Precision@100, Precision@1000

### precision_macro

_____

## Recall: 
The fraction of actual positive samples that are predicted positive.

### recall_entity_span

### recall@n
Commonly used recall@n metrics are recall@1, recall@3, recall@5, recall@10, recall@100, recall@1000

### recall_macro

_____

## R@P
"R@P" stands for "Recall at Precision." It's a metric used to evaluate the performance of information retrieval systems, such as search engines or question-answering models, in terms of their ability to retrieve relevant documents or answers.

R@P is a combination of recall and precision. It evaluates how well a system can maintain a specified precision level while retrieving relevant items. It's typically expressed as "R@X," where "X" represents the desired precision level.

For example, R@5 measures the recall when precision is equal to 0.5 (50%). It calculates the percentage of relevant items retrieved when the system is limited to a precision level of 50%.

Mathematically, R@X is calculated by finding the recall at the point where precision reaches the specified level X. This is done by examining the retrieved items in descending order of relevance until the desired precision level is achieved.

R@P is a useful metric in tasks where both recall (finding all relevant items) and precision (avoiding irrelevant items) are important. It provides insights into how well a system balances these two aspects when retrieving information.

### R@P=50

### R@P=75

### R@P=90

_____
## F1 score: 
The harmonic mean of precision and recall.

### f1_entity_span
### f1_macro
### f1_micro
### f1_weighted
### f1 (seqeval)
### f1 macro
### f1@m
### f1@m (absent)
### f1@m (present)
### f1@o (absent)
### f1@o (present)
### f1neg 
### f1pos 

_____

## Hit@n
### Hit@1: 
- The percentage of queries for which the correct document is ranked first.
- The percentage of images for which the correct class is in the top k predictions. It is also used in image classification tasks.

### Hit@5: 
The percentage of queries for which the correct document is ranked among the top 5 documents.

_____

## Log-loss: 
The negative log likelihood of the predicted labels.

## Brier score: 
The mean squared difference between the predicted probabilities and the actual labels.

## Confusion matrix: 
A table that shows the true and predicted labels for each class.

## MSE 

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

## Precision at k (P@k): 
The percentage of the top k predictions that are correct.

The percentage of predicted positive samples that are ranked among the top k predictions.     
Precision@k = (# of relevant items retrieved among top-k recommendations) / (# of total predicted relevant items)

For example, if a system retrieves 5 relevant items among the top-10 recommendations out of a total of 25 predicted relevant items, then the recall@10 would be 0.20 or 20%.

In other words, precision@k measures how well the system performs in predicting relevant items among the top-k recommendations. It is useful when we are interested in evaluating the ranking quality of recommendations rather than their absolute number.

## Recall at k (R@k): 
The percentage of actual positive samples that are ranked among the top k predictions.   
Recall@k = (# of relevant items retrieved among top-k recommendations) / (# of total relevant items)

For example, if a system retrieves 5 relevant items among the top-10 recommendations out of a total of 20 relevant items, then the recall@10 would be 0.25 or 25%.

In other words, recall@k measures how well the system performs in retrieving relevant items among the top-k recommendations. It is useful when we are interested in evaluating the ranking quality of recommendations rather than their absolute number.

## F1-score at k (F1@k): 
The harmonic mean of precision at k and recall at k.

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

_____

## BLEU score: 
A measure of the similarity between the generated text and the reference text.
[BLEU More..](/dsblog/ml-tasks-and-model-evaluation#what-is-blue-benchmark)

### BLEU4 

### BLEU4_answer_extraction

### BLEU4_question_answer_generation

### BLEU4_question_answering

### BLEU4_question_generation

_____

## Intersection over union (IoU): 
A measure of the overlap between two regions. It is typically used in object detection and segmentation tasks.

## Top-5 error rate: 
The percentage of images for which the correct class is not in the top 5 predictions. It is typically used in image classification tasks.

## EM - Exact Match 
EM used in NLP task evaluation, particularly in tasks like question answering and text generation. The EM metric measures the percentage of predictions that exactly match the ground truth or reference answers.

If the model's answer matches the reference answer word-for-word, then the EM score for that particular instance is 1. If the answers do not match exactly, the EM score is 0. The EM score is then calculated as the ratio of instances where the model's answer matches the reference answer exactly to the total number of instances in the evaluation dataset.

_____

## ROUGE 
ROUGE (Recall-Oriented Understudy for Gisting Evaluation): ROUGE is another metric used for evaluating text summarization and generation tasks. It measures the overlap of n-grams between the generated text and the reference text. [ROUGE More..](/dsblog/ml-tasks-and-model-evaluation#what-is-rouge-score)

### rouge-l

### rouge-2

### rouge-lsum

### rouge_l_answer_extraction

### rouge_l_question_answer_generation

### rouge_l_question_answering

### rouge_l_question_generation
_____

## METEOR 
Metric for Evaluation of Translation with Explicit ORdering: METEOR is a metric that combines multiple measures including precision, recall, stemming, and synonymy. It aims to provide a balanced evaluation of machine translation quality.[METEOR More..](/dsblog/ml-tasks-and-model-evaluation#what-is-meteor-score)

### meteor_answer_extraction

### meteor_question_answer_generation

### meteor_question_answering

### meteor_question_generation



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

_____

## Pass@n

The Pass@100 metric is calculated by measuring the percentage of queries for which the correct answer is among the top 100 candidates retrieved by the foundation language model (FLM) from a large corpus of documents. It reflects the ability of the FLM to retrieve relevant information from a large-scale knowledge source, which is essential for downstream tasks such as question answering, summarization, and dialogue. The higher the Pass@100 score, the better the FLM is at retrieving knowledge 1.

If you are interested in calculating Pass@100 for your own data, you can use binomial distribution. The formula for calculating Pass@100 using binomial distribution is as follows:

$$P(X >= k) = 1 - \sum_{i=0}^{k-1} [nCi * p^i * (1-p)^{n-i}]$$

where X is a binomial random variable representing the number of correct answers in the top 100 candidates, n is the total number of queries, p is the probability of getting a correct answer in one query, and k is the minimum number of correct answers required to achieve Pass@100.

Commonly used Pass@n metrics are pass@1, pass@10, Pass@100
_____

## Answer Exact 

### answer_exact_match_answer_extraction

### answer_exact_match_question_answering

_____

## Answer F1 

### answer_f1_score__answer_extraction

### answer_f1_score__question_answering

_____

## Bert Score 

### bertscore

### bertscore_answer_extraction

### bertscore_question_answer_generation

### bertscore_question_answering

### bertscore_question_generation

_____

## Code 

### code_eval

### code_eval_outputs

_____

## Cosine 

### cos_sim_accuracy
```
threshold = 0.9  # Define your threshold

true_positives = 0
false_positives = 0
false_negatives = 0

for question in questions:
    predicted_answer = model.predict(question)
    reference_answer = get_reference_answer(question)

    cosine_similarity = calculate_cosine_similarity(predicted_answer, reference_answer)

    if cosine_similarity >= threshold:
        if predicted_answer == reference_answer:
            true_positives += 1
        else:
            false_positives += 1
    else:
        if predicted_answer == reference_answer:
            true_negative += 1
		else: 
		    false_negatives += 1 

cos_sim_precision = true_positives / (true_positives + false_positives)
cos_sim_recall = true_positives / (true_positives + false_negatives)
cos_sim_accuracy = (true_positive + true_negative)/len(quetions)
cos_sim_f1 = 2 * cos_sim_precision * cos_sim_recall / (cos_sim_precision +cos_sim_recall)

```
**Example Data**   
Threshold : 0.65

Actual | Predicted Cosine | Pred>Threshold | Pred>Threshold =Actual | Prediction_Type | Remark
--- | --- | --- | --- | --- | ---
TRUE | 0.98 | TRUE | TRUE | TP | Pred Cosine>=Threshold
TRUE | 0.79 | TRUE | TRUE | TP | Pred Cosine>=Threshold
FALSE | 0.7 | TRUE | FALSE | FP | Pred Cosine>=Threshold
TRUE | 0.6 | FALSE | FALSE | TN | Pred Cosine<Threshold
TRUE | 0.5 | FALSE | FALSE | TN | Pred Cosine<Threshold
FALSE | 0.2 | FALSE | TRUE | FN | Pred Cosine<Threshold
FALSE | 0.4 | FALSE | TRUE | FN | Pred Cosine<Threshold
FALSE | 0.66 | TRUE | FALSE | FN | Pred Cosine<Threshold


### cos_sim_f1
Check cos_sim_accuracy

### cos_sim_precision
Check cos_sim_accuracy

### cos_sim_recall
Check cos_sim_accuracy

### cos_sim_ap

### cos_sim_pearson

### cos_sim_spearman
_____

## Dot 

### dot_accuracy

### dot_ap

### dot_f1

### dot_pearson

### dot_precision

### dot_recall

### dot_spearman
_____

## Euclidean 

### euclidean_accuracy

### euclidean_ap

### euclidean_f1

### euclidean_pearson

### euclidean_precision

### euclidean_recall

### euclidean_spearman
_____

## Eval 

### eval_accuracy

### eval_exact

### eval_f1

### eval_hasans_exact

### eval_hasans_f1

### eval_noans_exact

### eval_noans_f1

### eval_precision

### eval_recall
_____

## Exact 

### exact

### exact_match
_____

## Gen 

### gen_len

### gen-length

_____

## Joint Goal Accuracy 

### joint goal accuracy

### joint goal expected calibration error

_____

## Manhattan 

### manhattan_accuracy

### manhattan_ap

### manhattan_f1

### manhattan_precision

### manhattan_recall

### manhattan_spearman

### manhattan_pearson

_____

## Max 

### max_accuracy

### max_ap

### max_f1

## mean 

### mean_reciprocal_rank

### mean_reward

_____

## Macro 

### macro_f1

### macro_precision

### macro_recall

_____

## Micro 

### micro_precision

### micro_recall

### micro_f1

### micro_f1_cardiffnlp

### micro_f1_tweet_eval/emoji

### micro_f1_tweet_eval/emotion

### micro_f1_tweet_eval/hate

### micro_f1_tweet_eval/irony

### micro_f1_tweet_eval/offensive

### micro_f1_tweet_eval/sentiment
_____

## Mover Score 

### moverscore_answer_extraction

### moverscore_question_answer_generation

### moverscore_question_answering

### moverscore_question_generation

_____

## Normalized discounted cumulative gain (NDCG): 

NDCG (Normalized Discounted Cumulative Gain) is a widely used metric in information retrieval and recommendation systems to evaluate the quality of ranked search results or recommendations. The "NDCG@n" metric is a variation of NDCG that focuses on a specific cutoff point, n, which represents the number of items or documents to consider in the evaluation. It assesses how well the top n items or documents in a ranked list match the relevance of the ground truth or expected results.

Here's how NDCG@n is calculated:

1. **Rank the Items or Documents**: Start by ranking the items or documents based on some relevance score. For example, in a search engine, documents may be ranked based on their relevance to a user's query.

2. **Determine Relevance Scores**: Assign relevance scores to each of the items or documents. These scores typically range from 0 (not relevant) to 1 (perfectly relevant). These scores represent how relevant each item or document is to the user's query or the context of the evaluation.

3. **Calculate DCG@n (Discounted Cumulative Gain at n)**: Calculate the Discounted Cumulative Gain at the cutoff point n. DCG@n is computed as the sum of the relevance scores of the top n items, with a logarithmic discount applied to the position of each item:

   ```
   DCG@n = rel(1) + (rel(2) / log2(2)) + (rel(3) / log2(3)) + ... + (rel(n) / log2(n))
   ```

   Where:
   - `rel(i)` is the relevance score of the item at position i.
   - `log2(i)` is the logarithm base 2 of i.

4. **Calculate IDCG@n (Ideal Discounted Cumulative Gain at n)**: Calculate the Ideal Discounted Cumulative Gain at the cutoff point n. IDCG@n represents the best possible DCG@n that could be achieved if all the items were perfectly ranked. To calculate IDCG@n, sort the items by their true relevance scores and calculate DCG@n using the same formula.

5. **Calculate NDCG@n (Normalized Discounted Cumulative Gain at n)**: Calculate NDCG@n by dividing DCG@n by IDCG@n:

   ```
   NDCG@n = DCG@n / IDCG@n
   ```

NDCG@n provides a normalized measure of the quality of the ranked list at the specified cutoff point. It ranges from 0 to 1, where higher values indicate better ranking quality. A value of 1 indicates that the top n items are perfectly ranked according to relevance.

NDCG@n is particularly useful when you want to assess the performance of recommendation systems, search engines, or any system that presents ranked lists to users, and you are interested in evaluating the quality of the top n results.

Popular NDCG@n metrics are NDCG@1, NDCG@3, NDGC@5, NDGC@10, NDCG@100, NDCG@1000

_____

## Pearson 

### pearson_correlation

### pearson's r (distress)

### pearson's r (empathy)

_____

## QA Aligned F1 

### qa_aligned_f1_score_bertscore_question_answer_generation

### qa_aligned_f1_score_bertscore_question_answer_generation_with_gold_answer

### qa_aligned_f1_score_bertscore_question_answer_generation_with_gold_answer_gold_answer

### qa_aligned_f1_score_moverscore_question_answer_generation

### qa_aligned_f1_score_moverscore_question_answer_generation_gold_answer


_____

## QA Aligned Precision 

### qa_aligned_precision_bertscore_question_answer_generation

### qa_aligned_precision_bertscore_question_answer_generation_with_gold_answer

### qa_aligned_precision_bertscore_question_answer_generation_with_gold_answer_gold_answer

### qa_aligned_precision_moverscore_question_answer_generation

### qa_aligned_precision_moverscore_question_answer_generation_with_gold_answer

### qa_aligned_precision_moverscore_question_answer_generation_with_gold_answer_gold_answer

_____

## QA Aligned Recall 

### qa_aligned_recall_bertscore_question_answer_generation

### qa_aligned_recall_bertscore_question_answer_generation_with_gold_answer

### qa_aligned_recall_bertscore_question_answer_generation_with_gold_answer_gold_answer

### qa_aligned_recall_moverscore_question_answer_generation

### qa_aligned_recall_moverscore_question_answer_generation_with_gold_answer

### qa_aligned_recall_moverscore_question_answer_generation_with_gold_answer_gold_answer

_____

## SQUAD 
### squad
### squad_v2

_____

## Top-n Accuracy 

### top-1 accuracy

### top-5 accuracy

_____

## Validation 

### validation_accuracy

### validation loss

_____

## Weighted 
### weighted_f1
### weighted_precision
### weighted_recall

_____

## WER

### wer_without_norm


_____

## Matthews 

### matthews_correlation

_____

## Accuracy-radius-1 
## Act_dcf-p=0.01
## Avgrank 
## ARC
The **Abstraction and Reasoning Corpus (ARC)** is a benchmark dataset designed to encourage research in advanced question answering and measure a human-like form of general fluid intelligence. It was built upon an explicit set of priors designed to be as close as possible to innate human priors. The ARC dataset requires far more powerful knowledge and reasoning than previous challenges such as SQuAD or SNLI.  The ARC question set is partitioned into a Challenge Set and an Easy Set, where the Challenge Set contains only questions answered incorrectly by both a retrieval-based algorithm and a word co-occurence algorithm. The dataset contains only natural, grade-school science questions (authored for human tests), and is the largest public-domain set of this kind (7,787 questions

## Byte_perplexity
## CER 
## Cher 
## Chrf 
## Cider 
## Codebleu 
## Conll 
## Coval 
## Cver 
## DER 
## Bialog acts accuracy 
## Dialog acts f1 
## Diffbleu 
## Dvitel/codebleu 
## EER 
## EM 
## Empos 
## FID 
## Hamming score 
## Jaccard error rate 
## Lambada 
## Language model loss 
## LAS 
## Loss 
## MER 
## MMLU
The MMLU metric, or Massive Multitask Language Understanding, is a benchmark for evaluating the general knowledge and reasoning capabilities of large language models (LLMs). It was developed by Meta AI and released in 2022.

The MMLU dataset consists of 15,908 multiple-choice questions covering a wide range of topics, including mathematics, US history, computer science, law, and more. The questions are designed to assess the model's understanding of the world and its ability to reason about complex concepts. The test covers 57 tasks, including elementary mathematics, US history, computer science, law, and more. To attain high accuracy on this test, models must possess extensive world knowledge and problem-solving ability 

The MMLU metric is calculated by averaging the model's accuracy on all of the questions in the dataset. This makes it a comprehensive measure of the model's overall performance.

The MMLU metric has been used to evaluate a number of different LLMs, including GPT-3, Jurassic-1 Jumbo, and LaMDA. As of October 2023, the highest MMLU score achieved by a public LLM is 86.7%, which was set by GPT-4.

The MMLU metric is an important tool for evaluating the progress of LLMs and for identifying areas where they need improvement. It is also a useful tool for comparing the performance of different LLMs.

Here are some of the benefits of using the MMLU metric:

* It is a comprehensive measure of the model's overall performance on a wide range of tasks.
* It is fair and unbiased, as it uses a standardized set of questions.
* It is easy to understand and interpret.
* It is reproducible, meaning that other researchers can easily obtain the same results by evaluating their models on the same dataset.

Overall, the MMLU metric is a valuable tool for evaluating the performance of LLMs and for tracking their progress over time.

## Nuclearity 
## OVRL 
## PER 
## Perplexity 
## PESQ 
## PPL 
## QWK 
## RE+ macro f1 
## ROC AUC
## Sacrebleu 
## Sari 
## SER 
## Si-sdri 
## Si-snri 
## SIG 
## Slot error rate 
## Slot f1 
## Span 
## Spearmanr 
## Spice 
## Spider 
## HellaSwag
HellaSwag is a dataset for studying grounded commonsense inference. It consists of **70k multiple choice questions** about grounded situations, each question comes from one of two domains -- activitynet or wikihow -- with four answer choices about what might happen next in the scene. The dataset was designed to test commonsense natural language inference (NLI) about physical situations. 

The name **HellaSwag** is an acronym for Harder Endings, Longer contexts, and Low-shot Activities for Situations With Adversarial Generations ¹. The dataset was created by Zellers et al. in 2019 to evaluate common-sense reasoning in large language models (LLMs) ¹. 

The dataset is used to measure the performance of LLMs on commonsense reasoning tasks. The questions are segments of video captions describing some event in the physical world. A video caption segment provides an initial context for an LLM. Each context is then followed by four options for completing that context, with only one option being correct.


## TER 
## Text-image-similarity 
## Training loss 
## Trueskill 
## UAS 
## Wikitext 
## WIL 
## WIP 
## Zero-shot transfer 

## Resources
- [Metrics at Huggingface](https://huggingface.co/spaces/autoevaluate/leaderboards)
- [SOTA Paperwithcode](https://paperswithcode.com/sota)
- [Question Answering Paperwithcode](https://paperswithcode.com/task/question-answering)
- [BLEU Score](https://opus.nlpl.eu/leaderboard/)
- [GLUE Score](https://gluebenchmark.com/leaderboard)
- [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
- [AllanAI Leaderboards](https://leaderboard.allenai.org/)
- [AI Google - NaturalQuestions/leaderboard](https://ai.google.com/research/NaturalQuestions/leaderboard)
- [Eval AI](https://eval.ai/web/challenges/challenge-page/514/leaderboard/1386)
- [QuAC- Question Answering in Context](https://quac.ai/)