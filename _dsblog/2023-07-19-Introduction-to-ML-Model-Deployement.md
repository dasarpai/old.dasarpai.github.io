---
mathjax: true
id: 6077
title: Introduction to ML Model Deployement
date: 2023-07-19
permalink: '/dsblog/Introduction-to-ML-Model-Deployement'
tags: [MLOps, AI Deployment, Model Deployment] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6077-Introduction-to-ML-Model-Deployement.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![Introduction to AI Model Deployement](/assets/images/dspost/dsp6077-Introduction-to-ML-Model-Deployement.jpg)  

# Introduction to AI Model Deployement

Amazon SageMaker is Cloud is Machine Learning Platform from AWS Cloud.
Amazon SageMaker can host any ML model.


LlaMa is a family of state-of-the-art open-access large language models released by Meta. Recently Meta releaseed LlaMa. 

```python
!pip install "sagemaker==2.163.0" --upgrade --quiet

import sagemaker
import boto3
sess = sagemaker.Session()

sagemaker_session_bucket=None
if sagemaker_session_bucket is None and sess is not None:
    # set to default bucket if a bucket name is not given
    sagemaker_session_bucket = sess.default_bucket()

try:
    role = sagemaker.get_execution_role()
except ValueError:
    iam = boto3.client('iam')
    role = iam.get_role(RoleName='sagemaker_execution_role')['Role']['Arn']

sess = sagemaker.Session(default_bucket=sagemaker_session_bucket)

print(f"sagemaker role arn: {role}")
print(f"sagemaker session region: {sess.boto_region_name}")
```

## Model Installation Locaion
- Local Machine
    - Linux
    - MacOS
    - Windows
-  Cloud
    - Google Cloud
    - AWS Cloud
    - Azure Cloud
- Cloud AI Platform
    - AWS SageMaker
    - VertexAI
    - Azure AI

