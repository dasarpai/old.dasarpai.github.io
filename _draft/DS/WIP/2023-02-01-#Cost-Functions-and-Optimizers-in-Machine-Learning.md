---
mathjax: true
id: 6045
title: Cost Functions and Optimizers in Machine Learning 
date: 2023-02-01
permalink: '/dsblog/Cost-Functions-and-Optimizers-in-Machine-Learning'
tags: [NLP] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6045-Cost-Functions-and-Optimizers-in-Machine-Learning.jpg
author: Hari Thapliyaal 
excerpt:
share: true 
---

![Cost-Functions-and-Optimizers-in-Machine-Learning](/assets/images/dspost/dsp6045-Cost-Functions-and-Optimizers-in-Machine-Learning.jpg)


# Cost-Functions-and-Optimizers-in-Machine-Learning

## What is machine learning?
Machine learning is a subfield of artificial intelligence that focuses on the **development of algorithms and statistical models** that enable computers to improve their performance on a specific task through experience.

In machine learning, the goal is to develop models that can **automatically learn patterns and relationships in data, and use that knowledge to make predictions or take actions**. The models are trained on a large dataset, and the learning process involves **optimizing the parameters of the model to minimize the prediction error**. For this purpose every algorithms uses some **cost function or loss function**.

There are various types of machine learning, including supervised learning, unsupervised learning, semi-supervised learning, and reinforcement learning. These approaches are used in a wide range of applications, including image classification, speech recognition, natural language processing, recommendation systems, and predictive analytics.

## What is cost function?
A cost function, also known as a loss function or objective function, is a **mathematical function that measures the difference between the predicted output of a model and the actual output**. The cost function is used to evaluate the performance of a machine learning model and **guide the optimization process during training**.

The goal of training a machine learning model is to minimize the value of the cost function. This is achieved by adjusting the parameters of the model to reduce the prediction error. The choice of cost function will depend on the type of problem being solved and the type of model being used.

For example, in a binary classification problem, a common cost function is the cross-entropy loss, which measures the difference between the predicted probabilities and the actual class labels. In a regression problem, a common cost function is the mean squared error, which measures the average squared difference between the predicted values and the actual values.

The cost function provides a measure of the model's performance, and the optimization process aims to find the values of the model's parameters that minimize the cost function. The optimization process is usually performed using gradient descent or other optimization algorithms, which iteratively update the parameters to reduce the value of the cost function.

## Can you mention the high level flow of Machine Learning process?
- Data Preparation
	- Getting right data 
	- Data Cleaning
	- Data Exploration
	- Feature Engineering
- Model Building 
	- Optimization
	- Evaluation
	- Regularization (if evaluation tells us model is overfitting. Regularization is part of Optimization.)
- Model Evaluation
	- Prediction on the Test Data
	- In not satisfied then either go to Model Building or Data Preparation step

## What is Overfitting in Machine Learning?
Overfitting is a common problem in machine learning where a **model is too complex and fits the training data too well**, but performs poorly on unseen data. This occurs because the model has learned the noise and random fluctuations in the training data, rather than the underlying patterns and relationships.

In overfitting, the model has a high accuracy on the training data, but a low accuracy on the validation or test data. This is because the model is too complex and has memorized the training data, rather than learning the underlying patterns and relationships that generalize to new data.

To prevent overfitting, various techniques such as regularization, early stopping, cross-validation, and ensembling can be used. These techniques aim to find a balance between fitting the training data well and having a model that generalizes well to unseen data. The choice of technique will depend on the specific requirements of the problem and the type of model being used.

## What is regularizer in Machine Learning?
A regularizer is a **technique used in machine learning to prevent overfitting**, which occurs when a model is too complex and fits the training data too well, leading to poor generalization performance on unseen data. Regularization adds a penalty term to the cost function that is being minimized during training, effectively reducing the complexity of the model.

The goal of regularization is to find a balance between fitting the training data well and having a model that generalizes well to unseen data. The choice of regularization technique will depend on the specific requirements of the problem, such as the desired level of complexity of the model and the desired level of overfitting.

Examples of regularization techniques include Lasso, Ridge, Elastic Net, Dropout, Early Stopping, Weight Decay, and Data Augmentation. These techniques can be used in combination with other cost functions to prevent overfitting and improve the generalization performance of machine learning models.


## What is Loss Function? Is is different from cost function?
The terms "cost function" and "loss function" are used interchangeably. They refer to a function that measures the difference between the predicted output and the actual output of a model. The goal of training a model is to minimize the value of this function, which is used to guide the optimization process.

In essence, the cost function represents the error in the model's predictions, and its value provides an indication of how well the model is performing during training. A low value of the cost function indicates that the model's predictions are good, while a high value indicates that the predictions are far from the actual outputs.

The specific form of the cost function will depend on the type of problem being solved and the nature of the output variables. For example, in regression problems, the mean squared error (MSE) is often used as the cost function, while in classification problems, the cross-entropy loss is commonly used.

