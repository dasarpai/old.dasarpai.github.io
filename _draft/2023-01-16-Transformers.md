---
mathjax: true
id: 6031
title: 'What Are Transformers in AI'
date: 2021-08-03
permalink: '/dsblog/What-Are-Transformers-in-AI'
tags: [NLP] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6031-What-are-Transformers-in-AI.jpg
author: Hari Thapliyaal 
excerpt:
share: true 
---

![What-are-Transformers-in-AI](/assets/images/dspost/dsp6031-What-are-Transformers-in-AI.jpg)

# What Are Transformers in AI

## Transformer Architecture
![Transformer](/assets/images/dspost/transformer/transformer-arch.jpg)

## Background
Transformers are a type of neural network architecture that have several properties that make them effective for modeling data with long-range dependencies. They generally feature a combination of multi-headed attention mechanisms, residual connections, layer normalization, feedforward connections, and positional embeddings.

Sno. | Transformer | Year | Type | Short Introduction
---- | ----- | ---- | ----- | ----
1 | GPT-Neo  | 2000 |  | 
2 | Transformer  | 2017 | Autoregressive | Attention Is All You Need
3 | BERT  | 2018 | Autoencoding | BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding
4 | GPT  | 2018 | Autoregressive | Improving Language Understanding by Generative Pre-Training
5 | T-D  | 2018 |  | Generating Wikipedia by Summarizing Long Sequences
6 | Universal Transformer  | 2018 | Autoregressive | Universal Transformers
7 | Adaptive Span  | 2019 | Autoregressive | Transformer Adaptive Attention Span in Transformers
8 | Adaptively Sparse  | 2019 |  | Transformer Adaptively Sparse Transformers
9 | ALBERT  | 2019 | Autoencoding | ALBERT: A Lite BERT for Self-supervised Learning of Language Representations
10 | BART  | 2019 |  | BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension
11 | BP-Transformer  | 2019 |  | BP-Transformer: Modelling Long-Range Context via Binary Partitioning
12 | Compressive  | 2019 |  | Transformer Compressive Transformers for Long-Range Sequence Modelling
13 | CTRL  | 2019 |  | CTRL: A Conditional Transformer Language Model for Controllable Generation
14 | CuBERT  | 2019 | Autoencoding | Learning and Evaluating Contextual Embedding of Source Code
15 | DistilBERT  | 2019 | Autoencoding | DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter
16 | GPT-2  | 2019 | Autoregressive | Language Models are Unsupervised Multitask Learners
17 | Levenshtein Transformer  | 2019 | Autoregressive | Levenshtein Transformer
18 | RoBERTa  | 2019 | Autoencoding | RoBERTa: A Robustly Optimized BERT Pretraining Approach
19 | Sandwich Transformer  | 2019 | Autoregressive | Improving Transformer Models by Reordering their Sublayers
20 | Sparse  | 2019 | Autoregressive | Transformer Generating Long Sequences with Sparse Transformers
21 | T5  | 2019 | Autoencoding | Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer
22 | Transformer-XL  | 2019 | Autoregressive | Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context
23 | VideoBERT  | 2019 |  | VideoBERT: A Joint Model for Video and Language Representation Learning
24 | ViLBERT  | 2019 |  | ViLBERT: Pretraining Task-Agnostic Visiolinguistic Representations for Vision-and-Language Tasks
25 | XLM  | 2019 | Autoencoding | Cross-lingual Language Model Pretraining
26 | XLNet XLNet:  | 2019 | Autoregressive | Generalized Autoregressive Pretraining for Language Understanding
27 | BigBird  | 2020 |  | Big Bird: Transformers for Longer Sequences
28 | BinaryBERT  | 2020 | Autoencoding | BinaryBERT: Pushing the Limit of BERT Quantization
29 | Bort  | 2020 | Autoencoding | Optimal Subarchitecture Extraction For BERT
30 | CodeBERT  | 2020 |  | CodeBERT: A Pre-Trained Model for Programming and Natural Languages
31 | ConvBERT  | 2020 | Autoencoding | ConvBERT: Improving BERT with Span-based Dynamic Convolution
32 | DeBERTa  | 2020 | Autoencoding | DeBERTa: Decoding-enhanced BERT with Disentangled Attention
33 | DeeBERT  | 2020 | Autoencoding | DeeBERT: Dynamic Early Exiting for Accelerating BERT Inference
34 | DeLighT  | 2020 | Autoregressive | DeLighT: Deep and Light-weight Transformer
35 | DynaBERT  | 2020 | Autoencoding | DynaBERT: Dynamic BERT with Adaptive Width and Depth
36 | ELECTRA  | 2020 | Autoencoding | ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators
37 | Electric Pre-Training  | 2020 | Autoencoding | Transformers as Energy-Based Cloze Models
38 | ETC ETC:  | 2020 |  | Encoding Long and Structured Inputs in Transformers
39 | Feedback Transformer  | 2020 | Autoregressive | Addressing Some Limitations of Transformers with Feedback Memory
40 | Funnel Transformer  | 2020 |  | Funnel-Transformer: Filtering out Sequential Redundancy for Efficient Language Processing
41 | GPT-3 Language  | 2020 | Autoregressive | Models are Few-Shot Learners
42 | IB-BERT  | 2020 | Autoencoding | MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices
43 | Linformer Linformer:  | 2020 | Autoregressive | Self-Attention with Linear Complexity
44 | Longformer  | 2020 | Autoencoding | Longformer: The Long-Document Transformer
45 | MacBERT Revisiting  | 2020 | Autoencoding | Pre-Trained Models for Chinese Natural Language Processing
46 | mBART  | 2020 | Autoencoding | Multilingual Denoising Pre-training for Neural Machine Translation
47 | MobileBERT  | 2020 | Autoencoding | MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices
48 | mT5  | 2020 | Autoencoding | mT5: A massively multilingual pre-trained text-to-text transformer
49 | PAR Transformer  | 2020 |  | Pay Attention when Required
50 | Performer  | 2020 |  | Rethinking Attention with Performers
51 | PLATO-2  | 2020 |  | PLATO-2: Towards Building an Open-Domain Chatbot via Curriculum Learning
52 | ProphetNet  | 2020 |  | ProphetNet: Predicting Future N-gram for Sequence-to-Sequence Pre-training
53 | RAG  | 2020 |  | Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
54 | RealFormer  | 2020 |  | RealFormer: Transformer Likes Residual Attention
55 | Reformer  | 2020 |  | Reformer: The Efficient Transformer
56 | Routing Transformer  | 2020 | Autoregressive | Efficient Content-Based Sparse Attention with Routing Transformers
57 | SC-GPT  | 2020 |  | Few-shot Natural Language Generation for Task-Oriented Dialog
58 | Sinkhorn Transformer  | 2020 | Autoregressive | Sparse Sinkhorn Attention
59 | SMITH Beyond  | 2020 | Autoencoding | 512 Tokens: Siamese Multi-depth Transformer-based Hierarchical Encoder for Long-Form Document Matching
60 | SongNet  | 2020 |  | SongNet: Rigid Formats Controlled Text Generation
61 | SqueezeBERT  | 2020 | Autoencoding | SqueezeBERT: What can computer vision teach NLP about efficient neural networks?
62 | TernaryBERT  | 2020 | Autoencoding | TernaryBERT: Distillation-aware Ultra-low Bit BERT
63 | AutoTinyBERT  | 2021 | Autoencoding | AutoTinyBERT: Automatic Hyper-parameter Optimization for Efficient Pre-trained Language Models
64 | Charformer  | 2021 |  | Charformer: Fast Character Transformers via Gradient-based Subword Tokenization
65 | Chinese  | 2021 |  | Pre-trained Unbalanced Transformer CPT: A Pre-Trained Unbalanced Transformer for Both Chinese Language Understanding and Generation
66 | ClipBERT  | 2021 |  | Less is More: ClipBERT for Video-and-Language Learning via Sparse Sampling
67 | CodeT5  | 2021 | Autoencoding | CodeT5: Identifier-aware Unified Pre-trained Encoder-Decoder Models for Code Understanding and Generation
68 | EGT  | 2021 |  | Global Self-Attention as a Replacement for Graph Convolution
69 | ESACL  | 2021 |  | Enhanced Seq2Seq Autoencoder via Contrastive Learning for Abstractive Text Summarization
70 | Fastformer  | 2021 |  | Fastformer: Additive Attention Can Be All You Need
71 | GANformer  | 2021 |  | Generative Adversarial Transformers
72 | I-BERT  | 2021 | Autoencoding | I-BERT: Integer-only BERT Quantization
73 | MATE  | 2021 |  | MATE: Multi-view Attention for Table Transformer Efficiency
74 | MHMA  | 2021 |  | Rendezvous: Attention Mechanisms for the Recognition of Surgical Action Triplets in Endoscopic Videos
75 | NormFormer  | 2021 |  | NormFormer: Improved Transformer Pretraining with Extra Normalization
76 | Nyströmformer  | 2021 |  | Nyströmformer: A Nyström-Based Algorithm for Approximating Self-Attention
77 | PermuteFormer  | 2021 |  | PermuteFormer: Efficient Relative Position Encoding for Long Sequences
78 | Primer  | 2021 | Autoregressive | Primer: Searching for Efficient Transformers for Language Modeling
79 | Subformer  | 2021 |  | Subformer: Exploring Weight Sharing for Parameter Efficiency in Generative Transformers
80 | Switch Transformer  | 2021 | Autoencoding | Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity
81 | TAPEX  | 2021 |  | TAPEX: Table Pre-training via Learning a Neural SQL Executor
82 | TNT  | 2021 |  | Transformer in Transformer
83 | PaLM  | 2022 |  | PaLM: Scaling Language Modeling with Pathways