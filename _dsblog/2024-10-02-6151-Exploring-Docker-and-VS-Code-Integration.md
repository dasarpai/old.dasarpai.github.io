---
mathjax: true
id: 6151
title: "Exploring Docker and VS Code Integration"
date: 2024-10-02
permalink: /dsblog/Exploring-Docker-and-VS-Code-Integration
tags:
  - Docker
  - Visual Studio Code
  - Development Tools
  - DevOps
  - Containerization
  - Development Environment
  - Software Development
  - IDE Integration
  - Cloud Development
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6151-Exploring-Docker-and-VS-Code-Integration.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: "A comprehensive guide to integrating Docker with Visual Studio Code, covering DevContainers, remote development, best practices, and advanced configurations. Learn how to set up, manage, and optimize containerized development environments for efficient software development."
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: ["Docker integration", "VS Code containers", "development environments", "DevContainers", "containerized development", "VS Code extensions", "remote development", "development workflow", "container management"]

---

![Exploring Docker and VS Code Integration](/assets/images/dspost/dsp6151-Exploring-Docker-and-VS-Code-Integration.jpg)


# Exploring Docker and VS Code Integration

## Is this article for me?
If you are interested in docker, containers, VS Code and development and looking answers for the following questions then keep reading.
- Question: What is use of target in docker container's volume?
- Question: If I remove the contents of /vscode folder then what will happen?
- Question: When I have VS Code installed on my machine then why I need "VS Code Remote - Containers"?
- Question: Can I use "VS Code Remote - Containers" with local VS Code?
- Question: Can I use "VS Code Remote - Containers" without local VS Code?
- Question: What are formatters, linters, debuggers, profiler etc other related terms?
- Question: I have datasets on my local drive d:/project-datasets. How to access them from docker?

## Question: What is use of target in docker container's volume?

I have a volume in container in docker. The volume name is minikube-config.  

This volume has following information. What does this mean?

Container name: magical_williams	
Image : mcr.microsoft.com/devcontainers/universal:2
Port: --
Target /workspaces/microsoft-generative-ai-for-beginners
/var/lib/docker
/home/vscode/.minikube
/vscode
/tmp/vscode-wayland-95f9fcad-6416-4d07-b97f-5a14dcefde96.sock

**Answer:**  
This output provides details about a Docker container's configuration and volumes. Here's what each section means:

### Container Information:
1. **Container Name**: `magical_williams` 
   - The container has been given the name `magical_williams`. Docker names containers by default unless specified otherwise.

2. **Image**: `mcr.microsoft.com/devcontainers/universal:2` 
   - The container is using an image from Microsoft's container registry, specifically the `devcontainers/universal` image, version `2`. This is likely a pre-configured development environment with a variety of tools.

3. **Port/Target**: `--`
   - This section is empty, indicating that no ports have been explicitly published or mapped to the host from this container.

### Volume Mounts (Paths inside the container):
1. **`/workspaces/microsoft-generative-ai-for-beginners`**:
   - A directory inside the container, likely containing the workspace for a project related to generative AI for beginners. This might be where your project or code resides.

2. **`/var/lib/docker`**:
   - This directory typically holds Docker's internal data, such as images, containers, volumes, and more. However, in this case, it’s mounted in the container for some reason, possibly for direct manipulation of Docker resources.

3. **`/home/vscode/.minikube`**:
   - This path suggests that `minikube` (a tool for running Kubernetes locally) is installed or configured in this container. The `.minikube` directory usually holds configurations and state for `minikube`.

4. **`/vscode`**:
   - This is likely a path associated with VS Code, especially given the container is using a `vscode` environment. This could hold various configuration files, extensions, or project settings.

5. **`/tmp/vscode-wayland-95f9fcad-6416-4d07-b97f-5a14dcefde96.sock`**:
   - This appears to be a socket file used for communication between processes within the container, likely related to Wayland (a display server protocol) or VS Code's remote server functionality.

## Question: If I remove the contents of /vscode folder then what will happen?

If you remove the contents of the `/vscode` folder inside your Docker container, the following things might happen depending on what the folder contains:

