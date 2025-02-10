---
mathjax: true
id: 6215
title: "Exploring Tokenization and Embedding in NLP"
date: 2025-01-31
permalink: /dsblog/exploring-tokenization-and-embedding-in-nlp
tags:
  - Tokenization
  - Embeddings
  - NLP
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6215-Exploring-Tokenization-in-AI.jpg
excerpt_separator: "<!--more-->"
author: Jane Smith
layout: dspost-layout
excerpt: "Discover various tokenization methods and their role in language models, enhancing the understanding and generation of human language."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
keywords: ["Tokenization", "Embeddings", "NLP", "Language Models"]
---

![Exploring Tokenization and Embedding in NLP](/assets/images/dspost/dsp6215-Exploring-Tokenization-in-AI.jpg)

# Exploring Tokenization and Embedding in NLP
Tokenization and embedding are key components of natural language processing (NLP) models. Sometimes people misunderstand tokenization and embedding and this article is to address those issues. This is in the question answer format and addressing following questions.


1. What is tokenization?
1. What are different Tokenzation schemes?
1. What is OOV (Out-of-Vocabulary) in Tokenization?
1. If a word does not exist in embedding model's vocabulary, then how tokenization and embedding is done?
1. What is criteria of splitting a word?
1. What is Subword Tokenization?
1. How FastText Tokenization works?
1. What is role of [CLS] token?
1. What is WordPiece and how it works?
1. What is BPE (Byte Pair Encoding), and how it works?
1. What is SentencePiece and how it works?
1. For Indian languages what tokenization schemes is the best?


## What is tokenization?
Tokenization is the process of breaking text into smaller units (tokens), such as words, subwords, or characters, for NLP tasks.

Purpose:
✔ Converts raw text into a structured format for machine learning models.
✔ Handles out-of-vocabulary (OOV) words and improves text processing.
✔ Enables models to understand and generate human language efficiently.


## What are different Tokenzation schemes?
The most popular and widely used in NLP today. Each scheme is optimized for different tasks, languages, and domains.  

1. **Word-Based** (Simple, but suffers from OOV issues)  
2. **Whitespace & Rule-Based** (NLTK, spaCy, useful for preprocessing)  
3. **Subword-Based** (WordPiece, BPE, Unigram—used in BERT, GPT, T5)  
4. **Character-Level** (Good for misspellings, used in FastText, OCR)  
5. **Byte-Level** (GPT-4, T5, handles emojis and special characters)  
6. **Morpheme-Based** (Japanese, Korean, Chinese NLP)  
7. **Sentence-Level** (Text summarization, document-level models)  
8. **Hybrid Tokenization** (Combining multiple methods—XLNet, ALBERT)  
9. **Augmented BPE** (Multilingual NLP—mBERT, XLM-R)  
10. **Meta-Corpus Tokenization** (Self-learning tokenization—DeepMind RETRO)  
11. **Hierarchical Tokenization** (Sentence → Word → Subword → Character)  
12. **Phoneme-Based** (Speech recognition—Whisper, wav2vec)  
13. **Radical-Based** (For Chinese/Japanese—MeCab, KoNLPy)  
14. **Graph-Based** (For knowledge graphs—KG-BERT)  
15. **Punctuation-Aware** (Legal, TTS, sentiment analysis)  
16. **Code-Specific** (For programming languages—CodeBERT, Codex)  

## What is OOV (Out-of-Vocabulary) in Tokenization?
OOV (Out-of-Vocabulary) refers to words that are not present in a model’s vocabulary and cannot be directly recognized or processed.

Why Does OOV Occur?
- Limited vocabulary size in NLP models.
- Rare or new words, such as slang or technical terms.
- Misspellings or variations of words.
- Morphologically complex words, especially in rich languages like Hindi or Finnish.

## If a word does not exist in embedding model's vocabulary, then how tokenization and embedding is done?

For example we have word *simultaneously* which is not part of vocbulary. In that case it is tokenized into multiple tokens in a transformer-based model (e.g., BERT, GPT), each token gets its own embedding. To generate an embedding for the complete word, there are several strategies:

