---
mathjax: true
id: 6213
title: "Understanding the Working of CNN"
date: 2025-01-29
permalink: /dsblog/understanding-working-of-cnn
tags:
  - CNN
  - Deep Learning
  - AI
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6213-Understanding-Working-of-CNN.jpg
excerpt_separator: "<!--more-->"
author: John Doe
layout: dspost-layout
excerpt: "Explore the intricate workings of Convolutional Neural Networks and their impact on AI advancements."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
keywords: ["CNN", "Deep Learning", "AI", "Neural Networks"]
---

![Understanding the Working of CNN](/assets/images/dspost/dsp6213-Understanding-Working-of-CNN.jpg)

# Understanding the Working of CNN
In this article, we aim to delve deeper into the working of CNNs. This article is intended for readers who have a basic understanding of CNNs and have computation-related questions. If you have any other questions about CNNs, feel free to ask in the comments.

**Questions we are looking into.**
- What is the meaning of convolution in neural network?
- If there is some convolution layer with 64 kernel (filter) and filter size is 3x3 then does the filter get updated during training process?
- I heard filters has only 0 and 1 value. Depending upon what we want to extract we use the pattern of 0 and 1 on the filter, like for edge detection, contras detection etc.
- If a layer with 64 filter has 3x3 filter then how many weights are there?
- There is very famous 1x1 filter. How many weights are there if it layer has 64 neuron? Why it is more effective?
- Normally we think channel means number of layer in input image (RGB color). How come we can have 256 channels in neural network?
- How to calculate output size of convolutional layer?
- When 3x3x3 filter is applied to 224x224x3 image then how it become 224x224?
- Earlier we discussed weight of each layer R, G, B is different? When and how these weights are decided?
- Where do we learn features? At the level of differet layers or different channels (filter)



## What is the meaning of convolution in neural network?
In the context of neural networks, specifically Convolutional Neural Networks (CNNs), *convolution* refers to a mathematical operation that combines two functions (or datasets) to produce a third function, typically used to extract features from input data. In simple terms, it’s a way of applying a filter or kernel to an input (like an image) to create a feature map, which highlights important patterns or features such as edges, textures, or shapes.

Here’s a breakdown of the process:

1. **Filter/Kernels**: A small matrix (filter or kernel) is applied over the input data (e.g., an image). The filter contains a set of weights.
2. **Sliding Window**: The filter slides over the input image (or data) in steps, typically starting from the top-left corner. At each position, the filter performs an element-wise multiplication with the corresponding portion of the input, and the results are summed up to produce a single value.
3. **Feature Map**: This process results in a new matrix called the feature map, which represents the features detected in the input image.

The main goal of convolution in CNNs is to reduce the spatial dimensions of the input (through pooling layers) while preserving important features, allowing the network to focus on relevant patterns and improve efficiency for tasks like image classification, object detection, and more.

In summary, convolution helps the neural network understand and capture local patterns in the input data, making it particularly powerful for tasks involving visual information.

## If there is some convolution layer with 64 kernel (filter) and filter size is 3x3 then does the filter get updated during training process?

Yes, the **filters (kernels) in a convolutional layer are updated during training** through **backpropagation** and **gradient descent**. They learn to detect meaningful patterns (e.g., edges, textures, shapes) by adjusting their weights through backpropagation.

1. **Convolution Layer Setup**  
   - If you have a convolutional layer with **64 filters** (or neurons), and each filter is of size **3×3**, then each filter has a set of weights (parameters).
   - These filters slide over the input feature maps, performing convolution operations and generating activation maps.

2. **Weight Updates During Training**
   - Each **filter (3×3)** has **weights** (along with biases).
   - During **forward propagation**, these filters extract features by performing element-wise multiplication with the input and summing up the results.
   - During **backpropagation**, the loss (error) is computed, and gradients of the loss with respect to the filter weights are calculated using the **chain rule**.
   - Using **gradient descent (or any optimization algorithm like Adam, SGD, RMSProp, etc.)**, the filter weights are updated in order to minimize the loss.

