---
mathjax: true
id: 6140
title: Tensorflow GPU Setup on Local Machine
date: 2024-08-27
permalink: /dsblog/Tensorflow-gpu-setup-on-local-machine
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6140-Tensorflow-gpu-setup-on-local-machine.jpg
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

![Tensorflow GPU Setup on Local Machine](/assets/images/dspost/dsp6140-Tensorflow-gpu-setup-on-local-machine.jpg)

# Tensorflow GPU Setup on Local Machine

## Introduction

Tensorflow, pytorch are deep learning libraries or packages. Tensorflow is developed by google and pytorch is developed by Meta. There are some other but these are the most popular one among Machine Learning and Deep Learning Engineers. If you are doing anything significant in NLP, computer vision, voice processing you must have used this library. But the power of the these libraries lies in parallel metrics/tensor computation. For that they use hardwardes like GPU or TPU which has thousands of core and they designed purely for metrics/tensor processing. Intially they were used for gaming purpose but with the surge of AI these machines are in high use and used for model training and inference purpose.

To install any python libraries we can use pip or conda commands so we can use the same for these libraries. But the problem is many of learners do not have the GPU hardware machines. So even if you install it on cpu machine processing is very slow even with powerful machines. That is where google colab and kaggle come as handy tool for use. Google colab and kaggle provides us free hardware with limited hours GPU which can use used for experimenting or model training. Because these tools are designed for deep learning model training therefore by default they have tensorflow and pytorch installed. But these machines cannot be used for serious business purpose unless you pay them good money. The solution for that is you have your own dedicated GPU machine.

Now the actually trouble starts, you cannot install tensorflow or pytorch on the gpu machine as you were doing non-gpu machine. You need to make sure gpu hardware is available and being used within the development environemnt. But how do you do that? This article is about that!

## Enabling GPU for tensorflow 
Question: When I am using packages like tensorflow or pytorch on my local GPU machine then how to install it so that it is available for the development or deployment environment?

### Highlevel instructions 
When installing packages that support GPU, ensuring that the GPU is available and utilized in the development environment during model training involves several key steps. These steps ensure that your setup can take full advantage of the GPU for faster computations, especially in deep learning and machine learning tasks

- First you can decide which version of tensorflow or pytorch you want to use.
- You need to use gpu compatable version of these libraries NOT the cpu version of the library.
- Then check compatibility of tensorflow. https://www.tensorflow.org/guide/versions
- Install GPU drivers, CUDA, cuDNN, and the deep learning library (tensorflow, pytorch etc) are compatible. Mismatched versions can lead to errors or inefficient GPU usage. It is time consuming and frustrating if you are just playing with random versions, therefore to avoid this pain do your research and make decision.
- Use nvidia-smi to check whether GPU is being used or not.
- Launch jupyter notebook and write small code to check whether gpu is available within the jupyter environment or not.

## Basic Terms
What is GPU?   
The term "GPU" traditionally stands for "Graphics Processing Unit," primarily used for rendering graphics. However, modern GPUs, especially those from NVIDIA, have evolved to handle more than just graphics—they can perform general-purpose computing tasks as well, which is referred to as GPGPU (General-Purpose computing on Graphics Processing Units). With the help of GPGPU, CUDA extends the capabilities of GPUs beyond graphics. It allows developers to write programs that can run on the GPU, making use of its parallel processing power for tasks such as scientific calculations, machine learning, and deep learning.

What is the difference between Library and API?   
A library is a collection of pre-written code that provides specific functionalities you can directly use in your programs, like functions or classes. An API (Application Programming Interface) is a set of rules and protocols that defines how software components should interact, specifying how to use the functions and classes in a library without providing the actual implementation. Pandas, Numpy are library. In the context of NVIDIA cuBLAS (CUDA Basic Linear Algebra Subroutines) or cuDNN (CUDA Deep Neural Network) are libraries.

What is **NVIDIA Driver**?   
It acts as a bridge between the operating system and the NVIDIA GPU hardware. It allows the OS and applications to utilize the GPU for computing and rendering tasks.
Both CUDA and cuDNN require the NVIDIA driver to function, as it provides the basic communication and control capabilities with the GPU.

What is **CUDA (Compute Unified Device Architecture)**   
A parallel computing platform and programming model developed by NVIDIA. It enables developers to use NVIDIA GPUs for general-purpose processing (GPGPU), which significantly accelerates tasks like deep learning. It requires the NVIDIA driver. CUDA provides the necessary tools and libraries for interacting with the GPU and forms the foundation for libraries like cuDNN.

