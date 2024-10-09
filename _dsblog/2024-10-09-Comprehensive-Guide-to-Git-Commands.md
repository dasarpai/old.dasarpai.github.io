---
mathjax: true
id: 6155
title: "Mastering Git: Comprehensive Guide to Git Commands"
date: 2024-10-04
permalink: /dsblog/Git-Comprehensive-Guide
tags: [Github]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6155-Comprehensive-Guide-to-Git-Commands.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: ["Git commands",  "Git workflow",  "GitHub Actions",  "GitHub Packages",  "GitHub Gist",  "GitHub Codespaces",  "GitHub Repositories"]


---

![Mastering Git: Comprehensive Guide to Git Commands](/assets/images/dspost/dsp6155-Comprehensive-Guide-to-Git-Commands.jpg)

# Comprehensive Guide to Git Commands

## Is this article for me?

If you are a developer and you want to learn Git commands and their usage, this article is for you. If you are a data scientist and you want to learn Git commands and their usage, this article is also for you. If you are a manager and you want to get familiarize about git commands so that you know what your team is talking about then, this article is also for you.

Are you looking answer to these questions?

1. Basic Git Commands
1. Advanced Git Commands
1. Before "git rebase" do we need to check the difference between current branch and main branch? How to do that?
1. How to merge two commits into one?
1. What does "sync fork" link in github do?
1. Before sending Pull request do I need to do "Sync fork"?
1. What is the difference between git pull and git fetch?
1. How to create branch from original repository's main branch?
1. What is Codespace in github?
1. What is Github Actions?
1. What is Github Gist, what is the use of this?
1. What are different types of workflows in Github Actions?
1. What are different types of github repositories?
1. What is Package in Github?
1. Can you tell me usecases where Github packages are used?



## Introduction
In this article, I am assuming that you have basic knowledge of Git and you are looking for Git commands and their usage. I am also assuming that you already have github account, you know how to create github repository, have github desktop installed on your system and you can access github bash in your system.

Essential Git commands along with their one-line descriptions:

### Basic Git Commands:

1. **`git init`**  
   Initializes a new Git repository in the current directory.  
   *Use when starting a new project with Git version control.*

2. **`git clone <repo-url>`**  
   Creates a copy of an existing repository (remote or local) to your local machine.  
   *Use when you want to copy a repository to your system.*

3. **`git status`**  
   Displays the state of the working directory and staging area.  
   *Use to see changes to tracked files, new files, and files staged for commit.*

4. **`git add <file>`**  
   Stages the specified file(s) for the next commit.  
   *Use when you're ready to include changes in the next commit.*

5. **`git commit -m "message"`**  
   Records changes in the repository with a descriptive message.  
   *Use when saving your changes after staging files.*

6. **`git pull`**  
   Fetches and integrates changes from a remote repository into the current branch.  
   *Use to sync your local branch with the latest changes from the remote.*

7. **`git push`**  
   Uploads local branch changes to the remote repository.  
   *Use to send your committed changes to the remote repository.*

8. **`git fetch`**  
   Downloads commits, files, and refs from a remote repository without integrating.  
   *Use when you want to check for changes without modifying your local branch.*

9. **`git merge <branch>`**  
   Combines the specified branch into the current branch.  
   *Use to merge changes from another branch into the one you’re working on.*

10. **`git branch`**  
    Lists, creates, or deletes branches.  
    *Use to view branches or manage branch operations.*

11. **`git checkout <branch>`**  
    Switches to the specified branch or commit.  
    *Use to change the working branch.*

12. **`git checkout -b <branch>`**  
    Creates and switches to a new branch.  
    *Use when you need to start work on a new branch.*

13. **`git rebase <branch>`**  
    Re-applies commits from the current branch on top of another branch.  
    *Use to keep a linear history by integrating changes from another branch.*

14. **`git log`**  
    Displays the commit history for the repository.  
    *Use to review the commit history.*

15. **`git diff`**  
    Shows the differences between working directory changes, staged changes, or between commits.  
    *Use to see the differences between files or commits.*

16. **`git reset <file>`**  
    Unstages the specified file from the staging area but keeps changes in the working directory.  
    *Use when you want to remove a file from staging without losing the changes.*

17. **`git rm <file>`**  
    Removes the specified file from the working directory and stages the removal for commit.  
    *Use to delete files and record their removal in Git.*

18. **`git stash`**  
    Temporarily saves changes that aren’t ready to be committed.  
    *Use to save work-in-progress changes before switching branches.*

19. **`git stash pop`**  
    Restores the most recent stash and removes it from the stash list.  
    *Use to retrieve your stashed changes.*

