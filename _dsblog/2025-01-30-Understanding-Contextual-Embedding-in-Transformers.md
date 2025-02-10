---
mathjax: true
id: 6214
title: "Understanding Contextual Embedding in Transformers"
date: 2025-01-30
permalink: /dsblog/understanding-contextual-embedding-in-transformers
tags:
  - Transformers
  - Embeddings
  - Deep Learning
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6214-Understanding-Contextual-Embedding-in-Transformer.jpg
excerpt_separator: "<!--more-->"
author: Jane Smith
layout: dspost-layout
excerpt: "Dive into the world of contextual embeddings in transformer models and their transformative impact on NLP."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
keywords: ["Transformers", "Embeddings", "Deep Learning", "NLP"]
---

![Understanding Contextual Embedding in Transformers](/assets/images/dspost/dsp6214-Understanding-Contextual-Embedding-in-Transformer.jpg)

## Introduction
Embedding can be confusing for many people, and contextual embedding performed by transformers can be even more perplexing. Even after gaining an understanding, many questions remain. In this article, we aim to address the following questions.

- What is Embedding?
- What is Fixed Embedding?
- How Transformers Handle Context
- How this token 'bank' and corresponding embedding is stored in embedding database?
- How contextural embedding is generated?
- What will be the output size of attention formula softmax?
- What is meaning of a LLM has context length of 2 million tokens?
- How many attention layers we keep in transformer like gpt4?
- What is the meaning of 96 attention layers, are they attention head count?

## What is Embedding?
An embedding is a way to represent discrete data (like words or tokens) as continuous vectors of numbers.

for example
```
"cat" → [0.2, -0.5, 0.1, 0.8, ...]  # e.g., 100 dimensions vector
"dog" → [0.3, -0.4, 0.2, 0.7, ...]
```

Each dimension potentially represents some feature, they may be Masculinity/femininity, Animate/inanimate, Abstract/concrete etc.

Embedding helps 
- convert discrete symbols into a numbers which can be processed by neural networks. 
- These numbers can also capture the relationships between words and in sementic operations like Queen = King - Man + Woman. 
- Reduce dimensionality (compared to one-hot encoding)


## What is Fixed Embedding?
A word "bank" can have multiple meaning linking to finance, dependence or river. In LLM when we do the tokenization in all case the token for this word will be same. But, what about embedding when 'bank' word appears in different contexts

**Word Embeddings vs. Contextual Embeddings**

In traditional word embeddings (like Word2Vec or GloVe):
- Each word has a single, static embedding vector
- "bank" would have the same embedding regardless of context
- This is a limitation, as it can't distinguish between financial bank vs. river bank

In contextual embedding (transormer models like BERT, GPT):
- Words get contextual embeddings that change based on surrounding text
- "bank" gets different embedding representations depending on its usage
- The model learns to create distinct representations for different meanings

## How Transformers Handle Context

Let's look at examples:
```
"I went to the bank to deposit money"
"The river bank was muddy"
```

In these sentences:
- The initial token embeddings are combined with positional encodings
- Each self-attention layer considers the relationships between "bank" and other words
- Words like "deposit," "money," "river," and "muddy" influence how "bank" is represented
- The resulting contextual embeddings for "bank" will be different in each case

Step 1. Initial Embedding:
   - The word "bank" is first tokenized
   - It gets a base embedding from the embedding layer (typically there are different models for this work, these models are called embedding models)

Step 2. Contextual Processing:
   - Self-attention mechanisms look at surrounding words
   - Each attention head can focus on different aspects of meaning
   - Multiple transformer layers progressively refine the representation

Step 3. Final Representation:
   - The final embedding captures the specific meaning in that context
   - The financial "bank" embedding will be closer to other financial terms
   - The geographical "bank" embedding will be closer to other geographical terms

Real-world Example

Consider these vectors (simplified for illustration):
```python
# Hypothetical embedding dimensions
bank = [0.8, 0.1, 0.3, ...]  # if this is financal bank then it will be close to the words like "money", "deposit"
bank = [0.2, 0.7, 0.9, ...]  # if this is related to river then it will be close to words like "water", swimming,"river", "shore"
```

The transformer model automatically generates these different representations based on context, allowing it to:
- Understand the appropriate meaning
- Make relevant predictions
- Handle ambiguity effectively

