
## Is this article for me?
This is article is for you, if you have heard 
- About Machine learning, ML models 
- And computers can develop the Machine Learning Models automatically 
- But you don't know how it happens and what are different libraries available for this work.

## What is AutoML?
AutoML (Automated Machine Learning) is the process of automating the tasks involved in the creation of machine learning models. It aims to make machine learning more accessible by allowing users, including those without deep expertise in machine learning, to build, optimize, and deploy models with minimal manual intervention.

### Key components of AutoML:
1. **Data Preprocessing**: Automatically handles missing data, normalization, and feature engineering.
2. **Model Selection**: Evaluates multiple machine learning algorithms to find the best performing one.
3. **Hyperparameter Tuning**: Automates the tuning of model parameters for optimal performance.
4. **Model Evaluation**: Chooses the best model based on performance metrics like accuracy, precision, recall, etc.
5. **Ensembling**: Combines different models to create more accurate and robust predictions.
6. **Model Deployment**: Some AutoML platforms also support automated model deployment into production environments.

## Why AutoML?
1. **Reduces Complexity**: Simplifies the machine learning process, making it accessible for non-experts.
1. **Speeds Up Development**: Automates time-consuming tasks like feature engineering and hyperparameter tuning.
1. **Optimized Performance**: Automatically finds the best-performing models and configurations.
1. **Scalability**: AutoML tools are often capable of working with large datasets and scaling up for enterprise applications.

## What are popular AutoML tools?
There are many AutoML tools, in python we call them libraries. These libraries simplify the process of building machine learning models by automating tasks like feature selection, model tuning, and pipeline creation.

These AutoML libraries and platforms cater to various use cases, from traditional machine learning to deep learning, cloud-based systems, and enterprise-level solutions. Choosing the right AutoML tool depends on the specific use case, scalability requirements, and cloud or framework integrations.

Popular AutoML libraries make it easier for developers and data scientists to automate the process of building, training, and optimizing machine learning models without deep expertise in ML. Here are some of the top AutoML libraries:

## Proprietary AutoML Libraries.
We don't have access to the source code of these libraries but you can use those by paying to the developer. They are available as SaaS.

### 7. **Amazon SageMaker Autopilot**
   - **Platform**: AWS
   - **Use Cases**: Regression, classification.
   - **Features**: Automates model building on AWS infrastructure. It inspects data, selects the right algorithm, trains multiple models, and tunes hyperparameters, while giving full control for customization.
   - **Best for**: AWS users looking for scalable AutoML on their platform.

### 1. **Google Cloud AutoML**
   - **Platform**: Google Cloud
   - **Use Cases**: Image classification, natural language processing (NLP), translation, video analysis.
   - **Features**: End-to-end automation for ML models with minimal code. It integrates well with Google Cloud services like BigQuery and Vertex AI.
   - **Best for**: Users leveraging the Google Cloud ecosystem.

### 5. **Microsoft Azure AutoML**
   - **Platform**: Microsoft Azure
   - **Use Cases**: Image recognition, text classification, regression, classification.
   - **Features**: Provides end-to-end AutoML solutions on the Azure platform, integrating with other Azure services. It supports various problem types, including time series forecasting.
   - **Best for**: Users familiar with the Azure cloud ecosystem.

### 9. **DataRobot**
   - **Platform**: Commercial platform
   - **Use Cases**: Enterprise-level ML for various industries.
   - **Features**: Automates the entire model-building process, from data ingestion to deployment. It supports time series, text mining, and image recognition.
   - **Best for**: Enterprises needing scalable and user-friendly AutoML solutions.
   
Google Cloud AutoML
H2O.ai 
Auto-sklearn 
TPOT 
Microsoft Azure AutoML
Autokeras 


   
### 2. **H2O.ai (H2O AutoML)**
   - **Platform**: Open-source, Enterprise version available
   - **Use Cases**: Regression, classification, time series forecasting.
   - **Features**: Automated machine learning for a wide variety of algorithms (e.g., GBM, XGBoost, GLM). It supports distributed computing and has integrations with platforms like Spark and Python.
   - **Best for**: Large-scale machine learning and businesses looking for enterprise features.

### 3. **Auto-sklearn**
   - **Platform**: Python (based on Scikit-learn)
   - **Use Cases**: Classification and regression tasks.
   - **Features**: Extends Scikit-learn and automates hyperparameter tuning, feature preprocessing, and model selection. It includes meta-learning and ensemble building.
   - **Best for**: Python developers using Scikit-learn and wanting to optimize machine learning pipelines.

### 4. **TPOT (Tree-based Pipeline Optimization Tool)**
   - **Platform**: Python
   - **Use Cases**: Classification, regression.
   - **Features**: Automates the process of model selection and hyperparameter tuning using genetic programming. It aims to create the best possible machine learning pipeline.
   - **Best for**: Developers wanting genetic algorithms to optimize ML pipelines.



### 6. **AutoKeras**
   - **Platform**: Python, TensorFlow
   - **Use Cases**: Image, text, and structured data.
   - **Features**: Built on top of TensorFlow, AutoKeras automates deep learning model building, with a focus on neural networks for structured data, text, and images.
   - **Best for**: Developers who want to automate deep learning tasks and are familiar with Keras or TensorFlow.



### 8. **FLAML (Fast Lightweight AutoML)**
   - **Platform**: Python
   - **Use Cases**: Classification, regression, forecasting.
   - **Features**: Lightweight and efficient AutoML library that emphasizes speed and resource efficiency. It supports model selection and hyperparameter optimization.
   - **Best for**: Users with limited computational resources.



### 10. **MLJar Supervised**
   - **Platform**: Python
   - **Use Cases**: Classification, regression, binary, and multi-class tasks.
   - **Features**: Provides easy-to-use AutoML for creating, optimizing, and interpreting models. Offers explanations for models and supports ensembles.
   - **Best for**: Users looking for simplicity and a focus on model interpretability.

### 11. **Hyperopt-sklearn**
   - **Platform**: Python (Scikit-learn-based)
   - **Use Cases**: Classification, regression.
   - **Features**: Uses the Hyperopt library to perform hyperparameter optimization on Scikit-learn models. It automates the search for the best algorithm and hyperparameters.
   - **Best for**: Scikit-learn users focusing on hyperparameter optimization.



### Open-source libraries
We have access to the source code of these libraries. We can install them on any machine where we have control and use them. And you need not to pay for the software or service. If you host them on cloud like or Azure or GCP or AWS then you pay for their hardware and not for this library.



1. **PyCaret**: A low-code machine learning library that automates the entire machine learning pipeline, from data preparation to model evaluation.
2. **Auto-sklearn**: Built on top of scikit-learn, it automates hyperparameter tuning, model selection, and data preprocessing.
3. **TPOT**: Genetic algorithm-based optimization tool that automatically designs and selects the best machine learning pipelines.
4. **H2O.ai AutoML**: An open-source AutoML framework for building and deploying machine learning models at scale.
5. **MLJar Supervised**: A Python package that provides AutoML with a focus on interpretability and model explanations.

