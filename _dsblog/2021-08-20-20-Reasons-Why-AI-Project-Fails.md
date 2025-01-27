---
id: 6007    
title: "20 Reasons Why AI Project Fails"
date: '2021-08-20T15:50:00+05:30'
permalink: /dsblog/20-Reasons-Why-AI-Project-Fails
categories:
  - dsblog
tags:
  - Project Management
  - Why AI Project Fail?
  - AI Project Failure
keywords: AI project failure, project management challenges, machine learning implementation, data quality issues, model deployment problems, AI project risks, model maintenance, scalability issues, team expertise, business alignment
header:
  teaser: "/assets/images/dspost/dsp6007-Why-AI-Project-Fails.jpg"
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal   
mathjax: true
share: true
excerpt: "Comprehensive analysis of common reasons behind AI project failures, including technical challenges, management issues, and implementation pitfalls. Learn how to avoid these mistakes in your AI initiatives."
layout: dspost-layout   
author_profile: true   
toc: true   
toc_sticky: true
---

**Contents**
* TOC
{:toc}

![Why AI Project Fails](/assets/images/dspost/dsp6007-Why-AI-Project-Fails.jpg)   

# Why Does AI Project Fails?   

I have been in IT project management for 2+ decades. Being in the industry for quite a good time, I have been observing the rise and fall of project success trends of different industries. In the last couple of years, I have observed some trends in AI projects and their failure rate. Based on my understanding I am trying to summarize the reasons for AI project failure. I am sure many of the points will resonate with you. 

1.  **Complex Systems**: We want to mimic complex human behavior, but we are just starting the AI journey. Foundational components and hardware still need to be developed. For example, detecting cancer; is not just based on a scan or X-ray that we say someone has cancer or not. Just based on some video streams we cannot conclude that there is a thief etc. Many inputs and human judgments are involved to make a decision.
2.  **Not Breaking a Complex Systems**: We are not able to break complex human mimic to the detail that we can say what hardware, software, edge devices, algorithms are needed to handle this. For example, you need a text-to-speech converter. We know how complex is human speech process is in terms of speed, tone, pronunciation, pitch, etc. Just giving text to the system and expecting it will be able to produce human-grade quality reading or recitation is impossible. We need to break the whole problem into smaller components and each component is a complex project in itself.
3.  **Expectations**: We are not able to convince users that it is not a replacement for your intelligence and sense faculties. Neither takes it is as the extension of your intelligence and sense organs. We need to convince users that as of today, AI systems are there to help you so that you can work in a better way, be more productive and enjoy your work. Whether self-driving vehicles, country border protection, or medical surgery all place AI is assistance not a replacement of humans.
4.  **Human Emotion**: When a human fails the manager can teach him, scold him, warn him, fire him, or hand over him to the police. This brings the manager’s frustration a little down and he moves on. But when AI systems fail manager feels helpless. The maximum, what he does is stop using the product.
5.  **Data Volume & Cost of Data:** To train a model for high accuracy we need lots of data. But it is not easily available because of data protection and privacy laws. Sometimes it is very expensive.
6.  **Unstructured Data**: Data is scattered or in bad shape. It takes lots of money and time to get it from different sources, clean it and check it before we know whether purpose can be met or not.
7.  **Missing Skills**: Data engineers and data analysts don’t understand statistics enough. So, they follow mechanical steps but are not able to peep inside the dataset and understand the business or statistical meaning of the data.
8.  **Poor ROI justification**. Sponsors don’t understand clearly what impact will come and what trade-off, change in existing processes, dependency on humans need to be done. Salespeople sell the rosy pictures and many times reality is far away from the sales ppt. Sometimes reality is also very good, but the sponsor thinks it is too expensive.
9.  **Volatile AI Market**: Cloud services from big players like Google, Microsoft, Amazon, IBM, etc are evolving very fast because of their huge investment in AI research. Due to this market is too volatile. We don’t know whether the product developed today is still worth tomorrow or not.
10.  **Expensive Hardware**: GPU, TPU is still very expensive, and everyone cannot afford these for experimenting with ideas.
11.  **Models not deployed for consumption**. For model deployment, monitoring, and model performance feedback you need a different set of skills. Most of the time after a model is developed it is handed over to Software Development and DevOps team. It causes the error, model performance deteriorates without the notice of the AI team and this leads to project failure.
12.  **Model Retraining:** Depending upon the utility and type of the model it needs to be retrained periodically. Some need to be retrained every week, some monthly, some quarterly, and for some this period doesn’t matter. As soon as the model is not performing as per expectation it needs to be retrained. Retraining and redeployment of the model need another set of complex steps and not enough experienced people around.
13.  **AI or not AI:** Sponsors are not able to understand whether a problem can be solved using rule-based application programming and no AI application is required. AI applications mean retraining, however in the case of rule-based applications this is not needed. For a supplier, it may be a business opportunity but sponsor it is a waste of money.
14.  **Missing holistic approach**. Before some AI system or component is recommended in the complex system of any organization, system analysis, proposal maker, decision-maker need to see the whole picture. AI system is never a silver bullet. It is solving a particular problem in a giant process pipeline. We need to understand what bottlenecks are? what is flowing in the pipeline? Which process/user going to consume the output of the model.
15.  **Corrupt input data for prediction**: Before training a model using data lots of data cleaning, data transformation, feature engineering are done by the project team. When a model is deployed in production, we need to make sure the same kind of transformed data is given to the model for the prediction. Many times, transformation is not properly done or transformation steps are not able to handle outlier data values. This leads to incorrect predictions.
16.  **Scale issues**: Sometimes models perform well if they need to do few hundred predictions every day. No matter what kind of hardware infrastructure you use for these models if the right algorithms are not chosen to train the model then it will fail if it has to predict 1000/ second.
17.  **MLOps Processes and Tools**: During model development, many features are created and experimented with, thousands of combinations of hyperparameters are experimented to develop thousands of models and data goes through the different transformation stages. Finally, we select the best model and deploy it. There are not enough good tools for feature versioning, data versioning, hyperparameter versioning, model versioning, and performance tracking of different versions of models.
18.  **In-house Development**: When data is too sensitive and secure like a credit card, health records, income, security-related, etc., and we don’t have internal competency of model development and maintenance then data need to be given to third parties. You need lots of preparation and data crunching before you give this to third parties. This is expensive and time-consuming and many times projects don’t take off.
19.  **Sponsors need to think beyond cost-cutting and increasing profit**. We also need to look towards the AI systems to increase customer loyalty, customer satisfaction, reduce the stress of employees, ease of doing business, etc. When these are not the metrics then we may start an AI project with the wrong objective and declare it dead after some time. 
20.  **Overselling**. End-user or customers or sponsors don’t care about the technology used to solve the problem. AI or not AI doesn’t matter much. It is a technical term; the engineering team should bother about it, whether the technical team wants to solve a problem using AI or without AI. Without using the name AI if a system is helping an organization that is good enough. Just because the AI tag is attached to a system expectation of people rises very high. Once these expectations are high then it is not easy to manage those expectations even after delivering the best system.