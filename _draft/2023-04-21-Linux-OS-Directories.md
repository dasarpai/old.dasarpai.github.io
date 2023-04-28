replace nn, title, slug
---
mathjax: true
id: nn
title: title 
date: 2023-01-28
permalink: '/dsblog/slug'
tags: [NLP] 
categories: 

header:
    teaser: /assets/images/dspost/dspnn-slug.jpg
author: Hari Thapliyaal   
layout: single   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
---

![title](/assets/images/dspost/dspnn-slug.jpg)


# title

Linux OS Folders and the purpose.

SOFTWARE - CORE
/boot: Contains the files required for booting the system (e.g., kernel, initrd).
/sbin: Contains essential system binaries (e.g., init, shutdown, ifconfig, etc.).
/bin: Contains essential command binaries (e.g., ls, cp, mv, rm, etc.).
/dev: Contains device files that represent hardware devices (e.g., disks, printers, keyboards, etc.).
/etc: Contains system configuration files (e.g., network configuration, user account information, etc.).
/sys: Contains system device and driver information.
/lib: Contains shared library files that are required for system programs to run.
/lib64: Similar to /lib, but contains 64-bit libraries.

SOFTWARE FOR HARDWARE ATTACHED
/media: Mount point for removable media devices (e.g., USB drives, CDs, DVDs, etc.).
/mnt: Mount point for temporarily mounted filesystems.

SOFTWARE 
/opt: Contains optional software packages.
/local: Contains locally installed software that is not part of the core system.
/usr: Contains user utilities and applications (e.g., compilers, editors, games, etc.).

SYSTEM RELATED DATA
/var: Contains variable data (e.g., logs, databases, spool files, etc.).
/proc: Contains system process information (e.g., running processes, kernel configuration, etc.).
/run: Contains system runtime data (e.g., process IDs, socket files, etc.).
/srv: Contains data for services provided by the system (e.g., web server data).
/tmp: Contains temporary files.

USER/ADMIN DATA 
/root: Home directory for the root user.
/home: Contains the home directories for regular users.
