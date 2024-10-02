---      
id: 6041      
mathjax: true      
title: Type of Databases      
date: "2023-01-25T08:33:00+05:30"      
permalink: /dsblog/Type-of-Databases    
tags: [Database]      
       
categories:
  - dsblog 
header:      
    teaser: /assets/images/dspost/dsp6041-Type-of-Databases.jpg      
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---      
       
![Type of Databases](/assets/images/dspost/dsp6041-Type-of-Databases.jpg)    
       
# What are the various types of databases?   
    
## Introduction   
    
In the 21st Century, Data is the real oil of machines. There are different kinds of oils and there are different kinds of containers. Similarly, there are different kinds of data and there are different kinds of database software to manage these databases. Broadly we call them SQL and NoSQL databases. But In the NoSQL, there are some other finer groups for specific purposes. Let's look into these.    
   
## Relational Database (SQL Databases)    

Typically when people are referring to a database they refer to this database category. This database contains, tables (equivalent to file on file OS), indexes of the table, views, and functions. Tables have rows and columns. Each row is related to one sample or item or thing or person or event etc. Each column is like the attribute of those samples, items, things, persons, events, etc. There are many tables in one database. Each table has some primary key using which each record of the table can be uniquely identified. These tables are related to each other and they are connected using the primary keys. There are many vendors in the market who provide the software to create these databases. Some of the database softwares are open-source and free, some are proprietary and free, others are proprietary and you need to pay the vendor for the use of these softwares. Nowadays many cloud providers like AWS, Google, and Microsoft are providing these softwares on the cloud, so you need not buy these but pay for the service as long as you use them.    

- MySQL: An open-source relational database management system that is widely used in web applications and data warehousing.    
- MariaDB: A fork of MySQL that is open-source and known for its improved performance and scalability.    
- PostgreSQL: An open-source relational database management system that is known for its compliance with SQL standards, performance, and scalability.    
- SQLite: An open-source relational database management system that is embedded into applications, and is known for its compactness and ease of use.    
- Firebird: An open-source relational database management system that is known for its support for Windows and Linux platforms, and its compatibility with InterBase.    
- Oracle Database: A commercial relational database management system that is widely used in enterprise environments and known for its robustness, security, and scalability.    
- Microsoft SQL Server: A commercial relational database management system that is widely used in enterprise environments and known for its support for Windows and .NET platforms.    
- IBM DB2: A commercial relational database management system that is widely used in enterprise environments and known for its support for mainframe and distributed environments.    
- Sybase: A commercial relational database management system from SAP that is widely used in enterprise environments and known for its support for Windows and Unix platforms.    
- Informix: A commercial relational database management system from IBM that is widely used in enterprise environments and known for its support for OLTP and data warehousing.    
   
## NoSQL Database    

A NoSQL, which originally means a non-relational database or non-SQL. They provide a data storage and recovery mechanism. This data is based on other means than the table relationships in reference databases. These databases were developed in the late 1960s but did not achieve momentum till recently. NoSQL databases are used in real-time web applications and big data and their application increase over time. There are many NoSQL Database softwares. Sometimes, NoSQL systems also call **not the only SQL** to highlight the fact that they can support query languages like SQL. There are no defined schemes in the NoSQL database which makes NoSQL databases the perfect candidate for fast-changing environments. NoSQL allows developers without affecting applications to make fly changes.    

- MongoDB: A document-based NoSQL database that is known for its scalability and support for JSON-like documents.    
- Cassandra: A **column-family based NoSQL database** that is known for its scalability and support for highly available distributed systems.    
- Redis: An **in-memory key-value store** that is known for its high performance and support for data structures such as strings, hashes, lists, and sets.    
- Riak: A **distributed key-value** store that is known for its scalability and fault-tolerance.    
- Neo4j: A **graph database** that is known for its support for querying and manipulating graph data.    
- Couchbase: A **document-based NoSQL** database that is known for its scalability and support for data synchronization across multiple devices.    
- HBase: A **column-family based NoSQL** database that is built on top of the Hadoop Distributed File System (HDFS) and is known for its scalability and support for big data workloads.    
- Elasticsearch: A search engine that is built on top of the Lucene library and is known for its support for **full-text search and analytics**.    
- Amazon DynamoDB: A fully **managed NoSQL database service** that is provided by Amazon Web Services (AWS) and is known for its scalability and support for key-value and document data.    
- Firebase Realtime Database: A **cloud-based NoSQL** database that is provided by Google and is known for its support for real-time data synchronization across multiple devices.    
   
   
## Document Database    

This is the NoSQL database, which stores the data in the type of documents. The information it links to other data elements and the data attributes are represented in each document. Specifies a key-value form for the document database. Some of the software which supports Document database are as follows.    

