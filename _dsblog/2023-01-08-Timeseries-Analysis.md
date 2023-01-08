--- 
id: 6023       
title: "Timeseries Interview Questions"   
date: '2023-01-08T15:50:00+05:30'   
permalink: /dsblog/Timeseries-Interview-Questions
categories:   
   
tags: [Timeseries, Interview Questions, Machine Learning, Timeseries Analysis, Time series Forecasting, Time series analysis python, Time series forecasting in python]   
   
header:   
  teaser: "/assets/images/dspost/dsp6023-Timeseries-Interview-Questions.jpg"   
excerpt_separator: "<!--more-->"   
excerpt:   
layout: single   
author_profile: true   
toc: true   
toc_sticky: true
mathjax: "true"
--- 

![Timeseries Interview Questions](/assets/images/dspost/dsp6023-Timeseries-Interview-Questions.jpg)

## What are the characterstics of  time series data?
Time series data is a series of data points collected over time. Some characteristics of time series data include:

- Time dependence: Time series data is typically collected at regular time intervals, and the values of the time series are often dependent on the time at which they were collected.
- Trend: Many time series exhibit a long-term trend, either upward or downward. This trend may be influenced by a variety of factors such as economic conditions, population growth, or technological changes.
- Seasonality: Many time series exhibit regular fluctuations due to seasonal factors such as weather, holidays, or other events. For example, retail sales may be higher in the months leading up to Christmas due to holiday shopping.
- Noise: Time series data may also be affected by random noise or error, which can make it difficult to accurately forecast future values.
- Autocorrelation: Time series data may exhibit autocorrelation, which is the phenomenon of a value at a particular time being correlated with values at nearby times. This can make it challenging to model the time series, as the value at a given time may depend on the values at nearby times.
___

## Some time series data 

Date	| Sales (y)
--- | ---
2020-01-01	| 1000
2020-02-01	| 1100
2020-03-01	| 1200
2020-04-01	| 1100
2020-05-01	| 1000
2020-06-01	|  900
2020-07-01	| 1200
2020-08-01	| 1400
2020-09-01	| 1300
2020-10-01	| 1500

___
## What do you mean by  statistical properties
Various statistical properties include the mean, median, mode, standard deviation, variance, skewness, kurtosis, correlation coefficient, coefficient of determination, and regression analysis. These properties are used to describe, analyze, and interpret quantitative data. They can also be used to make predictions and draw conclusions about data.
___
## What are the assumptions of a stationary time series?
A stationary time series is a time series that has constant statistical properties over time. In other words, the mean, variance, and autocovariance of the time series do not depend on the time index.

There are several assumptions that are typically made about stationary time series:

- The mean of the time series is constant over time.
- The variance of the time series is constant over time.
- The autocovariance of the time series depends only on the time lag between observations, and not on the time at which the observations are made.
- The time series is "weakly stationary," meaning that the statistical properties of the time series are unchanged under time shifts.

It is important to check for stationarity before performing certain types of time series analysis, as many time series models and techniques are based on the assumption of stationarity.
___

## What is a Statitionary Time Series 

A stationary time series is a time series that has constant statistical properties over time. In other words, the mean, variance, and autocovariance of the time series do not depend on the time index.

A stationary time series is said to be "strictly stationary" if the statistical properties of the time series are completely constant over time. This means that the mean, variance, and autocovariance of the time series are all constant.

A stationary time series is said to be "weakly stationary" if the statistical properties of the time series are unchanged under time shifts. This means that the mean, variance, and autocovariance of the time series are all constant, but the time series may have a non-zero mean.

It is important to check for stationarity before performing certain types of time series analysis, as many time series models and techniques are based on the assumption of stationarity.
___

## What is the difference between variance, covariance and autocovariance?
Variance, covariance, and autocovariance are all measures of the dispersion of a set of data. However, they are used to measure different types of dispersion.

Here is a brief summary of the differences between variance, covariance, and autocovariance:

Variance: Variance is a measure of the dispersion of a single set of data. It is calculated as the sum of the squared differences between each data point and the mean of the data, divided by the number of data points.

Covariance: Covariance is a measure of the dispersion of two sets of data. It is calculated as the sum of the products of the differences between each data point in one set and the mean of that set, and the differences between the corresponding data points in the other set and the mean of that set, divided by the number of data points. Covariance can be used to determine the relationship between two sets of data.

Autocovariance: Autocovariance is a measure of the dispersion of a single time series at different time lags. It is calculated as the covariance between observations at time $t$ and observations at time $t+k$, where $k$ is the time lag between the observations. Autocovariance can be used to determine the relationship between observations in a time series at different points in time.
___
## What is Variance Formula?
Variance is a measure of the dispersion of a single set of data. It is calculated as the **sum of the squared differences between each data point and the mean of the data**, divided by the number of data points.

{% katexmm %}

$\sigma^2 = \frac{\sum_{i=1}^{n} (x_i - \mu)^2}{n}$

{% endkatexmm %}
___
## What is Covariance Formula?

