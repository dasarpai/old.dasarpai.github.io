---
mathjax: true
id: 6210
title: "Exploring AI Benchmarks & Leaderboards"
date: 2025-01-26
permalink: /dsblog/exploring-ai-benchmarks-and-leaderboards
tags:
  - AI
  - Benchmarks
  - Leaderboards
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6210-Exploring-AI-Benchmarks-and-Leaderboards.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Investigate the role of benchmarks and leaderboards in evaluating AI models, focusing on performance metrics and industry standards."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords: ["AI", "Benchmarks", "Leaderboards", "Performance Evaluation"]
---

![Exploring AI Benchmarks & Leaderboards](/assets/images/dspost/dsp6210-Exploring-AI-Benchmarks-and-Leaderboards.jpg)

# Exploring AI Benchmarks & Leaderboards

## Introduction  
A **benchmark** is a standardized test or set of metrics used to measure and compare the performance, capabilities, or quality of systems, models, or algorithms. In the context of **AI and machine learning**, benchmarks provide a way to evaluate how well models perform on specific tasks or datasets, often with respect to predefined metrics like accuracy, speed, robustness, or resource efficiency.  

### **Why do we need Benchmarks?**  
- **Standardization**: Benchmarks define a consistent set of tasks, datasets, or metrics, ensuring comparability across different systems or models.  
- **Reproducibility**: Results from benchmarks are replicable by others using the same conditions and configurations.  
- **Metrics**: Benchmarks provide clear metrics (e.g., accuracy, F1-score, latency) for evaluation.  
- **Domain-Specific**: Benchmarks can be tailored to specific tasks or domains (e.g., NLP, computer vision, robotics).  
- **Progress Measurement**: To track advancements in AI over time.  
- **Innovation Incentive**: To encourage researchers and developers to design better models that surpass existing benchmarks.  

