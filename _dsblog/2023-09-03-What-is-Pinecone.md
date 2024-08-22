---
mathjax: true
id: 6097
title: What is Pinecone
date: 2023-09-03
permalink: /dsblog/What-is-Pinecone
tags: [ML Models, Vector Embedding, LLM]
categories:
header:
    teaser: /assets/images/dspost/dsp6097-What-is-Pinecone.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![What is Pinecone](/assets/images/dspost/dsp6097-What-is-Pinecone.jpg)

## What is pinecone?
Pinecone is a managed vector database that provides vector search (or “similarity search”) for developers with a straightforward API and usage-based pricing. It’s free to try. [Introduction to Vector Search for Developers](https://www.pinecone.io/learn/vector-search-basics/).


## What is a [Vector Database](https://www.pinecone.io/learn/vector-database/)?
Your must have heard about relational database, graph database, object datbase. But this article is about Vector Database.

All AI Models need data for training and inference purposes. This data may be of different modalities like voice, image, text, tabular, etc. To train the model or to get the prediction from the model we need to input this data.  We need to devise a mechanism to convert this data into a format where we can perform mathematical operations on this data. This process of converting the original data into some floating point number, which represents the original object is called embedding. We create a vector embedding for each corresponding object. A database where you store these vectors of the objects is called a vector database. If you create the vector embedding for the objects during processing and do not store it for future reference then you waste compute resources to get the embedding and time to do this again and again. Therefore, it makes sense to compute the vector embedding of every object and store that in a vector database, and for doing our work like search, sorting, recommendation, summarisation etc. we use these embeddings from the vector database.


## How Vector Embedding is Useful?
- First, we use the embedding model to create vector embeddings for the content we want to index.
- The vector embedding is inserted into the vector database, with some reference to the original content the embedding was created from.
- When the application issues a query, we use the same embedding model to create embeddings for the query and use those embeddings to query the database for similar vector embeddings. And as mentioned before, those similar embeddings are associated with the original content that was used to create them.


## Working of Vector Database.
Traditional search (in a database or normal text file or file system) works on matching the string using regex or exactly same operations. Vector database search works on similary search and this similary is calculated using cosine or eucledian or dot product between the vector.


A vector database uses a combination of different algorithms that all participate in Approximate Nearest Neighbor (ANN) search. These algorithms optimize the search through hashing, quantization, or graph-based search.


These algorithms are assembled into a pipeline that provides fast and accurate retrieval of the neighbors of a queried vector. Since the vector database provides approximate results, the main trade-offs we consider are between accuracy and speed. The more accurate the result, the slower the query will be. However, a good system can provide ultra-fast search with near-perfect accuracy.


## What is the common pipeline for a vector database?


- Indexing: The vector database indexes vectors using an algorithm such as PQ, LSH, or HNSW. This step maps the vectors to a data structure that will enable faster searching.
- Querying: The vector database compares the indexed query vector to the indexed vectors in the dataset to find the nearest neighbors (applying a similarity metric used by that index)
- Post Processing: In some cases, the vector database retrieves the final nearest neighbors from the dataset and post-processes them to return the final results. This step can include re-ranking the nearest neighbors using a different similarity measure.


## Algorithms to Create Vector Database
- Random Projection (RP)
- Product Quantization (PQ)
- Locality-Sensitive Hashing (LSH)
- Hierarchical Navigable Small World (HNSW)


## How Similarity is Measured in Vector Database?
- Cosine similarity: measures the cosine of the angle between two vectors in a vector space. It ranges from -1 to 1, where 1 represents identical vectors, 0 represents orthogonal vectors, and -1 represents vectors that are diametrically opposed.
- Euclidean distance: measures the straight-line distance between two vectors in a vector space. It ranges from 0 to infinity, where 0 represents identical vectors, and larger values represent increasingly dissimilar vectors.
- Dot product: measures the product of the magnitudes of two vectors and the cosine of the angle between them. It ranges from -∞ to ∞, where a positive value represents vectors that point in the same direction, 0 represents orthogonal vectors, and a negative value represents vectors that point in opposite directions.


Let's assume we have three vectors as following A(1,2,3), B(4,5,9), C(1,9,3)
- Dot Product
    - Between A.B = 1x4 + 2x5 + 3x9 = 4+10+27 = 41
    - Between A.C = 1x1 + 2x9 + 3x3 = 1+18+9 = 28
    - A is closer to C than to B.
- Cosine
    - \|A\| = sqrt(1+4+9) = sqrt(14)
    - \|B\| = sqrt(16+25+81) = sqrt(122)
    - \|C\| = sqrt(1+81+9) = sqrt(91)
    - Cos(A,B) = A.B/ (\|A\| x \|B\|) = 41/( sqrt(14) x sqrt(122) ) = .992064
    - Cos(A,C) = A.C/ (\|A\| x \|C\|) = 28/( sqrt(14) x sqrt(91) ) = .784464
    - A is closer to C than to B.
- Euclidean
    - Between A and B = sqrt(-3^2 + -3^2 + -6^2) = sqrt(9+9+36) = sqrt(55)
    - Between A and C = sqrt(0 + -7^2 +0) = sqrt(49)
    - A is closer to C than to B.


## What is Vector Search or Semantic Search?
Typical search works on character overlap between the "search query" and "document text". You may have even heard technical terms like Hamming distance or Levenshtein distance, these are metrics for describing the similarity (or dissimilarity) of strings. This search doesn't work when we are looking for something based on the meaning. For example, you are looking for a sentence "Benefits of the Yoga" in a health-related article and it doesn't have any word "Yoga" there. But, it has a section called "Spiritual Gains of Long Meditation". Based on the similar semantic meaning can we pick up the text under this heading and display it to the user? This is where vector search shines. Regardless of the types of objects we’re searching through, we use “vectors” or “vector embeddings” to convert the data we’re analyzing into simpler representations. Objects may be tabular data, PDF file, text file, image, audio, video, sensor data, etc. How close is the answer to the question asked we use metrics like cosine similarity, euclidean distance, and dot product.

## What is Vector Embedding?
Vector embeddings are really just a simplified numerical representation of complex data (news articles, emails, voice recordings, images, etc.), used to make it easier to run generic machine-learning algorithms on sets of that data. By taking real-world objects and translating them to vector embeddings — numerical representations — those numbers can be fed into machine learning algorithms to determine semantic similarity. For text data, we know a very popular embedding called word2vec (from Google), and another is GloVe (from MIT)


## How does vector search happen in Pinecone?


```
!pip install -qU \
  "pinecone-client[grpc]"==2.2.1 \
  pinecone-datasets=='0.5.0rc11' \
  sentence-transformers==2.2.2

# Different ways of installation
# pip3 install pinecone-client #pip way
# pip3 install "pinecone-client[grpc]" #grpc way
# pip3 install git+https://git@github.com/pinecone-io/pinecone-python-client.git #git way

index_name = "example-index"

# Get a vector dataset which you created earlier or 
# use sample vector dataset of pinecone or 
# create your own before you continue
# You can use chatgpt or SentenceTransformer or other models to create vector embedding.

from pinecone_datasets import load_dataset
dataset = load_dataset('quora_all-MiniLM-L6-bm25')
dataset.head()

import pinecone
pinecone.init(api_key="YOUR_API_KEY", environment="YOUR_ENVIRONMENT")
pinecone.create_index(index_name, dimension=1024)

# connect to the index
index = pinecone.GRPCIndex(index_name)

# insert data into index. 100 vectors at a time.
for batch in dataset.iter_documents(batch_size=100):
    index.upsert(batch)

# Load a model to creat embedding vector
from sentence_transformers import SentenceTransformer
import torch

device = 'cuda' if torch.cuda.is_available() else 'cpu'
model = SentenceTransformer('all-MiniLM-L6-v2', device=device)

# convert a text query into vector
query = "which city has the highest population in the world?"
vectors = model.encode(query).tolist()

# search that query vector into index. It will return top N similar text.
index.query(queries=vectors, top_k=integer)


active_indexes = pinecone.list_indexes() # active indexes


index_description = pinecone.describe_index("example-index") # describe indexes


pinecone.delete_index("example-index") # delete index


pinecone.configure_index("example-index", replicas=4) # scale replicas


index_stats_response = index.describe_index_stats()  # Describe index statistics

# inserting data into index.
# Format 1
upsert_response = index.upsert(
{
      vectors = [("id": "item_179",
      "metadata": {
        "category": "sports",
        "colors": ["pink", "green", "blue"],
        "time_stamp": 0.9
      },
      "values": [0.1, 0.2, 0.3]), 

      ("id": "item_180",
      "metadata": {
        "category": "music",
        "colors": ["pink", "green", "blue"],
        "time_stamp": 0.9
      },
      "values": [0.5, 0.3, 0.3])],
    namespace="example-namespace"
)

# Format 2
upsert_response = index.upsert(
    vectors=[
        ("vec1",                # Vector ID
         [0.1, 0.2, 0.3, 0.4],  # Dense vector values
         {"genre": "drama"}     # Vector metadata
        ),
        ("vec2",
         [0.2, 0.3, 0.4, 0.5],
         {"genre": "action"}
        ) ],
    namespace="example-namespace"
)


query_response = index.query(    # Query an index
    namespace="example-namespace",
    top_k=10,
    include_values=True,
    include_metadata=True,
    vector=[0.1, 0.2, 0.3, 0.4],
    filter={"genre": {"$in": ["comedy", "documentary", "drama"]} } )
 
delete_response = index.delete(ids=["vec1", "vec2"], namespace="example-namespace") # delete vector

fetch_response = index.fetch(ids=["vec1", "vec2"], namespace="example-namespace") # fetch vector
 
update_response = index.update( #update vector
    id="vec1",
    values=[0.1, 0.2, 0.3, 0.4],
    set_metadata={"genre": "drama"},
    namespace="example-namespace")


# creates the collection example-collection from example-index
pinecone.create_collection("example-collection", "example-index")


active_collections = pinecone.list_collections() # list collection


```

