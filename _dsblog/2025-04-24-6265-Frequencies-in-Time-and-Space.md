---
mathjax: true
id: 6265
title: "Frequencies in Time and Space: Understanding Nyquist Theorem & its Applications"
date: 2025-04-24
permalink: /dsblog/frequencies-in-time-and-space
tags:
  - Nyquist Theorem
  - Signals
  - Time
  - Space
  - Sampling
  - Frequency
categories:
  - dsblog
  - signal-processing
  - computer-vision

header:
  teaser: /assets/images/dspost/dsp6265-frequencies-in-time-and-space.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn about the Nyquist theorem and its applications in signals, time, and space. Understand how it applies to light signals (image, video), audio processing."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
auto_number_headings: false
keywords: [Nyquist theorem, signals, time and space, sampling frequency, light signals, cameras, imaging]
---

![](/assets/images/dspost/dsp6265-frequencies-in-time-and-space.jpg)


# Applications of Nyquists theorem

## Can **the Nyquist-Shannon sampling theorem applies to light signals**

### 🌈 First: What Kind of "Light" Are We Talking About?

When we say **light**, we could mean a few different things depending on the context:

1. **Visible light waves** (very high frequency, in the hundreds of THz)
2. **Modulated light signals** (like in fiber optics or Li-Fi)
3. **Video/images** (captured with cameras, representing light intensity)
4. **Scientific measurements** (astronomy, laser pulses, etc.)

Each of these uses light differently — and **sampling theory applies to all**, though how we use it depends on the application.

---

### 📸 1. **Cameras & Imaging (Sampling in Space)** (Input)

Cameras sample **light intensity** in **space** rather than time. Each pixel in a digital camera is like a sample of brightness (or color) at a particular point.

- You can think of **pixel spacing** as the *sampling rate* in space.
- The **Nyquist theorem** applies to **spatial frequencies** — patterns of light and dark (details).
- If the scene has details finer than the pixel grid can resolve, you get **aliasing** — moiré patterns, jagged edges, or loss of detail.

🧠 **Rule**: To capture detail of frequency *f*, you need pixels spaced at least **1/(2f)** apart. This is why we need **high-resolution cameras** to capture fine textures.

---

### 🔦 2. **Fiber Optics & Modulated Light (Sampling in Time)** (Input)

In communication systems, we often use light (like in **fiber optics**) to transmit **modulated signals** — electrical data is converted into light pulses.

Those light pulses **carry a signal** that varies over time — just like sound or radio signals.

✅ In this case:
- The **modulated signal** has a bandwidth (say, up to 50 GHz)
- We use **photodetectors** and **analog-to-digital converters (ADCs)** to sample this signal
- Nyquist theorem applies exactly here: to avoid aliasing, we sample at **at least 2× the bandwidth**

For example: If the optical signal carries 10 GHz of information, we need at least a **20 GHz sampling rate** to faithfully recover it.

---

### 🖥️ 3. **Screens and Displays** (Output)

Just like cameras, screens sample light **in space**. If the display resolution is too low for the content (e.g., showing 4K content on a 720p screen), you lose details — and if you resize improperly, you can get spatial aliasing.

---

### 🌌 4. **Scientific Light Signals (Pulses, Lasers, Astronomy)** (Input)

In fields like:
- **Laser spectroscopy**
- **Ultrafast optics**
- **Astronomy**

… scientists use **sampling theory** to record and reconstruct light pulses over time or frequency.

For instance:
- An ultrashort laser pulse may have femtosecond resolution.
- Sampling such a pulse requires extremely fast **time-domain detectors**, and Nyquist still dictates the minimum sampling rate needed to resolve the waveform.

---

### 🔑 Summary: Use Nyquist for Light!

| Light Context         | Sampling Domain | Nyquist Applies? | Notes         |
|-------|------|-------------------------------------------------|------|
| Cameras              | Space            | ✅ Yes           | Sampling spatial detail → avoid moiré & aliasing                     |
| Fiber Optic Signals  | Time             | ✅ Yes           | Sample modulated light at ≥2× signal bandwidth                       |
| Displays             | Space            | ✅ Yes           | Need enough pixels to resolve the source image                       |
| Scientific Lasers    | Time/Frequency   | ✅ Yes           | Ultrafast detection uses sampling theory to reconstruct waveforms    |

