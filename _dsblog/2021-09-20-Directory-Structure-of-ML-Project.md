---
id: 6010    
title: "Folder Structure for ML Project"
date: '2021-09-20T15:50:00+05:30'
permalink: /dsblog/Folder-Structure-for-ML-Project
categories:
  - dsblog
tags:
  - ML Project Directory Structure
  - Configuration Management  
  - Directory Structure
  - MLOps
keywords: machine learning project structure, project organization, MLOps best practices, code organization, model deployment, project management, configuration management, development workflow, production deployment, testing framework
header:
  teaser: "/assets/images/dspost/dsp6010-Directory-Strucutre-of-ML-Project.jpg"
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: "Guide to organizing machine learning projects with an efficient directory structure. Learn best practices for code organization, model deployment, and maintaining a clean, scalable ML project architecture."
author_profile: true   
share: true   
toc: true   
toc_sticky: true
mathjax: true
---

![Configuration Management](/assets/images/dspost/dsp6010-Directory-Strucutre-of-ML-Project.jpg)   

**Directory Structure for ML Project** is critical for any serious data science project. What we learn from a technology college and institution is useful in a real-world business, but the problem is that environment is completely different, and it takes proper guidance to adapt to a real business environment. Many times traveling on this path is full of frustration without any proper guidance. Sometimes guidance is there, but it is like blind is leading blind. One has already navigated a lot with struggle, so she/he is trying to guide a new person. Data-science education is not any different from this. From universities and institutions, we learn many concepts, algorithms, art, and science of developing models, etc. but when our customer or management tells us a problem with a simplistic dataset then we don’t know how to proceed. Although there are many templates and frameworks to approach, yet there is no simple cookie-cutter solution for all kinds of problems. Depending upon project duration, resources (human + machine + software), client, and his/her need, the technology available at hand we can choose different approaches.

In spite of all the chaos and confusion, one thing remains constant in the project. That one thing is managing the output of different stages of our project. Where to keep your intermediate file(s) or work product(s)? What should be the folder structure of our project? How files should be versioned? How product should be versioned? How the access permission to these files is managed? How the backup and retrieval of these files are managed, etc. All these activities are part of a big process called configuration management. **Configuration management** is a complex topic and much more complex in Machine Learning, and Data Science projects. So to keep things simple in this article, I am just trying one aspect of configuration management. The folder structure is one of the key concepts in configuration management. If you have proper folder structure then you can manage your work in much efficient way, it also helps you in understanding the high flow of the project.

In my experience, if you are working on a project where less than one week of one-person effort is required, then you probably can manage without proper folder structure. However, you still need folder structure to manage the work of many projects of a week duration. But here we are discussing the folder structure of a project and not of the organization. If many people are involved in a project, it is going to take months, input is coming from multiple sources and there are many stakeholders then it is good to have a stable folder structure in place. If your folder structure is evolving during the project lifecycle then you will waste lots of time in naming/renaming folders, migrating code, changing your code, etc. In the absence of a stable folder structure, sometimes you can accidentally overwrite something which should not be, sometimes you’re referring to or modifying a wrong file, sometimes you are maintaining a copy of a file that is not needed.

At the high-level, data-science project goes through three stages, therefore they deserve separate three top-level folders. They are as below.

**Research and Development:** In this stage, you get data from customer(s), or you collect data from different sources. This data may be structured or unstructured, clean or messy, one file or hundreds of files, one version of one file, or different versions of the same file. Based on the problem statement, you explore the data, clean the data, and develop a model(s).

Under this folder, you can keep files directly, or you can create different subfolders. It depends upon data volume, analysis, and transformations required, number, and types of models required. If you are not creating a subfolder, then make sure the filename can speak about what is the work in it.

**Productionization and Testing:** A model can be consumed by the user via a UI interface. This UI can be on a computer, phone, television screen. Even if you keep a UI development out of scope for a data science project, you need to convert the developed model into a service. The Research and Development stage gives you a model which is a binary file, it is not a service. In this folder, we keep all the work which are required

1.  To convert the given input into something which the model can understand. Transformations are put in modularized code.
2.  Create a service from the model and deploy the service in the test environment.
3.  Check model can be deployed at any other location without problem. Irrespective of OS, infrastructure used model service should run without any problem.
4.  Check whether input transformation is happening properly or not. (Testing & Test cases for input transformation)
5.  Check whether the model is giving the output as expected. (Model performance evaluation on the test data)

Even the best engineers can deviate from the main process when their focus is to solve problems. There are chances when code may be running properly but not written properly. Therefore, after developing our model in the first stage, we cannot hand over that code to the customer. In the absence of proper coding practices, it is extremely hard to maintain the code. Therefore, this is the time we should create packages from the code written at the research and development stage. Here we also need to ensure coding best practices are followed. This folder also includes files that ensure

