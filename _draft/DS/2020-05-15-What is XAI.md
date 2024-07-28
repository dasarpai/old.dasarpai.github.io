---
id: 6003    
title: "What is XAI?"
date: '2020-05-15T15:50:00+05:30'
permalink: /dsblog/What-is-XAI
categories:
  - Blog
tags:
  - XAI
  - Explainable AI
header:
  teaser: "/assets/images/dspost/dsp6003-XAI.jpg"
author: Hari Thapliyaal   
mathjax: "true"
share: true
excerpt:   
layout: dspost-layout   
author_profile: true   
toc: true   
toc_sticky: true
---

![XAI](/assets/images/dspost/dsp6003-XAI.jpg)    
   
# What is XAI?    
   
## XAI in Simple Language!   
   
The disciple of Data Science and AI has brought many terms in the boardroom for discussion, which looks complicated. In reality, many of these terms are so simple and obvious from a natural intelligence perspective that once we know it we feel it is very simple. But from the technology perspective, they are really complicated. To understand the XAI we will use one example below.

All AI or ML-based systems need some data to train. After the system has been trained it works for us and answers us based on the given input data. What it has learned depends upon what algorithm has been used, what data has been given, how much data has been given, what hyperparameter used, and many other factors.

Many times answer given by the AI system is not sufficient for consumer and they want to know the explanation and reason behind. Let’s say some banking system rejects the loan application of a customer. The customer has the right to know from the bank that why her application is rejected but the bank executive doesn’t have an answer because the decision was taken by the AI system. With this kind of system, a bank cannot serve the customer. So we need an XAI system. This will explain due to what reason the application is rejected.

Let’s say a Bank has an application that takes a loan application form as input and within few seconds tells you whether the loan is granted or not. If not then why and if yes then how much? If a lesser loan is granted than the demand then why? This explanation is needed for human who is given service and who is taking service. This explanation is given by XAI.

Let’s take another example. An organization has thousands of employees and the organization wants that every employee shall acquire some new skill, and then everything learned within 3 months to solve a business problem which they want to solve. What next course should be recommended for any employee? For that purpose, we can develop a course recommendation system for them. This will recommend the course based on the employee’s experience, interest, current role, aspirations, education, past courses, etc. The organization has its training budget in terms of training hours and the cost of training. Therefore if L&D managers want to understand why a specific course is recommended for someone, who is playing X role, then who will answer that? There are thousands of courses, thousands of skills, and thousands of providers! If the organization has XAI system in place then this can help the L&D manager in understanding the rationale behind the recommendation. Based on the current budget or due to some reason L&D manager may not accept the recommendation but s/he knows what needs to be done and how to create a new learning plan for the next three months.

Let’s see one more example, you are working as a display manager in a chain of the supermarket. It has hundreds of malls and has thousands of items to display and sell. What items should be kept with, what other items is not an easy decision. To solve this problem we create a model which helps you doing the clustering of items. If you want to know why product P1 is recommended to be kept in the same area as product P2 then you need some explanation. If a completely new category item arrives in the store then where it should be placed and why? If the display manager has to figure this out based on his experience then it may not be the right decision. Secondly, you may have hundreds of malls of different sizes and with different types of customers walking in. You cannot manually figure this out. So you depend upon the system for this work. But, if you want to know why systems is recommending something then XAI can give you the answer.

This a hot area of AI and new libraries are being developed by the researchers which are useful in developing XAI system.

## Popular XAI Libraries

1.  The **(AIX360)** [AI Explainability 360](https://github.com/IBM/AIX360) toolkit is an open-source library developed by IBM in support of the interpretability and explainability of datasets and machine learning models.
2.  **Skater** is an open-source python library designed to demystify the learned structures of a black box model both globally and locally.
3.  The **Shapley** Value **SHAP** (SHapley Additive exPlanations) is a python library
4.  **DeepLIFT** is a method that compares the activation of each neuron to its ‘reference activation’ and assigns contribution scores according to the difference. It is a python library
5.  **LIME** is developed by the University Of Washington. This is also a python library.
6.  [What-If Tool](https://pair-code.github.io/what-if-tool/) is developed by the TensorFlow team and it can also be used for XGBoost and Scikit Learn models.

## Further Reading

*   [https://www.analyticsvidhya.com/blog/2021/01/explain-how-your-model-works-using-explainable-ai/](https://www.analyticsvidhya.com/blog/2021/01/explain-how-your-model-works-using-explainable-ai/)
*   [https://analyticsindiamag.com/8-explainable-ai-frameworks-driving-a-new-paradigm-for-transparency-in-ai/](https://analyticsindiamag.com/8-explainable-ai-frameworks-driving-a-new-paradigm-for-transparency-in-ai/)
*   [https://www.darpa.mil/program/explainable-artificial-intelligence](https://www.darpa.mil/program/explainable-artificial-intelligence)
*   [https://cloud.google.com/explainable-ai](https://cloud.google.com/explainable-ai)












