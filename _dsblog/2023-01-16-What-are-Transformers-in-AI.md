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

Sno. | Transformer | Type | Researcher  |Paper | Author | Date
--- | --- | --- | ---  | --- | --- | ---
1 | ALBERT | Factorized BERT | Google Research and the Toyota Technological Institute at Chicago  |A Lite BERT for Self-supervised Learning of Language Representations, | by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut. | May, 2019
2 | ALIGN | Vision Transformer | Google Research  |Scaling Up Visual and Vision-Language. Representation Learning With Noisy Text Supervision | by Chao Jia, Yinfei Yang, Ye Xia, Yi-Ting Chen, Zarana Parekh, Hieu Pham, Quoc V. Le, Yunhsuan Sung, Zhen Li, Tom Duerig. | May, 2021
3 | AltCLIP | Vision-Language Pretraining | BAAI  |Altering the Language Encoder in CLIP for Extended Language Capabilities | by Chen, Zhongzhi and Liu, Guang and Zhang, Bo-Wen and Ye, Fulong and Yang, Qinghong and Wu, Ledell. | Dec, 2021
4 | Audio Spectrogram Transformer | Audio Transformer | MIT  |Audio Spectrogram Transformer | by Yuan Gong, Yu-An Chung, James Glass. | Feb, 2021
5 | BART | Sequence-to-Sequence | Facebook  |Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension | by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer. | Jun, 2019
6 | BARThez | Autoregressive | École polytechnique  |a Skilled Pretrained French Sequence-to-Sequence Model | by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis. | Jul, 2021
7 | BARTpho | Autoregressive | VinAI Research  |Pre-trained Sequence-to-Sequence Models for Vietnamese | by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen. | Jun, 2021
8 | BEiT | Vision Transformer | Microsoft  |BERT Pre-Training of Image Transformers | by Hangbo Bao, Li Dong, Furu Wei. | Mar, 2021
9 | BERT | Autoencoding | Google  |Pre-training of Deep Bidirectional Transformers for Language Understanding | by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. | Oct, 2018
10 | BERT For Sequence Generation | Autoencoding | Google  |Leveraging Pre-trained Checkpoints for Sequence Generation Tasks | by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. | Feb, 2020
11 | BERTweet | Autoencoding | VinAI Research  |A pre-trained language model for English Tweets | by Dat Quoc Nguyen, Thanh Vu and Anh Tuan Nguyen. | Dec, 2019
12 | BigBird-Pegasus | Sequence-to-Sequence | Google Research  |Transformers for Longer Sequences | by Manzil Zaheer, Guru Guruganesh, Avinava Dubey, Joshua Ainslie, Chris Alberti, Santiago Ontanon, Philip Pham, Anirudh Ravula, Qifan Wang, Li Yang, Amr Ahmed. | Mar, 2021
13 | BigBird-RoBERTa | Autoencoding | Google Research  |Transformers for Longer Sequences | by Manzil Zaheer, Guru Guruganesh, Avinava Dubey, Joshua Ainslie, Chris Alberti, Santiago Ontanon, Philip Pham, Anirudh Ravula, Qifan Wang, Li Yang, Amr Ahmed. | Mar, 2021
14 | BioGpt | Autoregressive | Microsoft Research AI4Science  |generative pre-trained transformer for biomedical text generation and mining | by Renqian Luo, Liai Sun, Yingce Xia, Tao Qin, Sheng Zhang, Hoifung Poon and Tie-Yan Liu. | Jul, 2019
15 | BiT | Vision Transformer | Google AI  |General Visual Representation Learning | by Alexander Kolesnikov, Lucas Beyer, Xiaohua Zhai, Joan Puigcerver, Jessica Yung, Sylvain Gelly, Neil Houlsby. | Jan, 2019
16 | Blenderbot | Sequence-to-Sequence | Facebook  |Recipes for building an open-domain chatbot | by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston. | Apr, 2021
17 | BlenderbotSmall | Sequence-to-Sequence | Facebook  |Recipes for building an open-domain chatbot | by Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu, Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston. | Apr, 2021
18 | BLIP | Vision Transformer | Salesforce  |Bootstrapping Language-Image Pre-training for Unified Vision-Language Understanding and Generation | by Junnan Li, Dongxu Li, Caiming Xiong, Steven Hoi. | Apr, 2021
19 | BLIP-2 | Vision Transformer | Salesforce  |Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models | by Junnan Li, Dongxu Li, Silvio Savarese, Steven Hoi. | Oct, 2021
20 | BLOOM | Vision Transformer | BigScience workshop  | |  | Nov, 2021
21 | BORT | Sequence-to-Sequence | Alexa  |Optimal Subarchitecture Extraction For BERT | by Adrian de Wynter and Daniel J. Perry. | May, 2021
22 | BridgeTower | Vision Transformer | Harbin Institute of Technology/Microsoft Research Asia/Intel Labs  |Building Bridges Between Encoders in Vision-Language Representation Learning | by Xiao Xu, Chenfei Wu, Shachar Rosenman, Vasudev Lal, Wanxiang Che, Nan Duan. | Jun, 2021
23 | ByT5 | Sequence-to-Sequence | Google Research  |Towards a token-free future with pre-trained byte-to-byte models | by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir Kale, Adam Roberts, Colin Raffel. | Apr, 2021
24 | CamemBERT | Autoencoding | Inria/Facebook/Sorbonne  |a Tasty French Language Model | by Louis Martin, Benjamin Muller, Pedro Javier Ortiz Suárez*, Yoann Dupont, Laurent Romary, Éric Villemonte de la Clergerie, Djamé Seddah and Benoît Sagot. | Oct, 2019
25 | CANINE | Vision Transformer | Google Research  |Pre-training an Efficient Tokenization-Free Encoder for Language Representation | by Jonathan H. Clark, Dan Garrette, Iulia Turc, John Wieting. | Oct, 2021
26 | Chinese-CLIP | Vision-Language Pretraining | OFA-Sys  |Contrastive Vision-Language Pretraining in Chinese | by An Yang, Junshu Pan, Junyang Lin, Rui Men, Yichang Zhang, Jingren Zhou, Chang Zhou. | Sep, 2021
27 | CLAP | Vision Transformer | LAION-AI  |[Large-scale Contrastive Language-Audio Pretraining with Feature Fusion and Keyword-to-Caption Augmentation]https //arxiv.org/abs/2211.06687) |  | Sep, 2021
28 | CLIP | Vision-Language Pretraining | OpenAI  |Learning Transferable Visual Models From Natural Language Supervision | by Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen Krueger, Ilya Sutskever. | Jan, 2021
29 | CLIPSeg | Vision-Language Pretraining | University of Göttingen  |Image Segmentation Using Text and Image Prompts | by Timo Lüddecke and Alexander Ecker. | Mar, 2021
30 | CodeGen | Vision Transformer | Salesforce  |A Conversational Paradigm for Program Synthesis | by Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, Caiming Xiong. | Jun, 2021
31 | Conditional DETR | Vision Transformer | Microsoft Research Asia  |Conditional DETR for Fast Training Convergence | by Depu Meng, Xiaokang Chen, Zejia Fan, Gang Zeng, Houqiang Li, Yuhui Yuan, Lei Sun, Jingdong Wang. | Jun, 2020
32 | ConvBERT | Autoencoding | YituTech  |Improving BERT with Span-based Dynamic Convolution | by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng Yan. | Nov, 2019
33 | ConvNeXT | Vision Transformer | Facebook AI  |A ConvNet for the 2020s | by Zhuang Liu, Hanzi Mao, Chao-Yuan Wu, Christoph Feichtenhofer, Trevor Darrell, Saining Xie. | Mar, 2020
34 | ConvNeXTV2 | Vision Transformer | Facebook AI  |Co-designing and Scaling ConvNets with Masked Autoencoders | by Sanghyun Woo, Shoubhik Debnath, Ronghang Hu, Xinlei Chen, Zhuang Liu, In So Kweon, Saining Xie. | Nov, 2021
35 | CPM | Sequence-to-Sequence | Tsinghua University  |A Large-scale Generative Chinese Pre-trained Language Model | by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin, Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen, Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun. | Sep, 2020
36 | CPM-Ant | Sequence-to-Sequence | OpenBMB  | |  | Nov, 2021
37 | CTRL | Autoencoding | Salesforce  |A Conditional Transformer Language Model for Controllable Generation | by Nitish Shirish Keskar, Bryan McCann, Lav R. Varshney, Caiming Xiong and Richard Socher. | Feb, 2019
38 | CvT | Vision Transformer | Microsoft  |Introducing Convolutions to Vision Transformers | by Haiping Wu, Bin Xiao, Noel Codella, Mengchen Liu, Xiyang Dai, Lu Yuan, Lei Zhang. | Apr, 2021
39 | Data2Vec | Language Model | Facebook  |A General Framework for Self-supervised Learning in Speech, Vision and Language | by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu, Michael Auli. | Mar, 2018
40 | DeBERTa | Autoencoding | Microsoft  |Decoding-enhanced BERT with Disentangled Attention | by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. | Jul, 2020
41 | DeBERTa-v2 | Autoencoding | Microsoft  |Decoding-enhanced BERT with Disentangled Attention | by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. | Apr, 2021
42 | Decision Transformer | Vision Transformer | Berkeley/Facebook/Google  |Reinforcement Learning via Sequence Modeling | by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch. | Sep, 2021
43 | Deformable DETR | Vision Transformer | SenseTime Research  |Deformable Transformers for End-to-End Object Detection | by Xizhou Zhu, Weijie Su, Lewei Lu, Bin Li, Xiaogang Wang, Jifeng Dai. | Aug, 2020
44 | DeiT | Vision Transformer | Facebook  |Training data-efficient image transformers & distillation through attention | by Hugo Touvron, Matthieu Cord, Matthijs Douze, Francisco Massa, Alexandre Sablayrolles, Hervé Jégou. | Apr, 2021
45 | DePlot | Vision Transformer | Google AI  |One-shot visual language reasoning by plot-to-table translation | by Fangyu Liu, Julian Martin Eisenschlos, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Wenhu Chen, Nigel Collier, Yasemin Altun. | May, 2021
46 | DETA | Sequence-to-Sequence | The University of Texas at Austin  |NMS Strikes Back | by Jeffrey Ouyang-Zhang, Jang Hyun Cho, Xingyi Zhou, Philipp Krähenbühl. | May, 2021
47 | DETR | Vision Transformer | Facebook  |End-to-End Object Detection with Transformers | by Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, Sergey Zagoruyko. | Oct, 2020
48 | DialoGPT | Autoregressive | Microsoft Research  |Large-Scale Generative Pre-training for Conversational Response Generation | by Yizhe Zhang, Siqi Sun, Michel Galley, Yen-Chun Chen, Chris Brockett, Xiang Gao, Jianfeng Gao, Jingjing Liu, Bill Dolan. | Oct, 2019
49 | DiNAT | Vision Transformer | SHI Labs  |Dilated Neighborhood Attention Transformer | by Ali Hassani and Humphrey Shi. | May, 2021
50 | DistilBERT | Autoencoding | HuggingFace  |smaller, faster, cheaper and lighter | by Victor Sanh, Lysandre Debut and Thomas Wolf. The same method has been applied to compress GPT2 into DistilGPT2, RoBERTa into DistilRoBERTa, Multilingual BERT into DistilmBERT and a German version of DistilBERT. | Oct, 2019
51 | DiT | Vision Transformer | Microsoft Research  |Self-supervised Pre-training for Document Image Transformer | by Junlong Li, Yiheng Xu, Tengchao Lv, Lei Cui, Cha Zhang, Furu Wei. | Dec, 2020
52 | Donut | Time Series Transformer | NAVER  |OCR-free Document Understanding Transformer | by Geewook Kim, Teakgyu Hong, Moonbin Yim, Jeongyeon Nam, Jinyoung Park, Jinyeong Yim, Wonseok Hwang, Sangdoo Yun, Dongyoon Han, Seunghyun Park. | Jul, 2021
53 | DPR | Sequence-to-Sequence | Facebook  |Dense Passage Retrieval for Open-Domain Question Answering | by Vladimir Karpukhin, Barlas Oğuz, Sewon Min, Patrick Lewis, Ledell Wu, Sergey Edunov, Danqi Chen, and Wen-tau Yih. | Dec, 2020
54 | DPT | Vision Transformer | Intel Labs  |Vision Transformers for Dense Prediction | by René Ranftl, Alexey Bochkovskiy, Vladlen Koltun. | Mar, 2021
55 | EfficientFormer | Vision Transformer | Snap Research  |Vision Transformers at MobileNetSpeed | by Yanyu Li, Geng Yuan, Yang Wen, Ju Hu, Georgios Evangelidis, Sergey Tulyakov, Yanzhi Wang, Jian Ren. | Aug, 2021
56 | EfficientNet | Vision Transformer | Google Brain  |Rethinking Model Scaling for Convolutional Neural Networks | by Mingxing Tan, Quoc V. Le. | May, 2019
57 | ELECTRA | Autoencoding | Google Research/Stanford University  |Pre-training text encoders as discriminators rather than generators | by Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning. | Apr, 2020
58 | EncoderDecoder | Sequence-to-Sequence | Google Research  |Leveraging Pre-trained Checkpoints for Sequence Generation Tasks | by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. | May, 2017
59 | ERNIE | Autoencoding | Baidu  |Enhanced Representation through Knowledge Integration | by Yu Sun, Shuohuan Wang, Yukun Li, Shikun Feng, Xuyi Chen, Han Zhang, Xin Tian, Danxiang Zhu, Hao Tian, Hua Wu. | Jun, 2019
60 | ErnieM | Autoencoding | Baidu  |Enhanced Multilingual Representation by Aligning Cross-lingual Semantics with Monolingual Corpora | by Xuan Ouyang, Shuohuan Wang, Chao Pang, Yu Sun, Hao Tian, Hua Wu, Haifeng Wang. | Jun, 2019
61 | ESM | Protein Transformer | Meta AI  |ESM-1b. Biological structure and function emerge from scaling unsupervised learning to 250 million protein sequences | by Alexander Rives, Joshua Meier, Tom Sercu, Siddharth Goyal, Zeming Lin, Jason Liu, Demi Guo, Myle Ott, C. Lawrence Zitnick, Jerry Ma, and Rob Fergus.  | Aug, 2021
 |  |  |   |ESM-1v was released with the paper Language models enable zero-shot prediction of the effects of mutations on protein function | by Joshua Meier, Roshan Rao, Robert Verkuil, Jason Liu, Tom Sercu and Alexander Rives.  |  | Aug, 2021
 |  |  |   |ESM-2 and ESMFold were released with the paper Language models of protein sequences at the scale of evolution enable accurate structure prediction | by Zeming Lin, Halil Akin, Roshan Rao, Brian Hie, Zhongkai Zhu, Wenting Lu, Allan dos Santos Costa, Maryam Fazel-Zarandi, Tom Sercu, Sal Candido, Alexander Rives. |  | Aug, 2021
