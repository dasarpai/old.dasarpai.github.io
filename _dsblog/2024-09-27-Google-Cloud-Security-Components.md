---
mathjax: true
id: 6147
title: "Navigating Google Cloud Security: Key Components, Roles, and Best Practices"
date: 2024-09-27
permalink: /dsblog/Google-Cloud-Security-Components
tags: [GCP, Machine Learning, IT Infrastructure, IT Security]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6147-Google-Cloud-Security-Components.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: ["GCP security best practices", "Google Cloud security architecture", "IAM roles and permissions", "Google Cloud identity management", "Cloud security principles"]
---

![Navigating Google Cloud Security](/assets/images/dspost/dsp6147-Google-Cloud-Security-Components.jpg)

# Navigating Google Cloud Security

## Is this article for me?
If you are looking answers of these questions then continue reading.

- What are various components of GCP security architecture?
- What is overall hierarchy of GCP Security architecture?
- What are Principal, Roles and Politics in GCP and how are they interconnected?
- Can you give examples of Permissions in GCP Security architecture?
- What are different types of resources available on GCP?
- Can you help me visualizing organization, folders and project of GCP?

## Question: What are various components of GCP security architecture?
Google Cloud Platform (GCP) has a complex security architecture that consists of various components. Here’s a list of key components and their hierarchy in GCP's security model:

