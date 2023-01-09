--- 
id: 6025       
title: "Statistics Interview Question for Data Scientist"   
date: '2023-01-06T15:50:00+05:30'   
permalink: /dsblog/Statistics-Interview-Question-for-Data-Scientist
categories:   
   
tags: [Statistics, Maths, Stats for Data Science]   
   
header:   
  teaser: "/assets/images/dspost/dsp6025-Statistics-Interview-Question-for-Data-Scientist.jpg"   
excerpt_separator: "<!--more-->"   
excerpt:   
layout: single   
author_profile: true   
toc: true   
toc_sticky: true
--- 

   
![Statistics Interview Question for Data Scientist](/assets/images/dspost/dsp6025-Statistics-Interview-Question-for-Data-Scientist.jpg)

# Statistics Interview Question for Data Scientist


## What is R-Square formula?
R-Square or $R^2$ is also called coefficient of determination. It is used to evaluate the performance of regression model. $R^2$ value can be any number between 0 and 1 including 0 and 1. If $R^2$ of a model is .80 then it means this model explain 80% variation between actual and predicted values but 20% variation cannot be explained. Higher the $R^2$ value means more variation can be explained by the model and better the model is.

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$

Where SSres is the sum of squared residuals (the difference between the predicted value and the actual value) and SStot is the total sum of squares (the difference between the actual value and the mean of all actual values).

----

## What is Adjusted R-Square formula?
$$Adjusted R^2 = 1 - (1 - R^2) * \frac{(n - 1)}{(n - p - 1)}$$

----
## What is Variance Formula?
Variance is a measure of the dispersion of a single set of data. It is calculated as the **sum of the squared differences between each data point and the mean of the data**, divided by the number of data points.

$$\sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n}$$


----

## What is Covariance Formula?

It is calculated as the **sum of the products of the differences between each data point in one set and the mean of that set**, and the **differences between the corresponding data points in the other set and the mean of that set**, divided by the number of data points.

$$cov(X, Y) = \frac{\sum_{i=1}^{n} (x_i - \mu_X)(y_i - \mu_Y)}{n}$$

----

## What is AutoCovariance Function (ACVF) Formula?

$$\gamma(k) = Cov(X_t, X_{t+k})$$

----

## What is formula for the Standard Deviation?

**The formula for the sample standard deviation, denoted by "s," is:**
$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

where x is the set of observations, n is the number of observations, and $\bar{x}$ is the mean of the observations.

**The formula for the population standard deviation, denoted by "σ," is:**

$$σ = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2}$$

where x is the set of observations, n is the number of observations, and $\mu$ is the mean of the observations.

----

## What is correlation formula?
The formula for Pearson's correlation coefficient, denoted by "r," is:

$$r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2} \sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}}$$

you can also right it like 

$$r = \frac{ \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{n} }

{\sqrt{ \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2} 

\sqrt{ \frac{1}{n} \sum_{i=1}^{n}(y_i - \bar{y})^2}{n} }$$

or

$$ \rho_{(x,y)} = \frac { Cov(x, y)} {(Std(x) * Std(y)) }$$

where x and y are the two variables being correlated, n is the number of observations, and $\bar{x}$ and $\bar{y}$ are the means of the x and y variables, respectively.

----

## How many types of correlation coeffienct are there in stats?

There are several types of correlation coefficients that are commonly used in statistics to measure the **strength** and **direction of a linear relationship** between two variables. Here are a few of the most common ones:

1. Pearson correlation coefficient: The Pearson correlation coefficient is a measure of the linear relationship between two variables. It ranges from -1 to 1, where -1 indicates a strong negative relationship, 0 indicates no relationship, and 1 indicates a strong positive relationship.

2. Spearman rank correlation coefficient: The Spearman rank correlation coefficient is a nonparametric measure of the strength of the monotonic relationship between two variables. It is calculated based on the ranks of the values rather than the raw data.

3. Kendall rank correlation coefficient: The Kendall rank correlation coefficient is another nonparametric measure of the strength of the monotonic relationship between two variables. It is calculated based on the number of concordant and discordant pairs in the data.

4. Partial correlation coefficient: The partial correlation coefficient is a measure of the correlation between two variables, taking into account the influence of one or more additional variables.

5. Intraclass correlation coefficient: The intraclass correlation coefficient is a measure of the degree of agreement between observations that are made on the same subjects. It is commonly used in the analysis of repeated measures data.

It's important to choose the appropriate correlation coefficient based on the nature of the data and the type of relationship you are interested in.

----

## What is concordant or discordant pairs?

Concordant pairs are two variables that tend to increase or decrease together. Discordant pairs, on the other hand, are two variables that tend to move in opposite directions. For example, a positive correlation between the number of hours studied and exam scores would be an example of a concordant pair, while a negative correlation between the number of hours studied and the number of hours spent playing video games would be an example of a discordant pair.

----

## What is monotonic relationship?

A monotonic relationship is a statistical relationship between two variables in which one variable either increases or decreases consistently as the other variable increases. In other words, there is a clear direction to the relationship, but **the relationship may not necessarily be linear**.

For example, consider the relationship between temperature and ice cream sales. As temperature increases, ice cream sales are likely to increase as well. This is a positive monotonic relationship, because one variable (temperature) increases consistently as the other variable (ice cream sales) increases. On the other hand, if temperature were to decrease as ice cream sales increased, the relationship would be **negative monotonic**.

Monotonic relationships can be measured using **nonparametric statistical techniques**, such as the **Spearman rank correlation coefficient** or the **Kendall rank correlation coefficient**. These techniques are based on the ranks of the values rather than the raw data, and they are less sensitive to deviations from a linear relationship than parametric techniques such as the Pearson correlation coefficient.

----

## what is the difference between nonparametric measure vs parametric measure?

Parametric measures are statistical techniques that make assumptions about the underlying distribution of the data. These assumptions are usually about the shape of the distribution and the presence of certain statistical properties, such as a normal distribution or constant variance. Let's say we have a dataset which contains Paleontology  information about various objects. It has one column called age of the object. Can you assume the age column will have normal distribution? I think no. But if we were having an employee dataset and age is mentioned there then you can assume that age will have normal distriubtion. 

Nonparametric measures, on the other hand, do not make any assumptions about the underlying distribution of the data. They are more flexible and can be used with a wider range of data types, but they may be less powerful than parametric measures because they make fewer assumptions about the data.

One of the main differences between parametric and nonparametric measures is the way they handle missing data. Parametric measures typically require complete data sets, while nonparametric measures are more robust to missing data.

It's important to choose the appropriate statistical technique based on the nature of the data and the research question you are trying to answer. In general, parametric measures are more powerful when the assumptions they make about the data are met, but nonparametric measures may be more appropriate when these assumptions are not met.

----