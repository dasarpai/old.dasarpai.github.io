---
mathjax: true
id: 6161
title: "Exploring Python Package Manager"
date: 2024-10-14
permalink: /dsblog/Exploring-Python-Package-Manager
tags: ["Package Management", Programming, Python]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6161-Exploring-Python-Package-Managers.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 3
mathjax: "true"
comments: true
keywords: ["Python package managers", "Pip", "Conda", "Installing packages", "Managing dependencies", "Python libraries", "Pip commands", "Conda commands", "Pip vs Conda", "Python development tools"]
---

![Exploring Python Package Managers](/assets/images/dspost/dsp6161-Exploring-Python-Package-Managers.jpg)

# Exploring Python Package Managers   

## What is Package Manager?

A **package manager** is a tool that automates the process of installing, upgrading, configuring, and removing software packages (libraries, frameworks, tools, etc.). It helps manage dependencies between packages and ensures that the correct versions are installed.


### Key Functions of a Package Manager:
1. **Install Packages**: Automatically downloads and installs software from a central repository or local source.
2. **Manage Dependencies**: Resolves and installs the dependencies required for a package to work.
3. **Update Packages**: Upgrades installed packages to their latest versions.
4. **Uninstall Packages**: Removes installed packages cleanly, including their dependencies if they’re no longer needed.
5. **Version Control**: Allows specifying and managing multiple versions of the same package.

### Example in Python:
- **Pip**: Manages Python packages from the Python Package Index (PyPI).
- **Conda**: Manages packages for Python and other languages, handling complex dependencies like binary files.

Package managers streamline the development process, ensuring that developers can easily install and maintain software dependencies.

## What is PIP and what relationship it has with pypi?
PIP (Pip Installs Packages) is the package management system used for installing and managing software packages written in Python. It is the default and most widely used tool for handling Python packages, allowing users to easily download, install, and manage libraries and dependencies from the Python Package Index (PyPI).

PyPI (Python Package Index): PyPI is the official third-party software repository for Python. It is a centralized platform that hosts thousands of Python packages contributed by the community.

PIP acts as a client that communicates with PyPI to retrieve packages. When a user runs a command like pip install package_name, PIP queries PyPI for the specified package and its version. PIP downloads the package and any dependencies from PyPI and installs them into the user’s Python environment.

## What happens during pip install command is executed?
The `pip install` command involves a systematic process of retrieving package information, resolving dependencies, downloading, and installing the specified package while handling errors and ensuring compatibility. This makes it a powerful and essential tool for Python package management.

### Steps Followed by PIP During pip install

**Command Execution**: The user enters the command `pip install package_name` in the terminal.

1. **Package Metadata Retrieval**:
   - PIP retrieves metadata about the specified package from the Python Package Index (PyPI) or the specified repository. This includes information about the package version, dependencies, and available releases.

2. **Dependency Resolution**:
   - PIP checks for dependencies required by the specified package. It examines the metadata to identify any packages that need to be installed alongside the main package.
   - PIP resolves these dependencies, ensuring that compatible versions are selected based on the requirements specified in the package's metadata.

4. **Version Selection**:
   - If multiple versions of the package or its dependencies are available, PIP selects the version that satisfies the version constraints specified by the user or the package itself.
   - If no version is specified, PIP defaults to the latest version available.

5. **Downloading Packages**:
   - PIP downloads the selected package and its dependencies from PyPI or the specified repository. The downloaded files can be source distributions (tar.gz) or wheel distributions (.whl).

6. **Installation Process**:
   - After downloading, PIP installs the packages into the active Python environment:
     - If the package is a wheel file, PIP uses the wheel format for faster installation.
     - If the package is a source distribution, PIP may compile the package during installation.
   - During this step, PIP may also execute any setup scripts included with the package.

7. **Dependency Installation**:
   - PIP installs all resolved dependencies in the order they were determined, ensuring that each dependency is satisfied before installing the next.

8. **Scripts and Executables**:
   - If the package provides any command-line scripts or executables, PIP installs them into the appropriate directory (e.g., `bin` for UNIX-like systems or `Scripts` for Windows).

9. **Post-Installation Actions**:
   - PIP may perform any post-installation tasks specified by the package, such as running additional scripts or generating configuration files.

10. **Metadata Updates**:
    - PIP updates the `site-packages` directory with the package information, which includes creating an entry in the `easy-install.pth` file and/or updating the `pkg_resources` database.

