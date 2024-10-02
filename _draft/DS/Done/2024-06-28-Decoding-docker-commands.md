---
mathjax: true
id: 6117
title: Decoding docker commands
date: 2024-06-28
permalink: /dsblog/Decoding-docker-commands
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6117-Decoding-docker-commands.jpg
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

![Decoding-docker-commands](/assets/images/dspost/dsp6117-Decoding-docker-commands.jpg)

# Decoding docker commands

## Is this article for me?
If you are coming from IT Infrastructure background and have solid experience in containerization you can skip this. But if you are seeking to learn any of the following topic then keep reading.   
1. What is docker image, what is docker container, what is docker?
1. How to create docker image and docker container?
1. What is the use of docker compose?
1. What is the meaning of code written inside Dockerfile?
1. How to create a new python code and put inside the docker?
1. How to ensure my docker uses my GPU?
1. How to access my host machine's local drive within the docker?
1. How to send data out from docker to local host machine's folder?
1. How to execute command inside docker shell?
1. How to install python packages inside docker?
1. What are the common docker commands?

## Introduction: Why this article?
Coming from a non-infrastructure background, I found working with Docker frustrating at first. The commands seemed cryptic, and complex environments often required downloading large images, creating custom ones, or modifying existing ones—only to face disappointing results. Investing so much time without clear success, or not knowing if Docker is the right solution from the start, can be disheartening. This article aims to demystify Docker, making it easier to understand and use effectively. After you learn the docker you will find that docker is the simplest thing in computer world to make development, testing and deployment more simple. Experts may be laughing at me. :)

## What is docker?
Docker is a platform that allows developers to automate the deployment, scaling, and management of applications inside lightweight, portable containers. Containers bundle the application code along with its dependencies, libraries, and configurations, ensuring that the application runs consistently across different computing environments. Docker helps in isolating applications from their environments, making development, testing, and deployment more efficient. It uses a client-server architecture, where the Docker client communicates with the Docker daemon, which performs the heavy lifting of building, running, and distributing containers.

Docker can be highly beneficial during development. Here are some ways it can be used:

1. **Environment Consistency**: Docker ensures that the application runs the same way in all environments (development, testing, production) by packaging it with its dependencies.

2. **Isolation**: It allows you to run multiple applications and services with different dependencies on the same machine without conflict.

3. **Collaboration**: Developers can share their development environments easily, ensuring that everyone works with the same setup.

4. **Scalability**: Docker makes it easy to scale applications by replicating containers.

Using Docker in development helps streamline workflows, reduces "it works on my machine" issues, and speeds up the deployment process. Manytime when it is difficult or time consuming to setup a develop environment that too on every developer's machine we can create one docker image and use that image to setup the development environment.

## Image vs Container
In Docker, an image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software: the code, runtime, libraries, environment variables, and configurations. An image is immutable, meaning it cannot be changed once created.

A container is a running instance of an image. It encapsulates the application and its environment in a way that isolates it from other containers and the host system. Containers can be started, stopped, and modified independently, and they provide a consistent environment across different platforms. 

In the language of OOPs if image is class then container is object. But container can be modified and then published back (in dockerhub) as a different image. After updating a container, you can create a new image based on the changes made within that container. Here’s how you can do it:

1. **Start a Container**: First, run a container from an existing image.

    ```bash
    docker run -it <image-name> /bin/bash
    ```

2. **Make Changes**: Inside the running container, make the necessary changes, such as installing new software or modifying configurations.

3. **Commit the Changes**: Once the changes are made, you can create a new image from the updated container using the `docker commit` command.

    ```bash
    docker commit <container-id> <new-image-name>
    ```

4. **Save the New Image**: This creates a new image with the changes you've made, which can then be used to run new containers with the updated setup.

Using the `docker commit` command allows you to capture the current state of a container as a new image. This process is useful for saving updates, configurations, or changes made to a container for future use.

## Decoding Dockerfile
All the instruction to create a docker are writting in a Dockerfile. You need to create a project folder, say "My-Awesome-Project". Within this your need to create a file "Dockerfile", exactly same name without change in lower or capital letters. A example code is below.

