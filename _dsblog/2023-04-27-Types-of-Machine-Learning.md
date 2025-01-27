---
mathjax: true
id: 6056
title: Types of Machine Learning
date: 2023-04-27
permalink: '/dsblog/Types-of-Machine-Learning'
tags:
  - Machine Learning
  - Deep Learning
  - Artificial Intelligence
  - Neural Networks
  - Data Science
  - Supervised Learning
  - Unsupervised Learning
  - Reinforcement Learning
  - AI Algorithms
keywords: [machine learning types, AI algorithms, deep learning methods, neural networks, supervised learning, unsupervised learning, reinforcement learning, ML techniques, artificial intelligence models]
categories:
  - dsblog

header:
    teaser: /assets/images/dspost/dsp6056-Types-of-Machine-Learning.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: "A comprehensive guide to various types of machine learning approaches and algorithms. Explore different ML paradigms including supervised, unsupervised, reinforcement learning, and advanced concepts like transfer learning, meta-learning, and contrastive learning, with detailed explanations of their applications and implementations."
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![Types of Machine Learning](/assets/images/dspost/dsp6056-Types-of-Machine-Learning.jpg)     
    
# Types of Machine Learning    
    
## Introduction   
Machine learning is a field of artificial intelligence that focuses on developing algorithms that can learn from data and make predictions or decisions. There are several types of machine learning techniques, each with its strengths and weaknesses. In this post, we will explore some of the most commonly used machine learning techniques, including supervised learning, unsupervised learning, reinforcement learning, and more. This post is not about deep diving into these topics but to give you a oneliner understanding and the difference between these different techniques.

Before we dive into different kind of learning let's understand few related important concepts.

## What is pre-training and what is pre-trained model?
**Pre-Training**: The process of training a machine learning model on a large, general dataset to learn broad patterns and features.

**Pre-Trained Model**: A model that has already undergone pre-training and learned general features, which can be further adapted or fine-tuned for specific tasks.

Pre-trained models are developed using extensive and diverse datasets, sometime diverse modalities, allowing them to learn a broad range of features, patterns, and representations. For example, a pre-trained image classification model might be trained on millions of images across various categories.

Pre-trained models are often used in transfer learning, where they are adapted to a new, often more specific task. Instead of training a model from scratch, which can be time-consuming and require large amounts of data, you start with a pre-trained model and fine-tune it on your specific dataset.

Using pre-trained models can significantly reduce training time and computational resources, as the model already has learned useful features and representations that can be leveraged for new tasks.

In NLP Models like GPT-3, BERT, and T5 are pre-trained on large text corpora and can be fine-tuned for specific tasks like sentiment analysis, translation, or summarization. In Computer Vision Models like ResNet, VGG, and EfficientNet are pre-trained on large image datasets like ImageNet and can be fine-tuned for tasks like object detection or medical image analysis.

### Benefits of Pretrained Models

- **Reduced Training Time**: Leveraging existing pre-trained models saves time compared to training a model from scratch.
- **Improved Performance**: Pre-trained models often achieve better performance on specific tasks due to their exposure to extensive and diverse data during pre-training.
- **Resource Efficiency**: Less computational power is required since the model is already trained on large datasets.

## Fine-tuning vs shot-learning 
Fine-tuning and shot learning looks same but here is a shuttle difference between them.

| Aspect                  | Fine-Tuning                                | Shot Learning                               |
|-------------------------|--------------------------------------------|---------------------------------------------|
| **Definition**          | Further training of a pre-trained model on a smaller, task-specific dataset. | Training a model to perform well with very few examples or even just one. |
| **Training Data**       | Typically involves a moderate-sized dataset related to the specific task. | Involves minimal data (few-shot or one-shot examples). |
| **Weight Updates**      | Weights of the model are updated during the fine-tuning process. | Often involves minimal weight updates (for deep learing), no weight update in LLM; focuses on adapting to new tasks quickly. |
| **Purpose**             | Adapt a general-purpose model to a specific application or domain. | Enable quick adaptation to new tasks or classes with limited examples. |
| **Examples**            | Fine-tuning a language model on specific industry jargon/concept/process/idea. | Using a few examples to teach a model to classify new types of images. |
| **Techniques**          | Transfer learning, domain adaptation.      | Meta-learning, prototypical networks, relation networks. |
| **Computational Cost**  | Moderate, depending on the size of the fine-tuning dataset. | Low, as only a small amount of data is used for adaptation. |

## Shot learning in the context of Deep Learning vs LLM

Due to LLM flood in the market, nowadays when people hear about shot learning they think it is prompt engineering. But shot-learning is different in the context of deep learning vs its usage in LLM.

Certainly! Here’s a comparison of shot learning in the context of Deep Learning versus Large Language Models (LLMs):

| Aspect                    | Deep Learning                              | Large Language Models (LLMs)                 |
|---------------------------|--------------------------------------------|----------------------------------------------|
| **Definition**            | Training models to recognize or perform tasks with very few examples. | Adapting models to handle new tasks with minimal examples in the prompt. |
| **Training Process**      | Involves techniques like meta-learning, where the model's weights are updated with a few examples. | Uses in-context learning, where the model adapts to tasks based on the examples provided in the prompt without updating weights. |
| **Weight Updates**        | Model weights are updated during training with few examples (e.g., few-shot learning). | No weight updates; the model uses examples to infer how to perform the task at inference time. |
| **Examples**              | Few-shot learning for image classification where the model is fine-tuned with a few images per class. | Few-shot prompting for text generation where a few example inputs and outputs are provided in the prompt. |
| **Contextual Adaptation** | Adapts through learning mechanisms specific to the task (e.g., metric learning or prototype-based methods). | Adapts using the context provided in the prompt to understand and perform new tasks. |
| **Common Techniques**     | Prototypical Networks, Matching Networks, Meta-Learning (e.g., MAML). | In-context learning, prompt engineering, zero-shot and few-shot prompting. |
| **Computational Cost**    | Can be higher due to fine-tuning or training with few examples. | Generally lower, as it involves using the pre-trained model directly with example prompts. |
| **Data Efficiency**       | Requires careful selection of few examples for effective learning. | Leverages pre-trained knowledge to perform well with minimal data in prompts. |