## I heard filters has only 0 and 1 value. Depending upon what we want to extract we use the pattern of 0 and 1 on the filter, like for edge detection, contras detection etc.

That's a common misconception! You're referring to **handcrafted filters** used in traditional image processing, like **Sobel, Prewitt, or Laplacian filters** for edge detection, which have fixed values (e.g., 0s and 1s).  

However, in **deep learning (CNNs)**, filters (kernels) are **learned automatically during training**, and their values are not just 0s and 1s. Instead, they are real-valued numbers (floating-point weights) that get updated through **backpropagation**.  

---

**Key Differences: Traditional Filters vs. CNN Filters**

| Feature            | Traditional Filters (Fixed) | CNN Filters (Learned) |
|-------------------|-------------------------|----------------------|
| Values            | Manually set (e.g., 0s, 1s, -1s) | Real-valued, learned from data |
| Purpose           | Predefined for edge/contrast detection | Learn features specific to the dataset |
| Training Needed?  | No training needed (fixed) | Updated using backpropagation |
| Examples         | Sobel, Laplacian, Gabor filters | Learned filters in convolutional layers |

---

**How CNN Filters Work?**
1. **Initialization:**  
   - Filters start with random values (not just 0s and 1s).
   
2. **Learning Through Training:**  
   - CNNs automatically adjust the filter values to detect relevant patterns (edges, textures, objects, etc.).
   - Filters in the first layers detect simple patterns (edges, corners), while deeper layers detect complex structures (faces, objects).

3. **Backpropagation Updates Filters:**  
   - During training, the loss function calculates the error.
   - Gradients of the loss with respect to each filter are computed.
   - Using an optimizer (e.g., SGD, Adam), the filter values are updated to improve accuracy.

## If a layer with 64 filter has 3x3 filter then how many weights are there?

**Understanding the Parameters in a CNN Layer**  
If a convolutional layer has **64 filters** (or neurons), and each filter is of size **3×3**, the number of trainable weights depends on the **number of input channels** (depth of the input feature map).  

**Case 1: Single-Channel Input (Grayscale)**
If the input to this layer is **grayscale** (i.e., it has only 1 channel), each filter has:  

3 x 3 = 9 (weights per filter)  
 
Since there are **64 filters**, the total number of weights is:  

64 x 9 = 576 
Additionally, each filter has **one bias term**, so the total trainable parameters are:  

64 x (9 + 1) = 640


**Case 2: Multi-Channel Input (e.g., RGB Image)**
If the input has **multiple channels**, such as an **RGB image with 3 channels (R, G, B)**, each filter must process all channels. So, each filter has:  

3 x 3 x 3 = 27 (weights per filter)}

With **64 filters**, the total number of trainable weights is:  

64 x 27 = 1,728
 
Including the bias terms (one per filter):  

64 x (27 + 1) = 1,792
  

**General Formula for Convolutional Layer Parameters**
For a convolutional layer with:  
- **F** filters (neurons)  
- **K × K** filter size  
- **C** input channels  
- **1 bias per filter**  

The number of trainable parameters is:  

F x (K x K x C + 1)
 

## There is very famous 1x1 filter. How many weights are there if it layer has 64 neuron? Why it is more effective?

- **1×1 convolutions learn cross-channel interactions efficiently.**
- They are **used for dimensionality reduction** (reducing channels) and **feature transformation**.
- They **do not capture spatial features**, but when combined with **3×3 or 5×5 convolutions**, they improve efficiency dramatically

**1×1 Convolution (Pointwise Convolution)**
A **1×1 filter** is a convolutional kernel that operates on an entire input channel but **does not consider neighboring spatial information** like larger filters (e.g., 3×3 or 5×5).  

**Number of Weights in a 1×1 Convolution Layer**
If a convolutional layer has **64 filters** (neurons), and each filter is **1×1**, the number of trainable weights depends on the **number of input channels (C)**.