1.  Implementation of coding standard
2.  A separate configuration file which can be used during testing or in production environment. This ensures reproducibility of processes followed during development.

**Model Serving:** During the previous stage, we wrote test cases, ensured coding standards and conducted testing. So all the related code plus train and test datasets created by the transformation pipeline and some other code and files, that are important for testing but not of any value in the production environment, so it should be cleaned. We know running and maintaining the performance of a production server is a highly challenging task. We cannot keep something there which can cause performance related issues, increase the cost of maintenance, or confuses the operation team. Therefore, we need to migrate only that code, configuration files into production, which is a must for running the production. This folder is an exact copy of the production directory structure. Apart from that, if we are going to host our application or model on some cloud platform like Heroku then we need to make sure that those requirements are also fulfilled. For that, we may need to write some other code with the specific file name. Thus, all this information rests in this folder.

You can maintain the same folder structure in your GitHub, or any other configuration-management software you are using. If you are using CI/CD software like circleci or jetkin then there will be little change in this structure. You need to include some yaml configuration files and decide from what place in your project life cycle you want the project to do continuous build, deployment, and delivery.

1- Research and Development folder
----------------------------------

*   **Data folder**: Data files given by customer, data files you created after scrapping from various sources. Baseline this and never ever alter anything in this folder. Make it read only.
*   **Data-Scripts** **folder**: SQL, JavaScript, Python etc. code to collect data from different sources.
*   **Data-Analysis** **folder**: Checking volume of data, data type, categories for categorical data field, null values, date field, logical field etc. Code to check data distribution. Create map of categorical fields to numbers. Document your observations about the data and decisions you can take on this data. So, all the related python code goes here.
*   **Data-Cleaning** **folder**: Code related to joining multiple files on various fields, dropping column/rows, null value treatment, etc. goes in this folder.
*   **Feature-Engineering** **folder**: Code related transformation, mapping, scaling, new feature creation goes in this folder.
*   **Feature-Selection** **folder**: Select which features are valuable for our project. RFE, VIF, Lasso etc., list of features with their importance. Code required to achieve all this goes here.
*   **Model-Training** **folder**: Train model on Identified features. Check performance on train data. Train data files. Different grid search, cross validation, model experiments, model and model performance.
*   **Test-Model folder**: All Transformation of needed variable. Prediction from trained model. Test data files. Ideally, this is validation data (not Test data). Normally, we create this dataset after doing the train test split from the customer given data. We test our model on this validation data.
*   **Helper-Functions** **folder**: Modular code / class for cleaning, transformation, imputation etc. This can be done from all the code which you have written now. Being the first stage, there will be minimal code in this folder.

2- Productionization and Packaging folder
-----------------------------------------

Let’s assume your model name is **mymagic**. To create distribution and test automation, I am using tox python library.

*   **Test Folder**: Keep your test cases here (this is to test the code and feature transformation on fly etc.). Code of prediction function is also here. Don’t confuse this with model performance testing.
    *   \_\_init\_\_.py
    *   configtest.py : Code related to loading test dataset (test dataset is given by customer)
    *   test\_feature.py : Unit test cases for the functionality need to tested.
    *   test\_prediction.py : Function required to test the prediction.
*   **model\_mymagic folder**
    *   **config folder**
        
        *   \_\_init\_\_.py
        
        *   **core.py** : Declare the type of all variable (it should be same as in the cleaned trained dataset). Create a config memory object which holds all the parameters required in our project. It will help you in removing the hardcode.
    *   **datasets folder**
        
        *   train.csv : your final train data
        
        *   test.csv : Your final test data
    *   **processing folder**
        
        *   \_\_init\_\_.py
        
        *   **datamanager.py** : Code related to pipeline load, pipeline save, pipeline remove functions goes here.
        
        *   **feature.py** : Code related to mapping of categorical variables, transformation functions.
        
        *   **validation.py** : Code related to checking inputs of the model. It shouldn’t be NA, value should be correct data type etc.
    *   **trained\_model folder**
        
        *   \_\_init\_\_.py
        
        *   **model\_xyz\_version.pkl** : This is model binary file. It is created when you save the model OR if you execute this command “tox -e train”
        
        *   **config.yaml** : This is a helper file. Mapping of categorical variables, all config variables required, validation of train/test dataset, FE, imputation information etc. all the related code goes here.
        
        *   **pipeline.py** : Complete pipeline for imputation, temporal fields, FE, etc. is written here. For model building or data cleaning or prediction whatever need to be done in the sequence, all those functions are called in this pipeline.
        
        *   **predict.py** : Prediction on new dataset. It can be batch prediction of one prediction.
        
        *   **train\_pipeline.py** Calling pipeline, creating model, saving model, selecting the best model.
        
        *   **VERSION** : Model version number.
