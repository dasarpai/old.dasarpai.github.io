---
id: 6015    
title: "Principal Component Analysis"
date: '2022-11-07T15:50:00+05:30'
permalink: /dsblog/Principal-Component-Analysis
categories:

tags: [PCA, Clustering, Dimensionality Reduction]

header:
  teaser: "/assets/images/dspost/common/Principal-Component-Analysis.jpg"
excerpt_separator: "<!--more-->"
excerpt:
layout: single
author_profile: true
---

![Principle Component Analysis](/assets/images/dspost/pca/Principal-Component-Analysis.jpg)

![PCA Transformation](/assets/images/dspost/pca/pca.jpg)

# Bacground
In data science whether we want to analyse the data or create model for prediction or forcasting purpose we need data. A structured dataset contains rows and columns. Each row is corresponding to a independent sample and each column is describing that sample. We can see Recurement dataset as following.
Interviewid | Date of Interview | Total Experience | Relevent Experience | Positin Applied | Age | Hired
---- | ---- | ---- | ---- | ---- | ---- | ----
1 | 01-Jan-22 | 20 | 5 | Sr Manager | 45 | No
2 | 01-Jan-22 | 12 | 6 | Sr Manager | 32 | Yes
3 | 02-Jan-22 | 10 | 2 | Programer | 32 | No

More the sample or number of rows, better is our conclusion. But if we have more columns analysis and model becomes more complex. If you have a dozen of more columns it is manageable but when columns are in hundreds or thousands or millions then it is not humanly possible to analyse the data or understand the interaction between different variable or create a stable model. More are the dimensions in a model more unstable a model is. This is called curse of dimensionality. 

![Curse of Dimensionality](/assets/images/dspost/pca/Curse-of-Dimensionality.jpg)

To reduce the dimensions of a dataset we need some tricks and techniques. 
SelectKBest of scikit-learn 
SelectKPercentile are based on chi square, ANOVA.

One of the technique to achieve this is PCA (principle component analyse). 


In data science to visualize the data, to visualize clustering tendency of data, to visualize relationship between variables we use different techniques. Similarly after creating any regression or classifiction model we want to understand can be make a better model. In this process when we look into the dimensions (features or columns) of the dataset it helps us understanding the relationship 

# Principal Component Analysis
What is PCA?

The first principal component is computed so that it explains the greatest amount of variance in the original features. The second component is orthogonal to the first, and it explains the greatest amount of variance left after the first principal component. 


## Application of PCA 

## Assumption of PCA 

- Eigenvectors and eigenvalues significance.
- Diagonalization of a matrix/covariance matrix using eigenvector.
- Change of basis operations.
- Interpretation of Variance in PCA


## Resources 
[Change of basis / Chapter 13, Essence of linear algebra by 3Blue1Brown](https://www.youtube.com/watch?v=P2LTAUO1TdA)
[Principal Component Analysis and k-means Clustering to Visualize a High Dimensional Dataset](https://medium.com/more-python-less-problems/principal-component-analysis-and-k-means-clustering-to-visualize-a-high-dimensional-dataset-577b2a7a5fe2)
[The Applications of Eigenvectors and Eigenvalues by Zach Star](https://www.youtube.com/watch?v=i8FukKfMKCI)
[Principal Component Analysis by Steave Brunton](https://www.youtube.com/watch?v=fkf4IBRSeEc)
[A Guide to Principal Component Analysis (PCA) for Machine Learning](https://www.keboola.com/blog/pca-machine-learning)

