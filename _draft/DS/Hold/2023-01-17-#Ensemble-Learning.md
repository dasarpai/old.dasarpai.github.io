---
mathjax: true
id: 6116
title: #Ensemble Learning
date: 2023-01-17
permalink: /dsblog/#Ensemble-Learning
tags: [NLP] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6124-#Ensemble-Learning.jpg
author: Hari Thapliyaal 
excerpt:
share: true 
---

![#Ensemble-Learning](/assets/images/dspost/dsp6124-#Ensemble-Learning.jpg)

# #Ensemble Learning


# #Ensemble Learning


# #Ensemble Learning


# #Ensemble Learning


##Ensemble Learning


# What is Decision Tree Model and Need of Ensemble Learning

## How to identify node for splitting?
Gini, Entropy, Information Gain, Reduction in Varaince., Chi Square.

# Ensemble Learning
## Weak Learner vs Strong Learner

## What is Bagging (Bootstrap Agreegation)?
- Randomforest & Hyperparameters

## What is Boosting?
- Light Gradient Boost Machine (LGBM)
- Adaboost
- CatBoost
- XGBoost
## What is Stacking?

## What is OOB Error?
## What is OOB Score?

## PDP (Partial Dependency Plot) Value Calculation
- https://scikit-learn.org/stable/auto_examples/inspection/plot_partial_dependence.html#sphx-glr-auto-examples-inspection-plot-partial-dependence-py
- https://christophm.github.io/interpretable-ml-book/pdp.html#software-and-alternatives-1
- https://scikit-learn.org/stable/modules/partial_dependence.html
- https://towardsdatascience.com/partial-dependence-plots-with-scikit-learn-966ace4864fc
0901## Shapely Values Calculation
## Decision Tree Regressor

- [Decision Tree - Regression](https://www.saedsayad.com/decision_tree_reg.htm#:~:text=Decision%20tree%20builds%20regression%20or,decision%20nodes%20and%20leaf%20nodes.)
- [RandomForestRegressor - Excel Simulation](https://docs.google.com/spreadsheets/d/1S0c2_KiGAwEaDJOnhnId0wqPPtUlFKOUK9cY3F4BKYQ/edit#gid=0)

## What is Grid Search?

## What is Kfold-Cross-Validation

## Model Interpretation
- https://www.libhunt.com/r/shap
- https://www.libhunt.com/r/shapash
- https://www.libhunt.com/r/captum
- https://www.libhunt.com/r/interpret
- https://www.influxdata.com/
- https://www.libhunt.com/r/longpollehn/LIME
- https://www.libhunt.com/r/GlassCode
- https://www.libhunt.com/r/carla-recourse/CARLA
- https://www.libhunt.com/r/eurybia
- https://www.libhunt.com/r/trulens
- https://www.sonarqube.org/
- https://www.libhunt.com/r/evidently
- https://www.libhunt.com/r/loss-landscape
- https://www.libhunt.com/r/AIX360
- https://www.libhunt.com/r/Transformer-MM-Explainability

# Question Answers
## what is OOB Score in Machine learning?
OOB Score stands for "Out-of-Bag Score" and it is a measure of the classification accuracy of a Random Forest, which is an ensemble learning method for classification, regression and other tasks, that operate by constructing a multitude of decision trees at training time and outputting the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees. The OOB Score is calculated using the samples that were not used in the construction of a tree during the bootstrap aggregation (i.e., "out-of-bag" samples) and it is an estimate of the classification error rate.

## Can you explain oob error with example?
Out-of-bag (OOB) error is a measure of the accuracy of a random forest, which is a type of ensemble learning method for classification and regression. The basic idea behind OOB error is to use the observations that are not included in the bootstrap sample (i.e., the "out-of-bag" observations) to estimate the error rate of the model.

For example, consider a random forest with 100 decision trees and a sample of 1000 observations. Each tree is built using a bootstrap sample of the data, which means that about 63% of the observations will not be included in the sample used to build that tree (i.e., they will be "out-of-bag" for that tree). The OOB error is calculated by making predictions on the out-of-bag observations for each tree, and then averaging the error rate across all the trees.

In this way, OOB error provides an estimate of the error that would be obtained if the model were applied to new, unseen data, without the need to actually hold out a separate validation set.

## Refrences & Resources
- [Census income classification with LightGBM](https://slundberg.github.io/shap/notebooks/tree_explainer/Census%20income%20classification%20with%20LightGBM.html)
