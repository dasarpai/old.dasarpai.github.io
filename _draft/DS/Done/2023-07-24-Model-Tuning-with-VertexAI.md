---
mathjax: true
id: 6081
title: Model Tuning with VertexAI
date: 2023-07-24
permalink: '/dsblog/Model-Tuning-with-VertexAI'
tags: [LLM, Prompt Engineering, Google Cloud, AWS Cloud, Auzre Cloud, Language Models] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6081-Model-Tuning-with-VertexAI.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: dspost-layout  
author_profile: true  
toc: True  
toc_sticky: true
---

![Model Tuning with VertexAI]( /assets/images/dspost/dsp6081-Model-Tuning-with-VertexAI.jpg)
# Tuning Large Language Model with VertexAI

## Why Model Tuning?
Tuning is required when you want the model to learn something niche or specific that deviates from general language patterns.

## Goal of Tuning 

### Classification

prompt: "Classify the following text into one of the following classes: [business, entertainment]."

### Summarization
prompt: "Summarize: Jessica: That sounds great! See you in Times Square! Alexander: See you at 10!" 

response: "#Person1 and #Person2 agree to meet at Times Square at 10:00 AM."

### Extract QA

prompt: "Context: There is evidence that there have been significant changes in Amazon rainforest vegetation over the last 21,000 years through the Last Glacial Maximum (LGM) and subsequent deglaciation. Question: What does LGM stand for?" 

response: "Last Glacial Maximum"

## Prepare your model tuning dataset

### Recommended configurations
The following table shows the recommended configurations for tuning a foundation model by task:

|Task | No. of examples in dataset | Train steps
| --- | --- | ---
|Classification | 100+ | 100-500
|Summarization | 100-500+ | 200-1000
|Extractive QA | 100+ | 100-500

For train steps, you can try more than one value to get the best performance on a particular dataset, for example, 100, 200, 500.

### Dataset format
You can create your own dataset for training. Your dataset must be in JSON Lines (JSONL) format where each line contains a single training example. Content of JSONL file will be like below.

{"input_text": "question: How many copies of Gears of War 3 were sold ? context: Like its predecessors , the game received widespread critical acclaim from critics . Critics praised its story , voice acting , graphics and visuals , and music , but criticized its lack of innovation . Gears of War 3 sold over 3 million copies and was the second best selling game in the U . S . ", "output_text": "over 3 million copies"}
{"input_text": "question: How many parishes are there in Louisiana ? context: The U . S . state of Louisiana is divided into 64 parishes ( French : paroisses ) in the same manner that 48 other states of the United States are divided into counties , and Alaska is divided into boroughs . ", "output_text": "64"}

### Creating Dataset 
Prepare model tuning dataset (train dataset)
Maintain consistency with test and production data (same format).

For example, if the examples in your dataset includes a "question:" and a "context:", production traffic should also be formatted to include a "question:" and a "context:" in the same order as it appears in the dataset examples. If you exclude the context, the model will be confused as to what you are asking, even if the exact question was in an example in the dataset.

Include instructions in examples.   
Classify the following text into one of the following classes: [business, entertainment] Text: 5 stocks to buy now


### Upload tuning dataset to Cloud Storage (Optional)
For the demo use following example. Otherwise bring your dataset in the format below.
cloud-samples-data/ai-platform/generative_ai/headline_classification.jsonl

### Tuning with VertexAI
- VertexAI -> Language -> Create Tune Model 
- Select the tuning dataset (either from google cloud storage or cloud-samples-data/ai-platform/generative_ai/headline_classification.jsonl)
	- The above dataset contains 25 categorical question answering examples. If you use the sample dataset, the training will take 1-2 hours.
- Configure the model details & Tune
	- Model name: Enter a name for your tuned model.
	- Base model: Select the foundation model that you want to tune.
	- Train steps: Enter the number of steps to run for model tuning. 1000 steps will take 2-3 hours to complete tuning.
	- Learning rate: Control the step size at which a model updates its weights during training. Default: 3.
	- Working directory: Enter the URI of the bucket to store the tuned model. If don't have one, you can create a new bucket.

### After tuning
- To check the status of your model tuning job, go to the Pipelines page. The status of your pipeline can be found in the Runs section.
- To view your tuned models in the Google Cloud console, go to the Vertex AI Model Registry page.

### Use the tuned model
- To use your tuned models with new prompts, go to the Language page.
- Click Text prompt.
- In the Model drop down, select the tuned model that you have created.
- Copy the sample prompt and submit to view the results.

```
Multi-choice problem: What is the topic of this text?
- business
- entertainment
- health
- sports
- technology
- politics
Text: What is a large language model (LLM)?
The answer is:
```
	