## **What is Spatial Aliasing (Resolution Mismatch)?**

When we talk about aliasing in **displays**, we are mainly concerned with **spatial aliasing**. This happens because the number of pixels on the screen determines the **spatial sampling** rate — how finely you can capture detail in an image.

- **Spatial resolution**: Think of it as the number of pixels a display has to represent an image. A **720p display** has fewer pixels than a **4K display**, and a **4K display** has fewer pixels than an **8K display**.
  
- **Mismatched resolution**: If you try to display **8K content** (which has a much higher spatial resolution) on a **4K screen**, the 4K display simply doesn’t have enough pixels to fully represent all the detail in the 8K image. The display has to **downscale** the content to fit. This process may cause **aliasing artifacts** if it's not done properly — such as **mosaic patterns**, **jagged edges**, or **loss of fine details**.

## **What is Temporal Aliasing (Sampling in Time)?**

In contrast, **temporal aliasing** occurs when you're dealing with **time-based signals** like audio or video frames, and it happens when you don't sample frequently enough (i.e., at less than twice the signal frequency). In the case of displays, this can occur in situations like:

- **Frame rate mismatch**: If a video is encoded at 60 frames per second (fps) but displayed at 30 fps, you may experience **motion blur** or **stuttering**. The frames are not sampled frequently enough to capture the smoothness of the motion.
  
- **Time-based aliasing** happens in audio or video **capture** (e.g., filming a fast-moving object) but is usually more noticeable when you are **capturing** or **streaming** content than when you're just viewing it.

## What happens When Show 8K Content on a 4K Screen?

- **Pixel Density**: The 4K screen is forced to **downscale** the 8K content to fit. The number of pixels in a 4K screen isn’t enough to represent all the fine detail in an 8K image.
- **Loss of Detail**: Some finer details are **lost** during the downscaling process, leading to a loss of **sharpness** or **clarity**, even if the image is resized well. 
- **Artifacts**: Poor downscaling (like using a simple nearest-neighbor resizing method) can create **artifacts** like **aliasing** — jagged edges or strange patterns that weren’t in the original image.

## What is the Key Differences in Spatial and Temporal Aliasing?:

| **Aspect** | **Spatial Aliasing (Resolution)**  | **Temporal Aliasing (Sampling)** |
|----------|---------------|---------|
| **What it affects**   | Image **clarity**, **sharpness**, **detail**                  | **Motion**, **smoothness** of frames or signals       |
| **Where it happens**  | On displays, when content resolution exceeds screen resolution | In audio or video capture/streaming, or frame rates   |
| **Cause**             | Mismatch between content resolution and display resolution    | Insufficient sampling frequency (below Nyquist rate)  |
| **Example**           | Showing 8K content on a 4K screen (downscaling issues)        | Playing a high-frequency sound at too low a sample rate |


## What is the frame rate required for fast flying object?

### **Object’s Motion and Required Sampling Rate**

When capturing fast-moving objects, the **motion of the object** directly impacts the **frame rate required to record it properly**. For example:

- **High-speed motion** (like a plane or a race car) has **higher frequency motion** — it moves quickly within a given time frame. 
- If you don’t sample frequently enough (i.e., using a **low frame rate** camera), you miss details about the motion. This leads to something called **motion blur** or **temporal aliasing**, where the object appears smeared or jagged.

For instance:
- A camera with **30 fps** won’t capture all the intricate details of a fast-moving plane. It might capture the plane at intervals that miss the in-between motion, leading to a **blurry image** or **jittery motion** when played back.

To properly capture fast motion, you’d need a **higher frame rate** camera (e.g., **120 fps** or **240 fps**) to ensure that the motion is sampled at a high enough frequency to avoid these artifacts.

###  **Frame Rate Mismatch Between Recording and Display**

Now, when it comes to **displaying** the recorded content:

- If you record at a **high frame rate** (say, 60 fps) but play it back on a screen that supports only **30 fps**, you might experience **stuttering** or **choppiness**. This is because the display can’t update fast enough to show the full fluidity of the recorded video.
  