## What are different cost functions?
### Regression
- Mean Squared Error (MSE): used for regression problems, measures the average squared difference between the predicted output and the actual output.
- Mean Absolute Error (MAE): also used for regression problems, measures the average absolute difference between the predicted output and the actual output.
- Huber Loss: a combination of mean squared error and mean absolute error, used for robust regression.
Smooth L1 Loss: also known as the Huber Loss, a combination of mean squared error and mean absolute error, used for object detection in computer vision.
- Log-Cosh Loss: a smooth approximation of the mean absolute error, used for regression problems.

### Classification
- Binary Cross-Entropy Loss: a variation of cross-entropy loss, used for binary classification problems.
- Cross-Entropy Loss: measures the difference between the predicted class probabilities and the actual class label, used for multi-class classification problems.
- Hinge Loss: used for maximum-margin classification problems, measures the margin between the predicted class and the incorrect class.
- Squared Hinge Loss: a variation of hinge loss, used for maximum-margin classification problems.
- Multi-Class Logarithmic Loss: used for multi-class classification problems, measures the average log loss across all classes.
- Focal Loss: used for object detection in computer vision, adds a term that modulates the cross-entropy loss based on the prediction confidence.
- Categorical Cross-Entropy Loss: another variation of cross-entropy loss for multi-class classification problems.

### Clustering
- Sum of Squared Errors (SSE): measures the sum of squared differences between each data point and its nearest cluster center.
- Within-Cluster Sum of Squared Errors (WCSS): similar to SSE, but measures the sum of squared differences between each data point and its nearest cluster center, averaged across all clusters.
- Davies-Bouldin Index: measures the similarity between each pair of clusters, based on the distance between their cluster centers and the size of their cluster.
- Silhouette Score: measures the similarity between each data point and its own cluster compared to other clusters.
- Calinski-Harabasz Index: measures the ratio of between-cluster variance to within-cluster variance, based on the sum of squared differences from the cluster centers.

## Semantic Segmentation
- Cross-Entropy Loss: measures the difference between the predicted class probabilities and the actual class label.
- Dice Loss: measures the overlap between the predicted and ground-truth segmentation masks.
- Intersection over Union (IoU) Loss: similar to Dice loss, measures the overlap between the predicted and ground-truth segmentation masks, but normalizes the overlap based on the size of the masks.
- Jaccard Loss: a variant of IoU loss, which measures the overlap between the predicted and ground-truth segmentation masks.
- Focal Loss: adds a term that modulates the cross-entropy loss based on the prediction confidence, which can improve the performance of the model on the hard examples.

## Text GAN 
- Maximum Likelihood Estimation (MLE): MLE measures the likelihood of the generated text given the target text, and aims to maximize this likelihood.
- Adversarial Loss: It involves training two models in opposition, where a generator model aims to generate text that is similar to the target text, while a discriminator model aims to distinguish the generated text from the target text. The cost function is the sum of the negative log-likelihoods from the discriminator.
- Reinforcement Learning (RL) Loss: This involves training the generator model with a reward signal based on the quality of the generated text, and has been shown to produce more coherent and diverse generated text compared to MLE or Adversarial Loss.





- Kullback-Leibler Divergence: a measure of the difference between two probability distributions, often used in generative models.
- Wasserstein Loss: also known as the Earth Mover's Distance, measures the distance between two distributions in terms of the amount of mass that must be moved to transform one into the other.
- Cosine Proximity Loss: used in deep learning models to measure the similarity between two vectors in terms of their cosine similarity.
- Poisson Loss: used for count data, measures the difference between the predicted and actual count of events.
- Focal Loss: used for object detection in computer vision, adds a term that modulates the cross-entropy loss based on the prediction confidence.
- Dice Loss: used for semantic segmentation in computer vision, measures the overlap between the predicted and actual segmentation masks.
- Jaccard Loss: also used for semantic segmentation, measures the similarity between the predicted and actual segmentation masks.
- Exponential Logarithmic Loss: used for ordinal regression problems, measures the difference between the predicted ordinal values and the actual ordinal values.
- Multi-Class Logarithmic Loss: used for multi-class classification problems, measures the average log loss across all classes.




what are the various optimization algorithms
how many optimization algorithms are there
understanding optimization algorithms in machine learning
top optimisation methods in machine learning
types of optimizers in deep learning every ai engineer

Optimisers play a crucial role in deep neural network training. They are responsible for updating the model's parameters in order to minimise the loss function, and ultimately improve the performance of the model. There are many different optimisers available, each with their own strengths and weaknesses, and choosing the right optimiser can make a significant impact on the training process.   

Some popular optimisers include stochastic gradient descent (SGD), momentum, Adagrad, Adadelta, RProp, RMSprop, Adam, AMSGrad, and Nadam. These optimisers differ in how they calculate the updates to the model's parameters, with some taking into account the historical gradient information, others using momentum to smooth out updates, and others adapting the learning rate based on the magnitude of the gradients. It's important to carefully consider the properties of the cost function and the structure of the model when selecting an optimiser, as this can have a significant impact on the speed and stability of the training process.