What is **cuDNN (CUDA Deep Neural Network Library)**?   
A GPU-accelerated library for deep learning, optimized for running operations common in neural networks, such as convolutions, pooling, normalization, and activation functions. It is created by NVIDIA. It is built on top of CUDA, it requires CUDA to function. cuDNN is specifically tailored to accelerate deep learning workloads and is used by many deep learning frameworks.

What is **TensorFlow**?   
An open-source deep learning framework developed by Google. It provides a comprehensive ecosystem for developing, training, and deploying machine learning models, including neural networks. There is another popular deep learning framework PyTorch, it is developed by Meta. TensorFlow can use cuDNN and CUDA for GPU acceleration, which allows TensorFlow to run computations on the GPU for faster processing. TensorFlow relies on cuDNN for optimized deep learning operations and on CUDA for GPU capabilities.

What is the relationship between NVIDIA Driver, CUDA, cuDNN, TensorFlow?   
- **NVIDIA Driver** is the base layer, enabling communication with the GPU.
- **CUDA** leverages the NVIDIA Driver to provide a platform for GPU-accelerated computing.
- **cuDNN** is built on top of CUDA to optimize deep learning tasks.
- **TensorFlow** uses both cuDNN and CUDA to perform efficient and accelerated deep learning operations on NVIDIA GPUs.