- On the other hand, if you record at **30 fps** and play it back at **60 fps**, the display will have to **duplicate frames** to match the higher refresh rate, which may make the motion look artificially smooth, but could cause **judder** or unnatural movements, especially with fast objects.

###  **Screen Quality and Frame Rate**

The **quality of the display** also plays a role:
- A **high-quality screen** (with a **higher refresh rate** and better motion handling) will reproduce fast-moving objects more smoothly, even at lower frame rates.
- **Low-quality screens** may struggle to show smooth motion, regardless of the frame rate, due to lower refresh rates, poor motion interpolation, or lower resolution.



## **How Does Nyquist Work for Stationary Objects?**

In the case of a stationary object, the Nyquist theorem applies in a similar way to how it would for moving objects, but instead of capturing motion over time, you're capturing fine details in space:

- **f**: The **highest spatial frequency** in the scene, representing the finest detail or texture in the object.
- To accurately capture these details, the camera's **resolution** (the number of pixels) should be at least **twice** that spatial frequency.

So, for a stationary object, even though there's no movement, you're still sampling the **spatial information** in the object. The **pixel grid** of the camera needs to be **dense enough** to capture the fine details without introducing **aliasing** artifacts.

**Example in the Real World:**  
- If you take a picture of a **textured wall** with a low-resolution camera, you might notice that the details of the texture are not captured well. The texture could appear as blocky or have strange patterns that weren't there in reality.
- If you use a higher-resolution camera (more pixels per unit area), the texture is captured much more accurately, and those artifacts or unwanted patterns are minimized.


## **Nyquist in the Context of Image Resolution**
The Nyquist theorem states that to **accurately capture details** in an image, the **sampling frequency (pixels)** must be at least **twice the spatial frequency** of the finest detail in the scene (in this case, the tree's bark, leaves, etc.).

**Example:**  
- Imagine the **tree bark** has a **fine texture** with small, repeating patterns (spatial frequency). If the **resolution of your camera** (the number of pixels) is too low, you won’t capture the fine details of the bark, and you might see **aliasing artifacts** (e.g., jagged edges or a weird pattern instead of smooth texture).
- The **Nyquist theorem** tells us that to avoid aliasing, we need a **pixel resolution** that is **at least twice** the frequency of the smallest texture or pattern in the tree.

In essence:
- If the tree bark’s texture has a **high spatial frequency**, your camera needs to have a **high resolution** (enough pixels to capture the details).
- If you use a **1K camera** with a low resolution, it might not capture all the fine details, and you could get a blurry or pixelated image. If you use a **4K or 8K camera**, you increase the **sampling rate**, which means you're able to capture finer details of the bark.

## **Why a Higher-Resolution Camera Gives Better Image Quality?**
As you mentioned, using **higher resolution cameras** will result in **better images** of the same tree. This happens because:
- **More pixels** mean you’re capturing more **spatial samples** of the tree’s features.
- The higher the resolution, the **finer** the details that can be captured, and the less likely you are to get **spatial aliasing**.
- For instance, with a **4K camera**, you might capture a **sharper, more detailed image** of the tree compared to a **2K camera**. With **8K resolution**, the image would be even **sharper and more detailed**.

## **When Does the Nyquist Theorem Matter in Image Resolution?**
The **Nyquist theorem** becomes important when the **fine details in the object** you're photographing are at a **high spatial frequency**. If these details are finer than the camera’s ability to capture them (i.e., the camera's resolution is too low), then **aliasing** will occur.

- **Spatial Aliasing**: When the camera resolution is **too low** relative to the details of the tree, you’ll get artifacts where the fine details **can’t be captured properly** (e.g., you might see a **moire pattern** or strange texture where the bark should look smooth).
- **Increasing Resolution**: As you increase the resolution (e.g., from 1K to 2K to 4K to 8K), you **sample more finely** and can better represent the fine details of the tree, which **reduces spatial aliasing** and results in a sharper, more accurate image.

## **What is the Frequency of a Tree Bark?**

