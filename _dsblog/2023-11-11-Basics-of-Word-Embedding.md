---
mathjax: true
id: 6101
title: Basics of Word Embedding
date: 2023-11-11
permalink: /dsblog/basics-of-word-embedding
tags: [Word Embedding, NLP, Vector Representation, Text Processing, Machine Learning, Neural Networks, Language Models]
categories:
  - dsblog
keywords: [Word Embeddings, Text Vectorization, Natural Language Processing, Word2Vec, GloVe, BERT Embeddings, Neural Language Models, Text Analysis]
header:
    teaser: /assets/images/dspost/dsp6101-Basics-of-Word-Embedding.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: An introduction to word embeddings in natural language processing. Learn about different techniques for converting words into numerical vectors, including Word2Vec, GloVe, and contextual embeddings from transformer models.   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
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

### Finalize the corpus (Step 1)
In reality corpus is extremely huge size, it is like entire wikipedia text or entire stakeoverflow text or entire quora text. For the illustration of skipgram we are taking a small example.

**Corpus** : The quick brown fox jump over the dog	

### Create Skipgram (Step 2+3+4 )
As discussed earlier created 1 or 2 or 3 window skipgram from the corpus.

 Word | (Step 3) onehot encoding for each word in the corpus | (Step 4) random initial embedding, 4 dimensional
 ---|---|---
the | [1,0,0,0,0,0,0,0]    | [0.11,0.12,0.14,0.15]
quick  | [0,1,0,0,0,0,0,0] | [0.21,0.23,0.24,0.26]
brown | [0,0,1,0,0,0,0,0]  | [0.31,0.34,0.36,0.38]
fox | [0,0,0,1,0,0,0,0]    | [0.51,0.12,0.14,0.15]
jump | [0,0,0,0,1,0,0,0]   | [0.21,0.63,0.24,0.26]
over  | [0,0,0,0,0,1,0,0]  | [0.31,0.34,0.86,0.38]
the  | [0,0,0,0,0,0,1,0]   | [0.71,0.12,0.14,0.15]
dog | [0,0,0,0,0,0,0,1]    | [0.21,0.93,0.24,0.26]

### Create Neural Network (Step 5)
Create a neural network for learning embedding. 
- One input layer which can accept token/words. Convert token (context and target words) into onehot encoding
- One embedding layer, for example sake we are taking 4 dimensional embedding of words. These embedding are randomingly intiated number initally (there are other ways also). 
- One dense layer of 5 neuron (example)
- Softmax function
- Output layer (to predict the probability of the predicted word. If vocabulary size of the corpus is 10,000 words, then softmax will predict 10,000 probabilities)
- Loss function - Cross entropy loss function. L = $$-  \sum_{i=1}^{N} y_{i} \cdot \log(p_{i})$$, N is vocab size.
- 4 numbers from embedding will go to each of the 5 neuron, Each neuron will have 4 weights to embedding layer. 5*4 = 20 weights are learned + 5 biases learned
- Learning Rate LR = .0002

### Training - Forward propagation (Step 6+7+8+9+10) 
- Randomly initialize all the weights and biases of the network.
- Pass target and context word to the network.

Step 6 | - | - | Step 7 | Step 8 | - | Step 9
--- | --- | --- | --- | --- | --- | ---
Input layer | Embedding layer | Hidden layer (5 neuron, random init w\&b), dense layer | matmul between weights and inputs (embedding) | softmax (8 vocab size) | actual vector for "quick" | cross entropy loss
 The (context), quick (target) | context (The)  = [.11,.12,.14,.15] | n1=[.11,.12,.13,.14] | 0.0657 | 0.1867 | 0 | 0.0897
| target (quick) = [.21,.23,.24,.26] | n2=[.13,.14,.15,.16] | 0.0761 | 0.1886 | 1 | 0.7244
|  | n3=[.21..22,.23,.24] | 0.1177 | 0.1966 | 0 | 0.0951
|  | n4=[.32,.33,.34,.35] | 0.1749 | 0.2082 | 0 | 0.1014
|  | n5=[.42,.43,.45,.46] | 0.2298 | 0.2199 | 0 | 0.1079
|  |  |  |  |  | **Step 10**
|  |  |  |  | Total Loss | 1.1185

### Training - backward propagation (Step 11+12)
Updating weights of network neurons

 | Step 11 (Gradient Calculation for 20 weights) | 1 | 2 | 3 | 4
 | --- | --- | --- | --- | ---
 | dL/dw1 | 10.17 | 9.32 | 8.60 | 7.99
 | dL/dw2 | 8.60 | 7.99 | 7.46 | 6.99
 | dL/dw3 | 5.33 | 5.08 | 4.66 | 4.66
 | dL/dw4 | 3.50 | 3.39 | 3.20 | 3.20
 | dL/dw5 | 2.66 | 2.60 | 2.43 | 2.43