1. **VS Code Server Settings and Configurations**: 
   - The `/vscode` folder likely contains settings, extensions, or workspace configurations related to VS Code. Deleting it could result in:
     - Loss of any **installed VS Code extensions** inside the container.
     - Removal of **workspace-specific settings** (e.g., `.vscode/settings.json`), which could affect how the project behaves or looks inside the VS Code editor.
     - Loss of configurations for things like **formatters, linters, debuggers**, or other tools integrated with VS Code.

2. **Remote Development Connectivity**:
   - If you're using **"VS Code Remote - Containers"**, this folder may hold the **VS Code server** that runs inside the container to communicate with your local VS Code instance. Removing the folder could:
     - Cause VS Code to lose connection to the container or fail to work with it until the VS Code server is reinstalled or reset.
     - Potentially disrupt the remote development workflow until VS Code reestablishes itself in the container.

3. **Temporary Files and Cache**:
   - If the folder contains temporary files or caches, these will be recreated when necessary (e.g., when you open VS Code in the container again), but it might cause:
     - A slight delay as the **environment and extensions are reloaded** the next time you use VS Code with the container.
     - Some loss of **unsaved configurations** if there were custom settings being temporarily held in that folder.

### Impact Summary:
- **Workspace-related settings and extensions** would be reset or lost.
- **VS Code Remote development setup** might break until the necessary components (VS Code server) are reinitialized.
- **Temporary files** would be recreated but could cause minor delays.

If you rely on VS Code extensions and configurations for your development environment, it's best to avoid removing this folder unless you're prepared to reinstall or reset those settings.


## Question: When I have VS Code installed on my machine then why I need "VS Code Remote - Containers"?
VS Code is a powerful code editor that can run locally on your machine. However, **"VS Code Remote - Containers"** offers additional benefits, particularly for scenarios where isolating your development environment from your local machine is crucial. Here’s why you might want to use **"VS Code Remote - Containers"** even if you have VS Code installed locally:

### 1. **Consistent Development Environment**
   - **Problem**: Different projects often require different development environments (e.g., Python versions, Node.js versions, specific libraries). Setting these up locally can create conflicts between projects.
   - **Solution**: **Remote - Containers** allow you to define a Docker-based environment for each project. Inside a container, you can:
     - Use different programming languages and dependencies without affecting your local system.
     - Ensure consistency across team members. If you share the container setup, every developer gets the same environment.

### 2. **Avoiding "It works on my machine" Issues**
   - **Problem**: Code that works on your local machine might not work on another system, due to differences in operating systems, installed tools, or versions.
   - **Solution**: By using Docker containers, you can **run the same environment** across different machines. The code you write in the container will behave the same on any machine that runs that container.

### 3. **Simplified Dependency Management**
   - **Problem**: Installing dependencies globally on your machine can cause version conflicts. Managing dependencies for multiple projects can become messy.
   - **Solution**: With Remote - Containers, each project gets its own containerized environment. You can install project-specific tools, dependencies, and configurations inside the container, ensuring isolation from other projects and your host machine.

### 4. **Support for Multiple Platforms**
   - **Problem**: You may need to work on projects that require an environment different from your host OS. For example, you might need to work on a **Linux-based project** from a **Windows or macOS** machine.
   - **Solution**: Docker allows you to run Linux-based containers on any platform, so you can develop inside a Linux environment even if you're on Windows or macOS.

### 5. **Lightweight Virtualization**  
   - **Problem**: Setting up virtual machines (VMs) for different environments can be resource-intensive and time-consuming.
   - **Solution**: Docker containers are much lighter than full virtual machines. **Remote - Containers** lets you achieve a VM-like experience (isolated, reproducible environments) but with lower resource overhead and faster startup times.

### 6. **Pre-configured Development Containers**
   - **Problem**: Setting up development environments can be tedious and prone to errors.
   - **Solution**: You can use **DevContainers** (pre-configured development environments) to quickly start working. These containers can come with all necessary tools pre-installed, reducing setup time. You can also define your own environment in a `.devcontainer` configuration file to ensure the environment is ready for development as soon as it’s launched.

### 7. **Better Integration with Cloud or Remote Servers**
   - **Problem**: If you work with cloud services, remote servers, or staging environments, it's difficult to replicate their exact environments locally.
   - **Solution**: **Remote - Containers** let you run VS Code directly inside a container that could mimic your cloud or production environment. This allows you to test code in an environment closer to where it will eventually run.