The **frequency** of the tree bark’s texture refers to the **spatial frequency**, which is how often certain patterns or textures repeat within a given space. For example, in a tree bark, the roughness, cracks, or any repetitive patterns on the surface represent spatial frequencies.

In simple terms:
- **Spatial frequency** is about how closely packed the details (like lines, cracks, or textures) are within a fixed area. The more closely spaced the details, the **higher the spatial frequency**.
- **Frequency** refers to how many **repetitive features** (e.g., cracks, ridges, or knots) there are in a unit of measurement, such as millimeters or centimeters.

### Example of Tree Bark:
Let’s consider a **rough bark texture** with small ridges and cracks:
- If the bark has ridges that repeat **every 1 millimeter**, then the spatial frequency is **1 ridge per millimeter**.
- If the bark has finer cracks that repeat **every 0.5 millimeters**, then the spatial frequency is **2 ridges per millimeter**.
  
The **spatial frequency** is just the number of **features** or **details** (like the ridges or cracks) in a given distance on the tree's surface.

### **How Does Nyquist Apply?**
To capture the details of the bark texture accurately:
- If the ridges repeat **every 1mm**, the camera needs to **sample** (with pixels) **at least twice** that frequency to avoid aliasing.
- In this case, you’d need a **camera resolution** that can capture features as small as **0.5mm** in order to avoid distortion or aliasing.

So, if the **frequency of the tree bark texture** is high (i.e., small ridges repeating closely together), a **higher resolution** camera is needed to accurately capture the fine details without creating artifacts.

### **Why is This Important?**
If the **camera resolution** is not high enough, then:
- The camera might **miss** these small textures and details, creating an image that looks **blurry** or **blocky**.
- You might notice **distortion** (like **moire patterns**) when the camera can't sample finely enough to represent the real texture of the bark.

### **Real-World Example**
- **High spatial frequency**: Bark with small, closely packed ridges or cracks.
- **Low spatial frequency**: Bark with large, spaced-out features (e.g., a smooth or less-textured surface).

For the **high spatial frequency** bark, you’d need a **high-resolution camera** to capture the details properly, which is where the **Nyquist principle** comes in — to avoid aliasing, your camera resolution must sample fine enough to represent the bark’s texture.

Does this help make the idea of spatial frequency and the Nyquist theorem clearer in the context of tree bark?



## Spatial Frequency vs physical frequency

We are discussing the **spatial frequency** of the bark's texture from a **visual perspective**, which is based on how light interacts with the surface of the bark. This is different from the **actual frequency** of the bark, which would involve the physical properties of the bark itself and how it interacts with sound or other forms of energy.

### **Spatial Frequency of Bark (Visual Perspective)**

When we talk about the **frequency** of the tree bark in the context of **images** or **photography**, we are talking about how fine or coarse the **details** of the bark are when we look at the **image**. This is related to **how light** from the bark interacts with your camera sensor and how **fine textures** are captured visually.

- **Light Reflection**: The texture of the bark reflects light in patterns (such as ridges, cracks, or bumps). The **spatial frequency** in this case refers to the **repetition of features** (like the ridges or cracks) in the bark’s surface. The **smaller the features**, the **higher the spatial frequency**.
- **Nyquist Principle**: To accurately capture the visual texture of the bark, your camera needs to sample those light reflections at least **twice per feature** (according to the Nyquist theorem). The more detailed the texture, the higher the camera resolution (pixel density) needed to capture the details without artifacts.

### **Actual Frequency of the Bark (Physical Properties)**

When we shift to the **actual frequency** of the bark in terms of its **physical properties**, this refers to **how the bark interacts with sound or other forms of energy** (like mechanical vibrations). This is a different concept.

- **Vibrations**: The actual bark might **vibrate** when subjected to sound waves or other forms of mechanical energy (e.g., a drumstick tapping on the bark). The **frequency** of these vibrations would depend on the bark’s **material properties** (how stiff or flexible it is) and the energy being applied.
- **Energy Emission**: If you’re thinking of **emission of energy**, like infrared radiation or heat, the **frequency** would depend on the **temperature** of the bark, not its texture. **Warmer objects** emit **more infrared radiation** at higher frequencies. For instance, a hot bark might emit infrared radiation at **a higher frequency** than a cool bark. This is different from the visual frequency we are concerned with in photography.

