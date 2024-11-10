---
id: 748
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

# AI/ML - Industries - Developed/ Created/ Expanded work
**Projects in this section are listed according to Industry/Business Domain.**


## <font color=green>Airlines</font>

### Flightdelay-Analysis-Bigdata
Apache Hive is a data warehousing and SQL-like query engine built on top of Hadoop. Hadoop has Hadoop Distributed File System (HDFS). It can handle distributed storage and processing of the data in hand. Hive can handle billions of transactions. We can perform any kind of SQL Query without bothering whether aggregation functions or filter function will be ever completed or not. Hive can handle all CRUD operations.

In this project a folder "\server\airlines" on the server has hundreds of files which contains airlines daily flight information like Origin,Dest, Distance,DepTime, CRSDepTime, ArrTime, CRSArrTime, UniqueCarrier, FlightNum, TailNum, ActualElapsedTime, CRSElapsedTime, AirTime, ArrDelay, DepDelay, TaxiIn, TaxiOut, Cancelled, CancellationCode, Diverted, CarrierDelay, WeatherDelay, NASDelay, SecurityDelay, LateAircraftDelay. Airlines wanted to analyze the of last 20 years.

Activities (Pipeline) in project: 
- Creating hive table (for storage) from the external files
- Create partition table schema
- Parition hive table based on the year and putting data in partition table.
- Performing sql querries on the partitioned table

**Important Notes**    
- [My article on Hive](dsblog/Exploring-Apache-Hive)  
- [Github Code](https://github.com/dasarpai/DAI-Projects/tree/main/Airlines/Flightdelay-Analysis-Bigdata)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Airlines/Flightdelay-Analysis-Bigdata/Flight_Delay_EDA.ipynb)
- [Kaggle Dataset - 247.96 MB](https://www.kaggle.com/datasets/giovamata/airlinedelaycauses)

**Tech Stack:** Hadoop/HDFS, Hive, SQL, HiveQL, ORC (Optimized Row Columnar) or Parquet, Python, Matplotlib/Seaborn. 

-----------------------------------------------------------
## <font color=green>BFSI</font>

### Credit-Fraud-Detection
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/BFSI/Credit-Fraud-Detection)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/BFSI/Credit-Fraud-Detection/Credit_card_fraud_detection_Starter_code7-Final.ipynb)
- [Kaggle Dataset 151MB](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud)

### DoeJones-Prediction-with-News
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/BFSI/DoeJones-Prediction-with-News)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/BFSI/DoeJones-Prediction-with-News/PredictingDoeJones-with-News.ipynb)
- [Kaggle Dataset](https://www.kaggle.com/datasets/aaron7sun/stocknews)

### Loan-Approval
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/BFSI/Loan-Approval)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/BFSI/Loan-Approval/bankmarketing.ipynb)
- [Dataset](https://github.com/dasarpai/DAI-Datasets/blob/main/bankmarketing.csv)

----------------------------------------------------------
## HR (Human Resources)
### HR Analysis of Employee Attrition & Performance
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/HR/Employee-Attrition/Attrition_in_an_Organization_Python.ipynb)
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/HR/Employee-Attrition)
- [HR Analysis of Employee Attrition & Performance - R](https://www.kaggle.com/code/harithapliyal/attrition-in-an-organization-why-employees-quit)
- [HR Analysis of Employee Attrition & Performance - Python](https://www.kaggle.com/code/harithapliyal/attrition-in-an-organization-python)
- [Github dataset](https://github.com/dasarpai/DAI-Datasets/blob/main/WA_Fn-UseC_-HR-Employee-Attrition.csv)
- [Kaggle dataset]()
- **Objective:** Uncover the factors that lead to employee attrition and explore important questions such as ‘show me a breakdown of distance from home by job role and attrition’ or ‘compare average monthly income by education and attrition’. This is a fictional data set created by IBM data scientists.

----------------------------------------------------------
## Climate
### Acea Smart Water Analytics & Prediction
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Climate/Acea-Water-Prediction/acea-smart-water-full-eda-prediction.ipynb)
- [Acea Water Prediction & Analysis - Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Climate/Acea-Water-Prediction)
- [Acea Water Prediction & Analysis - Kaggle](https://www.kaggle.com/code/harithapliyal/acea-smart-water-full-eda-prediction)
- [Kaggle Dataset](https://www.kaggle.com/competitions/acea-water-prediction)
- [Github Dataset]()
- **Objective**
  - The Acea Group deals with four different type of waterbodies: water spring (for which three datasets are provided), lake (for which a dataset is provided), river (for which a dataset is provided) and aquifers (for which four datasets are provided).
  - This competition uses nine different datasets, completely independent and not linked to each other. Each dataset can represent a different kind of waterbody. As each waterbody is different from the other, the related features as well are different from each other.
  - It is of the utmost importance to notice that some features like rainfall and temperature, which are present in each dataset, don’t go alongside the date. Indeed, both rainfall and temperature affect features like level, flow, depth to groundwater and hydrometry some time after it fell down. This means, for instance, that rain fell on 1st January doesn’t affect the mentioned features right the same day but some time later. As we don’t know how many days/weeks/months later rainfall affects these features, this is another aspect to keep into consideration when analyzing the dataset.

-----------------------------------------------------------
## <font color=green>eCommerce</font>

### Black Friday Sales Data Analysis Prediction
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/eCommerce/Black-friday-sales/black_friday_sales_prediction.ipynb)
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/eCommerce/Black-friday-sales)
- [Dataset](https://raw.githubusercontent.com/dasarpai/DAI-Datasets/main/Black-Friday-Sales/black-friday-sales.zip)
- [Black Friday Sales Data Analysis Prediction - Kaggle](https://www.kaggle.com/code/harithapliyal/black-friday-sales-prediction)
- **About Dataset:** This dataset comprises of sales transactions captured at a retail store. It’s a classic dataset which has multiple shopping experiences. This is a regression problem. The dataset has 550,069 rows and 12 columns.

### Amazon-Sentiment Analysis

### Bigdata-AmazonReviews

-----------------------------------------------------------
## <font color=green>Economics</font>


### Economy-Analysis
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Economics/Economy-Analysis)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Economics/Economy-Analysis/GDP-Assignment.ipynb)



### Prosperity-Clustering
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Economics/Prosperity-Clustering)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Economics/Prosperity-Clustering/Clustering%26PCA-Assignment.ipynb)



