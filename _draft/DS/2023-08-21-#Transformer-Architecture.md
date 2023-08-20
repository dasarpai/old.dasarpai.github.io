---
mathjax: true
id: 6089
title: AI Transformer Architecture
date: 2023-08-21
permalink: '/dsblog/AI-Transformer-Architecture'
tags: [LLM, Transformer, Encoder, Decoder, Encoder-Decoder, Machine Learning, NLP]
categories:


header:
    teaser: /assets/images/dspost/dsp6089-AI-Transformer-Architecture.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

## Tokenization
Creating tokens from words of any sentence. Generally 750 words = 1000 tokens

## Token Encoding	
Assign unique number to each token. If a word "pick" has come 5 times then corresting number say 2075 will repeat 5 times in the token encoded sentence.

## Word Embedding	
Fixed number vector of each token

## Position Embedding	
Embedding of position, which a token has in sentence. For each position we generated corresponding vector.
Contxtual Embedding (from Self Attention and Position Embedding)	Toekn vector of a token can be different if it is used in different context. You need self attention for this. KQV vectors are required to achieve this.

## Encoder 
Predicting middle token from surrounding tokens.	

## Decoder 
Predicting next word from previous words.	

## Encoder-Decoder
Predicting corresponding word in parallel sentence in another language.	