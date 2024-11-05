---
mathjax: true
id: 6172
title: "Transfer Learning Key AI Techniques Explained"
date: 2024-10-25
permalink: /dsblog/Transfer-Learning-Key-AI-Techniques-Explained
tags: ["Generative AI", "Text Generation", "AI Conversation", "In Context Learning","Prompt Engineering", "Zero Shot Learning", "Natural Language Processing"]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6172-Transfer-Learning-Key-AI-Techniques-Explained.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 3
mathjax: "true"
comments: true
---

![Transfer Learning Key AI Techniques Explained](/assets/images/dspost/dsp6172-Transfer-Learning-Key-AI-Techniques-Explained.jpg)

# Transfer Learning Key AI Techniques Explained 
In this article we will understand some important concepts used within machine learning. 
- What is in-context Learning? 
- What is Prompt-Engineering? 
- What is the relationship between Prompt Engineering and In-Context Learning? 
- What is Zero-shot learning? 
- How Zero-shot learning is different from In-context Learning? 
- What is Meta-Learning? 
- What is Few-shot learning? 
- Do we need foundational models for Meta-learning and Few-shot learning? 
- What is transfer learning? 
- How do we do transfer learning from existing model? 
- What is finetuning? 
- Which layers to update, what weight to update during finetuning?

## Prompt Engineering, In Context Learning and Zero-shot Learning

### What is in-context Learning?
In-Context Learning refers to a model's ability to adapt its responses based on the context provided in the input prompt without updating its parameters or undergoing explicit training. The model uses the examples, instructions, or context given in the input to influence its behavior during inference.

This learning occurs at inference time, meaning the model leverages the contextual information present in the prompt to generate relevant outputs. For example, if you provide a few examples of a specific task within the prompt, the model uses those examples to infer how to respond appropriately.

Example: When you give a language model a few sentences that demonstrate a particular task (like sentiment analysis, translating text or generating questions), the model uses that context to perform the task as specified in the input.

### What is Prompt-Engineering?
Prompt Engineering is the practice of crafting and designing prompts in a way that effectively elicits the desired behavior or output from a language model. It involves selecting the right wording, structure, and examples to improve the model's responses.

This is a deliberate technique used to maximize the performance of the model by influencing how it interprets the input. It may involve adjusting the phrasing, adding context, or providing explicit instructions in the prompt.

Example: If you want a model to summarize an article, you might engineer the prompt to explicitly state, "Please summarize the following article in three sentences." This explicit instruction helps guide the model toward producing the desired output.

## What is the relationship between Prompt Engineering and In-Context Learning?
In-Context Learning is more about how the model utilizes the provided context during inference. So it is work of model. While Prompt Engineering is about how you craft that context (the prompt) to guide the model effectively, this is the work of human.

In-Context Learning assesses the model's ability to understand and adapt to new information presented in the input. In Prompt Engineering aims to optimize the input format for better model performance, here we go with assumption that the model in hand is the best model and we need to tune our input in such a way that it works for us. So, there is no question of assessing.

In nutshell, In-Context Learning deals with "how the model processes information at inference time", and Prompt Engineering focuses on "how to structure that input" to achieve the best possible results.

When we write our prompt to get the results in-context learning is happening in the background, without our knowledge.

## What is Zero-shot learning?

In zero-shot learning, the model is asked to perform a task or recognize a category it has not been explicitly trained on, using its understanding of the relationships between concepts. The model leverages its pre-existing knowledge without receiving any specific examples for the task.

For example, imagine we have a language model that was trained on general text but has never been explicitly taught to translate languages. However, you ask it:

**Prompt:** “Translate ‘Hello’ from English to Spanish.”

In zero-shot learning, the model attempts to respond with “Hola” by drawing on its general knowledge about languages, even though it wasn’t trained specifically for translation.

**Prompt:** What is this white animal in the image?

In zero-shot learning, the model attempts to answer "Zebra", even though no zebra images were used for the training.

In short, the model uses its understanding to handle the new task without any direct examples or task-specific training. This approach is commonly used in natural language processing and is valuable for testing the model's ability to generalize. In fact it is more about inference or inferring and nothing to do with learning!