This is why transformers are so powerful at handling polysemy - they don't just look up static word meanings but dynamically construct meanings based on context, much like humans do.

## How this token 'bank' and corresponding embedding is stored in embedding database?

**1. Token Storage (Vocabulary)**   
- The tokenizer maintains a fixed vocabulary mapping
- "bank" as a token is stored in a vocabulary dictionary/lookup table
- Each token has a unique integer ID
- Example vocabulary entry:
```python
vocab = {
    "bank": 2847,  # unique ID
    "bank": "▁bank",  # actual token (might include special chars for word boundaries. Plus actual token need not be a complete word, for example you will not time one token for a word "simultaneously")
}
```

**2. Embedding Storage:**   
- The embedding layer is implemented as a matrix/lookup table
- Dimensions: (vocab_size × embedding_dim)
- Each row corresponds to a token's base embedding vector
- Example structure:
```python
embedding_matrix = torch.FloatTensor(vocab_size, embedding_dim)
# For token "bank" with ID 2847:
base_embedding = embedding_matrix[2847]  # Gets base embedding vector
```

Key Points:
- There is only ONE base embedding vector per token
- The contextual embeddings are generated on-the-fly during processing
- The model doesn't store different embeddings for different meanings
- The context-specific meanings emerge from the transformer layers

**3. What's Actually Stored:**   
```
Token Storage:
"bank" -> 2847 (ID)

Embedding Matrix:
Row 2847: [0.1, 0.3, -0.2, ...] (base embedding vector)
```

**4. During Processing:**   
```python
# When processing "financial bank":
input_ids = tokenizer.encode("I went to the bank to deposit money")
base_embeddings = embedding_matrix[input_ids]  # Look up base embeddings
contextual_embeddings = transformer_layers(base_embeddings)  # Generate context-specific embeddings

# When processing "river bank":
input_ids = tokenizer.encode("The river bank was muddy")
base_embeddings = embedding_matrix[input_ids]  # Same base embeddings
contextual_embeddings = transformer_layers(base_embeddings)  # Different context-specific embeddings
```

The different meanings of "bank" emerge from:
- The transformer's attention mechanisms
- Layer-by-layer contextual processing
- Interaction with surrounding tokens

Important Note:
- The model doesn't explicitly store different embeddings for different meanings
- It learns to transform the base embedding based on context
- This makes the system more efficient and flexible
- The meaning disambiguation happens dynamically during processing

Token "bank" → Base Embedding → Transformer Layers → Contextual Embedding
                                     ↑
                           (considers surrounding context)

**5. Post Processing**      
- The contextual embeddings are used temporarily for the current task
- They exist only during processing (encoding/decoding)
- After the task is complete, only the results are kept, not the intermediate contextual embeddings

## How contextural embedding is generated?
To generate that contextual embedding we take help of that formula of Query (Q), Key (K), and Value (V) given in "Attention is all you need" paper?


**1. For each token's base embedding, the model creates:**   

```
Q = W_q × base_embedding  (Query)
K = W_k × base_embedding  (Key)
V = W_v × base_embedding  (Value)
```

**2. The attention formula then is:** 

```
Attention(Q, K, V) = softmax(QK^T/√d_k)V
```
Where:
- QK^T computes compatibility scores between tokens
- √d_k is the scaling factor to prevent vanishing gradients
- softmax creates attention weights
- Final multiplication with V produces the contextual representation

**3. Example for "bank":**   
- When processing "bank" in "river bank":
  - Q for "bank" will attend more strongly to "river"
  - The resulting contextual embedding shifts toward geographical meaning

- When processing "bank" in "deposit money at the bank":
  - Q for "bank" will attend more strongly to "deposit", "money"
  - The resulting contextual embedding shifts toward financial meaning

**4. Multi-head attention:**   
- Multiple sets of Q, K, V transformations
- Each head can focus on different aspects of context
- Results are concatenated and linearly transformed

This mechanism allows the model to dynamically weigh different aspects of context when creating the contextual embeddings for each token. 

## What will be the output size of attention formula softmax?
If d_k=1024 and based embedding is 1024 then in that what will be the output size of attention formula softmax?

1. Initial dimensions:   
- Base embedding dimension = 1024
- d_k = 1024
- Let's say we have a sequence length of n tokens

2. Creating Q, K, V matrices:   
- Q: (n × d_k) = (n × 1024)
- K: (n × d_k) = (n × 1024)
- V: (n × d_k) = (n × 1024)

