---
id: 747
title: "Summary of AI ML Project"
layout: single
toc_sticky: true
permalink: /summary-of-al-ml-projects
date: 2024-10-03
tags: [Hari Thapliyal, Projects]
excerpt: "Image : Gallery"
header:
  [//]: # overlay_image: /assets/images/dasarpAI-Banner-LI.jpg
  overlay_filter: 0 # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [**Gallery**](/gallery/)"
  actions:
    1. - label: "View Gallery"
    1.   url: "/gallery/"
author_profile: false
last_modified_at: 2024-10-03T15:46:43-04:00
toc: true
mathjax: "true"
sidebar:
   nav: "docs"
---

# Introduction
- This page list all my github repo (private + public). 
- These github repositories are related to all my projects, consultings, courses and POC (proof of concepts), technology explorations, github opensource contributions etc.
- These projects are related to Project Management, AI/ML, LLM, NLP, Cloud Computing, Software Architectures and Solutions,
- The purpose of this listing is dual, to help other's knowing what is possible and what I have explored. Second, to remind myself what I already have explored and worked vs what didn't work.
- Bigdata: Hadoop, Hive, Spark


# Tech Skills

- **LLM Expertise:** Prompt Engineering, Finetuning & Deployment (chatGPT, GPT4, Bard, LLaMA, LaMDA, PaLM, ).

- **ML Model Development:** Feature Engineering, Tuning, Evaluation, Cross-Validation, Classical ML, NLP metrics, egression/Classification/Clustering, Ensemble Trees, Decision Tree, Random Forest, SVM.

- **AutoML:** Automated ML (PyCaret, TPOT).

- **MLOps/DevOps:**

- **Deep Learning / NLP & Embedding:** Huggingface, RNN, LSTM, GRU, Transformers, BERT, FastText, NLTK, SpaCy, Word Embedding, Keras, PyTorch, TensorFlow, OpenAI, Embedding Transfer, CV model evaluation, CNN, YOLO

- **Big Data & Cloud:** Hadoop, Spark, PySpark, Kafka, NoSQL (Cassandra, MongoDB)

- **Cloud Platforms:** AWS, GCP, Azure, AWS Sagemaker, Aure AutoML, VertexAI

- **ML Frameworks:** Tensorflow, Tensorflow lite/LiteRT, Tensorflow.js, Pytorch 

- **Data Visualization:** PowerBI, Tableau, Plotly, Seaborn, Matplotlib,

- **Mobile/Web App Dev:** Flask, Gradio, Streamlit, Android Studio, Flutter

- **Programming Laguages:** Python, R, Package Managers (pip, conda, npm), Dart

- **Markup Language:** Markdown, LaTex, HTML/CSS

- **Statistics:** Descriptive/Inferential Statistics, Prescriptive Statistics in AI.


# AI/ML - Industries - Developed/ Created/ Expanded work
**Projects in this section are listed according to Industry/Business Domain.**

## <font color=green>Agri</font>

## <font color=green>Airlines</font>
### Flightdelay-Analysis-Bigdata
Apache Hive is a data warehousing and SQL-like query engine built on top of Hadoop. Hadoop has Hadoop Distributed File System (HDFS). It can handle distributed storage and processing of the data in hand. Hive can handle billions of transactions. We can perform any kind of SQL Query without bothering whether aggregation functions or filter function will be ever completed or not. Hive can handle all CRUD operations.

In this project a folder "\server\airlines" on the server has hundreds of files which contains airlines daily flight information like Origin,Dest, Distance,DepTime, CRSDepTime, ArrTime, CRSArrTime, UniqueCarrier, FlightNum, TailNum, ActualElapsedTime, CRSElapsedTime, AirTime, ArrDelay, DepDelay, TaxiIn, TaxiOut, Cancelled, CancellationCode, Diverted, CarrierDelay, WeatherDelay, NASDelay, SecurityDelay, LateAircraftDelay. Airlines wanted to analyze the of last 20 years.

Activities (Pipeline) in project: 
- Creating hive table (for storage) from the external files
- Create partition table schema
- Parition hive table based on the year and putting data in partition table.
- Performing sql querries on the partitioned table

**Tech Stack:** Hadoop/HDFS, Hive, SQL, HiveQL, ORC (Optimized Row Columnar) or Parquet, Python, Matplotlib/Seaborn.   
[My article on Hive](dsblog/Exploring-Apache-Hive)  
[Github Code](https://github.com/dasarpai/DAI-Projects/tree/main/Airlines/Flightdelay-Analysis-Bigdata)



## <font color=green>BFSI</font>
### Credit-Fraud-Detection
### DoeJones-Prediction-with-News
### Loan-Approval

## <font color=green>eCommerce</font>
### Amazon-Sentiment Analysis
### Bigdata-AmazonReviews

## <font color=green>Economics</font>
### Economy-Analysis
### Prosperity-Clustering

## <font color=green>Education</font>
## <font color=green>Electronics</font>
### Hand-Gesture-Recognition

## <font color=green>Energy</font>
### UK-Energy-Consumption

## <font color=green>Entertaintment</font>
### Movies-Recommendations

## <font color=green>Health</font>
### Breast-Cancer-Prediction
### Chest-XRay
### Covid-worldwide-EDA
### India-Covid-Graphs
### Malaria-Detection_dep
### pnemonia_prediction

## <font color=green>Hospitality</font>
### Restaurant_Sales_Order_Forcasting

## <font color=green>Infra</font>
### AirQuality-Prediction
### House-Price-Prediction_dep
### House-Price-Prediction_Docker
### House-Prices-KCH
### Surprise-House-Pricing

## <font color=green>Law+Justice</font>

## <font color=green>Media+Pub</font>
### Fakenews-Detection
### Olympic-QA-System-with-GPT
### HBQAS
### NewsClassification-20Groups
### Podcast-Transcription
### SDSHL
### SpamFilter
### Toxic-Comment
### Twitter-Sentiment-Analysis
### YELP-Review-Prediction

## <font color=green>Misc</font>

## <font color=green>Restaurants</font>
### FoodDemand-Forcast
### Tools-and-Food-Gradient-Identifcation

## <font color=green>Retail</font>
### Online-Retail-Customer-Clustering

## <font color=green>Sales</font>
### CarPrice
### CarSales
### Lead-Conversion

## <font color=green>Sanskrit</font>

## <font color=green>Telecom</font>
### Telcom-Churn

## <font color=green>Travel+Logistic</font>
### Bigdata-pySpark-NYC-Parking
### Driver-Availablity-Prediction
### Uber-Cancellation
### Vehicle-Classification
### Vehicle-Tracking

## README.md

# AI/ML - Technology Stack - Developed/ Created/ Expended work
**Projects in this section are listed according to Technology/Tech Product/POC**

## 0-Experiments
##  <font color=green> Analytics</font>
### bokeh
### pandas
### plotly
### PyGWalker
### tableau

##  <font color=green> Audio</font>
### Speech Recogntion

##  <font color=green> Bigdata</font>
### Bigdata-HiveScoop
### Bigdata-mySQL

##  <font color=green> Cloud</font>
### AWS-Amazon-Bedrock-for-Serverless-LLM
### AWS-SageMaker
### GCP 

##  <font color=green> CV</font>
### Flower-Prediction
### ImageAugmentation
### ImageProcessing
### MNIST-Experiments
### Object-Detection-InBrowser

##  <font color=green> DE</font>
### DataCleaning
### Datacollection
### PyWebScrapping

##  <font color=green> Machine Learning Frameworks</font>
### mobilenet-v2
Using deep learning model on mobile.
[Github Read me](https://github.com/dasarpai/DAI-Techstack/tree/main/MLFrameworks/mobilenet-v2)

### Tensofrlow Lite for Regression
[Github Code for App and Model](https://github.com/dasarpai/DAI-Techstack/tree/main/MLFrameworks/tensorflow-lite)


##  <font color=green> GAN</font>
### MusicGeneration

##  <font color=green> IOT</font>
### BOLTIOT

##  <font color=green> LLM</font>
### finetune-bloom-7b
### finetune-llama2
### finetune-llama3-8b
### huggingface
### Langchain
### neo2.7b
### openAI
### openai-quickstart-python
### quantization
### RAG

### GroqCloud


##  <font color=green> Misc</font>

##  <font color=green> ML</font>
### Classification
### Clustering
### DataImbalance
### ML-Retraining
### Regression
### ROC

##  <font color=green> MLOps</font>
### ML-Pipelines
### naptune

##  <font color=green> NLP</font>
### embedding
### LSTM.ipynb
### NLP
### NLP-Concepts
### NLP-Hindi-Bible
### NLP-Plugin20Event
### NLP-rasa
### NLP-SanskritTrans

##  <font color=green> Python-Automation</font>
##  <font color=green> R-Projects</font>
##  <font color=green> RL</font>
##  <font color=green> Stats</font>
##  <font color=green> Tech-Products</font>
### Hive
### mongodb
### PowerBI
### TensorFlow-ImageRecognition

##  <font color=green> Timeseries</font>
### TS-multivariate
### TS-Smoothing

##  <font color=green> Transfer-Learning</font>

##  <font color=green> Utils-JypterNB</font>

## Readme.md

# AI/ML - Forked
## <font color=green>100Days-ML</font>
 
## <font color=green>automl</font>
 
## <font color=green>chroma</font>
 
## <font color=green>diffusers</font>
 
## <font color=green>evalml</font>
 
## <font color=green>gcp-python-docs-samples</font>
 
## <font color=green>GFPGAN</font>
 
## <font color=green>google-gemini-cookbook</font>
 
## <font color=green>intel-scikit-learn-intelex</font>
 
## <font color=green>langchain</font>
 
## <font color=green>langgraph</font>
 
## <font color=green>Learning-Pandas-Second-Edition</font>
 
## <font color=green>LeetCode-js</font>
 
## <font color=green>microsoft-generative-ai-for-beginners</font>
 
## <font color=green>ML+DL-Code-for-my-YouTube-Channel-Rohan</font>
 
## <font color=green>packages</font>
 
## <font color=green>stanford_alpaca</font>
 
## <font color=green>tensorboard</font>
 
## <font color=green>tensorflow</font>
 
## <font color=green>tensorflow-examples</font>
 
## <font color=green>tfjs-examples</font>
 
## <font color=green>Visualization</font>
 
## <font color=green>viz-github-repo</font>
## README-forked-repo.md

# Management
## Management-Main
- 11-PMO
    1. 00-General  
    1. 01-Chemfab-PMO  
    1. 02-ISCON-PMO  
    1. 03-Tagros-PMO  
    1. 04-FFI-PMO  
    1. 05-BFL-PMO  
    1. 06-TEAM-PMO  
    1. 07-SignitySolutions  
- 12-Projects-PM
    1. 01-Vikram-Solar-PMF
    1. 02-FFI-Agile-Consulting
    1. 03-AllSysServices-PMI-ACP
    1. 04-Astrowix-PMI-ACP
    1. 05-Colossal-Hibu-PM
    1. 06-TGroup-PMP
    1. 07-BirlaSoft-SageTech-PMI-ACP
    1. 08-Sagetech-Project-Estimation
    1. 09-VGL-PM-2days
    1. 10-CompetenceCurve-FTM
    1. 11-Sanofi-PM
    1. 12-Konsberg-Scrum-Agile
    1. 13-HRLEHR-Dubai
    1. 14-SEO-PMLOGY
    1. A01-ContractManagement
    1. P01-PRINCE2
- 12-Project-NGO
    1. S01-Rajiv-Malhotra
    1. S02-YFS
    1. S03-HSP
    1. S04-RKM-Ashram
    1. S05-RKM-Kankhal
    1. S06-RKM-Trivendram
- 14-Process-Courses
    1. Process-CMMI
    1. Process-ISMS
    1. Process-ISO
    1. Process-SixSigma
    1. Process-ZED
- 52-Work-PMI-Chapters
    1. 2012 LIMC Application Information
    1. CPC_Presentation_Foundations.ppt
    1. ITnTelecom-Webinars
    1. LIM-Brazil-2011
    1. OPM3-Package
    1. PMBoK-Hindi
    1. PMI-International
    1. PMI-Leadership-Component
    1. PMI-NC
    1. PMI-Team-India
    1. PMIEF
    1. PMIMC-BestPractices
    1. Regional-BP-Task-Force
    1. Work-PMICC
    1. Work-PMIMC

## Management-PM-Courses
1. PM-Agile
1. PM-Customized
1. PM-EPM
1. PM-EVM-MSP
1. PM-Microsoft-Project
1. PM-Misc-Training
1. PM-PMP-v5
1. PM-PMP-v6
1. PM-PRINCE2
1. PM-RMP
1. PM-SharePoint
1. PM-SoftwareSizeEstimation

## ## Management-PMO
1. PM-Templates
1. PMO

## Management-PMIPrep

## Training-Feedbacks

# Web+Mobile App Development - POC Work
1. Android
1. Falcon_Android
1. ImageRecognition
1. Java
1. nodejs
1. react

# AI/ML Datasets
There is no dearth of datasets but during training sessions when I or my learners need some dataset that we need to struggle for these datasets. Either they are removed ore renamed or internet availablity/restriction etc issue waste lot of time. To avoid that I have created this github repo of datasets. These are for classical machine learning. They are not for deeplearning or LLM, until mentioned specifically. 

1. 50_Startups - 50_Startups.csv
1. Abalone
1. Accidental Drug Related Deaths in Connecticut, US
1. airline-pass-stats.csv
1. airline-passengers.csv
1. AirQuality
1. Amazon Product Reviews
1. amazon_alexa.tsv
1. application_train.csv
1. Autism Screening Adult
1. Auto MPG
1. Banknote Authentication
1. Beijing PM2.5
1. Bike Sharing
1. Birmingham Parking Dataset
1. Blog_Article_Popularity
1. Blood Transfusion Service Center
1. Breast Cancer Wisconsin
1. Car Evaluation
1. CarPrice.csv
1. CarPrice_DescribeData.csv
1. Census Income
1. childweight_SCA01.csv
1. Concrete Compressive Strength
1. Coronavirus
1. Daily Demand Forecasting Orders
1. daily-min-temperatures.csv
1. Default of Credit Card Clients
1. Dow Jones Index
1. Echocardiogram
1. EEG Eye State Dataset
1. EEG Steady State Evoked Potential Dataset
1. Energy Efficiency
1. EU Population Poverty Status Dataset
1. Fakenames
1. FB.csv
1. Fertility
1. FIFA-Worldcup - World Cup.csv
1. financial_crime_aylien_news_data.tar.gz
1. fine_food_reviews_with_embeddings_1k.csv
1. Flights
1. Frequent_Names
1. Glass Identification
1. Heart Disease
1. HelpInternational-Country-data.csv
1. Hepatitis
1. Hepatitis C Virus (HCV) Classification Dataset
1. Immigrants
1. Individual Household Electric Power Consumption
1. Interstate-94 (I-94) Traffic Volume Dataset
1. Istanbul Stock Exchange
1. Liver Disorders
1. Movie-Rating.zip
1. Occupancy Detection
1. OCR-Samples
1. olympics_qa.csv
1. olympics_search.jsonl
1. olympics_sections.csv
1. Online News Popularity
1. Online_Retail
1. pima_indian_diabetes.csv
1. POIClassification.csv
1. Population
1. Portugal 2019 Election Dataset
1. Qualitative Bankruptcy
1. random-ocr-images
1. Real Estate Valuation
1. Risk Factors for Cervical Cancer
1. spotfy-2000.zip
1. Startup_Investment
1. Suicide
1. Telecom_Churn
1. Travel Reviews
1. Unemployment
1. US Tuberculosis Dataset
1. User Knowledge Modeling
1. Wholesale Customers
1. Wireless Indoor Localization
1. README.md