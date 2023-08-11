---
mathjax: true
id: 6082
title: Google Cloud APIs
date: 2023-07-28
permalink: '/dsblog/Google-Cloud-APIS'
tags: [Google Cloud, APIs] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6082-Google-API-Services.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: True  
toc_sticky: true
---

![Google Cloud APIs](/assets/images/dspost/dsp6082-Google-API-Services.jpg)

# Google Cloud APIs

## Introduction
Hundreds of services from Google are available to consumers as API. Every API has a specific purpose. Over a period of time, google keeps clubbing these API endpoints (a url/place where a service is available), cleaning their code and improving the capabilities of these services. Therefore, sometimes it looks endpoint or pip package is the same, but its API name is different. Recently when google clubbed their many AI APIs they are moved under VertexAI and API endpoint changed to aiplatform.googleapi.com. To bring some clarity for my own sake and some of you may like this, I wrote this article.


Suppose you want to try these API services from your local machine or on premise machine. You need to do the following.
1. You need to install google cloud SDK on the machine.
2. Use gcloud command to connect google project. Because when you use google cloud API, Google will charge you for that. And all the charges are against some resources (service API, virtual machine, storage, processing etc). These resources are managed under a Google project. You can set budget for these services at project level. Thus, it becomes easy to track your expenses and budget.
3. Create virtual environment using python virtualenv command or conda command
4. Activate the virtual environment.
5. pip install the package in that environment (for this you can refer the table below)
6. Write your code in python to consume the API service.
6. Execute the code on the command prompt.


At the GCP (cloud.google.com) end, you need to
1. Enable the corresponding API.
2. Create the API key. Sometimes you may access the service with API key.
3. Create a service user and authorize this service user to access that API service.

## Google API List and Endpoints