### **What are the Components of an AI Benchmark?**  
1. **Dataset**: A collection of data used for training, validation, or testing. Examples: [ImageNet](https://www.image-net.org/), [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/), [GLUE](https://gluebenchmark.com/).  
2. **Tasks**: Specific problems the model needs to solve, such as classification, translation, or question answering.  
3. **Metrics**: Quantitative measures for evaluation (e.g., precision, recall, BLEU score).  
4. **Baselines**: Pre-existing results or models to compare against (e.g., human performance or older algorithms).  

### **Types of Benchmarks**  
At high levels, benchmarks can be classified into **performance**, **robustness**, **efficiency**, and **ethics and fairness**.  
1. **Performance Benchmarks**: Evaluate how well a model performs a specific task (e.g., accuracy in classification tasks).  
2. **Robustness Benchmarks**: Test how models perform under challenging conditions, such as noise, adversarial inputs, or distribution shifts.  
3. **Efficiency Benchmarks**: Measure resource usage, such as computation time, memory, or energy consumption.  
4. **Ethics and Fairness Benchmarks**: Assess whether a model is fair and unbiased across demographic groups.  

## **What are widely known Benchmarks?**  
Each benchmark mentioned after this can be either **performance**, **robustness**, **efficiency**, or **ethics and fairness** benchmark. Benchmarks cover a wide variety of tasks and domains, addressing different aspects of model performance, usability, and impact. As AI evolves, new benchmarks continue to emerge, reflecting advances in technology and shifting societal priorities.  

### 1. **Natural Language Processing (NLP) Benchmarks**  
Benchmarks for tasks like text classification, machine translation, question answering, summarization, and more.  

**Examples**:  
- **GLUE (General Language Understanding Evaluation):** Evaluates natural language understanding on tasks like sentiment analysis, textual entailment, and more. [GLUE](https://gluebenchmark.com/)  
- **SuperGLUE:** A more challenging version of GLUE. [SuperGLUE](https://super.gluebenchmark.com/)  
- **XTREME:** Evaluates multilingual models on tasks like question answering, named entity recognition, and sentence retrieval. [XTREME](https://sites.research.google/xtreme/)  
- **SQuAD (Stanford Question Answering Dataset):** Measures performance in machine reading comprehension. [SQuAD](https://rajpurkar.github.io/SQuAD-explorer/)  

### 2. **Computer Vision Benchmarks**  
Benchmarks for tasks such as image classification, object detection, segmentation, and more.  

**Examples**:  
- **ImageNet:** A dataset for image classification and object detection. [ImageNet](https://www.image-net.org/)  
- **COCO (Common Objects in Context):** Used for object detection, segmentation, and captioning. [COCO](https://cocodataset.org/)  
- **OpenImages:** A dataset for large-scale object detection and segmentation. [OpenImages](https://storage.googleapis.com/openimages/web/index.html)  
- **CIFAR-10/100:** Used for small-scale image classification. [CIFAR](https://www.cs.toronto.edu/~kriz/cifar.html)  
- **Cityscapes:** Focused on urban scene segmentation. [Cityscapes](https://www.cityscapes-dataset.com/)  

### 3. **Speech and Audio Benchmarks**  
Benchmarks for speech recognition, speaker verification, and sound classification.  

**Examples**:  
- **LibriSpeech:** Used for speech recognition tasks. [LibriSpeech](https://www.openslr.org/12/)  
- **VoxCeleb:** A dataset for speaker recognition and verification. [VoxCeleb](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/)  
- **TIMIT:** Used for phoneme recognition. [TIMIT](https://catalog.ldc.upenn.edu/LDC93S1)  
- **ESC-50:** For environmental sound classification. [ESC-50](https://github.com/karolpiczak/ESC-50)  

### 4. **Reinforcement Learning Benchmarks**  
Benchmarks for evaluating performance on tasks involving sequential decision-making and control.  

**Examples**:  
- **OpenAI Gym:** A collection of environments for RL algorithms, such as CartPole and Atari games. [OpenAI Gym](https://www.gymlibrary.dev/)  
- **MuJoCo:** A physics engine for robotics and continuous control tasks. [MuJoCo](https://mujoco.org/)  
- **DeepMind Control Suite:** Focused on simulated control tasks. [DeepMind Control Suite](https://github.com/deepmind/dm_control)  
- **StarCraft II Learning Environment (SC2LE):** For real-time strategy game learning. [SC2LE](https://github.com/deepmind/pysc2)  

### 5. **Generative AI Benchmarks**  
Benchmarks for tasks like text-to-image generation, style transfer, and music generation.  

**Examples**:  
- **MS COCO Captioning Challenge:** Evaluates text-to-image generation models. [MS COCO](https://cocodataset.org/#captions-2015)  
- **FID (Fréchet Inception Distance):** Measures the quality of generated images. [FID](https://github.com/mseitzer/pytorch-fid)  
- **ChatGPT Eval:** Measures the performance of generative conversational agents. [ChatGPT Eval](https://github.com/openai/chatgpt-eval)  
- **BLEU and ROUGE:** Evaluate text generation tasks such as summarization and translation. [BLEU](https://en.wikipedia.org/wiki/BLEU), [ROUGE](https://en.wikipedia.org/wiki/ROUGE_(metric))  

### 6. **Multimodal Benchmarks**  
Benchmarks that evaluate models capable of handling multiple data types, like text, images, and video.  

**Examples**:  
- **Visual Question Answering (VQA):** Combines image and text understanding. [VQA](https://visualqa.org/)  
- **Image-Text Retrieval (Flickr30k, MS COCO):** Aligns images with text captions. [Flickr30k](https://shannon.cs.illinois.edu/DenotationGraph/), [MS COCO](https://cocodataset.org/#captions-2015)  
- **CLIP Benchmark:** Evaluates zero-shot image classification using multimodal models. [CLIP](https://github.com/openai/CLIP)  
- **MMBench**: Tests models on tasks requiring integration of multiple data modalities. [MMBench](https://github.com/open-mmlab/mmbench)  
- **FLAVA Tasks**: Benchmarks for vision and language alignment in multi-modal models. [FLAVA](https://github.com/facebookresearch/flava)  

### 7. **Ethics and Fairness Benchmarks**  
Benchmarks for measuring bias, fairness, and robustness of models.  

**Examples**:  
- **FairFace:** A dataset for evaluating bias in facial recognition. [FairFace](https://github.com/dchen236/FairFace)  
- **Datasheets for Datasets:** Provides guidelines for dataset documentation to improve transparency. [Datasheets](https://arxiv.org/abs/1803.09010)  
- **Gender Shades:** Measures bias in gender classification systems. [Gender Shades](http://gendershades.org/)  

### 8. **General AI (AGI) Benchmarks**  
Benchmarks for evaluating models that aim to generalize across diverse tasks.  

**Examples**:  
- **BIG-Bench (Beyond the Imitation Game Benchmark):** Evaluates language models on tasks requiring reasoning, comprehension, and knowledge. [BIG-Bench](https://github.com/google/BIG-bench)  
- **ARC (AI2 Reasoning Challenge):** Tests commonsense and scientific reasoning. [ARC](https://allenai.org/data/arc)  
- **HumanEval:** Evaluates models on code generation tasks. [HumanEval](https://github.com/openai/human-eval)  

### 9. **Temporal and Sequential Benchmarks**  
Evaluate models on tasks involving time-series or sequential data.  

**Examples**:  
- **MuJoCo Physics Simulation**: Temporal reasoning and decision-making in physical simulations. [MuJoCo](https://mujoco.org/)  
- **M4 Competition Dataset:** For forecasting time series. [M4](https://www.m4.unic.ac.cy/)  
- **UCR Time Series Classification Archive:** A comprehensive benchmark for time series classification tasks. [UCR](https://www.cs.ucr.edu/~eamonn/time_series_data_2018/)  
- **Electricity and Traffic:** Common datasets used in forecasting and anomaly detection. [Electricity](https://archive.ics.uci.edu/ml/datasets/ElectricityLoadDiagrams20112014), [Traffic](https://archive.ics.uci.edu/ml/datasets/Dodgers+Loop+Sensor)  

### 10. **Robotics Benchmarks**  
Benchmarks for evaluating performance in robotic manipulation, navigation, and control.  

**Examples**:  
- **RoboSuite:** Focused on robotic manipulation. [RoboSuite](https://robosuite.ai/)  
- **Habitat:** A simulator for embodied AI tasks like navigation and object interaction. [Habitat](https://aihabitat.org/)  
- **Fetch Benchmark:** Used for robotic grasping tasks. [Fetch](https://fetchrobotics.com/)  

### 11. **Scientific AI Benchmarks**  
Benchmarks for AI models in scientific applications such as biology, chemistry, and physics.  

**Examples**:  
- **AlphaFold Dataset:** For protein structure prediction. [AlphaFold](https://alphafold.ebi.ac.uk/)  
- **QM9:** A dataset for molecular property prediction. [QM9](https://www.nature.com/articles/sdata201422)  
- **Physics Simulations (DeepMind Simulations):** For evaluating models on physical interactions and properties. [DeepMind](https://www.deepmind.com/)  

### 12. **Generalization Benchmarks**  
Test how well models can generalize to unseen data, tasks, or domains.  

**Examples**:  
- **WILDS**: Evaluates models on real-world distribution shifts across domains like healthcare and satellite imagery. [WILDS](https://wilds.stanford.edu/)  
- **DomainNet**: Assesses domain adaptation and generalization for image classification across different styles (e.g., photos, sketches). [DomainNet](http://ai.bu.edu/DomainNet/)  
- **Meta-Dataset**: Evaluates few-shot learning and generalization across diverse datasets. [Meta-Dataset](https://github.com/google-research/meta-dataset)  

### 13. **Few-Shot and Zero-Shot Benchmarks**  
Assess models’ ability to perform tasks with limited or no prior examples.  

**Examples**:  
- **LEGOEval**: Few-shot NLP tasks like classification and translation. [LEGOEval](https://github.com/allenai/LEGOEval)  
- **CrossFit**: Benchmarks for cross-task few-shot generalization. [CrossFit](https://github.com/IBM/crossfit)  
- **Natural Instructions**: Evaluates zero-shot task adaptation across natural language instructions. [Natural Instructions](https://github.com/allenai/natural-instructions)  

### 14. **Explainability Benchmarks**  
Measure how interpretable and explainable an AI model’s outputs or decisions are to humans.  

**Examples**:  
- **ARRIVE**: Focuses on explainability in reinforcement learning. [ARRIVE](https://arxiv.org/abs/2107.06299)  
- **ExplainBoard**: Evaluates explainability in NLP models. [ExplainBoard](https://github.com/neulab/ExplainBoard)  
- **FACT Benchmark**: Measures the fidelity and consistency of explainability methods for machine learning models. [FACT](https://github.com/interpretml/interpret)  

### 15. **Continuous Learning (Lifelong Learning) Benchmarks**  
Measure models' ability to learn new tasks without forgetting previously learned ones.  

**Examples**:  
- **CLBenchmark**: Evaluates continual learning in classification and regression tasks. [CLBenchmark](https://github.com/ContinualAI/continual-learning-baselines)  
- **CLEAR**: Tests continual reinforcement learning in dynamic environments. [CLEAR](https://github.com/clear-benchmark/clear)  
- **Split CIFAR-100**: Assesses lifelong learning in image classification. [Split CIFAR-100](https://github.com/ContinualAI/avalanche)  

### 16. **Multi-Agent and Collaboration Benchmarks**  
Test models on tasks requiring collaboration, communication, or competition between agents.  

**Examples**:  
- **StarCraft II Multi-Agent Challenge (SMAC):** Evaluates multi-agent coordination strategies. [SMAC](https://github.com/oxwhirl/smac)  
- **Overcooked-AI:** Benchmarks for human-AI collaboration in cooperative tasks. [Overcooked-AI](https://github.com/HumanCompatibleAI/overcooked_ai)  
- **Magent:** A multi-agent environment for reinforcement learning. [Magent](https://github.com/geek-ai/Magent)  

### 17. **Energy and Carbon Efficiency Benchmarks**  
Focus on the environmental impact of training and deploying AI models.  

**Examples**:  
- **Carbontracker:** Tracks energy usage and carbon emissions of AI systems. [Carbontracker](https://github.com/lfwa/carbontracker)  
- **GreenAI Benchmarks:** Encourages the development of energy-efficient AI systems. [GreenAI](https://github.com/GreenAI-NYUAD/GreenAI)  
- **MLPerf Power Benchmark:** Measures energy consumption during model training and inference. [MLPerf](https://mlcommons.org/en/)  

### 18. **Safety Benchmarks**  
Test the reliability and safety of AI systems under real-world constraints.  

**Examples**:  
- **SafeLife:** A benchmark for safe exploration in reinforcement learning. [SafeLife](https://github.com/PartnershipOnAI/safelife)  
- **Safety Gym:** Evaluates safe navigation and control in simulated environments. [Safety Gym](https://github.com/openai/safety-gym)  
- **Adversarial Robustness Toolbox:** Tests how models handle adversarial attacks while ensuring safety. [ART](https://github.com/Trusted-AI/adversarial-robustness-toolbox)  

### 19. **Creativity and Generative AI Benchmarks**  
Evaluate models' ability to generate creative or novel outputs in text, images, or other formats.  

**Examples**:  
- **MS-COCO Captions:** A benchmark for image caption generation. [MS-COCO](https://cocodataset.org/#captions-2015)  
- **Story Cloze Test:** Tests the ability to generate plausible endings for short stories. [Story Cloze](https://github.com/uclanlp/StoryCloze)  
- **GauGAN:** Benchmarks for creative AI in image synthesis. [GauGAN](https://github.com/NVlabs/SPADE)  

### 20. **Alignment and Intent Understanding Benchmarks**  
Measure how well models align with human values, goals, or intentions.  

**Examples**:  
- **Anthropic’s HH-RLHF:** Evaluates alignment with human feedback in reinforcement learning tasks. [HH-RLHF](https://github.com/anthropics/hh-rlhf)  
- **BIG-Bench (Beyond the Imitation Game):** Includes alignment-focused tasks, such as ethical reasoning and understanding intent. [BIG-Bench](https://github.com/google/BIG-bench)  
- **REALM:** Measures retrieval-augmented language model alignment with queries. [REALM](https://github.com/google-research/realm)  

### 21. **Knowledge Representation and Reasoning Benchmarks**  
Test a model’s ability to understand, manipulate, and reason with structured knowledge.  

**Examples**:  
- **OpenBookQA:** Evaluates reasoning using common-sense and scientific facts. [OpenBookQA](https://allenai.org/data/openbook-qa)  
- **ConceptNet Benchmark:** Tests common-sense reasoning and knowledge graphs. [ConceptNet](https://github.com/commonsense/conceptnet5)  
- **ATOMIC:** Assesses models for inferential knowledge about everyday events. [ATOMIC](https://homes.cs.washington.edu/~msap/atomic/)  

### 22. **Specialized Benchmarks for Emerging Domains**  
Benchmarks are also emerging in highly specialized areas like quantum computing, space exploration, and neuroscience.  

**Examples**:  
- **Quantum ML Benchmarks:** For evaluating quantum-enhanced machine learning algorithms. [Quantum ML](https://github.com/quantumlib/Cirq)  
- **SpaceNet:** A benchmark for satellite imagery analysis. [SpaceNet](https://spacenet.ai/)  
- **NeuroBench:** Tests AI systems for neuroscience applications. [NeuroBench](https://github.com/neurobench/neurobench)  

## Computer Use and Browser Use Benchmarks  
**"Computer Use"** and **"Browser Use"** are designed for human-computer interaction (HCI), automation, and web-based tasks. These are Interaction Benchmarks. These benchmarks are primarily aimed at testing models or agents for their ability to perform **interactive tasks** involving user interfaces, browsers, or other digital tools. Here's an overview:  

These benchmarks are key for advancing AI systems capable of seamlessly interacting with digital tools, paving the way for highly capable personal assistants, RPA systems, and adaptive agents.  

**Evaluation Metrics for Computer/Browser Use Benchmarks**   
- **Task Completion Rate**: Percentage of tasks completed successfully.  
- **Error Rate**: Frequency of errors (e.g., incorrect clicks or invalid entries).  
- **Time to Completion**: The time taken to complete the task.  
- **Efficiency and Resource Usage**: Particularly for browser performance.  
- **Human-Like Interaction**: Measures how closely the AI’s actions align with typical human behaviors.  

### 23 **Computer Use Benchmarks**  
These benchmarks evaluate AI systems for their ability to interact with traditional desktop or mobile applications, including file management, text editing, and other GUI-based tasks.  

**Examples:**  
- **HUMAN-AI Interaction Benchmarks**:  
  Evaluates AI assistants in assisting humans with tasks like email management, file organization, or using desktop applications. [HUMAN-AI](https://github.com/HumanCompatibleAI/human-ai-interaction)  
- **Virtual Desktop Environments**:  
  - **MetaWorld:** A virtual environment for reinforcement learning where AI agents perform computer-use tasks, such as dragging and dropping files or using apps. [MetaWorld](https://github.com/rlworkgroup/metaworld)  
  - **RoboDesk:** Benchmarks for robotic systems performing desktop-level tasks. [RoboDesk](https://github.com/robodesk/robodesk)  
- **MiniWoB++ (Mini World of Bits):**  
  A suite of web-based UI tasks designed for testing AI systems on basic computer interactions like clicking buttons, filling forms, or selecting options from menus. [MiniWoB++](https://github.com/stanfordnlp/miniwob-plusplus)  
- **User Interface Interaction Datasets:**  
  Benchmarks like the **ClickMe Dataset** track user interactions with buttons, icons, and forms in GUI-based settings. [ClickMe](https://github.com/ClickMe-Dataset/ClickMe)  

### 24. **Browser Use Benchmarks**  
These benchmarks are designed for tasks involving web browsers, such as form filling, navigation, web scraping, or multi-step workflows (e.g., booking a flight or ordering a product online).  

**Examples:**  
- **WebGPT Benchmarks:**  
  Evaluates AI models that search the web and extract or summarize relevant information to answer user queries. [WebGPT](https://github.com/openai/webgpt)  
- **BrowserBench:**  
  Benchmarks designed to evaluate browser engines' performance in handling tasks like rendering, navigation, and resource loading. (E.g., **Speedometer**, **JetStream**, **MotionMark**). These are more about browser performance than AI but are indirectly relevant. [BrowserBench](https://browserbench.org/)  
- **MiniWoB++ for Web Tasks:**  
  Includes tasks like navigating through webpages, clicking specific elements, or extracting data from websites. [MiniWoB++](https://github.com/stanfordnlp/miniwob-plusplus)  
- **OpenAI's WebGPT:**  
  Benchmarks assessing an agent's ability to use a browser for tasks like multi-step searches, citing sources, or reasoning across multiple pages. [WebGPT](https://github.com/openai/webgpt)  
- **Browser Automation Benchmarks (RPA):**  
  - Datasets and tools from robotic process automation (RPA) platforms like **SikuliX** or **UiPath**, which evaluate the performance of agents automating browser-based workflows. [SikuliX](https://sikulix.github.io/), [UiPath](https://www.uipath.com/)  
- **DeepMind's Alphacode Web Automation Tasks:**  
  A set of benchmarks testing AI for automating workflows within web-based environments. [Alphacode](https://github.com/deepmind/alphacode)  

## What is Leaderboard?
An AI Leaderboard is a publicly available platform or tool that ranks AI models, systems, or algorithms based on their performance on predefined benchmarks or datasets. It acts as a scoreboard for comparing different approaches and identifying the current state-of-the-art (SOTA) methods in specific AI tasks or domains. When above discussed different benchmarks are used by model provider or model evaluator against a given model then the performance of the model is reported on the leader board. So, a leaderboard is  

- Ranking Mechanism: Models are ranked according to their performance on a specific task, measured using metrics like accuracy, F1 score, BLEU, or others depending on the benchmark.
- Transparency: Leaderboards display detailed information about submitted models, including the methodology, configuration, and even code, fostering reproducibility and openness.
- Task-Specific: Each leaderboard is typically associated with a particular dataset or task, such as machine translation, image recognition, or reinforcement learning.
- Dynamic Updates: As new models are submitted, the rankings are updated, reflecting ongoing progress in the field.
- Community Engagement: Researchers and practitioners actively submit their models to compete for the top position, driving innovation and improvement.

### What are popular Leaderboard?

Here is a list of notable AI leaderboards and their purposes. Keep in mind, a leaderboard is as good as it is updated by the community and model builder. If a leaderboard is not seeing any activity in last 3-6 month time, it means there is better leaderboard in place of that and people are not using it to report the model performance. The leaderboard contains current progress of the model therefore they are hosted at some places. There are many hosting spaces where leaderboards are hosted and one of the famous is huggingface.

### Huggingface Hosted Leaderboards
- [Text To Image Leaderboard - ArtificialAnalysis HF space](https://huggingface.co/spaces/ArtificialAnalysis/Text-to-Image-Leaderboard)
- [LLM-Perf Leaderboard - optimum HF space](https://huggingface.co/spaces/optimum/llm-perf-leaderboard)
- [Open LLM Leaderboard - open-llm-leaderboard HF space](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
- [IFEval Leaderboard - Krisseck HF space](https://huggingface.co/spaces/Krisseck/IFEval-Leaderboard)
- [Chatbot Arena Leaderboard - lmarena-ai HF space](https://huggingface.co/spaces/lmarena-ai/chatbot-arena-leaderboard)
- [Chatbot Arena Leaderboard - lmsys HF space](https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard)
- [Big Code Models Leaderboard - bigcode HF space](https://huggingface.co/spaces/bigcode/bigcode-models-leaderboard)
- [EffiBench Leaderboard - EffiBench HF space](https://huggingface.co/spaces/EffiBench/effibench-leaderboard)
- [Leaderboards and benchmarks - a clefourrier HF Collection](https://huggingface.co/collections/clefourrier/leaderboards-and-benchmarks-64f99d2e11e92ca5568a7cce)
- [MTEB (Massive Text Embedding Benchmark) Leaderboard](https://huggingface.co/spaces/mteb/leaderboard) : Evaluates text embedding models on tasks like classification, clustering, and retrieval. **Key Metrics**: Performance across multiple embedding tasks. 
- [AI Energy Score Leaderboard](https://huggingface.co/spaces/AIEnergyScore/Leaderboard) : Evaluates AI models based on their energy efficiency and environmental impact. **Key Metrics**: Energy consumption (kWh), carbon emissions, and computational efficiency (FLOPs).

### Github.io Hosted Leaderboards
- [EvalPlus Leaderboard](https://evalplus.github.io/leaderboard.html)
- [BigCodeBench](https://bigcode-bench.github.io/)
- [CrossCodeEval](https://github.com/amazon-science/cceval)
- [ClassEval](https://fudanselab-classeval.github.io/)
- [CRUXEval](https://crux-eval.github.io/leaderboard.html)
- [Code Lingua](https://codetlingua.github.io/leaderboard.html)
- [Evo-Eval](https://evo-eval.github.io/)
- [HumanEval.jl - Julia version HumanEval with EvalPlus test cases](https://github.com/01-ai/HumanEval.jl)
- [LiveCodeBench](https://livecodebench.github.io/leaderboard.html)
- [MHPP](https://sparksofagi.github.io/MHPP/)
- [NaturalCodeBench](https://github.com/THUDM/NaturalCodeBench)
- [RepoBench](https://github.com/Leolty/repobench)
- [LLM4 Software Testing - TestEval](https://llm4softwaretesting.github.io/)
- [TruthfulQA](https://github.com/sylinrl/TruthfulQA) : Measures the accuracy of LLMs in answering questions without generating misleading or false information. Truthfulness scores across 38 categories of questions.
- [HumanEval+](https://github.com/evalplus/evalplus) : Evaluates LLMs on programming tasks, focusing on code generation and debugging. **Key Metrics**: Accuracy and efficiency in coding tasks. 
- [FlagEval](https://flageval.github.io/) : A comprehensive platform for evaluating foundation models across multiple dimensions, including performance, safety, and efficiency. **Key Metrics**: Multi-dimensional evaluation scores. 


## Paperswithcode Hosted Leaderboards
- [Common Sense Reasoning](https://paperswithcode.com/sota/common-sense-reasoning-on-arc-challenge) : Assesses LLMs' ability to answer complex, science-based questions requiring deep reasoning and knowledge. **Key Metrics**: Accuracy on grade-school science questions. 
- [Papers With Code](https://paperswithcode.com/) : Links AI research papers with code and benchmarks, fostering transparency and reproducibility in machine learning. **Key Metrics**: State-of-the-art (SOTA) results across various tasks. 


## Chatbot Arena (formerly LMSYS) Leadboards:
The LMSYS Chatbot Arena Leaderboard is a comprehensive ranking platform that assesses the performance of large language models (LLMs) in conversational tasks. It uses a combination of human feedback and automated scoring to evaluate models
- [Chatbot Arena (formerly LMSYS): Free AI Chat to Compare & Test Best AI Chatbots](https://lmarena.ai/?leaderboard)
- [LMSYS Chatbot Arena Leaderboard — Klu](https://klu.ai/glossary/lmsys-leaderboard)
- [Chatbot Arena](https://huggingface.co/spaces/lmarena-ai/chatbot-arena-leaderboard) : A crowdsourced platform where users compare LLMs in head-to-head battles, ranking models based on user satisfaction and conversational performance. **Key Metrics**: User ratings, win rates, and response quality. 

## Miscellaneous Leaderboards
- [Klu.ai](https://klu.ai/llm-leaderboard)
- [LiveBench](https://livebench.ai/)
- [extractum.io - OpenLLM Leaderboard](https://llm.extractum.io/list)
- [OpenLM.ai - Chatbot Arena](https://openlm.ai/chatbot-arena/)
- [Aider.chat - LLM Leaderboards | aider](https://aider.chat/docs/leaderboards)
- [SWE-bench](https://www.swebench.com/)
- [TabbyML Leaderboard](https://leaderboard.tabbyml.com/)
- [Open LLM Leaderboard](https://artificialanalysis.ai/leaderboards/models) : Tracks and ranks open-source language models (LLMs) across various benchmarks, such as accuracy, reasoning, and commonsense understanding. **Key Metrics**: Quality, price, performance, and speed (tokens per second, latency). 
- [Libra-Leaderboard](https://arxiv.org/abs/2412.18551) : Evaluates the safety and trustworthiness of LLMs, focusing on risks like misinformation, bias, and adversarial attacks. **Key Metrics**: Safety and capability balance, distance-to-optimal-score method. 
- [ARC Leaderboard](https://leaderboard.allenai.org/arc/submissions/public) 
- [HellaSwag](https://rowanzellers.com/hellaswag/) : Evaluates commonsense reasoning in LLMs by testing their ability to complete sentences and scenarios. **Key Metrics**: Accuracy on commonsense reasoning tasks. 
- [Dynabench](https://dynabench.org/) : - Dynabench is a platform for dynamic dataset creation and benchmarking, focusing on evaluating AI models in real-world, adversarial, and evolving scenarios. They have dozens of leadboards for Text, Audio, Language, Code, Vision, Medical, **Key Metrics**: Human-and-model-in-the-loop evaluation, adversarial robustness, and generalization across tasks like NLP and vision.
- [Generative AI Leaderboards](https://leaderboards.allenai.org/) : Tracks the performance of generative AI models, particularly in natural language generation, image synthesis, and other creative tasks. They have dozens of leaderboards for reasoning, robotics, agents, text, image, and video generation. **Key Metrics**: Perplexity, BLEU, ROUGE, FID (Fréchet Inception Distance), and human evaluation scores.
- [SuperCLUE](https://www.superclueai.com/) : A Chinese AI evaluation benchmark focusing on large language models (LLMs) and their performance in Chinese language tasks. **Key Metrics**: Accuracy, fluency, and task-specific performance in Chinese NLP tasks.