It is calculated as the **sum of the products of the differences between each data point in one set and the mean of that set**, and the **differences between the corresponding data points in the other set and the mean of that set**, divided by the number of data points.

$cov(X, Y) = \frac{\sum_{i=1}^{n} (x_i - \mu_X)(y_i - \mu_Y)}{n}$
___
## What is AutoCovariance Function (ACVF) Formula?

$\gamma(k) = Cov(X_t, X_{t+k})$
___

## What is Additive Model in time series?
In a time series, an additive model is one where the overall effect of the various factors (such as trend, seasonality, and noise) is simply the sum of their individual effects.

For example, if we have a time series that is influenced by trend, seasonality, and noise, an additive model would express the time series as:

y(t) = trend(t) + seasonality(t) + noise(t)

where y(t) is the value of the time series at time t, trend(t) is the trend component at time t, seasonality(t) is the seasonality component at time t, and noise(t) is the noise or error component at time t.

In an additive model, the individual components can be estimated independently and then summed to produce a model for the time series. This can make it relatively simple to build and interpret the model, especially if the individual components are easy to identify and separate. However, additive models may not always be the best choice, especially if the various factors are not truly independent or if the relationship between the time series and the factors is more complex than a simple sum.

Examples:
- Monthly sales of a retail store
- Quarterly earnings of a public company
- Daily temperature in a particular city
- Hourly traffic on a specific stretch of road
- Monthly unemployment rate in a country
___

## What is multiplicative Model in time series?
In a time series, a multiplicative model is one where the overall effect of the various factors (such as trend, seasonality, and noise) is the product of their individual effects.

For example, if we have a time series that is influenced by trend, seasonality, and noise, a multiplicative model would express the time series as:

y(t) = trend(t) * seasonality(t) * noise(t)

where y(t) is the value of the time series at time t, trend(t) is the trend component at time t, seasonality(t) is the seasonality component at time t, and noise(t) is the noise or error component at time t.

In a multiplicative model, the individual components can be estimated independently and then multiplied to produce a model for the time series. This can be a useful approach if the time series exhibits exponential growth or decay, or if the relationship between the time series and the various factors is more complex than a simple sum. However, multiplicative models may be more difficult to interpret than additive models, and they may not always be the best choice, especially if the various factors are not truly independent.

Examples
- Daily stock price of a public company
- Annual population growth rate of a country
- Monthly revenue of a subscription-based business
- Virus growth
- Weekly sales of a product with a limited lifespan (such as a food product with a short shelf life)

___
## What are the test of Stationarity 
A stationary time series is one whose statistical properties (such as the mean, variance, and autocorrelation) are constant over time. Stationarity is an important assumption for many time series analysis techniques, as it implies that the statistical properties of the time series do not change over time. This makes it easier to model the time series and make forecasts about future values.

There are several tests that can be used to determine whether a time series is stationary or not. Some common tests include:

- Augmented Dickey-Fuller (ADF) test: This test looks at the difference between the time series and a lagged version of itself to determine whether the time series is stationary.
- Kwiatkowski-Phillips-Schmidt-Shin (KPSS) test: This test looks at the level of trend and seasonality in the time series to determine whether it is stationary.
- Philips-Perron (PP) test: This test is similar to the ADF test, but it is more robust to the presence of autocorrelation in the time series.
- Median absolute deviation (MAD) test: This test looks at the dispersion of the time series around its median value to determine whether it is stationary.

It's worth noting that these tests are statistical in nature, and they can only provide a certain level of confidence in whether a time series is stationary or not. In some cases, further analysis may be needed to determine whether a time series is truly stationary.
___
## What is formula for the Standard Deviation?

**The formula for the sample standard deviation, denoted by "s," is:**
$$s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}$$

where x is the set of observations, n is the number of observations, and $\bar{x}$ is the mean of the observations.

**The formula for the population standard deviation, denoted by "σ," is:**

$$σ = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2}$$

where x is the set of observations, n is the number of observations, and $\mu$ is the mean of the observations.
___

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

___
## How regression is different from correlation?
In regression we predict a number (dependent variable) with the help of predictor (independent variables)
$$ y = \beta_0 + \beta_1*x$$

In coorelation we check degeree and magnitude of relationship between two variables. It's value can be between -1 to +1. 0 Means there is no relationship. There are several statistical tests that can be used to measure the correlation between two variables. Some common tests include:

- Pearson's correlation coefficient: This is the most well-known measure of correlation, and it measures the linear relationship between two variables. The Pearson correlation coefficient is calculated as:
$$ \rho_{(x,y)} = \frac { Cov(x, y)} {(Std(x) * Std(y)) }$$
- Spearman's rank correlation coefficient: This measure of correlation is based on the ranks of the data rather than the raw data values, and it can be used to measure the strength of a monotonic relationship between two variables. The Spearman rank correlation coefficient is calculated as:
$$ \rho_{(x,y)} = 1 - \frac {6 ∑d^2}  {n(n^2 - 1)}$$ 
> where d is the difference in ranks between the two variables, and n is the number of data points. 

