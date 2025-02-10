---
mathjax: true
id: 6216
title: "Demystifying NVIDIA GPUs"
date: 2025-02-09
permalink: /dsblog/demystify-nvidia-gpus
tags:
  - NVIDIA
  - GPUs
  - Deep Learning
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6216-Demystify-NVIDIA-GPUs.jpg
excerpt_separator: "<!--more-->"
author: Jane Smith
layout: dspost-layout
excerpt: "Understand different types of NVIDIA GPUs and their naming convention."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords: ["Understanding NVIDIA GPU names", "NVIDIA GPU naming conventions", "NVIDIA GPU for deep learning", "NVIDIA GPU for AI", "NVIDIA GPU for machine learning", "NVIDIA GPU for computer vision"]
---

![Demystifying NVIDIA GPUs](/assets/images/dspost/dsp6216-Demystify-NVIDIA-GPUs.jpg)

# Demystifying NVIDIA GPUs

## Introduction

NVIDIA has been in the GPU manufacturing business since 1993. They offer hundreds of different types of GPUs for various segments and purposes. For those not in the GPU infrastructure business, it can be confusing to understand even their naming conventions. In this article, I will do my best to help you understand the different types of NVIDIA GPUs and their naming conventions.

Any GPU can be identified by asking following questions.
- What architecture that GPU is using?
- For what purpose that GPU is used?
- What type of VRAM it has?
- Whether it has ECC (Error Correction Code) memory?
- What is the brand classification of the GPU?
- Whether it has Ray Tracing support?
- What generation of Tensor Cores it has?
- How many CUDA Cores it has?
- How much FP64 support it has?
- Does that GPU has Multi-GPU support?
- How much power that GPU consumes?

## What are these terms?
First let's understand these terms.

1. **Architecture**: The fundamental design and technology behind a GPU, determining its performance and capabilities. Example: NVIDIA's Ampere architecture powers the RTX 3000 series GPUs.

2. **Purpose**: The primary application or use case for the GPU. Example: NVIDIA GeForce GPUs are designed for gaming, while Tesla GPUs are optimized for AI and data centers.

3. **VRAM Type**: The type of memory used in the GPU to store graphical data, affecting speed and bandwidth. Example: GDDR6 is commonly used in gaming GPUs like the NVIDIA RTX 3080.

4. **ECC Memory**: Error Correction Code memory, which detects and corrects data errors, crucial for reliability in professional workstations. Example: NVIDIA Quadro GPUs often include ECC memory.

5. **Brand Classification**: The category or series of a GPU within its brand, indicating its target market. Example: NVIDIA GeForce (gaming), AMD Radeon (gaming), or NVIDIA Quadro (professional).

6. **Ray Tracing Support**: A feature that enables realistic lighting, shadows, and reflections in real-time rendering. Example: NVIDIA RTX 2060 supports ray tracing.

7. **Tensor Core Generation**: Specialized cores in a GPU designed for AI and machine learning tasks, with newer generations offering better performance. Example: NVIDIA Ampere GPUs feature 3rd-gen Tensor Cores.

8. **CUDA Cores**: Parallel processing units in NVIDIA GPUs that handle multiple tasks simultaneously. Example: The NVIDIA RTX 3090 has 10,496 CUDA cores.

9. **FP64 Support**: The GPU's ability to perform double-precision floating-point calculations, important for scientific computing. Example: NVIDIA A100 has strong FP64 performance.

10. **Multi-GPU Support**: The ability to combine multiple GPUs for increased performance, often used in high-end setups. Example: NVIDIA SLI or AMD CrossFire technologies enable multi-GPU configurations.

11. **Power Consumption**: The amount of electrical power a GPU requires, measured in watts (W). Example: The NVIDIA RTX 3080 has a power consumption of around 320W.


### **NVIDIA GPU Classification – Variables & Values**  

| **Variable**        | **Possible Values**                                       | **Description** |
|---------------------|-----------------------------------------------------------|----------------|
| **Architecture**    | *Kepler, Maxwell, Pascal, Volta, Turing, Ampere, Hopper, Ada Lovelace, Blackwell* | Core design used in a GPU generation |
| **GPU Usage**       | *Consumer Gaming, AI Training, AI Inference, Data Center, Workstation, HPC (High-Performance Computing), Embedded Systems* | Main purpose of the GPU |
| **Product Line**    | *GeForce GTX, GeForce RTX, Tesla, Quadro, TITAN, RTX Workstation, Jetson, A-Series, H-Series, B-Series* | Brand classification based on usage |
| **VRAM Type**       | *GDDR5, GDDR6, GDDR6X, HBM2, HBM3, HBM3e* | Type of memory used |
| **ECC Memory**      | *Yes, No* | Error Correction Code (important for AI research & HPC) |
| **Tensor Cores**    | *None, 1st Gen, 2nd Gen, 3rd Gen, 4th Gen, 5th Gen* | AI acceleration cores |
| **Ray Tracing (RTX)** | *Yes, No* | Hardware-accelerated ray tracing for graphics |
| **CUDA Cores**      | *Few (GTX Series), Many (RTX Series), Extreme (Data Center GPUs)* | Parallel processing units for compute tasks |
| **FP64 (Double Precision)** | *Low, Medium, High* | Important for scientific calculations |
| **Multi-GPU Support** | *No, NVLink, PCIe Scaling* | Ability to connect multiple GPUs |
| **Power Consumption** | *Low (<100W), Medium (150-300W), High (350-450W), Extreme (600W+)* | GPU power requirements |

