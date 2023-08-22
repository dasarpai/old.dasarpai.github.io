---
mathjax: true
id: 6088
title: Paper-Summary- A Survey Paper# Pretrained Language Models for Text Generation
date: 2023-08-18
permalink: '/dsblog/rps-Pretrained-Language-Models-for-Text-Generation'
tags: [AI Paper, NLP, Pretrained Model]
categories:

header:
    teaser: /assets/images/dspost/dsp6088-rps-Pretrained-Language-Models-for-Text-Generation.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Pretrained Language Models for Text Generation](/assets/images/dspost/dsp6088-rps-Pretrained-Language-Models-for-Text-Generation.jpg)
  
**Paper Name :- Pretrained Language Models for Text Generation: A Survey**  
Typer of Paper:- Survey Paper     
[Paper URL](https://arxiv.org/abs/2105.10311)    

# Paper Summary :- Pretrained Language Models for Text Generation

## Ideas from the Paper

### Main Ideas
- This paper discusses "major advances achieved in the topic of PLMs for text generation"
- This survey aims to provide "text generation researchers a synthesis" and pointer to related research.

### General Ideas
- Text generation has become one of the most important yet challenging tasks in natural language processing (NLP). 
- Neural generation model are deep learning models
- Pretrained language models (PLMs) are neural generation model

### Tasks and Typical Applications
- In most cases, text generation is conditioned on input data, such as attributes, text and structured data, which is denoted as X. Formally, the text generation task can be described as: P(YjX ) = P(y1; : : : ; yj ; : : : ; ynjX )
- If X is not provided or a random noise vector z, this task will degenerate into language modeling or unconditional
generation task(generate text without any constraint) [Radford2019](/dsblog/aip#radford2019)
- If X is a set of discrete attributes (e.g., topic words, sentiment labels), the task becomes topic-to-text generation or
attribute-based generation.  X plays the role of guiding the text generation. [Keskar2019](/dsblog/aip#Keskar2019). 
- If X is structured data like knowledge graph or table, this task will be considered as KG-to-text or table-to-text generation (generate descriptive text about structured data), called data-to-text generation [Li2021c](/dsblog/aip#Li2021c).
- If X is multimedia input such as image, the task becomes image caption [Xia2020](/dsblog/aip#Xia2020) 
- If X is multimedia input such as speech, the task become speech recognition [Fan2019](/dsblog/aip#Fan2019). 
- If X text sequence (most common form), there are several applications such as machine translation, summarization and dialogue system. 
- Machine translation aims to translate text from one language into another language automatically [Conneau2019](/dsblog/aip#Conneau2019)
- Generating condensed summary of a long document [Zhang2019b](/dsblog/aip#Zhang2019b)
- Dialogue system to converse with humans using natural language. [Wolf2019](/dsblog/aip#Wolf2019)

## Architectures for Text Generation
- Encoder-decoder Transformer. It is two stacks of Transformer blocks. The encoder is fed with an input sequence, while the decoder aims to generate the output sequence based on encoder-decoder self-attention mechanism.
    - MASS [Song2019](/dsblog/aip#song2019) 
    - T5 [Raffel2020](/dsblog/aip#raffel2020)
    - BART [Lewis2020](/dsblog/aip#lewis2020) 
- Decoder-only Transformer. Employ a single Transformer decoder blocks. They apply unidirectional self-attention masking that each token can only attend to previous tokens. 
    - GPT [Radfordet2019](/dsblog/aip#radfordet2019); [Brown2020](/dsblog/aip#brown2020)
    - CTRL [Keskar2019]

## Modeling Different Data Types from Input

- Hierarchical BERT to learn interactions between sentences with self-attention for document encoding. [Zhang2019b] and [Xu2020b]
- Capturing intersentential relations, DiscoBERT [Xu2020a] stacked graph convolutional network (GCN) on top of BERT to model structural discourse graphs. 
By directly operating on the discourse units, DiscoBERT retains capacities to include more concepts or contexts, leading to more concise and informative output text. 



- Cross-lingual language models (XLMs) for multilingual language understanding. [Conneau2019]
- Text generation models can obtain effective input word embeddings even in a low-resource language [Wada and Iwata, 2018].



and show excellent few-shot capabilities
in many tasks. Motivated by this, Chen et al. [2020b] and
Gong et al. [2020] explored incorporating PLMs for data-totext
generation, especially in few-shot settings.
When applying PLMs to structured data, a major challenge
is how to feed structured data into PLMs, which are originally
designed for sequential text. To adapt to the sequential nature
of PLMs, Ribeiro et al. [2020] and Mager et al. [2020] linearized
input knowledge graph (KG) and abstract meaning
representation (AMR) graph into a sequence of triples, Li et
al. [2021b] introduced an additional graph encoder to encode
the input KG, and Gong et al. [2020] employed a templatebased
method to serialize input table into text sequence. For
example, the attribute-value pair “name: jack reynolds” will
be serialized as a sentence “name is jack reynolds”. However,
direct linearization will lose the structural information
of original data, which may lead to generating unfaithful text
about data. Thus, in addition to generating faithful text, Gong
et al. [2020] proposed an auxiliary reconstruction task for recovering
the structural information of input data, which can
enhance the capacity of modeling structural information.
In general, the output text should retain as much as important
information from structured data. Therefore, to generate
high-fidelity text adhereing to input, the pointer generator
mechanism [See2017] is adopted to copy words
from input knowledge data [Chen2020b]. Through
grounding PLMs on external knowledge, it is likely to endow
a generative model with both rich knowledge and good generalization
ability. Besides, Gong et al. [2020] proposed a
content matching loss for measuring the distance between the
information in input data and the output text.
4.3 Multimedia Input
In addition to the above textual data, several attempts have
been made to take as input multimedia data (e.g., image,
video, and speech) such as image caption and speech recognition.
Both VideoBERT [Sun2019b] and CBT [Sun
et al., 2019a] conducted pretraining for the video caption
task. While, they performed pretraining only for the BERTbased
encoder to learn bidirectional joint distributions over
sequences of visual and linguistic tokens. So they have
to train a separate video-to-text decoder, which tends to
cause a pretrain-finetune discrepancy. In contrast, Unified
VLP [Zhou2020] used a shared multi-layer Transformer
network for both encoding and decoding. Following
UniLM [Dong2019], they pretrained the model on two
masked language modeling (MLM) tasks, like cloze tasks designed
for sequence-to-sequence LM. Inspired by generative
pretraining objectives in GPT, Xia et al. [2020] proposed a
cross-modal pretrained model (XGPT) by taking images as
inputs and using the image caption task as the basic generative
task in the pretraining stage. Besides image and video, speech recognition is also hungry
for human-transcripted supervised data. So a number of
unsupervised and semi-supervised methods are developed to
integrate PLMs for weakly-supervised learning. For example,
Fan et al. [2019] proposed an unsupervised approach to
pretraining encoder-decoder model with unpaired speech and
transcripts. Two pretraining stages are used to extract acoustic
and linguistic information with speech and transcripts,
which is useful for downstream speech recognition task.

## Satisfying Special Properties for Output Text

Generated text should satisfy several key properties like. relevance, faithfulness, and order-preservation.

Relevance. According to the linguistic literatures [Li et al.,
2021c], in text generation, relevance refers that the topics
in output text is highly related to the input text. A representative
example is the task of dialogue systems, which requires
the generated response to be relevant to the input dialogue
history. In addition to the dialogue history, a condition
corresponding to the type of response might be also
provided as an external input such as the topic of response
and the persona of speaker. The generated responses should
also be relevant to the condition. Recently, due to the absence
of long-term memory, RNN-based models still tend to
generate irrelevant output text and lack consistency with input.
Therefore, through applying PLMs to the task of dialogue
systems, TransferTransfo [Wolf2019] and DialoGPT
[Zhang2020] were able to generate more relevant
and context-consistent responses than traditional RNNbased
models. Furthermore, to generalize to various types
of conditions, Zeng and Nie [2020] utilized elaborated condition
blocks to incorporate external conditions. They used
BERT for both encoder and decoder by utilizing different input
representations and self-attention masks to distinguish the
source and target sides of dialogue. On the target (generation)
side, a new attention routing mechanism is adopted to generate
context-related words. Similar approaches have been used
in non-conditioned dialogue [Bao2020].
Faithfulness. Similarly, faithfulness is also a critical property
of text, which means the content in generated text should
not contradict the facts in input text. Sometimes, it further
means the generated text is in accord with the world facts.
A representative example is the task of text summarization,
which aims to generate faithful text representing the most important
information within the original content. Pretrained
on large collections of text, PLMs are potentially beneficial
to generate faithful text by utilizing background knowledge.
Rothe et al. [2020] experimented with a large number of settings
to initialize the encoder and decoder with three outstanding
PLMs, i.e., BERT, GPT and RoBERTa. With pretraining,
the models are more aware of the domain characteristics
and less prone to language model vulnerabilities. Consequently,
they are more confident in predicting tokens from
the document, hence, improving faithfulness. To improve the

level of faithfulness of summary, Kryscinski et al. [2018] proposed
to decompose the decoder into a contextual network
that retrieves relevant parts of the source document and a
PLM that incorporates prior knowledge about language generation.
Also, to generate faithful text in different target domains,
Yang et al. [2020b] fine-tuned PLMs on target domains
through theme modeling loss. The role of the theme
modeling module is to make the generated summary semantically
close to the original article.
Order-preservation. In NLP area, order-preservation denotes
that the order of semantic units (word, phrase, etc.)
in both input and output text is consistent. The most representative
example is the task of machine translation. When
translating from source language to target language, keeping
the order of phrases consistent in source language and
target language will ensure the accuracy of the translation
results to some extent. One line of research to achieve
the order-preservation property is to perform semantic alignment
in machine translation. Yang et al. [2020a] proposed
Code-Switching Pre-training (CSP) for machine translation.
They extracted the word-pair alignment information from the
source and target language, and then applied the extracted
alignment information to enhance order-preserving. Besides,
it is more common to perform translation across multiple
languages, called multilingual machine translation [Conneau
and Lample, 2019]. However, little work can effectively enhance
order-preservation for any pairs of languages. Thus,
Lin et al. [2020] proposed mRASP, an approach to pretraining
a universal multilingual machine translation model. The
key to mRASP is the technique of randomly aligned substitution,
which enforces words and phrases with similar meanings
across multiple languages to be aligned in the representation
space. Also, Wada and Iwata [2018] focused on aligning
word representations of each language, making it possible to
preserve the word order consistent cross multiple languages.


## Paper Outcome
- General task deﬁnition
- Describe the mainstream architectures of PLMs for text generation. 
- How to adapt existing PLMs to model different input data and satisfy special properties in the generated text. 
- Summarize several important ﬁne-tuning strategies for text generation. 

## Introduction 
- Researchers have developed numerous techniques for a wide range of applications of text generation [Li2021a].
- Machine translation generates text in a different language based on the source text [Yang2020a];
- Summarization generates an abridged version of the source text to include salient information [Guan2020].
- Text generation tasks based on 
    - Recurrent neural networks (RNN) [Li2019], 
    - Convolutional neural networks (CNN) [Gehring2017], 
    - Graph neural networks (GNN) [Li2020], 
    - Attention mechanism [Bahdanau2015]. 
- One of the advantages of these neural models is that they enable end-to-end learning of semantic mappings from input to output in text generation.
- Neural models are able to learn low-dimensional, dense vectors to implicitly represent linguistic features of text, which is also useful to alleviate data sparsity.
- Deep neural networks usually have a large number of parameters to learn, which are likely to overﬁt on these small datasets and do not generalize well in practice.
- The idea behind PLMs is to ﬁrst pretrain the models in large-scale corpus and then ﬁnetune these models in various downstream tasks to achieve
state-of-the-art results. 
- PLMs can encode a large amount of linguistic knowledge from corpus and induce universal representations of language. 
- PLMs are generally beneﬁcial for downstream tasks and can avoid training a new model from scratch [Brown2020]. 
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


