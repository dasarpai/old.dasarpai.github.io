https://www.mermaidchart.com/app

---
config:
  theme: base
  layout: fixed
---
flowchart TD
    A["Random Noise (Latent Space)"] -- Input --> B["Generator (G)"]
    B -- Fake Images --> C["Discriminator (D)"]
    D["Real Images (Dataset)"] -- Input --> C
    C -- Real (✔) or Fake (✘) --> E{"Discriminator Decision"}
    E -- Real --> F["Discriminator Improves"]
    E -- Fake --> G["Generator Improves"]
    G -- Tries to Fool D --> B
    T["GAN Image Generation Steps"]
    style T fill:#FFCDD2,stroke:white,color:#000000,font-weight:bold,font-size:20px;


-----------------------
---
config:
  layout: fixed
---
flowchart TD
    A["Real Image"] -- Add Gaussian Noise --> B["Noised Image (Multiple Timesteps)"]
    B -- More Noise Added --> C["Pure Noise (Final Step)"]
    C -- Start Reverse Process --> X["Start Reverse Process"]
    X -- Use Trained Model --> D["Trained Neural Network (e.g., U-Net)"]
    D -- "Predict & Remove Noise Step-by-Step" --> E["Denoised Image"]
    E -- Iterative Denoising --> F["Final Reconstructed Image"]
    C -- Sampling: Start from Random Noise --> X
    T["Diffusion Model Steps"]
    style T fill:#FFCDD2,stroke:black,color:#000000,font-weight:bold,font-size:24px

-----------------

---
config:
  look: handDrawn
---
graph TD
  T["NeRF Image Generation Steps"]
  style T fill:#FFCDD2,stroke:white,color:#000000,font-weight:bold,font-size:24px;
  A["Input: 2D Images & Camera Parameters"] -->|Scene Representation| B["3D Scene as a Neural Network"]
  B -->|"Query 3D Point (x, y, z) & Viewing Direction (θ, φ)"| C["Neural Network Prediction"]
  C -->|"Predict Color (R, G, B) & Density (σ)"| D["Radiance Field Estimation"]
  D -->|Ray Tracing & Volume Rendering| E["Compute Pixel Colors"]
  E -->|Generate Final 2D Image| F["Synthesized Image from Novel Viewpoint"]


---------------
---
config:
  look: handDrawn
---
graph TD
  T["VAE Image Generation Steps"]
  style T fill:#FFCDD2,stroke:black,color:#000000,font-weight:bold,font-size:24px;

  A["Input Image (X)"] -->|"Pass through Encoder"| B["Encoder Network"]
  B -->|"Outputs Mean (μ) & Variance (σ²)"| C["Latent Space Distribution"]
  C -->|"Reparameterization Trick: Z = μ + σ * ε"| D["Latent Variable (Z)"]
  D -->|"Pass through Decoder"| E["Decoder Network"]
  E -->|"Reconstruct Image (X')"| F["Generated/Reconstructed Image"]
  
  F -->|"Compare with Input X"| G["Loss Computation"]
  G -->|"Reconstruction Loss + KL Divergence Loss"| H["Optimize Model (Backpropagation)"]


