---
mathjax: true
id: 6252
title: Audio Video Processing Concepts
date: 2025-03-28
permalink: /dsblog/audio-video-processing-concepts
tags:
  - Audio Processing
  - Video Processing
  - Digital Signal Processing
  - Image Processing
  - Computer Vision
  - Machine Learning
categories:
  - dsblog
  - Technology

header:
  teaser: /assets/images/dspost/dsp6252-audio-video-processing-concepts.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn the foundation of audio and video processing, including digital signal processing, image processing, and computer vision. Understand the concepts of audio and video processing and how they are used in various applications."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
auto_number_headings : false
keywords:
  - "Digital Signal Processing"
  - "Image Processing"
  - "Computer Vision"
  - "Audio Processing"
  - "Video Processing"
---

![Audio Video Processing Concepts](/assets/images/dspost/dsp6252-audio-video-processing-concepts.jpg)

# Foundational Concepts of Audio and Video Processing

Whether you are multimedia professional of deep learning Engineering, if you are dealing with audio and video processing, you will need to understand the core concepts of audio and video processing. My this guide is focussed on some of the key concepts.

A digital microphone is a device that captures sound (air pressure variations) and converts it into digital signals.
Internally, it contains an analog-to-digital converter (ADC) that performs the conversion from analog audio to digital audio.

A digital camera captures light (optical signals) through an image sensor (like CMOS or CCD), which generates analog electrical signals. These signals are then passed through an ADC to be converted into digital image data.

## Let's understand Image and Colors
An **image** is a grid of **pixels**, where each pixel represents the color and intensity of a small part of the image.  
- A **black-and-white (grayscale)** image typically has **one channel (layer)**, where each pixel value ranges from **0 (black)** to **255 (white)**.
- A **color image** usually uses **three channels (RGB)**  
- **Red**, **Green**, and **Blue** — each with a value between **0 and 255**, requiring **3 bytes per pixel**.
 If the image supports **transparency**, it includes a **fourth channel** called **Alpha**, which represents opacity — also from **0 (fully transparent)** to **255 (fully opaque)**.
- A pixel in an **RGBA image** takes **4 bytes** (1 byte per channel).
- A 1024×1024 RGB image has 2²⁰ pixels, and since each pixel uses 3 bytes, the total uncompressed size is 3 × 2²⁰ = 3,145,728 bytes (~3 MB). It this png file then it will take 4 MB space, it it is grayscale image then it will take only 1 MB space.

## Let's understand Sound and Air Pressure Signals.
**Sound** is a continuous **analog signal** created by air pressure variations. In digital audio, this signal is captured and sampled at regular intervals.

- A **sample** is one measurement of amplitude at a given point in time.
- The number of samples per second is the **sample rate** (e.g., **44.1kHz** means 44,100 samples per second).
- Each sample can be stored using:
  - **8-bit (1 byte)** → 256 possible values
  - **16-bit (2 bytes)** → 65,536 values (more common for quality audio)
  - **24-bit or 32-bit** → used in high-fidelity applications
- Generally, a sample can be represented by one byte, but most modern audio uses **16-bit samples**, meaning **2 bytes per sample**.
- Audio file size
    - If Sample rate: **44,100 samples/sec**
    - and Sample size: **16-bit (2 bytes)**
    - and Channels: **1 (mono)** (for all voice signals)
    - then file size per second = `44,100 samples * 2 bytes = 88,200 bytes ≈ 86.1 KB`
    - but for **stereo** (2 channels), it doubles:
    - `44,100 * 2 bytes * 2 channels = 176,400 bytes ≈ 172.3 KB`

## What is movie?
A movie is a series of images (called frames) played in rapid succession to create the illusion of motion.
When a tool displays 24 images per second, the human eye perceives continuous movement — this is known as the frame rate (24 fps). Higher frame rates like 60 fps are often used for action sequences or sports, where smoother and more fluid motion is needed.


## 🎧 **Audio Processing Concepts**

### 1. **Sampling Rate**
- Number of samples taken per second (e.g., **44.1kHz**, **16kHz**).
- Higher rate = more detail, bigger files.
- Common: 44.1kHz (music), 16kHz (speech), 8kHz (telephony).

### 2. **Bit Depth**
- Number of bits per sample (e.g., **16-bit**, **24-bit**).
- Higher bit depth = more dynamic range.

### 3. **Channels**
- **Mono** = 1 channel, **Stereo** = 2 channels.
- Multichannel = 5.1, 7.1 surround sound.

### 4. **Bitrate**
- Data rate (e.g., **128kbps**, **64kbps**).
- Affects audio quality and file size.

### 5. **Audio Codecs**
- Compression algorithms (e.g., **MP3**, **AAC**, **Opus**, **FLAC**).
- **Lossy** (MP3) vs **Lossless** (FLAC).

### 6. **Waveform & Spectrogram**
- Visual tools to represent audio signals in time (waveform) or frequency (spectrogram).

### 7. **Noise Reduction, Equalization, Normalization**
- Signal processing techniques for improving or adjusting audio.

---