## Open-Source Deep Learning Model Development Frameworks
- **PyTorch** deep learning framework developed by Facebook's AI Research (FAIR) lab. It has gained significant popularity among researchers and developers due to its flexibility, dynamic computation graph, and intuitive API. PyTorch is known for its ease of use and strong support for custom operations and dynamic neural networks. It is good for quick AI model development, fast prototyping is possible.
- **TensorFlow 2.0+**: TensorFlow, underwent significant changes with the release of TensorFlow 2.0. It now includes eager execution by default, making it more intuitive and Pythonic. TensorFlow's updated version has better integration with Keras, simplifying the process of building and training models.
- **Keras** deep learning API written in Python that acts as a high-level interface to other deep learning frameworks, including TensorFlow, Pytorch and Microsoft Cognitive Toolkit (CNTK). It provides a simple and user-friendly interface for building and training neural networks, making it a popular choice for beginners and quick prototyping.
- **Apache MXNet** deep learning framework developed by Apache Software Foundation. It offers both symbolic and imperative programming models, allowing developers to choose between static and dynamic computation graphs. MXNet is designed for efficiency and scalability, making it suitable for a wide range of applications.
- **Gluon** is an interface for Apache MXNet that provides a high-level abstraction for building deep learning models. It aims to combine the ease of use of dynamic computation graphs with the performance advantages of static computation graphs.
- **Caffe** deep learning framework developed by Berkeley Vision and Learning Center (BVLC). It is known for its efficiency, especially for convolutional neural networks (CNNs) used in computer vision tasks. However, compared to newer frameworks, Caffe may be less flexible and harder to customize.
- **Chainer** is an open-source deep learning framework developed by Preferred Networks. Like PyTorch, Chainer emphasizes dynamic computation graphs and flexibility, allowing users to define complex neural network architectures more easily.
- **Deep Java Library (DJL)** is an open-source, high-level, engine-agnostic Java framework for deep learning.
- **[ParlAI](https://parl.ai/docs/zoo.html)** : ParlAI (pronounced “par-lay”) is a python framework for sharing, training and testing dialogue models, from open-domain chitchat, to task-oriented dialogue, to visual question answering.

## Format Used for Representing Deep Learning Models.
- **ONNX** (Open Neural Network Exchange): It allows interoperability between different deep learning frameworks, enabling users to move models between frameworks without rebuilding them from scratch. ONNX is joint effort of Microsoft, AWS, FAIR and IBM.
- **TensorFlow SavedModel** is a format specific to TensorFlow, and it is used for saving and restoring TensorFlow models. It includes the model's architecture, weights, and metadata, making it easy to save a trained model and load it later for inference or further training.
- **PyTorch JIT** (Just-In-Time) compilation allows users to export their models in a serialized format that can be later loaded and executed without the need for the original Python code. The JIT-compiled model can be used in production without requiring the entire PyTorch framework to be present.
- **HDF5 or H5** is a data format commonly used for storing and sharing large datasets and is also used to save deep learning models. Keras, which is integrated with TensorFlow, commonly uses the ".h5" format to save models. The HDF5 format allows saving the model architecture, weights, optimizer state, and other metadata.
- **MLIR** (Multi-Level Intermediate Representation) is an intermediate representation developed by LLVM that aims to provide a common format for various machine learning frameworks. While still in its early stages, MLIR holds promise for representing models in a unified format and enabling efficient transformations and optimizations across different frameworks.
- **CoreML** is a format developed by Apple for representing machine learning models specifically for deployment on Apple devices like iPhones and iPads. It allows developers to integrate pre-trained models into their iOS and macOS applications.
- **Computation Graph Configuration** is developed by Deeplearning4j (DL4J). It  is a deep learning framework for Java, and it uses a specific configuration format for serializing its computation graphs, making it portable across different platforms.


## Deep Learning Model Inference Libraries 
There are several products and libraries designed to accelerate deep learning inference and optimize model performance on specific hardware. These products and libraries focus on optimizing and accelerating deep learning inference on specific hardware platforms, allowing developers to deploy their models with improved performance and efficiency on target devices. Depending on the hardware architecture and deployment environment, choosing the right product or library can significantly impact the inference speed and overall user experience.

- **OpenVINO** (Open Visual Inference & Neural Network Optimization) is an open-source toolkit developed by **Intel** that provides hardware-accelerated deep learning inference for Intel CPUs, integrated GPUs, and other hardware accelerators. It optimizes pre-trained models from various deep learning frameworks and deploys them efficiently on Intel-powered devices.
- **DNNL** (Deep Neural Network Library) formerly MKL-DNN, is a library developed by **Intel** to optimize deep learning workloads on Intel CPUs. It provides efficient implementations of primitives and functions for deep learning, improving performance on Intel architectures.
- **nGraph** is an open-source deep learning compiler developed by **Intel** it optimizes models for various hardware targets, including CPUs, GPUs, and specialized accelerators. It enables efficient execution of deep learning workloads across different hardware architectures.
- **TensorRT** (Tensor Runtime) is a high-performance deep learning inference optimizer and runtime library developed by **NVIDIA**.
- **Core ML** is a framework by *Apple** that allows developers to integrate pre-trained machine learning models into iOS, macOS, watchOS, and tvOS applications. It supports hardware acceleration using the Apple Neural Engine on compatible devices, making it ideal for on-device inference.
- **SNPE** (Snapdragon Neural Processing Engine) is a deep learning inference SDK developed by **Qualcomm** for deployment on devices powered by Qualcomm Snapdragon processors. It optimizes deep learning models and accelerates inference on Snapdragon CPUs, GPUs, and DSPs.
- **TVM** (Tensor **Virtual** Machine) is open-source deep learning compiler stack developed by the **Apache Software Foundation**. It optimizes and deploys machine learning models on various hardware targets, including CPUs, GPUs, and specialized accelerators. It supports integration with different frameworks like TensorFlow, PyTorch, and ONNX.
- **MIVisionX** is developed by **AMD**. It includes tools and libraries for deep learning inference, image processing, and computer vision tasks, optimized for AMD GPUs and CPUs.
- **DJL Serving** is a high performance universal stand-alone model serving solution. It is deeloped by **DJL**
- **Huggingface Text Generation Interface (TGI)**
- [**Amazon SageMaker JumpStart**](https://aws.amazon.com/sagemaker/jumpstart/getting-started) : Built-in algorithms with pretrained models from model hubs, pretrained foundation models, and prebuilt solutions to solve common use cases

## AI Model Zoo
- https://parl.ai/docs/zoo.html or https://github.com/facebookresearch/ParlAI
- https://cloud.google.com/model-garden
- https://huggingface.co/?trending=model
- https://tfhub.dev/
- https://github.com/tensorflow/models/tree/master/official
- https://paperswithcode.com/
- https://github.com/openvinotoolkit/open_model_zoo
- https://deci.ai/resources/videos/tutorial-infery/
- https://www.elinux.org/Jetson_Zoo#Model_Zoo
- https://modelzoo.co/
- https://google.github.io/mediapipe/
- https://github.com/magenta/magenta/tree/main/magenta/models
- https://github.com/likedan/Awesome-CoreML-Models
- https://github.com/PINTO0309/PINTO_model_zoo
- https://github.com/onnx/models
- https://www.catalyzex.com/