- Stochastic Gradient Descent (SGD) - It updates the model parameters by taking the gradient of the loss function with respect to the parameters and subtracting it from the parameters.   
	$\theta = \theta - \alpha \frac{\partial J(\theta)}{\partial \theta}$   
	
	where $\theta$ is the model parameter, $\alpha$ is the learning rate, and $J(\theta)$ is the cost function.   
	
- Momentum - It accumulates the gradient of the previous steps to avoid oscillation and converge faster.   
	$v = \beta v - \alpha \frac{\partial J(\theta)}{\partial \theta}$   

	$\theta = \theta + v$   

	where $v$ is the velocity term, $\beta$ is the momentum hyperparameter.   

- Nesterov Accelerated Gradient (NAG) - It is an improved version of Momentum that takes into account the future position of the parameters based on the estimated gradient.   
	$v = \beta v - \alpha \frac{\partial J(\theta + \beta v)}{\partial \theta}$   

	$\theta = \theta + v$   

- Adagrad - It adapts the learning rate to the parameters, performing larger updates for infrequent parameters and smaller updates for frequent parameters.   
	$G = G + \left(\frac{\partial J(\theta)}{\partial \theta}\right)^2$   

	$\theta = \theta - \frac{\alpha}{\sqrt{G + \epsilon}} \frac{\partial J(\theta)}{\partial \theta}$   

	where $G$ is the sum of squares of past gradients, and $\epsilon$ is a small value to prevent division by zero.   

- Adadelta - It is an extension of Adagrad that reduces its aggressive, monotonically decreasing learning rate.
	$E[g^2]t = \gamma E[g^2]{t-1} + (1 - \gamma)\left(\frac{\partial J(\theta)}{\partial \theta}\right)^2$   

	$\Delta \theta_t = -\frac{\sqrt{E[\Delta \theta^2]_{t-1} + \epsilon}}{\sqrt{E[g^2]_t + \epsilon}} \frac{\partial J(\theta)}{\partial \theta}$   

	$\theta = \theta + \Delta \theta_t$   

	where $E[g^2]$ and $E[\Delta \theta^2]$ are the moving average of the square of gradients and the square of parameter updates, respectively, and $\gamma$ is the decay rate.  

- RProp - It uses the sign of the gradient to determine the direction of the update, with a dynamically adjusted step size for each parameter.

	$\Delta \theta_i = \text{sign}(\frac{\partial J(\theta)}{\partial \theta_i})\Delta \theta_{i,prev}$

	$\theta_i = \theta_i - \Delta \theta_i$

	where $\theta_i$ is the current value of a model parameter, $\frac{\partial J(\theta)}{\partial \theta_i}$ is the gradient of the loss function with respect to the parameter, $\Delta \theta_{i,prev}$ is the previous update to the parameter, and $\text{sign}(\cdot)$ is the sign function. The step size $\Delta \theta_i$ is determined dynamically based on the magnitude of the gradient.


- Adam (Adaptive Moment Estimation) - It combines the advantages of Momentum and Adagrad, by considering both the average and the variance of the gradient for parameter updates.   
	$m = \beta_1 m + (1 - \beta_1) \frac{\partial J(\theta)}{\partial \theta}$   

	$v = \beta_2 v + (1 - \beta_2) \left(\frac{\partial J(\theta)}{\partial \theta}\right)^2$   

	$\hat{m} = \frac{m}{1 - \beta_1^t}$   

	$\hat{v} = \frac{v}{1 - \beta_2^t}$   

	$\theta = \theta - \frac{\alpha}{\sqrt{\hat{v}} + \epsilon} \hat{m}$   

	where $m$ and $v$ are the first and second moment estimates, respectively, $\beta_1$ and $\beta_2$ are hyperparameters, and the rest of the terms are as defined above.   


- AMSGrad - It is an extension of Adam that ensures the learning rate does not get too small, even if the gradient is small.   
	$m = \beta_1 m + (1 - \beta_1) \frac{\partial J(\theta)}{\partial \theta}$   

	$v = \max(\beta_2 v + (1 - \beta_2) \left(\frac{\partial J(\theta)}{\partial \theta}\right)^2, v_{t-1})$   

	$\hat{m} = \frac{m}{1 - \beta_1^t}$   

	$\hat{v} = \frac{v}{1 - \beta_2^t}$   

	$\theta = \theta - \frac{\alpha}{\sqrt{\hat{v}} + \epsilon} \hat{m}$   


- Nadam (Nesterov-Accelerated Adaptive Moment Estimation) - It combines NAG and Adam to take advantage of the rapid convergence of NAG and the adaptive learning rate of Adam.   
	$m = \beta_1 m + (1 - \beta_1) \frac{\partial J(\theta)}{\partial \theta}$

	$v = \beta_2 v + (1 - \beta_2) \left(\frac{\partial J(\theta)}{\partial \theta}\right)^2$   

	$\hat{m} = \frac{m}{1 - \beta_1^t}$   

	$\hat{v} = \frac{v}{1 - \beta_2^t}$   

	$\theta = \theta - \frac{\alpha}{\sqrt{\hat{v}} + \epsilon} \left(\beta_1 \hat{m} + (1 - \beta_1) \frac{\partial J(\theta)}{\partial \theta}\right)$   
