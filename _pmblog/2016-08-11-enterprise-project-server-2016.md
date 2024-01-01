---
id: 1014   
mathjax: "true"
title: 'Enterprise Project Server 2016'
date: '2016-08-11T13:42:13+00:00'
permalink: '/pmblog/Enterprise-Project-Server-2016'
tags: 
    - 'Project Management Toolkit'
categories:

header:
  teaser: '/assets/images/pmblog/MicrosoftProject-Security.jpg'
layout: single

author: 'Hari Thapliyaal'
layout: single
excerpt: #
author_profile: true
share: true
---
![](/assets/images/pmblog/MicrosoftProject-Security.jpg)   


# Enterprise Project Server 2016

This post I am using to share useful links and videos about **Enterprise Project Server 2016**

## Links for Security Settings

These 4 videos are very good and important to understand the overall security permissions system in Project Server.  

1. [Video: Overview of permissions security](https://support.office.com/en-us/article/Video-series-How-security-permissions-work-in-Project-Server-a19fb429-4f8f-4aa1-a186-8a33650c9801)
2. [Video: Permissions for security groups](https://support.office.com/en-us/article/Video-series-How-security-permissions-work-in-Project-Server-a19fb429-4f8f-4aa1-a186-8a33650c9801): Groups contain sets of users who have similar functionality needs. For example, executive, project managers, team lead, team members. If every project manager in a particular division within your organization may need the same set of Project Server permissions, while executives or resource managers might have different needs then instead of assigning permission individually you must create a group and assign permission to the group. (**Who** should have permission)
3. [Video: Permissions for security categories](https://support.office.com/en-us/article/Video-series-How-security-permissions-work-in-Project-Server-a19fb429-4f8f-4aa1-a186-8a33650c9801): Categories are collections of projects, resources, and views. Categories define the scope of the information accessible to a given user. It means a user should have permission to which objects are defined by category. A category is similar to a group in that it provides permissions to users. It is like a filter on objects; permission on which objects.
4. Video: Resource Breakdown Structure: An RBS is a hierarchical security structure typically based on the management reporting structure of your organization. The RBS can be an important element in your Project Server security model when it is used to define the reporting relationships among users and projects in your organization. It works like a category to filter about which objects should have permission. But it is different from the category in the sense of hierarchy.