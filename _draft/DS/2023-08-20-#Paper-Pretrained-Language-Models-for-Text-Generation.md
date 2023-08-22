---
mathjax: true
id: 6088
title: Paper-Summary: A Survey Paper# Pretrained Language Models for Text Generation
date: 2023-08-18
permalink: '/dsblog/what-is-llm'
tags: [AI Paper, NLP, Pretrained Model]
categories:

header:
    teaser: /assets/images/dspost/dsp6088-Pretrained-Language-Models-for-Text-Generation.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Pretrained Language Models for Text Generation]( /assets/images/dspost/dsp6088-Pretrained-Language-Models-for-Text-Generation.jpg)

  
**Paper Name:- Pretrained Language Models for Text Generation: A Survey**  
Typer of Paper:- Survey Paper     
[Paper URL](https://arxiv.org/abs/2105.10311)    

# Paper Summary:- Pretrained Language Models for Text Generation

## Ideas from the Paper

### Main Ideas
- This paper discusses "major advances achieved in the topic of PLMs for text generation"
- This survey aims to provide "text generation researchers a synthesis" and pointer to related research.

### General Ideas
- Text generation has become one of the most important yet challenging tasks in natural language processing (NLP). 
- Neural generation model are deep learning models
- Pretrained language models (PLMs) are neural generation model

## Paper Outcome
- General task deﬁnition
- Describe the mainstream architectures of PLMs for text generation. 
- How to adapt existing PLMs to model different input data and satisfy special properties in the generated text. 
- Summarize several important ﬁne-tuning strategies for text generation. 

## Introduction 
- Researchers have developed numerous techniques for a wide range of applications of text generation [Li et al., 2021a].
- Machine translation generates text in a different language based on the source text [Yang et al., 2020a];
- Summarization generates an abridged version of the source text to include salient information [Guan et al., 2020].
- Text generation tasks based on 
    - Recurrent neural networks (RNN) [Li et al., 2019], 
    - Convolutional neural networks (CNN) [Gehring et al., 2017], 
    - Graph neural networks (GNN) [Li et al., 2020], 
    - Attention mechanism [Bahdanau et al., 2015]. 
- One of the advantages of these neural models is that they enable end-to-end learning of semantic mappings from input to output in text generation.
- Neural models are able to learn low-dimensional, dense vectors to implicitly represent linguistic features of text, which is also useful to alleviate data sparsity.
- Deep neural networks usually have a large number of parameters to learn, which are likely to overﬁt on these small datasets and do not generalize well in practice.
- The idea behind PLMs is to ﬁrst pretrain the models in large-scale corpus and then ﬁnetune these models in various downstream tasks to achieve
state-of-the-art results. 
- PLMs can encode a large amount of linguistic knowledge from corpus and induce universal representations of language. 
- PLMs are generally beneﬁcial for downstream tasks and can avoid training a new model from scratch [Brown et al., 2020]. 
-  A synthesis to the research on some text generation subtasks. Zaib et al. [2020], and Guan et al. [2020]


## Conclusion & Future Recommendations

Model Extension.
- Discrepancies between pretraining and downstream generation tasks. For example, the “[MASK]” token in pretraining stage will not be used in
ﬁne-tuning stage, which further aggravates the pretraining ﬁnetuning discrepancy. 
- Design an appropriate pretraining paradigm for text generation. 
- Incorporating external knowledge into PLMs during pretraining has been shown to be effective [Zhang2019c](#Zhang2019c)

Controllable Generation. 
- Controlling some attributes of the generated text has many useful applications such as generating positive response to patients with depression in dialogue systems. 
- PLMs are usually pretrained in universal corpus, which is difﬁcult to control the multi-grained attributes of the generated text (e.g., sentiment, topic, and coherence). 
- These control codes are preset and coarse-grained. Keskar et al. [2019] 
- Future work can explore multi-grained control and develop PLMs that are sufﬁciently steerable.

Model Compression. 
- PLMs with large-scale parameters models are challenging to be deployed in resource constrained environments. 
- Study how to achieve competitive performance with a small number of parameters. 
- Several methods have been proposed to compress PLMs, such as parameter sharing [Lan2020] - ALBERT
- Knowledge distillation [Sanh2019] - DistilBERT
- Compress PLMs for text generation.

Fine-tuning Exploration: 
- The direct intention of pretraining is to distill the linguistic knowledge learned in PLMs to downstream generation tasks. 
- Various ways to transfer knowledge from PLMs to downstream models.  
- Exploited knowledge distillation by adopting BERT as teacher model and a vanilla RNN generation model as student model. Chen et al. [2020a] 

Language-agnostic PLMs: 
- PLMs for text generation are mainly based on English. These PLMs will encounter challenges when dealing with non-English generation tasks. 
- Language-agnostic PLMs are worthy to be investigated, which need to capture universal linguistic and semantic features across different lan-
guages. 
- An interesting direction is how to reuse existing English-based PLMs for text generation in non-English languages.

Ethical Concern: 
- Currently, PLMs are pretrained on largescale corpus crawled from the web without ﬁne-grained ﬁltering, potentially causing ethical issues such as generating private content about users. Therefore, researchers should try their best to **prevent misusing PLMs**. 
- Identifying threats and potential impacts and assessing likelihood. Ross [2012]
- The text generated by PLMs might be prejudiced, which is in line with the bias in training data along the dimensions of gender, race, and religion [Brown2020].

## Citations

1. [Bahdanau2015], Neural machine translation by jointly learning to align and translate. In ICLR, 2015.
1. [Bao2020], PLATO-2: towards building an open- domain chatbot via curriculum learning. arXiv preprint arXiv:2006.16779, 2020.
1. [Brown2020], Language models are few-shot learners. In NeurIPS, 2020.
1. [Chen2020a], Distilling knowledge learned in BERT for text generation. In ACL, 2020.
1. [Chen2020b], Few-shot NLG with pre-trained language model. In ACL, 2020.
1. [Conneau and Lample, 2019], Cross-lingual language model pretraining. In NeurIPS, 2019.
1. [Devlin2019], BERT: pre-training of deep bidirectional transformers for language understanding. In NAACL-HLT, 2019.
1. [Dong2019], Unified language model pretraining for natural language understanding and generation. In NeurIPS, 2019.
1. [Fan2019], Unsupervised pre-training for sequence to sequence speech recognition. CoRR, arXiv preprint arXiv:1910.12418, 2019.
1. [Gehring2017], Convolutional sequence to sequence learning. In ICML, 2017.
1. [Gong2020], Tablegpt: Few-shot table-to-text generation with table structure reconstruction and content matching. In COLING, 2020.
1. [Gu2020], A tailored pre-training model for task-oriented dialog generation. arXiv preprint arXiv:2004.13835, 2020.
1. [Guan2020], Survey on automatic text summarization and transformer models applicability. In CCRIS, 2020.
1. [Hendrycks2020], Pretrained transformers improve out-of- distribution robustness. In ACL, 2020.
1. [Keskar2019], CTRL: A conditional transformer language model for controllable generation. arXiv preprint arXiv:1909.05858, 2019.
1. [Kryscinski2018], Improving abstraction in text summarization. In EMNLP, 2018.
1. [Lan2020], ALBERT: A lite BERT for self-supervised learning of language representations. In ICLR, 2020.
1. [Lewis2020], BART: denoising sequence-to-sequence pre-training for natural language generation, translation, and comprehension. In ACL, 2020.
1. [Li2019], Generating long and informative reviews with aspect-aware coarse-to-fine decoding. In ACL, pages 1969–1979, 2019.
1. [Li2020], Knowledge-enhanced personalized review generation with capsule graph neural network. In CIKM, pages 735–744, 2020.
1. [Li2021a], TextBox: A unified, modularized, and extensible framework for text generation. In ACL, 2021.
1. [Li2021b], Few-shot knowledge graph-to-text generation with pretrained language models. In Findings of ACL, 2021.
1. [Li2021c], Knowledge-based review generation by coherence enhanced text planning. In SIGIR, 2021.
1. [Lin2020], Pretraining multilingual neural machine translation by leveraging alignment information. In EMNLP, 2020.
1. [Liu and Lapata, 2019], Text summarization with pretrained encoders. In EMNLP, 2019.
1. [Mager2020], GPT-too: A language-model-first approach for AMR-to-text generation. In ACL, 2020.
1. [Peters2018], Deep contextualized word representations. In NAACL-HLT, 2018.
1. [Qiu2020], Pre-trained models for natural language processing: A survey. arXiv preprint arXiv:2003.08271, 2020.
1. [Radford2019], Language models are unsupervised multitask learners. OpenAI blog, 1(8):9, 2019.
1. [Raffel2020], Exploring the limits of transfer learning with a unified text-to-text transformer. JMLR, 2020.
1. [Ribeiro2020], Investigating pretrained language models for graph-to-text generation. arXiv preprint arXiv:2007.08426, 2020.
1. [Ross, 2012], Guide for conducting risk assessments. In NIST Special Publication, 2012.
1. [Rothe2020], Leveraging pre-trained checkpoints for sequence generation tasks. TACL, 2020.
1. [Sanh2019], Distilbert, a distilled version of BERT: smaller, faster, cheaper and lighter. arXiv preprint arXiv:1910.01108, 2019.
1. [See2017], Get to the point: Summarization with pointer-generator networks. In ACL, 2017.
1. [Song2019], MASS: masked sequence to sequence pre-training for language generation. In ICML, 2019.
1. [Sun2019a], Contrastive bidirectional transformer for temporal representation learning. arXiv preprint arXiv:1906.05743, 2019.
1. [Sun2019b], Videobert: A joint model for video and language representation learning. In ICCV, 2019.
1. [Vaswani2017], Attention is all you need. In NIPS, 2017.
1. [Wada and Iwata, 2018], Unsupervised cross-lingual word embedding by multilingual neural language models. arXiv preprint arXiv:1809.02306, 2018.
1. [Wolf2019], Transfertransfo: A transfer learning approach for neural network based conversational agents. arXiv preprint arXiv:1901.08149, 2019.
1. [Xia2020], XGPT: cross-modal generative pre-training for image captioning. arXiv preprint arXiv:2003.01473, 2020.
1. [Xu2020a], Discourse-aware neural extractive text summarization. In ACL, 2020.
1. [Xu2020b], Unsupervised extractive summarization by pre-training hierarchical transformers. In EMNLP, 2020.
1. [Yang2020a], CSP: code-switching pre-training for neural machine translation. In EMNLP, 2020.
1. [Yang2020b], TED: A pretrained unsupervised summarization model with theme modeling and denoising. In EMNLP (Findings), 2020.
1. [Zaib2020], A short survey of pre-trained language models for conversational AI-A new age in NLP. In ACSW, 2020.
1. [Zeng and Nie, 2020], Generalized conditioned dialogue generation based on pre-trained language model. arXiv preprint arXiv:2010.11140, 2020.
1. [Zhang2019a], Pretraining-based natural language generation for text summarization. In CoNLL, 2019.
1. [Zhang2019b], HIBERT: document level pre-training of hierarchical bidirectional transformers for document summarization. In ACL, 2019.
1. [Zhang2019c]{#Zhang2019c}, ERNIE: enhanced language representation with informative entities. In ACL, 2019.
1. [Zhang2020], DIALOGPT : Largescale generative pre-training for conversational response generation. In ACL, 2020.
1. [Zhao2020], Knowledge-grounded dialogue generation with pretrained language models. In EMNLP, 2020.
1. [Zheng and Lapata, 2019], Sentence centrality revisited for unsupervised summarization. In ACL, 2019.
1. [Zhou2020], Unified vision-language pre-training for image captioning and VQA. In AAAI, 2020
