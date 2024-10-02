---
id: 6016    
title: "What is NLP?"
date: '2022-12-19T15:50:00+05:30'
permalink: /dsblog/what-is-nlp
categories:
  - dsblog
tags: [Machine Learning]

header:
  teaser: "/assets/images/dspost/dsp6016-What-is-NLP.jpg"
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

![What is NLP?](/assets/images/dspost/dsp6016-What-is-NLP.jpg)   

## What is NLP?   
Humans interact with their surroundings using different kinds of inputs. Eyes deal with inputs of color, shape, and size. Ear deals with inputs of sound, voice, and noise. Similarly, the other 3 senses also deal with other kinds of inputs. When you write something you may be drawing some art or you may be drawing letters of some language. Language is what we use to speak, for example, English, Hindi, Kannada, Tamil, and French are languages. The script is a tool to write what we speak. There are many kinds of scripts and you can use those scripts to write words of the languages. Some scripts are good for some languages. You cannot write all the words of all the languages of the world using one script (without modifying the original letters of the script). The Roman script is good to write English languages but when you want to write any Indian language using Roman then you will make many mistakes when reading the scripts. Because you won't be able to produce the same sound as the original language was producing.

Thus there are many scripts in the world to write words in various languages of the world. Human upbringing, education, and training happen around a specific language and specific script, which we normally refer to as the mother language. In our mother language and script, we write poetry, music, philosophy, history, economics, drama, etc. We debate, speak, praise, scold, hurt, and appreciate people in our mother languages. Based on your interest and time you can learn a few more human languages. But it is extremely impossible for a human being to become an expert in all human languages and all scripts. Sometimes work of reading text from a specific language is mundane or boring, other times it is too much complicated and tiring. Sometimes it is too voluminous, and other times we don't have enough skills to read those documents and comprehend the meaning. In this situation, we want to exploit computing resources. But computers don't understand human language. Their mother language is a fluctuation of the current and their script is 0,1. In this situation how to make computers our partner in the journey of exploring the world?

Natural Language Processing (NLP) is a technology that helps humans to interact with machines but in human language. It is a very complex technology because of the human dialect, different ways of writing or expressing the same idea, different scripts to express the same idea, mix of scripts, mix of languages to express something, business domains (like medicine, law, engineering, philosophy, etc), the expertise of all human is different in a different language and the different domain.

## How NLP Technology Works?
We know computers do not understand the text but numbers only. So we need to convert the text of a particular script and language into numbers. To convert text into numbers we do follow steps like text cleaning, tokenization, and embedding. Embedding means we get the numeric equivalent of the text. Once we have numbers then we can perform all the tasks which human does around text. In the following section, I have listed different tasks which machines can do using NLP.

## What is Embedding?
As mentioned earlier Embedding means getting a numeric representation of the text. In NLP we call it creating a word vector. But the issue is there are many scripts how to ensure that you have the same word vector for the same word in different languages. For example, the word in English "Fruit" is the same as फल (Fala) in Hindi,फलं (Falam) in Sanskrit, பழம் (Paḻam) in Tamil. How to ensure this word gets the same word vector or at least the same place in the word vector space? It is not possible at all. Because generally embedding is created using one kind of script. Even if you create embedding using mixed script corpus you will get 4 different adjacent vectors for these words which have the same meaning (for a person who knows all these 4 languages). To create embedding we need a large corpus like Wikipedia articles, millions of emails, millions of articles across different languages and genres, millions of social media messages, etc. There are many techniques for creating embedding. 

## What are different Embedding Types?
Using different techniques when we are generating embedding we can have the following kinds of embeddings.
- Sentence Embeddings: In this entire sentence is considered one unit and you get one vector per sentence. In the vector space when you put different sentences you will be able to visualize which sentences are having the same meaning and which are not.
- Static Word Embeddings: In this embedding, a single word is embedded at a time, as a fixed embedding. For example, the word "interest" will have one embedding. Irrespective of whether it is used in the context of finance or relationship or general talk.
- Contextualized Word Embeddings: In this embedding, a single word will have one embedding  but if the word has come in three different contexts then it will have three embeddings. For example "bank interest", "interest in the relationship", "interest in product", and "out of interest" (idiomatic use) all "interest" words will have different embedding.
- Topic Embeddings: In this type of embedding each topic will have a specific embedding. All the related topics will come together in topic embedding space.
- Sub-word embedding: In this embedding, words are broken into smaller 4 or 5-letter subwords. And then we generate word embedding for each subword. For example, the word "experimentation" will have the following 4 letters subwords "expe", "xper", "peri", "erim", "rime", "imen", "ment", "enta", "ntat", "tati", "atio", "tion". Thus we will get different embedding for each of these sub-words.
- Document Embedding: A document may be an email, news article, blog article, or a book chapter. When we create embedding of the document then all the related emails, articles, blogs come together in the document embedding space.

