---    
mathjax: true    
id: 6055    
title: Linux OS Directories     
date: 2023-04-26    
permalink: '/dsblog/Linux-OS-Directories'    
tags: [Linux]     
categories:
  - dsblog     
    
header:    
    teaser: /assets/images/dspost/dsp6055-Linux-OS-Directories.jpg    
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"    
---    
    
![Linux OS Directories](/assets/images/dspost/dsp6055-Linux-OS-Directories.jpg)    
        
# Linux OS Directories    
    
**Linux OS Folders and the purpose.**    
    
## Introduction:    
    
Linux is a widely used operating system that is known for its flexibility and versatility. One of the unique features of Linux is its file system hierarchy, which is organized into a many directories that serve specific purposes. Folder structure of Unix OS and all distributions of Linux is same. Each directory has its own set of files and subdirectories that are used to manage various aspects of the operating system and data folders.    
    
I have seen many people struggle to understand what goes inside what folder on the Linux OS. In this article, we will explore the purpose of each directory in Linux and gain a better understanding of how the file system hierarchy works.    
    

A typical Linux filesystem includes the following high-level directories, each serving specific purposes.
These directories are part of the Filesystem Hierarchy Standard (FHS) which defines the directory structure and directory contents in Unix and Unix-like operating systems. This standard helps ensure consistency and predictability across different Linux distributions.

    
## Software - Core    
1. /boot: Contains the files required for booting the system (e.g., kernel, initrd).    
2. /sbin: Contains essential system binaries (e.g., init, shutdown, ifconfig, etc.).    
3. /bin: Contains essential user binaries (executable programs) needed for system boot and for users. (e.g., ls, cp, mv, rm, etc.).  
4. /dev: Holds device files, which are special files that represent hardware devices and peripherals (e.g., disks, printers, keyboards, etc.). Examples include `/dev/sda` (a hard drive) and `/dev/tty` (terminals).
5. /etc: Contains configuration files for the system and installed applications (network configuration, user account information, etc.). Examples include `/etc/passwd` (user account information) and `/etc/fstab` (filesystems to be mounted at boot). 
6. /sys: A virtual filesystem that provides information about devices, drivers, and kernel features. Similar to `/proc`, but focused more on the hardware.
7. /lib: Contains shared libraries needed by essential system binaries to run, these binaries are located in `/bin` and `/sbin`. Examples include libraries for C standard functions.
8. /lib64: Contains 64-bit libraries on systems that support both 32-bit and 64-bit applications.    
    
## Software Hardware Attached    
9. /media: Mount point for removable media devices (e.g., USB drives, CDs, DVDs, etc.). Designed for automatically mounting removable media such as CDs, DVDs, USB drives, and other portable devices. Commonly used by desktop environments and other software to automatically mount and unmount removable media. Mount points under /media are often automatically created and managed by the operating system or desktop environment when removable media is inserted. For example, when you insert a USB drive, it might automatically mount to /media/username/USB_DRIVE_LABEL.   
10. /mnt: Mount point for temporarily mounted filesystems. Typically used by system administrators for manual mounts, such as mounting external drives, network shares, or other filesystems temporarily. You might manually mount a network share to /mnt/network or an external USB drive to /mnt/usb. `/mnt/usb` is used as a manual mount point for a USB drive. command: sudo mount /dev/sdb1 /mnt/usb

    
## Software Installed    
11. /opt: Contains optional software packages.    
12. /local: Contains locally installed software that is not part of the core system.   
13. /usr: Contains user utilities and applications (e.g., compilers, editors, games, etc.). It contains user binaries, libraries, documentation, and source code. It is typically divided into subdirectories like `bin` (additional user binaries), `lib` (libraries for user binaries), and `share` (shared data).   
    
## System Related Data    
14. /var: Contains variable data files, such as logs, databases, email spools, and transient and temporary files. Examples include `/var/log` for log files and `/var/spool` for mail and printer spool files.  
15. /proc: A virtual filesystem that provides a mechanism to access kernel and process information. Files here represent the current state of the system. For example, `/proc/cpuinfo` contains information about the CPU. (e.g., running processes, kernel configuration, etc.).    
16. /run: Contains system runtime data (e.g., process IDs, socket files, etc.).    
17. /srv: Contains data for services provided by the system (e.g., web server data).    
18. /tmp: A directory for temporary files that are often cleared on reboot. Applications use this directory to store temporary data.    
    
## User/Admin Data     
19. /root: Home directory for the root user.    
20. /home: Contains the home directories for regular users. For instance, a user named "hari" would have a home directory at `/home/hari`.
   

## How to access Linux in Windows Environment?

Without the headache of maintaining traditional virtual machine or without maintaining dualboot setup there are two ways:
 
A. You can install WSL (windows subsystem for linux) on windows machine. Then within the windows environment you can run WSL and then excute linux command. 
   
B. You can start a docker container. For this you need to have docker desktop installed on your machine. Then run the docker. Next you need to pull "busybox" a popular linux image in docker from docker hub to your desktop docker. Finally you need to run this image in some container within the docker. For details, read [docker busybox.](https://hub.docker.com/_/busybox)

## Conclusion:    
    
In conclusion, the file system hierarchy in Linux is a complex and well-organized system that serves a specific purpose for each directory. Understanding the purpose of each directory is crucial for managing and using Linux effectively. Whether you are a beginner or an advanced user, having a good understanding of the file system hierarchy will help you navigate the system with ease and perform tasks more efficiently.    
    
With this knowledge, you can better understand how the various parts of the Linux operating system work together and gain a deeper appreciation for the power and flexibility that Linux provides.    
