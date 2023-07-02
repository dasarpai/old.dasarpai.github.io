---
mathjax: true
id: 6069
title: 'What is GAN Architecture?'
date: 2023-07-03
permalink: '/dsblog/What-is-GAN-Architecture'
tags: [NLP, AI Transformers, Deep Learning, GAN] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6069-What-is-GAN-Architecture.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![What is GAN Architecture?](/assets/images/dspost/dsp6069-What-is-GAN-Architecture.jpg) 

# What is GAN Architecture?

## GAN Paper Summary 
| # | GAN | Date | Architecture Type | Research Organization  |Paper | Author Name
| --- | --- | --- | --- | ---  |--- | ---
1 | [AAE]() [Paper](https://arxiv.org/abs/1511.05644) | Jul, 1905 | GAN | University of Montreal  |Adversarial Autoencoder | Alireza Makhzani et al.
2 | [cGANs]() [Paper](https://arxiv.org/abs/1411.1784) | Jul, 1905 | GAN | University of Montreal  |Conditional GAN | Mehdi Mirza and Simon Osindero
3 | [CycleGAN]() [Paper](https://arxiv.org/abs/1703.10593) | Jul, 1905 | GAN | University of California, Berkeley  |Cycle-Consistent GAN | Jun-Yan Zhu et al.
4 | [DCGAN]() [Paper](https://arxiv.org/abs/1511.06434) | Jul, 1905 | GAN | OpenAI  |Deep Convolutional GAN | Alec Radford et al.
5 | [DiscoGAN]() [Paper](https://arxiv.org/abs/1703.05192) | Jul, 1905 | GAN | Seoul National University  |DiscoGAN | Taeksoo Kim et al.
6 | [EGAN]() [Paper](https://arxiv.org/pdf/1803.00657) | Jul, 1905 | GAN | The Chinese University of Hong Kong  |Energy-Based GAN | Zhaoxin Li et al.
7 | [GAN]() [Paper](https://arxiv.org/abs/1406.2661) | Jul, 1905 | GAN | University of Montreal  |Generative Adversarial Network | Ian Goodfellow et al.
8 | [IsGAN]() [Paper](https://arxiv.org/abs/1702.04482) | Jul, 1905 | GAN | Carnegie Mellon University  |Improved-Synthesis GAN | Zhiting Hu et al.
9 | [Large Scale GAN]() [Paper](https://arxiv.org/abs/1809.11096) | Jul, 1905 | GAN | University of Edinburgh  |Large Scale GAN Training for High Fidelity Natural Image Synthesis | Andrew Brock et al.
10 | [LSGAN]() [Paper](https://arxiv.org/abs/1611.04076) | Jul, 1905 | GAN | University of California, Berkeley  |Least Squares GAN | Xudong Mao et al.
11 | [PGAN]() [Paper](https://arxiv.org/abs/1710.10196) | Jul, 1905 | GAN | NVIDIA  |Progressive Growing of GANs | Tero Karras et al.
12 | [pixelRNN]() [Paper](https://arxiv.org/abs/1601.06759) | Jul, 1905 | GAN | Google DeepMind  |Pixel Recurrent Neural Networks | Aaron van den Oord et al.
13 | [StackGAN]() [Paper](https://arxiv.org/abs/1612.03242) | Jul, 1905 | GAN | Carnegie Mellon University  |StackGAN | Han Zhang et al.
14 | [StyleGAN]() [Paper](https://arxiv.org/abs/1812.04948) | Jul, 1905 | GAN | NVIDIA  |StyleGAN | Tero Karras et al.
15 | [text-to-image]() [Paper](https://arxiv.org/abs/1605.05396) | Jul, 1905 | GAN | University of Michigan  |Generative Adversarial Text-to-Image Synthesis | Scott Reed et al.
16 | [WGAN]() [Paper](https://arxiv.org/abs/1701.07875) | Jul, 1905 | GAN | New York University  |Wasserstein GAN | Martin Arjovsky et al.

## GAN Capabilities
| # | GAN | Objective | Summary | NLP Tasks | CV Tasks
| --- | --- | --- | --- | --- | ---
1 | AAE | Adversarial Autoencoder | A type of autoencoder that combines generative and discriminative models through an adversarial process. | - | Image Generation
2 | cGANs | Conditional Generative Adversarial Networks | A generative model that can generate samples conditioned on specific input conditions or labels. | - | Image Generation, Image-to-Image Translation
3 | CycleGAN | Cycle-Consistent Generative Adversarial Network | A model for image-to-image translation that learns mappings between two domains without paired training data. | - | Image-to-Image Translation
4 | DCGAN | Deep Convolutional Generative Adversarial Network | A deep convolutional neural network architecture for training generative models using GANs. | - | Image Generation
5 | DiscoGAN | Discover Cross-Domain Relations with GANs | A GAN-based model that learns to map images between different domains without paired training data. | - | Image-to-Image Translation
6 | EGAN | Energy-Based Generative Adversarial Network | A generative model that assigns an energy score to each sample and generates samples with low energy. | - | Image Generation
7 | GAN | Generative Adversarial Network | A framework that consists of a generator and a discriminator network that compete in a two-player min-max game. | - | Image Generation
8 | IsGAN | Improved Wasserstein GAN | A variation of the Wasserstein GAN that improves stability and convergence during training. | - | Image Generation
9 | Large Scale GAN | Large Scale Generative Adversarial Network | GAN models that are designed for generating high-resolution and complex images. | - | Image Generation
10 | LSGAN | Least Squares Generative Adversarial Network | A GAN variant that uses least squares loss functions to improve the training stability and reduce mode collapse. | - | Image Generation
11 | PGAN | Progressive Growing of GANs | A training technique for GANs that gradually increases the size of generated images during training. | - | Image Generation
12 | pixelRNN | Pixel Recurrent Neural Network | A generative model that generates images pixel by pixel using recurrent neural networks. | - | Image Generation
13 | StackGAN | Stack Generative Adversarial Networks | A model that generates high-resolution images in a two-step process, first generating low-resolution images and then refining them. | - | Image Generation
14 | StyleGAN | Style-Based Generative Adversarial Network | A GAN architecture that uses a learned latent space to control the style and appearance of generated images. | - | Image Generation
15 | text-to-image | Text-to-Image Synthesis | Models that generate images from textual descriptions or captions. | Text Generation, Image Generation | Image Generation
16 | WGAN | Wasserstein Generative Adversarial Network | A GAN variant that uses Wasserstein distance as a loss function to improve training stability. | - | Image Generation