## <font color=green>Electronics</font>
### Hand Gesture Recognition 
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Electronics/Hand-Gesture-Recognition)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Electronics/Hand-Gesture-Recognition/gesture-recognition-conv3d-conv2d-rnn.ipynb)

-----------------------------------------------------------
## <font color=green>Energy</font>

### UK-Energy-Consumption
- [Github Repo](https://github.com/dasarpai/DAI-Projects/blob/main/Energy/UK-Energy-Consumption)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Energy/UK-Energy-Consumption/UK_Energy_Consumption_by_PostCode.ipynb)

-----------------------------------------------------------
## <font color=green>Entertaintment</font>

### Movies-Recommendations
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Entertaintment/Movies-Recommendations)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Entertaintment/Movies-Recommendations/movies_recommender.ipynb)
-----------------------------------------------------------
## <font color=green>Health</font>

### Liver Patient Analysis
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Health/Liver_Patient)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Health/Liver_Patient/Liver_Patient_Analysis.ipynb)
- [Liver Patient Analysis - Kaggle](https://www.kaggle.com/code/harithapliyal/liver-patient-analysis)
- [Githug Dataset]()
- [Kaggle Dataset]()

### Breast-Cancer-Prediction
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Health/Breast-Cancer-Prediction)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Health/Breast-Cancer-Prediction/BreastCancer2.ipynb)

### Chest-XRay
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Covid-worldwide-EDA
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### India-Covid-Graphs
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Malaria-Detection_dep
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### pnemonia_prediction
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)
----------------------------------------------------------
## Industrial Safety
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Industrial Accident Cause Analysis 
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Industrialsafety/accident-cause-analysis/industrial_accident_causal_analysis.ipynb)
- [Github](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Industrialsafety/accident-cause-analysis)
- [Kaggle Dataset](https://www.kaggle.com/datasets/ihmstefanini/industrial-safety-and-health-analytics-database)
- [Github Dataset](https://github.com/dasarpai/DAI-Datasets/blob/main/Industrial-Safety-and-Health-Analytics.zip)

#### OSHA Accidents and Injury
- [Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Industrialsafety/OSHA_accidents)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Industrialsafety/OSHA_accidents/osha_accidents_and_injury.ipynb)
- [Kaggle Dataset](https://www.kaggle.com/datasets/ruqaiyaship/osha-accident-and-injury-data-1517)	

-----------------------------------------------------------
## <font color=green>Hospitality</font>

### Zomato Review 
- [Zomato Review - Github Repo](https://github.com/dasarpai/DAI-Projects/tree/main/Hospitality/Zomata_Reviews_Sentiments)
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/Hospitality/Zomata_Reviews_Sentiments/sentiment-analysis-nlp-huggingface.ipynb)
- [Github Dataset](https://github.com/dasarpai/DAI-Datasets/blob/main/zomato_reviews.csv)

### Restaurant_Sales_Order_Forcasting
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------
## <font color=green>Infra</font>

### AirQuality-Prediction
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### House-Price-Prediction_dep
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### House-Price-Prediction_Docker
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### House-Prices-KCH
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Surprise-House-Pricing
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)


-----------------------------------------------------------
## <font color=green>Media+Pub</font>

### Fakenews-Detection
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Olympic-QA-System-with-GPT
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### HBQAS
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### NewsClassification-20Groups
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Podcast-Transcription
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### SDSHL
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### SpamFilter
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Toxic-Comment
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Twitter-Sentiment-Analysis
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### YELP-Review-Prediction
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)


-----------------------------------------------------------
## <font color=green>Restaurants</font>
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### FoodDemand-Forcast
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Tools-and-Food-Gradient-Identifcation
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------
## <font color=green>Retail</font>

### Online-Retail-Customer-Clustering
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------
## <font color=green>Sales</font>

### CarPrice
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### CarSales
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Lead-Conversion
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------

## <font color=green>Telecom</font>

### Telcom-Churn
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------
## <font color=green>Travel+Logistic</font>

### Bigdata-pySpark-NYC-Parking
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Driver-Availablity-Prediction
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Uber-Cancellation
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Vehicle-Classification
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

### Vehicle-Tracking
- [Github Repo]()
- [Colab](https://colab.research.google.com/github/dasarpai/DAI-Projects/blob/main/)

-----------------------------------------------------------
## <font color=green>Agri</font>
-----------------------------------------------------------
## <font color=green>Education</font>
-----------------------------------------------------------
## <font color=green>Law+Justice</font>
-----------------------------------------------------------
## <font color=green>Sanskrit</font>
-----------------------------------------------------------
## <font color=green>Misc</font>
-----------------------------------------------------------
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