Step 12 Updated Weights | 1 | 2 | 3 | 4
--- | --- | --- | --- | ---
new w1 | 0.11 | 0.12 | 0.13 | 0.14
new w2 | 0.13 | 0.14 | 0.15 | 0.16
new w3 | 0.21 | 0.22 | 0.23 | 0.24
new d4 | 0.32 | 0.33 | 0.34 | 0.35
new w5 | 0.42 | 0.43 | 0.45 | 0.46

new weight = old weight - Learning Rate * DL/dW

### Update Embedding (Step 13+14 )

Old Embedding (Vector) | 1 | 2 | 3 | 4
--- | --- | --- | --- | ---
context (The)  = [.11,.12,.14,.15] | 0.110 | 0.120 | 0.140 | 0.150
target (quick) = [.21,.23,.24,.26] | 0.210 | 0.230 | 0.240 | 0.260

Step 13 (Gradient of Old Embedding) |  |  |  | 
--- | --- | --- | --- | 
dL/context | 10.17 | 9.32 | 7.99 | 7.46
dL/target | 5.33 | 4.86 | 4.66 | 4.30

Step 14 (Updated Embedding) |  |  |  | 
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

## Other Methods of Embedding

### TF-IDF
TF-IDF - Term Frequency - Inverse Document Frequency, is an old, traditional, frequency based text embedding technique. It is not based on neural network architecture therefore does not need expensive hardware to create these embedding and use TF-IDF embedding. Like skipgram or CBOW it is not vector based but frequency based, therefore understandign symantic of the text is not possible with TF-IDF. There is no use of pretrained embedding, everytime we have a corpus we need to create embedding for that and it is used only for that. We cannot use TF-IDF embedding, which was created using news text for something else, say history or enterainment. Thus, embedding transfer is meaninless but task transfer can be done. It means TF-IDF embedding which is used for classficittion purpose can be used for other task like topic modelling, sentiment analysis etc. Obviously there is a limit, we cannot use it for other task like translation or summarization.

#### How TF-IDF works?
- Term frequency (TF): The number of times a word appears in a document.
- Inverse document frequency (IDF): The logarithm of the number of documents in the collection divided by the number of documents that contain the word.
- The TF-IDF score for a word in a document is calculated as follows:
- TF-IDF = TF * IDF (The higher the TF-IDF score, the more important the word is to the document.)

```python
Document_1: "The quick brown fox jumps over the lazy dog."
Document_2: "The dog is lazy, but the fox is quick."

# Term frequency for the word "quick" in Document 1
TF(quick, Document_1) = 1

# Inverse document frequency for the word "quick"
IDF(quick) = log(2 / 1) = 0

# TF-IDF score for the word "quick" in Document 1
TF-IDF(quick, Document_1) = TF(quick, Document_1) * IDF(quick) = 1 * 0 = 0

# Term frequency for the word "quick" in Document 2
TF(quick, Document_2) = 1

# Inverse document frequency for the word "quick"
IDF(quick) = log(2 / 1) = 0

# TF-IDF score for the word "quick" in Document 2
TF-IDF(quick, Document_2) = TF(quick, Document_2) * IDF(quick) = 1 * 0 = 0

# Term frequency for the word "lazy" in Document 1
TF(lazy, Document_1) = 1

# Inverse document frequency for the word "lazy"
IDF(lazy) = log(2 / 1) = 0

# TF-IDF score for the word "lazy" in Document 1
TF-IDF(lazy, Document_1) = TF(lazy, Document_1) * IDF(lazy) = 1 * 0 = 0

# Term frequency for the word "lazy" in Document 2
TF(lazy, Document_2) = 1

# Inverse document frequency for the word "lazy"
IDF(lazy) = log(2 / 1) = 0

# TF-IDF score for the word "lazy" in Document 2
TF-IDF(lazy, Document_2) = TF(lazy, Document_2) * IDF(lazy) = 1 * 0 = 0
```


### GloVe (Global Vectors) 
GloVe is a method that learns word embeddings from global word-word co-occurrence statistics. It is similar to Skipgram and CBOW, but it is better at capturing long-range semantic relationships between words. GloVe embedding is good for text classification, and machine translation (MT).

#### How GloVe embedding works?
- Tokenize the corpus: Split the corpus into individual words and punctuation marks.
- Count word co-occurrences: For each word in the vocabulary, count how many times it co-occurs with other words in a given window size.
- Build a word-word co-occurrence matrix: The word-word co-occurrence matrix is a square matrix, where each row and column represents a word in the vocabulary. The value at each cell in the matrix represents the number of times the two corresponding words co-occur in the corpus.
- Factorize the word-word co-occurrence matrix: Factorize the word-word co-occurrence matrix into two lower-dimensional matrices, one for **word embeddings** (relationship between words) and one for **context embeddings** (relationship between words in the context). We can factorize the word-word co-occurrence matrix using a variety of matrix factorization techniques, such as singular value decomposition (SVD) or nonnegative matrix factorization (NMF).
- Normalize the word embeddings: Normalize the word embeddings so that they have a unit length. We can normalize the word embeddings by dividing each embedding by its L2 norm. This will ensure that all of the embeddings have a unit length.

