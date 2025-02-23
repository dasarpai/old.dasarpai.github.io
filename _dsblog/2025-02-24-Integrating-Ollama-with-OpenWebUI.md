---
mathjax: true
id: 6227
title: "Integrating Ollama AI Models and Open WebUI with Docker: A Step-by-Step Guide"
date: 2025-02-24
permalink: /dsblog/integrating-ollama-and-open-webui-with-docker
tags:
  - Ollama AI Models
  - Open WebUI
  - Docker Containerization
  - AI Model Deployment
  - AI Model Integration
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6227-Integrating-Ollama-and-Open-WebUI-with-Docker.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "In this article, we explore the key concepts of integrating Ollama AI models and Open WebUI with Docker. We cover step-by-step instructions on how to set up the environment, as well as the benefits of using Docker for AI model deployment and integration."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords: ["Ollama AI Models Docker", "Open WebUI Docker Integration", "Docker Containerization AI Models", "AI Model Deployment Docker", "AI Model Integration Docker", "Ollama AI Models Deployment"]
---

![](/assets/images/dspost/dsp6227-Integrating-Ollama-and-Open-WebUI-on-Docker.jpg)

# Integrating Ollama AI Models and Open WebUI on Docker

## Introduction

Ollama, Opensource LLM Framework from Meta, provides a powerful way to work with large language models (LLMs) efficiently. While Open WebUI is a user-friendly interface that simplifies interaction with Ollama-hosted AI models. You can host Ollama and WebUI on your local machine. By using Docker, we can containerize these components, ensuring a seamless and reproducible setup across different environments. This guide will walk you through integrating Ollama and Open WebUI within Docker.

## Prerequisites

- "Windows 11 with WSL 2 enabled"
- "Docker installed and running within WSL 2"
- "Basic knowledge of Docker commands and YAML configuration"
- "Basic understanding of LLM working, Ollama framework, and Ollama model hosting"

## Setting Up Open WebUI

"Open WebUI allows users to interact with AI models easily. We will configure Open WebUI within a Docker container to make deployment straightforward. You can install WebUI on WSL2 directly or inside a Docker container. For the second option, it is best to pick up the ready-made image from Docker Hub, then download and install it in the WSL environment."

### Steps to Install Open WebUI:

1. "Pull the Open WebUI Docker image:"
   ```bash
   docker pull open-webui/open-webui:latest
   ```
2. "Run the Open WebUI container:"
   ```bash
   docker run -d --name open-webui -p 3000:3000 open-webui/open-webui
   ```
3. "Access the interface at `http://localhost:3000` in your browser. Keep in mind that in the frontend, you will not see any Ollama model. Therefore, we need to download Ollama models using the WebUI frontend. But the problem with this approach is that these models will be deleted when you delete your container or Docker image (depending on how you set up). The second way is to download the model separately, find the location of the model, and attach that location as a volume (`-v` option) in the above `docker run` command."

## Configuring Docker for Ollama and Open WebUI

"Now, there are two ways."

### Method 1: Configuring Ollama on WSL2

"Ollama can be installed directly on WSL2, allowing seamless integration with Open WebUI running in a Docker container. This method provides better performance compared to running everything inside Docker."

#### Steps to Install Ollama on WSL2:

1. "Update your system and install required dependencies:"
   ```bash
   sudo apt update && sudo apt install -y curl
   ```
2. "Download and install Ollama:"
   ```bash
   curl -fsSL https://ollama.ai/install.sh | sh
   ```
3. "Verify the installation:"
   ```bash
   ollama --version
   ```
4. "Start Ollama in the background:"
   ```bash
   ollama serve &
   ```
5. "Download and store Ollama models in a persistent volume:"
   ```bash
   ollama run openthinker
   ```
6. "Run the Open WebUI container and mount the model directory:"
   ```bash
   docker run -d --name open-webui -p 3000:3000 -v ~/.ollama/models:/root/.ollama/models open-webui/open-webui
   ```
7. "Now, Open WebUI should be able to detect the Ollama model stored in the mounted volume."

### Method 2: Configuring Ollama with Docker

"To streamline deployment, we will set up a `docker-compose.yml` file to run Ollama alongside Open WebUI. We need Docker Compose when running multiple Docker containers simultaneously, and we want these containers to talk to each other to achieve a common application goal."

### Create a `docker-compose.yml` File:

```yaml
version: '3.8'

services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    ports:
      - "11434:11434"
    volumes:
      - ./models:/root/.ollama/models
    restart: unless-stopped
    command: ["sh", "-c", "ollama run openthinker"]

  open-webui:
    image: open-webui/open-webui:latest
    container_name: open-webui
    ports:
      - "3000:3000"
    depends_on:
      - ollama
    volumes:
      - ./models:/root/.ollama/models
    restart: unless-stopped
```

### Running the Containers:

1. "Navigate to the directory where `docker-compose.yml` is saved."
2. "Run the following command to start both containers:"
   ```bash
   docker-compose up -d
   ```
3. "Open WebUI will be available at `http://localhost:3000`, and Ollama will run on port `11434` with the `openthinker` model available in Open WebUI."

## Diagram Representation

![](/assets/images/dspost/mermaid-code/Docker-Webui-Integration.jpg)

## Conclusion

"By using Docker, we efficiently integrate Ollama AI models with Open WebUI. This setup ensures easy deployment, scalability, and consistent performance. Future enhancements can include setting up persistent storage for models and optimizing resource allocation."