- Kendall's tau: This measure of correlation is similar to the Spearman rank correlation coefficient, but it is based on the number of concordant and discordant pairs of data rather than the ranks of the data. The Kendall tau correlation coefficient is calculated as:
$$ \tau = \frac {(c - d)} { \sqrt(c + d)}$$
> where c is the number of concordant pairs and d is the number of discordant pairs. 

It's worth noting that these correlation tests are statistical in nature, and they can only provide a certain level of confidence in the strength of the relationship between two variables. In some cases, further analysis may be needed to fully understand the nature of the relationship.
___

## What is Autoregression (AR) Model?
When we can predict value at k time period from the value available at time t. If we can predict sales for next week (k=7 days ahead) from the sales of today (t) then this autoregression.

Autoregression (AR) is a statistical model that describes a time series as a linear function of its own past values. For example, an autoregressive model of order 1 (AR(1)) can be written as:

y(t) = c + φ1*y(t-1) + ε(t)

where y(t) is the value of the time series at time t, c is a constant, φ1 is the autoregressive coefficient, y(t-1) is the value of the time series at the previous time step (t-1), and ε(t) is the error term.
___
## What is Autocorrelation?
Autocorrelation (also known as serial correlation or lagged correlation) is the statistical dependence between a time series and a lagged version of itself. For example, the autocorrelation between a time series y(t) and a lagged version of itself y(t-k) can be measured using the Pearson correlation coefficient:

When value at t time period has some relationship with a value at t+k time then we say there is autocorrelation. Like coorelation value of this can be between -1 to 1.
___
## What is the importance of ACF and PACF plots
Autocorrelation function (ACF) and partial autocorrelation function (PACF) plots are graphical tools used to examine the autocorrelation of a time series.

ACF plots show the autocorrelation of a time series with itself at different lag values. For example, an ACF plot for a time series y(t) might show the autocorrelation between y(t) and y(t-1), y(t) and y(t-2), and so on. The ACF plot can help identify patterns in the autocorrelation of the time series, such as whether the autocorrelation decays exponentially or exhibits a more complex pattern.

PACF plots show the partial autocorrelation of a time series with itself at different lag values. Partial autocorrelation measures the correlation between a time series and a lagged version of itself, controlling for the effects of all other lagged values. The PACF plot can help identify the number of autoregressive (AR) terms that are needed to model the time series.

ACF and PACF plots are useful tools for understanding the autocorrelation structure of a time series, and they can help inform the choice of statistical models and forecasting methods. For example, if the ACF plot of a time series exhibits a strong decay at a particular lag value, an autoregressive model with a single lag (AR(1)) may be sufficient to model the time series. On the other hand, if the ACF plot exhibits a more complex pattern, a higher-order autoregressive model (such as AR(2) or AR(3)) may be needed.

![acf-pacf curve](/assets/images/dspost/timeseries/lolipot-plot-acf-pacf.png)

Estimating AR terms
The lollipop plot that you see above is the ACF and PACF results. To estimate the amount of AR terms, you need to look at the PACF plot. First, ignore the value at lag 0. It will always show a perfect correlation, since we are estimating the correlation between today’s value with itself. Note that there is a blue area in the plot, representing the confidence interval. To estimate how much AR terms you should use, start counting how many “lollipop” are above or below the confidence interval before the next one enter the blue area.

So, looking at the PACF plot above, we can estimate to use 3 AR terms for our model, since lag 1, 2 and 3 are out of the confidence interval, and lag 4 is in the blue area.
___
## What are different smoothing techniques for timeseries data?
There are several smoothing techniques that can be used for time series data. Some common techniques include:

- Moving average: This method involves replacing each data point with the average of a certain number of preceding and following points. This can help to smooth out short-term fluctuations and highlight longer-term trends.

- Exponential smoothing: This method assigns a higher weight to more recent observations and a lower weight to older observations. This can help the model to better capture the underlying trend in the data.

- Lowess: This method fits a smooth curve to the data using locally weighted linear regression. It can effectively smooth out noise and highlight the underlying trend in the data.

- Seasonal decomposition: This method involves separating the data into three components: trend, seasonality, and residual. The trend component can then be smoothed to better understand the long-term behavior of the data.

- Savitzky-Golay filter: This method fits a polynomial to a window of data points and then uses the polynomial to predict the value of the center point in the window. This can help to smooth out short-term fluctuations while preserving important features in the data.
___
## What is ARIMA 

___
## What is ARIMAX 

___
## What is SARIMAX 

___
## What is the difference between white noise and a stationary time series.

___
## What are some common drawbacks of the ARIMA set of methods? What are the different ways to overcome them?

___
## Explain the importance of parameter choosing for every technique in smoothing methods and the ARIMA set of methods and how they can choose the best working parameter.

___
## What are the common mistakes people make while using the ARIMA set of methods?
___
## How to identify the best working model for time series analysis.
___

