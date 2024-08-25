---
title: 
date: 2024-07-27
permalink: /dsblog/Creating-Docker-Image
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/6116-Creating-Docker-Image.jpg
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

![{Creating-Docker-Image}]({/assets/images/dspost/6116-Creating-Docker-Image.jpg})
https://docs.docker.com/guides/docker-overview/

Docker is an open platform for developing, shipping, and running applications. 
Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. 
With Docker, you can manage your infrastructure in the same ways you manage your applications. 
Docker provides the ability to package and run an application in a loosely isolated environment called a container. 
The isolation and security lets you run many containers simultaneously on a given host. 
Containers are lightweight and contain everything needed to run the application, so you don't need to rely on what's installed on the host.

![{Creating-Docker-Image}]({/assets/images/dspost/6116-Creating-Docker-Image.jpg})
The Docker daemon
The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

The Docker client
The Docker client (docker) is the primary way that many Docker users interact with Docker. When you use commands such as docker run, the client sends these commands to dockerd, which carries them out. The docker command uses the Docker API. The Docker client can communicate with more than one daemon.

Docker Desktop
Docker Desktop is an easy-to-install application for your Mac, Windows or Linux environment that enables you to build and share containerized applications and microservices. Docker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. For more information, see Docker Desktop.

Docker registries
A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker looks for images on Docker Hub by default. You can even run your own private registry.

When you use the docker pull or docker run commands, Docker pulls the required images from your configured registry. When you use the docker push command, Docker pushes your image to your configured registry.


docker run -i -t ubuntu /bin/bash



# Creating a docker image to execute some python program.

## Install Docker Desktop


## Run Docker Desktop

## create a folder "count-program"
cd count-program

## Create program 

create a python program count.py (copy paste the code below) in this folder.
```
## count.py
for i in range(1, 11):
    print(i)
```

## Create Dockerfile 

create a Dockerfile in this same folder. File name must be the "Dockerfile". Copy paste following code.
```
## Use python:3.9-alpine as the base image
FROM python:3.9-alpine

## Copy the Python script into the image
COPY count.py /count.py

## Run the Python script
CMD ["python", "/count.py"]
```

### ALTERNATIVE Code can be below.

```
## Use busybox as the base image
FROM busybox

## Install Python using wget and extracting it manually since busybox doesn't have a package manager
RUN wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz && \
    tar -xzf Python-3.9.6.tgz && \
    cd Python-3.9.6 && \
    ./configure && \
    make && \
    make install

## Copy the Python script into the image
COPY count.py /count.py

## Run the Python script
CMD ["python3", "/count.py"]
```


## Create the image 
```
docker build -t count-image .
```

## Run the image in a container.
```
docker run --rm count-image
```

It will run the code and container will stop.



# what is the difference between "docker build" and docker-compose commands?

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