20. **`git tag <tag-name>`**  
    Creates a tag to mark a specific commit.  
    *Use to create version or release markers.*

21. **`git remote add <name> <url>`**  
    Adds a new remote repository to your configuration.  
    *Use to link a remote repository to your local one.*

22. **`git remote -v`**  
    Lists the remotes with their URLs.  
    *Use to check the linked remotes for the repository.*

23. **`git cherry-pick <commit>`**  
    Applies the changes from a specific commit to the current branch.  
    *Use to selectively apply changes from another branch or commit.*

24. **`git revert <commit>`**  
    Creates a new commit that undoes the changes from the specified commit.  
    *Use to reverse a commit while keeping the history intact.*

25. **`git blame <file>`**  
    Shows who made the last changes to each line of a file.  
    *Use to find out who modified a specific line of code.*

26. **`git mv <old> <new>`**  
    Renames a file and stages the change.  
    *Use to rename files in the repository.*

27. **`git clean -f`**  
    Removes untracked files from the working directory.  
    *Use to clean up unwanted files in your repository.*

28. **`git config --global <key> <value>`**  
    Sets global Git configuration options (e.g., username, email).  
    *Use to configure Git settings like name and email.*

### Advanced Git Commands:

29. **`git bisect`**  
    Finds the commit that introduced a bug by using binary search.  
    *Use when you need to debug which commit caused an issue.*

30. **`git reflog`**  
    Shows a history of all actions in the repository, including resets and checkouts.  
    *Use to view or recover from recent Git actions.*

31. **`git submodule`**  
    Manages submodules, which are external repositories embedded in your repository.  
    *Use to include other Git repositories as part of your project.*

32. **`git archive`**  
    Creates a tar or zip archive of files from a Git repository.  
    *Use to package a snapshot of your project.*

33. **`git cherry <branch>`**  
    Lists commits in the current branch that are not in the specified branch.  
    *Use to compare commits between branches.*

34. **`git apply <patch-file>`**  
    Applies changes from a patch file to the working directory.  
    *Use when applying a patch manually.*

## Before "git rebase" do we need to check the difference between current branch and main branch? How to do that?

Yes, it's a good practice to check the differences between your current branch and the main branch before performing a rebase. This helps you understand what changes you're about to integrate and can help prevent unexpected conflicts. Here's how you can do that:

1. First, make sure your local main branch is up to date:

```bash
git checkout main #
git pull origin main #
```

2. Then, switch back to your feature branch:

```bash
git checkout your-feature-branch
```

3. Now, you can use several Git commands to check the differences:

a. To see a list of commits that are in your feature branch but not in main:

```bash
git log main..HEAD

git log main..HEAD --oneline # Shows a concise list of commits in your branch that are not in main

git log --oneline --graph --decorate --all # Visualizes the commit history, showing where your branch diverges from main

```

b. To see a summary of changes (files changed, insertions, deletions):

```bash
git diff --stat main
```

c. To see the full diff of all changes:

```bash
git diff main
```

d. To see just the file names that have been changed:

```bash
git diff --name-only main
```

4. If you want to see how your branch would look after rebasing onto main, without actually performing the rebase, you can use:

```bash
git rebase -i --onto main --root $(git merge-base HEAD main)
```

This will open an interactive rebase editor. You can close it without making changes to see what would happen without actually rebasing.

After reviewing the differences, if you're comfortable with the changes, you can proceed with the rebase:

```bash
git rebase main
```

Remember, rebasing rewrites history, so if you've already pushed your branch to a shared repository, you'll need to force push after rebasing. Be cautious with this, especially on shared branches.

By checking the differences before rebasing, you can:
- Anticipate potential conflicts
- Ensure you're not accidentally overwriting important changes
- Understand how your changes fit into the context of the main branch
- Decide if a merge might be more appropriate than a rebase in some cases

This approach helps maintain a cleaner history and reduces the likelihood of unexpected issues during the rebase process.

## How to merge two commits into one?
To merge two commits into one in Git (a process called squashing), you can use an interactive rebase to combine multiple commits into a single one. This is useful when you want to clean up your commit history before pushing to a remote repository or submitting a pull request.
1. Identify the commits you want to merge. Command below will show the commit history in a condensed format.
   ```
   git log --oneline
   ```
2. Start an interactive rebase. Suppose you want to squash the last two commits.
   ```
   git rebase -i HEAD~2
   ```
3. Modify the rebase instruction. An interactive editor will open, showing the commits:
   ```
   pick e456f8b Second commit
   pick d123abc First commit
   Change the word pick on the second line (for the older commit) to squash. This tells Git to "squash" the second commit into the first one.
   ```