**Formula for Weights in a 1×1 Convolution:**

F x (K x K x C + 1)

where:
- **F** = Number of filters (neurons) = **64**
- **K × K** = **1×1** filter size
- **C** = Number of input channels
- **+1** accounts for the bias term per filter

**Case 1: Single-Channel Input (Grayscale)**
For a **grayscale image (1 channel)**:  

64 x (1 x 1 x 1 + 1) = 64 x 2 = 128  parameters


**Case 2: Multi-Channel Input (RGB, C=3)**
For an **RGB image (3 channels)**:  

64 x (1 x 1 x 3 + 1) = 64 x 4 = 256 parameters

**Case 3: Multi-Channel - Interim Layers**
For an input with **C=256 channels**, a **1×1 convolution with 64 filters** would have:  

64 x (1 x 1 x 256 + 1) = 16,448 parameters


---

**Why is 1×1 Convolution Effective?**
Despite its simplicity, **1×1 convolutions are extremely powerful** and are widely used in deep learning architectures like **GoogleNet (Inception), MobileNet, and ResNet** for multiple reasons:

1. **Dimensionality Reduction (Bottleneck Layers)**
   - A **1×1 convolution reduces the number of channels** (feature maps), thus reducing computational cost.
   - Example: If an input has **256 channels**, applying a **1×1 convolution with 64 filters** reduces it to **64 channels**.
   - This significantly **reduces model size and computation**.

2. **Feature Transformation**
   - Even though it **doesn’t change spatial dimensions**, it **learns new feature representations** by linearly combining different channels.
   - It acts as a **fully connected layer applied independently to each pixel**.

3. **Efficient Depthwise Computation (Depthwise Separable Convolutions)**
   - Used in architectures like **MobileNet** to replace expensive 3×3 convolutions.
   - Instead of using a large **3×3×256** kernel (which has **2,304** weights per filter), a **depthwise 3×3 convolution** + **1×1 convolution** achieves the same effect with **far fewer parameters**.

4. **Non-Linearity Enhancement (ReLU After 1×1)**
   - Typically, after a **1×1 convolution**, a **non-linearity (ReLU)** is applied.
   - This helps the network learn **more complex transformations** while keeping computation low.

---

**Comparison: 1×1 vs 3×3 Convolutions**

| Feature           | 1×1 Convolution | 3×3 Convolution |
|------------------|---------------|---------------|
| Spatial Context  | No spatial info | Captures local patterns |
| Parameters (per filter) | C+1 | 9C+1 |
| Computational Cost | Low | High |
| Feature Mixing | Yes (across channels) | Yes (across spatial locations) |
| Use Case | Bottlenecks, depth reduction | Feature extraction |

## Normally we think channel means number of layer in input image (RGB color). How come we can have 256 channels in neural network?

The concept of **"channels"** in convolutional layers extends beyond just color channels like **RGB**. Let’s understand this.

**1. Understanding Channels in CNNs**
- In the **input layer**, channels refer to the number of color layers (e.g., **RGB = 3 channels**).
- However, **inside convolutional layers**, each filter learns a different feature map, and these become the new "channels" for the next layer.

**2. How Do We Get 256 Channels?**
Each convolutional layer has **multiple filters**, and each filter extracts **different features** from the input. The **number of filters** determines the number of **output channels** in that layer.

**Example: Expanding from RGB (3 channels)**
1. Suppose we apply **64 filters of size 3×3×3** (since RGB has 3 input channels) in the **first convolutional layer**.
   - Each filter extracts a feature from all 3 channels.
   - The output will have **64 feature maps**, meaning **64 channels**.
2. If the **next convolutional layer** applies **256 filters** on those **64-channel feature maps**, the output will have **256 channels**.

**3. What Do Extra Channels Represent?**
Unlike **RGB channels (red, green, blue), which are fixed**, the additional **channels in deeper layers are learned feature maps**. These channels capture:
- **Edges, textures (early layers)**
- **Shapes, patterns (middle layers)**
- **High-level objects (deeper layers)**

