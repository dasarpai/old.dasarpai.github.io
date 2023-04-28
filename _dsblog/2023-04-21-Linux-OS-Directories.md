---
mathjax: true
id: 6055
title: Linux OS Directories 
date: 2023-04-26
permalink: '/dsblog/Linux-OS-Directories'
tags: [Linux] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6055-Linux-OS-Directories.jpg
author: Hari Thapliyaal   
layout: single   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
---

![title](/assets/images/dspost/dsp6055-Linux-OS-Directories.jpg)


# Linux OS Directories

**Linux OS Folders and the purpose.**

## Introduction:

Linux is a widely used operating system that is known for its flexibility and versatility. One of the unique features of Linux is its file system hierarchy, which is organized into a many directories that serve specific purposes. Folder structure of Unix OS and all distributions of Linux is same. Each directory has its own set of files and subdirectories that are used to manage various aspects of the operating system and data folders.

I have seen many people struggle to understand what goes inside what folder on the Linux OS. In this article, we will explore the purpose of each directory in Linux and gain a better understanding of how the file system hierarchy works.


## Software - Core
/boot: Contains the files required for booting the system (e.g., kernel, initrd).
/sbin: Contains essential system binaries (e.g., init, shutdown, ifconfig, etc.).
/bin: Contains essential command binaries (e.g., ls, cp, mv, rm, etc.).
/dev: Contains device files that represent hardware devices (e.g., disks, printers, keyboards, etc.).
/etc: Contains system configuration files (e.g., network configuration, user account information, etc.).
/sys: Contains system device and driver information.
/lib: Contains shared library files that are required for system programs to run.
/lib64: Similar to /lib, but contains 64-bit libraries.

## Software Hardware Attached
/media: Mount point for removable media devices (e.g., USB drives, CDs, DVDs, etc.).
/mnt: Mount point for temporarily mounted filesystems.

## Software Installed
/opt: Contains optional software packages.
/local: Contains locally installed software that is not part of the core system.
/usr: Contains user utilities and applications (e.g., compilers, editors, games, etc.).

## System Related Data
/var: Contains variable data (e.g., logs, databases, spool files, etc.).
/proc: Contains system process information (e.g., running processes, kernel configuration, etc.).
/run: Contains system runtime data (e.g., process IDs, socket files, etc.).
/srv: Contains data for services provided by the system (e.g., web server data).
/tmp: Contains temporary files.

## User/Admin Data 
/root: Home directory for the root user.
/home: Contains the home directories for regular users.

## Conclusion:

In conclusion, the file system hierarchy in Linux is a complex and well-organized system that serves a specific purpose for each directory. Understanding the purpose of each directory is crucial for managing and using Linux effectively. Whether you are a beginner or an advanced user, having a good understanding of the file system hierarchy will help you navigate the system with ease and perform tasks more efficiently.

With this knowledge, you can better understand how the various parts of the Linux operating system work together and gain a deeper appreciation for the power and flexibility that Linux provides.
