---
mathjax: true
id: 6264
title: "The Real Story of Nyquist, Shannon, and the Science of Sampling"
date: 2025-04-23
permalink: /dsblog/the-real-story-of-nyquist-shannon-and-the-science-of-sampling
tags:
  - Nyquist
  - Shannon
  - Sampling
  - Signal
  - Processing
  - Theoretical
  - Limitations
categories:
  - dsblog
  - signal-processing

header:
  teaser: /assets/images/dspost/dsp6264-nyquist-shannon-and-the-science-of-sampling.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "The work of Nyquist and Shannon is the most fundamental in digital signal processing. This article discuss that in story format. "
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
auto_number_headings: false
keywords: [The Real Story of Nyquist and Shannon, Sampling Theoretical Limitations, Signal Processing, Nyquist-Shannon Theorem, Sampling Frequency, Analog-to-Digital Conversion]
---

![](/assets/images/dspost/dsp6264-nyquist-shannon-and-the-science-of-sampling.jpg)

# The Story of Nyquist, Shannon, and the Science of Sampling

In the early days of the 20th century, the world was just beginning to hum with the sounds of electric voices. Telephones crackled across cities, Morse code blinked from station to station, and engineers at **Bell Telephone Laboratories** worked tirelessly to harness the invisible — the flow of information through wires.

Among them was a quiet but sharp Swedish-American engineer named **Harry Nyquist**. He didn’t seek fame. He sought **clarity** — specifically, how to transmit human speech over long distances with the least distortion, the least waste, and the most efficiency.

What he discovered — and what would later be perfected by Claude Shannon — became the cornerstone of the **digital age**.



## 1920s: A World Wired by Wires

Back then, transmitting information wasn't cheap. Every extra bit of bandwidth used meant more copper, more cost, more signal degradation. Engineers faced a challenge: **How can we send voice or data using the least possible bandwidth, while still preserving quality?**

This was not a question of convenience — it was a question of infrastructure.

And that’s where **Harry Nyquist** stepped in.



## Harry Nyquist’s Quest (1928)

Nyquist wasn't concerned with music or art. He was concerned with **telegraphy** and **telephony**. His job was to determine the maximum rate at which information could be transmitted over a telegraph wire without the signals overlapping and becoming unintelligible — what engineers called **inter-symbol interference**.

In 1928, he published a now-classic paper titled:
> “[Certain Topics in Telegraph Transmission Theory](https://ieeexplore.ieee.org/document/5055024)”

In it, he concluded something elegant:

> *If a signal is limited to a bandwidth of B Hz, then no more than 2B independent pulses (symbols) per second can be transmitted through it.*

This wasn’t just theory. It told telephone companies how fast they could push voice or data through wires — and where the physical limitations lay.

Human voice has a fundamental frequency range of 80-400 hz (males 80-160 Hz, femails 150-250 Hz, children 250-400 Hz). This is also referred as pitch. While the fundamental frequencies are lower, human voices can produce sounds that extend from approximately 80 Hz to 4 kHz, including harmonics and other frequencies that contribute to the richness and complexity of speech.

As per Nyquist, to transmit 1 Hz we need 2 symbols therefore to transmit human voice over copper wire, we need 8000 symbols per second.

Why 2 and not 1 or 3 or 5? He is saying 1 hz means, one cycle, means 360 degree therefore to digitize this information, which is between 0-360 degree, we need 2 symbols, one at 0 and one at 180, for 2nd frequency at 360 and 540 etc.

In transmission, if you want to send discrete symbols of B Hz without overlap → no more than 2B symbols/sec.

*But Nyquist wasn’t talking about sampling* just yet. That leap would come two decades later — from a young man raised on mathematics, World War II codebreaking, and a fascination with **information itself**.

## Enter Claude Shannon (1940s)

Claude Shannon was working at Bell Labs too — and he was a different category of researcher.

Where Nyquist thought in terms of circuits and transmission rates, Shannon thought in **bits and entropy**. To him, information wasn’t just voice or data — it was **abstract content** that could be encoded, measured, and optimized.

In 1949, Shannon published a revolutionary paper:
> “[Communication in the Presence of Noise](https://ieeexplore.ieee.org/document/1697831)”

In it, he extended Nyquist’s ideas into a more profound realm. He showed that:

> **If a signal contains no frequencies higher than *f*, then it can be perfectly reconstructed from samples taken at a rate of at least *2f* samples per second.**

This is what we now call the **Nyquist-Shannon Sampling Theorem**.

In sampling, you want to capture continuous information without losing anything → at least 2B samples/sec.

## The Insight That Changed Everything

Why does this matter?

Before this theorem, it wasn’t clear how to **digitize** analog signals without losing fidelity. The idea that you could take a continuous waveform — like a human voice, or a violin note — and break it into discrete points (samples), and then *reconstruct it perfectly* was counterintuitive.

But it was true — *if* you sampled at the right rate.

The theorem created a **mathematical bridge** between the analog and digital worlds. That bridge is what allows us to record music, stream videos, make phone calls, and digitize everything from MRIs to Mars rover signals.



## The Practical Impact

Let’s take a real-world example.

- The human voice mostly falls below **4,000 Hz**.
- According to Nyquist-Shannon, we must sample at **at least 8,000 samples per second** to capture it without distortion.
- That’s why the standard sampling rate in telephony is **8 kHz**.

Any less, and strange things happen — signals fold back on themselves, creating **aliasing**, where high frequencies masquerade as lower ones, leading to ghostly distortions.



## Why Did This Work?

At the heart of Shannon’s proof was a deep understanding of **Fourier analysis**. He knew any periodic signal could be broken into a sum of sine waves. If you sample fast enough to capture the highest-frequency sine wave, you can reconstruct the entire signal.

He even showed the math for doing so — using something called the **sinc function** to interpolate the continuous signal from its samples.



## A Tale of Two Thinkers

What’s beautiful is how **Nyquist and Shannon complemented each other**, across time:

| Harry Nyquist (1928)        | Claude Shannon (1949)          |
|-|--|
| Practical engineer          | Theoretical mathematician      |
| Solved symbol transmission | Solved signal reconstruction   |
| Thought in pulses           | Thought in probabilities       |
| Set the 2B limit            | Turned it into a sampling law  |

Together, they laid the groundwork for modern **digital communication**, long before the internet was a glimmer in anyone’s modem.



## A Legacy in Every Sound

Every time you hear a voice message, stream a podcast, or FaceTime with someone halfway across the globe, you’re hearing the quiet echo of **Nyquist and Shannon**.

Their theorem doesn’t just live in textbooks — it lives in the **pixels, samples, and bits** of your digital life.

So the next time you hit “record” or “play,” take a second to thank two brilliant minds who asked a deceptively simple question:

> “How much is enough?”

And gave us an answer that changed the world.


## Frequency ranges of different instruments

Instrument | Frequency Range
--- | ---
Tabla | 50 Hz to 1,000 Hz
Drum | 20 Hz to 500 Hz
Flute | 200 Hz to 2,000 Hz
Violin | 196 Hz to 4,000 Hz
Piano | 27.5 Hz to 4,186 Hz
Sitar | 70 Hz to 1,200 Hz
Human Voice | 80 Ha to 400 Hz

## ✨ Summary

- **Nyquist (1928)** figured out the max number of pulses you could send through a band-limited channel (2B).
- **Shannon (1949)** expanded this to sampling theory: You need at least **2f samples/second** to reconstruct a signal with maximum frequency **f**.
- This rule underpins all of modern digital audio, video, and communication.
