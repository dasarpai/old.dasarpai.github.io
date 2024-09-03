---
mathjax: true
id: 6120
title: NLP BenchMarks
date: 2024-07-27
permalink: /dsblog/NLP-BenchMarks1
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6120-NLP-BenchMarks.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
comments: true
---

![NLP-BenchMarks](/assets/images/dspost/dsp6120-NLP-BenchMarks.jpg)

# NLP BenchMarks

## What is Language Model?
A **language model** is a computational model that understands and generates human language. It learns the patterns and structure of a language by analyzing large amounts of text data, allowing it to predict the next word in a sequence or generate coherent text. Language models are used in applications like text generation, translation, speech recognition, chatbots, and sentiment analysis. 

## How to create Language Model?
Modern language models often use neural networks, especially transformer-based architectures like GPT and BERT, to capture complex language patterns and context. Tehniques like tokenization, Embedding. Contextual Understanding are combined together in different architecture, different hyperparameters, different datasets and this produces a model predict the next word.

## What are popular Language Models?
These models have been developed by leading tech companies and research organizations, reflecting advancements in natural language processing and understanding.

1. **GPT-3.5** (Generative Pre-trained Transformer 3.5) - Created by OpenAI
2. **GPT-4** - Created by OpenAI
3. **BERT** (Bidirectional Encoder Representations from Transformers) - Created by Google
4. **T5** (Text-To-Text Transfer Transformer) - Created by Google
5. **PaLM** (Pathways Language Model) - Created by Google
6. **LaMDA** (Language Model for Dialogue Applications) - Created by Google
7. **LLaMA** (Large Language Model Meta AI) - Created by Meta (Facebook)
8. **Claude** - Created by Anthropic
9. **Bloom** - Created by BigScience (an open collaboration)
10. **Mistral** - Created by Mistral AI
11. **Falcon** - Created by Technology Innovation Institute (TII), UAE
12. **ChatGPT** - Created by OpenAI
13. **XLNet** - Created by Google and Carnegie Mellon University
14. **ERNIE** (Enhanced Representation through Knowledge Integration) - Created by Baidu

## How Do We Know Which Model is the Best?

LLM are not created for any specific tasks in mind. Earlier to LLM, NLP models were developed keeping specific problem(s) in mind. These specific problems may be classification, topic modelling, story generation, NER tagging, POS tagging etc.

To measure the model's peformance we need model (LLM or NLP), metric (like accuracy, precision, recall, BLEU, GLUE), and a dataset.

To answer this question, research organizations have created several highly curated, labeled datasets. These datasets serve as benchmarks, each uniquely designed for specific tasks. Benchmarks not only include these datasets but also provide corresponding metrics for evaluation. When researchers want to claim that their model outperforms others, they must use these benchmark datasets and metrics to validate their results. Importantly, these benchmarks are not intended for training purposes. Additionally, in evaluating the efficiency of the model resource consumption and latency also plays a critical role. A model offering only marginal improvements but requiring significantly more resources may not be preferred for commercial applications.

## What Are the Popular Benchmarks for NLP and LLM?

Nowadays, large language models (LLMs) are often associated with multimodal capabilities, encompassing text, audio, image, and video. However, when we refer to language models, we specifically mean text-based models. Keeping this in mind, NLP and LLM models, while potentially different, should be evaluated using the same benchmarks to ensure a consistent and fair assessment.

## What are the Popular NLP/LLM Benchmarks?
Here are some important benchmarks commonly used in evaluating Large Language Models (LLMs). These benchmarks provide a comprehensive overview of various capabilities and aspects of LLMs, from knowledge and reasoning to coding and conversational skills. These benchmarks help in assessing different aspects of LLM performance, such as language understanding, reasoning, coding, and truthfulness, providing a standardized way to compare models and identify areas for improvement. For further details, you can explore the sources and learn more about how these benchmarks are applied and the specific datasets they use. Each of these benhmark has extremely curated labelled dataset.