3. In the attention formula:   
```
QK^T/√d_k
```
- Q: (n × 1024)
- K^T: (1024 × n)
- QK^T results in: (n × n) matrix
- This represents attention scores between every token pair. There are n token and it is nxn correlation matrix.

4. After softmax:   
- Input: (n × n) matrix
- Output: (n × n) matrix of attention weights
- Each row sums to 1

5. Final multiplication with V:   
```
softmax(QK^T/√d_k)V
```
- Attention weights: (n × n)
- V: (n × 1024)
- Result: (n × 1024)

So the softmax actually operates on an (n × n) attention matrix. The 1024 dimension (d_k) is used for the intermediate calculation but doesn't determine the final attention matrix size. The attention matrix size depends on the sequence length n (how many tokens are in your input).

For example, if you're processing 5 tokens:   
- Attention matrix would be 5×5
- Each token can attend to all other tokens
- Final output preserves the sequence length and embedding dimension: 5×1024

## What is meaning of a LLM has context length of 2 million tokens?
In the case of LLM like gemini where they say context length is 2 million tokens, in that case this n is 2 millions?

Yes, theoretically in that case n would be 2 million, which reveals one of the biggest challenges in transformer architecture - the quadratic complexity problem.

Let's break down what this means:

1. Memory Requirements:
- For 2M tokens, attention matrix is 2M × 2M
- That's 4 trillion (4 × 10^12) elements
- Even with float16 precision, this needs ~8TB of memory just for one attention layer

2. Computational Complexity:
- Computing QK^T is O(n²)
- For n = 2M, that's 4 trillion operations per attention layer
- Multiple this by number of heads and layers

This is why models like Gemini likely use optimization techniques to handle such long contexts:

1. Sparse Attention:
- Not all tokens attend to all other tokens
- Use patterns like local attention, sliding windows
- Reduces from O(n²) to O(n log n) or even O(n)

2. Memory-efficient techniques:
- Flash Attention
- Sparse or linear transformers
- State space models
- Rotary position embeddings

3. Attention Patterns like:
- Sliding window attention
- Dilated attention
- Hierarchical attention

Without these optimizations, the original transformer attention mechanism would be computationally infeasible for such long contexts. 

## How many attention layers we keep in transformer like gpt4?

The exact architecture details of GPT-4 aren't public, but we can discuss what's known about transformer architectures in general and earlier models:

1. Typical Structure:
- Multiple transformer blocks/layers (anywhere from 12 to hundreds)
- Each block contains:
  - Multi-head attention layer
  - Feed-forward neural network
  - Layer normalization
  - Residual connections

2. Known Examples:
- GPT-3 (175B parameter model):
  - 96 attention layers
  - 96 heads per layer
- GPT-2:
  - Large variant: 48 layers
  - Medium: 24 layers
  - Small: 12 layers

3. General Pattern:
- Larger models tend to have more layers
- Common to use powers of 2 for layer counts
- Often balanced with number of attention heads
- More layers = deeper understanding but more compute

4. Trade-offs:
- More layers = better performance but:
  - Higher computational cost
  - More memory usage
  - Longer inference time
  - Risk of vanishing gradients


## What is the meaning of 96 attention layers, are they attention head count?
N
1. Layer vs Head Count:
- Number of layers and heads are independent parameters
- A model with 96 layers might have 12, 20, or 96 heads per layer
- The head count doesn't need to match layer count

2. Example Configurations:
```
GPT-3:
- 96 layers
- 96 attention heads per layer

BERT-base:
- 12 layers
- 12 attention heads per layer

BERT-large:
- 24 layers
- 16 attention heads per layer
```

3. Each Layer's Structure:
```
Transformer Layer
│
├── Multi-Head Attention (e.g., 12 heads)
│   ├── Head 1: (Q1,K1,V1)
│   ├── Head 2: (Q2,K2,V2)
│   └── ... up to Head 12
│
├── Feed Forward Network
└── Layer Normalization
```

4. Process Flow:
- Input → Layer 1 (12 heads) → Layer 2 (12 heads) → ... → Layer 96 (12 heads)
- Each head in a layer processes the same input differently
- Results from all heads are concatenated and projected

**The number of heads is more about parallel processing of different attention patterns, while the number of layers is about depth of processing.**