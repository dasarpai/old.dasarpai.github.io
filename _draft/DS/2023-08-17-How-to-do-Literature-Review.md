---
mathjax: true
id: 6086
title: How to do Literature Review
date: 2023-08-17
permalink: '/dsblog/How-To-Do-Literature-Review'
tags: [Literature Review, Research Paper]
categories:


header:
    teaser: /assets/images/dspost/dsp6086-How-To-Do-Literature-Review.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: dspost-layout  
author_profile: true  
toc: True  
toc_sticky: true
---


![How to do Literature Review](/assets/images/dspost/dsp6086-How-To-Do-Literature-Review.jpg)


# How to Conduct Literature Review?


## Introduction
Literature Review (LR) or Literature Survey (LS) is a process that helps you to browse the libraries, literature, articles, books, conference proceedings, etc. The objective of this process is to study the work of other researchers in the field and around the topic you are interested in. This is one of the heaviest work in any research work. If you are not on track or this process is taking unusually longer time, then it means you don't have any guiding process or best practices in place. As per my experience during my MS in Data Science and Ph.D./DBA in AI-Natural Language Processing, I am writing my thoughts in this article. I am sure it will help you, especially if you are entering in the field of research.


Keep in mind, LR is not only about the process but also about good tools. Without a good tool, you cannot do a good LR efficiently. Therefore, from this article you will not learn only the best practices and high-level process flow of LR but also some lovely tools.


## Steps, Process Flow for LR


- Decide a broader topic of your research
    Example: History Books Summarization, question answering. Effective ways of learning from History books. History books question generation. Using NLP for history book summarization, and question answering.
- Refine it further in terms of what specific problem you want to study or solve.
    Example: Generating questions and answers automatically from any history book.
- Create a broad list of keywords. Keywords can be 4-5 word sentences or phrase.
    - Examples:
        - Historical book question answering  
        - AI technologies for historical text analysis  
        - Natural language processing in historical texts  
        - Historical document retrieval  
        - Historical text understanding  
- There are a good deal of research paper search engines and research paper management tools. Decide which you will use.
    - Example: Google Scholar, IEEE Xplore, ACM Digital Library, PubMed, JSTOR, Scopus, Sci-hub, Mendeley. I use Mendeley.
 - Mendeley, Google Search are good to start with and generally work is done with these 2, unless you are doing something very serious, fundamental work which is time-consuming, well funded, and you have a team to work on that.
- There are many tools that can be used to write research papers they are
    - Common tools: MS Word, Google Doc, Libreoffice Writer. You need to use some plugin with these to do research work citations and creating a bibliography. If you are serious about long-term research, presentation, publication. I would suggest do NOT use this.
    - LaTex Tools: There are many latex tools. Desktop-based and online, both. Most of them are free for MS or Ph.D. research. For extra fancy features or larger teamwork you can go for a paid tool. But to write approx 150 pages research work, free tools are the best.
        -Examples: TeXmaker, TeXnicCenter, LyX, TeXstudio, TeXworks, Papeeria, Authorea, Kile LaTex Editor, Vim with LaTeX-Suite, LaTeX Workshop for Visual Studio Code, VerbTeX, Overleaf. I use Overleaf. It is free online tool.
    - Decide which tool you want to use.
- Mendeley Search: What are the papers there on the internet which can be interesting
- Get the Paper:
    - Read the abstract in mendeley or mendeley provided search links.
    - Download the full paper if they are even 10% of interest.
    - Sometimes adding to library function of Mendeley will works well.
    - Other time you need to search other place to get the paper. Like sci-hub, google scholars etc. Then upload the document in Mendeley.
    - Update the metadata of the document in the Mendeley. Sometimes you need to use a different trick or do extra work.
- Make sure all the papers in which are interested are in Mendeley with correct metadata.
- Metadata includes a unique citation key for every paper in your Mendeley library.
- Create .bib file from the Mendeley.
- Read your bib file and ensure there is no missing information.
- Create Excel file from this.
- Clean the Excel file. This should have the following columns.
    - Sno
    - Status
    - Paper Title,
    - Author(s),
    - Abstract,
    - Length of Abstract,
    - Type of Document (book, journal paper, news, blog, conference etc),
    - CitationKey,
    - Year,
    - Summary (Summary should be written in your own words)
    - Remarks (Any other important info which is not part of the summary)
- Start reading the abstract of these papers. Summarize your understanding in **the summary column of excel/google sheet**. The summary should be written in your own words. Use \citep{citationkey} as the author name. Be a little creative in summarizing your understanding, and don't be monotonous.
- While reading the abstract and summarizing, you may decide to drop some of the paper.
- Update excel sheet. Status column in excel will have following values.
    - Blank - Not opened the paper
    - "WIP" - Started reading the abstract.
    - "Dropped" in the status column, if paper is dropped.
    - "AbsSummarized" When the summary is done. Abstract Summarized
    - "LRSummarized" When Summary is done. LR is Summarized.
    - "Done" when every important notes from all the different section are summarised and noted.
    - "??" if it is confusing but may be interesting
- Filter those papers from the excel sheet where status="Summarised"
- Read each paper's Intro, LR and conclusion chapter.
- Update the "Summary" column in excel/google sheet.
- Update the status to "LRSummarised"
- Filter those papers from excel sheet where Status="LRSummarised"
- Read methodology section.
- __*__ Update the "Summary" columns.
- Update the status column "Done"
- Create a column "Theme" in excel sheet.
- Based on the content of summary column update the theme column.
- Group similar theme together and organize them in the order of year.
- Copy the conent of the summary column in LaTex. Litrature Review is complete.    



__*__ Keep in mind Summary in a Summary column should NOT be more than 1500 characters (approx 350 words). If you want to make some other important notes then you can write in another column “Remarks”.


## Important Notes
- When writing MS Dissertation, it runs around 17000 words (approx 70 double-spaced pages).
- PhD research thesis should be around 70,000 words (280 double-spaced pages),
- DBA research thesis around 40000 words (approx 160 double-spaced pages).
- For MS research citations should be around 40. Therefore select around 60 papers.
- For Ph.D. / DBA citations should be around 80. Therefore select around 100 papers.

All these numbers of pages are without appendices and references.


## Resource
You can use [this Literature-Review-Template ](https://docs.google.com/spreadsheets/d/1aAHzei8OYRS4rCaW44j9g8ewEeIGXrkAI6HQ4oiCw8o/edit?usp=sharing) for your Literature Review work. [Download Template](/assets/docs/Literature-Review-Template.xlsx).

