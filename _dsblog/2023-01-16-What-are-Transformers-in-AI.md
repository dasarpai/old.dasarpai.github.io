---
mathjax: true
id: 6031
title: 'What Are Transformers in AI'
date: 2021-08-03
permalink: '/dsblog/What-Are-Transformers-in-AI'
tags: [NLP, AI Transformers, Deep Learning] 
categories: 

header:
    teaser: /assets/images/dspost/dsp6031-What-are-Transformers-in-AI.jpg
excerpt_separator: "<!--more-->"  
excerpt:  
layout: single  
author_profile: true  
toc: true  
toc_sticky: true
---

![What-are-Transformers-in-AI](/assets/images/dspost/dsp6031-What-are-Transformers-in-AI.jpg)

# What Are Transformers in AI

## Transformer Architecture
![Transformer](/assets/images/dspost/transformer/transformer-arch.jpg)

## Background
Transformers are a type of neural network architecture that have several properties that make them effective for modeling data with long-range dependencies. They generally feature a combination of multi-headed attention mechanisms, residual connections, layer normalization, feedforward connections, and positional embeddings.

Precursor of Transformers were RNN, LSTM and GRU architecture. Transformers are based on the 2017 research paper ["Attention is All You Need"](https://arxiv.org/abs/1706.03762)

Intially Transformers were used for NLP related task. Slowly researchers started exploring the power of the Transformer Architecters and as of 2023 it is used for hundreds of task in different AI domains of technologies like:
- NLP, NLU, NLG
- Computer Vision 
- Audio Processing, Classification, Audio Generation 
- Multimodal : OCR (extract informatation from scanned docments), video classification, visual QA, table data question answering 

Starting the journey in 2017, as of now (2023) we have approx 200 Transformer based architectures proposed by various researchers for various purposes. Using these architecure and various benchmark datasets thousands of models has be created which gives SOTA performance on various tasks. Based on your need you choose what architure can help you meeting your project objective. There are high chances you will get some pretrained model which you can used without training (Zero-shot) or small finetuning (one shot or few shot) efforts. For that you need to explore [Huggingface](huggingface.co) and [PaperWithCode](https://paperswithcode.com/)

Below is the table which summarises these approx 200 transformers.

Sno | Transformer | Date | Type | Researcher  |Paper | Author
--- | --- | --- | ---  | --- | --- | ---
1 | ALBERT | May, 2019 | Factorized BERT | Google Research and the Toyota Technological Institute at Chicago  |A Lite BERT for Self-supervised Learning of Language Representations, | by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut.
2 | ALIGN | May, 2021 | Vision Transformer | Google Research  |Scaling Up Visual and Vision-Language. Representation Learning With Noisy Text Supervision | by Chao Jia, Yinfei Yang, Ye Xia, Yi-Ting Chen, Zarana Parekh, Hieu Pham, Quoc V. Le, Yunhsuan Sung, Zhen Li, Tom Duerig.
3 | AltCLIP | Dec, 2021 | Vision-Language Pretraining | BAAI  |Altering the Language Encoder in CLIP for Extended Language Capabilities | by Chen, Zhongzhi and Liu, Guang and Zhang, Bo-Wen and Ye, Fulong and Yang, Qinghong and Wu, Ledell.
4 | Audio Spectrogram Transformer | Feb, 2021 | Audio Transformer | MIT  |Audio Spectrogram Transformer | by Yuan Gong, Yu-An Chung, James Glass.
5 | BART | Jun, 2019 | Sequence-to-Sequence | Facebook  |Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension | by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer.
6 | BARThez | Jul, 2021 | Autoregressive | École polytechnique  |a Skilled Pretrained French Sequence-to-Sequence Model | by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis.
7 | BARTpho | Jun, 2021 | Autoregressive | VinAI Research  |Pre-trained Sequence-to-Sequence Models for Vietnamese | by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen.
8 | BEiT | Mar, 2021 | Vision Transformer | Microsoft  |BERT Pre-Training of Image Transformers | by Hangbo Bao, Li Dong, Furu Wei.
9 | BERT | Oct, 2018 | Autoencoding | Google  |Pre-training of Deep Bidirectional Transformers for Language Understanding | by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova.
10 | BERT For Sequence Generation | Feb, 2020 | Autoencoding | Google  |Leveraging Pre-trained Checkpoints for Sequence Generation Tasks | by Sascha Rothe, Shashi Narayan, Aliaksei Severyn.
11 | BERTweet | Dec, 2019 | Autoencoding | VinAI Research  |A pre-trained language model for English Tweets | by Dat Quoc Nguyen, Thanh Vu and Anh Tuan Nguyen.
12 | BigBird-Pegasus | Mar, 2021 | Sequence-to-Sequence | Google Research  |Transformers for Longer Sequences | by Manzil Zaheer, Guru Guruganesh, Avinava Dubey, Joshua Ainslie, Chris Alberti, Santiago Ontanon, Philip Pham, Anirudh Ravula, Qifan Wang, Li Yang, Amr Ahmed.
13 | BigBird-RoBERTa | Mar, 2021 | Autoencoding | Google Research  |Transformers for Longer Sequences | by Manzil Zaheer, Guru Guruganesh, Avinava Dubey, Joshua Ainslie, Chris Alberti, Santiago Ontanon, Philip Pham, Anirudh Ravula, Qifan Wang, Li Yang, Amr Ahmed.
14 | BioGpt | Jul, 2019 | Autoregressive | Microsoft Research AI4Science  |generative pre-trained transformer for biomedical text generation and mining | by Renqian Luo, Liai Sun, Yingce Xia, Tao Qin, Sheng Zhang, Hoifung Poon and Tie-Yan Liu.
15 | BiT | Jan, 2019 | Vision Transformer | Google AI  |General Visual Representation Learning | by Alexander Kolesnikov, Lucas Beyer, Xiaohua Zhai, Joan Puigcerver, Jessica Yung, Sylvain Gelly, Neil Houlsby.
16 | Blenderbot | Apr, 2021 | Sequence-to-Sequence | Facebook  |Recipes for building an open-domain chatbot | by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston.
17 | BlenderbotSmall | Apr, 2021 | Sequence-to-Sequence | Facebook  |Recipes for building an open-domain chatbot | by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston.
18 | BLIP | Apr, 2021 | Vision Transformer | Salesforce  |Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation | by Junnan Li, Dongxu Li, Caiming Xiong, Steven Hoi.
19 | BLIP-2 | Oct, 2021 | Vision Transformer | Salesforce  |Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models | by Junnan Li, Dongxu Li, Silvio Savarese, Steven Hoi.
20 | BLOOM | Nov, 2021 | Vision Transformer | BigScience workshop  | | 
21 | BORT | May, 2021 | Sequence-to-Sequence | Alexa  |Optimal Subarchitecture Extraction For BERT | by Adrian de Wynter and Daniel J. Perry.
22 | BridgeTower | Jun, 2021 | Vision Transformer | Harbin Institute of Technology/Microsoft Research Asia/Intel Labs  |Building Bridges Between Encoders in Vision-Language Representation Learning | by Xiao Xu, Chenfei Wu, Shachar Rosenman, Vasudev Lal, Wanxiang Che, Nan Duan.
23 | ByT5 | Apr, 2021 | Sequence-to-Sequence | Google Research  |Towards a token-free future with pre-trained byte-to-byte models | by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir Kale, Adam Roberts, Colin Raffel.
24 | CamemBERT | Oct, 2019 | Autoencoding | Inria/Facebook/Sorbonne  |a Tasty French Language Model | by Louis Martin, Benjamin Muller, Pedro Javier Ortiz Suárez*, Yoann Dupont, Laurent Romary, Éric Villemonte de la Clergerie, Djamé Seddah and Benoît Sagot.
25 | CANINE | Oct, 2021 | Vision Transformer | Google Research  |Pre-training an Efficient Tokenization-Free Encoder for Language Representation | by Jonathan H. Clark, Dan Garrette, Iulia Turc, John Wieting.
26 | Chinese-CLIP | Sep, 2021 | Vision-Language Pretraining | OFA-Sys  |Contrastive Vision-Language Pretraining in Chinese | by An Yang, Junshu Pan, Junyang Lin, Rui Men, Yichang Zhang, Jingren Zhou, Chang Zhou.
27 | CLAP | Sep, 2021 | Vision Transformer | LAION-AI  |[Large-scale Contrastive Language-Audio Pretraining with Feature Fusion and Keyword-to-Caption Augmentation]https //arxiv.org/abs/2211.06687) | 
28 | CLIP | Jan, 2021 | Vision-Language Pretraining | OpenAI  |Learning Transferable Visual Models From Natural Language Supervision | by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever.
29 | CLIPSeg | Mar, 2021 | Vision-Language Pretraining | University of Göttingen  |Image Segmentation Using Text and Image Prompts | by Timo Lüddecke and Alexander Ecker.
30 | CodeGen | Jun, 2021 | Vision Transformer | Salesforce  |A Conversational Paradigm for Program Synthesis | by Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong.
31 | Conditional DETR | Jun, 2020 | Vision Transformer | Microsoft Research Asia  |Conditional DETR for Fast Training Convergence | by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang.
32 | ConvBERT | Nov, 2019 | Autoencoding | YituTech  |Improving BERT with Span-based Dynamic Convolution | by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng Yan.
33 | ConvNeXT | Mar, 2020 | Vision Transformer | Facebook AI  |A ConvNet for the 2020s | by Zhuang Liu, Hanzi Mao, Chao-Yuan Wu, Christoph Feichtenhofer, Trevor Darrell, Saining Xie.
34 | ConvNeXTV2 | Nov, 2021 | Vision Transformer | Facebook AI  |Co-designing and Scaling ConvNets with Masked Autoencoders | by Sanghyun Woo, Shoubhik Debnath, Ronghang Hu, Xinlei Chen, Zhuang Liu, In So Kweon, Saining Xie.
35 | CPM | Sep, 2020 | Sequence-to-Sequence | Tsinghua University  |A Large-scale Generative Chinese Pre-trained Language Model | by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin, Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen, Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.
36 | CPM-Ant | Nov, 2021 | Sequence-to-Sequence | OpenBMB  | | 
37 | CTRL | Feb, 2019 | Autoencoding | Salesforce  |A Conditional Transformer Language Model for Controllable Generation | by Nitish Shirish Keskar, Bryan McCann, Lav R. Varshney, Caiming Xiong and Richard Socher.
38 | CvT | Apr, 2021 | Vision Transformer | Microsoft  |Introducing Convolutions to Vision Transformers | by Haiping Wu, Bin Xiao, Noel Codella, Mengchen Liu, Xiyang Dai, Lu Yuan, Lei Zhang.
39 | Data2Vec | Mar, 2018 | Language Model | Facebook  |A General Framework for Self-supervised Learning in Speech, Vision and Language | by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu, Michael Auli.
40 | DeBERTa | Jul, 2020 | Autoencoding | Microsoft  |Decoding-enhanced BERT with Disentangled Attention | by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen.
41 | DeBERTa-v2 | Apr, 2021 | Autoencoding | Microsoft  |Decoding-enhanced BERT with Disentangled Attention | by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen.
42 | Decision Transformer | Sep, 2021 | Vision Transformer | Berkeley/Facebook/Google  |Reinforcement Learning via Sequence Modeling | by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.
43 | Deformable DETR | Aug, 2020 | Vision Transformer | SenseTime Research  |Deformable Transformers for End-to-End Object Detection | by Xizhou Zhu, Weijie Su, Lewei Lu, Bin Li, Xiaogang Wang, Jifeng Dai.
44 | DeiT | Apr, 2021 | Vision Transformer | Facebook  |Training data-efficient image transformers & distillation through attention | by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre Sablayrolles, Hervé Jégou.
45 | DePlot | May, 2021 | Vision Transformer | Google AI  |One-shot visual language reasoning by plot-to-table translation | by Fangyu Liu, Julian Martin Eisenschlos, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Wenhu Chen, Nigel Collier, Yasemin Altun.
46 | DETA | May, 2021 | Sequence-to-Sequence | The University of Texas at Austin  |NMS Strikes Back | by Jeffrey Ouyang-Zhang, Jang Hyun Cho, Xingyi Zhou, Philipp Krähenbühl.
47 | DETR | Oct, 2020 | Vision Transformer | Facebook  |End-to-End Object Detection with Transformers | by Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, Sergey Zagoruyko.
48 | DialoGPT | Oct, 2019 | Autoregressive | Microsoft Research  |Large-Scale Generative Pre-training for Conversational Response Generation | by Yizhe Zhang, Siqi Sun, Michel Galley, Yen-Chun Chen, Chris Brockett, Xiang Gao, Jianfeng Gao, Jingjing Liu, Bill Dolan.
49 | DiNAT | May, 2021 | Vision Transformer | SHI Labs  |Dilated Neighborhood Attention Transformer | by Ali Hassani and Humphrey Shi.
50 | DistilBERT | Oct, 2019 | Autoencoding | HuggingFace  |smaller, faster, cheaper and lighter | by Victor Sanh, Lysandre Debut and Thomas Wolf. The same method has been applied to compress GPT2 into DistilGPT2, RoBERTa into DistilRoBERTa, Multilingual BERT into DistilmBERT and a German version of DistilBERT.
51 | DiT | Dec, 2020 | Vision Transformer | Microsoft Research  |Self-supervised Pre-training for Document Image Transformer | by Junlong Li, Yiheng Xu, Tengchao Lv, Lei Cui, Cha Zhang, Furu Wei.
52 | Donut | Jul, 2021 | Time Series Transformer | NAVER  |OCR-free Document Understanding Transformer | by Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park.
53 | DPR | Dec, 2020 | Sequence-to-Sequence | Facebook  |Dense Passage Retrieval for Open-Domain Question Answering | by Vladimir Karpukhin, Barlas Oğuz, Sewon Min, Patrick Lewis, Ledell Wu, Sergey Edunov, Danqi Chen, and Wen-tau Yih.
54 | DPT | Mar, 2021 | Vision Transformer | Intel Labs  |Vision Transformers for Dense Prediction | by René Ranftl, Alexey Bochkovskiy, Vladlen Koltun.
55 | EfficientFormer | Aug, 2021 | Vision Transformer | Snap Research  |Vision Transformers at MobileNetSpeed | by Yanyu Li, Geng Yuan, Yang Wen, Ju Hu, Georgios Evangelidis, Sergey Tulyakov, Yanzhi Wang, Jian Ren.
56 | EfficientNet | May, 2019 | Vision Transformer | Google Brain  |Rethinking Model Scaling for Convolutional Neural Networks | by Mingxing Tan, Quoc V. Le.
57 | ELECTRA | Apr, 2020 | Autoencoding | Google Research/Stanford University  |Pre-training text encoders as discriminators rather than generators | by Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning.
58 | EncoderDecoder | May, 2017 | Sequence-to-Sequence | Google Research  |Leveraging Pre-trained Checkpoints for Sequence Generation Tasks | by Sascha Rothe, Shashi Narayan, Aliaksei Severyn.
59 | ERNIE | Jun, 2019 | Autoencoding | Baidu  |Enhanced Representation through Knowledge Integration | by Yu Sun, Shuohuan Wang, Yukun Li, Shikun Feng, Xuyi Chen, Han Zhang, Xin Tian, Danxiang Zhu, Hao Tian, Hua Wu.
60 | ErnieM | Jun, 2019 | Autoencoding | Baidu  |Enhanced Multilingual Representation by Aligning Cross-lingual Semantics with Monolingual Corpora | by Xuan Ouyang, Shuohuan Wang, Chao Pang, Yu Sun, Hao Tian, Hua Wu, Haifeng Wang.
61 | ESM | Aug, 2021 | Protein Transformer | Meta AI  |ESM-1b. Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences | by Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, C. Lawrence Zitnick, Jerry Ma, and Rob Fergus. 
 |  | Dec, 1899 |  |   |ESM-1v was released with the paper Language models enable zero-shot prediction of the effects of mutations on protein function | by Joshua Meier, Roshan Rao, Robert Verkuil, Jason Liu, Tom Sercu and Alexander Rives. 
 |  | Dec, 1899 |  |   |ESM-2 and ESMFold were released with the paper Language models of protein sequences at the scale of evolution enable accurate structure prediction | by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie, Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido, Alexander Rives.
62 | FLAN-T5 | Feb, 2022 | Autoregressive | Google AI  |released in the repository google-research/t5x | by Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, and Jason Wei
63 | FLAN-UL2 | Apr, 2022 | Autoregressive | Google AI  |released in the repository google-research/t5x | by Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, and Jason Wei
64 | FlauBERT | Jun, 2019 | Autoencoding | CNRS  |Unsupervised Language Model Pre-training for French | by Hang Le, Loïc Vial, Jibril Frej, Vincent Segonne, Maximin Coavoux, Benjamin Lecouteux, Alexandre Allauzen, Benoît Crabbé, Laurent Besacier, Didier Schwab.
65 | FLAVA | Apr, 2022 | Autoencoding | Facebook AI  |A Foundational Language And Vision Alignment Model | by Amanpreet Singh, Ronghang Hu, Vedanuj Goswami, Guillaume Couairon, Wojciech Galuba, Marcus Rohrbach, and Douwe Kiela.
66 | FNet | Aug, 2020 | Autoencoding | Google Research  |Mixing Tokens with Fourier Transforms | by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon.
67 | Funnel Transformer | Apr, 2019 | Autoregressive | CMU/Google Brain  |Filtering out Sequential Redundancy for Efficient Language Processing | by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le.
68 | GIT | Sep, 2020 | Autoencoding | Microsoft Research  |A Generative Image-to-text Transformer for Vision and Language | by Jianfeng Wang, Zhengyuan Yang, Xiaowei Hu, Linjie Li, Kevin Lin, Zhe Gan, Zicheng Liu, Ce Liu, Lijuan Wang.
69 | GLPN | Dec, 2020 | Autoencoding | KAIST  |Global-Local Path Networks for Monocular Depth Estimation with Vertical CutDepth | by Doyeon Kim, Woonghyun Ga, Pyungwhan Ahn, Donggyu Joo, Sehwan Chun, Junmo Kim.
70 | GPT | Jun, 2018 | Autoregressive | OpenAI  |Improving Language Understanding by Generative Pre-Training | by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever.
71 | GPT Neo | Sep, 2019 | Autoregressive | EleutherAI  |EleutherAI/gpt-neo | by Sid Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy.
72 | GPT NeoX | Oct, 2020 | Autoregressive | EleutherAI  |An Open-Source Autoregressive Language Model | by Sid Black, Stella Biderman, Eric Hallahan, Quentin Anthony, Leo Gao, Laurence Golding, Horace He, Connor Leahy, Kyle McDonell, Jason Phang, Michael Pieler, USVSN Sai Prashanth, Shivanshu Purohit, Laria Reynolds, Jonathan Tow, Ben Wang, Samuel Weinbach
73 | GPT NeoX Japanese | Feb, 2022 | Autoregressive | ABEJA  |by Shinya Otani, Takayoshi Makabe, Anuj Arora, and Kyo Hattori. | 
74 | GPT-2 | Feb, 2019 | Autoregressive | OpenAI  |Language Models are Unsupervised Multitask Learners | by Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodeiand Ilya Sutskever.
75 | GPT-J | Jun, 2021 | Autoregressive | EleutherAI  |released in the repository kingoflolz/mesh-transformer-jax | by Ben Wang and Aran Komatsuzaki.
76 | GPT-Sw3 | Nov, 2021 | Autoregressive | AI-Sweden  |Building the First Large-Scale Generative Language Model for Swedish | by Ariel Ekgren, Amaru Cuba Gyllensten, Evangelia Gogoulou, Alice Heiman, Severine Verlinden, Joey Öhman, Fredrik Carlsson, Magnus Sahlgren.
77 | GPTBigCode | Jun, 2020 | Autoregressive | BigCode  |don’t reach for the stars! | by Loubna Ben Allal, Raymond Li, Denis Kocetkov, Chenghao Mou, Christopher Akiki, Carlos Munoz Ferrandis, Niklas Muennighoff, Mayank Mishra, Alex Gu, Manan Dey, Logesh Kumar Umapathi, Carolyn Jane Anderson, Yangtian Zi, Joel Lamy Poirier, Hailey Schoelkopf, Sergey Troshin, Dmitry Abulkhanov, Manuel Romero, Michael Lappert, Francesco De Toni, Bernardo García del Río, Qian Liu, Shamik Bose, Urvashi Bhattacharyya, Terry Yue Zhuo, Ian Yu, Paulo Villegas, Marco Zocca, Sourab Mangrulkar, David Lansky, Huu Nguyen, Danish Contractor, Luis Villa, Jia Li, Dzmitry Bahdanau, Yacine Jernite, Sean Hughes, Daniel Fried, Arjun Guha, Harm de Vries, Leandro von Werra.
78 | GPTSAN-japanese  | Aug, 2020 | Autoregressive |   |released in the repository tanreinama/GPTSAN | by Toshiyuki Sakamoto(tanreinama).
79 | Graphormer | Oct, 2021 | Autoencoding | Microsoft  |Do Transformers Really Perform Bad for Graph Representation? | by Chengxuan Ying, Tianle Cai, Shengjie Luo, Shuxin Zheng, Guolin Ke, Di He, Yanming Shen, Tie-Yan Liu.
80 | GroupViT | Apr, 2021 | Autoencoding | UCSD, NVIDIA  |Semantic Segmentation Emerges from Text Supervision | by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang.
81 | Hubert | Jul, 2019 | Autoencoding | Facebook  |Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units | by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan Salakhutdinov, Abdelrahman Mohamed.
82 | I-BERT | Oct, 2021 | Autoencoding | Berkeley  |Integer-only BERT Quantization | by Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney, Kurt Keutzer.
83 | ImageGPT | Jul, 2021 | Autoregressive | OpenAI  |Generative Pretraining from Pixels | by Mark Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever.
84 | Informer | Jul, 2020 | Autoencoding | Beihang University, UC Berkeley, Rutgers University, SEDD Company  |Beyond Efficient Transformer for Long Sequence Time-Series Forecasting | by Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, and Wancai Zhang.
85 | Jukebox | May, 2021 | Autoencoding | OpenAI  |A Generative Model for Music | by Prafulla Dhariwal, Heewoo Jun, Christine Payne, Jong Wook Kim, Alec Radford, Ilya Sutskever.
86 | LayoutLM | May, 2020 | Autoencoding | Microsoft Research Asia  |Pre-training of Text and Layout for Document Image Understanding | by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, Ming Zhou.
87 | LayoutLMv2 | Apr, 2021 | Autoencoding | Microsoft Research Asia  |Multi-modal Pre-training for Visually-Rich Document Understanding | by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou.
88 | LayoutLMv3 | Mar, 2022 | Autoencoding | Microsoft Research Asia  |Pre-training for Document AI with Unified Text and Image Masking | by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei.
89 | LayoutXLM | Sep, 2020 | Autoencoding | Microsoft Research Asia  |Multimodal Pre-training for Multilingual Visually-rich Document Understanding | by Yiheng Xu, Tengchao Lv, Lei Cui, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha Zhang, Furu Wei.
90 | LED | Jul, 2020 | Autoregressive | AllenAI  |The Long-Document Transformer | by Iz Beltagy, Matthew E. Peters, Arman Cohan.
91 | LeViT | Dec, 2020 | Autoencoding | Meta AI  |A Vision Transformer in ConvNet’s Clothing for Faster Inference | by Ben Graham, Alaaeldin El-Nouby, Hugo Touvron, Pierre Stock, Armand Joulin, Hervé Jégou, Matthijs Douze.
92 | LiLT | Oct, 2019 | Autoencoding | South China University of Technology  |A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding | by Jiapeng Wang, Lianwen Jin, Kai Ding.
93 | LLaMA | Jun, 2021 | Autoencoding | The FAIR team of Meta AI  |Open and Efficient Foundation Language Models | by Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, Aurelien Rodriguez, Armand Joulin, Edouard Grave, Guillaume Lample.
94 | Longformer | Apr, 2020 | Autoregressive | AllenAI  |The Long-Document Transformer | by Iz Beltagy, Matthew E. Peters, Arman Cohan.
95 | LongT5 | Nov, 2021 | Autoregressive | Google AI  |Efficient Text-To-Text Transformer for Long Sequences | by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung, Yinfei Yang.
96 | LUKE | Oct, 2019 | Autoencoding | Studio Ousia  |Deep Contextualized Entity Representations with Entity-aware Self-attention | by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda, Yuji Matsumoto.
97 | LXMERT | Jun, 2019 | Autoencoding | UNC Chapel Hill  |Learning Cross-Modality Encoder Representations from Transformers for Open-Domain Question Answering | by Hao Tan and Mohit Bansal.
98 | M-CTC-T | Jun, 2020 | Autoencoding | Facebook  |Pseudo-Labeling For Massively Multilingual Speech Recognition | by Loren Lugosch, Tatiana Likhomanenko, Gabriel Synnaeve, and Ronan Collobert.
99 | M2M100 | Feb, 2021 | Autoregressive | Facebook  |Beyond English-Centric Multilingual Machine Translation | by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin.
100 | MarianMT  | Oct, 2018 | Autoencoding |   |Machine translation models trained using OPUS data | by Jörg Tiedemann. The Marian Framework is being developed by the Microsoft Translator Team.
101 | MarkupLM | Jun, 2021 | Autoencoding | Microsoft Research Asia  |Pre-training of Text and Markup Language for Visually-rich Document Understanding | by Junlong Li, Yiheng Xu, Lei Cui, Furu Wei.
102 | Mask2Former | Aug, 2021 | Autoencoding | FAIR and UIUC  |Masked-attention Mask Transformer for Universal Image Segmentation | by Bowen Cheng, Ishan Misra, Alexander G. Schwing, Alexander Kirillov, Rohit Girdhar.
103 | MaskFormer | Apr, 2021 | Autoencoding | Meta and UIUC  |Per-Pixel Classification is Not All You Need for Semantic Segmentation | by Bowen Cheng, Alexander G. Schwing, Alexander Kirillov.
104 | MatCha | Oct, 2021 | Autoencoding | Google AI  |Enhancing Visual Language Pretraining with Math Reasoning and Chart Derendering | by Fangyu Liu, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Yasemin Altun, Nigel Collier, Julian Martin Eisenschlos.
105 | mBART | Dec, 2019 | Autoregressive | Facebook  |Multilingual Denoising Pre-training for Neural Machine Translation | by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov, Marjan Ghazvininejad, Mike Lewis, Luke Zettlemoyer.
106 | mBART-50 | May, 2021 | Autoregressive | Facebook  |Multilingual Translation with Extensible Multilingual Pretraining and Finetuning | by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav Chaudhary, Jiatao Gu, Angela Fan.
107 | MEGA | Feb, 2021 | Autoencoding | Facebook  |Moving Average Equipped Gated Attention | by Xuezhe Ma, Chunting Zhou, Xiang Kong, Junxian He, Liangke Gui, Graham Neubig, Jonathan May, and Luke Zettlemoyer.
108 | Megatron-BERT | Dec, 2019 | Autoregressive | NVIDIA  |Training Multi-Billion Parameter Language Models Using Model Parallelism | by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper and Bryan Catanzaro.
109 | Megatron-GPT2 | Nov, 2019 | Autoregressive | NVIDIA  |Training Multi-Billion Parameter Language Models Using Model Parallelism | by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper and Bryan Catanzaro.
110 | MGP-STR | Aug, 2021 | Autoencoding | Alibaba Research  |Multi-Granularity Prediction for Scene Text Recognition | by Peng Wang, Cheng Da, and Cong Yao.
111 | mLUKE | Oct, 2021 | Autoencoding | Studio Ousia  |The Power of Entity Representations in Multilingual Pretrained Language Models | by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka.
112 | MobileBERT | Oct, 2019 | Autoencoding | CMU/Google Brain  |a Compact Task-Agnostic BERT for Resource-Limited Devices | by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny Zhou.
113 | MobileNetV1 | Apr, 2017 | Autoencoding | Google Inc.  |Efficient Convolutional Neural Networks for Mobile Vision Applications | by Andrew G. Howard, Menglong Zhu, Bo Chen, Dmitry Kalenichenko, Weijun Wang, Tobias Weyand, Marco Andreetto, Hartwig Adam.
114 | MobileNetV2 | Feb, 2018 | Autoencoding | Google Inc.  |Inverted Residuals and Linear Bottlenecks | by Mark Sandler, Andrew Howard, Menglong Zhu, Andrey Zhmoginov, Liang-Chieh Chen.
115 | MobileViT | Oct, 2021 | Autoencoding | Apple  |Light-weight, General-purpose, and Mobile-friendly Vision Transformer | by Sachin Mehta and Mohammad Rastegari.
116 | MPNet | May, 2020 | Autoencoding | Microsoft Research  |Masked and Permuted Pre-training for Language Understanding | by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu.
117 | MT5 | Oct, 2019 | Autoregressive | Google AI  |A massively multilingual pre-trained text-to-text transformer | by Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya Siddhant, Aditya Barua, Colin Raffel.
118 | MVP | Dec, 2021 | Autoencoding | RUC AI Box  |Multi-task Supervised Pre-training for Natural Language Generation | by Tianyi Tang, Junyi Li, Wayne Xin Zhao and Ji-Rong Wen.
119 | NAT | Dec, 2020 | Autoencoding | SHI Labs  |Neighborhood Attention Transformer | by Ali Hassani, Steven Walton, Jiachen Li, Shen Li, and Humphrey Shi.
120 | Nezha | May, 2019 | Autoencoding | Huawei Noah’s Ark Lab  |Neural Contextualized Representation for Chinese Language Understanding | by Junqiu Wei, Xiaozhe Ren, Xiaoguang Li, Wenyong Huang, Yi Liao, Yasheng Wang, Jiashu Lin, Xin Jiang, Xiao Chen and Qun Liu.
121 | NLLB | Aug, 2021 | Autoencoding | Meta  |Scaling Human-Centered Machine Translation | by the NLLB team.
122 | NLLB-MOE | Dec, 2021 | Autoencoding | Meta  |Scaling Human-Centered Machine Translation | by the NLLB team.
123 | Nyströmformer | May, 2021 | Autoencoding | the University of Wisconsin - Madison  |A Nyström-Based Algorithm for Approximating Self-Attention | by Yunyang Xiong, Zhanpeng Zeng, Rudrasis Chakraborty, Mingxing Tan, Glenn Fung, Yin Li, Vikas Singh.
124 | OneFormer | Nov, 2021 | Autoregressive | SHI Labs  |One Transformer to Rule Universal Image Segmentation | by Jitesh Jain, Jiachen Li, MangTik Chiu, Ali Hassani, Nikita Orlov, Humphrey Shi.
125 | OPT | Jul, 2021 | Hybrid | Meta AI  |Open Pre-trained Transformer Language Models | by Susan Zhang, Stephen Roller, Naman Goyal, Mikel Artetxe, Moya Chen, Shuohui Chen et al.
126 | OWL-ViT | Oct, 2021 | Vision Transformer (ViT) | Google AI  |Simple Open-Vocabulary Object Detection with Vision Transformers | by Matthias Minderer, Alexey Gritsenko, Austin Stone, Maxim Neumann, Dirk Weissenborn, Alexey Dosovitskiy, Aravindh Mahendran, Anurag Arnab, Mostafa Dehghani, Zhuoran Shen, Xiao Wang, Xiaohua Zhai, Thomas Kipf, and Neil Houlsby.
127 | Pegasus | Jun, 2019 | Autoregressive | Google  |Pre-training with Extracted Gap-sentences for Abstractive Summarization | by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu.
128 | PEGASUS-X | Dec, 2021 | Autoregressive | Google  |Investigating Efficiently Extending Transformers for Long Input Summarization | by Jason Phang, Yao Zhao, and Peter J. Liu.
129 | Perceiver IO | Mar, 2021 | Hybrid | Deepmind  |A General Architecture for Structured Inputs & Outputs | by Andrew Jaegle, Sebastian Borgeaud, Jean-Baptiste Alayrac, Carl Doersch, Catalin Ionescu, David Ding, Skanda Koppula, Daniel Zoran, Andrew Brock, Evan Shelhamer, Olivier Hénaff, Matthew M. Botvinick, Andrew Zisserman, Oriol Vinyals, João Carreira.
130 | PhoBERT | Nov, 2019 | BERT-based | VinAI Research  |Pre-trained language models for Vietnamese | by Dat Quoc Nguyen and Anh Tuan Nguyen.
131 | Pix2Struct | Jun, 2020 | Hybrid | Google  |Screenshot Parsing as Pretraining for Visual Language Understanding | by Kenton Lee, Mandar Joshi, Iulia Turc, Hexiang Hu, Fangyu Liu, Julian Eisenschlos, Urvashi Khandelwal, Peter Shaw, Ming-Wei Chang, Kristina Toutanova.
132 | PLBart | Nov, 2020 | Hybrid | UCLA NLP  |Unified Pre-training for Program Understanding and Generation | by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang.
133 | PoolFormer | Jun, 2021 | Autoregressive | Sea AI Labs  |MetaFormer is Actually What You Need for Vision | by Yu, Weihao and Luo, Mi and Zhou, Pan and Si, Chenyang and Zhou, Yichen and Wang, Xinchao and Feng, Jiashi and Yan, Shuicheng.
134 | ProphetNet | Jun, 2020 | Autoregressive | Microsoft Research  |Predicting Future N-gram for Sequence-to-Sequence Pre-training | by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei Zhang and Ming Zhou.
135 | QDQBert | Jun, 2021 | BERT-based | NVIDIA  |Principles and Empirical Evaluation | by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius Micikevicius.
136 | RAG | Oct, 2019 | Hybrid | Facebook  |Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela.
137 | REALM | Jul, 2019 | Hybrid | Google Research  |Retrieval-Augmented Language Model Pre-Training | by Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat and Ming-Wei Chang.
138 | Reformer | Mar, 2021 | Hybrid | Google Research  |The Efficient Transformer | by Nikita Kitaev, Łukasz Kaiser, Anselm Levskaya.
139 | RegNet | Apr, 2020 | Convolutional Neural Network | META Platforms  |Designing Network Design Space | by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Dollár.
140 | RemBERT | Oct, 2020 | BERT-based | Google Research  |Rethinking embedding coupling in pre-trained language models | by Hyung Won Chung, Thibault Févry, Henry Tsai, M. Johnson, Sebastian Ruder.
141 | ResNet | Dec, 2015 | Convolutional Neural Network | Microsoft Research  |Deep Residual Learning for Image Recognition | by Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun.
142 | RoBERTa | Aug, 2019 | BERT-based | Facebook  |A Robustly Optimized BERT Pretraining Approach | by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov.
143 | RoBERTa-PreLayerNorm | Nov, 2019 | BERT-based | Facebook  |A Fast, Extensible Toolkit for Sequence Modeling | by Myle Ott, Sergey Edunov, Alexei Baevski, Angela Fan, Sam Gross, Nathan Ng, David Grangier, Michael Auli.
144 | RoCBert | Oct, 2020 | BERT-based | WeChatAI  |Robust Chinese Bert with Multimodal Contrastive Pretraining | by HuiSu, WeiweiShi, XiaoyuShen, XiaoZhou, TuoJi, JiaruiFang, JieZhou.
145 | RoFormer | Mar, 2021 | Hybrid | ZhuiyiTechnology  |Enhanced Transformer with Rotary Position Embedding | by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu.
146 | SegFormer | Apr, 2021 | Hybrid | NVIDIA  |Simple and Efficient Design for Semantic Segmentation with Transformers | by Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M. Alvarez, Ping Luo.
147 | SEW | Jun, 2020 | Vision Transformer (ViT) | ASAPP  |Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition | by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.
148 | SEW-D | Aug, 2020 | Vision Transformer (ViT) | ASAPP  |Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition | by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.
149 | SpeechT5 | Oct, 2021 | Autoregressive | Microsoft Research  |Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing | by Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang, Zhihua Wei, Yao Qian, Jinyu Li, Furu Wei.
150 | SpeechToTextTransformer | Jul, 2019 | Hybrid | Facebook,   |Fast Speech-to-Text Modeling with fairseq | by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino.
151 | SpeechToTextTransformer2 | Dec, 2019 | Hybrid | Facebook,   |Large-Scale Self- and Semi-Supervised Learning for Speech Translation | by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.
152 | Splinter | Jul, 2021 | Hybrid | Tel Aviv University,   |Few-Shot Question Answering by Pretraining Span Selection | by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy.
153 | SqueezeBERT | Apr, 2020 | BERT-based | Berkeley  |What can computer vision teach NLP about efficient neural networks? | by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W. Keutzer.
154 | Swin Transformer | Mar, 2021 | Vision Transformer (ViT) | Microsoft  |Hierarchical Vision Transformer using Shifted Windows | by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.
155 | Swin Transformer V2 | Oct, 2021 | Vision Transformer (ViT) | Microsoft  |Scaling Up Capacity and Resolution | by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo.
156 | Swin2SR | Dec, 2021 | Vision Transformer (ViT) | University of Würzburg  |SwinV2 Transformer for Compressed Image Super-Resolution and Restoration | by Marcos V. Conde, Ui-Jin Choi, Maxime Burchi, Radu Timofte.
157 | SwitchTransformers | Jul, 2020 | Hybrid | Google  |Scaling to Trillion Parameter Models with Simple and Efficient Sparsity | by William Fedus, Barret Zoph, Noam Shazeer.
158 | T5 | Jun, 2020 | Autoregressive | Google AI  |Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer | by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu.
159 | T5v1.1 | Aug, 2021 | Autoregressive | Google AI  |released in the repository google-research/text-to-text-transfer-transformer | by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu.
160 | Table Transformer | Nov, 2021 | Hybrid | Microsoft Research  |Towards Comprehensive Table Extraction From Unstructured Documents | by Brandon Smock, Rohith Pesala, Robin Abraham.
161 | TAPAS | Oct, 2020 | Hybrid | Google AI  |Weakly Supervised Table Parsing via Pre-training | by Jonathan Herzig, Paweł Krzysztof Nowak, Thomas Müller, Francesco Piccinno and Julian Martin Eisenschlos.
162 | TAPEX | Dec, 2020 | Hybrid | Microsoft Research  |Table Pre-training via Learning a Neural SQL Executor | by Qian Liu, Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou.
163 | Time Series Transformer | Apr, 2021 | Hybrid | HuggingFace.  | | 
164 | TimeSformer | Apr, 2021 | Hybrid | Facebook  |Space-Time Attention All You Need for Video Understanding? | by Gedas Bertasius, Heng Wang, Lorenzo Torresani.
165 | Trajectory Transformer | Apr, 2021 | Hybrid | the University of California at Berkeley  |Offline Reinforcement Learning as One Big Sequence Modeling Problem | by Michael Janner, Qiyang Li, Sergey Levine
166 | Transformer-XL | Jan, 2019 | Autoregressive | Google/CMU  |Attentive Language Models Beyond a Fixed-Length Context | by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov.
167 | TrOCR | Mar, 2021 | Hybrid | Microsoft,  |Transformer-based Optical Character Recognition with Pre-trained Models | by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang, Zhoujun Li, Furu Wei.
168 | TVLT | Aug, 2021 | Hybrid | UNC Chapel Hill  |Textless Vision-Language Transformer | by Zineng Tang, Jaemin Cho, Yixin Nie, Mohit Bansal.
169 | UL2 | Dec, 2021 | Hybrid | Google Research  |Unifying Language Learning Paradigms | by Yi Tay, Mostafa Dehghani, Vinh Q. Tran, Xavier Garcia, Dara Bahri, Tal Schuster, Huaixiu Steven Zheng, Neil Houlsby, Donald Metzler
170 | UniSpeech | Apr, 2021 | Hybrid | Microsoft Research  |Unified Speech Representation Learning with Labeled and Unlabeled Data | by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael Zeng, Xuedong Huang.
171 | UniSpeechSat | Apr, 2021 | Hybrid | Microsoft Research  |UNIVERSAL SPEECH REPRESENTATION LEARNING WITH SPEAKER AWARE PRE-TRAINING | by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen, Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu.
172 | UPerNet | Oct, 2020 | Vision Transformer (ViT) | Peking University  |Unified Perceptual Parsing for Scene Understanding | by Tete Xiao, Yingcheng Liu, Bolei Zhou, Yuning Jiang, Jian Sun.
173 | VAN | Nov, 2021 | Vision Transformer (ViT) | Tsinghua University and Nankai University  |Visual Attention Network | by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu.
174 | VideoMAE | Dec, 2020 | Hybrid | Multimedia Computing Group, Nanjing University  |Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training | by Zhan Tong, Yibing Song, Jue Wang, Limin Wang.
175 | ViLT | Jun, 2021 | Vision Transformer (ViT) | NAVER AI Lab/Kakao Enterprise/Kakao Brain  |Vision-and-Language Transformer Without Convolution or Region Supervision | by Wonjae Kim, Bokyung Son, Ildoo Kim.
176 | Vision Transformer (ViT) | Oct, 2020 | Vision Transformer (ViT) | Google AI  |Transformers for Image Recognition at Scale | by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby.
177 | VisualBERT | May, 2020 | BERT-based | UCLA NLP  |A Simple and Performant Baseline for Vision and Language | by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
178 | ViT Hybrid | May, 2021 | Hybrid | Google AI  |Transformers for Image Recognition at Scale | by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby.
179 | ViTMAE | Oct, 2021 | Vision Transformer (ViT) | Meta AI  |Masked Autoencoders Are Scalable Vision Learners | by Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, Ross Girshick.
180 | ViTMSN | Dec, 2021 | Vision Transformer (ViT) | Meta AI  |Masked Siamese Networks for Label-Efficient Learning | by Mahmoud Assran, Mathilde Caron, Ishan Misra, Piotr Bojanowski, Florian Bordes, Pascal Vincent, Armand Joulin, Michael Rabbat, Nicolas Ballas.
181 | Wav2Vec2 | Oct, 2020 | Autoregressive | Facebook AI  |A Framework for Self-Supervised Learning of Speech Representations | by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli.
182 | Wav2Vec2-Conformer | Dec, 2020 | Autoregressive | Facebook AI  |Fast Speech-to-Text Modeling with FAIRSEQ | by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Sravya Popuri, Dmytro Okhonko, Juan Pino.
183 | Wav2Vec2Phoneme | Mar, 2021 | Autoregressive | Facebook AI  |Simple and Effective Zero-shot Cross-lingual Phoneme Recognition | by Qiantong Xu, Alexei Baevski, Michael Auli.
184 | WavLM | Aug, 2021 | Autoregressive | Microsoft Research  |Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing | by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu, Michael Zeng, Furu Wei.
185 | Whisper | Jul, 2020 | Autoregressive | OpenAI  |Robust Speech Recognition via Large-Scale Weak Supervision | by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever.
186 | X-CLIP | Mar, 2021 | Hybrid | Microsoft Research  |Expanding Language-Image Pretrained Models for General Video Recognition | by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling.
187 | X-MOD | May, 2021 | Hybrid | Meta AI  |Lifting the Curse of Multilinguality by Pre-training Modular Transformers | by Jonas Pfeiffer, Naman Goyal, Xi Lin, Xian Li, James Cross, Sebastian Riedel, Mikel Artetxe.
188 | XGLM | Jul, 2021 | Hybrid | Facebook AI  |Few-shot Learning with Multilingual Language Models | by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal, Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O’Horo, Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li.
189 | XLM | Jan, 2019 | BERT-based | Facebook  |Cross-lingual Language Model Pretraining | by Guillaume Lample and Alexis Conneau.
190 | XLM-ProphetNet | Jul, 2020 | Hybrid | Microsoft Research  |Predicting Future N-gram for Sequence-to-Sequence Pre-training | by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei Zhang and Ming Zhou.
191 | XLM-RoBERTa | Jul, 2020 | BERT-based | Facebook AI,   |Unsupervised Cross-lingual Representation Learning at Scale | by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov.
192 | XLM-RoBERTa-XL | Aug, 2021 | BERT-based | Facebook AI,   |Larger-Scale Transformers for Multilingual Masked Language Modeling | by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau.
193 | XLM-V | Jul, 2019 | Multilingual | Meta AI  |Overcoming the Vocabulary Bottleneck in Multilingual Masked Language Models | by Davis Liang, Hila Gonen, Yuning Mao, Rui Hou, Naman Goyal, Marjan Ghazvininejad, Luke Zettlemoyer, Madian Khabsa.
194 | XLNet | Jun, 2019 | Autoregressive | Google/CMU  |Generalized Autoregressive Pretraining for Language Understanding | by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov, Quoc V. Le.
195 | XLS-R | Jan, 2021 | Autoregressive | Facebook AI  |Self-supervised Cross-lingual Speech Representation Learning at Scale | by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli.
196 | XLSR-Wav2Vec2 | Mar, 2021 | Autoregressive | Facebook AI  |Unsupervised Cross-Lingual Representation Learning For Speech Recognition | by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael Auli.
197 | YOLOS | Dec, 2021 | Object Detection | Huazhong University of Science & Technology  |Rethinking Transformer in Vision through Object Detection | by Yuxin Fang, Bencheng Liao, Xinggang Wang, Jiemin Fang, Jiyang Qi, Rui Wu, Jianwei Niu, Wenyu Liu.
198 | YOSO | Jul, 2021 | Object Detection | the University of Wisconsin - Madison  |You Only Sample (Almost) | 


# Conclusion
I hope this article gave you an idea about Transformer architecture, their variants, their types, their birth chronology and the creators. As we have seen, the Transformer architecture has been a game-changer in natural language processing and computer vision tasks. It has been instrumental in enabling breakthroughs in machine translation, language understanding, and image classification, among other fields.

There are many types of Transformers, such as autoregressive models like GPT, autoencoding models like BERT and its variants, and hybrid models that combine the strengths of both. Additionally, there are many variants of the Transformer architecture, such as XLNet, RoBERTa, and T5, each with their unique contributions and improvements.

The Transformer's birth chronology spans just a few years, from the original paper in 2017 to the latest models that are being developed today. Its creators include some of the most prominent names in the field of AI, such as Google, Facebook, and OpenAI.

As AI technology continues to evolve, we can expect more exciting developments in the field of Transformers, with even more powerful and sophisticated models that can tackle even more complex tasks. The Transformer architecture has shown us that there is still much to explore in the world of deep learning, and we can't wait to see what the future holds.