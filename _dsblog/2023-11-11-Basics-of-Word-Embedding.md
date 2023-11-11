---
mathjax: true
id: 6101
title: Basics of Word Embedding
date: 2023-11-11
permalink: /dsblog/basics-of-word-embedding
tags: [Word Embedding, Embedding, NLP]
categories:
header:
    teaser: /assets/images/dspost/dsp6101-Basics-of-Word-Embedding.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Basics of Word Embedding](/assets/images/dspost/dsp6101-Basics-of-Word-Embedding.jpg)

# Basics of Word Embedding

## What is Context, target and window?
- The "context" word is the surrounding word. 
- The "target" word is the middle word.  
- The "window distance" is number of words (including) between context words and target word. Window distance 1 means, one word surronding the target, one left side context word, one right context word. Two window distance means 2 words left and 2 words right.

Let's take a sentence
> The quick brown fox jump over a lazy dog.

R- Right, L - Left

target | context 1 window | context 2 window
--- | --- | ---
the | quick (R) | quick(R), brown(R)
quick | the(L), brown(R) | the(L), brown(R), fox(R)
brown | quick(L), fox(R) | the(L), quick(L), fox(R), jump(R)
fox | brown(L), jump(R) | quick(L), brown(L), jump(R), over(R)


When creating dataset you don't write multiple words in one row, but you create multiple rows, as below.	
	
target | context 2 window
--- | ---
the | quick
the | brown
quick | the
quick | brown
quick | fox

## What is Skipgram?
Skipgram: **With the help of target word** we want to predict the context/surrounding word. From above example predicting "quick", "brown", "the", "brown" etc with target word "the", "quick"

## What is CBOW (Continuous Bag of Words)
CBOW : **With the help of context** we want to predict target. From above example, predicting "the", "quick" when context words are "quick" or "brown", "the", "fox".

## How CBOW works?

For both, CBOW and Skipgram networks works in the same way as mentioned below. Only difference is when we are using CBOW we want to predict target word from context word. If you are using Skipgram then we want to predict context word from a target word. 

### Step 0 : Finalize the corpus
In reality corpus is extremely huge size, it is like entire wikipedia text or entire stakeoverflow text or entire quora text. For the illustration of skipgram we are taking a small example.

**Corpus** : The quick brown fox jump over the dog	

### Step 1 : Create Skipgram
As discussed earlier created 1 or 2 or 3 window skipgram from the corpus.

 Word | (Step 3) onehot encoding for each word in the corpus | (Step 4) random initial embedding, 4 dimensional
 ---|---|---
the | [1,0,0,0,0,0,0,0] | [.11,.12,.14,.15]
quick  | [0,1,0,0,0,0,0,0] | [.21,.23,.24,.26]
brown | [0,0,1,0,0,0,0,0] | [.31,.34,.36,.38]
fox | [0,0,0,1,0,0,0,0] | [.51,.12,.14,.15]
jump | [0,0,0,0,1,0,0,0] | [.21,.63,.24,.26]
over  | [0,0,0,0,0,1,0,0] | [.31,.34,.86,.38]
the  | [0,0,0,0,0,0,1,0] | [.71,.12,.14,.15]
dog | [0,0,0,0,0,0,0,1] | [.21,.93,.24,.26]

### Step 5
Create a neural network for learning embedding. 
- One input layer which can accept token/words. Convert token (context and target words) into onehot encoding
- One embedding layer, for example sake we are taking 4 dimensional embedding of words. These embedding are randomingly intiated number initally (there are other ways also). 
- One dense layer of 5 neuron (example)
- Softmax function
- Output layer (to predict the probability of the predicted word. If vocabulary size of the corpus is 10,000 words, then softmax will predict 10,000 probabilities)
- Loss function - Cross entropy loss function. L = $-  \sum_{i=1}^{N} y_{i} \cdot \log(p_{i})$, N is vocab size.
- 4 numbers from embedding will go to each of the 5 neuron, Each neuron will have 4 weights to embedding layer. 5*4 = 20 weights are learned + 5 biases learned
- Learning Rate LR = .0002

