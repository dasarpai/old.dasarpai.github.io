---
id: 1021   
mathjax: "true"
title: 'Confusing Terminologies in Software Testing'
date: '2016-12-07T06:12:24+00:00'
permalink: '/pmblog/Confusing-Terminologies-in-Software-Testing'
tags: 
    - 'Product Defects'
    - 'Product Testing'
    - 'Software Testing'
categories:
 
header:
  teaser: '/assets/images/pmlogy/Software-Bug-min.png'
author: 'Hari Thapliyaal'

excerpt: #
author_profile: true
share: true
toc: true   
toc_sticky: true
---
![](/assets/images/pmlogy/Software-Bug-min.png)

# Software Testing Confusing Terms

I am sure that like me if you have been in the industry for quite some time then you must have argued with different stakeholders around the **gaps in a software system** and different people give it a different name. The choice of name is very important from the perspective of fixing responsibility, fixing and identifying the place from where defect started leaking and then detected at a certain stage of product development or in the production environment. Let us understand these **Confusing Terminologies in Software Testing**.

These confusing terms of software testing are **error, defects, issue, problem, bug, and incident**. People unknowingly or knowingly use these terms in a way that they all are the same. Especially if you want to defend your work you will name it such that responsibility gets shifted to another party/team. As per my understanding, I am putting them as a one-liner for public consumption. Even if you disagree with my one-liner definition, define them properly in your project before you start using/misusing them.

To explain these terms I am using a banking loan calculation example. As of today banking industry has matured so much that these kinds of errors are not possible but just to help you understand the difference I am making this an example.

## Error 

Error is a gap between the developer’s expectation and actual result (ideally it should be detected during the development but due to carelessness it can be leaked to the next phases of the project life-cycle). For example, a developer knows that the output of a function calculate\_interest( rate=10%, duration=1%, principle=100) should be 10 but due to some calculation return value of the function is other than 10. The developer missed to test it during development. This is an error. If this error is caught by the tester she will name it a defect or bug. **A wrongly written unit test case is passing** or **unit testing is not done.**

## Defect

A defect is a gap between functional specification and actual result (ideally it should be detected during the internal quality testing but due to carelessness it can be leaked to the next phases of the project life-cycle). For example, a developer understood that I should calculate compounding interest therefore he put the formula and the system is calculating the compounding interested correctly. However, on the SRS it is mentioned to calculate the simple interest rate. By chance, if the testing team also tests the interest calculation and finds it correct without reading the specs document correctly then it will be leaked to UAT. UAT will mark this gap as a defect. **A unit test is passing, functional or UAT is failing**. This is a defect.

## Issue

The issue is a gap between customer expectation and actual result (ideally it should be detected during the UAT but due to carelessness it can be leaked to the production ). For example, the customer mentioned to the business analyst that the system should be able to generate interest quarterly and credit the client account. The business analyst understood it and mentioned it on the SRS document and the developer developed the product accordingly. Now developer developed and tests against her unit test cases, tester testing against the functional test cases. But when the customer is executing UAT, it is failing. Why? Because customer entering quarterly interest rate while developer assumed that interest rate is annual (common sense). **This is an issue without error and defect**. Because this information is missing or it is open for interpretation from the SRS document.

## Problem

A problem is a gap between end-user expectation and actual result (ideally it should be detected during the end-user is working on the product but due to carelessness it can affect the service/output/product of the Software Product. For example, as per agreement between the bank and his client interest should be calculated quarterly (which is happening) but the calculation is wrong may be due to the wrong calculation. Due to this bank is crediting more interest than actual interest. Bank’s customers may not complain, the UAT team missed it, but the compliance team finds this after 3 days of the software rollout. This is a problem and it needs to be fixed immediately or rollback. This kind of problem becomes part of L1, L2, L3 incident management in the ITIL framework.

## Bug 

General name for all the above.

## **Conclusion** 

If a developer fails to identify error and quality team identify the gap then quality team name it as a defect. If the quality team fails to identify a defect and the customer identifies the gap then the customer name it as an issue. If the customer (product testing team) fail to identify the issue/ defect/ error and end-user identify the gap then the end-user name it as a problem. It (problem) stops/interfere with the production or gives the wrong output which may be noticed by the end-users of the customer.