1. **Taking the First Token's Embedding**  
   - Many transformer models (e.g., BERT) use **wordpiece** tokenization, where the first subword token often carries more meaning. Using the embedding of the first token can be a simple and efficient choice.

2. **Averaging the Token Embeddings**  
   - Compute the **mean** of all subword embeddings:
     $$ E_{word} = \frac{1}{N} \sum_{i=1}^{N} E_{token_i}$$
   - This smooths out variations and gives a balanced representation.

3. **Weighted Average (Attention-Based)**  
   - Some methods use attention weights to give more importance to certain subwords, especially in contextual embeddings.

4. **Using the Last Token's Embedding**  
   - If the last token carries a suffix that changes the meaning (e.g., "-ing", "-ly"), it might be useful to consider its embedding.

5. **Concatenation of Embeddings**  
   - Instead of averaging, concatenate the embeddings of all tokens, creating a longer but richer word representation.

6. **Fine-tuning with a Context-Aware Model**  
   - If the application requires better word-level embeddings, a downstream model can be trained to aggregate subword embeddings effectively.

**Best Practice**
For general NLP tasks, **averaging subword embeddings** is a common and effective strategy. However, in tasks like machine translation or sentiment analysis, an attention-weighted or task-specific approach may work better.

## What is criteria of splitting a word?
The criteria for splitting a word into multiple tokens in BERT (or similar models) depend on the tokenization algorithm. BERT uses WordPiece tokenization, which follows these rules:


simultaneously → ['simult', '##aneously']
transformers → ['transform', '##ers']  # Splitting Follows the "Longest Match First" Rule  
Subword Tokens Start with ##

## What is Subword Tokenization?

**Subword Tokenization** is a technique that breaks words into smaller, meaningful units (subwords) rather than whole words or individual characters. This helps handle **out-of-vocabulary (OOV) words**, **morphologically rich languages**, and **rare words** efficiently.

**How It Works:**
1. **Training Phase**:  
   - A vocabulary is built using **frequent words** and **subwords** from a corpus.
   - Common sequences of characters are merged iteratively.

2. **Tokenization Phase** (at inference):  
   - Words are split into **subwords** based on the trained vocabulary.
   - Frequent words remain whole, while rare words are broken into subwords.

**Example (Using BPE/WordPiece)**
- **Input:** `"unhappiness"`
- **Tokenized as:** `["un", "happiness"]`  
  (if "happiness" is common)
- **If not in vocabulary:** `["un", "happi", "ness"]`

**Popular Subword Tokenization Methods**
- **Byte Pair Encoding (BPE)** – Used in GPT models.
- **WordPiece** – Used in BERT.
- **SentencePiece (Unigram)** – Used in T5, mBERT.
- **FastText**

**Key Benefits**
✔️ Handles **rare words**  
✔️ Reduces **vocabulary size**  
✔️ Works well for **multilingual models**  


## How FastText Tokenization works?
**FastText** uses **subword tokenization**, but in a different way compared to **BPE, WordPiece, or SentencePiece**.  

**How FastText Uses Subwords**  
Instead of breaking words into learned **subword units**, FastText represents words using **character n-grams** (continuous sequences of `n` characters).  

**How It Works:**  
1. Each word is split into overlapping **character n-grams** (default: **3-6 characters**).  
2. The word embedding is computed as the sum of its **subword embeddings**.  
3. This helps handle **OOV words**, **misspellings**, and **morphological variations** better than traditional word embeddings.  

**Example:**  
For the word **"apple"**, with `n=3`:  
- Subwords: `["<ap", "app", "ppl", "ple", "le>"]`  
- Word embedding = sum of all subword embeddings  


## What is role of [CLS] token?

The [CLS] token embedding is used when you want a context-aware representation of a word within a sentence, rather than just its isolated meaning. In BERT, the first token of every input is [CLS], which learns a summary representation of the entire sequence. This is often useful for sentence-level tasks like classification, but it can also be used as a context-aware word embedding when working with entire sentences.