4. Save and close the editor
5. Edit the commit message
6. Push the squashed commit
   ```
   git push --force origin <branch-name>

   OR

   git push origin <branch-name> 
   ```

## What does "sync fork" link in github do?

The "Sync fork" link in GitHub is used to update your local copy of a repository with the latest changes from the original repository. This is particularly useful when you have made changes to your fork that conflict with the latest changes from the original repository.

## Before sending Pull request do I need to do "Sync fork"?

Yes, it's a good practice to sync your fork with the original repository before sending a pull request. This ensures that your changes are based on the latest code and reduces the risk of conflicts. Here’s how you can do it:

1. **Add the original repository as an upstream remote:**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
   ```
2. **Fetch the latest changes from the original repository:**

   ```bash
   git fetch upstream
   ```
3. Switch to your main branch (or the branch you are planning to send the PR from): 
   ```bash
   git checkout main
   ```
4. **Merge the latest changes into your local repository:**
   ```bash
   git merge upstream/main
   ```
5. **Push the updated changes to your fork on GitHub:** 
   ```bash
   git push origin main
   ```

This ensures that your pull request is based on the latest code from the original repository.

## What is the difference between `git pull` and `git fetch`?

1. **`git fetch`**:
   - Fetches the latest changes from the remote repository without merging them into your current branch.
   - Updates your local repository with the latest changes from the remote repository.
   - Does not modify your working directory or staging area.
   - Useful when you want to check for new changes without changing your local branch.

2. **`git pull`**:
   - Fetches the latest changes from the remote repository and merges them into your current branch.
   - Updates your local repository with the latest changes from the remote repository.
   - Modifies your working directory and staging area.
   - Useful when you want to update your local branch with the latest changes from the remote repository.

In summary, `git fetch` is used to update your local repository with the latest changes from the remote repository without merging them, while `git pull` is used to fetch the latest changes and merge them into your current branch.  

## How to create branch from original repository's main branch?

1. **Permissions needed**
You need write access to the original repository. If you're a maintainer, collaborator, or part of an organization that manages the repository, you can create branches directly in the original repository.
2. **Clone Repository**
   ```bash 
   git clone https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
   ```
3. **Change folder**
cd ORIGINAL_REPOSITORY

4. Create a new branch locally.
   ```bash 
   git checkout -b my-new-branch
   ```

5. Push the branch to the original repository (also called the "remote"):
   ```
   git push origin my-new-branch
   ```

## What is Codespace in github?

GitHub Codespaces is a cloud-based development environment provided by GitHub. It allows developers to code in the cloud, using a fully-featured development environment that can be accessed via a web browser. Here's what GitHub Codespaces is and how it works:

1. **Development Environment**:
   - GitHub Codespaces provides a fully-featured development environment in the cloud.
   - It includes a pre-configured development container with popular tools and languages.

2. **Access**:
   - Developers can access GitHub Codespaces via a web browser.
   - They can start, stop, and manage their codespaces from the GitHub website.

3. **Customization**:
   - Developers can customize their codespace with additional tools and extensions.

4. **Integration**:
   - GitHub Codespaces integrates with GitHub's features, such as pull requests, issues, and discussions. 

5. **Security**:
   - GitHub Codespaces follows GitHub's security practices, ensuring that the development environment is secure.

6. **Cost**:
   - GitHub Codespaces is billed based on usage, with a free tier available for personal accounts.

## How much GitHub Codespaces cost?

GitHub Codespaces is billed based on usage, with a free tier available for personal accounts. The free tier includes:

1. **1500 minutes per month**: This allows for 1500 minutes of usage per month.
2. **2GB of storage**: This includes 2GB of storage for your codespace.
3. **10GB of data transfer**: This includes 10GB of data transfer per month.

## What is Github Actions?

GitHub Actions is a powerful automation tool provided by GitHub. It allows developers to automate tasks within their repositories, such as building, testing, and deploying code. Here's what GitHub Actions is and how it works:

1. **Automated Workflows**:
   - GitHub Actions allows developers to define automated workflows for their repositories.
   - These workflows can be triggered by events, such as push, pull request, or issue creation.

2. **Workflow Configuration**:  
   - Developers can define workflows using YAML files in the `.github/workflows` directory.
   - These workflows can include multiple jobs, each running on a different runner.

3. **Runners**:
   - GitHub Actions uses virtual machines or containers to run workflows.
   - These runners are hosted on GitHub's infrastructure.

4. **Jobs**:
   - Each workflow can contain multiple jobs. 
   - Jobs are steps that are executed on the runner.

5. **Actions**:
   - Actions are reusable workflows that can be used to perform specific tasks.
   - They are defined in the workflow file.

6. **Workflow Triggers**:
   - Workflows can be triggered by events, such as push, pull request, or issue creation. 

7. **Contexts**:
   - Contexts are variables that are available to workflows.
   - They can be used to pass data between jobs.

8. **Secrets**:
   - Secrets are variables that are available to workflows.
   - They can be used to store sensitive information, such as API keys.


## What is Github Gist, what is the use of this?

GitHub Gist is a simple tool for sharing code snippets and small pieces of code. It's a great way to share code with others or to keep track of your ideas. Here's what GitHub Gist is and how it works:

1. **Code Sharing**:
   - GitHub Gist allows developers to share code snippets with others.
   - They can be used to share code with others or to keep track of your ideas.

2. **Code Storage**:
   - GitHub Gist allows developers to store code snippets in a centralized location.
   - They can be used to store code snippets for future reference.

3. **Code Collaboration**:
   - GitHub Gist allows developers to collaborate on code snippets.
   - They can be used to collaborate on code with others. 

## What are different types of workflows in Github Actions?

1. **Continuous Integration (CI)**:
   - CI workflows are used to build, test, and deploy code.
   - They are triggered by push, pull request, or issue creation.

2. **Continuous Deployment (CD)**:
   - CD workflows are used to deploy code to a production environment.
   - They are triggered by push, pull request, or issue creation. 


## What are different types of github repositories?

1. **Public Repository**:
   - Public repositories are accessible to everyone.
   - They can be used to store code that is shared with others.

2. **Private Repository**:
   - Private repositories are accessible to specific users.
   - They can be used to store code that is not shared with others.  

3. **Internal Repository**:
   - Internal repositories are accessible to specific users.
   - They can be used to store code that is not shared with others. 
   - To create an internal repository in GitHub, you'll need to be using GitHub Enterprise Cloud

4. **Forked Repository**:
   - Forked repositories are repositories that are forked from another repository.
   - They can be used to store code that is not shared with others. 

## What is Package in Github?

A package in GitHub is a repository that contains code that can be used by other developers. They are similar to repositories, but they are specifically designed to contain code that can be used by other developers. 

## Can you tell me usecases where Github packages are used?

GitHub Packages is a package hosting service that allows you to host your software packages privately or publicly and use packages as dependencies in your projects. Here are some common use cases for GitHub Packages:

1. Dependency Management:
   - Host and manage private dependencies for your projects.
   - Share common libraries across multiple projects within your organization.

2. CI/CD Integration:
   - Automatically publish packages as part of your continuous integration pipeline.
   - Use versioned packages in your deployment processes.

3. Language-specific Package Hosting:
   - npm packages for JavaScript/Node.js projects
   - pip and conda packages for Python projects
   - Maven packages for Java projects
   - NuGet packages for .NET projects
   - RubyGems for Ruby projects
   - Docker images for containerized applications

4. Internal Tool Distribution:
   - Distribute internal tools and utilities across your organization.
   - Manage different versions of tools for different teams or projects.

5. Plugin/Extension Distribution:
   - Host plugins or extensions for your software platforms.
   - Manage versioning and updates for add-ons.

6. Code Reusability:
   - Package reusable code components for easy integration into multiple projects.
   - Maintain a centralized repository of shared code.

7. Release Management:
   - Manage different versions of your software packages.
   - Control access to pre-release or beta versions.

8. Monorepo Management:
   - Manage packages for different components in a monorepo structure.
   - Simplify dependency management in large, multi-module projects.

9. Open Source Distribution:
   - Host open-source packages for public use.
   - Provide an alternative or supplement to other public package registries.

10. API Distribution:
    - Package and distribute SDKs or client libraries for your APIs.

11. Machine Learning Model Distribution:
    - Host and version machine learning models as packages.

12. Configuration Management:
    - Distribute configuration files or templates as packages.

13. Asset Management:
    - Host and version design assets, documentation, or other non-code resources.

14. Cross-platform Development:
    - Host packages for multiple platforms (e.g., mobile, web, desktop) in one place.

15. Vendor Management:
    - Host vendored or forked dependencies to ensure availability and version control.

Using GitHub Packages offers several benefits:
- Tight integration with GitHub repositories and actions
- Fine-grained access control
- Unified billing with other GitHub services
- Seamless workflow within the GitHub ecosystem

When using GitHub Packages, remember to consider factors like storage limits, bandwidth usage, and access management to ensure it aligns with your project's needs and your organization's policies.


## Hasttags
#GitCommands
#GitWorkflow
#GitHubActions
#GitHubPackages
#GitHubGist
#GitHubCodespaces
#GitHubRepositories

