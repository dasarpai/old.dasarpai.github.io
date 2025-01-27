---
id: 6001    
title: "Dealing with Sensitive Data"
date: '2020-03-10T15:50:00+05:30'
permalink: /dsblog/Dealing-with-Sensitive-Data
categories:
  - dsblog
tags:
  - Data Security
  - Data Privacy
  - Sensitive Data
  - Data Protection
  - Data Governance
keywords: data security, data privacy, sensitive data handling, data protection, data governance, data anonymization, data encryption, GDPR compliance, data masking, secure data management
header:
  teaser: "/assets/images/dspost/dsp6001-Dealing-with-Sensitive-Data.jpg"
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: "Learn essential strategies for handling sensitive data in data science projects. Covers data anonymization, encryption, access controls, and compliance requirements for protecting confidential information across different environments."   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---
![XAI](/assets/images/dspost/dsp6001-Dealing-with-Sensitive-Data.jpg)   

# Dealing with Sensitive Data   

## Introduction
One of the biggest problems for a Data Science project team is to protect the data. We know, data is the basic raw material for building any supervised or unsupervised models. We cannot make a without data. Let’s assume you are working for an eCommerce retail company like Amazon; or in the health domain with some big hospital chain or government hospital; or in the banking industry with some big bank like Bank of America, Standard Charted, SBI, or ICICI Bank. They have huge data. That data can be used to develop ML models. These models can help them to serve their customers or other stakeholders in a better and efficient way. To develop these models, data should be given to the Data Science team. When the data is moving out from the production environment to the project environment, there is no guarantee that data will not fall in the wrong hands and will not be misused during the project or post the project completion. When the data is moving within the same company, there are lesser chances of this disaster. But when the company is giving data to third parties or vendors, then there are high chances.

As a client, it is my responsibility to ensure and take the measure that data do not fall in the hands of those for whom it is not intended. But even if it goes to unintended people, they should not be able to misuse that. How to ensure that the given data helps the data science team in developing a high-performing model and at the same time data is useless in the wrong hands?   For that purpose, there are many methods and 4 methods recommend in [this article](https://medium.com/lizuna/beacon-the-use-of-principal-components-analysis-to-mask-sensitive-data-in-machine-learning-7904b01445d0).  If you are interested in reading in detail you can read that. Below is the summary of those 4 techniques.

## Techniques to Handle Sensitive Data

1.  Data Removal and Encryption : Look all the columns of all the files. Ask yourself, is this information useful for the model building? If you do not know the answer, then ask data science team. If data is not useful, then remove that file or column from the file. When we know that field is must, then we should encrypt that field. For example, a name field may be removed. Religion or address field may be encrypted.
2.  Data Coarsening: For example, if you have income filed, then consider it rounding off to a thousand or a million precision level. Consider amount field 2378959 to 2378K or 2.3M.
3.  Data Masking: Handing over full credit card number is dangerous, so consider giving last 4 digit and mask other digits. Or you can convert these 4 digits to an octave number, so 8 can be written as 10. Instead of giving address, consider low precision longitude and latitude of the address.
4.  Principal Components Analysis (PCA): PCA can be used to compress the data. For example, if your dataset has 10 columns then after compressing this using PCA you can get 2 or 3 columns which represents 99% of the data which is coming from your 10 columns. You can safely hand over this new compress data for modeling.

If you are using any other techniques, then feel free to share them in the comment box.
