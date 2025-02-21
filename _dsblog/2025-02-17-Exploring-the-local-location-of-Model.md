---
mathjax: true
id: 6220
title: "Exploring the Local Location of Ollama Models on WSL2"
date: 2025-02-17
permalink: /dsblog/exploring-ollama-models-location-on-wsl2
tags:
  - Ollama
  - Location
  - Windows 11
  - Local
  - Machine
  - Path
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6220-Exploring-the-Local-Location-of-Ollama-Models-on-wsl2.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "In this article, we explore the location of ollama models on Windows 11 (WSL2) machine. We also discuss the advantages and disadvantages of each method and look at some examples of state of the art models."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords: ["ollama models location on WSL2", "ollama path on windows 11", "ollama local path on windows 11", "ollama model location on local machine", "ollama location on windows 11", "ollama path on windows 11", "ollama local location on windows 11"]
---

![Exploring the Location of Ollama Models on Local Machine](/assets/images/dspost/dsp6220-Exploring-the-Local-Location-of-Ollama-Models-on-wsl2.jpg)

# Exploring the Location of Ollama Models on Local Machine 

## Objective
Many times you may have a question like, I have installed ollama in wsl and download some ollama models. Ollama list shows me those models. I want to know where they are stored. Why it is needed? Because you want to use that location as volume in your docker container. And you don't want to download the model everytime you start the container neither you want to have duplicate copy of the same model on your machine or network.

If you want to try these commands and see the results then following is the requisites.
- Windows 11
- WSL 2
- Ubuntu or other variation of linux
- Docker Desktop for Windows in Ubuntu (WSL)
- Ollama on Ubuntu (WSL)
- You have downloaded some model from ollama.com

## How to check the location of ollama models?

```bash
$ ollama list 

NAME                  ID              SIZE      MODIFIED
openthinker:latest    aaffe05a5e2e    4.7 GB    3 hours ago
qwen2.5-coder:7b      2b0496514337    4.7 GB    24 hours ago
```

### Docker Volumes
Check if they're in the Docker volumes since Ollama uses containers:

```bash
$ docker volume ls
    DRIVER    VOLUME NAME
    local     ollama
    local     open-webui

$ docker volume inspect ollama

[
    {
        "CreatedAt": "2025-02-20T08:47:30Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/ollama/_data",
        "Name": "ollama",
        "Options": null,
        "Scope": "local"
    }
]
```

### Look at where Ollama is running from

```bash
$ which ollama
/usr/local/bin/ollama

$ ps aux | grep ollama
ollama     153  0.0  1.1 35986124 179864 ?     Ssl  09:46   0:02 /usr/local/bin/ollama serve
hari       547  0.0  0.2 1999704 33152 pts/0   Sl+  10:11   0:00 ollama run openthinker:latest
hari      1283  0.0  0.0   4092  2000 pts/3    S+   11:37   0:00 grep --color=auto ollama

```

### Track location while download
If you're downloading a new model, you can monitor in real-time where it's being saved:

```bash
$ journalctl -fu ollama

Feb 20 10:18:06 Hari-MSI ollama[153]: time=2025-02-20T10:18:06.048Z level=WARN source=sched.go:646 msg="gpu VRAM usage didn't recover within timeout" seconds=5.123075429 model=/usr/share/ollama/.ollama/models/blobs/sha256-b00569cd7782c6d7f1eb1d0a005b3a112fc879ee746111e3afea4b405d7776c1
Feb 20 10:18:06 Hari-MSI ollama[153]: time=2025-02-20T10:18:06.298Z level=WARN source=sched.go:646 msg="gpu VRAM usage didn't recover within timeout" seconds=5.372942367 model=/usr/share/ollama/.ollama/models/blobs/sha256-b00569cd7782c6d7f1eb1d0a005b3a112fc879ee746111e3afea4b405d7776c1
Feb 20 10:18:06 Hari-MSI ollama[153]: time=2025-02-20T10:18:06.548Z level=WARN source=sched.go:646 msg="gpu VRAM usage didn't recover within timeout" seconds=5.622979384 model=/usr/share/ollama/.ollama/models/blobs/sha256-b00569cd7782c6d7f1eb1d0a005b3a112fc879ee746111e3afea4b405d7776c1
Feb 20 10:52:51 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 10:52:51 | 200 |     170.514µs |       127.0.0.1 | HEAD     "/"
Feb 20 10:52:51 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 10:52:51 | 200 |    2.147892ms |       127.0.0.1 | GET      "/api/tags"
Feb 20 11:35:59 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 11:35:59 | 200 |      46.505µs |       127.0.0.1 | HEAD     "/"
Feb 20 11:35:59 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 11:35:59 | 200 |     332.731µs |       127.0.0.1 | GET      "/api/tags"
Feb 20 11:41:00 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 11:41:00 | 200 |      27.668µs |       127.0.0.1 | HEAD     "/"
Feb 20 11:41:00 Hari-MSI ollama[153]: [GIN] 2025/02/20 - 11:41:00 | 404 |      378.22µs |       127.0.0.1 | POST     "/api/show"
Feb 20 11:41:02 Hari-MSI ollama[153]: time=2025-02-20T11:41:02.459Z level=INFO source=download.go:176 msg="downloading 96c415656d37 in 16 292 MB part(s)"

Model after download are kept in /usr/share/ollama/.ollama
```
## What are the other location for keeping model?
It's quite interesting how different LLM providers structure their model storage! Let us see the common default locations for popular LLM frameworks:

1. Ollama:
```
By default, Ollama stores its models in the following locations:

- On macOS: `~/.ollama/models`
- On Linux: `~/.ollama/models`
- On Windows: `C:\Users\<username>\.ollama\models`
- On Linux: '/usr/share/ollama/.ollama/models/`

Keep in mind in Linux ~ means home directory, in my case /home/hari.


```

2. Hugging Face:
```
~/.cache/huggingface/hub/
```

3. LangChain:
```
~/.cache/langchain/
```

4. Local LLaMA models (when using llama.cpp):
```
./models/  (in the llama.cpp directory)
```

5. Text-generation-webui:
```
./models/  (in the text-generation-webui directory)
```

6. GPT4All:
```
~/.nomic/  (on Linux/WSL)
C:\Users\[USERNAME]\AppData\Local\nomic.ai\GPT4All\  (on Windows)
```

7. LocalAI:
```
./models/  (in the LocalAI directory)
```

The storage patterns usually fall into three categories:
- Hidden directories in home folder (`.cache`, `.local`, etc.)
- System-wide locations (`/usr/share/`, `/var/lib/`)
- Application directory (`./models/`)

## How to customize these locations?

To customize the storage location for Ollama models, you can use the `OLLAMA_MODELS` environment variable before starting the Ollama service:

```bash
# Linux/macOS
export OLLAMA_MODELS=/path/to/custom/ollama/models
ollama serve

# Windows PowerShell
$env:OLLAMA_MODELS="D:\path\to\custom\ollama\models"
ollama serve
```

If you're running Ollama in a Docker container, you can customize the storage location by mounting a volume:

```bash
docker run -d -v /host/path/to/models:/root/.ollama/models -p 11434:11434 ollama/ollama

here
/host/path/to/models (frist before :) => Folder location from the hosting machine 
/root/.ollama/models (second after :) => folder location on docker.
11434 (before :) => 11434 is the container's internal port (where Ollama runs inside Docker)
11434 (after :) => 11434 is port exposed on your host machine
```

Note that if you change the model storage location after downloading models to the default location, you'll need to either:
1. Move your existing models to the new location, or
2. Re-download the models to the new location

## Run Open-WebUi on localhost using downloaded models
Let's you have a conainer and you want to use a already downloaded model within this container. In this example I have taken a docker image of open-webui. It is very popular Web interface (chatgpt kind of UI) for open source models or integrating other API based models.

You need to run this command within Ubuntu (wsl2).

```
docker run -d \
  -p 3000:8080 \
  --gpus=all \
  -e WEBUI_AUTH=False \
  -v /usr/share/ollama/.ollama:/root/.ollama \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:ollama
```