```python
sentence = "I saw an elephant in the zoo."

# Tokenize the sentence
tokens = tokenizer(sentence, return_tensors="pt")

# Get embeddings
with torch.no_grad():
    outputs = model(**tokens)

# Convert sentence to token list
token_list = tokenizer.tokenize(sentence)
print(token_list)  # Example output: ['i', 'saw', 'an', 'elephant', 'in', 'the', 'zoo', '.']

# Find index of "elephant"
elephant_index = token_list.index("elephant") + 1  # +1 because BERT adds [CLS] at position 0

# Extract "elephant" embedding
elephant_embedding = outputs.last_hidden_state[:, elephant_index, :]

print("Elephant Embedding Shape:", elephant_embedding.shape)  # Expected: (1, 768)

# Extract embedding for the entire sentence
sentence_embedding = outputs.last_hidden_state[:, 0, :]

print("Sentence Embedding Shape:", sentence_embedding.shape)  # Expected: (1, 768)
```

## What is WordPiece and how it works?
**WordPiece** is a **subword tokenization algorithm** used in **BERT, mBERT, and ALBERT**. It helps handle **OOV words**, reduces vocabulary size, and improves efficiency in NLP models.  

**How WordPiece Works:**  
1. **Build Vocabulary:**  
   - Start with a base vocabulary (single characters).  
   - Iteratively merge the most **frequent** adjacent character sequences to form subwords.  
   - Stop when the vocabulary reaches a predefined size (e.g., 30,000 for BERT).  

2. **Tokenization Process:**  
   - Split words into subwords based on the trained vocabulary.  
   - If a word is not in the vocabulary, it is **broken into known subwords**, prefixed with `##` (to indicate continuation).  

**Example:**  
- **Input:** `"unhappiness"`  
- **Tokenized as:** `["un", "##happi", "##ness"]`  
  (if "happiness" isn't frequent, it's split further)  

## What is BPE (Byte Pair Encoding), and how it works?
 
**BPE (Byte Pair Encoding)** is a **subword tokenization algorithm** that replaces the most frequent character pairs with new tokens iteratively. It is widely used in **GPT models, MarianMT, and SentencePiece** to handle **rare words, reduce vocabulary size, and improve text compression**.

---
  
**Step 1. Training Phase (Vocabulary Learning)**
1. **Start with individual characters** as the base vocabulary.  
2. **Count frequent adjacent character pairs** in the corpus.  
3. **Merge the most frequent pair** into a new token.  
4. **Repeat steps 2-3** until a predefined vocabulary size is reached.

---

**Step 2. Tokenization Phase (Applying Learned Rules)**
1. Break words into **subwords** using the trained vocabulary.  
2. If a word is not found in the vocabulary, break it into the longest matching subwords.

---

**Example:**  
**Corpus:** `"low", "lowest", "lower"`  
1. Initial tokens: `["l", "o", "w", "e", "s", "t", "r"]`  
2. Merge frequent pairs:  
   - `"l o"` → `"lo"`  
   - `"lo w"` → `"low"`  
   - `"low e"` → `"lowe"`  
   - `"lowe s"` → `"lowes"`  
   - `"lowes t"` → `"lowest"`  

**Final tokenized words:**  
- `"low"` → `["low"]`  
- `"lowest"` → `["low","est"]`  
- `"lower"` → `["low", "er"]`  


## What is SentencePiece and how it works?

**What is SentencePiece?**  
**SentencePiece** is a data-driven **subword tokenization algorithm** used in **T5, mBERT, XLNet, and MarianMT**. Unlike **BPE** or **WordPiece**, it treats text as a **stream of raw bytes** instead of splitting on whitespace or relying on pre-tokenized words.  

---

**How SentencePiece Works?**  
1. **Preprocesses Text Without Whitespace Assumptions**  
   - Treats input text as a **continuous stream of characters** (no need for space-based tokenization).  
   - Works well for languages **without clear word boundaries** (e.g., Chinese, Japanese, Thai).  

