---
mathjax: true
id: 6116
title: #Principal Component Analysis
date: '2022-11-07T15:50:00+05:30'
permalink: /dsblog/#Principal-Component-Analysis
categories:

tags: [PCA, Clustering, Dimensionality Reduction]

header:
    teaser: /assets/images/dspost/dsp6123-#Principal-Component-Analysis.jpg
excerpt_separator: "<!--more-->"
excerpt:
layout: single
author_profile: true
---

![#Principal-Component-Analysis](/assets/images/dspost/dsp6123-#Principal-Component-Analysis.jpg)

# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


##Principal Component Analysis


![#Principal-Component-Analysis](/assets/images/dspost/dsp6123-#Principal-Component-Analysis.jpg)

# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


##Principal Component Analysis


# Bacground
In data science whether we want to analyse the data or create model for prediction or forcasting purpose we need data. A structured dataset contains rows and columns. Each row is corresponding to a independent sample and each column is describing that sample. We can see Recurement dataset as following.
Interviewid | Date of Interview | Total Experience | Relevent Experience | Positin Applied | Age | Hired
---- | ---- | ---- | ---- | ---- | ---- | ----
1 | 01-Jan-22 | 20 | 5 | Sr Manager | 45 | No
2 | 01-Jan-22 | 12 | 6 | Sr Manager | 32 | Yes
3 | 02-Jan-22 | 10 | 2 | Programer | 32 | No

More the sample or number of rows, better is our conclusion. But if we have more columns analysis and model becomes more complex. If you have a dozen of more columns it is manageable but when columns are in hundreds or thousands or millions then it is not humanly possible to analyse the data or understand the interaction between different variable or create a stable model. More are the dimensions in a model more unstable a model is. This is called curse of dimensionality. 

![#Principal-Component-Analysis](/assets/images/dspost/dsp6123-#Principal-Component-Analysis.jpg)

# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


# #Principal Component Analysis


##Principal Component Analysis


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




PCA https://www.youtube.com/watch?v=fkf4IBRSeEc
To capture the max amount of variance


https://towardsdatascience.com/pca-lda-and-svd-model-tuning-through-feature-reduction-for-transportation-poi-classification-8d20501ee255
https://colab.research.google.com/drive/1A6ZZ0WZX3v4N5sN4pU5Yz_gxx2gThVqd?usp=sharing#scrollTo=53eOSbIXMzMW



PCA finds the underlying features in a given dataset by performing the following steps:

Calculate the covariance of of the matrix of features

Calculate the eigen vectors and eigen values of the covariance matrix

Sort the eigenvectors in descending order by the eigen values

Choose the first k eigen vectors. This k value will be the k new dimensions

Transform the original data into k dimensions



PCA : https://medium.com/@aptrishu/understanding-principle-component-analysis-e32be0253ef0
LDA : https://medium.com/@srishtisawla/linear-discriminant-analysis-d38decf48105
SVD : https://medium.com/the-andela-way/foundations-of-machine-learning-singular-value-decomposition-svd-162ac796c27d

Eigenvectors and eigenvalues significance.
Diagonalization of a matrix/ covariance matrix using eigenvector. https://sebastianraschka.com/Articles/2015_pca_in_3_steps.html
Change of basis operations. https://www.youtube.com/watch?v=P2LTAUO1TdA
Interpretation of Variance in PCA
PCA Demo
https://medium.com/@dmitriy.kavyazin/principal-component-analysis-and-k-means-clustering-to-visualize-a-high-dimensional-dataset-577b2a7a5fe2



Some of the applications of Principal Component Analysis (PCA) are:

Spike-triggered covariance analysis in Neuroscience
Quantitative Finance
Image Compression
Facial Recognition
Other applications like Medical Data correlation


https://iq.opengenus.org/applications-of-pca/


covariance matrix
eigen vectors and eigen values
principal components


Let us say, we have n = 256 number of input features and m = 1000 number of training examples (Notice m >> n). Now let us say, we want to reduce the number of features to k = 50 most important features. From these assumptions, we have,

First, we have to transform our input data in such a way that it has zero mean and unit variance

$1.\ Let\ \mu\ =\ \frac{1}{m}\sum_{i=1}^mx^{(i)}$

$2.\ Replace\ each\ x^{(i)}\ with\ x^{(i)}\ -\ \mu$

$3.\ Let\ \sigma_{j}^2\ =\ \frac{1}{m}\sum_{i=1}^m(x^{(i)}_{j})^2$  
$4.\ Replace\ each\ x^{(i)}_j\ with\ x^{(i)}_j/\sigma _j$

$$\Sigma\ =\ \frac{1}{m}\sum_{i=1}^m\ (x^{(i)})(x^{(i)})^T $$

$$U\ =\ \begin{bmatrix} | & | & \ & |\\ u_1 & u_2 & \ldots & u_n\\ | & | & \ & | \end{bmatrix}$$

$y^{(i)}[0]\ =\ u_{1}^T*x^{(i)}$
where $y^{(i)}[0]$ represents the the principal component of $x^{(i)}$

Similarly,
$y^{(i)}[1]\ =\ u_{2}^T*x^{(i)}$
where $y^{(i)}[1]$ represents the the second principal component of $x^{(i)}$

We select top k eigen vectors from matrix U and remove the rest. The new data point which is dimensionally reduced is given by, $y^{(i)}\ =\ U^T*x^{(i)}$
$y^{(i)} \in \Re ^ k$