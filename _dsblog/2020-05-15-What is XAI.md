---
id: 6003    
title: "What is XAI?"
date: '2020-05-15T15:50:00+05:30'
permalink: /dsblog/What-is-XAI
categories:
  - dsblog
tags:
  - XAI
  - Explainable AI
header:
  teaser: "/assets/images/dspost/dsp6003-XAI.jpg"
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

![XAI](/assets/images/dspost/dsp6003-XAI.jpg)    
   
# What is XAI?    
   
## XAI in Simple Language!   
   
The discipline of Data Science and AI has introduced many terms into discussions that might seem complicated at first. In reality, many of these terms are intuitive and straightforward when considered from a natural intelligence perspective. However, from a technological standpoint, they can be complex. To understand XAI, let’s explore a few examples.  

All AI or ML-based systems rely on data for training. Once trained, the system works by providing answers or predictions based on input data. The quality of these answers depends on factors such as the algorithm used, the quantity and quality of the data, and hyperparameters, among others.

Often, the answers provided by AI systems are insufficient for users. They want to understand the rationale behind a decision. For example, consider a banking system that rejects a customer’s loan application. The customer has the right to know why the application was rejected. However, if the decision was made by an AI system, the bank executive might not have an answer. Without such explanations, the system fails to serve customers effectively. This is where XAI (Explainable AI) comes into play. XAI provides explanations, making AI decisions transparent and understandable.

Let’s delve into more examples to understand XAI’s importance:

### Use Case 1: Loan Decision in Banking
A bank has an application that evaluates loan applications and provides decisions within seconds. If a loan is rejected, the system explains why. If a smaller loan amount is granted, the system details the reasons. This transparency benefits both the service provider and the customer.

### Use Case 2: Course Recommendation in Corporate Training
An organization wants employees to upskill to solve business problems within three months. A course recommendation system considers employees' experience, interests, roles, aspirations, and education to suggest courses. The L&D manager might question why a specific course was recommended for an employee. With XAI, the rationale is clear, enabling the manager to make informed decisions.

### Use Case 3: Product Placement in Retail
A retail chain with hundreds of stores and thousands of products relies on AI for product placement. The system recommends item clusters based on sales patterns and customer preferences. If a manager wants to understand why Product P1 should be placed near Product P2, XAI provides the reasoning. This ensures better decision-making and store optimization.

### Use Case 4: Medical Diagnosis
AI systems help diagnose diseases based on medical data. For instance, a system predicts a high risk of diabetes for a patient. XAI explains which factors (e.g., blood sugar levels, BMI, lifestyle) contributed to the prediction, allowing doctors to trust and act on the insights.

### Use Case 5: Fraud Detection
AI systems in financial institutions detect fraudulent transactions. When a transaction is flagged, XAI provides details like unusual patterns, transaction history, or location anomalies. This helps investigators verify the findings.

### Use Case 6: Autonomous Vehicles
Self-driving cars make real-time decisions like braking or lane changes. XAI helps developers and regulators understand why a car made a specific decision, ensuring safety and accountability.

### Use Case 7: Hiring Decisions
AI systems streamline recruitment by shortlisting candidates. XAI explains why certain candidates were selected or rejected, ensuring fairness and reducing bias.

### Use Case 8: Energy Management
Smart grids use AI to optimize energy distribution. XAI explains decisions, such as why power was diverted to a specific area, ensuring transparency in resource allocation.

### Use Case 9: Legal Systems
AI assists in reviewing legal documents and predicting case outcomes. XAI provides insights into how conclusions were drawn, helping lawyers and judges make informed decisions.

### Use Case 10: Education
AI personalizes learning paths for students. XAI explains recommendations, such as why a specific topic or method was suggested, helping educators adapt teaching strategies.

## Popular XAI Libraries

Here are some widely-used XAI libraries and tools to build explainable systems:

1. **AI Explainability 360 (AIX360)**: An open-source library developed by IBM for the interpretability and explainability of datasets and machine learning models. [GitHub Link](https://github.com/IBM/AIX360)
2. **SHAP (SHapley Additive exPlanations)**: A Python library that uses Shapley values to explain model predictions globally and locally.
3. **LIME (Local Interpretable Model-agnostic Explanations)**: Developed at the University of Washington, LIME explains individual predictions by approximating the black-box model locally.
4. **DeepLIFT (Deep Learning Important FeaTures)**: Compares neuron activations to reference activations, assigning contribution scores. [GitHub Link](https://github.com/kundajelab/deeplift)
5. **Skater**: An open-source library to demystify black-box models by providing global and local interpretability.
6. **What-If Tool**: Developed by the TensorFlow team, it supports interpretability for TensorFlow, XGBoost, and Scikit-learn models. [Link](https://pair-code.github.io/what-if-tool/)
7. **InterpretML**: A Microsoft toolkit for explainable machine learning that supports glass-box models and black-box explanations. [GitHub Link](https://github.com/interpretml/interpret)
8. **Alibi**: An open-source Python library for machine learning model interpretability and explanation, supporting techniques like counterfactuals and anchors. [GitHub Link](https://github.com/SeldonIO/alibi)
9. **Captum**: A PyTorch library for model interpretability, providing gradient-based attribution methods. [GitHub Link](https://github.com/pytorch/captum)
10. **H2O Explainability**: Integrated into H2O.ai’s platform, it provides interpretability tools for H2O models, including variable importance and partial dependence plots.
11. **Anchors**: A high-precision model explanation technique focusing on specific predictions.
12. **Eli5**: A Python library for explaining weights and predictions of models built in libraries like Scikit-learn and XGBoost. [GitHub Link](https://github.com/TeamHG-Memex/eli5)

## Further Reading

- [Explain How Your Model Works Using Explainable AI](https://www.analyticsvidhya.com/blog/2021/01/explain-how-your-model-works-using-explainable-ai/)
- [Explainable AI Frameworks Driving a New Paradigm for Transparency in AI](https://analyticsindiamag.com/8-explainable-ai-frameworks-driving-a-new-paradigm-for-transparency-in-ai/)
- [DARPA’s Explainable Artificial Intelligence Program](https://www.darpa.mil/program/explainable-artificial-intelligence)
- [Google Cloud Explainable AI](https://cloud.google.com/explainable-ai)