```python
import numpy as np
from gensim.models import KeyedVectors

# Load the corpus
corpus = open("corpus.txt", "r").read()

# Tokenize the corpus
tokens = corpus.split()

# Count word co-occurrences
word_co_occurrences = np.zeros((len(tokens), len(tokens)))
for i in range(len(tokens)):
    for j in range(len(tokens)):
        if tokens[i] != tokens[j]:
            word_co_occurrences[i, j] = tokens.count(tokens[i] + " " + tokens[j])

# Factorize the word-word co-occurrence matrix
glove_model = KeyedVectors(word_vectors=word_co_occurrences, size=100)

# Save the word embeddings
glove_model.save("glove_embeddings.txt")

```

How SVD (Singular Value Decomposition) works?

```python
import numpy as np

# Create a word-word co-occurrence matrix
word_co_occurrences = np.array([
    [1, 2, 3],
    [2, 1, 4],
    [3, 4, 1]
])

# Perform SVD
U, S, Vh = np.linalg.svd(word_co_occurrences)

# Truncate the singular values
S_truncated = S[:2]

# Reconstruct the word-word co-occurrence matrix
word_co_occurrences_reconstructed = np.dot(U[:, :2], np.dot(S_truncated, Vh[:, :2]))

# Print the reconstructed word-word co-occurrence matrix
print(word_co_occurrences_reconstructed)

# Results
[[-0.50578521 -0.25523155]
 [-0.58437383 -0.60130182]
 [-0.63457746  0.75716113]]
[[-0.50578521 -0.58437383]
 [ 0.25523155  0.60130182]
 [ 0.82403773 -0.54492509]]
```

### BERT (Bidirectional Encoder Representations from Transformers)
BERT is a transformer-based language model that can learn word embeddings from unlabeled text, we need not to create skipgram pairs. BERT embeddings are particularly good at capturing **contextual information**. BERT embedding is good for MT, QA, Classification tasks.

#### How BERT does embedding?
- Tokenization: The first step is to tokenize the sentence into words. This means splitting the sentence into individual words, including punctuation marks. The tokenized sentence is then represented as a sequence of integers (we create ids), where each integer represents a word in the vocabulary.
- Word embedding lookup: BERT uses a pre-trained word embedding table to convert each word in the sequence into a vector of numbers. This vector represents the meaning of the word in a distributed manner.
- Segment embedding lookup: BERT also uses a segment embedding table to encode the position of each word in the sentence. This is necessary because BERT is a bidirectional language model, and it needs to know the context of each word in order to learn meaningful embeddings.
- Positional embedding lookup: BERT also uses a positional embedding table to encode the absolute position of each word in the sentence. This is necessary because BERT needs to know the order of the words in the sentence in order to learn meaningful embeddings.
- Transformer encoding: The encoded sequence of word embeddings, segment embeddings, and positional embeddings is then passed to the transformer encoder. The transformer encoder is a neural network architecture that learns long-range dependencies between words in a sentence.
- Output embedding: The output of the transformer encoder is a sequence of vectors, where each vector represents the embedding of the corresponding word in the sentence. These embeddings are then used for downstream natural language processing tasks, such as machine translation, text classification, and question answering.

```python 
# Tokenize the sentence
sentence = "The quick brown fox jump over the lazy fox"
tokens = sentence.split()

# Convert each word to a word embedding vector
word_embeddings = []
for token in tokens:
    word_embeddings.append(bert_model.get_word_embedding(token))

# Create segment embeddings
segment_embeddings = []
for i in range(len(tokens)):
    if i < len(tokens) // 2:
        segment_embeddings.append(bert_model.get_segment_embedding(0))
    else:
        segment_embeddings.append(bert_model.get_segment_embedding(1))

# Create positional embeddings
positional_embeddings = []
for i in range(len(tokens)):
    positional_embeddings.append(bert_model.get_positional_embedding(i))

# Encode the sentence
encoded_sentence = bert_model.encode(word_embeddings, segment_embeddings, positional_embeddings)

# Output embeddings
output_embeddings = encoded_sentence
```

### FastText (Fast Text)
FastText is a modification of Skipgram that can learn embeddings for words and subwords. This makes it better at representing rare words and out-of-vocabulary words. FastText is good for name-entity-recognition (NER) & Question Answering (QA) tasks.

### ELMo (Embeddings from Language Models)

ELMo (Embeddings from Language Models) is a deep contextual word embedding technique that uses a bidirectional language model (biLM) to learn word representations. A biLM is a type of neural network that can learn to predict the next word in a sentence, as well as the previous word. Unlike skipgram, which predicts next words, biLM is bidirectional. From a target word biLM can predict next and previous words.


# Resources
If you want to understand all skipgram/cbow caluclation with excel and then you can use this [calculation sheet](https://docs.google.com/spreadsheets/d/1eU4EVtUzD1w_ILcpJVTc6oK2KH9vEDK7OuXFtyv1_gU/edit?usp=sharing)