## What is Zero-shot learning?
**Zero-Shot Learning** is a technique where a model performs a task or recognizes a class it was not explicitly trained on, using its pre-existing knowledge. Keep in mind this is not learning in traditional sense, because there is not weight and bias updatation happening. A pretrained model is being used for inference purpose in the development environment. If you are satisfied then you can move it to production.

### Key Points

- **Pre-Trained Knowledge**: The model has been trained on a large and diverse dataset, learning general patterns and features.
- **No Additional Training**: The model performs the new task without further training or weight updates specific to that task.
- **Task Generalization**: The model uses its broad understanding from pre-training to generalize and handle new tasks or categories.
- **Inference**: The process involves applying learned knowledge to new tasks based on descriptions, prompts, or context provided.

### Example

A model trained on general text data can classify sentiment, answer questions, or perform named entity recognition on new, unseen tasks by leveraging its pre-trained knowledge.

In essence, zero-shot learning enables models to tackle new tasks effectively without task-specific training.



**Now let's understand different type of machine learning, which is the main topic of this artcile.**
## Machine Learning Techniques   


### 1. Supervised learning   
It is a type of machine learning where the model is trained on labeled data. In supervised learning, the model learns from a set of examples where the input data and the corresponding output labels are provided. Supervised learning is used for most common regression and classification tasks.

Some examples of Supervised learning algorithms:

- Linear regression
- Logistic regression
- Decision trees
- Random forests
- Support vector machines (SVMs)
- Naive Bayes
- K-nearest neighbors (KNN)
- Neural networks
- Gradient Boosting Machines (GBMs)
- Convolutional Neural Networks (CNNs)
- Recurrent Neural Networks (RNNs)
- Long Short-Term Memory (LSTM)
- Gated Recurrent Unit (GRU)
- Extreme Gradient Boosting (XGBoost)
- LightGBM.

### 2. Unsupervised learning
It is a type of machine learning where the model learns to recognize patterns in data without the need for labeled examples. Unsupervised learning is used for clustering, dimensionality reduction, and anomaly detection.

Some examples of unsupervised learning algorithms:

- Clustering Algorithms (K-Means, Hierarchical Clustering, DBSCAN, etc.)
- Dimensionality Reduction Algorithms (PCA, t-SNE, LLE, etc.)
- Anomaly Detection Algorithms (Isolation Forest, One-Class SVM, etc.)
- Association Rule Learning Algorithms (Apriori, ECLAT, etc.)
- Generative Adversarial Networks (GANs)
- Autoencoders
- Self-Organizing Maps (SOMs)
- Independent Component Analysis (ICA)
- Principal Component Analysis (PCA)
- Non-negative Matrix Factorization (NMF)


### 3. Reinforcement learning
It is a type of machine learning where the model learns through trial and error by interacting with an environment. The model receives feedback in the form of rewards or penalties for the actions it takes and learns to maximize the rewards over time. RL is used when we don't have enough data to train the model, or when the data does not represent the real world, which has changed or changing fast. RL model building is time-consuming because learning is the process of acting. A robot that can perform a task where the law of physics needs to be obeyed needs RL.

Some examples of reinforcement learning algorithms:

- Q-Learning: Q-learning is a model-free reinforcement learning algorithm that learns to determine the value of an action in a particular state. It does not require a model of the environment and can handle problems with stochastic transitions and rewards.
- SARSA (State-Action-Reward-State-Action): SARSA is another model-free reinforcement learning algorithm that is similar to Q-learning. However, instead of learning the value of the optimal action in a given state, it learns the value of the action actually taken.
- Deep Q-Networks (DQN): DQN is a deep reinforcement learning algorithm that uses a neural network to approximate the action-value function. It has been successfully used to play Atari games and other complex tasks.
- Actor-Critic: Actor-Critic is a family of reinforcement learning algorithms that combine elements of policy-based and value-based methods. It uses two networks, one to estimate the value of a state and another to estimate the policy.
- Proximal Policy Optimization (PPO): PPO is a policy optimization method that updates the policy in small steps while ensuring that the policy does not move too far away from the previous policy. It has been shown to be effective in a wide range of tasks, including robotics and game playing.
- Asynchronous Advantage Actor-Critic (A3C): A3C is a distributed version of the Actor-Critic algorithm that allows multiple agents to learn concurrently. It has been shown to be effective in both continuous and discrete action spaces.


### 4. Semi-supervised learning
It is a type of machine learning that combines both supervised and unsupervised learning. Semi-supervised learning uses a small amount of labeled data along with a large amount of unlabeled data to train the model. Here, first, we create a model with small labeled data and then use the model to predict the label of unlabelled data. After that, we use these predicted labels and create a bigger dataset. Now from this bigger dataset, we can further train the model. We keep doing this and making note of how the model is performing on the originally labeled data. Semi-supervised clustering is used in applications such as gene expression analysis and social network analysis.

