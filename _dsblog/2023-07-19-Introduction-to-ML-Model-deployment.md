---
mathjax: true
id: 6077
title: Introduction to ML Model Deployment
date: 2023-07-19
permalink: '/dsblog/Introduction-to-ML-Model-deployment'
tags: [MLOps, AI Deployment, Model Deployment] 
categories:
  - dsblog

header:
    teaser: /assets/images/dspost/dsp6077-Introduction-to-ML-Model-deployment.jpg
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

![Introduction to AI Model Deployement](/assets/images/dspost/dsp6077-Introduction-to-ML-Model-deployment.jpg)  

# Introduction to AI Model deployment

## Big Players
- Amazon
    - Amazon has many products and one of their product is **AWS Cloud**. Under this product they sell IT infrastructure (storage, memory, network, VM, webhosting etc.) 
    - **Amazon SageMaker** is Cloud based Machine Learning Platform, and this is one of the product under AWS Cloud.
    - Amazon SageMaker can be used to train AI model, host AI model, monitor the model and hosts many other services which any Data Science project need from data gathering to model serving.
    - AWS is oldest cloud service provider in the market.
    - AWS Sagemaker was launched in Nov'17.
- Google
    - Google has hundreds of products like gmail, youtube, google drive etc. One of their product is called **Google Cloud**. Under this product they sell IT infrastrcture like Amazon sells under AWS.
    - **VertexAI** is Cloud based Machine Learning platform of Google. VertexAI is part of Google Cloud.
    - VertexAI can be used to train AI Model,host AI model, monitor the model etc.
    - VertexAI was launched in Jun'21