62 | FLAN-T5 | Autoregressive | Google AI  |released in the repository google-research/t5x | by Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, and Jason Wei | Feb, 2022
63 | FLAN-UL2 | Autoregressive | Google AI  |released in the repository google-research/t5x | by Hyung Won Chung, Le Hou, Shayne Longpre, Barret Zoph, Yi Tay, William Fedus, Eric Li, Xuezhi Wang, Mostafa Dehghani, Siddhartha Brahma, Albert Webson, Shixiang Shane Gu, Zhuyun Dai, Mirac Suzgun, Xinyun Chen, Aakanksha Chowdhery, Sharan Narang, Gaurav Mishra, Adams Yu, Vincent Zhao, Yanping Huang, Andrew Dai, Hongkun Yu, Slav Petrov, Ed H. Chi, Jeff Dean, Jacob Devlin, Adam Roberts, Denny Zhou, Quoc V. Le, and Jason Wei | Apr, 2022
64 | FlauBERT | Autoencoding | CNRS  |Unsupervised Language Model Pre-training for French | by Hang Le, Loïc Vial, Jibril Frej, Vincent Segonne, Maximin Coavoux, Benjamin Lecouteux, Alexandre Allauzen, Benoît Crabbé, Laurent Besacier, Didier Schwab. | Jun, 2019
65 | FLAVA | Autoencoding | Facebook AI  |A Foundational Language And Vision Alignment Model | by Amanpreet Singh, Ronghang Hu, Vedanuj Goswami, Guillaume Couairon, Wojciech Galuba, Marcus Rohrbach, and Douwe Kiela. | Apr, 2022
66 | FNet | Autoencoding | Google Research  |Mixing Tokens with Fourier Transforms | by James Lee-Thorp, Joshua Ainslie, Ilya Eckstein, Santiago Ontanon. | Aug, 2020
67 | Funnel Transformer | Autoregressive | CMU/Google Brain  |Filtering out Sequential Redundancy for Efficient Language Processing | by Zihang Dai, Guokun Lai, Yiming Yang, Quoc V. Le. | Apr, 2019
68 | GIT | Autoencoding | Microsoft Research  |A Generative Image-to-text Transformer for Vision and Language | by Jianfeng Wang, Zhengyuan Yang, Xiaowei Hu, Linjie Li, Kevin Lin, Zhe Gan, Zicheng Liu, Ce Liu, Lijuan Wang. | Sep, 2020
69 | GLPN | Autoencoding | KAIST  |Global-Local Path Networks for Monocular Depth Estimation with Vertical CutDepth | by Doyeon Kim, Woonghyun Ga, Pyungwhan Ahn, Donggyu Joo, Sehwan Chun, Junmo Kim. | Dec, 2020
70 | GPT | Autoregressive | OpenAI  |Improving Language Understanding by Generative Pre-Training | by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. | Jun, 2018
71 | GPT Neo | Autoregressive | EleutherAI  |EleutherAI/gpt-neo | by Sid Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. | Sep, 2019
72 | GPT NeoX | Autoregressive | EleutherAI  |An Open-Source Autoregressive Language Model | by Sid Black, Stella Biderman, Eric Hallahan, Quentin Anthony, Leo Gao, Laurence Golding, Horace He, Connor Leahy, Kyle McDonell, Jason Phang, Michael Pieler, USVSN Sai Prashanth, Shivanshu Purohit, Laria Reynolds, Jonathan Tow, Ben Wang, Samuel Weinbach | Oct, 2020
73 | GPT NeoX Japanese | Autoregressive | ABEJA  |by Shinya Otani, Takayoshi Makabe, Anuj Arora, and Kyo Hattori. |  | Feb, 2022
74 | GPT-2 | Autoregressive | OpenAI  |Language Models are Unsupervised Multitask Learners | by Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodeiand Ilya Sutskever. | Feb, 2019
75 | GPT-J | Autoregressive | EleutherAI  |released in the repository kingoflolz/mesh-transformer-jax | by Ben Wang and Aran Komatsuzaki. | Jun, 2021
76 | GPT-Sw3 | Autoregressive | AI-Sweden  |Building the First Large-Scale Generative Language Model for Swedish | by Ariel Ekgren, Amaru Cuba Gyllensten, Evangelia Gogoulou, Alice Heiman, Severine Verlinden, Joey Öhman, Fredrik Carlsson, Magnus Sahlgren. | Nov, 2021
77 | GPTBigCode | Autoregressive | BigCode  |don’t reach for the stars! | by Loubna Ben Allal, Raymond Li, Denis Kocetkov, Chenghao Mou, Christopher Akiki, Carlos Munoz Ferrandis, Niklas Muennighoff, Mayank Mishra, Alex Gu, Manan Dey, Logesh Kumar Umapathi, Carolyn Jane Anderson, Yangtian Zi, Joel Lamy Poirier, Hailey Schoelkopf, Sergey Troshin, Dmitry Abulkhanov, Manuel Romero, Michael Lappert, Francesco De Toni, Bernardo García del Río, Qian Liu, Shamik Bose, Urvashi Bhattacharyya, Terry Yue Zhuo, Ian Yu, Paulo Villegas, Marco Zocca, Sourab Mangrulkar, David Lansky, Huu Nguyen, Danish Contractor, Luis Villa, Jia Li, Dzmitry Bahdanau, Yacine Jernite, Sean Hughes, Daniel Fried, Arjun Guha, Harm de Vries, Leandro von Werra. | Jun, 2020
78 | GPTSAN-japanese  | Autoregressive |   |released in the repository tanreinama/GPTSAN | by Toshiyuki Sakamoto(tanreinama). | Aug, 2020
79 | Graphormer | Autoencoding | Microsoft  |Do Transformers Really Perform Bad for Graph Representation? | by Chengxuan Ying, Tianle Cai, Shengjie Luo, Shuxin Zheng, Guolin Ke, Di He, Yanming Shen, Tie-Yan Liu. | Oct, 2021
80 | GroupViT | Autoencoding | UCSD, NVIDIA  |Semantic Segmentation Emerges from Text Supervision | by Jiarui Xu, Shalini De Mello, Sifei Liu, Wonmin Byeon, Thomas Breuel, Jan Kautz, Xiaolong Wang. | Apr, 2021
81 | Hubert | Autoencoding | Facebook  |Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units | by Wei-Ning Hsu, Benjamin Bolte, Yao-Hung Hubert Tsai, Kushal Lakhotia, Ruslan Salakhutdinov, Abdelrahman Mohamed. | Jul, 2019
82 | I-BERT | Autoencoding | Berkeley  |Integer-only BERT Quantization | by Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney, Kurt Keutzer. | Oct, 2021
83 | ImageGPT | Autoregressive | OpenAI  |Generative Pretraining from Pixels | by Mark Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, Ilya Sutskever. | Jul, 2021
84 | Informer | Autoencoding | Beihang University, UC Berkeley, Rutgers University, SEDD Company  |Beyond Efficient Transformer for Long Sequence Time-Series Forecasting | by Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, and Wancai Zhang. | Jul, 2020
85 | Jukebox | Autoencoding | OpenAI  |A Generative Model for Music | by Prafulla Dhariwal, Heewoo Jun, Christine Payne, Jong Wook Kim, Alec Radford, Ilya Sutskever. | May, 2021
86 | LayoutLM | Autoencoding | Microsoft Research Asia  |Pre-training of Text and Layout for Document Image Understanding | by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, Ming Zhou. | May, 2020
87 | LayoutLMv2 | Autoencoding | Microsoft Research Asia  |Multi-modal Pre-training for Visually-Rich Document Understanding | by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. | Apr, 2021
88 | LayoutLMv3 | Autoencoding | Microsoft Research Asia  |Pre-training for Document AI with Unified Text and Image Masking | by Yupan Huang, Tengchao Lv, Lei Cui, Yutong Lu, Furu Wei. | Mar, 2022
89 | LayoutXLM | Autoencoding | Microsoft Research Asia  |Multimodal Pre-training for Multilingual Visually-rich Document Understanding | by Yiheng Xu, Tengchao Lv, Lei Cui, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha Zhang, Furu Wei. | Sep, 2020
90 | LED | Autoregressive | AllenAI  |The Long-Document Transformer | by Iz Beltagy, Matthew E. Peters, Arman Cohan. | Jul, 2020
91 | LeViT | Autoencoding | Meta AI  |A Vision Transformer in ConvNet’s Clothing for Faster Inference | by Ben Graham, Alaaeldin El-Nouby, Hugo Touvron, Pierre Stock, Armand Joulin, Hervé Jégou, Matthijs Douze. | Dec, 2020
92 | LiLT | Autoencoding | South China University of Technology  |A Simple yet Effective Language-Independent Layout Transformer for Structured Document Understanding | by Jiapeng Wang, Lianwen Jin, Kai Ding. | Oct, 2019
93 | LLaMA | Autoencoding | The FAIR team of Meta AI  |Open and Efficient Foundation Language Models | by Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, Aurelien Rodriguez, Armand Joulin, Edouard Grave, Guillaume Lample. | Jun, 2021
94 | Longformer | Autoregressive | AllenAI  |The Long-Document Transformer | by Iz Beltagy, Matthew E. Peters, Arman Cohan. | Apr, 2020
95 | LongT5 | Autoregressive | Google AI  |Efficient Text-To-Text Transformer for Long Sequences | by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung, Yinfei Yang. | Nov, 2021
96 | LUKE | Autoencoding | Studio Ousia  |Deep Contextualized Entity Representations with Entity-aware Self-attention | by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda, Yuji Matsumoto. | Oct, 2019
97 | LXMERT | Autoencoding | UNC Chapel Hill  |Learning Cross-Modality Encoder Representations from Transformers for Open-Domain Question Answering | by Hao Tan and Mohit Bansal. | Jun, 2019
98 | M-CTC-T | Autoencoding | Facebook  |Pseudo-Labeling For Massively Multilingual Speech Recognition | by Loren Lugosch, Tatiana Likhomanenko, Gabriel Synnaeve, and Ronan Collobert. | Jun, 2020
99 | M2M100 | Autoregressive | Facebook  |Beyond English-Centric Multilingual Machine Translation | by Angela Fan, Shruti Bhosale, Holger Schwenk, Zhiyi Ma, Ahmed El-Kishky, Siddharth Goyal, Mandeep Baines, Onur Celebi, Guillaume Wenzek, Vishrav Chaudhary, Naman Goyal, Tom Birch, Vitaliy Liptchinsky, Sergey Edunov, Edouard Grave, Michael Auli, Armand Joulin. | Feb, 2021
100 | MarianMT  | Autoencoding |   |Machine translation models trained using OPUS data | by Jörg Tiedemann. The Marian Framework is being developed by the Microsoft Translator Team. | Oct, 2018
101 | MarkupLM | Autoencoding | Microsoft Research Asia  |Pre-training of Text and Markup Language for Visually-rich Document Understanding | by Junlong Li, Yiheng Xu, Lei Cui, Furu Wei. | Jun, 2021
102 | Mask2Former | Autoencoding | FAIR and UIUC  |Masked-attention Mask Transformer for Universal Image Segmentation | by Bowen Cheng, Ishan Misra, Alexander G. Schwing, Alexander Kirillov, Rohit Girdhar. | Aug, 2021
103 | MaskFormer | Autoencoding | Meta and UIUC  |Per-Pixel Classification is Not All You Need for Semantic Segmentation | by Bowen Cheng, Alexander G. Schwing, Alexander Kirillov. | Apr, 2021
104 | MatCha | Autoencoding | Google AI  |Enhancing Visual Language Pretraining with Math Reasoning and Chart Derendering | by Fangyu Liu, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Yasemin Altun, Nigel Collier, Julian Martin Eisenschlos. | Oct, 2021
105 | mBART | Autoregressive | Facebook  |Multilingual Denoising Pre-training for Neural Machine Translation | by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov, Marjan Ghazvininejad, Mike Lewis, Luke Zettlemoyer. | Dec, 2019
106 | mBART-50 | Autoregressive | Facebook  |Multilingual Translation with Extensible Multilingual Pretraining and Finetuning | by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav Chaudhary, Jiatao Gu, Angela Fan. | May, 2021
107 | MEGA | Autoencoding | Facebook  |Moving Average Equipped Gated Attention | by Xuezhe Ma, Chunting Zhou, Xiang Kong, Junxian He, Liangke Gui, Graham Neubig, Jonathan May, and Luke Zettlemoyer. | Feb, 2021
108 | Megatron-BERT | Autoregressive | NVIDIA  |Training Multi-Billion Parameter Language Models Using Model Parallelism | by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper and Bryan Catanzaro. | Dec, 2019
109 | Megatron-GPT2 | Autoregressive | NVIDIA  |Training Multi-Billion Parameter Language Models Using Model Parallelism | by Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper and Bryan Catanzaro. | Nov, 2019
110 | MGP-STR | Autoencoding | Alibaba Research  |Multi-Granularity Prediction for Scene Text Recognition | by Peng Wang, Cheng Da, and Cong Yao. | Aug, 2021
111 | mLUKE | Autoencoding | Studio Ousia  |The Power of Entity Representations in Multilingual Pretrained Language Models | by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. | Oct, 2021
112 | MobileBERT | Autoencoding | CMU/Google Brain  |a Compact Task-Agnostic BERT for Resource-Limited Devices | by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny Zhou. | Oct, 2019
113 | MobileNetV1 | Autoencoding | Google Inc.  |Efficient Convolutional Neural Networks for Mobile Vision Applications | by Andrew G. Howard, Menglong Zhu, Bo Chen, Dmitry Kalenichenko, Weijun Wang, Tobias Weyand, Marco Andreetto, Hartwig Adam. | Apr, 2017
114 | MobileNetV2 | Autoencoding | Google Inc.  |Inverted Residuals and Linear Bottlenecks | by Mark Sandler, Andrew Howard, Menglong Zhu, Andrey Zhmoginov, Liang-Chieh Chen. | Feb, 2018
115 | MobileViT | Autoencoding | Apple  |Light-weight, General-purpose, and Mobile-friendly Vision Transformer | by Sachin Mehta and Mohammad Rastegari. | Oct, 2021
116 | MPNet | Autoencoding | Microsoft Research  |Masked and Permuted Pre-training for Language Understanding | by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu. | May, 2020
117 | MT5 | Autoregressive | Google AI  |A massively multilingual pre-trained text-to-text transformer | by Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya Siddhant, Aditya Barua, Colin Raffel. | Oct, 2019
118 | MVP | Autoencoding | RUC AI Box  |Multi-task Supervised Pre-training for Natural Language Generation | by Tianyi Tang, Junyi Li, Wayne Xin Zhao and Ji-Rong Wen. | Dec, 2021
119 | NAT | Autoencoding | SHI Labs  |Neighborhood Attention Transformer | by Ali Hassani, Steven Walton, Jiachen Li, Shen Li, and Humphrey Shi. | Dec, 2020
120 | Nezha | Autoencoding | Huawei Noah’s Ark Lab  |Neural Contextualized Representation for Chinese Language Understanding | by Junqiu Wei, Xiaozhe Ren, Xiaoguang Li, Wenyong Huang, Yi Liao, Yasheng Wang, Jiashu Lin, Xin Jiang, Xiao Chen and Qun Liu. | May, 2019
121 | NLLB | Autoencoding | Meta  |Scaling Human-Centered Machine Translation | by the NLLB team. | Aug, 2021
122 | NLLB-MOE | Autoencoding | Meta  |Scaling Human-Centered Machine Translation | by the NLLB team. | Dec, 2021
123 | Nyströmformer | Autoencoding | the University of Wisconsin - Madison  |A Nyström-Based Algorithm for Approximating Self-Attention | by Yunyang Xiong, Zhanpeng Zeng, Rudrasis Chakraborty, Mingxing Tan, Glenn Fung, Yin Li, Vikas Singh. | May, 2021
124 | OneFormer | Autoregressive | SHI Labs  |One Transformer to Rule Universal Image Segmentation | by Jitesh Jain, Jiachen Li, MangTik Chiu, Ali Hassani, Nikita Orlov, Humphrey Shi. | Nov, 2021
125 | OPT | Hybrid | Meta AI  |Open Pre-trained Transformer Language Models | by Susan Zhang, Stephen Roller, Naman Goyal, Mikel Artetxe, Moya Chen, Shuohui Chen et al. | Jul, 2021
126 | OWL-ViT | Vision Transformer (ViT) | Google AI  |Simple Open-Vocabulary Object Detection with Vision Transformers | by Matthias Minderer, Alexey Gritsenko, Austin Stone, Maxim Neumann, Dirk Weissenborn, Alexey Dosovitskiy, Aravindh Mahendran, Anurag Arnab, Mostafa Dehghani, Zhuoran Shen, Xiao Wang, Xiaohua Zhai, Thomas Kipf, and Neil Houlsby. | Oct, 2021
127 | Pegasus | Autoregressive | Google  |Pre-training with Extracted Gap-sentences for Abstractive Summarization | by Jingqing Zhang, Yao Zhao, Mohammad Saleh and Peter J. Liu. | Jun, 2019
128 | PEGASUS-X | Autoregressive | Google  |Investigating Efficiently Extending Transformers for Long Input Summarization | by Jason Phang, Yao Zhao, and Peter J. Liu. | Dec, 2021
129 | Perceiver IO | Hybrid | Deepmind  |A General Architecture for Structured Inputs & Outputs | by Andrew Jaegle, Sebastian Borgeaud, Jean-Baptiste Alayrac, Carl Doersch, Catalin Ionescu, David Ding, Skanda Koppula, Daniel Zoran, Andrew Brock, Evan Shelhamer, Olivier Hénaff, Matthew M. Botvinick, Andrew Zisserman, Oriol Vinyals, João Carreira. | Mar, 2021
130 | PhoBERT | BERT-based | VinAI Research  |Pre-trained language models for Vietnamese | by Dat Quoc Nguyen and Anh Tuan Nguyen. | Nov, 2019
131 | Pix2Struct | Hybrid | Google  |Screenshot Parsing as Pretraining for Visual Language Understanding | by Kenton Lee, Mandar Joshi, Iulia Turc, Hexiang Hu, Fangyu Liu, Julian Eisenschlos, Urvashi Khandelwal, Peter Shaw, Ming-Wei Chang, Kristina Toutanova. | Jun, 2020
132 | PLBart | Hybrid | UCLA NLP  |Unified Pre-training for Program Understanding and Generation | by Wasi Uddin Ahmad, Saikat Chakraborty, Baishakhi Ray, Kai-Wei Chang. | Nov, 2020
133 | PoolFormer | Autoregressive | Sea AI Labs  |MetaFormer is Actually What You Need for Vision | by Yu, Weihao and Luo, Mi and Zhou, Pan and Si, Chenyang and Zhou, Yichen and Wang, Xinchao and Feng, Jiashi and Yan, Shuicheng. | Jun, 2021
134 | ProphetNet | Autoregressive | Microsoft Research  |Predicting Future N-gram for Sequence-to-Sequence Pre-training | by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei Zhang and Ming Zhou. | Jun, 2020
135 | QDQBert | BERT-based | NVIDIA  |Principles and Empirical Evaluation | by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius Micikevicius. | Jun, 2021
136 | RAG | Hybrid | Facebook  |Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks | by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela. | Oct, 2019
137 | REALM | Hybrid | Google Research  |Retrieval-Augmented Language Model Pre-Training | by Kelvin Guu, Kenton Lee, Zora Tung, Panupong Pasupat and Ming-Wei Chang. | Jul, 2019
138 | Reformer | Hybrid | Google Research  |The Efficient Transformer | by Nikita Kitaev, Łukasz Kaiser, Anselm Levskaya. | Mar, 2021
139 | RegNet | Convolutional Neural Network | META Platforms  |Designing Network Design Space | by Ilija Radosavovic, Raj Prateek Kosaraju, Ross Girshick, Kaiming He, Piotr Dollár. | Apr, 2020
140 | RemBERT | BERT-based | Google Research  |Rethinking embedding coupling in pre-trained language models | by Hyung Won Chung, Thibault Févry, Henry Tsai, M. Johnson, Sebastian Ruder. | Oct, 2020
141 | ResNet | Convolutional Neural Network | Microsoft Research  |Deep Residual Learning for Image Recognition | by Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun. | Dec, 2015
142 | RoBERTa | BERT-based | Facebook  |A Robustly Optimized BERT Pretraining Approach | by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. | Aug, 2019
143 | RoBERTa-PreLayerNorm | BERT-based | Facebook  |A Fast, Extensible Toolkit for Sequence Modeling | by Myle Ott, Sergey Edunov, Alexei Baevski, Angela Fan, Sam Gross, Nathan Ng, David Grangier, Michael Auli. | Nov, 2019
144 | RoCBert | BERT-based | WeChatAI  |Robust Chinese Bert with Multimodal Contrastive Pretraining | by HuiSu, WeiweiShi, XiaoyuShen, XiaoZhou, TuoJi, JiaruiFang, JieZhou. | Oct, 2020
145 | RoFormer | Hybrid | ZhuiyiTechnology  |Enhanced Transformer with Rotary Position Embedding | by Jianlin Su and Yu Lu and Shengfeng Pan and Bo Wen and Yunfeng Liu. | Mar, 2021
146 | SegFormer | Hybrid | NVIDIA  |Simple and Efficient Design for Semantic Segmentation with Transformers | by Enze Xie, Wenhai Wang, Zhiding Yu, Anima Anandkumar, Jose M. Alvarez, Ping Luo. | Apr, 2021
147 | SEW | Vision Transformer (ViT) | ASAPP  |Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition | by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi. | Jun, 2020
148 | SEW-D | Vision Transformer (ViT) | ASAPP  |Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech Recognition | by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi. | Aug, 2020
149 | SpeechT5 | Autoregressive | Microsoft Research  |Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing | by Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang, Zhihua Wei, Yao Qian, Jinyu Li, Furu Wei. | Oct, 2021
150 | SpeechToTextTransformer | Hybrid | Facebook,   |Fast Speech-to-Text Modeling with fairseq | by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. | Jul, 2019
151 | SpeechToTextTransformer2 | Hybrid | Facebook,   |Large-Scale Self- and Semi-Supervised Learning for Speech Translation | by Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau. | Dec, 2019
152 | Splinter | Hybrid | Tel Aviv University,   |Few-Shot Question Answering by Pretraining Span Selection | by Ori Ram, Yuval Kirstain, Jonathan Berant, Amir Globerson, Omer Levy. | Jul, 2021
153 | SqueezeBERT | BERT-based | Berkeley  |What can computer vision teach NLP about efficient neural networks? | by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W. Keutzer. | Apr, 2020
154 | Swin Transformer | Vision Transformer (ViT) | Microsoft  |Hierarchical Vision Transformer using Shifted Windows | by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo. | Mar, 2021
155 | Swin Transformer V2 | Vision Transformer (ViT) | Microsoft  |Scaling Up Capacity and Resolution | by Ze Liu, Han Hu, Yutong Lin, Zhuliang Yao, Zhenda Xie, Yixuan Wei, Jia Ning, Yue Cao, Zheng Zhang, Li Dong, Furu Wei, Baining Guo. | Oct, 2021
156 | Swin2SR | Vision Transformer (ViT) | University of Würzburg  |SwinV2 Transformer for Compressed Image Super-Resolution and Restoration | by Marcos V. Conde, Ui-Jin Choi, Maxime Burchi, Radu Timofte. | Dec, 2021
157 | SwitchTransformers | Hybrid | Google  |Scaling to Trillion Parameter Models with Simple and Efficient Sparsity | by William Fedus, Barret Zoph, Noam Shazeer. | Jul, 2020
158 | T5 | Autoregressive | Google AI  |Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer | by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu. | Jun, 2020
159 | T5v1.1 | Autoregressive | Google AI  |released in the repository google-research/text-to-text-transfer-transformer | by Colin Raffel and Noam Shazeer and Adam Roberts and Katherine Lee and Sharan Narang and Michael Matena and Yanqi Zhou and Wei Li and Peter J. Liu. | Aug, 2021
160 | Table Transformer | Hybrid | Microsoft Research  |Towards Comprehensive Table Extraction From Unstructured Documents | by Brandon Smock, Rohith Pesala, Robin Abraham. | Nov, 2021
161 | TAPAS | Hybrid | Google AI  |Weakly Supervised Table Parsing via Pre-training | by Jonathan Herzig, Paweł Krzysztof Nowak, Thomas Müller, Francesco Piccinno and Julian Martin Eisenschlos. | Oct, 2020
162 | TAPEX | Hybrid | Microsoft Research  |Table Pre-training via Learning a Neural SQL Executor | by Qian Liu, Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou. | Dec, 2020
163 | Time Series Transformer | Hybrid | HuggingFace.  | |  | Apr, 2021
164 | TimeSformer | Hybrid | Facebook  |Space-Time Attention All You Need for Video Understanding? | by Gedas Bertasius, Heng Wang, Lorenzo Torresani. | Apr, 2021
165 | Trajectory Transformer | Hybrid | the University of California at Berkeley  |Offline Reinforcement Learning as One Big Sequence Modeling Problem | by Michael Janner, Qiyang Li, Sergey Levine | Apr, 2021
166 | Transformer-XL | Autoregressive | Google/CMU  |Attentive Language Models Beyond a Fixed-Length Context | by Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov. | Jan, 2019
167 | TrOCR | Hybrid | Microsoft,  |Transformer-based Optical Character Recognition with Pre-trained Models | by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang, Zhoujun Li, Furu Wei. | Mar, 2021
168 | TVLT | Hybrid | UNC Chapel Hill  |Textless Vision-Language Transformer | by Zineng Tang, Jaemin Cho, Yixin Nie, Mohit Bansal. | Aug, 2021
169 | UL2 | Hybrid | Google Research  |Unifying Language Learning Paradigms | by Yi Tay, Mostafa Dehghani, Vinh Q. Tran, Xavier Garcia, Dara Bahri, Tal Schuster, Huaixiu Steven Zheng, Neil Houlsby, Donald Metzler | Dec, 2021
170 | UniSpeech | Hybrid | Microsoft Research  |Unified Speech Representation Learning with Labeled and Unlabeled Data | by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael Zeng, Xuedong Huang. | Apr, 2021
171 | UniSpeechSat | Hybrid | Microsoft Research  |UNIVERSAL SPEECH REPRESENTATION LEARNING WITH SPEAKER AWARE PRE-TRAINING | by Sanyuan Chen, Yu Wu, Chengyi Wang, Zhengyang Chen, Zhuo Chen, Shujie Liu, Jian Wu, Yao Qian, Furu Wei, Jinyu Li, Xiangzhan Yu. | Apr, 2021
172 | UPerNet | Vision Transformer (ViT) | Peking University  |Unified Perceptual Parsing for Scene Understanding | by Tete Xiao, Yingcheng Liu, Bolei Zhou, Yuning Jiang, Jian Sun. | Oct, 2020
173 | VAN | Vision Transformer (ViT) | Tsinghua University and Nankai University  |Visual Attention Network | by Meng-Hao Guo, Cheng-Ze Lu, Zheng-Ning Liu, Ming-Ming Cheng, Shi-Min Hu. | Nov, 2021
174 | VideoMAE | Hybrid | Multimedia Computing Group, Nanjing University  |Masked Autoencoders are Data-Efficient Learners for Self-Supervised Video Pre-Training | by Zhan Tong, Yibing Song, Jue Wang, Limin Wang. | Dec, 2020
175 | ViLT | Vision Transformer (ViT) | NAVER AI Lab/Kakao Enterprise/Kakao Brain  |Vision-and-Language Transformer Without Convolution or Region Supervision | by Wonjae Kim, Bokyung Son, Ildoo Kim. | Jun, 2021
176 | Vision Transformer (ViT) | Vision Transformer (ViT) | Google AI  |Transformers for Image Recognition at Scale | by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby. | Oct, 2020
177 | VisualBERT | BERT-based | UCLA NLP  |A Simple and Performant Baseline for Vision and Language | by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang. | May, 2020
178 | ViT Hybrid | Hybrid | Google AI  |Transformers for Image Recognition at Scale | by Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, Neil Houlsby. | May, 2021
179 | ViTMAE | Vision Transformer (ViT) | Meta AI  |Masked Autoencoders Are Scalable Vision Learners | by Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dollár, Ross Girshick. | Oct, 2021
180 | ViTMSN | Vision Transformer (ViT) | Meta AI  |Masked Siamese Networks for Label-Efficient Learning | by Mahmoud Assran, Mathilde Caron, Ishan Misra, Piotr Bojanowski, Florian Bordes, Pascal Vincent, Armand Joulin, Michael Rabbat, Nicolas Ballas. | Dec, 2021
181 | Wav2Vec2 | Autoregressive | Facebook AI  |A Framework for Self-Supervised Learning of Speech Representations | by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael Auli. | Oct, 2020
182 | Wav2Vec2-Conformer | Autoregressive | Facebook AI  |Fast Speech-to-Text Modeling with FAIRSEQ | by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Sravya Popuri, Dmytro Okhonko, Juan Pino. | Dec, 2020
183 | Wav2Vec2Phoneme | Autoregressive | Facebook AI  |Simple and Effective Zero-shot Cross-lingual Phoneme Recognition | by Qiantong Xu, Alexei Baevski, Michael Auli. | Mar, 2021
184 | WavLM | Autoregressive | Microsoft Research  |Large-Scale Self-Supervised Pre-Training for Full Stack Speech Processing | by Sanyuan Chen, Chengyi Wang, Zhengyang Chen, Yu Wu, Shujie Liu, Zhuo Chen, Jinyu Li, Naoyuki Kanda, Takuya Yoshioka, Xiong Xiao, Jian Wu, Long Zhou, Shuo Ren, Yanmin Qian, Yao Qian, Jian Wu, Michael Zeng, Furu Wei. | Aug, 2021
185 | Whisper | Autoregressive | OpenAI  |Robust Speech Recognition via Large-Scale Weak Supervision | by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever. | Jul, 2020
186 | X-CLIP | Hybrid | Microsoft Research  |Expanding Language-Image Pretrained Models for General Video Recognition | by Bolin Ni, Houwen Peng, Minghao Chen, Songyang Zhang, Gaofeng Meng, Jianlong Fu, Shiming Xiang, Haibin Ling. | Mar, 2021
187 | X-MOD | Hybrid | Meta AI  |Lifting the Curse of Multilinguality by Pre-training Modular Transformers | by Jonas Pfeiffer, Naman Goyal, Xi Lin, Xian Li, James Cross, Sebastian Riedel, Mikel Artetxe. | May, 2021
188 | XGLM | Hybrid | Facebook AI  |Few-shot Learning with Multilingual Language Models | by Xi Victoria Lin, Todor Mihaylov, Mikel Artetxe, Tianlu Wang, Shuohui Chen, Daniel Simig, Myle Ott, Naman Goyal, Shruti Bhosale, Jingfei Du, Ramakanth Pasunuru, Sam Shleifer, Punit Singh Koura, Vishrav Chaudhary, Brian O’Horo, Jeff Wang, Luke Zettlemoyer, Zornitsa Kozareva, Mona Diab, Veselin Stoyanov, Xian Li. | Jul, 2021
189 | XLM | BERT-based | Facebook  |Cross-lingual Language Model Pretraining | by Guillaume Lample and Alexis Conneau. | Jan, 2019
190 | XLM-ProphetNet | Hybrid | Microsoft Research  |Predicting Future N-gram for Sequence-to-Sequence Pre-training | by Yu Yan, Weizhen Qi, Yeyun Gong, Dayiheng Liu, Nan Duan, Jiusheng Chen, Ruofei Zhang and Ming Zhou. | Jul, 2020
191 | XLM-RoBERTa | BERT-based | Facebook AI,   |Unsupervised Cross-lingual Representation Learning at Scale | by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. | Jul, 2020
192 | XLM-RoBERTa-XL | BERT-based | Facebook AI,   |Larger-Scale Transformers for Multilingual Masked Language Modeling | by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau. | Aug, 2021
193 | XLM-V | Multilingual | Meta AI  |Overcoming the Vocabulary Bottleneck in Multilingual Masked Language Models | by Davis Liang, Hila Gonen, Yuning Mao, Rui Hou, Naman Goyal, Marjan Ghazvininejad, Luke Zettlemoyer, Madian Khabsa. | Jul, 2019
194 | XLNet | Autoregressive | Google/CMU  |Generalized Autoregressive Pretraining for Language Understanding | by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov, Quoc V. Le. | Jun, 2019
195 | XLS-R | Autoregressive | Facebook AI  |Self-supervised Cross-lingual Speech Representation Learning at Scale | by Arun Babu, Changhan Wang, Andros Tjandra, Kushal Lakhotia, Qiantong Xu, Naman Goyal, Kritika Singh, Patrick von Platen, Yatharth Saraf, Juan Pino, Alexei Baevski, Alexis Conneau, Michael Auli. | Jan, 2021
196 | XLSR-Wav2Vec2 | Autoregressive | Facebook AI  |Unsupervised Cross-Lingual Representation Learning For Speech Recognition | by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael Auli. | Mar, 2021
197 | YOLOS | Object Detection | Huazhong University of Science & Technology  |Rethinking Transformer in Vision through Object Detection | by Yuxin Fang, Bencheng Liao, Xinggang Wang, Jiemin Fang, Jiyang Qi, Rui Wu, Jianwei Niu, Wenyu Liu. | Dec, 2021
198 | YOSO | Object Detection | the University of Wisconsin - Madison  |You Only Sample (Almost) |  | Jul, 2021


# Conclusion
I hope this article gave you an idea about Transformer architecture, their variants, their types, their birth chronology and the creators. As we have seen, the Transformer architecture has been a game-changer in natural language processing and computer vision tasks. It has been instrumental in enabling breakthroughs in machine translation, language understanding, and image classification, among other fields.

There are many types of Transformers, such as autoregressive models like GPT, autoencoding models like BERT and its variants, and hybrid models that combine the strengths of both. Additionally, there are many variants of the Transformer architecture, such as XLNet, RoBERTa, and T5, each with their unique contributions and improvements.

The Transformer's birth chronology spans just a few years, from the original paper in 2017 to the latest models that are being developed today. Its creators include some of the most prominent names in the field of AI, such as Google, Facebook, and OpenAI.

As AI technology continues to evolve, we can expect more exciting developments in the field of Transformers, with even more powerful and sophisticated models that can tackle even more complex tasks. The Transformer architecture has shown us that there is still much to explore in the world of deep learning, and we can't wait to see what the future holds.