Some popular approaches for semi-supervised learning include:

- Self-Training: Self-training is a simple approach for semi-supervised learning. It involves training a model on the labeled data and then using that model to predict labels for the unlabeled data. The confident predictions are then added to the labeled dataset, and the process is repeated.
- Co-Training: Co-Training is a semi-supervised learning approach where the algorithm uses multiple views of the data to train models. It involves training multiple models, each on a different subset of the features, and then exchanging the predicted labels for the unlabeled data between the models.
- Generative Models: Generative models, such as Variational Autoencoders (VAE) and Generative Adversarial Networks (GAN), can also be used for semi-supervised learning. These models learn to generate new data points that are similar to the training data and can be used to label the unlabeled data.
- Graph-Based Methods: Graph-based semi-supervised learning methods use the structure of the data to propagate the labels from the labeled to the unlabeled data. Some examples of graph-based methods include Label Propagation and Graph Convolutional Networks (GCN).
- Entropy Regularization: Entropy regularization is a technique that encourages the model to make confident predictions by penalizing the entropy of the model's output distribution. This technique can be used to make the most of the limited labeled data by leveraging the information in the unlabeled data.


### 5. Transfer learning
It is a technique that enables a model to transfer knowledge learned from one task to another. Transfer learning can be used to improve the performance of a model on a new task where labeled data is scarce or where a task is very common and data is similar. TL is very common in Computer Vision, NLP, and reinforcement Learning.

Although every neural network based model can be used for transfer learning but for example sake various models for transfer learning are:

- VGG: VGG is a popular deep learning model known for its accuracy on image classification tasks. It is often used as a pre-trained model for transfer learning.
- ResNet: ResNet is another popular deep learning model known for its performance on image classification tasks. It has several variants, including ResNet-50 and ResNet-101.
- BERT: BERT is a popular pre-trained model for natural language processing (NLP) tasks, including text classification and question answering.
- GPT: GPT (Generative Pre-trained Transformer) is a pre-trained model for NLP tasks, including language modeling, question answering, and text completion.
- Inception: Inception is a deep learning model known for its performance on image classification tasks. It has several variants, including InceptionV3 and Inception-ResNet.
- MobileNet: MobileNet is a deep learning model optimized for mobile devices. It is often used for transfer learning on image classification tasks.
- AlexNet: AlexNet is a deep learning model known for its accuracy on image classification tasks. It is often used as a pre-trained model for transfer learning.


### 6. Online learning
It is a type of machine learning where the model learns incrementally from incoming data streams. Online learning is used for real-time applications where the model needs to continuously adapt to new data. So parameters of the model keep updating after some time or after a certain number of observations. When data is too large to fit in the memory or changing fast, like millions of people buying thousands of products online, fraud detection, online advertisement, a live cast of an event, city traffic, mass political rally, city law, and order situation, especially in tense time, etc.


Examples of online learning algorithms
- Online Gradient Descent
- Stochastic Gradient Descent
- Adaptive Gradient Descent
- Passive-Aggressive Algorithm
- Online Random Forests
- Online Naive Bayes
- Online Support Vector Machines
- Recursive Least Squares
- Incremental Decision Trees
- Perceptron Algorithm


### 7. Deep learning
It is a subset of machine learning that uses artificial neural networks with multiple layers to learn from data. Deep learning has achieved state-of-the-art results in tasks such as image recognition, natural language processing, and speech recognition.


Some examples of deep learning algorithms:


- Convolutional Neural Networks (CNNs) - used for image and video analysis
- Recurrent Neural Networks (RNNs) - used for natural language processing, speech recognition, and time series analysis
- Long Short-Term Memory (LSTM) networks - a type of RNN used for modeling sequences with long-term dependencies
- Generative Adversarial Networks (GANs) - used for generating new data that resembles the training data
- Deep Belief Networks (DBNs) - used for unsupervised learning, feature learning, and classification tasks
- Autoencoders - used for dimensionality reduction, feature extraction, and image denoising
- Deep Reinforcement Learning (DRL) - is used for decision-making tasks in environments with complex rules and states.


### 8. Evolutionary algorithms
Evolutionary algorithms are a family of optimization algorithms that are inspired by the process of natural selection. In this approach, a population of candidate solutions is evolved over multiple generations to find the best solution to a given problem. The basic idea is to apply the principles of survival of the fittest, reproduction, and mutation to search for optimal solutions.


An example of an evolutionary algorithm is the genetic algorithm. In this algorithm, the candidate solutions are represented as chromosomes, which are encoded as binary strings or vectors of real numbers. The algorithm starts with a population of randomly generated chromosomes and then applies selection, crossover, and mutation operators to create new offspring chromosomes for the next generation.


During the selection phase, the best chromosomes in the population are chosen based on their fitness, which is a measure of how well they solve the problem. The fitness function is problem-specific and evaluates the quality of the solution represented by each chromosome. The selected chromosomes are then combined through crossover, which involves swapping parts of their genetic material, to create new offspring chromosomes. Finally, the offspring chromosomes are subject to mutation, which randomly changes their genetic material to introduce new variations into the population.


This process is repeated over multiple generations, with the hope that the best solution will emerge over time. Evolutionary algorithms have been used to solve a wide range of problems, including optimization, control, and machine learning.


Evolutionary algorithms are often used when other methods such as deep learning or Bayesian learning are not feasible or appropriate for the problem at hand.