---

### **Example Entries for Different GPUs**  

#### **1. RTX 4090 (High-End Gaming + AI)**
| **Variable**          | **Value** |
|----------------------|-----------|
| **Architecture**      | Ada Lovelace |
| **GPU Usage**        | Consumer Gaming, AI Training, AI Inference |
| **Product Line**     | GeForce RTX |
| **VRAM Type**       | GDDR6X |
| **ECC Memory**      | No |
| **Tensor Cores**    | 4th Gen |
| **Ray Tracing (RTX)** | Yes |
| **CUDA Cores**      | Many |
| **FP64 (Double Precision)** | Low |
| **Multi-GPU Support** | No |
| **Power Consumption** | High (450W) |

---

#### **2. Tesla K80 (Old AI Compute GPU)**

| **Variable**         | **Value** |
|---------------------|-----------|
| **Architecture**     | Kepler |
| **GPU Usage**       | AI Training, Data Center, HPC |
| **Product Line**    | Tesla |
| **VRAM Type**       | GDDR5 |
| **ECC Memory**      | Yes |
| **Tensor Cores**    | None |
| **Ray Tracing (RTX)** | No |
| **CUDA Cores**      | Medium |
| **FP64 (Double Precision)** | High |
| **Multi-GPU Support** | PCIe Scaling |
| **Power Consumption** | Medium (150-300W) |

---

#### **3. H100 (Latest AI GPU for Data Centers)**

| **Variable**        | **Value** |
|--------------------|-----------|
| **Architecture**    | Hopper |
| **GPU Usage**      | AI Training, AI Inference, Data Center, HPC |
| **Product Line**   | H-Series |
| **VRAM Type**      | HBM3 |
| **ECC Memory**     | Yes |
| **Tensor Cores**   | 4th Gen |
| **Ray Tracing (RTX)** | No |
| **CUDA Cores**     | Extreme |
| **FP64 (Double Precision)** | High |
| **Multi-GPU Support** | NVLink |
| **Power Consumption** | Extreme (600W+) |


## We have heard words like Tesla, Kepler and GTX. What are they and how they are related?

### What are these terms?  
- **Kepler** is an **architecture** (2012–2014) used in multiple GPU series.  
- **GTX** is a **consumer gaming GPU lineup** that included Kepler-based GPUs.  
- **Tesla** is a **professional & AI/HPC (High-Performance Computing) GPU lineup**, which also used the Kepler architecture.  

### What are Kepler based GPUS?
Kepler-based GPUs in Different NVIDIA Product Lines

| **GPU Series** | **Kepler-Based Models** | **Purpose** |
|--------------|---------------------|------------|
| **GTX (Gaming GPUs)** | GTX 780 Ti, GTX 780, GTX 770, GTX 760, GTX 750 Ti | High-performance gaming & general computing |
| **Tesla (Data Center GPUs)** | Tesla K40, Tesla K80, Tesla K20 | AI, scientific computing, HPC workloads |
| **Quadro (Workstation GPUs)** | Quadro K6000, Quadro K5000 | Professional 3D rendering, CAD, content creation |

---

### Key Differences and Relationship Between Tesla, Kepler, and GTX  

| Feature | **GTX (Gaming GPUs)** | **Tesla (AI/HPC GPUs)** |
|---------|----------------|-----------------|
| **Target Audience** | Gamers, general users | AI researchers, scientific computing |
| **CUDA Cores** | Optimized for gaming | Optimized for AI & compute |
| **Double Precision (FP64)** | Limited | High precision for AI/HPC |
| **ECC Memory (Error Correction)** | No | Yes (important for research) |
| **Driver Optimization** | Gaming, DirectX, OpenGL | AI, deep learning, CUDA, HPC |
| **VRAM Type** | GDDR5 | GDDR5, ECC support |

---

### How Tesla & GTX Differ in AI Workloads
- **GTX GPUs (e.g., GTX 780 Ti)** can run AI models but are not optimized for deep learning or scientific accuracy.  
- **Tesla GPUs (e.g., Tesla K80)** have **higher FP64 performance, ECC memory, and better CUDA support** for AI research.  
- Today, Tesla has been **replaced by modern AI-focused GPUs like A100, H100, and Blackwell (B100, B200)**.  

### Why Does This Matter Today?  
- If you're doing **AI freelance work**, modern **RTX GPUs (4090, 4070, etc.)** have replaced old Tesla/Kepler GPUs for deep learning.  
- If you're working with **data center-level AI**, then you’d look at modern **A100, H100, or Blackwell GPUs** instead of old Tesla cards.  

## What are different GPU architecture from nvidia?