## What are different options for Tensorflow Installation?
1. Docker : There are dozens of images on dockerhub. Based on your need you can select a docker image from [the Link](https://hub.docker.com/r/tensorflow/tensorflow/tags).
  - Docker in windows. You can install and run the docker in Windows OS.
  - Docker in wsl/linux. You can install and run the docker in WSL/Linux.
2. pip : Another way to use tensorflow is install the binary (compiled program or wheel) of tensorflow on your machine. For this purpose you need to create your own virtual environment first, then activate that environment and then do the pip installation. Which tensorlfow version you want to install you need to decide that first.
  - Windows: This virtual env setting and pip installation can be done on windows os.
  - WSL/ Linux: You can also create virtual env in WSL/linux and do pip instllation in that environment.
3. Source : For this you can clone the tensorflow repository and build the wheel on your local machine and then install. For build you need other program on your machine which can compile the source code. Refer [Link](https://www.tensorflow.org/install/source). You need to install Bazel, Bazelisk is an easy way to install Bazel and automatically downloads the correct Bazel version for TensorFlow. Then Install Clang. Clang is a C/C++/Objective-C compiler that is compiled in C++ based on LLVM. If LLVM is not installed you need to install that as well. Some of these installation are just download, unzip, copy, paste and sometime you may need to install them properly.
  - Windows
  - WSL/Linux

## Installation using Docker
1. Install docker desktop.
2. Install GPU support
  1. Install NVIDIA Container Toolket. https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html
  2. Configure docker engine
  3. Configure containerd (for kubernetes)
    1. Configure container runtime
    2. Configuring podman
2. Run docker
  1. sudo systemctl restart docker
3. Pull image from dockerhug
  Let's assume you select tensorflow:latest-gpu-jupyter you can pull that image from dockerhub into your docker image, using following command.
  ```
  docker pull tensorflow/tensorflow:latest-gpu-jupyter
  ```
4. Run image in a container

## Installation on WSL/Linux

When installing packages that support GPU, ensuring that the GPU is available and utilized in the development environment during model training involves several key steps. These steps ensure that your setup can take full advantage of the GPU for faster computations, especially in deep learning and machine learning tasks. Here’s what you need to consider:

### 1. **Ensure Compatible GPU Drivers are Installed**

Before using GPU-enabled packages, make sure that the appropriate GPU drivers are installed. For NVIDIA GPUs, you need the NVIDIA driver that matches your GPU hardware.

- **Check Your GPU**: Identify your GPU using:
  ```bash
  nvidia-smi
  ```
  This command should list the GPU details if the drivers are correctly installed.
  
  Example output 
```
hari@Hari-MSI:/mnt/c/Users/hari_$ nvidia-smi

Tue Aug 27 17:21:37 2024
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 560.35.03              Driver Version: 560.81         CUDA Version: 12.6     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4070 ...    On  |   00000000:01:00.0 Off |                  N/A |
| N/A   53C    P8              2W /   80W |    7926MiB /   8188MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+

+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A        75      C   /python3.11                                 N/A      |
|    0   N/A  N/A       315      C   /python3.11                                 N/A      |
+-----------------------------------------------------------------------------------------+
```


- **Install the Latest Drivers**: Download and install the latest NVIDIA drivers from the [NVIDIA website](https://www.nvidia.com/Download/index.aspx). Make sure to select the correct driver version for your GPU model.

**This will ask you type of NVIDIA GPU (GeForce, Titan, GRID, Networking, NVIDIA RTX/Quadro, NVS, ION etc). It also you Notebooks series (RTX20, RTX30, RTX40, MX500 etc), laptop GPU (RTX 4050, RTX4060, RTX 4070 etc), OS (Windows 11, linux 64bit, FreeBDS x64 etc). After it will show available GeForce Game Ready Driver and NVIDIA Studio Driver page. You can select and download NVIDIA graphics driver.**

### 2. **Install CUDA Toolkit**

CUDA (Compute Unified Device Architecture) is a parallel computing platform and API model created by NVIDIA. Many deep learning libraries use CUDA to access GPU capabilities.

- **Download CUDA**: Install the CUDA toolkit that matches your NVIDIA driver version. This can be done from the [CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive).
- **Set Environment Variables**: Ensure that CUDA paths are set in your environment variables. For example, on Linux:
  ```bash
  export PATH=/usr/local/cuda-11.2/bin${PATH:+:${PATH}}
  export LD_LIBRARY_PATH=/usr/local/cuda-11.2/lib64\
                         ${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
  ```
### 3. **Install cuDNN (CUDA Deep Neural Network Library)**

cuDNN is a GPU-accelerated library for deep neural networks, providing highly tuned implementations for standard routines such as forward and backward convolution, pooling, normalization, and activation layers.

- **Download cuDNN**: You can download it from the [NVIDIA cuDNN page](https://developer.nvidia.com/cudnn).

- **Install cuDNN**: Follow the installation instructions for your operating system. This usually involves copying certain files to the CUDA toolkit directories.

### 4. **Install GPU-Compatible Python Libraries**

When using deep learning frameworks like TensorFlow, PyTorch, or others, you need to install the GPU-compatible versions of these libraries. Here's how to do this for some common libraries:

- **TensorFlow**: Install the GPU version of TensorFlow using:

  ```bash
  pip install tensorflow-gpu
  ```

- **PyTorch**: Visit the [PyTorch website](https://pytorch.org/get-started/locally/) and select your preferences (OS, package manager, Python version, CUDA version). For example:

  ```bash
  pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117
  ```

  This command installs PyTorch with CUDA 11.7 support.

### 5. **Verify GPU Availability in Your Environment**

Once all installations are complete, it’s crucial to verify that the GPU is detected and utilized by your deep learning framework:

- **TensorFlow**: Check if TensorFlow can access the GPU with:

  ```python
  import tensorflow as tf
  print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
  ```

- **PyTorch**: Verify GPU availability in PyTorch:

  ```python
  import torch
  print("Is CUDA available?", torch.cuda.is_available())
  print("CUDA Device Name:", torch.cuda.get_device_name(0))
  ```

### 6. **Common Troubleshooting Tips**

- **Version Compatibility**: Ensure the versions of your GPU drivers, CUDA, cuDNN, and the deep learning library are compatible. Mismatched versions can lead to errors or inefficient GPU usage.

- **Environment Variables**: Double-check that CUDA and cuDNN environment variables are correctly set and point to the appropriate directories.

- **Check Dependencies**: Use `nvidia-smi` to monitor GPU usage and ensure that your application is utilizing the GPU during model training.

### Example: Setting Up TensorFlow with GPU

Here’s a step-by-step example for setting up TensorFlow with GPU:

1. **Install NVIDIA Driver**:
   - Download and install the latest driver from the NVIDIA website suitable for your GPU model.

2. **Install CUDA Toolkit**:
   - Download CUDA 11.2 (if using TensorFlow 2.6) and follow the installation instructions.

3. **Install cuDNN**:
   - Download cuDNN for CUDA 11.2, extract the files, and copy them to the CUDA directories (e.g., `/usr/local/cuda-11.2/lib64`).

4. **Install TensorFlow-GPU**:
   - Install TensorFlow with GPU support using `pip`:
     ```bash
     pip install tensorflow-gpu==2.6.0
     ```

5. **Verify Setup**:
   - Run a simple TensorFlow script to check if the GPU is recognized:
     ```python
     import tensorflow as tf
     print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
     ```

By following these steps, you can ensure that your development environment is correctly set up to leverage the GPU for model training, thereby speeding up computations and improving performance.



## Important Commands
# How to know which ubunto version on my wsl?
``` 
command
hari@Hari-MSI:/mnt/c/Users/hari_$ lsb_release -a

Output
	No LSB modules are available.
	Distributor ID: Ubuntu
	Description:    Ubuntu 22.04.3 LTS
	Release:        22.04
	Codename:       jammy
	
command 
hari@Hari-MSI:/mnt/c/Users/hari_$ cat /etc/os-release

output
	PRETTY_NAME="Ubuntu 22.04.3 LTS"
	NAME="Ubuntu"
	VERSION_ID="22.04"
	VERSION="22.04.3 LTS (Jammy Jellyfish)"
	VERSION_CODENAME=jammy
	ID=ubuntu
	ID_LIKE=debian
	HOME_URL="https://www.ubuntu.com/"
	SUPPORT_URL="https://help.ubuntu.com/"
	BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
	PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
	UBUNTU_CODENAME=jammy
	
```

## How to install CUDA 11.8 and cuDNN 8.1 for tensorflow-2.17.0-gpu?

### 1. Use a Compatible TensorFlow Docker Image

To ensure compatibility, it's easiest to start with a TensorFlow Docker image that already includes the correct versions of CUDA and cuDNN. TensorFlow provides pre-built Docker images with specific versions of CUDA and cuDNN.

- **Pull the TensorFlow Docker Image**: Use a TensorFlow Docker image that is known to support CUDA 11.8 and cuDNN 8.1. The `tensorflow/tensorflow:2.17.0-gpu` tag typically comes with a compatible version of CUDA, but to specifically get CUDA 11.8, you might need to specify a tag like `tensorflow/tensorflow:2.17.0-gpu-cuda11.8`.

```bash
docker pull tensorflow/tensorflow:2.17.0-gpu-cuda11.8
```

### 2. Verify CUDA and cuDNN Versions Inside the Container

After pulling the Docker image, run the container and verify the CUDA and cuDNN versions:

- **Run the Docker Container**:

```bash
docker run --gpus all -it --rm -p 9999:8888 tensorflow/tensorflow:2.17.0-gpu-cuda11.8 bash
```

    This command starts an interactive bash session inside the container.

- **Check CUDA Version**:

Inside the container, check the CUDA version:

```bash
nvcc --version
```

This should show CUDA 11.8.


hari@Hari-MSI:/mnt/c/Users/hari_$ nvcc --version

nvcc: NVIDIA (R) Cuda compiler driver   
Copyright (c) 2005-2022 NVIDIA Corporation   
Built on Wed_Sep_21_10:33:58_PDT_2022   
Cuda compilation tools, release 11.8, V11.8.89   
Build cuda_11.8.r11.8/compiler.31833905_0   

This was the default cuda with my docker.    
nvcc: NVIDIA (R) Cuda compiler driver    
Copyright (c) 2005-2023 NVIDIA Corporation   
Built on Wed_Nov_22_10:17:15_PST_2023   
Cuda compilation tools, release 12.3, V12.3.107   
Build cuda_12.3.r12.3/compiler.33567101_0   

- **Check cuDNN Version**:

    To check the installed cuDNN version, you can use the following commands inside the container:

    ```bash
    cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
    ```

    This should confirm cuDNN 8.1.

### 3. Manually Install cuDNN 8.1 (if needed)

If you find that the cuDNN version isn't 8.1 (though it should be with the right Docker image), you can manually install it:

1. **Download cuDNN 8.1**: Go to the [NVIDIA cuDNN download page](https://developer.nvidia.com/cudnn) and download the cuDNN version 8.1 for CUDA 11.8.

```
# following the above link to download cuDNN I got this link commands below.
https://developer.nvidia.com/cudnn-downloads?target_os=Linux&target_arch=x86_64&Distribution=Ubuntu&target_version=20.04&target_type=deb_local

	wget https://developer.download.nvidia.com/compute/cudnn/9.3.0/local_installers/cudnn-local-repo-ubuntu2004-9.3.0_1.0-1_amd64.deb
	sudo dpkg -i cudnn-local-repo-ubuntu2004-9.3.0_1.0-1_amd64.deb
	sudo cp /var/cudnn-local-repo-ubuntu2004-9.3.0/cudnn-*-keyring.gpg /usr/share/keyrings/
	sudo apt-get update
	sudo apt-get -y install cudnn
```

2. **Transfer the cuDNN File into the Docker Container**:

    ```bash
    docker cp /path/to/cudnn-linux-x86_64-8.1.x.x-cuda11.8-archive.tar.xz <container_id>:/root/
    ```

3. **Install cuDNN Inside the Docker Container**:

    ```bash
    tar -xzvf cudnn-linux-x86_64-8.1.x.x-cuda11.8-archive.tar.xz
    cp cudnn-linux-x86_64-8.1.x.x-cuda11.8-archive/include/* /usr/local/cuda/include/
    cp cudnn-linux-x86_64-8.1.x.x-cuda11.8-archive/lib/* /usr/local/cuda/lib64/
    ldconfig
    ```

### 4. Run Jupyter Notebook

Finally, start Jupyter Notebook in the container:

```bash
jupyter notebook --ip=0.0.0.0 --allow-root
```

You should be able to access Jupyter at `http://localhost:9999`.

### Summary

- Use a TensorFlow Docker image with CUDA 11.8 support.
- Verify the CUDA and cuDNN versions inside the container.
- Manually install cuDNN 8.1 if it's not already included.
- Run Jupyter Notebook to start your development.

# nvcc --version
	nvcc: NVIDIA (R) Cuda compiler driver
	Copyright (c) 2005-2023 NVIDIA Corporation
	Built on Wed_Nov_22_10:17:15_PST_2023
	Cuda compilation tools, release 12.3, V12.3.107
	Build cuda_12.3.r12.3/compiler.33567101_0

**Note:** Check TensorFlow's Compatibility: Visit the official TensorFlow compatibility guide to verify which CUDA and cuDNN versions are supported by TensorFlow 2.17.0. As of recent releases, TensorFlow 2.17.0 is generally compatible with:

CUDA: 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8
cuDNN: 8.1 and later versions



## How to install Jupyter in docker container?

### Steps to Ensure Jupyter is Installed and Accessible:

1. **Start the TensorFlow Container in Interactive Mode:**
   Run the container with a bash shell so you can install Jupyter:

   ```bash
   docker run --gpus all -it --rm -p 9999:8888 tensorflow/tensorflow:2.17.0-gpu bash
   ```

2. **Install Jupyter:**
   Once inside the container, install Jupyter Notebook using `pip`:

   ```bash
   pip install jupyter
   ```

3. **Verify Jupyter Installation:**
   After installation, check if Jupyter is in the PATH by running:

   ```bash
   which jupyter
   ```

   If this command returns a path (e.g., `/usr/local/bin/jupyter`), Jupyter is successfully installed.

4. **Run Jupyter Notebook:**
   Start the Jupyter Notebook server:

   ```bash
   jupyter notebook --ip=0.0.0.0 --allow-root
   ```

   If you see the Jupyter server starting and showing URLs (as before), this means it is working correctly.

5. **Access Jupyter Notebook:**
   - Open your browser and go to [http://localhost:9999](http://localhost:9999).
   - Use the token provided by Jupyter to log in.

### Troubleshooting:

- **Container Restart:** If you exit the container, any installed packages will be lost because of the `--rm` flag. For persistent changes, consider building a custom Docker image or running the container without `--rm` and then committing the changes.

- **Creating a Custom Docker Image (Optional):**
  If you want a persistent environment, you can create a custom Docker image that includes Jupyter:

  Create a `Dockerfile` with the following content:

  ```Dockerfile
  FROM tensorflow/tensorflow:2.17.0-gpu
  RUN pip install jupyter
  ```

  Build and run the Docker image:

  ```bash
  docker build -t my-tf-jupyter .
  docker run --gpus all -it --rm -p 9999:8888 my-tf-jupyter jupyter notebook --ip=0.0.0.0 --allow-root
  ```
Above command will show one url on the screen, along with port and token. You can go on browser use this information to access the jupyter notebook.   

You can access this from visual code as well. For that purpose on the kernel when IDE ask you for jupyter server you can give this url information.

## Test GPU Utilization

```
import tensorflow as tf
print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))

# Simple matrix multiplication to test GPU
with tf.device('/GPU:0'):
    a = tf.constant([[1.0, 2.0], [3.0, 4.0]])
    b = tf.constant([[1.0, 1.0], [0.0, 1.0]])
    c = tf.matmul(a, b)
print(c)

```

## If you want to disable oneDNN custom operations for consistency:
```
export TF_ENABLE_ONEDNN_OPTS=0
```

You can set this in your Docker container or your host environment if you're running scripts directly


## Where should I install CUDA and cuDNN libaries 
- If you are using tensorflow from docker then 
  - The CUDA and cuDNN libraries must be installed inside the Docker container for TensorFlow to use them.
- If you are using tensorflow on your windows then 
	- The CUDA and CuDNN libraries must be installed inside windows environment.
- If you are using tensorflow on linux/wsl then 
	- it must installed on liux/wsl 
	
## How to build new docker? Or update existing docker.
Create a folder and go into that folder    
Create a Dockerfile. Write all the command in this.   
go on the command prompt and execute command: docker build -t my-tf-jupyter .   

## What should be the content of Dockerfile?
FROM tensorflow/tensorflow:2.17.0-gpu    
RUN pip install jupyter