### **Key Differences:**

- **Visual Frequency (Spatial Frequency)**: This is about **how light interacts** with the surface of the bark and how fine the details are in the bark’s texture (like ridges and cracks). It's about how we **capture** the texture visually (using a camera).
- **Physical Frequency**: This involves the **material properties** of the bark, such as how it responds to sound waves, heat, or mechanical forces. This frequency is tied to the **energy emitted** or **vibrations** from the bark and is more about its **physical interaction with energy**.

## **Is the Visual Frequency (Light Interaction) Different from the Actual Frequency (Energy Emission)?**
Yes, the visual frequency is quite different from the actual physical frequency of the bark. They are related to **different forms of interaction**:

- **Visual frequency** deals with how **light is reflected** from the texture of the bark, which can be captured by a camera.
- **Actual frequency** deals with the **material properties** of the bark and how it interacts with **sound waves** or **thermal energy**, which is not related to the texture's visual appearance.

### **Example to Clarify the Difference:**

- If you **tap** the bark of a tree with a stick, the bark might **vibrate** at a certain frequency. The **actual frequency** of that vibration depends on how stiff or flexible the bark is.
- On the other hand, when you **take a photo** of that bark, you’re looking at the **visual texture** of the surface. The **spatial frequency** is how the texture (e.g., the ridges or cracks) looks under light, which depends on how the light reflects off those features.

So, the **actual frequency** of the bark (like its vibrations when tapped or its heat emission) doesn’t directly relate to its **visual frequency** (how the texture appears in the image) unless you're considering something like **infrared imaging** to capture heat, or using sound waves to study its vibrations. But when we’re capturing **photos** of the tree bark, we care about **spatial frequency** and the ability of the camera to capture fine details without losing information.

## How many kind of frequency a physical object can represent? 
A physical object can represent **many types of frequencies**, each related to a different form of interaction with energy. Let’s explore these various **kinds of frequencies** that an object can have and how they’re related to different forms of energy:

### 1. **Visual Frequency (Light Interaction)**

This is the most straightforward one when we talk about objects in photography or imaging. It refers to the **spatial frequency** of an object, which relates to how light interacts with the surface features of the object, like textures, shapes, and patterns.

- **Spatial Frequency**: It’s about how fine or coarse the patterns are on the surface of an object (like a tree bark). If the object has a fine pattern, you need a high-resolution sensor to capture the detail.
- This can also apply to **color** or **light waves** that reflect from the object, where colors can be considered different frequencies of visible light.

### 2. **Sound Frequency (Acoustic Frequency)**

When you **tap** an object, such as a tree bark or a piece of metal, the object may vibrate and produce a sound. The frequency of these vibrations determines the **pitch** of the sound, and this is typically measured in **Hertz (Hz)**.

- **Resonance Frequency**: Every object has a certain frequency at which it naturally vibrates when disturbed (like tapping or striking it). This is its **resonant frequency**.
- For example, a **wooden box** might vibrate at a different frequency than a **metal sheet**. The **tone** you hear depends on the frequency of the vibrations in the object.
  
This also applies to **sound waves** emitted by the object, like how the shape of an object influences the sound it produces when struck. **High-pitched sounds** correspond to **higher frequencies** of vibration, while **low-pitched sounds** correspond to **lower frequencies**.

### 3. **Thermal Frequency (Energy Emission – Infrared Radiation)**

Every object emits radiation in the form of **infrared light** based on its **temperature**. The **frequency** of this radiation corresponds to the object's temperature.

- **Thermal Radiation Frequency**: A hotter object emits **higher-frequency radiation** (shorter wavelengths), while a cooler object emits **lower-frequency radiation** (longer wavelengths).
- This is based on **Planck’s Law**, which relates the temperature of an object to the **frequency** (or wavelength) of radiation it emits. 
- For example, a **hot stove** will emit **infrared radiation** at a much **higher frequency** than a **cold piece of metal**.