```python
FROM --platform=amd64 nvcr.io/nvidia/cuda:12.1.0-devel-ubuntu22.04 as base

WORKDIR /workspace

RUN apt update && \
    apt install -y python3-pip python3-packaging \
    git ninja-build && \
    pip3 install -U pip

# Tweak this list to reduce build time
# https://developer.nvidia.com/cuda-gpus
ENV TORCH_CUDA_ARCH_LIST "7.0;7.2;7.5;8.0;8.6;8.9;9.0"

RUN pip3 install "torch==2.1.1"

# This build is slow but NVIDIA does not provide binaries. Increase MAX_JOBS as needed.
RUN pip3 install "git+https://github.com/stanford-futuredata/megablocks.git"
RUN pip3 install "git+https://github.com/vllm-project/vllm.git"
RUN pip3 install "xformers==0.0.23" "transformers==4.36.0" "fschat[model_worker]==0.2.34"

RUN git clone https://github.com/NVIDIA/apex && \
    cd apex && git checkout 2386a912164b0c5cfcd8be7a2b890fbac5607c82 && \
    sed -i '/check_cuda_torch_binary_vs_bare_metal(CUDA_HOME)/d' setup.py && \
    python3 setup.py install --cpp_ext --cuda_ext


COPY entrypoint.sh .

RUN chmod +x /workspace/entrypoint.sh

ENTRYPOINT ["/workspace/entrypoint.sh"]
```

Let's understand each line of the provided Dockerfile:

```Dockerfile
FROM --platform=amd64 nvcr.io/nvidia/cuda:12.1.0-devel-ubuntu22.04 as base
```
- **FROM**: Specifies the base image for the Docker image. This one is using the `cuda:12.1.0-devel-ubuntu22.04` image from NVIDIA's container registry (`nvcr.io`), targeting the AMD64 platform.
- **as base**: This part names the stage "base". This is useful for multi-stage builds, but here it just labels the stage.

```Dockerfile
WORKDIR /workspace
```
- **WORKDIR**: Sets the working directory for subsequent instructions to `/workspace`.

```Dockerfile
RUN apt update && \
    apt install -y python3-pip python3-packaging \
    git ninja-build && \
    pip3 install -U pip
```
- **RUN**: Executes commands in a new layer on top of the current image. Here, it:
  1. Updates the package lists.
  2. Installs `python3-pip`, `python3-packaging`, `git`, and `ninja-build` packages.
  3. Upgrades `pip` using `pip3 install -U pip`.

```Dockerfile
# Tweak this list to reduce build time
# https://developer.nvidia.com/cuda-gpus
ENV TORCH_CUDA_ARCH_LIST "7.0;7.2;7.5;8.0;8.6;8.9;9.0"
```
- **ENV**: Sets environment variables. `TORCH_CUDA_ARCH_LIST` specifies the CUDA compute capabilities for PyTorch. This can reduce build time by limiting the architectures for which code is generated.

```Dockerfile
RUN pip3 install "torch==2.1.1"
```
- **RUN**: Installs a specific version of PyTorch (`2.1.1`) using `pip3`.

```Dockerfile
# This build is slow but NVIDIA does not provide binaries. Increase MAX_JOBS as needed.
RUN pip3 install "git+https://github.com/stanford-futuredata/megablocks.git"
RUN pip3 install "git+https://github.com/vllm-project/vllm.git"
RUN pip3 install "xformers==0.0.23" "transformers==4.36.0" "fschat[model_worker]==0.2.34"
```
- **RUN**: Executes multiple `pip3 install` commands to install packages from GitHub repositories and specific versions of packages from PyPI:
  1. Installs `megablocks` from a GitHub repository.
  2. Installs `vllm` from a GitHub repository.
  3. Installs specific versions of `xformers`, `transformers`, and `fschat` with the `model_worker` extra.

```Dockerfile
RUN git clone https://github.com/NVIDIA/apex && \
    cd apex && git checkout 2386a912164b0c5cfcd8be7a2b890fbac5607c82 && \
    sed -i '/check_cuda_torch_binary_vs_bare_metal(CUDA_HOME)/d' setup.py && \
    python3 setup.py install --cpp_ext --cuda_ext
```
- **RUN**: Clones the NVIDIA Apex repository, checks out a specific commit, modifies the `setup.py` to remove a line, and installs Apex with CUDA and C++ extensions.

```Dockerfile
COPY entrypoint.sh .
```
- **COPY**: Copies the `entrypoint.sh` script from the local filesystem to the working directory (`/workspace`) in the Docker image.

```Dockerfile
RUN chmod +x /workspace/entrypoint.sh
```
- **RUN**: Makes the `entrypoint.sh` script executable.