Some examples of Evolutionary algorithms are
- Genetic algorithm (GA)
- Differential evolution (DE)
- Particle swarm optimization (PSO)
- Ant colony optimization (ACO)
- Artificial bee colony (ABC)
- Cultural algorithm (CA)
- Harmony search (HS)
- Firefly algorithm (FA)
- Bat algorithm (BA)
- Grey wolf optimizer (GWO)
- Cuckoo search (CS)
- Imperialist competitive algorithm (ICA)
- Whale optimization algorithm (WOA)
- Gravitational search algorithm (GSA)
- Multi-objective optimization algorithms (MOO) such as NSGA-II and SPEA2.




### 9. Bayesian learning
Bayesian learning is a probabilistic approach to machine learning that involves using Bayes' theorem to update the probability of a hypothesis as new evidence is acquired. In Bayesian learning, we start with a prior belief about the probability of a hypothesis and then update this belief as new evidence becomes available. The result is a posterior probability distribution over the hypotheses that reflects our updated belief.


An example of Bayesian learning is in the spam email classification. Suppose we have a dataset of emails that are labeled as either spam or not spam. We want to build a model that can classify new emails as spam or not spam. We can use Bayesian learning to build a spam filter by treating each email as a hypothesis and updating our belief about the probability of the email being spam as new evidence becomes available.


To do this, we start by assigning a prior probability distribution to the hypothesis (i.e., the email being spam or not spam) based on our prior knowledge about the dataset. As we receive new emails and classify them as spam or not spam, we update the prior probability distribution using Bayes' theorem. Specifically, we use the likelihood of the data (i.e., the features of the email) given the hypothesis and the prior probability distribution to calculate the posterior probability distribution over the hypotheses.


Bayesian learning has the advantage of being able to incorporate prior knowledge into the learning process and update this knowledge as new evidence becomes available. This makes it particularly useful in situations where data is limited and prior knowledge is available.


Examples of Bayesian learning algorithms:


- Naive Bayes Classifier: It is a simple probabilistic classifier based on Bayes' theorem. It assumes that the features are independent of each other.
- Bayesian Linear Regression: It is a regression technique that uses Bayesian inference to estimate the parameters of a linear regression model.
- Bayesian Neural Networks: It is a type of neural network that uses Bayesian inference to estimate the parameters of the network. It can provide uncertainty estimates for the model predictions.
- Bayesian Decision Theory: It is a framework that uses Bayesian inference to make decisions based on uncertain or incomplete information.
- Bayesian Belief Networks: It is a graphical model that represents a set of random variables and their conditional dependencies using a directed acyclic graph. It can be used for probabilistic inference and decision-making.




### 10. Instance-based learning
Instance-based learning, also known as lazy learning, is a type of machine learning in which the algorithm learns by memorizing the training dataset instead of constructing a general model. It is a type of machine learning that relies on similarity measures between instances in a dataset to make predictions. In this approach, the algorithm makes predictions based on the similarity between new instances and the instances in the training dataset.


For example, consider a dataset containing information about different cars such as their make, model, year of manufacture, mileage, and price. We want to predict the price of a new car based on its make, model, year of manufacture, and mileage.


In instance-based learning, the algorithm would simply store the entire training dataset in memory, and when a new car is presented, it would find the k most similar cars in the training dataset and use their prices to predict the price of the new car. The similarity between instances can be calculated using distance measures such as Euclidean distance, Manhattan distance, or cosine similarity.


One popular instance-based learning algorithm is k-nearest neighbors (k-NN), where k is the number of nearest neighbors to consider. In the car price prediction example, if k is set to 3, the algorithm would find the 3 most similar cars in the training dataset and use their prices to predict the price of the new car.


Instance-based learning has the advantage of being able to handle complex and nonlinear relationships in the data, but it can be computationally expensive and requires a large amount of memory to store the training dataset. Instance-based learning is used in applications such as recommendation systems and anomaly detection.


Examples of instance-based learning algorithms are:
- k-Nearest Neighbors (k-NN)
- Learning Vector Quantization (LVQ)
- Case-based reasoning (CBR)
- Locally weighted regression (LWR)
- Self-organizing map (SOM)




### 11. Kernel methods
These are techniques that use kernel functions to transform data into a higher-dimensional space, where linear models can be used to make predictions. Kernel methods are used in tasks such as classification, regression, and clustering. One of the most popular kernel methods is the support vector machine (SVM), which uses a kernel function to map input data into a higher-dimensional space and finds a hyperplane that maximizes the margin between two classes of data. Other examples of kernel methods include kernel PCA (principal component analysis) for dimensionality reduction, kernel k-means for clustering, and Gaussian processes for regression. Kernel methods are widely used in various domains, including image and speech recognition, natural language processing, and bioinformatics. They are particularly useful when the data has a complex structure and cannot be easily modeled using linear methods.


Examples of kernel methods algorithms:


- Support Vector Machines (SVM)
- Kernel Principal Component Analysis (KPCA)
- Kernel Canonical Correlation Analysis (KCCA)
- Gaussian Processes (GP)
- Kernel Ridge Regression (KRR)
- Locally Linear Embedding (LLE) with the kernel trick
- Multiple Kernel Learning (MKL)
- Kernel Discriminant Analysis (KDA)
- Spectral Clustering with the kernel trick
- Regularized Least Squares Classification (RLSC)


### 12. Decision tree learning
It is a method that builds a tree-like model of decisions and their possible consequences. Decision tree learning is used in many domains like medical diagnosis, fraud detection and credit risk analysis. Its simplicity and interpretability make it a popular choice for many businesses and organizations.


Some examples of decision tree learning algorithms:


- ID3 (Iterative Dichotomiser 3): This is one of the earliest decision tree algorithms developed by Ross Quinlan in 1986. It uses the entropy measure to find the best split at each node.
- C4.5: This is an extension of the ID3 algorithm, developed by Quinlan in 1993. It uses the gain ratio measure to overcome the bias of ID3 towards attributes with a large number of values.
- CART (Classification and Regression Trees): This algorithm was developed by Breiman, Friedman, Olshen, and Stone in 1984. CART can be used for both classification and regression tasks and uses the Gini index as a measure of impurity.




### 13. Ensemble learning
It is a technique that combines multiple models to improve their accuracy and robustness. Ensemble learning is used in applications such as classification and regression.


Some examples of ensemble learning algorithms:
- Random Forest: It is an ensemble of decision trees that are trained on different subsets of the dataset and use a random subset of features for each split. The final prediction is the mode of the predictions of all trees.
- Bagging: It is an ensemble of models trained on bootstrapped samples of the dataset. The final prediction is the average of predictions of all models.
- Stacking: It is an ensemble of models where the predictions of base models are used as input to a meta-model that learns to combine them. The final prediction is the output of the meta-model.
- AdaBoost: AdaBoost is short for "Adaptive Boosting". In this algorithm, each base learner is trained on the samples that are misclassified by the previous base learners. It is called "adaptive" because the weights of the misclassified samples are increased, making them more important in subsequent iterations. This allows AdaBoost to focus on the difficult samples and achieve high accuracy with a small number of base learners. The final prediction is the weighted sum of the predictions of all learners.
- Gradient Boosting: Gradient Boosting is similar to AdaBoost, but it uses the gradient of the loss function with respect to the model's prediction as a measure of the sample's importance. In each iteration, a new base learner is trained to fit the negative gradient of the loss function. This allows Gradient Boosting to handle differentiable loss functions and achieve high accuracy on a wide range of tasks. The final prediction is the sum of the predictions of all learners.
- XGBoost: XGBoost stands for "Extreme Gradient Boosting". It is a more advanced version of Gradient Boosting that includes several additional features, such as regularization, tree pruning, and parallel processing. These features allow XGBoost to handle larger datasets and achieve even higher accuracy than Gradient Boosting.
- LightGBM: LightGBM is a more recent boosting algorithm that is designed to be faster and more memory-efficient than XGBoost. It achieves this by using a novel approach called "Gradient-based One-Side Sampling" (GOSS) to select the most informative samples for each base learner. This allows LightGBM to achieve high accuracy with a smaller number of base learners and lower memory usage.
- CatBoost: CatBoost is another recent boosting algorithm that is designed to handle categorical features more effectively than other boosting algorithms. It achieves this by using a novel approach called "Ordered Boosting", which creates a permutation of the categorical features that are ordered based on their impact on the loss function. This allows CatBoost to achieve higher accuracy on datasets with a large number of categorical features.


### 14. Self-supervised learning
Self-supervised learning is a type of machine learning in which the algorithm learns from unlabeled data by creating labels from the data itself, rather than relying on human-labeled data.


Suppose we have a large dataset of unlabeled images, and we want to train a model to recognize objects in those images. In a self-supervised approach, we can create labels for the images by asking the model to perform a related but easier task, such as predicting the rotation angle of the image.


We start by randomly rotating each image by a certain angle (e.g., 90 degrees) to create a new, rotated version of the image. We then train the model to predict the rotation angle of the rotated image, given the original, unrotated image as input. The model learns to predict the rotation angle by extracting and encoding features from the image, such as the location of edges, corners, and other patterns.


After training on this task, the model has learned a set of features that are useful for predicting the rotation angle but can also be used for other related tasks, such as object recognition. We can then fine-tune the model on a smaller set of labeled data, such as images with labeled object categories, to improve its performance on the specific task of object recognition.


Overall, self-supervised learning is a powerful technique for training machine learning models on large amounts of unlabeled data and can lead to significant improvements in performance when combined with smaller amounts of labeled data. It has been applied to a wide range of tasks in computer vision, natural language processing, video processing, and other areas of machine learning.


Some examples of self-supervised learning:


- Contrastive Predictive Coding (CPC): In this method, a neural network is trained to predict the relationship between different parts of the same input. For example, in an image, the network learns to predict the relationship between two different patches of the same image.


- Autoencoder: An autoencoder is a neural network that learns to reconstruct the input data from a lower-dimensional representation. It is trained on unlabeled data, where the input and output are the same.


- Generative Adversarial Networks (GANs): GANs are a type of self-supervised learning method where two neural networks are trained simultaneously. One network generates fake data, while the other network tries to distinguish the fake data from real data.


- Pretext tasks: Pretext tasks are a general category of self-supervised learning methods that involve training a neural network to perform a specific task that is not the ultimate task of interest, but is related to it. For example, a network may be trained to predict the rotation or colorization of an image and then fine-tuned on a downstream task such as image classification.

### Shot Learning 

#### 15. Zero-shot learning
Zero-shot learning is a machine learning technique that allows a model to recognize and classify objects that it has never seen before. In zero-shot learning, the model is trained on a set of classes but is expected to recognize and classify instances of new classes that were not part of the training set. This is achieved by learning a semantic embedding space that maps the objects to a semantic space, where classes are represented as points or regions, and objects are classified based on their proximity to these points or regions. Zero-shot learning is particularly useful in situations where it is difficult or impossible to obtain labeled training data for all possible classes. An example of zero-shot learning is recognizing a new species of bird based on its visual characteristics, without having any labeled examples of that bird species in the training set. 