This is the **basis of infrared cameras** that detect the frequency of heat emission and allow us to see **heat signatures** of objects in a scene.

### 4. **Electromagnetic Frequency (Radio, Microwaves, etc.)**

Objects can also interact with **electromagnetic waves** across a wide spectrum. This includes **radio waves**, **microwaves**, **infrared**, **visible light**, **ultraviolet**, **X-rays**, and **gamma rays**. These are all different frequencies of electromagnetic radiation.

- For example, objects can **reflect** or **absorb** certain **frequencies** of electromagnetic radiation depending on their material properties. A **metal object** might reflect radio waves but absorb microwaves, while an **object’s color** determines which **visible light** frequencies it absorbs or reflects.

### 5. **Mechanical Vibration Frequency (Oscillation)**

Objects can also undergo mechanical oscillations due to external forces (like wind, sound, or physical impact). This frequency is typically associated with **vibrations** in the structure of the object.

- **Vibrational Frequencies**: These are **mechanical frequencies** at which parts of an object oscillate. For example, a **guitar string** vibrates at a certain frequency when plucked, and its vibration frequency determines the **note** it produces.
- **Structural Resonance**: Larger objects, such as **buildings**, **bridges**, or even **earthquakes**, can have **resonant frequencies** at which they vibrate, and these vibrations can lead to catastrophic effects if the frequency matches the natural resonance frequency of the structure.

### 6. **Electrical Frequency (Electronics)**

Some objects can also interact with **electricity** and generate or be affected by **electrical frequencies**. Electrical components can have certain **resonant frequencies** that impact their behavior, especially in circuits.

- **Electrical Signals**: For example, in a **radio**, an antenna is tuned to a particular **frequency** to pick up certain **radio waves**. In a **capacitor** or **inductor**, the frequency of electrical current passing through them can affect how the component functions in a circuit.

### 7. **Magnetic Frequency (Magnetism)**

Magnetic fields can oscillate at certain frequencies, and this concept is often explored in **magnetic resonance imaging (MRI)** or other magnetic studies.

- **Magnetic Resonance**: Certain materials resonate at specific magnetic frequencies when exposed to an external magnetic field. For instance, **MRI machines** use the resonant frequency of **hydrogen nuclei** in the body to create images.
  
### 8. **Gravitational Frequency (Gravitational Waves)**

This is a more theoretical aspect of frequency, but objects with massive amounts of energy or gravitational interaction can emit **gravitational waves**. These waves oscillate at specific frequencies.

- **Gravitational Waves**: These are ripples in spacetime caused by extremely energetic events, such as the collision of black holes. They propagate at **specific frequencies**, which can be detected by **gravitational wave detectors** like LIGO.

### 9. **Biological Frequencies (Oscillations in Biological Systems)**

In living organisms, biological processes can also have **frequencies**. These can range from the electrical frequencies in **brain waves** to the rhythmic oscillations in **heartbeat**.

- **Brain Waves**: Different states of consciousness (like relaxation, deep sleep, or alertness) are associated with specific **frequencies** of electrical activity in the brain (measured in **Hertz**).
- **Heartbeats**: The human heart has a specific **frequency** of beating, typically around **60-100 beats per minute**, which can be influenced by various factors like stress or physical activity.

---

### In Summary: **Types of Frequencies an Object Can Represent**

An object can represent a wide range of frequencies depending on the type of energy or interaction involved:

1. **Visual Frequency** (light interaction, spatial frequency)
2. **Acoustic Frequency** (sound and vibration frequency)
3. **Thermal Frequency** (infrared radiation, energy emission)
4. **Electromagnetic Frequency** (radio waves, microwaves, X-rays)
5. **Mechanical Vibration Frequency** (resonance, oscillation)
6. **Electrical Frequency** (electrical circuits, signals)
7. **Magnetic Frequency** (resonance in magnetic fields)
8. **Gravitational Frequency** (gravitational waves)
9. **Biological Frequencies** (brain waves, heart rate)

Each of these frequencies represents a different way an object or system can interact with the surrounding environment or with energy. They reflect the physical properties and behaviors of the object in various ways, whether it’s through light, sound, heat, or electromagnetic fields.