## How Zero-shot learning is different from In-context Learning?

Zero-Shot Learning: Here, the model typically receives just a single prompt or query for an unfamiliar task and is expected to respond appropriately without any further guidance. The model might be given a straightforward question like “What is the name of this striped animal?” for a zebra, without examples or prior context.

In-Context Learning: This involves providing examples or context (hence “in-context”) directly in the input prompt, showing the model the task structure. In few-shot or even one-shot in-context learning, the model might receive examples like “An animal with spots is a leopard” followed by “A black-and-white striped animal is a …?” which allows it to infer the pattern and give the correct response (“zebra”).


## Meta learning and Few-shot Learning?
### What is Meta-Learning?
Meta learning is "learning to learn". The goal of this is to enable the model to generalize across tasks so that it can learn new tasks with minimal fine-tuning or new examples. Meta-learning encompasses various approaches, like few-shot learning, zero-shot learning, multi-task learning, and rapid adaptation techniques. 

### What is Few-shot learning?
Few-shot learning is a type of learning where the model is trained to perform well on a task with only a few labeled examples (often 1 to 5 examples per class). Few-shot learning can be approached using various techniques, including meta-learning (as discussed earlier), transfer learning, and data augmentation. Few-shot learning is often achieved through meta-learning like Prototypical Networks or MAML (Model-Agnostic Meta-Learning)

For example we have mnist dataset and we want to use few-shot learning to create a model. Let's assume our dataset has 1000 samples and there are 10 classes (0-9 digits). For each class we have 100 samples. 

In the 5-shot learning, we will take random n classes say 6. Then we pickup 5 sample from each of these classes. So we have 30 samples, this is called, support-set. Remaining 570 (600 - 30) samples are called query set. During the training process model need to learn from those 30 samples and predict nearest class on 570 sample. Suppose we conduct our training for 100 epochs then in each epoch these classes and samples of each classes will be different. This whole setup is called "Prototypical Network", because we are creating prototype, a sample which represent classes in the dataset. Architecture, hyper-parameters are similar to normal training process.

Once the training is complete the model is evaluated on completely new dataset to know the overall performance of the model.

In traditional supervised learning, the model is trained directly on the full dataset, with all examples and classes used in a straightforward classification task. In few-shot learning, especially with meta-learning approaches like Prototypical Networks or Matching Networks, the model instead learns through a series of simulated few-shot tasks (mini classification problems) where it encounters limited samples and class subsets each time.

In the traditional training, the model might overfit or memorize patterns specific to the training set, making it less adaptable to new, unseen classes. But, in few-Shot Meta-Learning, the model is constantly trained on various combinations of classes and examples, forcing it to generalize across tasks rather than specific examples. This makes it better suited to new tasks with limited data.

In short, Meta-learning is a broader strategy for building adaptability across tasks. Few-shot learning is a specific objective (learning with minimal data) often achieved through meta-learning techniques.

### Do we need foundational models for Meta-learning and Few-shot learning?
Yes, both meta-learning and few-shot learning typically benefit from a well-designed base model or foundation model, although the specific requirements vary depending on the approach.

## Transfer Learning and Fine-tuning 

### What is transfer learning?
- Transfer learning is the broader concept of taking a model trained on one task or dataset and reusing it for a new but related task.
- This approach leverages the **knowledge** (features, patterns, or representations) the model learned from the original dataset to make training on the new dataset faster and often more accurate, especially with limited data.
- In practice, transfer learning often involves starting with a **pre-trained model** and adapting it for a new task by adding, removing, or adjusting layers.

Suppose we have the task of reading license plate numbers from vehicles on a busy road. This is a challenging problem, as it involves several complexities:
1. **Varied Vehicles**: Different types, shapes, and sizes of vehicles are present, such as cars, trucks, motorcycles, and even pedestrians.
2. **Regional Variability**: In countries like India, license plates often use local languages, unique fonts, and may have non-standard placements or formats.