```Dockerfile
ENTRYPOINT ["/workspace/entrypoint.sh"]
```
- **ENTRYPOINT**: Sets the default command to be run when the container starts, specifying the executable `entrypoint.sh` script. 

In summary, this Dockerfile sets up an environment with NVIDIA's CUDA development tools, installs Python and necessary packages, clones and builds specific repositories, and sets up an entry point script to run when the container starts.


## How to create a docker of a demo python program and publish to docker hub?

### Demo Program

1. Create Environment

```python
#Create folder
mkdir docker_demo

#REM Create virtual environment with Python 3.9
##This create a local folder envhouse in this folder
python -m venv envhouse
 

#REM Activate the virtual environment
envhouse\Scripts\activate

#REM Install required packages
pip install pandas numpy streamlit flask

```


2. Create print_numbers.py Script:

```python
   def print_numbers():
       for i in range(1, 11):
           print(i)

   if __name__ == "__main__":
       print_numbers()
```

3. Create readme.md file

``` python
# This is Docker demo Main Heading
## This is Subheading.
```

### Create Docker Image

4. **Create `Dockerfile`:**
   ```dockerfile
   FROM python:3.9-slim
   WORKDIR /app
   COPY print_numbers.py /
   copy readme.md /
   CMD ["python", "print_numbers.py"]
   ```

5. **Log in to Docker Hub (if not already logged in):**
   Ensure you are logged in to Docker Hub on your machine.

   ```sh
   docker login
   ```

   Enter your Docker Hub credentials when prompted.
   
6. **Build and Tag the Docker Image:**
   ```sh
   docker build -t harithapliyal/print_numbers:may2024 .
   ```

7. **Verify Local Image:**
   ```sh
   docker images
   ```

   Example output:
   ```
   REPOSITORY                     TAG        IMAGE ID       CREATED          SIZE
   harithapliyal/print_numbers    may2024    abcdef123456   2 minutes ago    123MB
   ```

8. **Push the Docker Image:**
   ```sh
   docker push harithapliyal/print_numbers:may2024
   ```


## How to download a docker Image and run on local machine 

To download and use the Docker image you've pushed to Docker Hub on another machine, follow these steps:

1. **Log in to Docker Hub (if not already logged in):**
   Ensure you are logged in to Docker Hub on your machine.

   ```sh
   docker login
   ```

   Enter your Docker Hub credentials when prompted.

2. **Pull the Docker Image:**
   Download the Docker image from Docker Hub to your local machine.

   ```sh
   docker pull harithapliyal/print_numbers:may2024
   ```

3. **Run the Docker Image:**
   Once the image is downloaded, you can run it.

   ```sh
   docker run --rm harithapliyal/print_numbers:may2024
   ```

   The `--rm` flag ensures that the container is removed after it stops. This helps in keeping your system clean.
   
   '### Verification

To verify that everything is working correctly, you should see the output of the print_numbers.py script:

```
1
2
3
4
5
6
7
8
9
10
```


## I have a gpu machine with windows 11 and wsl installed. I want to install a docker where I can run colab notebooks locally from visual code. can you please help me step by step.

Certainly! Here’s a step-by-step guide to setting up Docker on a Windows 11 machine with WSL (Windows Subsystem for Linux) to run Colab notebooks locally through Visual Studio Code.

### 1. **Install Docker Desktop for Windows**