| No. | API Name | API Endpoint | PIP Installation Command | Description
| --- | --- | --- | --- | ---
| 1. | Cloud AI Hub API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Provides sharing and discovering of machine learning pipelines, models, and more.
| 2. | Cloud AI Platform (Unified) API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Provides unified access to Vertex AI services, including AutoML, Pipelines, data labeling and model deployment.
| 3. | Cloud Vertex AI API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Provides unified access to Vertex AI services, including AutoML, Pipelines, and more.
| 4. | Cloud Vertex AI Data Labeling API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Enables data labeling for machine learning datasets.
| 5. | Cloud Vertex AI Dataset API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Manages datasets for machine learning models in Vertex AI.
| 6. | Cloud Vertex AI Endpoint API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Manages machine learning model endpoints in Vertex AI.
| 7. | Cloud Vertex AI Image Annotation API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Offers image annotation services for custom machine learning datasets.
| 8. | Cloud Vertex AI Job API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Manages training and batch prediction jobs in Vertex AI.
| 9. | Cloud Vertex AI Model API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Manages machine learning models in Vertex AI.
| 10. | Cloud Vertex AI Pipeline API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Enables building and deploying machine learning pipelines in Vertex AI.
| 11. | Cloud Vertex AI Prediction API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Offers online and batch prediction services in Vertex AI.
| 12. | Cloud Vertex AI Specialist Search API | aiplatform.googleapis.com | pip install google-cloud-aiplatform | Allows searching for AI specialists and experts in Vertex AI.
| 13. | Cloud API Gateway API | apigateway.googleapis.com | pip install google-cloud-apigateway | Provides a fully managed API gateway for serverless applications.
| 14. | Cloud App Engine Admin API | appengine.googleapis.com | pip install google-cloud-appengine | Enables the management of App Engine applications.
| 15. | Cloud AutoML Natural Language API | automl.googleapis.com | pip install google-cloud-automl | Provides custom machine learning models for natural language processing.
| 16. | Cloud AutoML Translation API | automl.googleapis.com | pip install google-cloud-automl | Enables building custom machine learning models for translation tasks.
| 17. | Cloud AutoML Vision API | automl.googleapis.com | pip install google-cloud-automl | Offers custom machine learning models for image recognition.
| 18. | Cloud AI Platform Jobs API | ml.googleapis.com | pip install google-cloud-aiplatform | Manages training and batch prediction jobs for machine learning models.
| 19. | Cloud AI Platform Model Builder API | ml.googleapis.com | pip install google-cloud-aiplatform | Allows building custom machine learning models using a simple UI.
| 20. | Cloud AI Platform Prediction API | ml.googleapis.com | pip install google-cloud-aiplatform | Offers online and batch prediction services for machine learning models.
| 21. | Cloud AI Platform Training API | ml.googleapis.com | pip install google-cloud-aiplatform | Enables training and serving machine learning models on Google Cloud.
| 22. | Cloud AI Platform Vizier API | ml.googleapis.com | pip install google-cloud-aiplatform | Provides hyperparameter tuning for machine learning models.
| 23. | Cloud Machine Learning Engine API | ml.googleapis.com | pip install google-cloud-ml | Allows for training and deploying machine learning models using TensorFlow.
| 24. | Cloud Speech-to-Text API | speech.googleapis.com | pip install google-cloud-speech | Allows converting audio to text using machine learning.
| 25. | Cloud Text-to-Speech API | texttospeech.googleapis.com | pip install google-cloud-texttospeech | Enables converting text into natural-sounding speech.
| 26. | Cloud Translation API | translate.googleapis.com | pip install google-cloud-translate | Provides translation capabilities for Google Cloud Platform resources.
| 27. | Cloud Video Intelligence API | videointelligence.googleapis.com | pip install google-cloud-videointelligence | Extracts insights from videos using machine learning.
| 28. | Cloud Vision API | vision.googleapis.com | pip install google-cloud-vision | Provides image recognition capabilities for Google Cloud Platform resources.
| 29. | Cloud BigQuery API | bigquery.googleapis.com | pip install google-cloud-bigquery | Enables super-fast SQL queries using the processing power of Google's infrastructure.
| 30. | Cloud Bigtable API | bigtable.googleapis.com | pip install google-cloud-bigtable | Provides a fully managed, scalable NoSQL database service.
| 31. | Cloud Billing Budget API | billingbudgets.googleapis.com | pip install google-cloud-billing-budget | Manages budget notifications for Google Cloud billing.
| 32. | Cloud Asset API | cloudasset.googleapis.com | pip install google-cloud-asset | Offers access to the resource inventory for Google Cloud Platform.
| 33. | Cloud Billing API | cloudbilling.googleapis.com | pip install google-cloud-billing | Allows for the management of Google Cloud billing accounts and budgets.
| 34. | Cloud Build API | cloudbuild.googleapis.com | pip install google-cloud-build | Enables building and testing applications in the cloud using containers.
| 35. | Cloud Debugger API | clouddebugger.googleapis.com | pip install google-cloud-debugger | Offers debugging capabilities for cloud applications.
| 36. | Cloud Error Reporting API | clouderrorreporting.googleapis.com | pip install google-cloud-error-reporting | Automatically reports errors raised by running cloud services.
| 37. | Cloud Functions API | cloudfunctions.googleapis.com | pip install google-cloud-functions | Enables the deployment and management of event-driven serverless functions.
| 38. | Cloud IoT Core API | cloudiot.googleapis.com | pip install google-cloud-iot | Offers IoT device management and data ingestion for IoT applications.
| 39. | Cloud Key Management Service API | cloudkms.googleapis.com | pip install google-cloud-kms | Enables the management of cryptographic keys for Google Cloud resources.
| 40. | Cloud Profiler API | cloudprofiler.googleapis.com | pip install google-cloud-profiler | Provides application performance profiling for cloud applications.
| 41. | Cloud Resource Manager API | cloudresourcemanager.googleapis.com | pip install google-cloud-resource-manager | Manages Google Cloud resources and IAM policies programmatically.
| 42. | Cloud Resource Manager API (Folders) | cloudresourcemanager.googleapis.com | pip install google-cloud-resource-manager | Manages and organizes resources into folders programmatically.
| 43. | Cloud Resource Manager API (Tagging) | cloudresourcemanager.googleapis.com | pip install google-cloud-resource-manager | Enables adding and managing labels (tags) for Google Cloud resources.
| 44. | Cloud Scheduler API | cloudscheduler.googleapis.com | pip install google-cloud-scheduler | Provides job scheduling for Google Cloud resources.
| 45. | Cloud Shell API | cloudshell.googleapis.com | pip install google-cloud-shell | Provides authenticated access to Cloud Shell sessions.
| 46. | Cloud Shell API (Public) | cloudshell.googleapis.com | pip install google-cloud-shell | Offers public access to Cloud Shell sessions.
| 47. | Cloud Tasks API | cloudtasks.googleapis.com | pip install google-cloud-tasks | Allows for managing and executing tasks asynchronously.
| 48. | Cloud Tasks Queue API | cloudtasks.googleapis.com | pip install google-cloud-tasks | Allows for creating and managing queues to run tasks in the background.
| 49. | Cloud Trace API | cloudtrace.googleapis.com | pip install google-cloud-trace | Captures, analyzes, and displays the latency data for applications.
| 50. | Cloud Composer API | composer.googleapis.com | pip install google-cloud-composer | Offers workflow orchestration for managing complex pipelines.
| 51. | Cloud Compute Engine API | compute.googleapis.com | pip install google-cloud-compute | Allows for the management of virtual machine instances in Google Compute Engine.
| 52. | Cloud Kubernetes Engine API | container.googleapis.com | pip install google-cloud-container | Provides a managed Kubernetes service for containerized applications.
| 53. | Cloud Container Registry API | containerregistry.googleapis.com | pip install google-cloud-containerregistry | Provides secure, private Docker container image storage and management.
| 54. | Cloud Data Catalog API | datacatalog.googleapis.com | pip install google-cloud-datacatalog | Offers metadata management and data discovery for enterprise data assets.
| 55. | Cloud Dataflow API | dataflow.googleapis.com | pip install google-cloud-dataflow | Enables the processing of large-scale data in real-time or batch mode using Apache Beam.
| 56. | Cloud Dataprep API | dataprep.googleapis.com | pip install google-cloud-dataprep | Offers intelligent data preparation and cleaning to simplify analytics workflows.
| 57. | Cloud Dataproc API | dataproc.googleapis.com | pip install google-cloud-dataproc | Provides fast, easy-to-use, fully managed cloud services for running Apache Spark and Hadoop.
| 58. | Cloud Datastore API | datastore.googleapis.com | pip install google-cloud-datastore | A highly scalable NoSQL database service.
| 59. | Cloud Deployment Manager API | deploymentmanager.googleapis.com | pip install google-cloud-deployment-manager | Automates the deployment and management of Google Cloud resources.
| 60. | Cloud Data Loss Prevention (DLP) API | dlp.googleapis.com | pip install google-cloud-dlp | Provides data loss prevention (DLP) capabilities for sensitive data detection and redaction.
| 61. | Cloud DLP API | dlp.googleapis.com | pip install google-cloud-dlp | Provides data loss prevention (DLP) capabilities for sensitive data detection and redaction.
| 62. | Cloud Document AI API | documentai.googleapis.com | pip install google-cloud-documentai | Enables intelligent document processing and understanding.
| 63. | Cloud Endpoints API | endpoints.googleapis.com | pip install google-cloud-endpoints | Offers development, deployment, and management of APIs on Google Cloud.
| 64. | Cloud Firestore API | firestore.googleapis.com | pip install google-cloud-firestore | A flexible, scalable NoSQL database for web and mobile applications.
| 65. | Cloud Game Servers Management API | gameservices.googleapis.com | pip install google-cloud-gameservices | Provides game server management for multiplayer game developers.
| 66. | Cloud Healthcare API | healthcare.googleapis.com | pip install google-cloud-healthcare | Offers healthcare-specific data storage and processing capabilities.
| 67. | Cloud Identity and Access Management API | iam.googleapis.com | pip install google-cloud-iam | Offers identity and access management for Google Cloud resources.
| 68. | Cloud Identity-Aware Proxy API | iap.googleapis.com | pip install google-cloud-iap | Provides identity-aware access control for applications deployed on Google Cloud.
| 69. | Cloud Identity Platform API | identitytoolkit.googleapis.com | pip install google-cloud-identity-toolkit | Provides identity and authentication for Google Cloud applications.
| 70. | Cloud Talent Solution API | jobs.googleapis.com | pip install google-cloud-talent | Provides talent management solutions such as job search and matching.
| 71. | Cloud Talent Solution Client API | jobs.googleapis.com | pip install google-cloud-talent | Enables search and match functionality for Cloud Talent Solution.
| 72. | Cloud Natural Language API | language.googleapis.com | pip install google-cloud-language | Offers natural language understanding for text analysis.
| 73. | Cloud Life Sciences API | lifesciences.googleapis.com | pip install google-cloud-life-sciences | Provides services for genomics and life science data processing.
| 74. | Cloud Logging API | logging.googleapis.com | pip install google-cloud-logging | Allows for collecting and viewing logs, monitoring application performance, and debugging.
| 75. | Cloud Memorystore for Memcached API | memcache.googleapis.com | pip install google-cloud-memcache | Offers fully managed Memcached instances for in-memory caching.
| 76. | Cloud Monitoring API | monitoring.googleapis.com | pip install google-cloud-monitoring | Provides monitoring and alerting services for Google Cloud resources.
| 77. | Cloud AI Platform Notebooks API | notebooks.googleapis.com | pip install google-cloud-notebooks | Provides managed Jupyter Notebook instances for data analysis and machine learning.
| 78. | Cloud OS Config API | osconfig.googleapis.com | pip install google-cloud-os-config | Manages package installations and configurations for VM instances.
| 79. | Cloud OS Login API | oslogin.googleapis.com | pip install google-cloud-os-login | Enables programmatic access to Google Cloud VM instances using OS Login.
| 80. | Cloud Pub/Sub API | pubsub.googleapis.com | pip install google-cloud-pubsub | Allows for message-oriented communication between independent applications.
| 81. | Cloud Memorystore API | redis.googleapis.com | pip install google-cloud-redis | Offers fully managed Redis instances for in-memory caching.
| 82. | Cloud Memorystore for Redis API | redis.googleapis.com | pip install google-cloud-redis | Provides fully managed Redis instances for in-memory caching.
| 83. | Cloud Retail API | retail.googleapis.com | pip install google-cloud-retail | Provides retail-specific AI and data analytics solutions.
| 84. | Cloud Runtime Configuration API | runtimeconfig.googleapis.com | pip install google-cloud-runtimeconfig | Provides access to runtime configuration for cloud services.
| 85. | Cloud Secret Manager API | secretmanager.googleapis.com | pip install google-cloud-secret-manager | Offers secure storage, access, and management of secrets.
| 86. | Cloud Security Command Center API | securitycenter.googleapis.com | pip install google-cloud-security-center | Provides security and data risk insights for Google Cloud resources.
| 87. | Cloud Service Directory API | service-directory.googleapis.com | pip install google-cloud-servicedirectory | Enables management and discovery of services for microservices architectures.
| 88. | Cloud Service Usage API | serviceusage.googleapis.com | pip install google-cloud-service-usage | Allows managing API enablement and usage for Google Cloud services.
| 89. | Cloud Source Repositories API | sourcerepo.googleapis.com | pip install google-cloud-sourcerepo | Offers Git version control for code hosted on Google Cloud.
| 90. | Cloud Spanner API | spanner.googleapis.com | pip install google-cloud-spanner | Offers a globally distributed, horizontally scalable, and strongly consistent database service.
| 91. | Cloud SQL API | sqladmin.googleapis.com | pip install google-cloud-sql | Enables the management and administration of relational databases on Google Cloud.
| 92. | Cloud SSL Certificates API | sslcertificates.googleapis.com | pip install google-cloud-ssl-certificates | Manages SSL certificates for Google Cloud resources.
| 93. | Cloud Storage API | storage.googleapis.com | pip install google-cloud-storage | Enables interaction with Google Cloud Storage, a scalable object storage service.
| 94. | Cloud Video Intelligence (Unified) API | videointelligence.googleapis.com | pip install google-cloud-videointelligence | Offers video analysis and recognition services with improved accuracy.
| 95. | Cloud Workflows API | workflows.googleapis.com | pip install google-cloud-workflows | Allows building, deploying, and managing workflows.