### 1. **Identity and Access Management (IAM)**
   - **User**: An individual or service account that accesses [GCP resources](#what-are-different-types-of-resources-available-on-gcp).
   - **Service Account**: A special type of account that belongs to your application or a virtual machine (VM), rather than to an individual user.
   - **Role**: Defines a set of permissions. Roles can be:
     - **Primitive Roles**: Basic roles (Owner, Editor, Viewer) applied at the project level.
     - **Predefined Roles**: Roles created by Google with a specific set of permissions for a GCP service.
     - **Custom Roles**: User-defined roles that contain a specific set of permissions.
   - **Policy**: A binding of roles to users or service accounts at different resource levels (e.g., project, folder, or organization).

### 2. **Resource Hierarchy**
   - **Organization**: The root node for GCP resources, representing your company or organization.
   - **Folders**: Optional containers that can group projects for better organization and access control.
   - **Projects**: The primary organizing entity for GCP resources. Each project has its own IAM policies, billing, and resources.

### 3. **Security Controls**
   - **VPC (Virtual Private Cloud)**: Defines a virtual network in GCP, which helps isolate resources and manage network security.
   - **Firewall Rules**: Controls incoming and outgoing traffic to VM instances.
   - **Cloud Armor**: Provides DDoS (Distributed Denial of Service) protection and web application firewall capabilities.
   - **Cloud Identity**: A service that helps manage user identities and access to GCP services.

### 4. **Data Security**
   - **Encryption**: GCP encrypts data at rest and in transit. Users can also manage their own encryption keys with Cloud Key Management Service (KMS).
   - **Cloud Storage**: Offers options for data storage, including bucket-level permissions and lifecycle management.
   - **BigQuery**: Has built-in security features, including access control and data encryption.

### 5. **Monitoring and Auditing**
   - **Cloud Audit Logs**: Provides logs for admin activities, data access, and system events across GCP services.
   - **Cloud Security Command Center**: A security management and data risk platform for GCP that provides visibility into your security posture.

### 6. **Compliance and Governance**
   - **Access Context Manager**: Provides context-aware access controls based on user attributes and environment.
   - **Organization Policies**: Allows you to set restrictions on how resources can be used within your organization.

## Question: What is overall hierarchy of GCP Security architecture?
1. **Organization**
   - Can contain multiple **Folders**
   - Each **Folder** can contain multiple **Projects**
2. **Project**
   - Contains GCP resources (like VM instances, databases, etc.)
   - Has IAM policies associated with it (Users/Service Accounts with Roles)
3. **Roles and Policies**
   - Roles define what users can do within a project, and policies govern the bindings of roles to users or service accounts.

## Question: What are Principal, Roles and Politics in GCP and how are they interconnected?

In Google Cloud's security architecture, "principals," "policies," and "roles" play key roles in the Identity and Access Management (IAM) system. Here's how they fit in:

1. **Principals** are entities that request access to resources in Google Cloud. A principal can be a user, group, service account, or even an application.
   - Types of principals:
     - **Google Accounts**: End-users with a Google identity (like Gmail).
     - **Service Accounts**: Special accounts used by applications or virtual machines.
     - **Google Groups**: A collection of Google accounts that can be treated as one.
     - **Cloud Identity or G Suite accounts**: Managed user accounts within an organization.
     - **Workload Identity**: Identities that can be mapped to external identities (e.g., Kubernetes).

2. **Permissions** are Fine-grained controls that define what actions a principal can perform on resources. Permissions are the building blocks of roles. For example, the "bigquery.tables.create" permission allows creating tables in BigQuery.

3. **Roles**, define what actions a principal can perform on a resource.
   - Types of roles:
     - **Basic Roles**: These include primitive roles like `Owner`, `Editor`, and `Viewer`.
     - **Predefined Roles**: Predefined sets of permissions for specific services (e.g., `bigquery.user`, `storage.objectViewer`).
     - **Custom Roles**: You can define custom roles with specific permissions tailored to the needs of your organization.

4. **Policies**
   - **Policies** in GCP define which principals have which roles for a particular resource. IAM policies consist of bindings that associate **roles** with **principals** for resources.
   - Policies apply at different levels of the resource hierarchy:
     - **Organization Level**: Policies affect all resources within the organization.
     - **Folder Level**: Policies apply to a group of projects.
     - **Project Level**: Policies govern access to resources within a specific project.
     - **Resource Level**: Policies can be set for individual resources like Cloud Storage buckets or BigQuery datasets.

### Hierarchy of these Security Components:
- **Resources** (e.g., projects, buckets, datasets)
- **Policies** (attached to resources, defining role bindings)
- **Roles** (define a set of permissions)
- **Principals** (users or service accounts that are granted a role).

Policies specify which roles (permissions) principals are assigned for specific resources.

## Question: Can you give examples of Permissions in GCP Security architecture?

Google Cloud permissions are extensive, as they cover a wide array of services like Compute Engine, BigQuery, Cloud Storage, and many more. Each service has its own set of permissions. When creating **custom roles**, you can select permissions from the Google Cloud permissions list to define specific access for principals.

Below is an example list of some commonly used permissions across a few key Google Cloud services:

1. **Compute Engine (GCE)**
- `compute.instances.create`: Permission to create VM instances.
- `compute.instances.start`: Permission to start a stopped instance.
- `compute.instances.delete`: Permission to delete an instance.
- `compute.networks.update`: Permission to update a network.
- `compute.disks.attach`: Permission to attach a persistent disk to an instance.

2. **Cloud Storage**
- `storage.buckets.create`: Permission to create storage buckets.
- `storage.buckets.delete`: Permission to delete buckets.
- `storage.objects.create`: Permission to upload an object to a bucket.
- `storage.objects.get`: Permission to read an object’s metadata or contents.
- `storage.objects.delete`: Permission to delete an object in a bucket.

3. **BigQuery**
- `bigquery.tables.create`: Permission to create a new table in a dataset.
- `bigquery.tables.get`: Permission to read metadata about a table.
- `bigquery.tables.update`: Permission to update the schema or data of a table.
- `bigquery.jobs.create`: Permission to submit a new query job.
- `bigquery.datasets.create`: Permission to create a new dataset.

4. **Identity and Access Management (IAM)**
- `iam.serviceAccounts.create`: Permission to create a new service account.
- `iam.serviceAccounts.delete`: Permission to delete a service account.
- `iam.roles.create`: Permission to create a new custom role.
- `iam.roles.update`: Permission to update an existing role.
- `iam.roles.list`: Permission to list all roles in a project.

5. **Cloud Pub/Sub**
- `pubsub.topics.create`: Permission to create a new topic.
- `pubsub.subscriptions.create`: Permission to create a new subscription.
- `pubsub.subscriptions.consume`: Permission to receive messages from a subscription.
- `pubsub.topics.publish`: Permission to publish messages to a topic.

6. **Cloud Functions**
- `cloudfunctions.functions.create`: Permission to create a new function.
- `cloudfunctions.functions.update`: Permission to update an existing function.
- `cloudfunctions.functions.delete`: Permission to delete a function.

7. **Kubernetes Engine (GKE)**
- `container.clusters.create`: Permission to create a new Kubernetes cluster.
- `container.clusters.update`: Permission to update an existing cluster.
- `container.clusters.delete`: Permission to delete a Kubernetes cluster.

8. **Cloud SQL**
- `cloudsql.instances.create`: Permission to create a new Cloud SQL instance.
- `cloudsql.instances.delete`: Permission to delete a Cloud SQL instance.
- `cloudsql.instances.update`: Permission to update an existing instance.

9. **Cloud Run**
- `run.services.create`: Permission to create a new service in Cloud Run.
- `run.services.update`: Permission to update an existing service.
- `run.services.delete`: Permission to delete a Cloud Run service.

10. **Cloud Logging**
- `logging.logEntries.create`: Permission to write log entries.
- `logging.logEntries.list`: Permission to list log entries in a project.
- `logging.sinks.create`: Permission to create a new log sink.

For a comprehensive list of all permissions across Google Cloud services, you can refer to the official [Google Cloud Permissions Reference](https://cloud.google.com/iam/docs/permissions-reference). This document provides detailed permission sets for each Google Cloud service, making it easy to search and apply the required permissions based on your needs.

## Question: What are different types of resources available on GCP?
In Google Cloud, **principals** are assigned roles and permissions to access **resources**. These resources are the objects or entities within a project or the cloud infrastructure that a principal (user, service account, etc.) can interact with. Below is a list of key resources that can be assigned to principals in Google Cloud:

### **Compute and Storage Resources**
1. **Compute Engine**
   - Virtual Machines (VMs)
   - Disks
   - Snapshots
   - Images

2. **Google Kubernetes Engine (GKE)**
   - Clusters
   - Nodes
   - Pods
   - Namespaces

3. **Cloud Storage**
   - Buckets
   - Objects (files within buckets)

4. **Persistent Disks**
   - Block storage for Compute Engine instances

5. **Cloud SQL**
   - Instances (e.g., MySQL, PostgreSQL databases)
   - Databases
   - Users

6. **BigQuery**
   - Datasets
   - Tables
   - Views
   - Jobs (queries)

7. **Cloud Spanner**
   - Instances
   - Databases
   - Tables

8. **Firestore**
   - Databases
   - Collections
   - Documents

### **Networking Resources**
9. **VPC (Virtual Private Cloud)**
   - Networks
   - Subnets
   - Firewalls
   - Routes

10. **Cloud Load Balancing**
   - Load balancers (HTTP(S), TCP/UDP)
   - Backends (backend services, instance groups)

11. **Cloud DNS**
   - Managed Zones
   - DNS Records

12. **Cloud NAT**
   - NAT gateways for external access

13. **Cloud VPN**
   - VPN gateways
   - Tunnels

### **Identity and Access Management (IAM) Resources**
14. **IAM Policies**
   - Define role bindings between principals and resources

15. **Service Accounts**
   - Special accounts used by applications or VMs

16. **OAuth2 Credentials**
   - API keys, OAuth client IDs, service account keys

### **Data Analytics Resources**
17. **Bigtable**
   - Instances
   - Clusters
   - Tables

18. **Dataproc**
   - Clusters (for Hadoop/Spark)

19. **Dataflow**
   - Jobs (streaming and batch data processing)

20. **Pub/Sub**
   - Topics
   - Subscriptions

### **Artificial Intelligence and Machine Learning Resources**
21. **AI Platform**
   - Models
   - Jobs (training, prediction)
   - Notebooks

22. **Vertex AI**
   - Datasets
   - Models
   - Endpoints
   - Pipelines

### **Security Resources**
23. **Secret Manager**
   - Secrets
   - Versions of secrets

24. **Cloud Identity**
   - Users
   - Groups

25. **Cloud Key Management Service (KMS)**
   - Key Rings
   - Keys
   - Key Versions

26. **Certificate Manager**
   - SSL Certificates

### **Logging and Monitoring Resources**
27. **Cloud Monitoring**
   - Metrics
   - Dashboards
   - Alerts

28. **Cloud Logging**
   - Logs
   - Log Sinks
   - Log-Based Metrics

### **APIs and API Management**
29. **APIs**
   - API Services (Cloud APIs like Vision API, Speech-to-Text API)

30. **API Gateway**
   - Gateways for managing APIs

31. **Cloud Endpoints**
   - Endpoints for APIs

### **DevOps and Automation Resources**
32. **Cloud Functions**
   - Functions (serverless code)

33. **Cloud Run**
   - Services (containerized applications)

34. **App Engine**
   - Applications
   - Versions
   - Instances

35. **Cloud Build**
   - Builds (for CI/CD)

36. **Cloud Scheduler**
   - Jobs (scheduled tasks)

### **Billing and Management**
37. **Billing Accounts**
   - Accounts and budgets

38. **Projects**
   - Projects (organizational units)
   - Folders

### **Other Resources**
39. **Recommender API**
   - Recommendations for resources like Compute Engine and Cloud IAM

40. **Cloud Tasks**
   - Task queues


## Question: Can you help me visualizing organization, folders and project of GCP?
Assume, you are bank "IFDC Bank" and you want to move to GCP, then in a cloud environment, particularly in Google Cloud, organizing your resources properly is crucial to maintain security, governance, and scalability. Otherwise they can be misused. This misuse of resource can harm your customer's saving or it can harm your infrastructure cost. Here's an example structure for **IFDC Bank** moving to the cloud:

### **1. Organization**
- **Name**: `ifdc-bank`
   - The **Organization** is at the top of the hierarchy and represents the entire bank as an entity within Google Cloud. This is typically mapped to the domain or enterprise identity of your organization. For example, it could be tied to the domain **ifdc-bank.com**.

### **2. Folders**
Folders can represent large functional areas, departments, or business units within the bank. Folders help in organizing projects and applying consistent access control and policies.

#### Examples:
- **Folder Name**: `Retail-Banking`
   - Contains all the resources and projects related to retail banking operations, such as customer accounts, savings, loans, etc.
  
- **Folder Name**: `Corporate-Banking`
   - Includes resources for corporate accounts, large loans, and institutional banking services.
  
- **Folder Name**: `IT-Operations`
   - Holds all resources related to internal IT operations, infrastructure, and support.

- **Folder Name**: `Risk-Compliance`
   - Focuses on resources related to financial risk assessment, regulatory compliance, fraud detection, and auditing.

- **Folder Name**: `Analytics`
   - Dedicated to advanced analytics and data processing, handling big data, business intelligence, and AI/ML models.

### **3. Projects**
Projects are individual units where specific workloads or applications live. Each project is isolated from the others, has its own billing, and is subject to specific permissions and policies.

#### Examples for Projects:
- **Retail Banking Folder:**
   - **Project Name**: `customer-account-management`
     - Resources for managing retail customer accounts, transactions, and records.
   - **Project Name**: `loan-processing`
     - Resources and applications for processing retail loan applications.

- **Corporate Banking Folder:**
   - **Project Name**: `corporate-loans`
     - For managing loans to corporate clients, including large transactions and custom loan terms.
   - **Project Name**: `institutional-accounts`
     - Dedicated to managing high-value institutional banking clients.

- **IT Operations Folder:**
   - **Project Name**: `cloud-infrastructure`
     - Managing cloud resources like VMs, networks, storage, etc.
   - **Project Name**: `devops-tools`
     - Resources dedicated to CI/CD pipelines, automation, and operations.

- **Risk & Compliance Folder:**
   - **Project Name**: `fraud-detection`
     - Resources and tools for detecting and preventing fraudulent transactions.
   - **Project Name**: `regulatory-reporting`
     - Handling automated compliance reporting and auditing tools for regulatory bodies.

- **Analytics Folder:**
   - **Project Name**: `customer-data-analytics`
     - Resources for analyzing customer behavior, transaction data, and trends.
   - **Project Name**: `ai-credit-scoring`
     - AI/ML resources to build credit-scoring models using customer data.

### **Hierarchy Visualization**:
```
Organization: ifdc-bank
    ├── Folder: Retail-Banking
    │     ├── Project: customer-account-management
    │     ├── Project: loan-processing
    ├── Folder: Corporate-Banking
    │     ├── Project: corporate-loans
    │     ├── Project: institutional-accounts
    ├── Folder: IT-Operations
    │     ├── Project: cloud-infrastructure
    │     ├── Project: devops-tools
    ├── Folder: Risk-Compliance
    │     ├── Project: fraud-detection
    │     ├── Project: regulatory-reporting
    ├── Folder: Analytics
          ├── Project: customer-data-analytics
          ├── Project: ai-credit-scoring
```

## Hashtags
#GCP
#CloudSecurity
#GoogleCloud
#IAM
#CyberSecurity