1. **Download Docker Desktop**: 
   - Visit [Docker's official website](https://www.docker.com/products/docker-desktop) and download the Docker Desktop installer for Windows.

2. **Install Docker Desktop**:
   - Run the installer and follow the on-screen instructions.
   - During installation, ensure that you enable the WSL 2 backend option.

3. **Start Docker Desktop**:
   - Open Docker Desktop after installation. Ensure that Docker is running and that you can see the Docker icon in the system tray.

### 2. **Set Up WSL 2**

1. **Install WSL 2**:
   - Open PowerShell as an administrator and run:
     ```powershell
     wsl --install
     ```
   - If you have WSL 1, you can upgrade to WSL 2 by following [Microsoft's guide](https://docs.microsoft.com/en-us/windows/wsl/install).

2. **Install a Linux Distribution**:
   - From the Microsoft Store, install a Linux distribution such as Ubuntu.

3. **Set WSL 2 as Default**:
   - In PowerShell, run:
     ```powershell
     wsl --set-default-version 2
     ```

### 3. **Configure Docker to Use WSL 2**

1. **Open Docker Settings**:
   - In Docker Desktop, go to `Settings` > `Resources` > `WSL Integration`.

2. **Enable Integration**:
   - Enable integration with your WSL 2 distributions by toggling the switch next to the installed distributions.

### 4. **Install Docker in WSL 2**

1. **Open your WSL 2 Terminal** (e.g., Ubuntu).

2. **Install Docker**:
   - Follow the official [Docker installation guide for Ubuntu](https://docs.docker.com/engine/install/ubuntu/) inside WSL. Here’s a summarized version:
     ```bash
     sudo apt-get update
     sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
     sudo apt-get update
     sudo apt-get install docker-ce
     ```

3. **Start and Enable Docker Service**:
   ```bash
   sudo service docker start
   sudo systemctl enable docker
   ```

### 5. **Set Up Visual Studio Code**

1. **Install Visual Studio Code**:
   - Download and install [Visual Studio Code](https://code.visualstudio.com/) if you haven't already.

2. **Install Docker Extension**:
   - Open Visual Studio Code and go to the Extensions view (Ctrl+Shift+X).
   - Search for “Docker” and install the Docker extension by Microsoft.

3. **Install Remote - WSL Extension**:
   - In the Extensions view, search for “Remote - WSL” and install it.

### 6. **Create a Docker Container for Colab Notebooks**

1. **Create a Dockerfile**:
   - Create a new folder for your project.
   - Inside this folder, create a `Dockerfile` with the following content:
     ```Dockerfile
     FROM python:3.8

     # Install required packages
     RUN pip install jupyterlab tensorflow torch

     # Set the working directory
     WORKDIR /app

     # Expose the port for JupyterLab
     EXPOSE 8888

     # Start JupyterLab
     CMD ["jupyter", "lab", "--ip=0.0.0.0", "--no-browser", "--allow-root"]
     ```

2. **Build the Docker Image**:
   - Open a terminal in the folder containing the `Dockerfile` and run:
     ```bash
     docker build -t colab-local .
     ```

3. **Run the Docker Container**:
   - Start a container from the image:
     ```bash
     docker run -p 8888:8888 -v $(pwd):/app -it colab-local
     ```
   - This maps port 8888 in the container to port 8888 on your host and mounts the current directory to `/app` in the container.

### 7. **Access JupyterLab and Work with Notebooks**

1. **Open JupyterLab**:
   - Open your browser and navigate to `http://localhost:8888`. You should see the JupyterLab interface.

2. **Open Notebooks**:
   - You can now create or upload Colab notebooks and work with them locally.

### 8. **Using Visual Studio Code**

1. **Open Your Project**:
   - Open Visual Studio Code and navigate to the folder where your Dockerfile is located.

2. **Use Remote - WSL Extension**:
   - Click on the green bottom-left corner of Visual Studio Code and select “Remote-WSL: New Window”.
   - Open a terminal within Visual Studio Code and use Docker commands directly from there.

## If I want docker should access my local GPU then what should I do?
Docker can access the GPU, but you'll need to set up a few additional things to make it work properly with WSL 2. Here's how you can enable GPU access in Docker on Windows 11 with WSL 2:

### 1. **Install NVIDIA Drivers and CUDA Toolkit**

1. **Install NVIDIA Drivers**:
   - Make sure you have the latest NVIDIA drivers installed on your Windows machine. You can download them from the [NVIDIA website](https://www.nvidia.com/Download/index.aspx).

2. **Install CUDA Toolkit**:
   - Download and install the CUDA Toolkit from the [NVIDIA CUDA Toolkit website](https://developer.nvidia.com/cuda-toolkit-archive). This is necessary for CUDA-based applications.

### 2. **Install NVIDIA Container Toolkit**

1. **Open your WSL 2 Terminal** (e.g., Ubuntu).

2. **Set up the NVIDIA package repository**:
   ```bash
   sudo mkdir -p /etc/systemd/system/docker.service.d
   sudo tee /etc/systemd/system/docker.service.d/override.conf <<EOF
   [Service]
   ExecStart=
   ExecStart=/usr/bin/dockerd --host=fd:// --add-runtime=nvidia=/usr/bin/nvidia-container-runtime
   EOF
   ```

3. **Install NVIDIA Docker dependencies**:
   - Add the NVIDIA package repositories:
     ```bash
     sudo apt-get update
     sudo apt-get install -y gnupg2 curl
     curl -fsSL https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -
     curl -fsSL https://nvidia.github.io/nvidia-docker/debian9/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
     sudo apt-get update
     ```

4. **Install NVIDIA Docker Toolkit**:
   ```bash
   sudo apt-get install -y nvidia-docker2
   ```

5. **Restart Docker**:
   ```bash
   sudo service docker restart
   ```

### 3. **Create a Dockerfile with GPU Support**

1. **Update your Dockerfile**:
   - Use a base image that supports GPU, such as one provided by NVIDIA. Here’s an updated `Dockerfile` example:
     ```Dockerfile
     FROM nvidia/cuda:11.8.0-base-ubuntu20.04

     # Install required packages
     RUN apt-get update && apt-get install -y \
         python3-pip \
         python3-dev \
         python3-tk \
         libgl1-mesa-glx

     # Install Python packages
     RUN pip3 install jupyterlab tensorflow torch

     # Set the working directory
     WORKDIR /app

     # Expose the port for JupyterLab
     EXPOSE 8888

     # Start JupyterLab
     CMD ["jupyter", "lab", "--ip=0.0.0.0", "--no-browser", "--allow-root"]
     ```

### 4. **Run Docker Container with GPU Access**

1. **Run the Docker Container**:
   - Use the `--gpus` flag to allocate GPU resources:
     ```bash
     docker run --gpus all -p 8888:8888 -v $(pwd):/app -it colab-local
     ```
   - This command starts the container with access to all available GPUs.

### 5. **Verify GPU Access**

1. **Check GPU Availability**:
   - Inside the running container, you can check if the GPU is available by running:
     ```bash
     python3 -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
     ```
   - For PyTorch, you can check with:
     ```bash
     python3 -c "import torch; print(torch.cuda.is_available())"
     ```

These steps should help you set up Docker to access your GPU through WSL 2 on Windows 11. Let me know if you encounter any issues or need further assistance!



## Running docker with gpu 
The command below will expose docker's port 8081 to host machine's port 8082. It will launch the colab on http://localhost:8082. You will get a complete url along with the token. You can use that complete url in goolge colab to connect to the local gpu machine.

By doing so you need not to depend upon google's ephimeral machine with limited resources. You can access data files from the local machine to run the experiments.

docker run --gpus all -it --rm -p 8082:8081 -v "$PWD":/opt/colab -v $HOME/.cache/torch:/root/.cache/torch sorokine/docker-colab-local:10.1


## Question: What is the difference between "docker build" and "docker-compose" commands?
The `docker build` and `docker-compose` commands are both used in the Docker ecosystem but serve different purposes and are used in different contexts. Here's a breakdown of their differences and uses:

### `docker build`

The `docker build` command is used to build a Docker image from a Dockerfile. A Dockerfile contains a series of instructions that Docker reads to build an image. The resulting image can then be used to run containers.

#### Key Points:
- **Usage**: Building Docker images.
- **Command**:
  ```bash
  docker build -t <image-name> <path-to-Dockerfile>
  ```
- **Example**:
  ```bash
  docker build -t my-app:latest .
  ```
  This command builds an image named `my-app` with the tag `latest` from the Dockerfile in the current directory (`.`).

- **Purpose**: It is used to create an image with all the dependencies, libraries, and code needed to run an application.
- **Workflow**: After building the image with `docker build`, you typically run it using the `docker run` command.

### `docker-compose`

The `docker-compose` command is used to define and run multi-container Docker applications. `docker-compose` uses a YAML file (`docker-compose.yml`) to configure the application's services, networks, and volumes.

#### Key Points:
- **Usage**: Managing multi-container Docker applications.
- **Command**:
  ```bash
  docker-compose up
  ```
- **Example**:
  ```yaml
  version: '3.8'

  services:
    web:
      build: .
      ports:
        - "5000:5000"
      volumes:
        - .:/code
      depends_on:
        - redis
    redis:
      image: "redis:alpine"
  ```
  This `docker-compose.yml` file defines two services: `web` and `redis`. The `web` service builds an image from the current directory and maps port 5000 of the container to port 5000 on the host. It also depends on the `redis` service, which uses the `redis:alpine` image.

- **Purpose**: It is used to run, configure, and manage multi-container applications. This can include linking containers, setting up networks, and managing volumes.
- **Workflow**: With `docker-compose`, you typically use the `docker-compose up` command to start all the services defined in the `docker-compose.yml` file. This command will build the images if they do not exist, create the containers, and start the services.

### When to Use Each

- **Use `docker build`**: When you need to build a single Docker image from a Dockerfile. This is often the first step in your Docker workflow, creating an image that you can then run or push to a Docker registry.
  
- **Use `docker-compose`**: When you need to orchestrate multiple containers that work together as part of a single application. `docker-compose` is ideal for development environments, CI/CD pipelines, and local testing of applications that consist of multiple services (e.g., a web server, database, and cache).

### Example Workflow

1. **Building an Image with `docker build`**:
   - Create a `Dockerfile`:
     ```Dockerfile
     FROM python:3.8-slim

     WORKDIR /app

     COPY . .

     RUN pip install -r requirements.txt

     CMD ["python", "app.py"]
     ```
   - Build the image:
     ```bash
     docker build -t my-python-app .
     ```

2. **Running a Multi-Container Application with `docker-compose`**:
   - Create a `docker-compose.yml`:
     ```yaml
     version: '3.8'

     services:
       web:
         build: .
         ports:
           - "5000:5000"
         volumes:
           - .:/app
       db:
         image: postgres
         environment:
           POSTGRES_USER: user
           POSTGRES_PASSWORD: password
           POSTGRES_DB: mydb
     ```
   - Start the application:
     ```bash
     docker-compose up
     ```

In summary, use `docker build` to create Docker images from a Dockerfile, and use `docker-compose` to manage and run multi-container Docker applications using a `docker-compose.yml` file.


## In docker run command sometime we write "--gpus all" and other times we say "--runtime=nvidia". what is the difference and usage?

The flags `--gpus all` and `--runtime=nvidia` are both used to enable GPU access for Docker containers, but they are used in slightly different contexts and configurations. Here's a detailed explanation of each and their usage:

### `--gpus all`

The `--gpus` flag is a more recent addition to Docker and provides a simpler and more flexible way to allocate GPU resources to containers.

- **Usage**: The `--gpus all` flag is used to allocate all available GPUs to the Docker container.
- **Example**:
  ```bash
  docker run --gpus all -p 8888:8888 -v $(pwd):/app -it colab-local
  ```

- **Granularity**: This flag allows for fine-grained control over GPU resources. You can specify how many GPUs you want to allocate or even assign specific GPU devices. For example:
  ```bash
  docker run --gpus 1 -p 8888:8888 -v $(pwd):/app -it colab-local
  ```
  Or for a specific GPU:
  ```bash
  docker run --gpus '"device=0"' -p 8888:8888 -v $(pwd):/app -it colab-local
  ```

- **Simpler Syntax**: The `--gpus` flag simplifies the syntax for running GPU-accelerated containers compared to the older `--runtime=nvidia` method.

### `--runtime=nvidia`

The `--runtime=nvidia` flag was the original method to enable GPU support in Docker containers using NVIDIA's container runtime.

- **Usage**: The `--runtime=nvidia` flag is used to specify that the container should use the NVIDIA container runtime, which is necessary for GPU acceleration.
- **Example**:
  ```bash
  docker run --runtime=nvidia -p 8888:8888 -v $(pwd):/app -it colab-local
  ```

- **Configuration**: This method requires additional configuration, such as setting up the NVIDIA container runtime and ensuring that the Docker daemon is configured to use it. This is typically done by creating a configuration file as follows:
  ```bash
  sudo tee /etc/docker/daemon.json <<EOF
  {
      "default-runtime": "nvidia",
      "runtimes": {
          "nvidia": {
              "path": "nvidia-container-runtime",
              "runtimeArgs": []
          }
      }
  }
  EOF
  ```

- **Legacy**: The `--runtime=nvidia` method is considered the legacy approach. While it is still supported, it is generally recommended to use the `--gpus` flag for new projects.

### When to Use Each

- **Use `--gpus`**: For most modern setups, especially if you're starting a new project or updating an existing one. It's simpler, more flexible, and requires less configuration.
- **Use `--runtime=nvidia`**: If you are working with an older setup or using specific images or configurations that still rely on this method.

### Practical Examples

#### Using `--gpus all`

1. **Pull the Docker image**:
   ```bash
   docker pull nvidia/cuda:11.8.0-base-ubuntu20.04
   ```

2. **Run the container with GPU access**:
   ```bash
   docker run --gpus all -p 8888:8888 -v $(pwd):/app -it nvidia/cuda:11.8.0-base-ubuntu20.04
   ```

#### Using `--runtime=nvidia`

1. **Configure Docker Daemon**:
   - Create or modify the Docker daemon configuration file:
     ```bash
     sudo tee /etc/docker/daemon.json <<EOF
     {
         "default-runtime": "nvidia",
         "runtimes": {
             "nvidia": {
                 "path": "nvidia-container-runtime",
                 "runtimeArgs": []
             }
         }
     }
     EOF
     ```

2. **Restart Docker**:
   ```bash
   sudo systemctl restart docker
   ```

3. **Run the container with GPU access**:
   ```bash
   docker run --runtime=nvidia -p 8888:8888 -v $(pwd):/app -it nvidia/cuda:11.8.0-base-ubuntu20.04
   ```

Choosing between `--gpus` and `--runtime=nvidia` depends on your specific requirements and setup. However, for most modern applications, the `--gpus` flag is recommended due to its simplicity and flexibility.

## There is existing google colab image on docker from someone. Why should I create my own?
Using an existing Google Colab Docker image can be a great way to save time and effort, especially if it's well-maintained and meets your needs. However, creating your own Docker image has several advantages:

### **Advantages of Using an Existing Image**

1. **Convenience**: Pre-built images are ready to use, saving you the time and effort of setting up the environment yourself.
2. **Community Support**: Popular images may have community support and regular updates.
3. **Standardization**: Using a well-known image ensures that your environment is consistent with other users who use the same image.

### **Advantages of Creating Your Own Image**

1. **Customization**: Creating your own image allows you to customize the environment to fit your specific needs. You can include or exclude libraries, tools, and configurations according to your requirements.
2. **Control**: You have full control over the versions of libraries and tools, ensuring compatibility with your projects.
3. **Optimization**: You can optimize the image for performance, such as using specific versions of CUDA or TensorFlow that are best suited for your hardware.
4. **Security**: By building your own image, you can ensure that it is free of vulnerabilities and has only the dependencies you trust.
5. **Learning Experience**: Building and maintaining your own Docker image provides a learning opportunity and deepens your understanding of Docker and containerization.

### **How to Choose**

- **Existing Image**: If you find an existing image that fits your needs and is actively maintained, it’s often a good starting point. You can pull the image, test it, and use it directly.
- **Custom Image**: If you need specific configurations, want to ensure compatibility with your environment, or have particular performance or security requirements, creating a custom image is beneficial.

### **Using an Existing Google Colab Docker Image**

If you decide to use an existing image, here’s a general guide:

1. **Search for the Image**:
   - Look for a Colab Docker image on Docker Hub or other Docker repositories. For example, you might find images by searching for "google colab" or related terms.

2. **Pull the Image**:
   - Use Docker to pull the image:
     ```bash
     docker pull <image-name>
     ```

3. **Run the Container**:
   - Start a container from the image:
     ```bash
     docker run -p 8888:8888 -v $(pwd):/app -it <image-name>
     ```

4. **Access JupyterLab or Colab**:
   - Open your browser and navigate to `http://localhost:8888` to access JupyterLab or Colab running inside the container.

## How to access docker shell?

docker exec -it container-id-or-name /bin/bash


## What are available commands in Docker?

### Common Commands:
```
  run         Create and run a new container from an image
  exec        Execute a command in a running container
  ps          List containers
  build       Build an image from a Dockerfile
  pull        Download an image from a registry
  push        Upload an image to a registry
  images      List images
  login       Log in to a registry
  logout      Log out from a registry
  search      Search Docker Hub for images
  version     Show the Docker version information
  info        Display system-wide information
```

### Management Commands:
```
  builder     Manage builds
  buildx*     Docker Buildx
  compose*    Docker Compose
  container   Manage containers
  context     Manage contexts
  debug*      Get a shell into any image or container
  dev*        Docker Dev Environments
  extension*  Manages Docker extensions
  feedback*   Provide feedback, right in your terminal!
  image       Manage images
  init*       Creates Docker-related starter files for your project
  manifest    Manage Docker image manifests and manifest lists
  network     Manage networks
  plugin      Manage plugins
  sbom*       View the packaged-based Software Bill Of Materials (SBOM) for an image
  scout*      Docker Scout
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes
```
### Swarm Commands:
```
  swarm       Manage Swarm
```

### Commands:
```
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes
```