### 8. **Clean Local System**
   - **Problem**: Installing various tools, SDKs, and libraries on your local system over time can clutter your machine, consume disk space, and cause conflicts.
   - **Solution**: With **Remote - Containers**, all tools, compilers, interpreters, and dependencies are installed inside containers, keeping your host system clean and reducing the risk of conflicts between tools.

### 9. **Security and Isolation**
   - **Problem**: Running code on your local machine can pose security risks, especially when working with untrusted code.
   - **Solution**: Containers provide an additional layer of isolation between the code and your host system, reducing the risk of malicious code affecting your local environment.

### 10. **Easier Collaboration**
   - **Problem**: When multiple team members work on the same project, they often need to have identical environments.
   - **Solution**: By sharing a container configuration (`.devcontainer` folder), everyone on the team can easily spin up the exact same environment, ensuring consistency and reducing the "it works on my machine" problems.

### Summary:
While VS Code installed locally is powerful, **"VS Code Remote - Containers"** provides a more consistent, isolated, and flexible development environment. This approach solves issues related to dependency conflicts, cross-platform development, environment consistency, and allows for easier project sharing and collaboration. It effectively creates a reproducible environment for your code, isolated from your local system, which is particularly useful for complex, multi-tool, or multi-language projects.

## Question: Can I use "VS Code Remote - Containers" with local VS Code?
Yes, you can absolutely use **"VS Code Remote - Containers"** with your local VS Code installation! Here's how it works and what you need to do:

### How "VS Code Remote - Containers" Works with Local VS Code
- **"VS Code Remote - Containers"** allows your locally installed VS Code to connect to a **Docker container** running either on your local machine or on a remote server.
- When using this feature, VS Code runs a **remote server** inside the Docker container. Your local VS Code interface (the editor UI) connects to that remote server and interacts with files, dependencies, and tools inside the container.
- This way, your **VS Code UI stays local**, but the actual development environment is running inside a container, isolating the dependencies and configurations for that particular project.

