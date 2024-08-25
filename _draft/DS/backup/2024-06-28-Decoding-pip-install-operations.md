---
title: 
date: 2024-07-27
permalink: /dsblog/Decoding-pip-install-operations
tags: []
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/6116-Decoding-pip-install-operations.jpg
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

![{Decoding-pip-install-operations}]({/assets/images/dspost/6116-Decoding-pip-install-operations.jpg})
pip install transformers

pip show transformers
Name: transformers
Version: 4.44.0
Summary: State-of-the-art Machine Learning for JAX, PyTorch and TensorFlow
Home-page: https://github.com/huggingface/transformers
Author: The Hugging Face team (past and future) with the help of all our contributors (https://github.com/huggingface/transformers/graphs/contributors)
Author-email: transformers@huggingface.co
License: Apache 2.0 License
Location: /mnt/d/venvs/tf-env/lib/python3.10/site-packages
Requires: filelock, huggingface-hub, numpy, packaging, pyyaml, regex, requests, safetensors, tokenizers, tqdm
Required-by:

pip list

## 
Following is the output of command: pip install -r requirments.txt
I want to understand meaning of each operations like collecting, using, getting, preperating, installing etc. Also why installing build dependicies are happening only few time not every time?

D:\venvpy\mistral-agentic-rag>pip install -r requirements.txt
Collecting absl-py==1.4.0 (from -r requirements.txt (line 1))
  Using cached absl_py-1.4.0-py3-none-any.whl.metadata (2.3 kB)
Collecting accelerate==0.31.0 (from -r requirements.txt (line 2))
  Using cached accelerate-0.31.0-py3-none-any.whl.metadata (19 kB)
Collecting aiohttp==3.9.5 (from -r requirements.txt (line 3))
  Using cached aiohttp-3.9.5-cp312-cp312-win_amd64.whl.metadata (7.7 kB)
Collecting aiosignal==1.3.1 (from -r requirements.txt (line 4))
  Using cached aiosignal-1.3.1-py3-none-any.whl.metadata (4.0 kB)
Collecting alabaster==0.7.16 (from -r requirements.txt (line 5))
  Using cached alabaster-0.7.16-py3-none-any.whl.metadata (2.9 kB)
Collecting albumentations==1.3.1 (from -r requirements.txt (line 6))
  Using cached albumentations-1.3.1-py3-none-any.whl.metadata (34 kB)
Collecting altair==4.2.2 (from -r requirements.txt (line 7))
  Using cached altair-4.2.2-py3-none-any.whl.metadata (13 kB)
Collecting arviz==0.15.1 (from -r requirements.txt (line 8))
  Using cached arviz-0.15.1-py3-none-any.whl.metadata (8.5 kB)
Collecting asgiref==3.8.1 (from -r requirements.txt (line 9))
  Using cached asgiref-3.8.1-py3-none-any.whl.metadata (9.3 kB)
Collecting astropy==5.3.4 (from -r requirements.txt (line 10))
  Using cached astropy-5.3.4-cp312-cp312-win_amd64.whl.metadata (9.6 kB)
Collecting astunparse==1.6.3 (from -r requirements.txt (line 11))
  Using cached astunparse-1.6.3-py2.py3-none-any.whl.metadata (4.4 kB)
Collecting async-timeout==4.0.3 (from -r requirements.txt (line 12))
  Using cached async_timeout-4.0.3-py3-none-any.whl.metadata (4.2 kB)
Collecting atpublic==4.1.0 (from -r requirements.txt (line 13))
  Using cached atpublic-4.1.0-py3-none-any.whl.metadata (1.8 kB)
Requirement already satisfied: attrs==23.2.0 in c:\python312\lib\site-packages (from -r requirements.txt (line 14)) (23.2.0)
Collecting audioread==3.0.1 (from -r requirements.txt (line 15))
  Using cached audioread-3.0.1-py3-none-any.whl.metadata (8.4 kB)
Collecting autograd==1.6.2 (from -r requirements.txt (line 16))
  Using cached autograd-1.6.2-py3-none-any.whl.metadata (706 bytes)
Requirement already satisfied: Babel==2.15.0 in c:\python312\lib\site-packages (from -r requirements.txt (line 17)) (2.15.0)
Collecting backcall==0.2.0 (from -r requirements.txt (line 18))
  Using cached backcall-0.2.0-py2.py3-none-any.whl.metadata (2.0 kB)
Collecting backoff==2.2.1 (from -r requirements.txt (line 19))
  Using cached backoff-2.2.1-py3-none-any.whl.metadata (14 kB)
Collecting bcrypt==4.1.3 (from -r requirements.txt (line 20))
  Using cached bcrypt-4.1.3-cp39-abi3-win_amd64.whl.metadata (9.8 kB)
Requirement already satisfied: beautifulsoup4==4.12.3 in c:\python312\lib\site-packages (from -r requirements.txt (line 21)) (4.12.3)
Collecting bidict==0.23.1 (from -r requirements.txt (line 22))
  Using cached bidict-0.23.1-py3-none-any.whl.metadata (8.7 kB)
Collecting bigframes==1.9.0 (from -r requirements.txt (line 23))
  Using cached bigframes-1.9.0-py2.py3-none-any.whl.metadata (4.9 kB)
Requirement already satisfied: bleach==6.1.0 in c:\python312\lib\site-packages (from -r requirements.txt (line 24)) (6.1.0)
Collecting blinker==1.4 (from -r requirements.txt (line 25))
  Using cached blinker-1.4.tar.gz (111 kB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done
Collecting blis==0.7.11 (from -r requirements.txt (line 26))
  Using cached blis-0.7.11-cp312-cp312-win_amd64.whl.metadata (7.6 kB)
Collecting blosc2==2.0.0 (from -r requirements.txt (line 27))
  Using cached blosc2-2.0.0.tar.gz (3.0 MB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done
Collecting bokeh==3.3.4 (from -r requirements.txt (line 28))
  Using cached bokeh-3.3.4-py3-none-any.whl.metadata (12 kB)
Collecting bqplot==0.12.43 (from -r requirements.txt (line 29))
  Using cached bqplot-0.12.43-py2.py3-none-any.whl.metadata (6.4 kB)
Collecting branca==0.7.2 (from -r requirements.txt (line 30))
  Using cached branca-0.7.2-py3-none-any.whl.metadata (1.5 kB)
Collecting build==1.2.1 (from -r requirements.txt (line 31))
  Using cached build-1.2.1-py3-none-any.whl.metadata (4.3 kB)
Collecting CacheControl==0.14.0 (from -r requirements.txt (line 32))
  Using cached cachecontrol-0.14.0-py3-none-any.whl.metadata (3.1 kB)
Collecting cachetools==5.3.3 (from -r requirements.txt (line 33))
  Using cached cachetools-5.3.3-py3-none-any.whl.metadata (5.3 kB)
Collecting catalogue==2.0.10 (from -r requirements.txt (line 34))
  Using cached catalogue-2.0.10-py3-none-any.whl.metadata (14 kB)
Requirement already satisfied: certifi==2024.6.2 in c:\python312\lib\site-packages (from -r requirements.txt (line 35)) (2024.6.2)
Requirement already satisfied: cffi==1.16.0 in c:\python312\lib\site-packages (from -r requirements.txt (line 36)) (1.16.0)
Collecting chardet==5.2.0 (from -r requirements.txt (line 37))
  Using cached chardet-5.2.0-py3-none-any.whl.metadata (3.4 kB)
Requirement already satisfied: charset-normalizer==3.3.2 in c:\python312\lib\site-packages (from -r requirements.txt (line 38)) (3.3.2)
Collecting chex==0.1.86 (from -r requirements.txt (line 39))
  Using cached chex-0.1.86-py3-none-any.whl.metadata (17 kB)
Collecting chroma-hnswlib==0.7.3 (from -r requirements.txt (line 40))
  Using cached chroma-hnswlib-0.7.3.tar.gz (31 kB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done

  

Let's break down the various operations and their meanings in the output of the `pip install -r requirements.txt` command:

### Collecting
- **Collecting**: Pip is fetching the package from the Python Package Index (PyPI) or another repository. For example:
  ```shell
  Collecting absl-py==1.4.0 (from -r requirements.txt (line 1))
  ```
  Pip finds the specified version of `absl-py` (1.4.0) from the requirements file.

### Using
- **Using cached**: Pip is using a previously downloaded version of the package to save time and bandwidth.
  ```shell
  Using cached absl_py-1.4.0-py3-none-any.whl.metadata (2.3 kB)
  ```
  Instead of downloading the package again, it uses the cached version.

### Getting
- **Getting requirements to build wheel**: For packages that need to be built from source, pip is determining what additional dependencies are required to build the package.
  ```shell
  Getting requirements to build wheel ... done
  ```
  Pip checks what is needed to build the wheel (a built package format for Python).

### Preparing
- **Preparing metadata**: Pip prepares metadata for the package. Metadata includes information such as package name, version, dependencies, etc.
  ```shell
  Preparing metadata (pyproject.toml) ... done
  ```
  Pip processes the `pyproject.toml` file, which specifies build system requirements for the package.

### Installing
- **Installing**: Pip is installing the package and its dependencies.
  ```shell
  Installing build dependencies ... done
  ```
  For packages that require compilation, pip first installs any build dependencies. This doesn't happen for every package because some packages are pre-built (wheels) and don't need to be compiled.

### Explanation of why build dependencies are not installed every time:
- **Pre-built wheels**: Many Python packages are distributed as pre-built wheels. These are binary distributions that don't require building from source. Pip can directly install these without needing to compile them, hence no build dependencies are needed.
  ```shell
  Using cached astropy-5.3.4-cp312-cp312-win_amd64.whl.metadata (9.6 kB)
  ```
  Here, `astropy` is available as a wheel for Windows, so it doesn't require building.
  
- **Source distributions**: When a package is only available as a source distribution (like `.tar.gz`), pip needs to compile it, which requires installing build dependencies.
  ```shell
  Collecting blinker==1.4 (from -r requirements.txt (line 25))
  Using cached blinker-1.4.tar.gz (111 kB)
  Installing build dependencies ... done
  Getting requirements to build wheel ... done
  Preparing metadata (pyproject.toml) ... done
  ```
  For `blinker`, pip needs to build it from source, so it installs build dependencies and prepares the metadata accordingly.

In summary:
- **Collecting**: Finding and fetching the package.
- **Using cached**: Utilizing a previously downloaded version.
- **Getting requirements to build wheel**: Determining additional dependencies for building.
- **Preparing metadata**: Processing metadata for the package.
- **Installing build dependencies**: Installing necessary tools and libraries for building the package from source.

Build dependencies are only required when the package is not available as a pre-built wheel and must be built from source.

## why developer choose to keep package as source without build?
Developers might choose to distribute a package as a source distribution rather than a pre-built binary (wheel) for several reasons:

### 1. Platform Independence
- **Portability**: Source distributions are platform-independent and can be compiled on any system. This ensures that the package can be installed on a wide range of environments, including those not officially supported by pre-built binaries.

### 2. Customizability
- **Customization**: Source distributions allow users to compile the package with custom options or optimizations specific to their system or requirements.

### 3. Complexity in Binary Distribution
- **Complex Dependencies**: Some packages have complex dependencies or require linking to system-specific libraries that make it difficult to create a one-size-fits-all binary distribution.
- **Build Environment**: Setting up a build environment for all supported platforms can be cumbersome. By distributing the source, developers offload this complexity to the user’s local environment.

### 4. License Restrictions
- **Licensing Issues**: Some open-source licenses have restrictions that affect the distribution of pre-built binaries. Distributing the source can help developers comply with these licensing terms.

### 5. Maintenance and Updates
- **Ease of Maintenance**: Maintaining and updating a source distribution can be easier than maintaining multiple pre-built binaries for different platforms and Python versions.

### 6. Transparency and Security
- **Transparency**: Source distributions allow users to inspect the source code before building and installing, which can be important for security-conscious users or organizations.
- **Security**: By building the package from source, users can ensure that it hasn’t been tampered with, which can be a concern with pre-built binaries.

### 7. Compatibility with Build Tools
- **Build Tools Integration**: Some development environments and tools are better suited for building from source. For instance, using continuous integration (CI) systems to automatically build and test the package.

### 8. Development and Testing
- **Testing and Development**: Developers might distribute source packages during the development and testing phases before finalizing a stable version that can be distributed as a binary.

### Example Scenarios
1. **Scientific Packages**: Scientific and numerical packages often need to be compiled with optimizations specific to the hardware (e.g., CPU or GPU) they will run on.
2. **System-Level Libraries**: Libraries that interact with system-level features or require specific system libraries (e.g., database connectors, networking libraries) might be distributed as source to ensure proper linkage.

### Conclusion
While pre-built binaries (wheels) are convenient and quick to install, source distributions offer flexibility, customization, and broader compatibility, making them an essential distribution method for many developers.
