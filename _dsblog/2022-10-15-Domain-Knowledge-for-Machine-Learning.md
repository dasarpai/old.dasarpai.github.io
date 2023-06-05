---
id: 6015    
title: "Domain Knowledge in Machine Learning"
date: '2022-10-15T15:50:00+05:30'
permalink: /dsblog/Domain-Knowledge-in-Machine-Learning
categories:

tags: [Machine Learning]

header:
  teaser: "/assets/images/dspost/dsp6015-domain-knowledge-in-machine-learning.jpg"
excerpt_separator: "<!--more-->"
excerpt:
layout: single
author_profile: true
---

![Domain Knowledge in Machine Learning](/assets/images/dspost/dsp6015-domain-knowledge-in-machine-learning.jpg)

# Domain Knowledge in Machine Learning   

Let’s say the domain is a restaurant kitchen. A dataset with 3 variables. Two predictors and one predicted. Predictor variables are flour in kilograms and water in liters.  A predicted variable is the number of roti/ bread. You know the model will be something like this.   

Number of roti (y). = b1 \* flour in kg (x1) + b2 \* water in liter (x2)

Features are scaled to the same scale in terms of the unit of measurement, the KMS system.  

During training, your model learns b1 and b2 from training data.

Now during prediction if you enter 1 kg flour and 10 liters water then what should be the number of roti from the model? Or if you input 10 kg flour and 0.1-liter water, then what is the expected output? 

Those who have not worked in the kitchen may not understand what I am saying. That is why they say domain knowledge is essential. No problem, try some experiments in the kitchen without someone looking at you. 😊

Now questions are   
Is there any problem with this model-building approach?       
Are we missing some steps from data collection to data cleaning to the model building due to which we may get unexpected output?   
If yes, then where is the problem?   
What should be the expected output for the above inputs?    
What needs to be done in this whole approach to build a good model?    
Can we solve this problem without ML?   

Don’t blame the user that you are giving the wrong input and my model is failing.   

Any thoughts?