NVIDIA has released multiple GPU **architectures** over the years, each bringing improvements in performance, efficiency, and AI capabilities. Here's a breakdown of the major architectures:


### **Latest & Current Architectures**  

| Architecture | Year | Notable GPUs | Key Features |
|-------------|------|-------------|-------------|
| **Blackwell** | 2024 | B100, B200, RTX 50 Series (upcoming) | AI-focused, HBM3e memory, improved efficiency, NVLink 5.0 |
| **Ada Lovelace** | 2022 | RTX 4090, 4080, 4070, 4060, 4050 | 4th-gen Tensor Cores, DLSS 3, better ray tracing |
| **Hopper** | 2022 | H100, H200 | Data center AI GPUs, FP8 support, Transformer Engine |
| **Ampere** | 2020 | RTX 3090, 3080, A100, GA102 | 3rd-gen Tensor Cores, PCIe 4.0, AI optimizations |
| **Turing** | 2018 | RTX 2080 Ti, 2080, 2060, GTX 16 Series | First with RTX (Ray Tracing), DLSS 1.0 |


### **Older Architectures (Legacy & Gaming Focused)**  

| Architecture | Year | Notable GPUs | Key Features |
|-------------|------|-------------|-------------|
| **Volta** | 2017 | Tesla V100, Titan V | First with Tensor Cores, HBM2 memory |
| **Pascal** | 2016 | GTX 1080 Ti, 1080, 1070, 1060 | GDDR5X, power-efficient, great gaming performance |
| **Maxwell** | 2014 | GTX 980, 970, 960 | Big power efficiency improvements |
| **Kepler** | 2012 | GTX 780 Ti, 780, 770 | First with GPU Boost, CUDA advancements |
| **Fermi** | 2010 | GTX 580, 480, Tesla GPUs | Early CUDA support, power-hungry |


### **Specialized Architectures for AI & Data Centers**
- **Tesla** (Fermi, Kepler, Maxwell) – Early AI & HPC focus
- **Pascal & Volta** – Introduced deep learning accelerations
- **Ampere, Hopper, Blackwell** – Modern AI training GPUs


### **Which Architecture Should You Consider?**
- If you want **gaming + AI workloads**, go for **Ada Lovelace (RTX 40)** or wait for **Blackwell (RTX 50)**.  
- If you need **AI research & LLM training**, **Hopper (H100) or Blackwell (B100, B200)** are the best.  
- If you're using an **RTX 4070**, you already have **Ada Lovelace**, which is quite powerful for AI freelancing.  


## How much power GeForce RTX 4070 consumes?
The power consumption of an **RTX 4070** in a day depends on **usage, power draw, and duration**. Let's break it down:  

### RTX 4070 Power Draw (Approximate)

| **Usage Type** | **Power Consumption (Wattage, W)** |
|--------------|----------------------------------|
| **Idle / Low Usage** | ~15-20W |
| **Web Browsing / Light Work** | ~40-50W |
| **Gaming / AI Inference** | ~150-180W |
| **AI Training / Full Load** | ~200-220W |

### Power Consumption Formula  
**Energy Consumption (kWh) = (GPU Wattage × Hours Used) ÷ 1000**  

**Example Scenarios (for 24 hours)**  

| **Usage Scenario** | **Hours Per Day** | **Wattage (W)** | **Energy Used (kWh)** | **Cost (at $0.15/kWh)** |
|--------------------|------------------|------------------|-----------------|-----------------|
| **Idle / Light Work** | 24 hrs | 20W | 0.48 kWh | ~$0.07 |
| **Gaming (3 hrs) + Light Work (5 hrs)** | 3 hrs (180W) + 5 hrs (50W) | ~ | ~0.69 kWh | ~$0.10 |
| **AI Inference (8 hrs) + Light Work (8 hrs)** | 8 hrs (180W) + 8 hrs (50W) | ~ | ~1.84 kWh | ~$0.28 |
| **Full AI Training (12 hrs) + Idle (12 hrs)** | 12 hrs (220W) + 12 hrs (20W) | ~ | ~3.0 kWh | ~$0.45 |

Note: Cost of electricity is different in the differnt countries. It depends upon country, state of the country, provider, consumer type and how much they consume. In India, electricity is provided by various companies like Reliance, TATA, BPL, etc. and the price is different according to the company and the state. The rate of electricity in India varies between 12 - 13 cents per kilowatt-hour for industrial users, and roughly 8 - 9 cents per kilowatt-hour for residential users.

The average electric rate in the United States is 16.54 cents per kWh. Louisiana has the cheapest electric rate (on average) with customers paying 11.23 cents per kWh for electricity. Electricity rates in Hawaii are the highest with rates 42.10 cents per kWh for electricity.


### Monthly & Yearly Estimates (AI Workload)
If you run **AI workloads for 8 hours/day** at ~180W:  
- **Daily:** ~1.44 kWh → **$0.22/day**  
- **Monthly:** ~43.2 kWh → **$6.48/month**  
- **Yearly:** ~525.6 kWh → **$78.84/year**  