11. **Completion Message**:
    - Once the installation is complete, PIP displays a success message, indicating that the package has been successfully installed.

12. **Error Handling**:
    - If any errors occur during any of the above steps (e.g., version conflicts, missing dependencies, or network issues), PIP will display an appropriate error message to help the user diagnose the problem.


## Can I install package from github?
Yes, for that you need to run following on the command prompt.
```
pip install git+https://github.com/username/repository.git

or 

pip install git+https://github.com/username/repository.git@branch_name
pip install git+https://github.com/username/repository.git@commit_hash
pip install git+https://github.com/username/repository.git@tag_name

## if you ssh setup then.
pip install git+ssh://git@github.com/username/repository.git


```

## How to install a package from a cloned and local copy of github repo?
You can easily install a Python package from a cloned local copy of a GitHub repository by navigating to the repository's directory and using `pip install .` or the `setup.py` script. This allows for development and testing of the package directly from your local environment.

To install a Python package from a cloned and local copy of a GitHub repository, you can follow these steps:

### Steps to Install from a Local Repository

1. **Clone the Repository**:
   If you haven't already cloned the repository, use the following command to do so:

   ```bash
   git clone https://github.com/username/repository.git
   ```

   Replace `https://github.com/username/repository.git` with the actual URL of the repository you want to clone.

2. **Navigate to the Repository Directory**:
   Change to the directory of the cloned repository:

   ```bash
   cd repository
   ```

3. **Install the Package**:
   You can install the package using PIP in one of two ways:

   - **Using `pip install .`**:
     This installs the package in "editable" mode, meaning that any changes you make to the code will immediately affect the installed package:

     ```bash
     pip install .
     ```

   - **Using `setup.py`**:
     If the repository has a `setup.py` file, you can also use it to install the package:

     ```bash
     python setup.py install
     ```

### Example

Assuming you cloned the `example-repo`, here’s how the commands would look:

```bash
git clone https://github.com/username/example-repo.git
cd example-repo
pip install .
```

### Additional Options
- **Editable Installation**: If you want to make changes to the code and see the effect immediately, you can use the `-e` option with `pip`:

  ```bash
  pip install -e .
  ```



## What is Editable Installation?
The concept of editable installations allows you to install a Python package in a way that lets you modify the source code and immediately see those changes reflected when you run your code. It means if you have python_pkg installed as "editatable installation" and you are using that in your jupyter notebook. Now if some one modify the source code of python_pkg you your jupyter notebook (where you are using this package) will reflect this change.
	
When you install a Python package using pip install -e ., you create an editable installation. This means that the package is linked to the original source code directory rather than being copied to the site-packages directory.

## What is conda and what are different variations and their purpose?
**Conda** is an open-source package management and environment management system designed to simplify the process of managing packages and dependencies for different programming languages. It allows users to easily install, run, and update software packages, while also managing environments that can isolate different projects with their specific dependencies.

### Key Features of Conda
- **Cross-Language Support**: While it is widely used for Python, Conda can also manage packages and environments for other programming languages like R, Ruby, Lua, Scala, Java, JavaScript, C/C++, FORTRAN, and others.
- **Environment Management**: Conda allows users to create isolated environments with specific versions of libraries, which helps avoid conflicts between dependencies required by different projects.
- **Dependency Management**: It resolves and manages dependencies automatically, ensuring that all necessary packages are installed without conflicts.

### Variations of Conda

1. **Anaconda**
   - **Purpose**: Anaconda is a distribution of Conda that includes a wide range of pre-installed data science and machine learning packages, such as NumPy, SciPy, Pandas, Matplotlib, and more. It is designed for data science, scientific computing, and large-scale data processing.
   - **Key Features**:
     - Comes with the Anaconda Navigator, a graphical user interface for managing packages and environments.
     - Includes Jupyter Notebook and other tools for data analysis and visualization.
     - Ideal for beginners and professionals who need a comprehensive environment for data science.

2. **Miniconda**
   - **Purpose**: Miniconda is a minimal installer for Conda, providing a lightweight alternative to Anaconda. It includes only the Conda package manager and Python.
   - **Key Features**:
     - Allows users to install only the packages they need, making it a more flexible option for those who prefer to customize their environments.
     - Suitable for users who want to save space or need specific packages without the additional overhead of the Anaconda distribution.