Each **filter extracts a different aspect** of the input, which is why more channels develop as the network gets deeper.

**4. Example in a CNN Architecture**
- **First Convolutional Layer (Processing RGB Image)**
    - **Input**: 224×224×3 (RGB image)
    - **Filters**: 64 filters of 3×3×3
    - **Output**: 224×224×64 (**64 feature maps = 64 channels**)
- **Second Convolutional Layer**
    - **Input**: 224×224×64 (previous output)
    - **Filters**: 128 filters of 3×3×64
    - **Output**: 224×224×128 (**128 feature maps = 128 channels**)
- If a later convolutional layer has **256 filters**, its output will have **256 channels**.


**5. Why Do CNNs Use So Many Channels?**
- **Helps learn complex patterns** → More channels mean the network can capture different types of information.
- **Improves accuracy** → More filters = better feature representation.
- **Works well with deeper layers** → As images go deeper in the network, low-level edges combine into high-level structures.

## How to calculate output size of convolutional layer?

**1. Understanding Convolution Layer Output Shape**
A convolutional layer **does not reduce the spatial dimensions** (height & width) unless we apply **stride > 1** or **pooling**. Instead, it adds **depth (channels)** based on the number of filters used.

**Example: First Convolution Layer Processing an RGB Image**
- **Input Shape:**  224 x 224 x 3  (Height × Width × Channels)
- **Filters:** Suppose we apply **64 filters** of size  3 x 3 
- **Stride:** 1 (no downsampling)
- **Padding:** "Same" (output size remains unchanged)


\text{Output Shape} = 224 x 224 x 64


✔ **224 × 224** → The spatial dimensions remain the same (since stride = 1).  
✔ **64 channels** → Because we used 64 filters, each one creates a separate feature map.  

**2. Why Isn't the Output Just 64?**
You're probably thinking about a **fully connected layer**, where we get a single number per neuron.  
However, **a convolutional layer works differently**:
- Each **filter slides** over the input and computes a **feature map**.
- Since we use **64 filters**, we get **64 feature maps**, each of size **224 × 224**.
- The output has **spatial structure**, not just 64 numbers.

💡 **Think of the output as a "stack" of 64 images (feature maps), each of size 224 × 224.**

**3. General Formula for Convolution Output Size**
If an input has size ** H x W x C ** and we apply ** F  filters** of size  K x K  with stride  S  and padding  P , the output shape is:


[[[H - K + 2P]/S] + 1  x [[W - K + 2P]/S] + 1 ] x F


For our example:
-  H = 224, W = 224, C = 3 
-  K = 3, S = 1, P = 1  (same padding ensures output size remains 224 × 224)
-  F = 64  (number of filters)


\text{Output Shape} = 224 x 224 x 64


**4. When Do We Get Just 64 Numbers?**
If we want to reduce the **spatial dimensions**, we use:
1. **Pooling (e.g., MaxPooling 2×2)** → Reduces the size (e.g., from 224×224 to 112×112).
2. **Flattening** → Converts the feature maps into a **1D vector**.
3. **Fully Connected (Dense) Layer** → Outputs a single number per neuron.

For example, in **classification**, the CNN eventually flattens feature maps and passes them through **dense layers**, resulting in **64 or fewer numbers** at the end.

---

**Why Is Output 224 × 224 × 64?**
✅ A **convolutional layer outputs feature maps, not just a single number**.  
✅ Since we apply **64 filters**, we get **64 feature maps**, **not just 64 values**.  
✅ The **spatial size (224 × 224) remains the same** if we use **stride = 1** and **padding = same**.  


## When 3x3x3 filter is applied to 224x224x3 image then how it become 224x224?

✔ A **3×3×3 filter applied to a 224×224×3 image produces a 224×224×1 feature map**.  
✔ When using **64 filters, we get 224×224×64 output**.  
✔ The **spatial dimensions remain 224×224** because of **stride=1 and "same" padding**.  
✔ The **depth increases from 3 (RGB) to 64** because each filter extracts different features.  