Each embedding has its benefits and purpose. Depending upon the use case we create different kind of embedding for our project.

## What are the different NLP Tasks?
Whatever task humans can perform or wish to perform with a written text, people want those should be done using NLP technologies. A high-level summary of possible tasks with NLP is as follows.
 
- Text Classification : Assigning predefined categories to a given text. News text can be classified as political,sports, business, entertainment etc.
- Sentiment Analysis : Determining the emotional tone behind a given text.
- Document Embeddings
- Code Generation
- Table Question Answering
- Question Answering 
- Relation Extraction between different Nouns or verbs
- Machine Translation
- Language Detection 
- Named entity recognition: Identifying and extracting proper names from text, like organization name, person name, country/city/state/district/village name, medicine name etc.
- Textual Meaning
- Part-of-speech Tagging: Identifying and labeling the grammatical role of each word in a sentence. Identifying noun, verb, article, adjective etc.
- Semantic Role Labeling (SRL): Determining the semantic roles of words or phrases in a sentence, such as the subject, verb, and object. For example: "Ram went to meet his friend and he gave him a gift", "Ram" is subject, "went" is verb, "to meet his friend and he gave him a gift" is object of the sentence.
- Document Summary
- Chunking: grouping words into meaningfully related chunks. For example, United States of America, 4 words are grouped together as one.
- Conversation 
- Parsing: Analyzing the grammatical structure of a sentence to identify dependencies between words. For example: "Ram went to meet his friend and he gave him a gift". Here "He" means Ram, "him" refes to "friend"
- Dialogue Writing
- Discourse analysis: Studying the ways in which language is used in a broader context, such as across multiple sentences or in a conversation who said what.
- Coreference resolution: Determining when two or more words in a text refer to the same entity. For example: "Ram went to meet his friend and he gave him a gift". Her"He" and "Ram" both are referring to same entity.
- Reading Comprehension
- Text Span Detection
- Citation Generation 
- Index Generation 
- Paraphrase a Sentence.
- Text Generation.
- Relationship Extration: For example "Ram, Lakshaman with their Guru Viswamitra went to Mithila and married to Sita". "Sita is resident of", "Ram is brother of", "Vishwamitra is guru of" etc.
- Text clustering: Grouping similar texts together.

## What are the different types of Text Analytics in NLP 

- Lexical analysis: This involves breaking down the text into its individual words, or tokens, and examining their meanings and relationships to one another. This can include tasks such as stemming, lemmatization, and part-of-speech tagging.
	- Those boys played the game.
	- (Those, Boy, Play, The, Game)
- Syntactic analysis: This involves analyzing the grammatical structure of a sentence, including the relationships between words and phrases. This can include tasks such as parsing and dependency analysis.
	- Those boys played the game.
	- "Those boys" and "Played" and "the game" = SVO
	- (Determinant, Noun, Verb, determiner, Noun)
- Semantic analysis: This involves analyzing the meaning of a text, including identifying entities and relationships, and determining the sentiment or intent behind the text.
	- I went to bank to withdraw money.
	- I am walking on the bank of river.
Pragmatic analysis:This focus on the intended audience, the context, and the purpose of the text to understand the meaning of the sentence
	- If this sentence is part of a news article describing a youth sports league, the pragmatic analysis might focus on the fact that the boys were engaging in an organized activity and that a game was taking place.
	- If this sentence is part of a conversation between two friends discussing their weekend plans, the pragmatic analysis might focus on the fact that the boys were doing something for leisure and that the game is not specified.
	- If this sentence is part of a children's story, the pragmatic analysis might focus on the fact that the boys are the protagonists of the story and that they are engaging in an exciting activity.
	- If this sentence is part of a book or a script, the pragmatic analysis might focus on the fact that the boys are characters in a story and that they are engaging in an activity that is relevant to the plot.
	- Discourse analysis: This involves analyzing the text at a higher level, looking at how ideas and arguments are structured and developed across multiple sentences or paragraphs.