3. **Conda-Forge**
   - **Purpose**: Conda-Forge is a community-driven collection of conda packages. It serves as an additional channel for obtaining packages not available in the default Anaconda repository.
   - **Key Features**:
     - Provides a wide variety of packages, often including the latest versions and those maintained by the community.
     - Useful for users who need access to specific libraries or versions not found in the standard Anaconda repository.

4. **Mamba**
   - **Purpose**: Mamba is a reimplementation of the Conda package manager in C++, providing faster installation and dependency resolution.
   - **Key Features**:
     - Speeds up package installation and environment creation processes.
     - Can be used as a drop-in replacement for Conda commands, offering similar functionality with improved performance.

### Summary
- **Conda** is a powerful tool for managing packages and environments, primarily used in data science and scientific computing.
- **Anaconda** provides a comprehensive suite of pre-installed packages for data analysis.
- **Miniconda** offers a lightweight alternative for users who want more control over their package installations.
- **Conda-Forge** expands the range of available packages through community contributions.
- **Mamba** enhances Conda's performance, making package management faster and more efficient. 

These variations of Conda cater to different needs, from beginners looking for an all-in-one data science solution to advanced users requiring custom environments with specific packages.


## Is there any difference between PIP and Conda commands?

Yes, there are several differences between `pip` and `conda` commands, primarily in their purposes, usage, and functionality. Here's a comparison:

### 1. **Package Management vs. Environment Management**
- **`pip`**: 
  - It is the package installer for Python packages from the Python Package Index (PyPI).
  - Primarily focuses on managing Python libraries and dependencies.
  
- **`conda`**:
  - It is a package manager and environment manager for various programming languages, including Python.
  - Manages packages as well as the environments that can include libraries from different languages (e.g., R, Ruby).

### 2. **Package Sources**
- **`pip`**: 
  - Installs packages from the Python Package Index (PyPI) and other Python repositories.
  
- **`conda`**: 
  - Installs packages from the Anaconda repository or other conda channels (e.g., conda-forge).
  - Can install non-Python packages and libraries, as it manages all dependencies, including binaries.

### 3. **Installation Commands**
- **`pip`**:
  - Basic command: `pip install package_name`
  - Upgrading a package: `pip install --upgrade package_name`
  
- **`conda`**:
  - Basic command: `conda install package_name`
  - Upgrading a package: `conda update package_name`

### 4. **Environment Management**
- **`pip`**:
  - Does not manage environments directly. It relies on `virtualenv` or `venv` to create isolated environments.
  
- **`conda`**:
  - Has built-in environment management. You can create, export, list, remove, and update environments directly with commands like:
    - Create an environment: `conda create --name myenv`
    - Activate an environment: `conda activate myenv`
    - Deactivate an environment: `conda deactivate`

### 5. **Dependency Resolution**
- **`pip`**:
  - Uses a simpler approach to dependency resolution. If there are conflicting dependencies, it may lead to installation errors or require manual intervention.

- **`conda`**:
  - Has a more sophisticated dependency resolver that ensures compatibility across all packages being installed, making it less likely to encounter conflicts.

### 6. **Performance**
- **`pip`**:
  - Generally installs packages one at a time and may require compilation for some packages.
  
- **`conda`**:
  - Can install multiple packages at once and often provides precompiled binaries, which can speed up the installation process.

### 7. **Cross-Language Support**
- **`pip`**:
  - Primarily for Python packages only.
  
- **`conda`**:
  - Supports packages from different languages, making it suitable for projects that require multiple languages.

### Summary
- **Use `pip`** for Python-specific projects when you only need Python libraries.
- **Use `conda`** when you want to manage environments, install non-Python packages, or work in a data science context where you may need libraries from various languages.

## Most frequently used PIP commands.
These `pip` commands cover the full range of package management tasks, from installing, updating, and uninstalling packages to handling dependencies, custom installations, and more.


### General Installation Commands
1. **`pip install package_name`**  
   Install the package from the Python Package Index (PyPI).

2. **`pip install package_name==1.0.0`**  
   Install a specific version of a package.

3. **`pip install "package_name>=1.0,<2.0"`**  
   Install a package within a version range.

4. **`pip install --upgrade package_name`**  
   Upgrade the package to the latest version.

5. **`pip install --force-reinstall package_name`**  
   Force reinstallation of a package, even if it’s already installed.

6. **`pip install --no-deps package_name`**  
   Install a package without installing its dependencies.