**1. Understanding How a Filter Works in CNNs**
In a convolutional layer:
- A filter (also called a kernel) slides over the **spatial dimensions** (height & width) of the input image.
- It computes the **dot product** between the filter’s weights and the corresponding region of the image.
- The depth of the filter **must match the depth (number of channels) of the input**.

**2. How a 3×3×3 Filter Works**
Consider an **RGB image of size 224×224×3** (Height × Width × Channels):

1. The **filter size is 3×3×3**, meaning:
   - It covers a **3×3** region of the image.
   - It extends across **all 3 channels** (Red, Green, Blue).
   - Each filter has **3×3×3 = 27 weights**.

2. The **convolution operation**:
   - The filter slides over the image **one step (stride = 1) at a time**.
   - At each position, it computes the weighted sum (dot product) of **all 27 values** (from 3×3 pixels across 3 channels).
   - This produces **a single number per position**.
   - The filter moves across the **entire** 224×224 spatial area.

3. Since the filter moves **one step at a time (stride = 1) and we use "same" padding**, the output **retains the same spatial size** but with **only one channel**: Output size = 224 x 224 x 1
   
   (i.e., one feature map).

**3. What Happens When We Use 64 Filters?**
- If we apply **64 different 3×3×3 filters**, each filter extracts a different feature from the image.
- Each filter generates **one 224×224 feature map**.
- Since we have **64 filters**, we get **64 feature maps**.

Thus, the final output shape of this convolutional layer is: 224 x 224 x 64


**4. General Formula for Convolution Output Size**
If an input image has:
- **Size:**  H x W x C  (Height × Width × Channels)
- **Filter size:**  K x K x C  (Kernel size × Kernel size × Same depth as input)
- **Stride:**  S 
- **Padding:**  P 

Then the output size is:


$$\left( \frac{H - K + 2P}{S} + 1 \right) x \left( \frac{W - K + 2P}{S} + 1 \right) x F$$


where:
- **F** = number of filters

---

**5. Example Calculation for Our Case**
Given:
- **Input:**  224 x 224 x 3 
- **Filter:**  3 x 3 x 3 
- **Stride:**  S = 1 
- **Padding:** "Same" (so that output size remains unchanged)

Using the formula:


$$\left( \frac{224 - 3 + 2(1)}{1} + 1 \right) x \left( \frac{224 - 3 + 2(1)}{1} + 1 \right) x 64$$

= 224 x 224 x 64


Thus, the output retains the **same height and width** but increases in **depth (number of filters applied)**.

---

**6. Why Does Depth Increase?**
Each filter extracts a different feature from the image:
- **Some filters detect edges**.
- **Some detect textures**.
- **Some detect patterns like curves, shapes, or corners**.

Instead of just **3 channels (RGB), now we have 64 feature maps**, allowing the CNN to learn more **complex patterns**.

## Earlier we discussed weight of each layer R, G, B is different? When and how these weights are decided?

✔ **Each filter has different weights for each channel (R, G, B).**  
✔ **Weights are randomly initialized and learned during training using backpropagation.**  
✔ **The dot product computes the weighted sum of pixel values in all channels.**  
✔ **Different filters learn to detect different features, from edges to complex objects.**

The **weights for each channel (R, G, B) are different**, and they are **learned during training**. Let's understand this.

**1. Understanding Weights in a Convolutional Filter**
Each **filter (kernel)** in a convolutional layer has a set of **learnable weights**.  
For a **3×3×3 filter**, there are:
- **9 weights per channel** (since the filter is 3×3).
- **3 separate weight matrices** (one for each channel: R, G, B).
- **1 bias term** (optional, but usually present).

Total trainable parameters for one filter:

(3 x 3 x 3) + 1 = 27 + 1 = 28


Since **each filter has different weights for R, G, and B channels**, the convolution operation applies **different transformations** to each channel before summing them.