### Requirements
1. **Docker**: 
   - You need Docker installed and running on your local machine. "VS Code Remote - Containers" requires Docker to manage and run containers.
     - **For Windows/macOS**: You can use [Docker Desktop](https://www.docker.com/products/docker-desktop).
     - **For Linux**: You can install Docker following your distro's instructions.

2. **VS Code**: 
   - You need the latest version of VS Code installed on your machine.

3. **"VS Code Remote - Containers" Extension**:
   - Install the **Remote - Containers** extension from the Visual Studio Code marketplace. You can do this directly within VS Code:
     - Go to the **Extensions** tab (or press `Ctrl+Shift+X`).
     - Search for **"Remote - Containers"** and install it.

### How to Use "VS Code Remote - Containers" Locally

#### Step 1: Install Docker and the "VS Code Remote - Containers" Extension
   - Ensure Docker is installed and running.
   - Install the **Remote - Containers** extension as described above.

#### Step 2: Set Up a DevContainer
You can either create a **new containerized development environment** or connect to an **existing container**.

##### Option 1: Use an Existing Container
1. **Attach VS Code to an existing container**:
   - If you already have a Docker container running, open the **Command Palette** (`Ctrl+Shift+P`) and type `Remote-Containers: Attach to Running Container`.
   - Select the container you want to work in from the list, and VS Code will open a new window connected to that container.

##### Option 2: Create a DevContainer from a Folder
1. **Open your local project folder** in VS Code.
2. Press `Ctrl+Shift+P` and run `Remote-Containers: Add Development Container Configuration Files...`.
3. VS Code will offer several predefined container templates (Node.js, Python, etc.), or you can customize your own by modifying the `.devcontainer/devcontainer.json` file.
4. Once the configuration is set up, press `Ctrl+Shift+P` and run `Remote-Containers: Reopen in Container`. This will:
   - Build a Docker container as per your devcontainer configuration.
   - Reopen VS Code inside the container, where you can develop in the isolated environment.

### What Happens After Setting It Up?
1. **Local Code, Containerized Environment**: You’ll still see your local files, but all the tools, compilers, and dependencies you need for development will be running in the container.
2. **Consistent Environment**: Any dependencies you install will only exist inside the container. This avoids polluting your local environment or causing version conflicts with other projects.
3. **VS Code UI stays local**: The editor remains on your machine, so performance is responsive. Only the code execution, dependencies, and environment run inside the container.

### Benefits of Using "VS Code Remote - Containers" Locally
- **Local Isolation**: Even though your VS Code is running locally, the project is isolated in a container, so you avoid cluttering your local machine with project-specific dependencies.
- **Environment Consistency**: You can ensure that the environment inside the container remains consistent across different machines or team members, even if you're working locally.
- **Seamless Debugging**: You can debug your code inside the container just as you would locally, but with the added benefit of the isolated environment.
- **Cross-platform Development**: On a Windows or macOS machine, you can easily run a Linux-based development environment using Docker, which is especially useful for projects that need to run in Linux environments (like production servers).

### Summary
Even though you have VS Code installed locally, **"VS Code Remote - Containers"** helps you set up and work within Docker containers for development. This gives you the benefits of isolated environments, consistent setups across teams or projects, and a cleaner local system—all while still using your local VS Code editor.

## Question: Can I use "VS Code Remote - Containers" without local VS Code?
Yes, you can use **"VS Code Remote - Containers"** without having VS Code installed **locally** by using **GitHub Codespaces** or **Visual Studio Code for the Web**. Both options allow you to develop in a containerized environment directly from your web browser without needing to install VS Code on your local machine.

Here’s how each option works:

### 1. **GitHub Codespaces**
   GitHub Codespaces provides a cloud-hosted development environment where you can use VS Code in your browser, connected to a containerized environment.

#### How it works:
- **Cloud-hosted containers**: GitHub Codespaces runs your development environment in a container in the cloud, and you access it via a web-based version of VS Code.
- **Full VS Code experience in the browser**: You get all the features of VS Code, including extensions, debugging, and a terminal, but it’s all running in the browser.
- **Pre-configured environments**: Like with "VS Code Remote - Containers", you can define the environment using a `.devcontainer` configuration file, ensuring that your container is set up with the exact tools and dependencies you need.

#### How to get started with GitHub Codespaces:
1. **Sign in to GitHub**.
2. Navigate to a repository you want to work on.
3. Click the **Code** button, and if Codespaces is enabled for your account, you’ll see the **"Codespaces"** tab.
4. From there, you can create a new codespace, which launches a browser-based VS Code environment that is containerized.
5. You can define a `.devcontainer/devcontainer.json` file in the repository to customize the container environment, similar to how you would with "VS Code Remote - Containers".

#### Benefits of GitHub Codespaces:
- **No local setup required**: You don’t need to install Docker, VS Code, or any development tools on your machine.
- **Fully hosted environment**: Everything runs in the cloud, so your local system remains untouched.
- **Access from any device**: You can access your development environment from any machine, anywhere, as long as you have a web browser and internet access.

### 2. **Visual Studio Code for the Web (vscode.dev)**
   VS Code for the Web is a lightweight version of VS Code that runs directly in your browser. While it's more limited than the desktop version, it does support containerized environments when used with **GitHub repositories**.

#### How it works:
- You can access VS Code in the browser by visiting [vscode.dev](https://vscode.dev) and opening a repository hosted on GitHub.
- For container-based development, this web-based VS Code can access **GitHub Codespaces**, allowing you to run your code inside a Docker container in the cloud.

#### How to use it:
1. Go to [vscode.dev](https://vscode.dev).
2. Sign in with your GitHub account.
3. Open a repository that has a `.devcontainer` folder and configuration.
4. You can link the environment to **GitHub Codespaces**, which runs the containerized environment in the cloud.

#### Limitations:
- While **VS Code for the Web** can edit files and work with basic Git integration, it does not run local code directly. For more complex setups (like debugging or running code), you’ll need to connect it to a GitHub Codespace that runs the container in the cloud.

### Summary:
You can use **"VS Code Remote - Containers"** without installing VS Code locally by leveraging **GitHub Codespaces** or **VS Code for the Web**. Both of these services allow you to work in containerized environments directly from your browser. With **GitHub Codespaces**, you get a full-featured cloud-based development environment, while **VS Code for the Web** offers a lightweight option that can be linked to cloud-based containers for more powerful functionality.

## Question: What are formatters, linters, debuggers, profiler etc other related terms?
Here’s a list of related terms in the category of **development tools** and **programming environment utilities**, starting from **formatters**, **linters**, and **debuggers**:

### 1. **Formatters**
   - **Definition**: Tools that automatically format code according to a predefined style guide, ensuring consistency in code appearance.
   - Examples: Prettier, Black (Python), clang-format (C++), ESLint (JavaScript with formatting).
   
### 2. **Linters**
   - **Definition**: Tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.
   - Examples: ESLint (JavaScript), PyLint (Python), RuboCop (Ruby), JSHint (JavaScript).

### 3. **Debuggers**
   - **Definition**: Tools that allow developers to inspect, step through, and fix code by providing real-time feedback on the execution flow and variable states.
   - Examples: GDB (C/C++), LLDB (LLVM), PDB (Python), Chrome DevTools (JavaScript), Node.js Debugger.

### 4. **Test Runners**
   - **Definition**: Tools that automate running tests on your codebase to check for errors or ensure expected behavior.
   - Examples: Mocha (JavaScript), Jest (JavaScript), PyTest (Python), JUnit (Java), RSpec (Ruby).

### 5. **Static Code Analyzers**
   - **Definition**: Tools that analyze source code without executing it, typically used to detect vulnerabilities, bugs, or compliance issues.
   - Examples: SonarQube, Coverity, Bandit (Python), FindBugs (Java).

### 6. **Profilers**
   - **Definition**: Tools that help you analyze the performance of your application by tracking function execution times, memory usage, and other performance metrics.
   - Examples: Py-Spy (Python), perf (Linux), Chrome DevTools (JavaScript), Valgrind (C/C++), VisualVM (Java).

### 7. **Build Tools**
   - **Definition**: Tools that automate the creation of executable applications from source code, handling tasks like compiling, linking, and packaging.
   - Examples: Make (C/C++), Gradle (Java), Maven (Java), Webpack (JavaScript), CMake (C/C++).

### 8. **Package Managers**
   - **Definition**: Tools that automate the process of installing, upgrading, configuring, and managing dependencies for projects.
   - Examples: npm (JavaScript), pip (Python), yarn (JavaScript), Composer (PHP), Cargo (Rust).

### 9. **Dependency Analyzers**
   - **Definition**: Tools that analyze project dependencies, ensuring compatibility, checking for updates, and identifying security vulnerabilities.
   - Examples: npm audit (JavaScript), Pipenv (Python), Snyk (multiple languages).

### 10. **Code Coverage Tools**
   - **Definition**: Tools that measure how much of your source code is covered by automated tests, helping you identify untested code paths.
   - Examples: Istanbul (JavaScript), Coverage.py (Python), JaCoCo (Java), SimpleCov (Ruby).

### 11. **CI/CD Tools (Continuous Integration/Continuous Deployment)**
   - **Definition**: Tools that automate the process of testing, integrating, and deploying code changes, ensuring smoother and more frequent releases.
   - Examples: Jenkins, CircleCI, Travis CI, GitHub Actions, GitLab CI.

### 12. **Version Control Systems (VCS)**
   - **Definition**: Tools that track changes to your source code over time, allowing collaboration and versioning of your codebase.
   - Examples: Git, Mercurial, Subversion (SVN), Perforce.

### 13. **Code Review Tools**
   - **Definition**: Platforms or tools used to review and comment on code before it is merged into the main codebase.
   - Examples: GitHub Pull Requests, GitLab Merge Requests, Crucible, Gerrit.

### 14. **Task Runners**
   - **Definition**: Tools that automate repetitive development tasks such as minifying files, running tests, and compiling source code.
   - Examples: Gulp (JavaScript), Grunt (JavaScript), Rake (Ruby).

### 15. **Integrating Development Environments (IDEs)**
   - **Definition**: Software applications that provide comprehensive facilities to computer programmers for software development.
   - Examples: Visual Studio Code, IntelliJ IDEA, PyCharm, Eclipse, Sublime Text.

### 16. **Code Snippet Managers**
   - **Definition**: Tools or plugins that help store and manage reusable pieces of code (snippets).
   - Examples: SnippetLab, CodeBox, GitHub Gists, Quiver.

### 17. **Code Style Checkers**
   - **Definition**: Tools that ensure code follows specific coding conventions or style guides.
   - Examples: ESLint (JavaScript), Checkstyle (Java), Stylelint (CSS), Flake8 (Python).

### 18. **Continuous Monitoring Tools**
   - **Definition**: Tools that monitor the application’s behavior in production, often for performance metrics or security vulnerabilities.
   - Examples: Prometheus, New Relic, Datadog, Grafana.

### 19. **Shells and Terminals**
   - **Definition**: Command-line interfaces where developers can execute commands directly to interact with their systems or containers.
   - Examples: Bash, Zsh, PowerShell, Fish, Windows Terminal.

### 20. **Cloud-based IDEs**
   - **Definition**: IDEs that run in the cloud, allowing you to write, debug, and run code directly in a web browser.
   - Examples: GitHub Codespaces, Gitpod, Replit, AWS Cloud9.

### 21. **Virtualization and Container Tools**
   - **Definition**: Tools that create isolated environments for running and testing software, allowing easy replication of environments across different systems.
   - Examples: Docker, Kubernetes, Vagrant, LXC (Linux Containers).

These terms are commonly used in modern software development to streamline the coding process, automate workflows, and ensure high-quality code. Each plays a role in making development faster, more consistent, and more reliable.

## Question: I have datasets on my local drive d:/project-datasets. How to access them from docker?
To access datasets stored on your local drive (`d:/project-datasets`) from a Docker container, you need to **mount** the local directory into the container as a **volume**. This allows the container to access files from your host machine.

Here’s a step-by-step guide on how to achieve this:

### Steps to Access Local Datasets from Docker

#### 1. **Run the Docker Container with a Volume Mount**

When you run your Docker container, you can use the `-v` (or `--volume`) option to mount the local directory (`d:/project-datasets`) into the container’s file system. This will allow the container to access the files from your local drive.

```bash
# for linux local drive
docker run -v /host/project-datasets:/container/directory <image-name>
```

On Windows, the syntax changes slightly since Docker treats the `C:` and other local drives as mounted volumes under `/mnt`. For the `D:` drive, the path becomes `/mnt/d`.

##### Example Command:
```bash
# for windows local drive
docker run -v /mnt/d/project-datasets:/data <image-name>
```

#### 2. **Verify the Mount in the Container**
Once the container is running, you can check whether the volume is mounted correctly by opening a shell inside the container and navigating to the `/data` directory (or whatever path you specified).

##### Steps to Verify:
1. Open a terminal in the running container:
   ```bash
   docker exec -it <container-name> /bin/bash
   ```
   Replace `<container-name>` with the name or ID of the running container.

2. (OR) Navigate to the mounted directory and list the files:
   ```bash
   cd /data
   ls
   ```
   You should see the contents of your local `d:/project-datasets` directory.

#### 3. **Accessing Files from the Mounted Volume in Your Code**
Once the volume is mounted, your containerized application (Python, Node.js, etc.) can access the files directly from the mounted directory (`/data` in this example).

For example, in Python:
```python
import pandas as pd

# Access a CSV file from the mounted directory
df = pd.read_csv('/data/my-dataset.csv')
print(df.head())
```

### Additional Considerations

#### File Permissions
- Docker may adjust permissions when mounting volumes. If you encounter permission issues, you might need to change permissions inside the container.
  ```bash
  chmod -R 777 /data
  ```

#### Bind Mount vs. Named Volumes
- The above method is an example of a **bind mount**. You could also use **named volumes** if you want Docker to manage the storage, but for accessing specific local files, bind mounts are more common.

#### Windows-Specific Notes
- If Docker Desktop is not running in **Linux containers mode** or if you’re using **WSL2**, ensure that the drive (`D:`) is shared with Docker Desktop. You can verify this in the **Settings** → **Resources** → **File Sharing** section.

#### Mounting on Docker Compose
If you're using **Docker Compose**, you can specify the volume mount in the `docker-compose.yml` file:

```yaml
version: '3'
services:
  app:
    image: <image-name>
    volumes:
      - /mnt/d/project-datasets:/data
```

### Summary
To access datasets from your local `d:/project-datasets` folder in Docker:
- Use the `-v` option to mount the local directory into the container.
- On Windows, paths are mapped to `/mnt/<drive-letter>`.
- After mounting, the container can access and manipulate files as if they were local to it.



## Hashtags
#VSCode
#Docker
#DevTools
#RemoteDevelopment
#Containers
#DevOps
#Programming
#CodeQuality
#Debugging
#SoftwareDevelopment