Stylistic analysis: This involves analyzing the style of the text, including the choice of words, sentence structures, and overall tone.
	- Formal style: The sentence "Those boys played the game" is simple and straightforward, it uses a neutral tone. This style is often used in news articles, academic texts, and official documents.
	- Informal style: If the sentence is "Those dudes played the game", the use of "dudes" instead of "boys" gives a more casual and informal tone, it is often used in casual conversations, social media posts, and in fiction.
	- Colloquial style: If the sentence is "Those guys played the game", the use of "guys" instead of "boys" gives a more colloquial tone, and it is often used in informal conversations, and casual writing.
	- Literature style: If the sentence is "Those young lads played the game", the use of "young lads" instead of "boys" gives a more literary tone, often used in literature and poetry.
	- Poetic style: If the sentence is "Those boys, they played the game", the use of a comma before the verb to separate the subject and the verb, gives a more poetic tone.
- Sociolinguistics analysis: this type of analysis studies how language is used in society, including how it varies across different groups, regions, and time periods.
	- Gender: If the sentence is "Those boys played the game" it is assumed that the speaker is talking about group of males, because the word "boys" is often associated with males.
	- Age: If the sentence is "Those boys played the game", it is assumed that the speaker is talking about a group of young people, because the word "boys" is often associated with young people.
	- Ethnicity: If the sentence is "Those boys played the game", it is assumed that the speaker is talking about a group of boys from the same ethnicity, because the sentence doesn't specify any other information about the boys.
	- Social class: If the sentence is "Those boys played the game", it is assumed that the speaker is talking about a group of boys from the same social class, because the sentence doesn't specify any other information about the boys.
	- Geography: If the sentence is "Those boys played the game" it is assumed that the speaker is talking about a group of boys who are located in the same geographical area, because the sentence doesn't specify any other information about the boys.


## Application of NLP
There are hundreds of usecases of NLP in different domains. Wherever business exists, knowledge exists. Wherever knowledge exists, the written text exists. The written text can be a process document, business document, customer document, design document, or anything else. Wherever written text exists we want to read that document and perform many tasks as mentioned above. Every industry Oil & Gas, BFSI, Education, Pharma, Health Care, Logistic, Aviation, Security, IT, ITES, Energy, Agriculture, Food Processing, Automobiles, Civil Construction, Road or Port Construction, Climate Change, or anything you name has the documents and hence need of NLP to engage with partners, translate, summarise, etc. Below is a small list of applications of NLP in various industries.

- Analyse project risks from documents, news articles, business sentiments
- Analyse business and political news and recommend investments.
- Virtual assistant for every department
- Document classification from millions of articles or files lying on the server.
- Document generation (contract, resume, rent agreement, business agreement)
- Fake news detection.
- FAQ Generation.
- Using a prompt word, find related documents
- Creating document hierarchy based on the relationship between them.
- Checking grammar, and spelling errors in a given document. 
- Identifying synonyms and antonyms.
- Based on the document style recommend a better word or sentence.
- Helping intelligence agencies in crime detection
- Find the meaning of a word and the intent of the speaker
- Multi-class classification
- Multi-label classification
- Generating poetry, novels, articles, business review, comments, tweets
- Enforcing organization policy in emails, document writing
- Creating process flow from document 
- Creating presentations from documents, articles, and excel
- Creating a presentation from Speech
- Writing product review based on the given sentiment prompts
- Product suggestions
- Extracting text from billboards, streets, lanes, hoarding
- Resume Builder
- Sarcasm detection 
- Sentiment analysis
- Based on health reports suggesting exercise
- Based on health reports suggesting food supplements
- Based on the health symptoms generating reports of possible illness and their causes.
- Technical Assistant
- Analyzing text and labeling each word as noun, verb, subject, object, article, etc.
- Creating a training manual
- Creating user manuals
- Translation document (brochure, article, book, manual) written in one language into multiple languages
- Transliteration of text between same phonetic languages (like between Indian languages)
- Validating information from a scanned document 
- Simplifying complex or technical ideas
- Writing code in any programming language based on the input prompt 
- Converting code of one programming language into another 
- Code review and suggestion 

## Conclusion
Recently after the invention of encoder-decoder architecture, transformer architecture, GPU power, and GPT we see a huge surge in NLP and its application. In the future when humanity will be able to communicate with machines with their own voice, language  & dialect, then human-machine interaction will touch new heights and this is possible only with the advancement of NLP technologies.