## 🎥 **Video Processing Concepts**

### 1. **Resolution**
- Frame size: **1920x1080 (1080p)**, **1280x720 (720p)**, etc.
- Higher res = sharper image + larger file size.

### 2. **Frame Rate (fps)**
- Frames per second: **24**, **30**, **60 fps**.
- Higher = smoother motion, but more data. For action movies to capture every transition we need high frame rates. For natural scenes or slow motions or slow documentaries movies we need lower frame rate. 

### 3. **Aspect Ratio**
- Width to height ratio (e.g., 16:9, 4:3, 9:16 for vertical videos).

### 4. **Bitrate**
- Controls video quality & size (e.g., 1500kbps).
- Can be constant (CBR) or variable (VBR).

Great — these are crucial video processing concepts, especially for your article! Here's a **more detailed and clarified explanation** for each section so readers can truly understand how these parts work together in a video file:

---

## 🎞️ 5. **Video Codecs**

> A **codec** (short for *coder-decoder*) is an algorithm that **compresses and decompresses video** to reduce file size without (too much) loss of quality.

Popular video codecs:
- **H.264 (AVC)**: Most widely supported. Excellent balance of quality, size, and speed. Used in YouTube, streaming, mobile devices.
- **H.265 (HEVC)**: Next-gen version of H.264. **~50% better compression** at the same quality — but **requires more processing power** and has **limited hardware support** on older devices.
- **VP9**: Open-source alternative to H.265 developed by Google. Used in **YouTube** for higher resolution videos.
- **AV1**: Newer open-source codec designed for modern high-res streaming (4K/8K). **Best compression**, but **slower encoding** and not yet universally supported in hardware.

### 👉 Summary:
| Codec | Compression | Support | Use Case |
|-------|-------------|---------|----------|
| H.264 | Good        | Universal | Standard streaming & recording |
| H.265 | Excellent   | Limited (older devices may lag) | 4K, HEVC content |
| VP9   | Very Good   | Web (Chrome/YouTube) | High-res web video |
| AV1   | Best        | Growing (newer devices) | Future-proof streaming |

---

## 📦 6. **Containers / Formats**

> A **container** is like a box that holds different types of data streams: **video, audio, subtitles, metadata** — all bundled into a single file.

Popular containers:
- **MP4**: Most common, supports H.264, H.265. Compatible with nearly everything (browsers, phones, TVs).
- **MKV**: Open-source, supports almost any codec, very flexible. Common for high-quality video (e.g., Blu-ray rips).
- **MOV**: Apple’s container format. High quality, used in professional editing.
- **AVI**: Older Microsoft format, less efficient, but still seen in legacy apps.

👉 Analogy:  
Think of **codec = language**, and **container = suitcase** that holds the movie + soundtrack + extras.

---

## 🎨 7. **Color Space & Chroma Subsampling**

### **Color Space**
- A method of representing color. Common ones:
  - **RGB**: Red-Green-Blue — used for monitors, raw images.
  - **YUV** (or YCbCr): Used in video — separates **luma (Y)** = brightness, and **chroma (U/V)** = color.
    - Humans perceive brightness better than color, so we can compress color info more heavily — which brings us to...

### **Chroma Subsampling**
- Technique to reduce file size by lowering color resolution while preserving brightness.
- Formats:
  - **4:4:4** — no subsampling (full color + brightness)
  - **4:2:2** — some color reduction
  - **4:2:0** — most common in compressed video (e.g., H.264)

✅ **4:2:0** means:
- For every 4 luma (Y) samples, only **1 chroma sample** for U and V.
- Result: Good visual quality + great compression.

---

## 🔁 8. **Keyframes & GOP (Group of Pictures)**

Video compression doesn’t store every full frame — it stores **changes between frames** to save space.

- **I-frame (Intra-coded frame)**: A full image. Like a JPEG. Can be decoded on its own.
- **P-frame (Predicted frame)**: Stores changes **from the previous frame**.
- **B-frame (Bi-directional frame)**: Stores changes **between previous and future frames**.

### **GOP = Group of Pictures**
- A sequence like: `I B B P B B P ... I`
- Starts with an I-frame, followed by P/B-frames.
- Smaller GOP = easier seeking/editing, larger GOP = better compression.


---

## 🔁 **Common to Both**

### 1. **Transcoding**
- Re-encoding from one format/codec to another.

### 2. **Compression**
- **Lossy** (discard some data) vs **Lossless** (no data loss).

### 3. **Latency / Sync**
- Keeping audio/video aligned.

### 4. **Streaming vs Local Playback**
- Adaptive bitrate streaming (HLS, DASH), buffering, encoding-on-the-fly.

---

## 🛠 Tools to Learn
- **FFmpeg** – Swiss Army knife for audio/video.
- **Audacity** – Audio editing.
- **HandBrake** – GUI video transcoder.
- **OBS Studio** – Recording & streaming.
- **Adobe Premiere / DaVinci Resolve** – Professional video editing.
- **Python Libs** – `pydub`, `moviepy`, `ffmpeg-python`, `OpenCV` for automation.
