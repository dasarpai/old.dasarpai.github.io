--- 
mathjax: true
id: 6116
title: #Vectors and Matrix
date: '2022-12-29T15:50:00+05:30'   
permalink: /dsblog/#Vectors-and-Matrix
categories:   
   
tags: [Matrix]   
   
header:   
    teaser: /assets/images/dspost/dsp6122-#Vectors-and-Matrix.jpg
excerpt_separator: "<!--more-->"   
excerpt:   
layout: single   
author_profile: true   
toc: true   
toc_sticky: true
--- 

![#Vectors-and-Matrix](/assets/images/dspost/dsp6122-#Vectors-and-Matrix.jpg)

# #Vectors and Matrix


# #Vectors and Matrix


# #Vectors and Matrix


# #Vectors and Matrix


##Vectors and Matrix


vectors
matrix
mathematics for data science
vector examples
eigen vector
zero vector
collinear vectors
eigen value eigen vector
Vector Spaces
scalar vector
cartesian vector

vectors in mathematics

# Understanding Matrix
Matrix (singular)/ matrices or matrixes (plural) are very important concept in data science and AI. These matrices operations are implemented through one or another algorithm. AI researchers, AI product builders create the algorithms and make these algorithms avaialbe as a package to others. When you are using packages or frameworks like pandas, numpy, tensorflow then matrix operations are done for you computers. Some people want to understand the idea, concepts to the core of packages, some times they want to improve those packages to meet their requirments, and some times they want to create their own package. In this situation if you do not any understand about matrices and matrix operations then if is not possible for you to move ahead without diving into atleast the basics of matrices. This particular artilce is not about teaching you matrics from start but the refresh the concepts which you learned in your high school or if you do not know the application of matrics in day to day life. 
# Basic Terms
- Scaler is non directional. Like mass of tomato is 1kg, speed of car is 70km/hours.   
- Vector is direction. Like velocity of a car is 70km/hours towards north. Force on the truck is 500 newton in foward direction.   
- Matrix is 3 dimensional. Like you want to represent an employee with 3 metrix age, experience and salary. Like John, an employee 35 years age, 12 years experience, 20 lakh/annum salary.   
- Tensor is 4 dimentional. Like you want to represent any information in 4 dimensional plane. Like movie has frames and each frame come at a certain time. Frame width, height, color channel, time.    
- Basis vectors: If a dataset has 5 columns like empno, age, experience, education, and salary. And this contains these details of 10,000 employees then we can say there 10,000 vectors in the 5 dimensional vector space. 5 dimensions of these vector space are 5 columns and they are also refered as basis vectors.

# What is Vector Norm?
The length of the vector is referred to as the "vector norm" or the "vector's magnitude". The length of a vector is a nonnegative number that describes the extent of the vector in space, and is sometimes referred to as the vector's magnitude or the norm. A norm is a way to measure the size of a vector, a matrix, or a tensor. If vector is x then, it is represented as ||x||.

## Common Vector Norms in Machine Learning
L¹ (Manhattan Norm). In machine learning, it is represented as dimond.   
L² (Euclidian Norm). In machine learning, it is represented as circle.      
L∞ Norm = This is defined as the absolute value of the largest component of the vector   
Lᵖ Norm = We can derive all other norms from the p-norm by varying the values of p. If value is 1 or 2 or ∞ we will get L¹ or L² or L∞. If p is zero then we can get $L^0$. It helps in adderssing the sparsity problem.

if x=[-3,2], $x \in \R$ here x can be 3 dimensional i.e. matrix or 3+ dimensional i.e. tensor.

L¹ $ ||x||_1 = \sum\limits_{i=1}^n |x_i| = |-3|+|2|  = 3+2 = 5$

L²  $||x||_2 =  \sqrt (\sum\limits_{i=1}^n |x_i|^2 ) = sqrt(-3^2 + 2^2) = sqrt(9+4) = sqrt(13)$

L∞ $||x||_∞ = max_i(|x_i|)  = max(3,2) = 3$

Lᵖ $||x_p|| = (\sum\limits_{i=1}^n |x_i|^p )^{1/p}$ where p>0 
if x=[-3,0, 1, 5], $x \in \R$ then $||x||_0 =3$


[Course Introduction of 18.065 by Professor Strang](https://www.youtube.com/watch?v=Cx5Z-OslNWE&list=PLUl4u3cNGP63oMNUHXqIUcrkS2PivhN3k)

## Eigenvectors and Eigenvalues
[A] v = λ v   

where:   
A is matrix
v = eigenvector   
λ = lambda = eigenvalue

v|A - λ I| = 0   
|A - λ I| = 0   
v $\neq$ 0

$ if A =\begin{bmatrix}      
1 & 2 & 3 \cr
1 & 2 & 3 \cr
1 & 2 & 3 \cr \end{bmatrix}$  

$ |A - λ I| = 0 \\
A - λ I = 0 \\
 \begin{bmatrix}      
1 & 2 & 3 \cr
1 & 2 & 3 \cr
1 & 2 & 3 \cr \end{bmatrix} - λ
\begin{bmatrix}
1 & 0 & 0 \cr
0 & 1 & 0 \cr
0 & 0 & 1 \end{bmatrix} =>
\begin{bmatrix}      
1- λ & 2 & 3 \cr
1 & 2-λ & 3 \cr
1 & 2 & 3-λ \cr \end{bmatrix} =0 \\
|A - λ I| =
(1-λ)[(2-λ)*(3-λ) - 6] - 
2 *[1(3-λ)-3] + 
3 * [2-1*(2-λ)] = 0
$  

Using this we can create an euqation and solve λ. These λ values are eigenvalues. If we put these value back into A - λ I you will get a eigenvectors. If A is 5x5 matrix then you will get 5 eigenvectors and each vector is 5 dimentional.

## Type of Matrix   



### Transpose Matrix 
$[A][A]^T = [I]$
or
$[A]^{-1}=[A]^T$

### Square Matrix   
$ A =\begin{bmatrix}      
1 & 2 & 3 \cr
1 & 2 & 3 \cr
1 & 2 & 3 \cr \end{bmatrix}$  
	    
   
### Symmetric Matrix   
$ M = \begin{bmatrix}  
     1& 2& 3& 4& 5   \cr
     2& 1& 2& 3& 4   \cr
     3& 2& 1& 2& 3   \cr
     4& 3& 2& 1& 2   \cr
     5& 4& 3& 2& 1   \cr \end{bmatrix}$  
	    
### Triangular Matrix   
Upper triangular matrix.   
$ M = \begin{bmatrix}
     1 & 2 & 3   \cr
     0 & 2 & 3   \cr
     0 & 0 & 3   \end{bmatrix}$  
   
### Lower triangular matrix.	  
$ M = \begin{bmatrix}  
	  1 & 0 & 0   \cr
      1 & 2 & 0   \cr
      1 & 2 & 3    \end{bmatrix}$ 
	    
### Diagonal Matrix   
$ M = \begin{bmatrix}
     1 & 0 & 0   \cr
     0 & 2 & 0   \cr
     0 & 0 & 3   \end{bmatrix}$ 
	   
As a vector & it would be represented as:d = (d11 & d22 & d33) => d = (1 & 2 & 3)   
   
A diagonal matrix does not have to be square. In the case of a rectangular matrix

$ M = \begin{bmatrix}
     1 & 0 & 0 & 0   \cr
     0 & 2 & 0 & 0   \cr
     0 & 0 & 3 & 0   \cr
     0 & 0 & 0 & 4   \cr
     0 & 0 & 0 & 0   \end{bmatrix}$ 

	    
### Identity Matrix. It is important in matrix inversion.   
$ M = \begin{bmatrix}
     1 & 0 & 0   \cr
     0 & 1 & 0   \cr
     0 & 0 & 1   \end{bmatrix}$ 
	    
### Orthogonal Matrices
If your dataset has 5 columns then in the 5 dimensional space, there are 5 basis vectors and they all are $\perp$ or perpendicular to each other, it means all the basis vectors are at $90^0$ from each other or completely not related to each other. If two basis vectors are $<90^0$ then they are positively related to each other, means when one increase other increases. If two basis vectors are $>90^0$ then they are negatively related to each other, means when one increase other decreases. If you have 1+ vectors  and 1+ basis vectors then you need matrices to represent that. Here all basics vectors can be represented using orthogonal matrices.

Two vectors are orthogonal when their dot product equals zero, called orthonormal.   
Q^T . Q = Q . Q^T = I   
Q^T indicates the transpose of Q. I is identity matrix.   
   
   
### Zero or Null Matrix

## Matrix Operations

### Dot Product

$ \begin{bmatrix}
1 & 2 & 3
\end{bmatrix} \centerdot
 \begin{bmatrix}
7 \cr 9 \cr 11
\end{bmatrix} = 58
$ 

$ \begin{bmatrix}
1 & 2 & 3 \cr
4 & 5 & 6
\end{bmatrix} \centerdot
 \begin{bmatrix}
7 & 8 \cr 9 & 10 \cr 11 & 12
\end{bmatrix} =
\begin{bmatrix}
58 & 64 \cr
139 & 154
\end{bmatrix}$

### Example
A shop sells three types of fruits   
Apple pies cost $3 each   
Cherry pies cost $4 each   
Blueberry pies cost $2 each   

Daily sales of each fruit is as following.

Fruits | Mon | Tue | Wed | Thu
--- | --- |---| ---|---
Blueberry |13  |9 | 7 |  15
Cherry    | 8  |7 | 4 |  6
Apple     | 6  |4 | 0 |  3

#### Calculate everyday sale

$ \begin{bmatrix}
 3 \cr 4 \cr 2
  \end{bmatrix} \centerdot  \begin{bmatrix}
|13  & 9 & 7 &  15 \cr
  8  & 7 & 4 &  6 \cr
 6  & 4 & 0 &  3 \cr
 \end{bmatrix} = \begin{bmatrix} 83 & 63 & 37 & 75 \end{bmatrix}
 $

## Vector Axioms
a,b are vectors, s1, s2 are scaler numbers.
Axiom | Addition | Scalar multiplication | Multiplication
--- | --- | --- | ---
Associativity | (a+b)+c=a+(b+c) {1} | (s1 s2) a = s1 (s2 a) {2} | (a*b)*c=a*(b*c) {3}
Commutativity | a+b=b+a {4} |  | not necessarily commutative
Distributivity |  | s*(b+c)=s*b+s*c (s1+s2)*a=s1*a+s2*a {5} | a*(b+c)=a*b+a*c (a+b)*c=a*c+b*c {6}
Identity | a+0 = a 0+a = a {7} | 1*a = a {8} | a*1 = a 1*a = a {9}
Inverses | a+(-a) = 0 (-a)+a = 0 {10} |  | a*a -1 = 1 a -1 *a = 1 if det[a]≠0 {11}

## Matrix Operations
### Identity Matrix
 A × I = I × A = A

### Order of Multiplication
 A . B ≠ B . A

 $ \begin{bmatrix}
 1 & 2 \cr
 3 & 4
 \end{bmatrix} \centerdot
 \begin{bmatrix}
 2 & 0 \cr
 1 & 2
 \end{bmatrix} =
  \begin{bmatrix}
 4 & 4 \cr
 10 & 8
 \end{bmatrix}
 $

 $  \begin{bmatrix}
 2 & 0 \cr
 1 & 2
 \end{bmatrix} \centerdot
 \begin{bmatrix}
 1 & 2 \cr
 3 & 4
 \end{bmatrix}  =
  \begin{bmatrix}
 2 & 4 \cr
 7 & 10
 \end{bmatrix}
 $

### Determinant of a Matrix
#### For a 2×2 Matrix
$  D= \begin{bmatrix}
 3 & 8 \cr
 4 & 6
 \end{bmatrix} \\
 \vert D \vert = 3*6 - 8*4 = -14$

#### For a 3×3 Matrix
$ D= \begin{bmatrix}
 6 & 1 & 1 \cr
 4 & -2 & 6 \cr
 2 & 8 & 7
 \end{bmatrix}  \\
 \vert D \vert =
 6×(−2×7 − 5×8) − 1×(4×7 − 5×2) + 1×(4×8 − (−2×2))
 = 6×(−54) − 1×(18) + 1×(36) \\
 \vert D \vert = −306$