**2. How Is the Weighted Sum (Dot Product) Computed?**
At each position where the filter slides over the image:
1. The **weights of the filter** are multiplied with the corresponding pixel values.
2. The **results for each channel are summed** to get a single value.
3. A **bias term is added** (if used).
4. A **non-linearity (like ReLU)** is applied.

Example:

If a **3×3×3 filter** has weights: W_R, W_G, W_B

and the image patch under the filter has pixel values: I_R, I_G, I_B


Then the output at that position is:


output = I_R \cdot  + I_G \cdot W_G + I_B \cdot W_B + bias


This results in **a single number per filter position**.

**3. When and How Are These Weights Decided?**
**(a) Initializing Weights**
- At the start of training, weights are **randomly initialized** (using techniques like Xavier or He initialization).
- They are **not manually set**—they start as small random values.

**(b) Learning Weights During Training**
Weights are learned using **backpropagation** and **gradient descent**:
1. The **forward pass** computes outputs using the current weights.
2. The **loss function** (e.g., cross-entropy for classification) measures how far the predictions are from the correct labels.
3. **Backpropagation** calculates gradients of the loss **with respect to the weights**.
4. **Gradient descent (or Adam, RMSprop, etc.) updates the weights** to minimize the loss.
5. Steps 1–4 repeat for many iterations (epochs) until the network converges.

**(c) Different Filters Learn Different Features**
- In **early layers**, filters learn **edges, corners, and simple textures**.
- In **deeper layers**, filters learn **complex patterns like shapes, objects, and high-level features**.

**4. Why Are There Different Weights for R, G, B?**
Each filter learns **a different way to combine color information**.  
- Some filters might focus more on **edges in the red channel**.
- Others might emphasize **texture in the green channel**.
- Others may combine **all three channels differently** to detect complex patterns.

This flexibility allows CNNs to **extract meaningful features** regardless of the color composition of the image.


## Where do we learn features? At the level of differet layers or different channels (filter)
Earlier we discussed "In early layers, filters learn edges, corners, and simple textures." The we said "If we apply 64 different 3×3×3 filters, each filter extracts a different feature from the image." Isn't contracting? Each filter extracts different feature and is represented by the channel (neuron) or each layer is learning different features?

**1. Each Filter Extracts a Different Feature (Per Layer)**
When we apply **64 different 3×3×3 filters** in a **single convolutional layer**, each filter learns to detect **a different low-level feature**.  
- One filter might detect **horizontal edges**.  
- Another might detect **vertical edges**.  
- Another might respond to **small texture patterns**.  
- Each of these filters produces a **separate feature map (channel)**.  

✔ **Each filter learns a different feature in that layer.**  

---

**2. Deeper Layers Learn More Complex Features**
CNNs are hierarchical:  
- **Early layers** learn simple features (edges, corners, textures).  
- **Middle layers** learn more abstract features (patterns, shapes).  
- **Deeper layers** learn high-level structures (eyes, faces, objects).  

✔ **Each layer captures different types of features.**  

**3. How Does This Work Together?**
- In **Layer 1**, each filter detects a different **low-level feature** (edges, textures).  
- In **Layer 2**, filters combine these edges/textures into **shapes and patterns**.  
- In **Layer 3+,** filters detect **high-level structures** like objects.  

💡 **Each filter within a layer extracts a different feature, and each deeper layer extracts more abstract features.**  

**4. Analogy: Detecting a Face**
Imagine detecting a face in an image:
- **Layer 1:** Detects edges (nose outline, eye corners).  
- **Layer 2:** Combines edges into **shapes** (eye, mouth, nose).  
- **Layer 3:** Recognizes **full facial structures**.  
- **Final Layers:** Identify specific faces (person A vs. person B).  

**5. Final Answer: No Contradiction!**
✔ **Each filter in a single layer extracts a different feature (edge, texture, shape).**  
✔ **Each deeper layer extracts progressively more complex features.**  
✔ **The number of filters = number of feature maps (channels) in that layer.**  