- Microsoft
    - Like Amazon's cloud platform which is called AWS Cloud, Microsoft's cloud plateform is called **Azure**.
    - Microsoft's AI product is called **Azure Machine Learning**.
    - Today (Jul'23) Azure Machine Learning has has most of the capabilites than any other player's AI product.
    - Azure Machine Learning was launched Feb'14

## What is GenAI?
There are many kinds of AI models like classifier models, regressor models, clustering models, reinforcement models, etc. An AI model which has the ability to generate text, images, video, and music is called GenAI. They all take inspiration from the human brain, therefore they all have neural network (NN) architecture. There are dozens (if not hundreds) types of NN architecture that can be used to create different kinds of AI models. The type of NN architecture depends upon the data which is used for developing the model and the problem which we want to solve using AI model. Researchers in universities or big corporations like Google, Facebook, Amazon, and Microsoft keep developing new architecture, and using these architectures they develop the foundational models. Once foundational models are developed, they release a research paper. In this, they inform the world what architecture they used, what data they used, what parameters (weights & biases) the model has learned, what are the results of their product and compare that with other existing models. They can develop these foundational models with one set of hyperparameters, and they can release these foundational models of different sizes (it depends upon the number of parameters used). AI product builders pick up these foundational models and fine-tune these based on the exact business problem in their hands. Which foundational model do they choose, it also depends upon the size of the model, the kind of data it has used to create those foundational models, and what was the performance of the model on a similar task which the product developer want to solve.


### What is Large Language Model?
Large Language Models or LLM are the foundational models developed by researchers. They are very big in the size. For example, GPT3 was a 175 bn parameter model, PaLM was 540 bn parameter model. You cannot load these models on a normal machine for the prediction, forget about fine-tuning or customization. Therefore, most of the time you will find these LLMs are made available as service from the cloud providers like AWS SageMaker, Azure Machine Learning, VertexAI etc.


- LLaMa (Large Language Model Meta AI) is LLM family of state-of-the-art open-access large language models released by Meta. It is 65 bn parameter model. Other Models at Meta are [Meta Models at HuggingFace](https://huggingface.co/facebook)
- GPT is LLM family of state-of-art model language models developed by OpenAI. ChatGPT (OpenAI's very famous Product) is based on GPT3.5 model. Other models of OpenAI are [OpenAI Models at HuggingFace](https://huggingface.co/openai)
- PaLM is LLM family state of the art model from Google. Other Models at google are [VertexAI Model Garden](/dsblog/model-garden-of-vertexai)
https://huggingface.co/google


### What is Foundational Model?
A foundational model is developed by researchers using a huge corpus of different types of data. They are built of unique architecture. These can use fine-tuned for many kinds of downstream tasks like classification, generation, translation, etc.


- **Foundational Models Developed by OpenAI:** clip-vit, diffusers-cd, diffusers-ct, imagegpt, GPT, jukebox, shap-e, shap, whisper
- **Foundational Models Developed by Microsoft:** amos, beit, BioGPT, BiomedCLIP, BiomedNLP, BiomedVLP, bloom, ClimaX, cocoLM, CodeBert, CodeExecutor, CodeGPT, CodeReviewer, conditional, cvt, deberta, DialoGPT, DialogRPT, dit, dolly, focalnet, git, GODEL, graphcodebert, infoxlm, layoutlm, longcoder, lts, markuplm, mdeberta, MiniLM, mpnet, Multilingual, Promptist, prophetnet, reacc, resnet, speecht5, SportsBERT, ssr, swin, table, tapex, trocr, unihanlm, unilm, unispeech, unixcoder, vq, wavlm, xclip, xdoc, xlm, xprophetnet, xtremedistil
- **Foundational Models of Google:** BERT, bert2bert, bigbird, bit, byt5, canine, ddpm, deeplabv3, deplot, efficientnet, electra, flan, fnet, long, matcha, maxim, mobileBERT, mobilenet, mt5, multiberts, muril, music, ncsnpp, owlvit, pegasus, pix2struct, realm, reformer, rembert, roberta2roberta, switch, T5, tapas, ul2, umt5, VIT, vivit
- **Foundational Models Developed by Meta:** BART blenderbot, contriever, convnext, convnextv2, data2vec, deformable, deit, DETR, dino, dinov2, DiT, dpr, dragon, encodec, esm, esm1b, esm1v, esm2, esmfold, FairBERTa, fastspeech2, fastText, flava, galactica, genre, hubert, ic-gan, incoder, levit, m2m100, mask2former, maskformer, mBart, mcontriever, mgenre, MMS, muppet, musicgen, nllb, npm, opt, perturber, rag, regnet, roberta, roscoe, s2t, sam, spar, stylenerf, tart, textless, timesformer, tts-transformer, unit-hifigan, vc1, vit, wav2vec2, wmt19, wmt21, xglm, xlm, xm, xmod

### Deploying a LLM on SageMaker

#### 1. Library Installation and Setup
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

#### 2. Retrieve the necessary SageMaker container for TGI deployment

```python 
from sagemaker.huggingface import get_huggingface_llm_image_uri

# retrieve the llm image uri
llm_image = get_huggingface_llm_image_uri(
  "huggingface",
  version="0.8.2"
)

# print ecr image uri
print(f"llm image uri: {llm_image}")
```

#### 3. Load the Model
```python
import json
from sagemaker.huggingface import HuggingFaceModel

# Define Model and Endpoint configuration parameter
config = {
  'HF_MODEL_ID': "decapoda-research/llama-7b-hf", # model_id from hf.co/models
  'SM_NUM_GPUS': json.dumps(number_of_gpu), # Number of GPU used per replica
  'MAX_INPUT_LENGTH': json.dumps(1024),  # Max length of input text
  'MAX_TOTAL_TOKENS': json.dumps(2048),  # Max length of the generation (including input text)
}
```

#### 4. Create HuggingFaceModel with the image uri
```python
llm_model = HuggingFaceModel(
  role=role,
  image_uri=llm_image,
  env=config
)
```

#### 5. Deploy the Model on SageMaker Instance (Creating Endpoint)
```python
instance_type = "ml.g5.12xlarge"
number_of_gpu = 4
health_check_timeout = 300

llm = llm_model.deploy(
  initial_instance_count=1,
  instance_type=instance_type,
  container_startup_health_check_timeout=health_check_timeout,
)
```

#### 6. Test your deployment
```python
llm.predict({
    "inputs": "My name is Hari Thapliyal and I am Data Scientist.",
})
```

### Model Installation Locaion
Model can be installed on Local machine or on Public cloud or private cloud. Model can deployed on Linux, MacOS, Andorid, iPhone, or Windows Machine

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

### Open-Source Deep Learning Model Development Frameworks
- **PyTorch** deep learning framework developed by Facebook's AI Research (FAIR) lab. It has gained significant popularity among researchers and developers due to its flexibility, dynamic computation graph, and intuitive API. PyTorch is known for its ease of use and strong support for custom operations and dynamic neural networks. It is good for quick AI model development, fast prototyping is possible.
- **TensorFlow 2.0+**: TensorFlow, underwent significant changes with the release of TensorFlow 2.0. It now includes eager execution by default, making it more intuitive and Pythonic. TensorFlow's updated version has better integration with Keras, simplifying the process of building and training models.
- **Keras** deep learning API written in Python that acts as a high-level interface to other deep learning frameworks, including TensorFlow, Pytorch and Microsoft Cognitive Toolkit (CNTK). It provides a simple and user-friendly interface for building and training neural networks, making it a popular choice for beginners and quick prototyping.
- **Apache MXNet** deep learning framework developed by Apache Software Foundation. It offers both symbolic and imperative programming models, allowing developers to choose between static and dynamic computation graphs. MXNet is designed for efficiency and scalability, making it suitable for a wide range of applications.
- **Gluon** is an interface for Apache MXNet that provides a high-level abstraction for building deep learning models. It aims to combine the ease of use of dynamic computation graphs with the performance advantages of static computation graphs.
- **Caffe** deep learning framework developed by Berkeley Vision and Learning Center (BVLC). It is known for its efficiency, especially for convolutional neural networks (CNNs) used in computer vision tasks. However, compared to newer frameworks, Caffe may be less flexible and harder to customize.
- **Chainer** is an open-source deep learning framework developed by Preferred Networks. Like PyTorch, Chainer emphasizes dynamic computation graphs and flexibility, allowing users to define complex neural network architectures more easily.
- **Deep Java Library (DJL)** is an open-source, high-level, engine-agnostic Java framework for deep learning.
- **[ParlAI](https://parl.ai/docs/zoo.html)** : ParlAI (pronounced “par-lay”) is a python framework for sharing, training and testing dialogue models, from open-domain chitchat, to task-oriented dialogue, to visual question answering.

### Format Used for Representing Deep Learning Models.
- **ONNX** (Open Neural Network Exchange): It allows interoperability between different deep learning frameworks, enabling users to move models between frameworks without rebuilding them from scratch. ONNX is joint effort of Microsoft, AWS, FAIR and IBM.
- **TensorFlow SavedModel** is a format specific to TensorFlow, and it is used for saving and restoring TensorFlow models. It includes the model's architecture, weights, and metadata, making it easy to save a trained model and load it later for inference or further training.
- **PyTorch JIT** (Just-In-Time) compilation allows users to export their models in a serialized format that can be later loaded and executed without the need for the original Python code. The JIT-compiled model can be used in production without requiring the entire PyTorch framework to be present.
- **HDF5 or H5** is a data format commonly used for storing and sharing large datasets and is also used to save deep learning models. Keras, which is integrated with TensorFlow, commonly uses the ".h5" format to save models. The HDF5 format allows saving the model architecture, weights, optimizer state, and other metadata.
- **MLIR** (Multi-Level Intermediate Representation) is an intermediate representation developed by LLVM that aims to provide a common format for various machine learning frameworks. While still in its early stages, MLIR holds promise for representing models in a unified format and enabling efficient transformations and optimizations across different frameworks.
- **CoreML** is a format developed by Apple for representing machine learning models specifically for deployment on Apple devices like iPhones and iPads. It allows developers to integrate pre-trained models into their iOS and macOS applications.
- **Computation Graph Configuration** is developed by Deeplearning4j (DL4J). It  is a deep learning framework for Java, and it uses a specific configuration format for serializing its computation graphs, making it portable across different platforms.


### Deep Learning Model Inference Libraries 
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

### AI Model Zoos
- [ParlAI](https://parl.ai/docs/zoo.html) or https://github.com/facebookresearch/ParlAI
- [Google Model Garden](https://cloud.google.com/model-garden)
- [Huggingface](https://huggingface.co/?trending=model)
- [TF Hub](https://tfhub.dev/)
- [Tensorflow on Git](https://github.com/tensorflow/models/tree/master/official)
- [PaperwithCode](https://paperswithcode.com/)
- [OpenVino Toolkit](https://github.com/openvinotoolkit/open_model_zoo)
- [Deci.ai](https://deci.ai/resources/videos/tutorial-infery/)
- [Jetson Zoo](https://www.elinux.org/Jetson_Zoo#Model_Zoo)
- [Modelzoo](https://modelzoo.co/)
- [Mediapipe on github](https://google.github.io/mediapipe/)
- [Magenta on github](https://github.com/magenta/magenta/tree/main/magenta/models)
- [Awesome CoreML on github](https://github.com/likedan/Awesome-CoreML-Models)
- [Pinto Model zoo on github](https://github.com/PINTO0309/PINTO_model_zoo)
- [ONNX](https://github.com/onnx/models)
- [CatalyZex](https://www.catalyzex.com/)