*   **Requirements folder**: During package creation, these two files are read, it ensures all the dependencies are installed, and all coding standards are enforced.
    
    *   **requirements.txt** : List all the packages/libraries you need in production environment. Your model will not work if these libraries are not shipped into a production environment. For example, pydantic (for data validation), feature-engine, joblib, scikit-learn, ruamel.yaml, strictyaml.yaml). Basically this the list of all third party libraries which you package is using.
    
    *   **test\_requirements.txt** : List of all the packages which are needed in production (-r requirment.txt) plus some more packages which are required for testing, coding standard enforcement etc. For example, pytest (for unit testing), black (variable naming convention is enforced), flake8 (for checking coding style PEP8/ programming errors like lib imported but not used, undefined name), mypy (variable type checking), isort (package imports are in correct order)
*   **dist folder** : This folder is created automatically when you create distribution package of your model, you need to run following command **=> python -m build**. You must have the latest build library for this for that command => **python3 -m pip install –upgrad build**.
*   **model-mymagic-1.0.0.egg-info** : This folder is also automatically created when you run above build command. If this folder and above folder is moved to different/production location, and you run **pip install model-mymagic** then this package will be installed along with the dependencies in the environment..
    *   dependecy\_link.txt
    *   PKG-INFO
    *   requires.txt
    *   SOURCES.txt
    *   top\_level.txt
*   **.tox folder**: This folder is created automatically, you need to run following command => **pip install tox**. **tox -e train**. “**tox”** is generic virtual environment manager. It helps to automate packaging, testing and releasing python based application. All the information related to virtual environment is in this folder.
    *   Lib
    *   Log
    *   Sciprts
    *   pyvenv.cfg
*   **pyproject.toml** : To specify what program to use for generating distribution. Command => p**ython setup.py bdist** or **python setup.py bdist\_wheel** generate a distribution bundle. Command =>**python setup.py install** installs the distribution. Setup.py uses this file.
*   **MAFIFEST.in** : During package building, which files should be included and which one should be excluded is listed at this place. Like md, pkl, txt, csv, yml, txt can be included (you can write full name or just extension of these files). Files like log, cfg can be excluded.
*   **mypi.ini** : Linting and pipe checking. Configuration setting for linting.
*   **setup.py** : Functionality to install package on the different machine.
*   **tox.ini**: TOX is generic virtual environment manager. Ensures package installed correctly. Run test in the environment, irrespective of OS. All python path, environment variable issues are taken care by tox. This file can have environments defined like as following.
    
    *   \[tox\] default
    *   \[testenv\]
    
    *   \[testenv:test\_package\] Setting for envdir, deps, commands
    *   \[testenv:train\] Setting for envdir, deps, commands
    *   \[testenv:typechecks\] Setting for envdir, deps, commands
    *   \[testenv:stylechecks\] Setting for envdir, deps, commands
    
    *   \[textevn:lint\] Setting for envdir, deps, commands
    *   \[flake8\]

3- Model Serving Folder
-----------------------

By the time you reach to this stage, the code required to run the service is ready. Now, you first need to create the model file for that, you call the command => **tox -e train**. It will give a pkl file. After this, you can run this model as a service, for that you need to run this command => tox -e run. After this service will be running on your local machine. It gives you a URL and you can use that URL to consume the prediction service from the model. It will be https://localhost:8001/docs. After this service is available but it in embedded architecture using uvicorn or FastAPI, it can make asynchronous calls and serve the user. But if you want to consume the service via your own application, you need to deploy this application in dedicated architecture. For that, we need to develop our own UI using flask or Django etc., and call the API in our application.

*   **app folder**
    
    *   **config.py** : Code for calling logging function. Model monitoring is critical for model performance evaluation in the production environment. This code helps in model monitoring.
    *   **api.py:** Code to run the application which main.py is calling is written here.
    
    *   **main.py** : Code for running app
    *   **test folder** :
        *   **ConfigTest.py**: Configuration, code required to test the model in production environment.
        *   **TestAPI.py**: Code to test the service in production environment.
    *   **schema folder**
*   **procfile** : for heroku
*   **requirements.txt** : This file will have reference to the dependency plus the package we created, and uvicorn package
*   **test\_requirements.txt**
*   **.tox**
*   **tox.ini**
*   **mypy.ini**

After third stage, your model will be running on some server and users can call the service or webpage to consume the service given by your model.

Conclusion
----------

Let me know if I miss anything, or you do anything differently. If you are starting your first data science project for some customer or serious research, you can create this folder structure and keep putting files and content based on the need. It will give you clarity, and you can spend your time doing something which is more important than this administrative work.
