---
mathjax: true
id: 6125
title: Serverless databases
date: 2024-07-27
permalink: /dsblog/Serverless-databases
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6125-Serverless-databases.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
comments: true
---

![Serverless-databases](/assets/images/dspost/dsp6125-Serverless-databases.jpg)

# Serverless databases


| Feature                         | Amazon Aurora       | Google Cloud SQL    | Azure Database for PostgreSQL | Heroku Postgres   | Crunchy Bridge      | ElephantSQL        | CockroachDB         | TimescaleDB         | Neon               |
|---------------------------------|---------------------|---------------------|------------------------------|-------------------|---------------------|--------------------|---------------------|---------------------|--------------------|
| **Managed Service**             | Yes                 | Yes                 | Yes                          | Yes               | Yes                 | Yes                | Yes                 | Yes                 | Yes                |
| **PostgreSQL Compatibility**    | Yes                 | Yes                 | Yes                          | Yes               | Yes                 | Yes                | Yes                 | Yes                 | Yes                |
| **MySQL Compatibility**         | Yes                 | Yes                 | No                           | No                | No                  | No                 | No                  | No                  | No                 |
| **SQL Server Compatibility**    | No                  | Yes                 | No                           | No                | No                  | No                 | No                  | No                  | No                 |
| **Serverless Options**          | Yes                 | Yes                 | Yes                          | Yes               | No                  | No                 | No                  | No                  | Yes                |
| **Automatic Scaling**           | Yes                 | Yes                 | Yes                          | Yes               | Yes                 | Yes                | Yes                 | Yes                 | Yes                |
| **High Availability**           | Yes                 | Yes                 | Yes                          | Yes               | Yes                 | Yes                | Yes                 | Yes                 | Yes                |
| **Automated Backups**           | Yes                 | Yes                 | Yes                          | Yes               | Yes                 | Yes                | Yes                 | Yes                 | Yes                |
| **Integrated with Cloud Services** | Yes             | Yes                 | Yes                          | Yes               | No                  | Yes                | Yes                 | Yes                 | Yes                |
| **Distributed SQL**             | No                  | No                  | No                           | No                | No                  | No                 | Yes                 | No                  | No                 |
| **Time-Series Data Handling**   | No                  | No                  | No                           | No                | No                  | No                 | No                  | Yes                 | No                 |

This table should help you compare the key features of each database platform.

Neon Database supports data versioning. Data versioning in a database context involves keeping track of changes to the data over time, enabling you to view or revert to previous states of the data. This feature is useful for a variety of applications, including development, testing, and regulatory compliance.

Neon Database offers several features related to data versioning:

1. **Time Travel**: This feature allows users to query the database as it existed at any point in time. You can run SQL queries to see the state of the data as it was at a specific timestamp.
2. **Point-in-Time Recovery (PITR)**: This enables you to restore the database to a specific moment in the past, which is particularly useful for recovering from accidental data loss or corruption.
3. **Branching**: Similar to version control systems like Git, branching allows you to create a separate copy of your database at a specific point in time. You can make changes to the branch without affecting the main database, and merge changes back when ready.

These features make Neon Database a powerful tool for managing data versioning, providing flexibility and control over the data lifecycle.