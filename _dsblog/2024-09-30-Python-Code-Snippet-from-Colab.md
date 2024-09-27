---
mathjax: true
id: 6149
title: "Python Code Snippnet from Colab"
date: 2024-09-30
permalink: /dsblog/Python-Code-Snippnet-from-Colab
tags: [GCP, Machine Learning, IT Infrastructure, IT Security]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6149-Python-Code-Snippnet-from-Colab.jpg
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
keywords: ["Console programming", "Command-line interface", "Developer console", "Terminal vs. command prompt", "Remote console access", "IDE console", "Database console", "Embedded systems console", "Cloud console", "Debugging console", "Server console"]
---

![Python Code Snippnet from Colab](/assets/images/dspost/dsp6149-Python-Code-Snippnet-from-Colab.jpg)

# Python Code Snippnet from Colab

## What is snippet?
A **snippet** is a small, reusable piece of code designed to perform a specific task or solve a particular problem. It’s often just a few lines long and is meant to be quickly inserted into a larger program to save time or avoid re-writing commonly used functions.

### Key Features of a Snippet:
- **Short and specific**: Snippets usually address a single functionality or task, such as reading a file, making a network request, or sorting data.
- **Reusable**: Snippets can be reused in multiple projects without modification.
- **Pre-tested**: Snippets are typically pre-tested, so you can trust them to work in many situations.
- **Contextual**: A snippet often relies on a specific environment or language and may need to be adapted slightly to fit your use case.
  
### Example of a Snippet:
For example, if you frequently need to read a file in Python, you might save a snippet like this:

```python
# A snippet to read a file
with open('file.txt', 'r') as file:
    data = file.read()
    print(data)
```

This snippet can be used in any Python project to quickly read a file.

**Note:** If you want, you can convert above code into a function and put inside module. But many times it does not make sense to create a function for this kind of work, rather using a code snippet makes things simple.

### How Snippets Differ from Libraries, Packages, and Modules:
- **Snippets** are small, standalone bits of code. They are typically just individual functions or a few lines of logic.
- **Libraries** and **packages** are more structured, containing many functions and classes, often packaged for broader reuse.
- **Modules** are Python files containing reusable code, often more complex than snippets.
- **Frameworks** provide a full set of tools, including snippets but also structures and conventions for building large applications.

### Where Snippets are Used:
- **Code editors**: Many code editors like Visual Studio Code, PyCharm, and Sublime Text offer built-in snippets that can be quickly inserted into your code.
- **Online resources**: Websites like StackOverflow and GitHub Gist are filled with snippets shared by developers for specific tasks.
- **Google Colab**: Snippets are available as pre-built, reusable blocks of code to solve common data science tasks, for example.

Snippets save time and effort, allowing developers to focus on more complex or unique aspects of their projects.

## What is Colab Code Snippet?
If you want to do anything in Colab in Python language, don't spend time writing code from scratch. There are rich code snippets available from Google Colab that you can use to save a significant amount of time. This is especially useful for beginners who are starting their journey and struggle to write code, but it's also helpful for experts because, after all, it takes time to think, write, and test code.

And why does it matter whether the library was created by you, a project team member, or Google? As long as you understand what you want and the code snippet helps achieve that, use it without feeling guilty about not writing the code yourself.

After all, business is not about writing code, but about solving social and business problems. If there’s a solution available in the form of libraries, snippets, or templates, using them is the wise choice. Just make sure you understand what each line of code is doing.