Various Models which help Zero-shot learning:
- Attribute-based models: These models learn a semantic representation of the attributes that describe the visual properties of objects, and use this to classify new objects.
- Semantic embeddings: These models learn a mapping from the visual features of an object to a semantic embedding space, where objects can be compared and classified based on their similarity in the embedding space.
- Generative models: These models learn a generative model of the data distribution, which can be used to generate new samples and classify new objects.
- Hybrid models: These models combine different approaches, such as attribute-based and semantic embedding models, to improve performance and generalize across different types of objects.


#### 16. One-shot learning
It is a type of machine learning where the model can learn from a single example. One-shot learning is used in applications such as facial recognition and handwriting recognition.


Models for one-shot learning, including:


- Siamese Networks: Siamese Networks use a twin neural network architecture that learns to compare two images and output a similarity score. It is trained on a set of pairs of images, one from the same class and another from a different class. Once the network is trained, it can compare a new image to the training set and output a similarity score, allowing it to classify the new image.
- Matching Networks: Matching Networks use a learnable attention mechanism to select a subset of the support set that is most relevant to the query image. This allows the network to effectively leverage the limited labeled data available in the few-shot scenario.
- Prototypical Networks: Prototypical Networks learn a metric space where images of the same class are close together and images of different classes are far apart. The network learns to encode images as a set of prototypes, one for each class, and classify new images based on their similarity to the prototypes.
- Meta-learning (or Learning-to-learn) Models: Meta-learning models learn to learn from a few examples by training on many similar tasks. The idea is to learn a set of shared parameters that can be quickly adapted to a new task with few examples. One example of such models is MAML (Model-Agnostic Meta-Learning).


#### 17. Few-shot learning
Few-shot learning is a type of machine learning where a model is trained to learn from a few examples of a new task or class. This is useful in scenarios where the dataset for a particular task is limited, but the model needs to generalize well and perform well on unseen data.


For example, suppose we have a dataset of images of animals and want to train a model to recognize new species of animals that have only a few images available. In traditional machine learning, we would need a large labeled dataset of the new species to train a model that performs well. In few-shot learning, we can train a model using a small number of examples of the new species, for example, only 5 or 10 images, and then use this model to recognize new instances of the species.


In few-shot learning, the model is typically trained on a small number of examples of the new task or class, along with examples from other tasks or classes. The model then uses this knowledge to recognize new instances of the new task or class.


Various Models which help few-shot learning:
- Siamese Networks: Siamese networks consist of two or more identical neural networks that share weights. They are often used for tasks such as image matching and one-shot learning, where the network learns to recognize similar or dissimilar pairs of inputs.
- Prototypical Networks: Prototypical networks learn to classify new examples based on the distance to a set of learned prototypes or centroids. The prototypes are computed as the mean feature vectors of each class in the support set.
- Matching Networks: Matching networks use attention mechanisms to weigh the importance of different parts of the input when making a decision. They are trained on a support set of labeled examples and can then generalize to new examples with few labels.
- Meta-learning: Meta-learning, also known as "learning to learn," involves training a model to learn how to learn from a few examples. This can be done using a variety of techniques, such as gradient-based meta-learning and metric-based meta-learning.
- Model-agnostic Meta-learning (MAML): MAML is a meta-learning approach that aims to learn a good initialization for a neural network such that it can quickly adapt to new tasks with only a few examples. MAML is model-agnostic, meaning it can be applied to a wide range of deep-learning models.




### 18. Active learning
Active learning is a machine learning technique where an algorithm iteratively selects a subset of the available data to be labeled by an expert or a human annotator, with the goal of maximizing the performance of the model while minimizing the cost of annotation. Suppose we want to build a model that can classify customer support tickets into one of several categories (e.g., billing, technical support, product issues). We have a large set of unlabeled support tickets, but we can only afford to label a small fraction of them due to the cost of annotation.


In an active learning approach, we start by randomly selecting a small subset of support tickets and annotating them with their corresponding category labels. We then train a classification model on this labeled subset, and use it to make predictions on the remaining unlabeled data.


Next, instead of randomly selecting additional examples to label, the active learning algorithm selects the examples that it is most uncertain about, based on the model's current prediction probabilities. These uncertain examples are then sent to a human annotator to be labeled, and added to the training set. The model is retrained on the expanded labeled dataset, and the process repeats until performance reaches a satisfactory level or the available budget for annotation is exhausted.


The key idea behind active learning is that by selectively choosing the most informative examples to be labeled, the algorithm can achieve better performance with fewer labeled examples than would be required by a random sampling approach.


Examples of algorithms for Active Learning are.
- Support Vector Machines (SVM): SVM is a popular model used for binary classification tasks in active learning. It is based on finding the hyperplane that separates the two classes with maximum margin.
- Decision Trees: Decision trees can be used for classification tasks in active learning scenarios. They can be useful for selecting the most informative data points to label next.
- Neural Networks: Neural networks have been used in active learning for both classification and regression tasks. They can be trained using various active learning strategies.
- Bayesian Models: Bayesian models are probabilistic models that can be used in active learning to model the uncertainty of the model's predictions.
- Random Forest: Random forests can be used for classification tasks in active learning scenarios. They can be useful for selecting the most informative data points to label next.