7. **`pip install -r requirements.txt`**  
   Install all packages listed in a `requirements.txt` file.

8. **`pip install package_name --no-binary :all:`**  
   Force pip to only use source distributions (skip binary wheels).

9. **`pip install --pre package_name`**  
   Install a pre-release or beta version of a package.

10. **`pip install --user package_name`**  
   Install a package only for the current user (no admin rights required).

### Package Management and Information
11. **`pip list`** : List all installed packages in the current environment.

12. **`pip list --outdated`** : List outdated packages in the current environment.

13. **`pip show package_name`** : Show details of a package, including version, location, and dependencies.

14. **`pip check`** : Check if installed packages have compatible dependencies.

15. **`pip uninstall package_name`** : Uninstall a package from the environment.

16. **`pip freeze`** : Output installed packages and their versions in a format that can be used in `requirements.txt`.

17. **`pip freeze > requirements.txt`** : Save the current environment's installed packages to a `requirements.txt` file.

18. **`pip list --local`** : List only the locally installed packages (ignoring global ones).

19. **`pip list --format=columns`** : List installed packages in a column format for better readability.

20. **`pip list --not-required`** : List packages that are not dependencies of other packages.

### Searching and Inspecting Packages**
21. **`pip search package_name`** : Search PyPI for a specific package.

22. **`pip search --trusted-host pypi.org package_name`** : Search for a package using a trusted host when SSL certificates are not verified.

23. **`pip show -f package_name`** : Show additional details, including files installed by a package.

24. **`pip show --files package_name`** : List the files installed by a specific package.

25. **`pip list --verbose`** : List all installed packages with more detailed information (locations, versions).

26. **`pip show --no-python-version-warning package_name`** : Show package details while suppressing Python version warnings.

27. **`pip list --disable-pip-version-check`** : List installed packages without checking if pip itself is outdated.

28. **`pip search package_name --index-url https://pypi.python.org/simple/`** : Search for a package using a specific PyPI index URL.

29. **`pip show --json package_name`** : Show package details in JSON format.

30. **`pip install --index-url=https://pypi.org/simple package_name`** : Install a package from a custom PyPI index URL.

### Handling Dependencies
31. **`pip install package_name[extra]`** : Install a package with extra features or optional dependencies.

32. **`pip install package_name --no-cache-dir`** : Install a package without using the cache directory.

33. **`pip install --compile package_name`** : Compile Python C extensions from source when installing a package.

34. **`pip install --target=/path/to/dir package_name`** : Install a package into a specific directory.

35. **`pip install --global-option="build_ext" --global-option="--inplace" package_name`** : Pass custom global options to the package during installation.

36. **`pip install --platform manylinux1_x86_64 package_name`** : Install a package for a specific platform.

37. **`pip install --no-binary package_name`** : Avoid installing the binary version (wheel) of the package.

38. **`pip install --extra-index-url URL package_name`** : Install a package from an additional package index.

39. **`pip install --editable .`** : Install a package in editable mode, linking to the source code for easy modifications.

40. **`pip install --constraint constraints.txt`** : Install a package using version constraints from a file.

### Advanced Usage and Customization
41. **`pip install git+https://github.com/username/repo.git`** : Install a package directly from a GitHub repository.

42. **`pip install ./local-package`** : Install a package from a local directory.

43. **`pip install ./local-package --editable`** : Install a package from a local directory in editable mode.

44. **`pip install https://example.com/package.zip`** : Install a package from a URL to a `.zip` or `.tar.gz` file.

45. **`pip install --log pip_log.txt package_name`** : Save detailed installation logs to a file.

46. **`pip install --proxy=http://proxy:8080 package_name`** : Install a package using a proxy server.

47. **`pip uninstall -r requirements.txt`** : Uninstall all packages listed in a `requirements.txt` file.

48. **`pip install --isolated package_name`** : Install a package in an isolated environment without using environment variables or user settings.

49. **`pip install --only-binary :all: package_name`** : Force installation of only the binary distribution of a package (if available).

50. **`pip download package_name`** : Download a package and its dependencies without installing them.




## What are mostly used conda commands?
These commands cover most of the major operations with Conda, such as managing environments, installing and updating packages, configuring settings, and working with different channels.

### General Environment Management
1. **`conda create -n myenv`**  
   Create a new environment called `myenv`.

2. **`conda create -n myenv python=3.8`**  
   Create a new environment with a specific Python version.