- MongoDB    
- Couchbase    
- CouchDB: An open-source document-oriented database that is known for its support for data replication and offline operation. It doesn't support SQL statements.    
- RavenDB: An open-source document database that is known for its support for .NET and its ability to store and index JSON documents.    
- Elasticsearch    
- Firebase Realtime Database    
- ArangoDB: A multi-model open-source database that can store and manage **documents, graphs, and key-value** data.    
- AWS DocumentDB: A fully managed document database service that is provided by Amazon Web Services (AWS) and is designed to be compatible with MongoDB.    
- Cosmos DB: A globally distributed, multi-model database service that supports document, key-value, graph, and **column-family** data models.    
- MarkLogic: An enterprise-grade document database that is known for its support for rich data model, built-in search, and ACID transactions.    
   
## Hierarchical Database    

In the early 1960s, IBM developed a hierarchical database system structure. Although the hierarchical structure is simple, because of the parent-child relationship, it is inflexible. Data will be stored in parent-child relationship nodes on hierarchical database management systems (hierarchical DBMSs).    

- IBM Information Management System (IMS): A hierarchical database management system that is widely used in enterprise environments and known for its support for mainframe and distributed environments.    
- Integrated Data Store (IDS): A hierarchical database management system that is widely used in enterprise environments and known for its support for data warehousing and business intelligence.    
- RDM Server: A hierarchical database management system that is known for its support for Windows and Unix platforms.    
- Adabas: A hierarchical database management system that is widely used in enterprise environments and known for its support for OLTP and data warehousing.    
- Total: A hierarchical database management system that is known for its support for Windows and Unix platforms.    
- IDMS: A hierarchical database management system that is widely used in enterprise environments and known for its support for mainframe and distributed environments.    
- IDS/2: A hierarchical database management system that is widely used in enterprise environments and known for its support for data warehousing and business intelligence.    
- Key-Value: A hierarchical database management system that is known for its support for key-value data model.    
- SQL/DS: A hierarchical database management system that is widely used in enterprise environments and known for its support for data warehousing and business intelligence.    
- VSAM: A hierarchical database management system that is widely used in enterprise environments and known for its support for mainframe environments.    
   
## Network Database    

This is also NoSQL database. A network structure is used to create relationships between entities by network data database management systems (Network DBMSs). Network databases are hierarchical databases, but a network node can have a link with multiple entities, unlike hierarchic databases in which a node can have a single parent. More like a cobweb or interlinked record network is a network database.    

- Neo4j: A popular open-source graph database that is known for its support for querying and manipulating graph data.    
- ArangoDB: A multi-model open-source database that can store and manage documents, graphs, and key-value data.    
- OrientDB: An open-source multi-model database that supports graph, document, key-value, and objects data models.    
- JanusGraph: An open-source graph database that is built on top of Apache Cassandra and Apache Hadoop and is known for its scalability and support for large graph data.    
- Virtuoso: An open-source relational and graph database that is known for its support for RDF and SPARQL.    
- Microsoft Azure Cosmos DB: A globally distributed, multi-model database service that supports graph data model.    
- Amazon Neptune: A fully managed graph database service that is provided by Amazon Web Services (AWS) and is designed to work with RDF data.    
- TigerGraph: An open-source graph database that is known for its support for real-time big data analytics.    
- FlockDB: An open-source graph database that is optimized for storing and querying large-scale graph data.    
- GraphDB: A commercial graph database that is known for its support for RDF and OWL, and its ability to handle large-scale graph data.    
   
   
## Graph Database    

A Graph Database is a specific type of network database where a node represents a customer, person or a car in a graph. And the relationships between nodes are represented as edges in a graph, it is optimized for handling graph-like data structures.    
   
# How to Structure the Schema of a Database.    

There are several database modeling tools available. Some of the popular tools are as follows.    
   
- MySQL Workbench: Most of you must have used this. This is very popular and people use this with MySQL. A data modeling tool that is specific to the MySQL database management system, and supports both logical and physical data modeling.    
- Microsoft Visio: A diagramming tool that can be used for creating ER diagrams and other types of data models.    
- ER/Studio: A data modeling tool that supports both logical and physical data modeling, and can generate data definitions for multiple database management systems.    
- IBM Rational Data Architect: A data modeling tool that supports both logical and physical data modeling, and can generate data definitions for multiple database management systems.    
- ERwin: A data modeling tool that supports both logical and physical data modeling, and can generate data definitions for multiple database management systems.    
- Lucidchart: A diagramming tool that can be used for creating ER diagrams and other types of data models.    
- SQL Developer Data Modeler: A data modeling tool that is specific to the Oracle database management system, and supports both logical and physical data modeling.    
- Vertabelo: A web-based data modeling tool that supports multiple database management systems and allows for **collaboration and version control**.    
- PowerDesigner: A data modeling tool that supports both logical and physical data modeling, and can generate data definitions for multiple database management systems.    
- pgModeler: A data modeling tool that is specific to the **PostgreSQL**.    
   
# References

- [Database of Databases](https://dbdb.io/browse?q=)
- [Most Popular Database Management Software](https://www.softwaretestinghelp.com/database-management-software/)