### Training - Forward propagation
- Randomly initialize all the weights and biases of the network.
- Pass target and context word to the network.

Step 6 | - | - | Step 7 | Step 8 | - | Step 9
--- | --- | --- | --- | --- | --- | ---
Input layer | Embedding layer | Hidden layer (5 neuron, random init w\&b), dense layer | matmul between weights and inputs (embedding) | softmax (8 vocab size) | actual vector for "quick" | cross entropy loss = - sum(yi * log(y^))
 The (context), quick (target) | context (The)  = [.11,.12,.14,.15] | n1=[.11,.12,.13,.14] | 0.0657 | 0.1867 | 0 | 0.0897
| | target (quick) = [.21,.23,.24,.26] | n2=[.13,.14,.15,.16] | 0.0761 | 0.1886 | 1 | 0.7244
| |  | n3=[.21..22,.23,.24] | 0.1177 | 0.1966 | 0 | 0.0951
| |  | n4=[.32,.33,.34,.35] | 0.1749 | 0.2082 | 0 | 0.1014
| |  | n5=[.42,.43,.45,.46] | 0.2298 | 0.2199 | 0 | 0.1079
| |  |  |  |  |  | Step 10
| |  |  |  |  | Total Loss | 1.1185

### Training - (backward propagation)
Updating weights of network neurons

 | Step 11 (Gradient Calculation for 20 weights) | 1 | 2 | 3 | 4
 | --- | --- | --- | --- | ---
 | dL/dw1 | 10.17 | 9.32 | 8.60 | 7.99
 | dL/dw2 | 8.60 | 7.99 | 7.46 | 6.99
 | dL/dw3 | 5.33 | 5.08 | 4.66 | 4.66
 | dL/dw4 | 3.50 | 3.39 | 3.20 | 3.20
 | dL/dw5 | 2.66 | 2.60 | 2.43 | 2.43


Step 12 New Weights | 1 | 2 | 3 | 4
--- | --- | --- | --- | ---
new w1 | 0.11 | 0.12 | 0.13 | 0.14
new w2 | 0.13 | 0.14 | 0.15 | 0.16
new w3 | 0.21 | 0.22 | 0.23 | 0.24
new d4 | 0.32 | 0.33 | 0.34 | 0.35
new w5 | 0.42 | 0.43 | 0.45 | 0.46

new weight = old weight - Learning Rate * DL/dW

### Update Embedding
Old Vector | 1 | 2 | 3 | 4
--- | --- | --- | --- | ---
context (The)  = [.11,.12,.14,.15] | 0.110 | 0.120 | 0.140 | 0.150
target (quick) = [.21,.23,.24,.26] | 0.210 | 0.230 | 0.240 | 0.260

Step 13 (Gradient of Old Embedding) |  |  |  | 
--- | --- | --- | --- | 
dL/context | 10.17 | 9.32 | 7.99 | 7.46
dL/target | 5.33 | 4.86 | 4.66 | 4.30

Step 14 (New Embedding) |  |  |  | 
--- |---  | --- | --- | 
context (The) | 0.108 | 0.118 | 0.138 | 0.149
target (quick) | 0.209 | 0.229 | 0.239 | 0.259

### Complete the Training
- Perform training forward and backword propagation in batch, multiple words at a time. 
- Everytime update w&b and also update embedding.
- Trained embedding can be used in future without these training steps.
- Let entire dataset of paired words go through this network. One it goes through it is called one epoch.
- Let embedding get updated over multiple epoch say 50 or 100. More epoch, will cause better embedding. It will cost more money.
- More dimentional vector will have better represenation but will cost more computation and more money.

# Resources
If you want to understand all these caluclation with excel and then you can use this [calucation sheet](https://docs.google.com/spreadsheets/d/1eU4EVtUzD1w_ILcpJVTc6oK2KH9vEDK7OuXFtyv1_gU/edit?usp=sharing)