3. **`conda activate myenv`**  
   Activate the environment `myenv`.

4. **`conda deactivate`**  
   Deactivate the current environment.

5. **`conda env list`**  
   List all available environments.

6. **`conda remove --name myenv --all`**  
   Remove the environment `myenv`.

7. **`conda env export > environment.yml`**  
   Export the current environment to a `.yml` file.

8. **`conda env create -f environment.yml`**  
   Create an environment from a `.yml` file.

9. **`conda list`**  
   List all installed packages in the current environment.

10. **`conda info`**  
   Display general information about the Conda installation.

### Package Management
11. **`conda install numpy`** : Install the package `numpy`.

12. **`conda install numpy=1.19`** : Install a specific version of a package.

13. **`conda update numpy`** : Update the package `numpy` to the latest version.

14. **`conda uninstall numpy`** : Uninstall the package `numpy`.

15. **`conda search numpy`** : Search for a package in Conda repositories.

16. **`conda update --all`** : Update all packages in the current environment.

17. **`conda install -c conda-forge tensorflow`** : Install a package from the `conda-forge` channel.

18. **`conda install -n myenv numpy`** : Install a package in a specific environment (`myenv`).

19. **`conda install -y numpy`** : Install a package without confirmation prompts.

20. **`conda install --no-deps numpy`** : Install a package without its dependencies.

### Environment Cloning and Sharing
21. **`conda env export --no-builds > environment.yml`** : Export an environment without build versions.

22. **`conda env update --file environment.yml`** : Update an environment from an `.yml` file.

23. **`conda create --clone myenv --name myenv2`** : Clone an existing environment into a new one.

24. **`conda list --revisions`** : List the revision history of the environment.

25. **`conda install --revision 2`** : Roll back the environment to revision 2.

26. **`conda env remove -n myenv`** : Remove a specific environment.

27. **`conda env config vars set MY_VAR=value`** : Set an environment variable for a Conda environment.

28. **`conda env config vars list`** : List all environment variables in the environment.

29. **`conda env config vars unset MY_VAR`** : Unset (remove) a specific environment variable.

30. **`conda config --show`** : Display the current Conda configuration.

### Configuration and Customization
31. **`conda config --add channels conda-forge`** : Add a new channel (`conda-forge`) to the configuration.

32. **`conda config --remove channels conda-forge`** : Remove a channel from the configuration.

33. **`conda config --set auto_activate_base false`** : Disable automatic activation of the base environment.

34. **`conda config --get channels`** : Get the list of configured channels.

35. **`conda config --set show_channel_urls yes`** : Display channel URLs when installing packages.

36. **`conda clean --all`** : Clean the package cache, temporary files, and unused package installations.

37. **`conda clean --packages`** : Remove unused cached packages.

38. **`conda config --set ssl_verify false`** : Disable SSL verification (useful in cases of SSL errors).

39. **`conda config --set allow_conda_downgrades true`** : Allow Conda to downgrade itself when necessary.

40. **`conda config --set restore_free_channel true`** : Restore the `free` channel, which was removed in newer Conda versions.

### Advanced Package Management
41. **`conda install mkl=2021 --no-update-deps`** : Install a package without updating its dependencies.

42. **`conda install pytorch torchvision torchaudio -c pytorch`** : Install multiple packages at once from a specific channel.

43. **`conda search --channel conda-forge numpy`** : Search for a package in a specific channel.

44. **`conda install --use-local my_package`** : Install a package from a local Conda package cache.

45. **`conda install -n base conda=4.10.0`** : Install a specific version of Conda itself in the base environment.

46. **`conda build my_package`** : Build a Conda package from source (requires `conda-build`).

47. **`conda skeleton pypi my_package`** : Create a Conda recipe from a PyPI package.

48. **`conda verify my_package.tar.bz2`** : Verify the integrity of a Conda package.

49. **`conda package --create my_package.tar.bz2`** : Create a package archive for distribution.

50. **`conda-lock install --name myenv`** : Install packages from a `conda-lock` file (requires `conda-lock` tool).

### Conclusion
This list covers the essential Jinja2 syntax used for rendering dynamic content in your HTML templates. With these constructs, you can create robust and flexible templates in your Flask applications.

## Hashtags
#Python #Pip #Conda #PackageManagement #PythonLibraries #SoftwareDevelopment #DataScience #Programming #WebDevelopment #Coding