2. **Builds a Token Vocabulary Using One of Two Methods:**  
   - **Byte Pair Encoding (BPE)** → Merges frequent character pairs iteratively.  
   - **Unigram Model** → Uses a **probabilistic approach**, where subword units are scored based on likelihood.  

3. **Tokenizes New Text Based on Learned Vocabulary**  
   - Splits words into **subwords** based on the highest-probability segmentations.  

---

**Example:**  
**Input:** `"unhappiness"`  

If using **BPE-based SentencePiece:**  
🔹 `["un", "happiness"]` (if "happiness" is frequent)  
🔹 `["un", "happi", "ness"]` (if "happiness" isn't frequent)  

If using **Unigram-based SentencePiece:**  
🔹 Multiple segmentations are possible, and the most probable one is selected.  

---

**Key Advantages of SentencePiece:**  
✔ **Supports raw text** (doesn’t need pre-tokenization)  
✔ **Works for multiple languages** (even ones without spaces)  
✔ **Can use both BPE and Unigram approaches**  
✔ **Highly efficient for Neural Machine Translation (NMT)**  



## For Indian languages what tokenization schemes is the best ?
For **Indian languages**, tokenization can be challenging due to their diverse scripts, rich morphology, and the fact that many languages have complex compound words, words with complex characters, and inflections. Below are the **best tokenization schemes** and techniques specifically suited for Indian languages:

---

**1. Morpheme-Based Tokenization**

- Indian languages like **Hindi, Bengali, Tamil, Kannada**, etc., often have complex morphology, and **morpheme-based tokenization** is highly effective here.
- This approach breaks down words into smaller meaningful units (morphemes), allowing for better handling of compound words and inflections.
- Indian languages often have **rich inflection** (gender, tense, case), and tokenizing at the morpheme level preserves these nuances.

**Example:**
- **Hindi:** "वह स्कूल जाता है" ("He goes to school")  
  Tokenized as: ["वह", "स्कूल", "जाता", "है"]  
  Using morpheme-based tokenization, one could further break down the word "जाता" (goes) into "जा" (go) + "ता" (tense suffix).

**Used in Libraries:**  
- **Indic NLP Library**
- **KoNLPy** (though more popular for Korean, adaptations exist for Indian languages)

---

**2. Subword Tokenization**
**Multilingual models** like **mBERT** support Indian languages, and SentencePiece tokenization is often used in these models. These models break down words into **subwords**, enabling better handling of complex and compound words.

- Models like WordPiece, BPE, SentencePiece break down words into **subwords**, enabling better handling of complex and compound words.
- **WordPiece, BPE, or SentencePiece** models are popular choices for tokenizing Indian languages, particularly for **Neural Machine Translation (NMT)** or **multilingual models** like **mBERT** and **XLM-R**.
- These methods are effective for handling **out-of-vocabulary (OOV)** words in low-resource Indian languages.

**Example:**  
- **Hindi:** "स्वतंत्रता संग्राम सेनानी" ("Freedom Fighter")  
  Tokenized into subwords: ["स्वत", "ंत्र", "ता", "सं", "ग्राम", "से", "नानी"]

**Used in Libraries:**  
- **mBERT**, **XLM-R**, **IndicBERT**, **T5**, **XLM**

---

**3. Hybrid Tokenization (Combining WordPiece + Character-Level)**
This approach combines the best of **word-level tokenization** and **character-level tokenization**. It’s especially useful for **Indian languages** because they have a combination of regular words and highly agglutinative or inflected words. Hybrid tokenization helps model both **frequent words** and **rare or unknown words** by combining word-level tokenization with the ability to handle characters.

**Example:**  
- **Tamil:** "தமிழ்நாடு" ("Tamil Nadu")  
  - Could be tokenized as ["த", "ம", "ிழ", "நாடு"] (character-level) or as one word in **pre-trained multilingual models**.

**Used in Libraries:**  
- **IndicBERT**, **XLM-R** (combines character-level and subword-level tokenization).

---

**4. Sentence-Level Tokenization**
For tasks like **translation**, **summarization**, or **document-level tasks** in **Indian languages**, sentence-level tokenization is often used. **Sentence segmentation** helps in **splitting long texts** into meaningful sentences, which can then be processed by NLP models. Indian languages have complex sentence structures, and sentence segmentation ensures that each meaningful unit is tokenized appropriately.

**Example:**  
- **Hindi:** "मैं स्कूल जाता हूँ।" → ["मैं स्कूल जाता हूँ।"] - a complete sentence.
- **Tamil:** "நான் பள்ளிக்கு போகிறேன்." → ["நான் பள்ளிக்கு போகிறேன்."]

**Used in Libraries:**  
- **IndicNLP** for segmentation.
- **spaCy** with custom models.

---

**5. Grapheme-Based Tokenization (Script-Specific)**
**Grapheme-based tokenization** is used for handling text at the character level. Especially useful for handling **script-specific challenges** (e.g., **ligatures** or **complex characters**). It works at the **character level**, breaking down words into individual characters, making it easier to handle scripts with rich diacritics and combinations.

**Example:**  
- **Kannada:** "ಬೆಂಗಳೂರು" ("Bengaluru")  
  Tokenized at the grapheme level: ["ಬೆ", "ಂ", "ಗ", "ಲ", "ೂ", "ರು"]

**Used in Libraries:**  
- **Indic NLP Library** for preprocessing. **ICU-based tokenizers** (Unicode handling).

---

**6. Character n-grams**
**FastText** is a **character-level model** that uses **n-grams** (subsequences of n characters) to generate word embeddings, and it works well for **Indian languages**, especially for **low-resource languages**. It works well for low-resource languages. Useful for text classification, **word embeddings**, and **language identification** in Indian languages. FastText works well with **misspelled words**, **out-of-vocabulary terms**, and **morphologically rich languages** like Hindi, Tamil, or Bengali.

**Example:**  
- **Hindi:** "समाजवादी" ("Socialist")  
  Tokenized as character n-grams like ["सम", "मा", "ाज", "वाद", "वी"].

**Used in Libraries:**  
- **FastText model** for Indian language embeddings.

---

**7. Punctuation-Aware Tokenization**
For **sentiment analysis**, **legal text**, and **social media data**, tokenizers need to handle **punctuation** and **emojis** effectively. **Indian languages** with a mix of **Hindi, English (Hinglish)**, and emojis require punctuation-aware tokenization. Keeps punctuation as separate tokens, ensuring that models correctly interpret sentiments or legal structures.

**Example:**  
- **Hindi-English:** "मुझे food अच्छा लगा!" ("I liked food!")  
  Tokenized as: ["मुझे", "food", "अच्छा", "लगा", "!"]

**Used in Libraries:**  
- **BERT-based** models like **Hinglish-BERT**.
- **Or other Multi-lingual or code-mixed NLP models**.

---

**8. Indic-Specific Models (mBERT, IndicBERT)**
Pre-trained models like **mBERT** or **IndicBERT** are trained on **multiple Indian languages**. They rely on **subword tokenization** (BPE/WordPiece) for efficient handling of Indian languages. **IndicBERT** is specifically optimized for **Indian languages** and trained on **11 official languages** of India. These models are designed with **Indian linguistic features** in mind, and they support multiple **scripts** and **languages** without requiring language-specific tokenization.

**Example:**  
- **Hindi:** "भारत" ("India")  
  Tokenized as: ["भारत"]

**Used in Libraries:**  
- **IndicBERT**, **mBERT**, **XLM-R** for multilingual tasks.

---

**Which Tokenization Scheme is Best for Indian Languages?**
- **Morpheme-Based**: Best for **richly inflected languages** (e.g., Hindi, Tamil, Kannada).
- **BPE/WordPiece/SentencePiece**: Best for **multilingual models** (e.g., **mBERT**, **IndicBERT**) and **low-resource languages**.
- **Hybrid Tokenization**: Effective for **handling both frequent and rare words** (e.g., **IndicBERT**, **XLM-R**).
- **FastText**: Best for **word embeddings**, **language identification**, and **low-resource languages**.
- **Punctuation-Aware**: Best for **sentiment analysis**, **legal text** or **social media**.

---

