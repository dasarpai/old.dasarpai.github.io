---
mathjax: true
id: 6073
title: Embedding with FastText
date: 2023-07-15
permalink: '/dsblog/Embedding-with-FastText'
tags: [NLP, Embedding, FastText] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6073-Embedding-with-FastText.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![Embedding with FastText](/assets/images/dspost/dsp6073-Embedding-with-FastText.jpg)   

# Embedding with FastText

[What is Embedding?](/dsblog/what-is-nlp#what-is-embedding)    
[What are Different Types of Embedding](/dsblog/what-is-nlp#what-are-different-embedding-types)   

## What is FastText?
FastText is an open-source library for efficient learning of word representations and sentence classification developed by Facebook AI Research. It is designed to handle large-scale text data and provides tools for **training** and **using word embeddings**.

FastText is an extension of the popular Word2Vec model that not only learns word embeddings but also **considers subword** information. It represents each word as a bag of character n-grams (subword units), which allows it to capture morphological variations and **handle out-of-vocabulary** words more effectively.

Key features and functionalities of FastText include:

- Word Embeddings: FastText can learn high-quality vector representations (embeddings) for words in a given text corpus. These embeddings capture semantic and syntactic relationships between words, enabling various downstream NLP tasks.

- Subword Information: FastText incorporates subword information by representing words as a sum of character n-grams. This allows it to generate embeddings for words that were not present in the training data and handle morphologically rich languages effectively.

- Efficiency: FastText is designed for scalability and efficiency, enabling training on large-scale datasets. It uses hierarchical softmax and the negative sampling techniques to accelerate training and reduce computational requirements.

- Supervised Text Classification: FastText includes functionality for text classification tasks. It can learn **text classifiers using the same word embeddings by averaging word vectors within a text** and training on labeled data.

- Pretrained Models: Pretrained FastText models are available for various languages and domains, allowing you to leverage pre-trained embeddings in your applications without the need for training from scratch.

- The FastText library provides APIs for training models, loading pre-trained models, and performing operations with word embeddings. It also offers command-line tools for training and evaluating FastText models on custom datasets.

## Sentence Embedding with FastText
FastText is primarily designed for generating word embeddings, but it can also be used to obtain sentence or document embeddings by averaging the word embeddings within a sentence or document. Here's how you can generate sentence or chapter embeddings using the FastText model:

- Preprocess the text:
	- Tokenize the text into sentences or chapters, depending on the granularity you want for the embeddings.
	- Clean and preprocess the sentences or chapters by removing punctuation, stop words, and performing any other necessary text normalization steps.
- Load the FastText model:
	- You can either train your own FastText model on a large corpus or download a pre-trained FastText model. Pre-trained FastText models are available for various languages on the official [FastText website](https://fasttext.cc/docs/en/crawl-vectors.html).
	- Generate sentence or chapter embeddings:
- Iterate through each sentence or chapter and tokenize it into words.
	- For each word, retrieve its corresponding word embedding from the FastText model.
	- Average the word embeddings to obtain a single vector representation for the sentence or chapter. This can be done by simply summing the word embeddings and dividing by the number of words.

Here's a Python code example using the fasttext library to generate sentence embeddings:



```python 
import fasttext

# Load the pre-trained FastText model
model = fasttext.load_model('path/to/pretrained_model.bin')

# Example text
text = "This is an example sentence."

# Tokenize the text into sentences
sentences = text.split('. ')

# Generate sentence embeddings
sentence_embeddings = []
for sentence in sentences:
    words = sentence.split()
    embeddings = [model.get_word_vector(word) for word in words]
    avg_embedding = sum(embeddings) / len(embeddings)
    sentence_embeddings.append(avg_embedding)

# Print the sentence embeddings
for sentence, embedding in zip(sentences, sentence_embeddings):
    print(f"Sentence: {sentence}")
    print(f"Embedding: {embedding}")
    print()
```

The quality of sentence or chapter embeddings obtained by averaging word embeddings may not capture the full context or meaning of the text. There are more advanced techniques and models, such as transformers like BERT or Universal Sentence Encoder (USE), that are specifically designed for generating high-quality sentence or document embeddings.

## FastText vs Other Embedding Model 
FastText and BERT have different strengths and are suitable for different business scenarios. Here are some scenarios where FastText might be a better choice than BERT:

- Efficiency and Speed: FastText is known for its efficiency and faster training times compared to BERT. If you have limited computational resources or a large-scale dataset, FastText can be a more practical option due to its faster training and inference times.
- Resource Constraints: BERT models are larger and require more memory compared to FastText models. If you have resource-constrained environments, such as mobile applications or embedded systems, FastText's smaller model size and lower memory requirements make it a better fit.
- Morphologically Rich Languages: FastText performs well in languages with complex morphology, where words can have multiple variations based on affixes, inflections, or conjugations. By considering subword information, FastText can capture morphological variations effectively. BERT, on the other hand, might struggle with out-of-vocabulary words and morphologically rich languages unless it has been specifically fine-tuned for those languages.
- Word-level Embeddings: If your application primarily relies on word-level embeddings, FastText can be more suitable. FastText provides efficient and effective word embeddings, allowing you to capture semantic relationships and similarities between words.
- Sentence Classification: FastText has built-in functionality for sentence classification tasks. If your business scenario involves tasks such as sentiment analysis, spam detection, or topic classification, FastText's ability to generate sentence-level embeddings and perform classification tasks efficiently can be advantageous.

It's important to note that BERT, with its deep contextual understanding, excels in tasks that require fine-grained understanding of language, such as question answering, natural language understanding, and text generation. BERT's ability to capture context and long-range dependencies is particularly useful in complex language tasks.

Ultimately, the choice between FastText and BERT depends on your specific requirements, available resources, and the nature of the language and tasks involved in your business scenario.

## Is there any better way of doing sentence embedding?
There are several advanced techniques for generating sentence embeddings that often outperform simple averaging of word embeddings. Here are a few popular approaches:

### Universal Sentence Encoder (USE):

The Universal Sentence Encoder, developed by Google, is a widely used model for generating sentence embeddings. It is based on a transformer architecture and is trained on a large amount of data for various NLP tasks.
You can use the pre-trained models available in the [TensorFlow Hub](https://tfhub.dev/google/universal-sentence-encoder) and easily generate high-quality sentence embeddings using the encoder.

### BERT-based models:

Models based on the BERT (Bidirectional Encoder Representations from Transformers) architecture, such as Sentence-BERT, can also generate effective sentence embeddings.   

These models are typically trained on large-scale language modeling or natural language understanding tasks and have achieved state-of-the-art performance in many NLP benchmarks.

### Infersent:

Infersent is a sentence embeddings method introduced by Facebook Research. It utilizes a BiLSTM-based architecture and is trained on a large-scale supervised dataset.
Infersent is particularly effective for capturing semantic meaning and can generate informative sentence embeddings.

### Doc2Vec:

Doc2Vec, an extension of Word2Vec, is a model that can generate document-level embeddings. Doc2Vec considers the context of words within a document and learns fixed-length vector representations for the entire document.   

By using Doc2Vec, you can obtain embeddings at the document or chapter level.
These methods generally provide better sentence embeddings compared to simple averaging of word embeddings because they take into account the context and meaning of the entire sentence. They are often pre-trained on large corpora and fine-tuned for specific downstream tasks. The choice of method depends on your specific requirements and the available resources, such as pre-trained models and computational capabilities.

## What is the Best Embedding for Indian English?
You may have heard terms like Indian English, British English, US English, Australian English etc. We know all English are written in Roman script. If so, then what is the difference? Any language's grammer involves noun. Noun includes name of people, placess, food, relationship name, festivals, books etc. Suppose you pickup Mahabharat or Bagwat Purana and do the translation in English and write that in Roman script. The noun in this text going to be complete different than a book coming from Europe. If you are working on some project which has Roman Script and English language you need to understand what kind of corpus you have. If you want to use existing embedding which was not built using Indian English then you are going to face OOV (out of vocabulary) problem. In that situation what to do?

For example, question answering tasks on a corpus of ancient Indian literature with Sanskrit words, I would recommend using a multilingual language model like mBERT (multilingual BERT) or XLM-R (Cross-lingual Language Model - RoBERTa). These models are trained on a wide range of languages, including English and Sanskrit, and have the ability to capture the context and meaning of text in multiple languages.

XLM-R (XLM-RoBERTa, Unsupervised Cross-lingual Representation Learning at Scale) is a scaled cross lingual sentence encoder. It is trained on 2.5TB (10^12) of data across 100 languages data filtered from Common Crawl. XLM-R achieves state-of-the-arts results on multiple cross lingual benchmarks.

mBERT and XLM-R have been shown to be effective in cross-lingual tasks and can handle Sanskrit words, which may not be well-covered in models trained solely on English data. They can generate word embeddings that capture the semantic meaning of the text and are suitable for tasks like question answering.

To use these models, you can either fine-tune them on your specific question answering task using a labeled dataset or use them as feature extractors to obtain embeddings for your question and text pairs. You can then compute similarity scores between the question and passages to identify the most relevant answers.

Here's a general outline of the steps:

- Preprocess the corpus:
	-  Clean and preprocess the text, removing any unwanted characters or symbols.
	- Tokenize the text into sentences or paragraphs.
- Load the multilingual language model:
	- You can use the [Hugging Face Transformers library](https://huggingface.co/transformers/) to load and work with mBERT or XLM-R.
- Generate word or sentence embeddings:
	- For each sentence or paragraph, pass it through the model to obtain word or sentence embeddings.
	- You can choose to use the final hidden states or pool them in a specific way, depending on your requirements.
- Question processing:
	- Preprocess and tokenize the questions in a similar way to the text.
- Compute similarity:
	- Compute the similarity scores between the question embeddings and the embeddings of the text passages.
	- You can use various similarity metrics such as cosine similarity or dot product.
- Select the most relevant answer:
	- Based on the similarity scores, select the passage or sentence with the highest score as the most relevant answer to the question.

Using a multilingual language model like mBERT or XLM-R will help you leverage the knowledge encoded in the embeddings, considering both English and Sanskrit words present in your corpus.

