---
mathjax: true
id: 6221
title: "Exploring Shell Scripting and Batch Files"
date: 2025-02-18
permalink: /dsblog/exploring-shell-scripting-and-batch-files
tags:
  - Shell Scripting
  - Batch Files
  - Windows
  - PowerShell
  - Ubuntu
  - Scripting
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6221-Exploring-Shell-Scripting-and-Batch-Files.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "In this article, we explore creating batch files to set environment variables and execute shell commands in Windows, PowerShell, and Ubuntu, along with additional scripting nuances."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords: ["shell scripting", "batch files", "windows scripting", "powershell scripting", "ubuntu scripting", "scripting for beginners"]
---

![Exploring Shell Scripting and Batch Files](/assets/images/dspost/dsp6221-Exploring-Shell-Scripting-and-Batch-Files.jpg)

# Exploring Shell Scripting and Batch Files

Batch files are scripts that contain a series of commands to be executed by the command-line interpreter. These files can automate repetitive tasks and enhance productivity. In this article, we'll explore creating batch files to set environment variables and execute shell commands in Windows, PowerShell, and Ubuntu, along with additional scripting nuances.

## The Audience
The audience for this article is 
- those are working with Windows, PowerShell, and Ubuntu.
- who are not exposed to any scripting language
- who learned in the the college but out of touch
- want to automate tasks at shell level 

## Windows

### Setting Environment Variables

In Windows, you can create a batch file (`.bat`) to set environment variables and execute shell commands. Here's an example:

```batch
@echo off
rem Setting an environment variable
set MY_VAR=my_value

rem Displaying the value of the environment variable
echo %MY_VAR%

rem Executing a shell command
dir
```

To execute this batch file you need to type of name of batch file like mybatch.bat on cmd terminal. You can modularize these batch files and create a main batch files to call all these based on the need or condition.

### Looping

You can use a `for` loop to iterate over a set of values:

```batch
@echo off
for %%i in (1 2 3 4 5) do (
    echo Iteration %%i
)
```

### Conditionals

You can use `if` statements for conditional execution:

```batch
@echo off
set MY_VAR=my_value

if "%MY_VAR%" == "my_value" (
    echo MY_VAR is set to my_value
) else (
    echo MY_VAR is not set to my_value
)
```

### Variables

1. **Local Variables:** Variables set within the script that are accessible only within the current script or session.
2. **Global Variables:** Environment variables that are available system-wide.

## PowerShell

### Setting Environment Variables

In PowerShell, you can create a script (`.ps1`) to set environment variables and execute commands. Here's an example:

```powershell
# Setting an environment variable
$env:MY_VAR = "my_value"

# Displaying the value of the environment variable
Write-Output $env:MY_VAR

# Executing a shell command
Get-ChildItem
```

### Looping

You can use `foreach` loops for iteration:

```powershell
foreach ($i in 1..5) {
    Write-Output "Iteration $i"
}
```

### Conditionals

You can use `if` statements for conditional execution:

```powershell
$MY_VAR = "my_value"

if ($MY_VAR -eq "my_value") {
    Write-Output "MY_VAR is set to my_value"
} else {
    Write-Output "MY_VAR is not set to my_value"
}
```

### Variables

1. **Local Variables:** Variables declared within a script or function.
2. **Global Variables:** Variables that are available throughout the PowerShell session.

## Ubuntu (Linux)

### Setting Environment Variables

In Ubuntu, you can create a shell script (`.sh`) to set environment variables and execute commands. Here's an example:

```bash
#!/bin/bash
# Setting an environment variable
export MY_VAR="my_value"

# Displaying the value of the environment variable
echo $MY_VAR

# Executing a shell command
ls
```

### `.bashrc`

To set persistent environment variables and commands, you can add them to your `.bashrc` file:

1. Open the `.bashrc` file:
   ```bash
   nano ~/.bashrc
   ```

2. Add the variables and commands:
   ```bash
   export MY_VAR="my_value"
   echo "MY_VAR is set to $MY_VAR"
   ls
   ```

3. Apply the changes:
   ```bash
   source ~/.bashrc
   ```
   By using "source", it will affect the current session. Otherwise it will start a new session. `~/.` is to ensure execute bash script stored in home directory. This .bashrc file must stored only in the home directory.

### Looping

You can use `for` loops for iteration:

```bash
#!/bin/bash
for i in {1..5}
do
   echo "Iteration $i"
done
```

### Conditionals

You can use `if` statements for conditional execution:

```bash
#!/bin/bash
MY_VAR="my_value"

if [ "$MY_VAR" == "my_value" ]; then
    echo "MY_VAR is set to my_value"
else
    echo "MY_VAR is not set to my_value"
fi
```

### Variables

1. **Local Variables:** Variables declared and used within a script or function.
2. **Global Variables:** Environment variables that are available system-wide.



## Purpose of .bashrc file 

Startup Configuration: The .bashrc file is executed whenever an interactive non-login shell is started. This means it configures the shell environment with user-defined settings, such as environment variables, aliases, and functions.

Customization: It allows users to customize their shell experience by adding configurations that are automatically applied every time a new terminal session is started.

Persistent Settings: It ensures that certain settings and environment variables persist across all shell sessions without the need for manual reconfiguration.

**How It Differs from Regular Scripts**   
Automatic Execution: Unlike regular scripts, which must be explicitly executed, the .bashrc file is automatically sourced when a new interactive shell session begins.

Environment Changes: Changes made in .bashrc affect the current shell session, making it ideal for setting environment variables and aliases that you want available every time you open a terminal.

## Conclusion

Creating batch files to set environment variables and execute shell commands can significantly streamline your workflow. Whether you're using Windows, PowerShell, or Ubuntu, understanding these basics and additional scripting nuances will empower you to automate tasks effectively.
