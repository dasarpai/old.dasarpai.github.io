---
mathjax: true
id: 6068
title: 'A Guide to Model Fine Tuning with OpenAI API'
date: 2023-07-02
permalink: '/dsblog/Model-Fine-Tuning-with-OpenAI-API'
tags: [NLP, AI Transformers, Deep Learning, OpenAI] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6068-A-Guide-to-Model-Fine-Tuning-with-OpenAI-API.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![A Guide to Model Fine Tuning with OpenAI API](/assets/images/dspost/dsp6068-A-Guide-to-Model-Fine-Tuning-with-OpenAI-API.jpg)    
   
# A Guide to Model Fine Tuning with OpenAI API

## Account Setup and API Key Generation

Go to [openai](https://platform.openai.com/), sign up there and create your account. After than you need to create an API using [API Key Link](https://platform.openai.com/account/api-keys). You need to copy the api key and you replace the text below <OPENAI_API_KEY>. Being string the key should be within "". Keeping security in mind it is highly recommended that you do not put the API in the code file. Keep it at some secured place and read that file to fetch the API key. OpenAI gives you USD 5 free usage. After that you need to pay. For that you need to setup your credit card details on their system. They are very fair on the charges, just keep track of your usage. If you don't use any of their service they won't charge anything for just having account with them. While doing any model finetuning or prediction openai tells you how much they will charge you for that particular command. My suggestion is if you are just experimenting then keep your dataset small so that you can manage your learning with USD 10-20.

You can go to https://colab.research.google.com/. If you do not have account on google then you need can create one. After this your need to launch a notebook (colab notebook). 

Here you need to install open . 
```python
!pip install --upgrade openai
!export OPENAI_API_KEY="<OPENAI_API_KEY>"

import openai
```

## Data Preperation 

- [Guidelines](https://platform.openai.com/docs/guides/fine-tuning/preparing-your-dataset)

### Create train and validation dataset from your jsonl file:
Your data must be a JSONL document, where each line is a prompt-completion pair corresponding to a training example.

Command below will create train and validation dataset from the JSONL file.
```python
openai tools fine_tunes.prepare_data -f <LOCAL_FILE>
```

### jsonl format is as below
{"prompt": "<prompt text>" + "\n\n###\n\n", "completion": "<ideal generated text>" + "\n or ###"}     
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}     
{"prompt": "<prompt text>", "completion": "<ideal generated text>"}     

### Promot Design for Classification
- Use a separator at the end of the prompt, e.g. \n\n###\n\n. Remember to also append this separator when you eventually make requests to your model.   
- Choose classes that map to a single token. At inference time, specify max_tokens=1 since you only need the first token for classification.   
- Ensure that the prompt + completion doesn't exceed 2048 tokens, including the separator
- Aim for at least ~100 examples per class
- To get class log probabilities you can specify logprobs=5 (for 5 classes) when using your model
Ensure that the dataset used for finetuning is very similar in structure and type of task as what the model will be used for

#### Prompt Example1
- {"prompt":"Company: BHFF insurance\nProduct: allround insurance\nAd:One stop shop for all your insurance needs!\nSupported:", "completion":" yes"}   
- {"prompt":"Company: Loft conversion specialists\nProduct: -\nAd:Straight teeth in weeks!\nSupported:", "completion":" no"}

#### Prompt Example2
- {"prompt":"Overjoyed with the new iPhone! ->", "completion":" positive"}   
- {"prompt":"@lakers disappoint for a third straight night https://t.co/38EFe43 ->", "completion":" negative"}

#### Prompt Example3 
- {"prompt":"Subject: <email_subject>\nFrom:<customer_name>\nDate:<date>\nContent:<email_body>\n\n###\n\n", "completion":" <numerical_category>"}   
- {"prompt":"Subject: Update my address\nFrom:Joe Doe\nTo:support@ourcompany.com\nDate:2021-06-03\nContent:Hi,\nI would like to update my billing address to match my delivery address.\n\nPlease let me know once done.\n\nThanks,\nJoe\n\n###\n\n", "completion":" 4"}

### Prompt Design for Conditional Generation
Conditional generation is a problem where the content needs to be generated given some kind of input. This includes paraphrasing, summarizing, entity extraction, product description writing given specifications, chatbots and many others. For this type of problem we recommend:

- Use a separator at the end of the prompt, e.g. \n\n###\n\n. Remember to also append this separator when you eventually make requests to your model.
- Use an ending token at the end of the completion, e.g. END
- Remember to add the ending token as a stop sequence during inference, e.g. stop=[" END"]
- Aim for at least ~500 examples
- Ensure that the prompt + completion doesn't exceed 2048 tokens, including the separator
- Ensure the examples are of high quality and follow the same desired format
- Ensure that the dataset used for finetuning is very similar in structure and type of task as what the model will be used for
- Using Lower learning rate and only 1-2 epochs tends to work better for these use cases

#### Prompt Example1
- {"prompt":"<Product Name>\n<Wikipedia description>\n\n###\n\n", "completion":" <engaging ad> END"}   
- {"prompt":"Samsung Galaxy Feel\nThe Samsung Galaxy Feel is an Android smartphone developed by Samsung Electronics exclusively for the Japanese market. The phone was released in June 2017 and was sold by NTT Docomo. It runs on Android 7.0 (Nougat), has a 4.7 inch display, and a 3000 mAh battery.\nSoftware\nSamsung Galaxy Feel runs on Android 7.0 (Nougat), but can be later updated to Android 8.0 (Oreo).\nHardware\nSamsung Galaxy Feel has a 4.7 inch Super AMOLED HD display, 16 MP back facing and 5 MP front facing cameras. It has a 3000 mAh battery, a 1.6 GHz Octa-Core ARM Cortex-A53 CPU, and an ARM Mali-T830 MP1 700 MHz GPU. It comes with 32GB of internal storage, expandable to 256GB via microSD. Aside from its software and hardware specifications, Samsung also introduced a unique a hole in the phone's shell to accommodate the Japanese perceived penchant for personalizing their mobile phones. The Galaxy Feel's battery was also touted as a major selling point since the market favors handsets with longer battery life. The device is also waterproof and supports 1seg digital broadcasts using an antenna that is sold separately.\n\n###\n\n", "completion":"Looking for a smartphone that can do it all? Look no further than Samsung Galaxy Feel! With a slim and sleek design, our latest smartphone features high-quality picture and video capabilities, as well as an award winning battery life. END"}

#### Prompt Example2
- {"prompt":"<any text, for example news article>\n\n###\n\n", "completion":" <list of entities, separated by a newline> END"}
- {"prompt":"Portugal will be removed from the UK's green travel list from Tuesday, amid rising coronavirus cases and concern over a \"Nepal mutation of the so-called Indian variant\". It will join the amber list, meaning holidaymakers should not visit and returnees must isolate for 10 days...\n\n###\n\n", "completion":" Portugal\nUK\nNepal mutation\nIndian variant END"}

#### Prompt Example3
- {"prompt":"Summary: <summary of the interaction so far>\n\nSpecific information:<for example order details in natural language>\n\n###\n\nCustomer: <message1>\nAgent: <response1>\nCustomer: <message2>\nAgent:", "completion":" <response2>\n"}
- {"prompt":"Summary: <summary of the interaction so far>\n\nSpecific information:<for example order details in natural language>\n\n###\n\nCustomer: <message1>\nAgent: <response1>\nCustomer: <message2>\nAgent: <response2>\nCustomer: <message3>\nAgent:", "completion":" <response3>\n"}

#### Prompt Example4 
- {"prompt":"Item=handbag, Color=army_green, price=$99, size=S->", "completion":" This stylish small green handbag will add a unique touch to your look, without costing you a fortune."}
- {"prompt":"Item is a handbag. Colour is army green. Price is midrange. Size is small.->", "completion":" This stylish small green handbag will add a unique touch to your look, without costing you a fortune."}

## Customize your model name 
Whether you want to create a custom model for the NLP task in your hand or you want to further refine the existing customized model. You can use the command below.

```python
!openai api fine_tunes.create -t test.jsonl -m ada --suffix "custom model name"
```
"custom model name" can be "ada", "babbage", "curie", or "davinci". If you already have created a customized model like "ft-some-customized-model" then you can name that instead of davinci, ada etc.

## Analyse Finetuned model 
```python
!openai api fine_tunes.results -i <YOUR_FINE_TUNE_JOB_ID> > results.csv 
```

The results.csv file contains a row for each training step, where a step refers to one forward and backward pass on a batch of data. In addition to the step number, each row contains the following fields corresponding to that step:

- elapsed_tokens: the number of tokens the model has seen so far (including repeats)
- elapsed_examples: the number of examples the model has seen so far (including repeats), where one example is one - element in your batch. For example, if batch_size = 4, each step will increase elapsed_examples by 4.
training_loss: loss on the training batch
- training_sequence_accuracy: the percentage of completions in the training batch for which the model's predicted tokens matched the true completion tokens exactly. For example, with a batch_size of 3, if your data contains the completions [[1, 2], [0, 5], [4, 2]] and the model predicted [[1, 1], [0, 5], [4, 2]], this accuracy will be 2/3 = 0.67
- training_token_accuracy: the percentage of tokens in the training batch that were correctly predicted by the model. For example, with a batch_size of 3, if your data contains the completions [[1, 2], [0, 5], [4, 2]] and the model predicted [[1, 1], [0, 5], [4, 2]], this accuracy will be 5/6 = 0.83

## Hyperparameters

- model: "ada", "babbage", "curie", or "davinci". 
- n_epochs - defaults to 4.
- batch_size - defaults to ~0.2%
- learning_rate_multiplier - defaults to 0.05, 0.1, or 0.2 depending on final batch_size. Try values in the range 0.02 to 0.2. Empirically, we've found that larger learning rates often perform better with larger batch sizes.
- compute_classification_metrics - defaults to False. If True, for fine-tuning for classification tasks, computes classification-specific metrics (accuracy, F-1 score, etc) on the validation set at the end of every epoch.

## Delete finetuned model

```python
!openai.Model.delete(FINE_TUNED_MODEL)
```

## Create Embedding 

You can use OpenAI api to create embedding. For this you can use "ada" model.

### Python Example1
To get the the embedding of a sentence.
```python
response = openai.Embedding.create(
    input="Your text string goes here",
    model="text-embedding-ada-002"
)
embeddings = response['data'][0]['embedding']
```

### Python Example2 
To create an embedding for the entire dataset.

```python
def get_embedding(text, model="text-embedding-ada-002"):
   text = text.replace("\n", " ")
   return openai.Embedding.create(input = [text], model=model)['data'][0]['embedding']

df['ada_embedding'] = df.combined.apply(lambda x: get_embedding(x, model='text-embedding-ada-002'))   
df.to_csv('output/embedded_1k_reviews.csv', index=False)   
```

## Pricing 

### Embedding Price 

Usage is priced per input token, at a rate of $0.0004 per 1000 tokens, or about ~3,000 pages per US dollar (assuming ~800 tokens per page):

### Usage & Charges

- [Usage](https://platform.openai.com/account/usage)
- [Rate Limits](https://platform.openai.com/account/rate-limits)

## Conclusion
Hope this quick tutorial will help you in your Prompt Engineering and model finetuning using OpenAI API.