### 19. Multi-task learning
It is a type of machine learning where the model learns to perform multiple tasks simultaneously. The idea is that by sharing some of the learned representations across multiple tasks, the model can achieve better performance on each individual task. Multi-task learning is used in applications where the tasks are related, and the data is scarce. Suppose we want to build a machine learning model that can perform two related NLP tasks: sentiment analysis and topic classification. Sentiment analysis involves determining whether a given text expresses a positive or negative sentiment, while topic classification involves identifying the topic or subject of the text. Multi-task learning can be thought of as a type of multi-label classification (since it involves predicting multiple labels for each example), the focus of multi-label classification is the classification task itself, while the focus of multi-task learning is shared representations or knowledge transfer between tasks.


Models used for multi-task learning are:
- Hard Parameter Sharing: In this model, the input features are fed into a shared hidden layer, and then the outputs of the hidden layer are connected to task-specific output layers. All the tasks share the same parameters in the hidden layer.
- Soft Parameter Sharing: This model is similar to hard parameter sharing, but instead of using the same parameters for all the tasks, it allows some degree of flexibility in the parameters by adding a regularization term.
- Neural Task Graph: In this model, the tasks are represented as nodes in a graph, and the edges between the nodes represent the relationships between the tasks. The input features are fed into the graph, and the output of each task is computed based on its relationship with the other tasks.
-  Hierarchical Multi-Task Learning: This model uses a hierarchy of tasks, where the lower-level tasks provide features to the higher-level tasks. The lower-level tasks are typically simpler and more general, while the higher-level tasks are more specific and complex.
- Adversarial Multi-Task Learning: This model uses adversarial training to learn multiple tasks simultaneously. It involves training a generator network to generate examples that are similar to the training data, and a discriminator network to distinguish between the generated examples and the real examples. The tasks are learned by training the generator to generate examples that are specific to each task, while the discriminator is trained to recognize the task-specific examples.


### 20. Active transfer learning
It is a type of machine learning where the model can transfer knowledge from "related different tasks" to improve its performance on the current task. Active transfer learning involves using knowledge acquired during the training of one model to improve the performance of a different, but related, model. This knowledge transfer typically involves fine-tuning the parameters of the new model using data from the old model, or using the old model as a source of features for the new model. Suppose we have a neural network that has been trained to classify images of dogs and cats. We now want to use this network to classify images of different breeds of dogs, but we only have a limited amount of labeled data for these new breeds. Active transfer learning is used in applications such as natural language processing and image recognition.


Some examples of models for active transfer learning include:


- Adaptive SVM: This model uses a transfer-learning framework to adjust SVM decision boundaries for the target task by incorporating information from the source domain. Active learning is also used to select informative samples from the source domain.
- Multi-task Multi-view Gaussian Process (MT-MVGP): This model uses Gaussian processes to model multiple tasks and views simultaneously. It employs active transfer learning by selecting informative samples from the source domain to improve the accuracy of the target domain.
-  Transfer active learning with oracle-guided instance selection (TAOIS): This model uses a two-stage approach. In the first stage, it selects informative samples from the source domain using active learning. In the second stage, it selects instances from the target domain that are most similar to the informative samples from the source domain to reduce the transfer error.
- Transfer Active Learning via Unsupervised Domain Adaptation (TALUDA): This model uses unsupervised domain adaptation to align the source and target domains. It then uses active learning to select the most informative samples from the source domain to adapt to the target domain.




### 21. Meta-learning
It is a type of machine learning where the model learns how to learn. Meta-learning is used in applications such as few-shot learning and reinforcement learning.  Let's say the meta-learner has been trained on a set of classification tasks, such as classifying medical images, kitchen tools, and whether the given text is offensive or not. After training, the meta-learner has learned to recognize patterns and make accurate predictions for each of these tasks. Now, suppose a new classification task is presented to the system. For example, the task might involve classifying different species of animals based on images of their footprints. This is a new task because it involves a different type of data (footprint images), and a different set of categories to classify (animal species). The meta-learner analyzes the characteristics of the new task with a few samples and then uses its learned knowledge to generate a new model that is tailored to this specific task.


Meta-learning can be approached through different types of models, some of which include:
- Metric-based models: These models learn a distance metric between examples and use it to classify new examples. One example of a metric-based model is Prototypical Networks.
- Model-based models: These models learn how to optimize parameters for a set of tasks, and use these optimized parameters to perform well on new tasks. An example of a model-based meta-learning algorithm is Model-Agnostic Meta-Learning (MAML).
- Memory-based models: These models use a memory bank of examples to perform few-shot learning. Examples of memory-based models include Matching Networks and Relation Networks.
- Optimization-based models: These models learn a set of optimization rules that can be applied to different tasks. An example of an optimization-based model is Learning to Learn by Gradient Descent by Gradient Descent (L2L-GD).




### 22. Deep reinforcement learning
It is a subset of reinforcement learning that uses deep neural networks to learn from the environment. Deep reinforcement learning is used in applications such as game playing and robotics.


