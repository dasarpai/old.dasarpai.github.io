---   
id: 6039   
mathjax: true   
title: Datalake vs Data Warehouse   
date: "2023-01-25T08:33:00+05:30"   
permalink: /dsblog/Datalake-vs-Data-Warehouse   
tags: [Database]   
   
categories:   
header:   
    teaser: /assets/images/dspost/dsp6040-Datalake-vs-Data-Warehouse.jpg   
author: Hari Thapliyaal   
layout: single   
excerpt:   
author_profile: true   
share: true   
---   
   
![Datalake vs Data Warehouse](/assets/images/dspost/dsp6040-Datalake-vs-Data-Warehouse.jpg )   
   

A data warehouse is a system used for reporting and data analysis, and is considered a "single version of the truth." It typically includes a subset of an organization's data that is specifically structured for querying and reporting. A data lake, on the other hand, is a more flexible and general-purpose system for storing raw, unstructured data. Data in a lake can be stored in its original format and can be used for a variety of purposes, including reporting and analysis. Data warehouse is more structured while data lake is unstructured. Data warehouse is optimized for reporting and analytics while data lake is optimized for storing and processing large amount of raw data.

Characteristics | Data Warehouse | Data Lake
--- | --- | ---
What kind of Data? | Relational from transactional systems, operational databases, and line of business applications | Non-relational and relational from IoT devices, web sites, mobile apps, social media, and corporate applications
When Schema is created? | Designed prior to the DW implementation (schema-on-write) | Written at the time of analysis (schema-on-read)
Price/Performance | Fastest query results using higher cost storage | Query results getting faster using low-cost storage
Data Quality | Highly curated data that serves as the central version of the truth | Any data that may or may not be curated (ie. raw data)
Who are the Users? | Business analysts | Data scientists, Data developers, and Business analysts (using curated data)
Usage | Analytics, Batch reporting, BI and visualizations | Machine Learning, Predictive analytics, data discovery and profiling

There are several software options available for setting up and managing a data lake. Some of the most popular include:

- Apache Hadoop: An open-source framework that allows for distributed processing of large data sets. It includes the Hadoop Distributed File System (HDFS) for storing data and the MapReduce programming model for processing data.
- Apache Spark: An open-source, distributed computing system that can process large amounts of data quickly. It can be used in conjunction with Hadoop or as a standalone system.
- Amazon S3: A scalable, object-based storage service offered by Amazon Web Services (AWS). It can be used to store data in a data lake and is integrated with other AWS services such as Amazon Redshift and Amazon EMR.
- Azure Data Lake Storage: A scalable, secure, and cost-effective data lake solution offered by Microsoft Azure. It provides a single repository for big data analytics and is integrated with Azure HDInsight, Azure Data Factory, and Power BI.
- Google Cloud Storage: A scalable and cost-effective object storage service offered by Google Cloud. It can be used to store data in a data lake and is integrated with other Google Cloud services such as BigQuery and Cloud Dataflow.
- Cloudera Data Platform : is a data management platform that provides a comprehensive solution for data lakes, data warehousing, and data science. It offers a wide range of tools for data processing, storage, and management.
- Hortonworks Data Platform : is another open-source platform that provides a comprehensive solution for data lakes, data warehousing, and data science. It is built on Apache Hadoop and offers a wide range of tools for data processing, storage, and management.
- Talend: An open-source data integration software that allows for the extraction, transformation, and loading (ETL) of data into a data lake. It also supports data quality, master data management, and big data integration.
- Databricks: A cloud-based data engineering, machine learning and analytics platform built on top of Apache Spark that allows for easy and collaborative data processing, storage and management of large data sets.
- Snowflake: A cloud-based data warehousing and analytics platform that allows for the storage and querying of structured and semi-structured data in a data lake. It provides a SQL-based query language and integration with other tools like Tableau, Power BI, and Looker.

There are several software options available for setting up and managing a data warehouse. Some of the most popular include:

- IBM DB2: A relational database management system that can be used for data warehousing and business intelligence.
- Microsoft SQL Server: A relational database management system that includes tools for data warehousing and business intelligence.
- Oracle Database: A relational database management system that offers a wide range of tools for data warehousing and business intelligence.
- Teradata: A relational database management system that is optimized for data warehousing and business intelligence.
- MySQL: An open-source relational database management system that can be used for data warehousing and business intelligence.
- PostgreSQL: An open-source relational database management system that can be used for data warehousing and business intelligence.
- Amazon Redshift: A cloud-based data warehousing service offered by Amazon Web Services (AWS).
- Google BigQuery: A cloud-based data warehousing service offered by Google Cloud.
- Snowflake: A cloud-based data warehousing and analytics platform that allows for the storage and querying of structured and semi-structured data.
- SAP HANA: An in-memory data warehousing platform that allows for real-time data processing and analytics.
- Greenplum: A data warehousing platform that is based on the open-source PostgreSQL database.
- Vertica: A columnar database management system.
- Exasol: A columnar database management system.
- Sybase IQ: A columnar database management system.
- Infobright: A columnar database management system.