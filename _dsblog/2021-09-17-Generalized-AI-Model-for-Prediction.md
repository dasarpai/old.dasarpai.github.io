---
id: 6009    
title: "Generalized AI Model for Prediction"
date: '2021-09-17T15:50:00+05:30'
permalink: /dsblog/Generalized-AI-Model-for-Prediction
categories:
  - Blog
tags:
  - Machine Learning Models  
  - Generalized ML Model 
header:
  teaser: "/assets/images/dspost/dsp6009-Generalized-AI-Model-for-Prediction.jpg"
excerpt_separator: "<!--more-->"
excerpt:
---

![Generalized AI Model for Prediction](/assets/images/dspost/dsp6009-Generalized-AI-Model-for-Prediction.jpg)

Can we really Develop AI solutions that can predict human behavior? If you are not a technical person then don’t get overwhelmed by the next paragraph, you can read further, and it will make sense to you.

We know the basic equation, y = mx + c. This comes from algebra and trigonometry. Here, y is the predicted value, and x is the input. The x can be a simple scalar value or a vector. Similarly, m is the coefficient in this equation, and it can be a simple scalar value or a vector. If m or x is a vector, then it can hold multiple values. The value of m corresponding to x is also called slope in trigonometry. If a plane is 2 dimensional, then you have one m and one x. But if a plane is complex, and it has, let us say, 10 dimensions then it has 9 m and 9 x. 10th dimensions is predicted by these 9 m and 9 x, using the earlier formula. How that multiplication happens is easy for those who know vector and matrix multiplication, but for others, it is really complicated. So, you can leave it for the time being.

In the above equation, y maybe your happiness which can be predicted by X vector which includes your health, money you have, relationship, children’s health, quality of work, etc. The “Y” can also be how much money you will make, which depends upon X vector, which includes how much hard work you can do, your education, your skills, work you do, your workplace, your age, your attitude, etc. No matter how long is your X vector or how many features are there in X we cannot predict y accurately. Why? Because every human is different, and no model cannot predict 100% about human life. By including more quality features in the X vector, you can improve the performance of the model, but no model can predict 100%.

Prediction is good for business, either you use AI or astrologers, does not matter. But if someone can predict your next move, you feel most frustrated. As an individual, you do everything to defy that prediction. Especially if you know somebody is getting benefited by predicting you correct. 

Whether your AI product is about classification, regression, clustering, or generation, you are trying to play with a similar concept as mentioned in the earlier equation (keeping it simple for non-technical, non-math readers)

Whether YouTube recommends you some show, or Netflix recommends you some movie, or Amazon recommends you some product. Either a model predicts some disease or a model predicts the price of some product, everywhere m and x are used for prediction, recommendation, classification, or generation purposes.

What is X? If Amazon wants to recommend you something then X is product name, product category, price, number of units, gender, delivery location, billing location, date of order, day of order etc. If a model is predicting cancer from an X-ray, then X is the pixel value of every pixel of the x-ray. Model form cluster on the image and detect different regions, intensity, etc. Based on the intensity, area of a spotted region, location of the spot, etc. AI model predicts disease. If your model is predicting a loan should be granted or not then X can be age, gender, income, job title, education, location, credit rating, etc. During the model training, the model learns m corresponding to the x.

Normalization of each value of X and y is important for creating a good prediction model. For normalization, we take the help of statistics or use different libraries of the programming language we are using to build the model.

If you take an Amazon dataset, there are hundreds of features that make vector X. Using those hundreds of values in X, we train our model. No model can predict 100%. Why? Because you cannot capture all the attribute which defines human behavior of every human perfectly.

To address this accuracy problem, we use a different set of parameters or X (features) and create different models. These models may be for predicting a specific product category, say electronics. They may predict for a specific geography, say Mumbai or Bangalore or India. They may predict for a specific age group, or they may predict for a specific gender. But using the same data why do we create different models for different age groups, product categories, geography, etc? Because 1- it is impossible to build a generic model, 2- we don’t have enough variables which predict human behavior, 3- we can never collect all the X (features). So creating an exhausting dataset that represents every aspect of human behavior is impossible. So segmentation helps.

Data scientists pay special attention to selecting features to develop a model which can have the highest possible performance. The model performance also depends upon the choice of algorithm, hyperparameter tuning, the architecture used (in the case of neural network) but it is heavily affected by the X (features) available for training.

Trying to develop a multi-modal is worth because it tries to integrate all kind of inputs text, audio, image, video from the source and then predict. But trying to build a multilingual, multi-script, multi-modal, multi-domain is extremely challenging. 

In physics, physicists are looking for a theory of everything or an equation that can explain everything. The problem there is nature behaves differently at classical and quite differently at the quantum level. Some day physics may succeed because they are dealing with the predictive nature of existence. Nature is not unpredictable. In the absence of a definition, it may look unpredictable or undefinable.

In the world of data science, data scientists are trying to build a model to predict everything. For this, they are trying to develop a generalized, multi-modal model. But that is impossible to build. Using certain features (X) we can develop a problem-specific, domain-specific, language-specific model but not a generic model.

What is your thought about the generalized, multi-modal model? A problem in the realm of physics is less complicated but hugely complicated in the field of data science. Why? Because physics is dealing with nature and data science is dealing with humans, their behavior, and their businesses.