## Price of the API Services
The price for each of these API services is different. You can know that using the following link.
https://console.cloud.google.com/apis/library/{API-Endpoint} API-Endpoint you can refer to the table below. Then you can get the price information from the price tab. For example https://console.cloud.google.com/apis/library/vision.googleapis.com you can the price of the vision service.

- [cloud.google.com/pricing/list](https://cloud.google.com/pricing/list)

If you are using AI API services, then the price depends on what specific AI service you are using. For example.

- AutoML Human Labeled Images With 1 Rater
- AutoML Human Labeled Images With 3 Raters
- AutoML Image Classification Batch Prediction for AutoML Vision or Vertex AI
- AutoML Image Classification Model Training Compute Hours
- AutoML Image Classification Model Training First Compute Hours
- AutoML Image Classification On-Device Model Training for AutoML Vision or Vertex AI
- AutoML Image Classification Model Online Predictions
- AutoML Image Classification Model Deployment for AutoML Vision or Vertex AI
- AutoML Image Classification Model Training for AutoML Vision or Vertex AI
- AutoML Image Object Detection Batch Prediction for AutoML Vision or Vertex AI
- AutoML Object Detection On-Device Model Training for AutoML Vision or Vertex AI
- AutoML Image Object Detection Model Deployment for AutoML Vision or Vertex AI
- AutoML Image Object Detection Model Training for AutoML Vision or Vertex AI
- Crop Hints Operations
- Document Text Detection Operations
- Face Detection Operations
- Image Properties Operations
- Label Detection Operations
- Landmark Detection Operations
- Logo Detection Operations
- Object Localization Operations
- Safe Search Detection Operations
- Text Detection Operations
- Web Detection Operations
- Product Search Metadata Storage


## Important Google Cloud Commands
- $gcloud help - Displays help for a specific gcloud command.
- $gcloud --help - Displays a list of all available gcloud commands.
- $gcloud --version - Displays the version of the gcloud CLI.
- $gcloud init - Initializes the gcloud CLI and sets your default project.
- $gcloud projects list - Lists all of your Google Cloud projects.
- $gcloud compute instances create - Creates a new Compute Engine virtual machine instance.
- $gcloud compute instances list - Lists all of your Compute Engine virtual machine instances.
- $gcloud compute instances start - Starts a Compute Engine virtual machine instance.
- $gcloud compute instances stop - Stops a Compute Engine virtual machine instance.
- $gcloud compute instances delete - Deletes a Compute Engine virtual machine instance.
- $gcloud compute firewall-rules create - Creates a new Compute Engine firewall rule.
- $gcloud compute firewall-rules list - Lists all of your Compute Engine firewall rules.
- $gcloud compute firewall-rules delete - Deletes a Compute Engine firewall rule.
- $ gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
- $ gcloud projects add-iam-policy-binding PROJECT_ID
- $ gcloud auth application-default login
- $ gcloud services enable pubsub.googleapis.com
- $ gcloud services disable pubsub.googleapis.com

## Google Cloud SDK: Tools for all languages	
- [Cheatsheet of Google Cloud Commands](https://cloud.google.com/sdk/docs/cheatsheet)
- "Google Cloud CLI" lets you manage resources and services from the command line. It also contains service and data emulators to speed up local development.
- "Cloud Shell" lets you code or use a terminal directly in the web-browser.
- "Cloud Code" provides IDE extensions for VSCode and IntelliJ.

## Google Cloud Libraries
- [Google Cloud API Libraries in Different Languages](https://cloud.google.com/apis/docs/cloud-client-libraries)
- [Google Cloud Python Library of API on Github](https://github.com/googleapis/google-cloud-python)
- [API Library List](https://cloud.google.com/python/docs/reference)