To address these challenges efficiently, rather than building models from scratch, we leverage **transfer learning**. Here's how:

1. **Using Pre-trained Models**: We start with existing, pre-trained models designed for general tasks like **object detection** and **optical character recognition (OCR)**. For instance:
   - A model that detects common objects can help identify vehicles and other elements in a scene, ignoring irrelevant objects like pedestrians.
   - An OCR model trained to recognize alphabets and digits in multiple languages can be adapted to local license plate fonts and languages.

2. **Adapting to Our Specific Task**: Through transfer learning, we take these general models and **fine-tune** them using our custom dataset. This dataset includes images of vehicles in various orientations, lighting conditions, and with license plates in different scripts, fonts, and sizes.
   - **Localization**: An object detection model can be fine-tuned to recognize vehicles and pinpoint the exact location of license plates.
   - **Character Recognition**: An OCR model can be fine-tuned to identify the specific alphabets, numbers, and fonts common to the region.

3. **Transfer Learning Techniques**: We update only the parts of the pre-trained models that require adaptation (e.g., by re-training the last few layers), rather than adjusting the entire model. This allows us to build a robust, task-specific model much more efficiently than training from scratch.


In short, In transfer learning, we capitalize on the **generalized knowledge** captured by large, pre-trained models and **adapt** it for a specific task with minimal data and computational resources. In this example, we use transfer learning to detect vehicles, locate license plates, and recognize characters—achieving a powerful solution by leveraging pre-existing models as a foundation.

### How do we do transfer learning from existing model?

To perform transfer learning on an existing model, you follow these general steps:

1. **Choose a Pre-trained Model**:
   - Select a model pre-trained on a large dataset relevant to your task (e.g., ImageNet for images, a general language model for text).

2. **Freeze Early Layers**:
   - The early layers (left side of architecture) of a pre-trained model often capture general features (like edges in images or common word structures in text).
   - Freeze these layers so their weights aren’t updated during training, which saves computation and preserves these general features.

3. **Modify the Final Layers**:
   - Replace the last layers (the "head") with new layers tailored to your specific task. For instance, if your task involves classifying 10 unique categories, change the output layer to have 10 nodes.
   - Add dropout layers if you need to reduce overfitting or dense layers to learn new task-specific features.

4. **Fine-Tune on Your Dataset**:
   - Use your labeled dataset to train the modified model.
   - At first, train only the new (unfrozen) layers with a low learning rate.
   - Optionally, "unfreeze" some of the later frozen layers to fine-tune them as well, especially if your dataset differs significantly from the original dataset.

5. **Evaluate and Refine**:
   - After training, evaluate the model’s performance on a validation set.
   - If needed, adjust hyperparameters, unfreeze more layers, or tweak the architecture further to improve performance.

### What is finetuning?
- Fine-tuning is a **specific technique within transfer learning**. It involves training (or re-training) some or all of the layers of the pre-trained model on the new dataset, often with a lower learning rate.
- Fine-tuning generally means that the **early layers** of the model, which contain general features (e.g., edges or textures in images, common word structures in text), are often frozen, while the **later layers** are adjusted to learn task-specific features for the new dataset.
- Fine-tuning can range from updating just the final few layers to selectively unfreezing additional layers to adapt the model further.

In summary, **Transfer learning** is the overarching strategy of leveraging a pre-trained model for a new task. **Fine-tuning** is a method within transfer learning where you adjust certain layers of the model on the new task to improve its performance. In short, **all fine-tuning is transfer learning**, but not all transfer learning involves fine-tuning. Some transfer learning setups only reuse fixed features from a pre-trained model without modifying them.

### Which layers to update, what weight to update during finetuning?

During fine-tuning, you have flexibility regarding which parts of the model you expose for updates:
- All weights can be updated for full fine-tuning.
- Certain layers can be frozen to retain learned features while still adapting the model to new tasks.
- Adapter layers can be used to minimize changes to the original model while still allowing it to learn from new data.

The choice of approach depends on factors such as the size of your dataset, the relatedness of your task to the pre-trained model, and the computational resources available.