[Klu Index Score](https://klu.ai/llm-leaderboard)

MATH is a new dataset of 12,500 challenging competition mathematics problems. Each problem in MATH has a full step-by-step solution which can be used to teach models to generate answer derivations and explanations.


Here are the sources for the benchmarks you mentioned:

1. **Graduate-Level Google-Proof Q&A (GPQA)**: GPQA is a challenging dataset designed to evaluate the capabilities of Large Language Models (LLMs) and scalable oversight mechanisms. Introduced by researchers, GPQA comprises 448 multiple-choice questions across the domains of biology, physics, and chemistry, crafted by domain experts to ensure high quality and difficulty. There are three variations of the test dataset with variable question lengths: extended (546), main (448), and diamond (198). [GPQA-Leadboard](https://klu.ai/glossary/gpqa-eval)

2. **Undergraduate-level knowledge (MMLU)**: The MMLU (Massive Multitask Language Understanding) benchmark is hosted on GitHub and evaluates knowledge across various subjects, including humanities, social sciences, and STEM fields, from elementary to professional levels.  [MMLU Leadboard](https://github.com/hendrycks/test)

3. **Coding proficiency (HumanEval)**: HumanEval assesses a model's ability to understand and generate code through programming problems. Information and the dataset are available on the OpenAI GitHub repository [HumanEval](https://github.com/openai/human-eval)

4. **General Language Understanding (GLUE and SuperGLUE)**: GLUE and SuperGLUE benchmarks, designed for general language understanding tasks, have their GitHub repositories with comprehensive information. GLUE can be found [here](https://github.com/nyu-mll/GLUE-baselines), and SuperGLUE [here](https://super.gluebenchmark.com/).

5. **Commonsense reasoning (HellaSwag)**: This benchmark focuses on evaluating real-world reasoning tasks by presenting scenarios with plausible and deceptive endings. Details and the dataset for HellaSwag can be found on GitHub [here](https://github.com/rowanz/hellaswag).

6. **Question Answering (SQuAD and AI2 Reasoning Challenge)**: SQuAD (Stanford Question Answering Dataset) and the AI2 Reasoning Challenge are benchmarks for reading comprehension and reasoning. SQuAD information is available on its official website [here](https://rajpurkar.github.io/SQuAD-explorer/), and ARC details are on GitHub [here](https://github.com/allenai/arc).

7. **Truthfulness (TruthfulQA)**: TruthfulQA measures the ability of models to generate accurate and truthful responses. The GitHub repository with relevant information can be found [here](https://github.com/openai/truthfulqa).

8. **Mathematical Reasoning (MATH and GSM8K)**: MATH includes competition-level math problems, with its GitHub repository [here](https://github.com/hendrycks/math), and GSM8K focuses on grade school math problems, available [here](https://github.com/openai/grade-school-math).

9. **Chatbot performance (Chatbot Arena and MT Bench)**: These benchmarks assess conversational fluency and goal-oriented success. More details about the Chatbot Arena can be found [here](https://huggingface.co/spaces/stanford-crfm/arena), while MT Bench is available [here](https://github.com/lm-sys/FastChat).

10. **GLUE (General Language Understanding Evaluation)**: GLUE's main GitHub page, which includes various tasks for evaluating language understanding, is available [here](https://github.com/nyu-mll/GLUE-baselines).

11. **SuperGLUE**: As an improved version of GLUE, more challenging tasks are included in SuperGLUE. Information is available on its website [here](https://super.gluebenchmark.com/).

12. **MBPP (Mostly Basic Python Programming)**: MBPP focuses on evaluating Python programming tasks and is available on GitHub [here](https://github.com/google-research/mbpp).

13. **ARC (AI2 Reasoning Challenge)**: This benchmark measures general fluid intelligence using multiple-choice science questions. The dataset and details are available on GitHub [here](https://github.com/allenai/arc).

14. **DROP (Discrete Reasoning Over Paragraphs)**: DROP assesses reading comprehension and reasoning abilities by asking models to manipulate information from text. You can find it on GitHub [here](https://github.com/allenai/drop).

15. **SQuAD (Stanford Question Answering Dataset)**: SQuAD's main page for accessing the dataset and details can be found [here](https://rajpurkar.github.io/SQuAD-explorer/).

16. **TruthfulQA**: The benchmark comprises 817 questions that span 38 categories, including health, law, finance and politics. We crafted questions that some humans would answer falsely due to a false belief or misconception. To perform well, models must avoid generating false answers learned from imitating human texts. [](https://github.com/sylinrl/TruthfulQA)

17. **BBHard (BigBench)**: BIG-Bench Hard (BBH) is a subset of the BIG-Bench, a diverse evaluation suite for language models. BBH focuses on a suite of 23 challenging tasks from BIG-Bench that were found to be beyond the capabilities of current language models. These tasks are ones where prior language model evaluations did not outperform the average human-rater. The BBH tasks require multi-step reasoning, and it was found that few-shot prompting without Chain-of-Thought (CoT), as done in the BIG-Bench evaluations, substantially underestimates the best performance and capabilities of language models. When CoT prompting was applied to BBH tasks, it enabled PaLM to surpass the average human-rater performance on 10 of the 23 tasks, and Codex to surpass the average human-rater performance on 17 of the 23 tasks. [GitHub BigBench](https://github.com/google/BIG-bench). [paperswithcode](https://paperswithcode.com/dataset/bbh)

18. **AI2 Reasoning Challenge (ARC)**: The AI2’s Reasoning Challenge (ARC) dataset is a multiple-choice question-answering dataset, containing questions from science exams from grade 3 to grade 9. The dataset is split in two partitions: Easy and Challenge, where the latter partition contains the more difficult questions that require reasoning. Most of the questions have 4 answer choices, with <1% of all the questions having either 3 or 5 answer choices. ARC includes a supporting KB of 14.3M unstructured text passages. [ARC](https://paperswithcode.com/dataset/arc). [ARC Easy](https://paperswithcode.com/sota/common-sense-reasoning-on-arc-easy), [ARC Challenge](https://paperswithcode.com/sota/common-sense-reasoning-on-arc-challenge).


## Resources: 

- https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison
- https://www.turing.com/resources/understanding-llm-evaluation-and-benchmarks
- https://humanloop.com/blog/llm-benchmarks
- https://www.confident-ai.com/blog/the-current-state-of-benchmarking-llms
- https://arize.com/blog-course/llm-leaderboards-benchmarks/
- https://deepgram.com/learn/llm-benchmarks-guide-to-evaluating-language-models