Some popular models for deep reinforcement learning include:
- Deep Q-Networks (DQN): DQN is a model that uses a deep neural network to approximate the Q-value function, which represents the expected total reward of taking an action in a given state and following the optimal policy thereafter. DQN was introduced by Google DeepMind in 2015 and was able to achieve superhuman performance in several Atari games.
- Actor-Critic Models: Actor-critic models combine a policy network (the actor) that selects actions and a value network (the critic) that evaluates the value of state-action pairs. The two networks are trained together using gradient descent to maximize the expected reward. Examples of actor-critic models include Asynchronous Advantage Actor-Critic (A3C) and Trust Region Policy Optimization (TRPO).
- Deep Deterministic Policy Gradient (DDPG): DDPG is an actor-critic model that is specifically designed for continuous action spaces. It uses a deterministic policy, meaning that given a state, it outputs a specific action rather than a probability distribution over actions. DDPG has been applied successfully in a variety of domains, including robotics and autonomous driving.
- Proximal Policy Optimization (PPO): PPO is a family of policy optimization methods that use a trust region approach to update the policy parameters. It is a simpler and more stable alternative to TRPO, and has been shown to achieve state-of-the-art performance on a variety of benchmark environments.
- Dueling Network Architectures (Dueling DQN): Dueling DQN is a modification of the DQN architecture that separates the Q-value function into two parts: one that estimates the value of being in a particular state and another that estimates the advantage of taking a particular action in that state. This separation allows the agent to better generalize across actions and states and has been shown to improve performance on a number of benchmark tasks.


### 23. Adversarial learning
It is a type of machine learning where the model is trained to defend against adversarial attacks. Adversarial learning is used in applications such as computer security and image recognition. If an image of "apple" is changed by adverserial attack but visually it looks the the same. In this situation, machine are bound to get confuse and identify this as some different object. We don't want machine should get confused by adverserial attack. We want machine should identify this is an "apple", as human can see. At the same time machine should tell this has been changed, which human cannot see.


Some models commonly used in adversarial learning:
- Generative Adversarial Networks (GANs): GANs are a type of generative model that consists of a generator and a discriminator. The generator learns to generate realistic examples that fool the discriminator, while the discriminator learns to distinguish between real and generated examples.
- Adversarial Autoencoders (AAEs): AAEs are a type of generative model that consist of an encoder, a decoder, and a discriminator. The encoder maps the input data to a latent space, the decoder maps the latent space back to the input data, and the discriminator learns to distinguish between real and reconstructed examples.
- Adversarial Training: Adversarial training involves training a model on adversarial examples as well as regular examples. This can improve the model's robustness to adversarial attacks.
- Adversarial Examples Detection: Adversarial examples detection involves training a separate model to detect adversarial examples, which can be used to identify and reject such examples during inference.
- Adversarial Regularization: Adversarial regularization involves adding a regularization term to the loss function that encourages the model to produce outputs that are robust to adversarial examples.


### 24. Contrastive learning
It is a type of machine learning where the model learns to distinguish between similar and dissimilar instances in a dataset. Contrastive learning is used in applications such as representation learning and image recognition. An image of an "apple", a sound of word "apple", and text "apple" written on piece of paper, "apple" written on the image of apple, all are representing an idea "apple". If machine shows an image of apple and we type "orange" the system can say they both are different and your answer is wrong.


Some popular models for contrastive learning are:


- SimCLR (Simple Contrastive Learning of Representations) - A simple framework for contrastive learning that achieves state-of-the-art performance on a wide range of downstream tasks.
- MoCo (Momentum Contrast) - A contrastive learning framework that uses a momentum encoder to update the representation of the query image.
- BYOL (Bootstrap Your Own Latent) - A self-supervised learning method that learns representations by predicting the representation of an augmented view of the same image.
- SwAV (Swapping Assignments between Modalities) - A method for contrastive learning that jointly learns representations from multiple modalities (e.g., images and text).


### 25. Adaptive Learning
While buying online, or consuming online content, recommendation of new product or content is not based only on the past data about the product and buyer but what action buyer has taken recently. Adaptive learning gives more importance to the data points of current or present actions.


There are many models and techniques that fall under adaptive learning. Here are a few examples:
- Online gradient descent: This is a type of stochastic gradient descent (SGD) that updates the model parameters after every training example. It is commonly used in online learning, where data is streamed in real-time.
- Actor-critic methods: These are reinforcement learning algorithms that have two components: an actor that selects actions, and a critic that evaluates the value of the selected actions. The actor-critic approach is widely used in robotics, gaming, and other applications.
- Transfer learning: Transfer learning allows a model to leverage knowledge learned from a related task and apply it to a new task. This approach is commonly used in computer vision, natural language processing, and other fields.
- Deep residual networks: These are deep neural networks that use residual connections to learn the difference between the input and the output, allowing for easier training and better performance.
- Adaptive boosting (AdaBoost): This is an ensemble learning method that combines several weak learners to create a strong learner. The algorithm adapts the weight of the weak learners based on their performance. AdaBoost is commonly used in computer vision, speech recognition, and other applications.

## 26. Federated learning 
Federated learning is a machine learning approach that allows multiple devices or entities to collaboratively train a model without sharing their local data with each other or a central server. Instead, each entity trains the model on its local data and sends only the model parameters to a central server, which aggregates them to update the global model. This approach allows for privacy-preserving machine learning, as the raw data remains on the local devices and is not shared with any other parties.

Federated learning has applications in various domains, including healthcare, finance, and Internet of Things (IoT) devices. For example, in healthcare, federated learning can be used to train a predictive model on patient data without compromising their privacy. Similarly, in finance, federated learning can be used to train models on transaction data from multiple banks without sharing sensitive information between them

## Conclusion

Machine learning techniques are essential for solving many real-world problems, from image recognition and natural language processing to self-driving cars and medical diagnosis. Each method has its strengths and limitations, and the choice of technique depends on the specific problem and the available data. By understanding the different types of machine learning techniques, you can select the most appropriate method for your project and achieve better results. As the field of machine learning continues to evolve, we can expect to see new and more powerful techniques emerge, making it an exciting time for anyone interested in artificial intelligence.


**Author**   
Dr Hari Thapliyaal   
dasarpai.com    
linkedin.com/in/harithapliyal   