## Colab snippets (Sep'2024)
This keeps growing. 
1. Adding form fields in Colab
1. Apply QA_PIXEL cloud mask to Landsat 8
1. Authenticate to GCP
1. Calculate mean NDVI on the 10km buffer around Paris using Sentinel-2
1. Camera Capture
1. Cross-output communication
1. Display SRTM DEM over Seattle
1. display.Javascript to execute JavaScript from Python
1. Downloading files or importing data from Google Drive
1. Downloading files to your local file system
1. Evaluate a Javascript expression from Python with eval_js
1. Filter Landsat 8 to a date range
1. Gemini: Connecting to Gemini
1. Gemini: Creating a prompt
1. Hiding code
1. Importing a library that is not in Colaboratory
1. Importing data directly from Google Sheets
1. Importing data from Google Sheets
1. Install [cartopy](http://scitools.org.uk/cartopy/docs/latest/)
1. Install 7zip reader [libarchive](https://pypi.python.org/pypi/libarchive)
1. Install GraphViz & [PyDot](https://pypi.python.org/pypi/pydot)
1. Javascript to Python communication
1. Jupyter Comms
1. Jupyter Widgets
1. Listing files in Google Drive
1. Mask out Sentinel-2 pixels above 100 m using SRTM
1. Mount a Cloud Storage location into the local filesystem
1. Mounting Google Drive in your VM
1. Open files from GCS with gsutil
1. Open files from GCS with the Cloud Storage Python API
1. Open files from GitHub
1. Open files from Google Drive
1. Open files from your local file system
1. Output Handling
1. Pandas DataFrame: Create from lists of values
1. Pandas DataFrame: Drop duplicate rows
1. Pandas DataFrame: Explode a column containing dictionary values into multiple columns
1. Pandas DataFrame: Extract values using regexp (regular expression)
1. Pandas DataFrame: Filter by Timestamp in DatetimeIndex using `.loc[]`
1. Pandas DataFrame: Filter by Timestamp using TimeDelta string
1. Pandas DataFrame: Ignore one Column
1. Pandas DataFrame: Intersect Indexes
1. Pandas DataFrame: Query by regexp (regular expression)
1. Pandas DataFrame: Query by Timestamp above a value
1. Pandas DataFrame: Query by variable value
1. Pandas DataFrame: Query for Timestamp between two values
1. Pandas DataFrame: Query using variable value as a column name
1. Pandas DataFrame: Rename multiple Columns
1. Pandas DataFrame: Reshape to have 1 row per value in a list column
1. Pandas DataFrame: Select all rows from A that are not in B, using the index
1. Pandas DataFrame: Select rows by an attribute of a column value
1. Pandas DataFrame: Sort the count of rows grouped on columns
1. Pandas Timestamp: Convert string to Timestamp
1. Pandas Timestamp: Convert string to Timestamp, using date only
1. Pandas: Create a TimeDelta from a string
1. Pandas: Create a TimeDelta using `unit`
1. Pandas: Create a TimeDelta using available kwargs
1. Pandas: DataFrames: Group Timeseries by Frequency
1. Pandas: Describe Timestamp values in a column
1. Pandas: display dataframes as interactive tables
1. Pandas: Replace NaN values in a Column
1. Pausing output processing
1. Saving data to Google Drive
1. Saving data to Google Sheets
1. Saving data with gsutil
1. Saving data with the Cloud Storage Python API
1. Serving resources
1. Show a bar chart of MODIS land cover classes
1. Show a line chart of CHIRPS precipitation
1. Show average yearly temperatures over California
1. Show NDVI from Sentinel-2 SR over Milan
1. Show NDVI over Rio using Landsat 8
1. Showing CV2 Images
1. Tagged Outputs
1. Third-party Jupyter widgets
1. Use BigQuery DataFrames
1. Using BigQuery with Cloud API
1. Using BigQuery with Pandas API
1. Visualization: Bar Plot in Altair
1. Visualization: Histogram in Altair
1. Visualization: Interactive Brushing in Altair
1. Visualization: Interactive Scatter Plot in Altair
1. Visualization: Linked Brushing in Altair
1. Visualization: Linked Scatter-Plot and Histogram in Altair
1. Visualization: Scatter Plot with Rolling Mean in Altair
1. Visualization: Stacked Histogram in Altair
1. Visualization: Time Series Line Plot in Altair


## Difference between Framework, Package, Library, Module
Here’s a detailed comparison table of **module**, **library**, **package**, and **framework** based on different variables:

| **Variable**                | **Module**                                                              | **Library**                                                           | **Package**                                                           | **Framework**                                                      |
|-----------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------------|
| **Made of**                  | A single file containing **functions** and **classes**.                 | Multiple **files** with functions and classes; serves a specific purpose. | Multiple **libraries** and/or **modules** grouped together.          | A collection of **packages**, **libraries**, and **modules** organized for building applications. |
| **Purpose**                  | Used for small, specific functionality.                                 | Provides specific functionalities to be used **when needed**.          | Organizes related functionality and can be reused across projects.    | Provides a full **structure** for building applications with rules and guidelines.                  |
| **Installation**             | Typically just **copied** or included in the same project.              | Installed using package managers like **pip** or **npm**.              | Installed using package managers like **pip** or **npm**.             | Installed using package managers like **pip**, **npm**, or specialized tools.                      |
| **Control**                  | The code **calls** the module whenever needed.                          | The user **calls** the library functions whenever necessary.           | The user **imports** and uses packages across multiple libraries.     | The framework controls the **flow** of the project; your code fits within the framework’s structure.|
| **Structure**                | No predefined structure; just a file.                                   | No specific structure required; can be used anywhere in the project.   | May require a specific directory structure for **complex packages**.  | Requires a well-defined structure, often with prebuilt directories and files like `views`, `models`.|
| **Dependency**               | May depend on other modules but generally **self-contained**.           | Can depend on other libraries; dependencies managed via **pip**.        | Can include multiple libraries and modules with **interdependencies**. | May have **many dependencies** and third-party packages included.                                   |
| **Reusability**              | Reusable but mostly within the same project.                            | Highly reusable across multiple projects.                              | Reusable across multiple projects, typically contains more functionality than libraries.  | Framework code can be reused within projects but often requires adherence to framework-specific guidelines. |
| **Flexibility**              | Extremely flexible and can be used anywhere.                            | Flexible, usable in any part of the project, without structural constraints. | Mostly flexible but organized, sometimes following naming conventions. | Less flexible, as the framework imposes a certain **structure and rules**.                           |
| **Inversion of Control (IoC)**| No inversion of control. You are in full control of the flow.           | No inversion of control. You control the code flow.                    | You control the code flow, but packages can have entry points.        | The framework controls when and where your code is executed.                                        |
| **Scale**                    | Small-scale, limited to specific functionality within a project.        | Medium-scale, provides specific functionality but doesn't organize a project. | Medium to large-scale, organizes functionalities and libraries.      | Large-scale, providing everything needed to organize and manage an entire project or application.   |
| **Examples**                 | A single Python file defining utility functions.                        | `matplotlib`, `requests`, `NumPy`                                      | `scikit-learn`, `pandas`, `TensorFlow`                                | `Django`, `Flask`, `React`, `Angular`                                                                  |


### Additional Notes:
- **Modules**: Small and self-contained, often written directly as part of a project.
- **Libraries**: More general-purpose and can be applied to a wide variety of projects without imposing structure.
- **Packages**: More organized collections that can be shared across multiple projects, combining multiple related libraries.
- **Frameworks**: Full application structures that provide a skeleton for the entire project and guide development.
.

## A Newest snippet added in Sep'2024   
**Gemini: Creating a prompt.**    
This rich example shows how you can create and configure complex prompts for Gemini.
```python
# @title Create a prompt

import google.generativeai as genai
from google.colab import userdata

api_key_name = 'GOOGLE_API_KEY' # @param {type: "string"}
prompt = 'What is the velocity of an unladen swallow?' # @param {type: "string"}
system_instructions = 'You have a tendency to speak in riddles.' # @param {type: "string"}
model = 'gemini-1.5-flash' # @param {type: "string"} ["gemini-1.0-pro", "gemini-1.5-pro", "gemini-1.5-flash"]
temperature = 0.5 # @param {type: "slider", min: 0, max: 2, step: 0.05}
stop_sequence = '' # @param {type: "string"}

if model == 'gemini-1.0-pro' and system_instructions is not None:
  system_instructions = None
  print('\x1b[31m(WARNING: System instructions ignored, gemini-1.0-pro does not support system instructions)\x1b[0m')

if model == 'gemini-1.0-pro' and temperature > 1:
  temperature = 1
  print('\x1b[34m(INFO: Temperature set to 1, gemini-1.0-pro does not support temperature > 1)\x1b[0m')

if system_instructions == '':
  system_instructions = None

api_key = userdata.get(api_key_n
```
