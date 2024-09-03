---
mathjax: true
id: 6076
title: AWS SageMaker Jumpstart Models
date: 2023-07-18
permalink: '/dsblog/AWS-SageMaker-Jumpstart-Models'
tags: [Python, Programming] 
categories:
  - dsblog

header:
    teaser: /assets/images/dspost/dsp6076-AWS-SageMaker-Jumpstart-Models.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
---

![AWS SageMaker Jumpstart Models](/assets/images/dspost/dsp6076-AWS-SageMaker-Jumpstart-Models.jpg)   

# AWS SageMaker Jumpstart Models
As of 17-Jul-23, AWS Sagemaker has 463 models in its Model Zoo. They call these models as Jumstart Models. What are the capabilities of these models, who are the developer of these models, where these models are hosted in given in the table below.

|SNo. |Task Type |Company |Model Description   | Model ID
|--- |--- |--- |---   | ---
|1. |Text Generation |Huggingface |Falcon-40B-Instruct is a 40B parameters causal decoder-only model built by TII based on Falcon-40B and finetuned on a mixture of Baize  It is ready-to-use chat/instruct model based on Falcon 40B   |Model ID: huggingface-textgeneration-falcon-40b-instruct-bf16
|2. |Text Generation |Huggingface |This is a Text Generation model built upon a Transformer model from Hugging Face     |Model ID: huggingface-textgeneration-open-llama
|3. |Text to Image |StabilityAI |Extend beyond just text-to-image prompting. Stable Diffusion XL offers several ways to modify the images: Inpainting - edit inside the image, Outpainting - extend the image outside of the original image, Image-to-image - prompt a new image using a sourced image.     |
|4. |Text Generation |Cohere |Generative model that responds well with instruction-like prompts. This model provides businesses and enterprises with best quality, performance and accuracy in all generative tasks. And with our intuitive SDK, unlocking the full potential of LLMs for your applications has never been easier.     |
|5. |Text Generation |AI21 Labs |Jurassic-2 Ultra is optimized to follow natural language instructions and context, so there is no need to provide it with any examples.     |
|6. |Text Generation |AI21 Labs | |
|7. |Text Generation |AI21 Labs |Condense lengthy texts into short, easy-to-read bites that remain factually consistent with the source. No prompting needed – simply input the text that needs to be summarized. The model is specifically trained to generate summaries that capture the essence and key ideas of the original text.     |
|8. |Text Generation |AI21 Labs |Get the AI21 Paraphrase model, the top-of-the-line paraphrasing engine, and deploy it in your private environment. The model aims to generate 10 alternative suggestions with every activation. It may return fewer suggestions when rewriting very short texts for which it cannot produce as many as 10 sensible paraphrases.     |
|9. |Text Generation |AI21 Labs |Jurassic-2 Mid is optimized to follow natural language instructions and context, so there is no need to provide it with any examples. Pre-trained language model trained by AI21 Labs on a corpus of web text including natural language and computer programs with recent data - updated to mid 2022. This model has a 8192 token context window (i.e. the length of the prompt + completion should be at most 8192 tokens).     |
|10. |Text Generation |AI21 Labs |Detects and suggests corrections for Grammar, Spelling, Punctuation mistakes, as well as word misuse, and accidental repetition or omission.     |
|11. |Text to Image |StabilityAI |Extend beyond just text-to-image prompting. Stable Diffusion XL offers several ways to modify the images: Inpainting - edit inside the image, Outpainting - extend the image outside of the original image, Image-to-image - prompt a new image using a sourced image.     |
|12. |Text to Image |Stabilityai |This is a text-to-image model from Stability AI and downloaded from HuggingFace  It takes a textual description as input and returns a generated image from the description   |Model ID: model-txt2img-stabilityai-stable-diffusion-v2-1-base
|13. | |Huggingface |This is a Text2Text Generation model built upon a T5 model from Hugging Face  The deployed model can be used for running inference on any input text   |Model ID: huggingface-text2text-flan-t5-xl
|14. | |Huggingface |This is a Text Generation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts next words in the sequence   |Model ID: huggingface-textgeneration1-gpt-j-6b
|15. | |Huggingface |This is a Text2Text Generation model built upon a T5 model from Hugging Face  The deployed model can be used for running inference on any input text   |Model ID: huggingface-text2text-flan-ul2-bf16
|16. |Text Generation |Pytorch |AlexaTM 20B is a multitask, multilingual, large-scale sequence-to-sequence (seq2seq) model, trained on a mixture of Common Crawl (mC4) and Wikipedia data across 12 languages, using denoising and Causal Language Modeling (CLM) tasks  |Model ID: pytorch-textgeneration1-alexa20b
|17. |Text Generation |Huggingface |This is a Text Generation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts next words in the sequence   |Model ID: huggingface-textgeneration-bloom-1b7
|18. |Image Classification |Tensorflow |This is an Image Classification model from TensorFlow Hub  It takes an image as input and classifies the image to one of the 1001 classes   |Model ID: tensorflow-ic-imagenet-mobilenet-v2-100-224-classification-4
|19. |Object Detection |Tensorflow |This is an object detection model from Tensorflow  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: tensorflow-od1-ssd-resnet50-v1-fpn-640x640-coco17-tpu-8
|20. |Object Detection |Pytorch |This is an object detection model from PyTorch Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: pytorch-od1-fasterrcnn-resnet50-fpn
|21. |Text Classification |Tensorflow |This is a Text Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a text string as input and classifies the input text as either a positive or negative movie review   |Model ID: tensorflow-tc-bert-en-uncased-L-12-H-768-A-12-2
|22. |Question Answering |Huggingface |This is an Extractive Question Answering model built on a Transformer model from Hugging Face  It takes two strings as inputs: the first string is a question and the second string is the context or any text you want to use to find the answer of the question, and it returns a sub-string from the context as an answer to the question   |Model ID: huggingface-eqa-distilbert-base-uncased
|23. |Zero-Shot Text Classification |Huggingface |This is Zero Shot Text Classification model built on a Transformer model from Hugging Face  It can classify sentences in English language It takes a sequence and a list of candidate labels as inputs and predicts score that the sequence is associated with the particular label  |Model ID: huggingface-zstc-facebook-bart-large-mnli
|24. |Semantic Segmentation |Mxnet |This is an Semantic Segmentation model from Gluon CV  It takes an image as input and returns class label for each pixel in the image   |Model ID: mxnet-semseg-fcn-resnet101-coco
|25. |Sentence Pair Classification |Huggingface |This is a Sentence Pair Classification model built upon a Text Embedding model from Hugging Face  It takes a pair of sentences as input and classifies the input pair to 'entailment' or 'no-entailment'   |Model ID: huggingface-spc-distilbert-base-uncased
|26. |Named Entity Recognition |Huggingface |This is a Named Entity Generation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts named entities in the input text   |Model ID: huggingface-ner-distilbert-base-cased-finetuned-conll03-english
|27. |Text Summarization |Huggingface |This is a Text Summarization model built upon a Transformer model from Hugging Face  It takes a text string as input and returns a summary of the text   |Model ID: huggingface-summarization-distilbart-xsum-1-1
|28. |Machine Translation |Huggingface |This is a Machine Translation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts its translation   |Model ID: huggingface-translation-t5-small
|29. |Text Embedding |Tensorflow |This is a Text Embedding model from TensorFlow Hub  It takes a text string as input and outputs an embedding vector The Text Embedding model is pre-trained on Wikipedia and BookCorpus datasets  |Model ID: tensorflow-tcembedding-bert-en-uncased-L-2-H-128-A-2-2
|30. |Text Embedding |Mxnet |This is a Text Embedding model from GluonNLP pre-trained on the decade (2010-2019) of S&P 500 10-K/10-Q reports  It takes a text string as input and outputs an embedding vector For pre-training, the entire text of the 10K/Q filing was used, not just the MD&A (Management Discussion and Analysis) section, so as to ensure that a broader context of financial language is captured Embeddings from the pre-trained modelare then used for fine-tuning specific classifiers |Model ID: mxnet-tcembedding-robertafin-base-uncased
|31. |Sentence Pair Classification |Tensorflow |This is a Sentence Pair Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a pair of sentences as input and classifies the input pair to 'entailment' or 'no-entailment'   |Model ID: tensorflow-spc-bert-en-uncased-L-12-H-768-A-12-2
|32. |Instance Segmentation |Mxnet |This is an Instance Segmentation model from Gluon CV  It detects and delineates each distinct object in the image   |Model ID: mxnet-is-mask-rcnn-fpn-resnet101-v1d-coco
|33. |Image Embedding |Tensorflow |This is an Image Feature Vector model from TensorFlow Hub  It takes an image as input and returns a feature vector (embedding) of the image   |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-100-224-featurevector-4
|34. |Image Classification |Pytorch |This is an Image Classification model from PyTorch Hub  It takes an image as input and classifies the image to one of the 1000 classes   |Model ID: pytorch-ic-mobilenet-v2
|35. |Object Detection |Mxnet |This is an object detection model from Gluon CV  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: mxnet-od-ssd-512-mobilenet1-0-coco
|36. |Object Detection |Tensorflow |This is an object detection model from TensorFlow Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: tensorflow-od-ssd-mobilenet-v2-fpnlite-320x320-1
|37. |Object Detection |Pytorch |This is an object detection model from PyTorch Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: pytorch-od-nvidia-ssd
|38. |Image Classification |Tensorflow |This is an Image Classification model from TensorFlow Hub  It takes an image as input and classifies the image to one of the 1001 classes   |Model ID: tensorflow-ic-imagenet-mobilenet-v2-075-224-classification-4
|39. |Image Classification |Tensorflow |Same as above |Model ID: tensorflow-ic-imagenet-mobilenet-v2-050-224-classification-4
|40. |Image Classification |Tensorflow |Same as above |Model ID: tensorflow-ic-imagenet-mobilenet-v2-035-224-classification-4
|41. |Image Classification |Tensorflow |Same as above |Model ID: tensorflow-ic-imagenet-mobilenet-v2-140-224-classification-4
|42. |Image Classification |Tensorflow |Same as above |Model ID: tensorflow-ic-imagenet-mobilenet-v2-130-224-classification-4
|43. |Object Detection |Pytorch |This is an object detection model from PyTorch Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: pytorch-od1-fasterrcnn-mobilenet-v3-large-320-fpn
|44. |Object Detection |Pytorch |Same |Model ID: pytorch-od1-fasterrcnn-mobilenet-v3-large-fpn
|45. |Semantic Segmentation |Mxnet |This is an Semantic Segmentation model from Gluon CV  It takes an image as input and returns class label for each pixel in the image   |Model ID: mxnet-semseg-fcn-resnet101-voc
|46. |Semantic Segmentation |Mxnet |Same as above |Model ID: mxnet-semseg-fcn-resnet101-ade
|47. |Instance Segmentation |Mxnet |Same as above |Model ID: mxnet-semseg-fcn-resnet50-ade
|48. |Image Classification |Pytorch |This is an Image Classification model from PyTorch Hub  It takes an image as input and classifies the image to one of the 1000 classes   |Model ID: pytorch-ic-resnet18
|49. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnet34
|50. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnet50
|51. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnet101
|52. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnet152
|53. |Object Detection |Mxnet |This is an object detection model from Gluon CV  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: mxnet-od-ssd-512-mobilenet1-0-voc
|54. |Object Detection |Mxnet |Same |Model ID: mxnet-od-ssd-512-resnet50-v1-coco
|55. |Object Detection |Mxnet |Same |Model ID: mxnet-od-ssd-512-resnet50-v1-voc
|56. |Object Detection |Mxnet |Same |Model ID: mxnet-od-ssd-300-vgg16-atrous-coco
|57. |Object Detection |Mxnet |Same |Model ID: mxnet-od-ssd-300-vgg16-atrous-voc
|58. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-efficientdet-d0-512x512-coco17-tpu-8
|59. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-efficientdet-d1-640x640-coco17-tpu-8
|60. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-efficientdet-d2-768x768-coco17-tpu-8
|61. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-efficientdet-d3-896x896-coco17-tpu-32
|62. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-mobilenet-v1-fpn-640x640-coco17-tpu-8
|63. |Instance Segmentation |Mxnet |This is an Instance Segmentation model from Gluon CV  It detects and delineates each distinct object in the image   |Model ID: mxnet-is-mask-rcnn-fpn-resnet50-v1b-coco
|64. |Instance Segmentation |Mxnet |Same |Model ID: mxnet-is-mask-rcnn-fpn-resnet18-v1b-coco
|65. | |Mxnet |Same |Model ID: mxnet-is-mask-rcnn-resnet18-v1b-coco
|66. |Image Embedding |Tensorflow |This is an Image Feature Vector model from TensorFlow Hub  It takes an image as input and returns a feature vector (embedding) of the image   |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-075-224-featurevector-4
|67. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-050-224-featurevector-4
|68. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-035-224-featurevector-4
|69. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-140-224-featurevector-4
|70. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v2-130-224-featurevector-4
|71. |Object Detection |Tensorflow |This is an object detection model from TensorFlow Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: tensorflow-od-ssd-mobilenet-v2-fpnlite-640x640-1
|72. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-ssd-mobilenet-v2-2
|73. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-ssd-mobilenet-v1-fpn-640x640-1
|74. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet50-v1-640x640-1
|75. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet50-v1-800x1333-1
|76. |Zero-Shot Text Classification |Huggingface |This is Zero Shot Text Classification model built on a Transformer model from Hugging Face  It can classify sentences in English language It takes a sequence and a list of candidate labels as inputs and predicts score that the sequence is associated with the particular label  |Model ID: huggingface-zstc-narsil-deberta-large-mnli-zero-cls
|77. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-moritzlaurer-deberta-v3-large-mnli-fever-anli-ling-wanli
|78. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-cross-encoder-nli-distilroberta-base
|79. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-recognai-bert-base-spanish-wwm-cased-xnli
|80. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-moritzlaurer-mdeberta-v3-base-xnli-multilingual-nli-2mil7
|81. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-cross-encoder-nli-roberta-base
|82. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-cross-encoder-nli-deberta-base
|83. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-cross-encoder-nli-minilm2-l6-h768
|84. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-recognai-zeroshot-selectra-medium
|85. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-navteca-bart-large-mnli
|86. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-jiva-xlm-roberta-large-it-mnli
|87. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-digitalepidemiologylab-covid-twitter-bert-v2-mnli
|88. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-recognai-zeroshot-selectra-small
|89. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-distilbert-base-turkish-cased-snli-tr
|90. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-turkish-cased-allnli-tr
|91. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-turkish-cased-snli-tr
|92. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-multilingual-cased-allnli-tr
|93. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-narsil-bart-large-mnli-opti
|94. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-convbert-base-turkish-mc4-cased-allnli-tr
|95. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-lighteternal-nli-xlm-r-greek
|96. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-distilbert-base-turkish-cased-allnli-tr
|97. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-multilingual-cased-multinli-tr
|98. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-eleldar-theme-classification
|99. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-turkish-cased-multinli-tr
|100. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-bert-base-multilingual-cased-snli-tr
|101. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-convbert-base-turkish-mc4-cased-multinli-tr
|102. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-distilbert-base-turkish-cased-multinli-tr
|103. |Zero-Shot Text Classification |Huggingface |Same |Model ID: huggingface-zstc-emrecan-convbert-base-turkish-mc4-cased-snli-tr
|104. |Image Classification |Tensorflow |This is an Image Classification model from TensorFlow Hub  It takes an image as input and classifies the image to one of the 1001 classes   |Model ID: tensorflow-ic-tf2-preview-mobilenet-v2-classification-4
|105. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-inception-v3-classification-4
|106. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-inception-v2-classification-4
|107. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-inception-v1-classification-4
|108. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-tf2-preview-inception-v3-classification-4
|109. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-inception-resnet-v2-classification-4
|110. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v2-50-classification-4
|111. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v2-101-classification-4
|112. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v2-152-classification-4
|113. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v1-50-classification-4
|114. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v1-101-classification-4
|115. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-resnet-v1-152-classification-4
|116. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-resnet-50-classification-1
|117. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b0-classification-1
|118. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b1-classification-1
|119. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b2-classification-1
|120. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b3-classification-1
|121. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b4-classification-1
|122. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b5-classification-1
|123. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b6-classification-1
|124. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-b7-classification-1
|125. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-lite0-classification-2
|126. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-lite1-classification-2
|127. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-lite2-classification-2
|128. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-lite3-classification-2
|129. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-efficientnet-lite4-classification-2
|130. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-100-224-classification-4
|131. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-100-192-classification-4
|132. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-100-160-classification-4
|133. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-100-128-classification-4
|134. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-075-224-classification-4
|135. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-075-192-classification-4
|136. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-075-160-classification-4
|137. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-075-128-classification-4
|138. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-050-224-classification-4
|139. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-050-192-classification-4
|140. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-050-160-classification-4
|141. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-050-128-classification-4
|142. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-025-224-classification-4
|143. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-025-192-classification-4
|144. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-025-160-classification-4
|145. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-imagenet-mobilenet-v1-025-128-classification-4
|146. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-s-r50x1-ilsvrc2012-classification-1
|147. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-s-r50x3-ilsvrc2012-classification-1
|148. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-s-r101x1-ilsvrc2012-classification-1
|149. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-s-r101x3-ilsvrc2012-classification-1
|150. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r50x1-ilsvrc2012-classification-1
|151. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r50x3-ilsvrc2012-classification-1
|152. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r101x1-ilsvrc2012-classification-1
|153. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r101x3-ilsvrc2012-classification-1
|154. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r50x1-imagenet21k-classification-1
|155. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r50x3-imagenet21k-classification-1
|156. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r101x1-imagenet21k-classification-1
|157. |Image Classification |Tensorflow |Same |Model ID: tensorflow-ic-bit-m-r101x3-imagenet21k-classification-1
|158. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-alexnet
|159. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-densenet121
|160. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-densenet169
|161. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-densenet201
|162. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-densenet161
|163. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnext50-32x4d
|164. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-resnext101-32x8d
|165. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-shufflenet-v2-x1-0
|166. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-squeezenet1-0
|167. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-squeezenet1-1
|168. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg11
|169. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg11-bn
|170. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg13
|171. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg13-bn
|172. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg16
|173. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg16-bn
|174. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg19
|175. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-vgg19-bn
|176. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-wide-resnet50-2
|177. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-wide-resnet101-2
|178. |Image Classification |Pytorch |Same |Model ID: pytorch-ic-googlenet
|179. |Object Detection |Mxnet |This is an object detection model from Gluon CV  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: mxnet-od-ssd-512-vgg16-atrous-coco
|180. |Object Detection |Mxnet |Same |Model ID: mxnet-od-ssd-512-vgg16-atrous-voc
|181. |Object Detection |Mxnet |Same |Model ID: mxnet-od-yolo3-darknet53-voc
|182. |Object Detection |Mxnet |Same |Model ID: mxnet-od-yolo3-mobilenet1-0-voc
|183. |Object Detection |Mxnet |Same |Model ID: mxnet-od-yolo3-darknet53-coco
|184. |Object Detection |Mxnet |Same |Model ID: mxnet-od-yolo3-mobilenet1-0-coco
|185. |Object Detection |Mxnet |Same |Model ID: mxnet-od-faster-rcnn-resnet50-v1b-voc
|186. |Object Detection |Mxnet |Same |Model ID: mxnet-od-faster-rcnn-resnet50-v1b-coco
|187. |Object Detection |Mxnet |Same |Model ID: mxnet-od-faster-rcnn-resnet101-v1d-coco
|188. |Object Detection |Mxnet |Same |Model ID: mxnet-od-faster-rcnn-fpn-resnet50-v1b-coco
|189. |Object Detection |Mxnet |Same |Model ID: mxnet-od-faster-rcnn-fpn-resnet101-v1d-coco
|190. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-mobilenet-v2-fpnlite-320x320-coco17-tpu-8
|191. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-mobilenet-v2-fpnlite-640x640-coco17-tpu-8
|192. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-resnet50-v1-fpn-1024x1024-coco17-tpu-8
|193. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-resnet101-v1-fpn-640x640-coco17-tpu-8
|194. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-resnet101-v1-fpn-1024x1024-coco17-tpu-8
|195. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-resnet152-v1-fpn-640x640-coco17-tpu-8
|196. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od1-ssd-resnet152-v1-fpn-1024x1024-coco17-tpu-8
|197. |Image Embedding |Tensorflow |This is an Image Feature Vector model from TensorFlow Hub  It takes an image as input and returns a feature vector (embedding) of the image   |Model ID: tensorflow-icembedding-imagenet-inception-v3-featurevector-4
|198. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-inception-v2-featurevector-4
|199. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-inception-v1-featurevector-4
|200. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-tf2-preview-inception-v3-featurevector-4
|201. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-tf2-preview-mobilenet-v2-featurevector-4
|202. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v2-50-featurevector-4
|203. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v2-101-featurevector-4
|204. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v2-152-featurevector-4
|205. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v1-50-featurevector-4
|206. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v1-101-featurevector-4
|207. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-resnet-v1-152-featurevector-4
|208. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-resnet-50-featurevector-1
|209. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-b0-featurevector-1
|210. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-b1-featurevector-1
|211. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-b2-featurevector-1
|212. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-b3-featurevector-1
|213. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-b6-featurevector-1
|214. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-lite0-featurevector-2
|215. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-lite1-featurevector-2
|216. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-lite2-featurevector-2
|217. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-lite3-featurevector-2
|218. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-efficientnet-lite4-featurevector-2
|219. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-100-224-featurevector-4
|220. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-100-192-featurevector-4
|221. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-100-160-featurevector-4
|222. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-100-128-featurevector-4
|223. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-075-224-featurevector-4
|224. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-075-192-featurevector-4
|225. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-075-160-featurevector-4
|226. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-075-128-featurevector-4
|227. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-050-224-featurevector-4
|228. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-050-192-featurevector-4
|229. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-050-160-featurevector-4
|230. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-050-128-featurevector-4
|231. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-025-224-featurevector-4
|232. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-025-192-featurevector-4
|233. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-025-160-featurevector-4
|234. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-imagenet-mobilenet-v1-025-128-featurevector-4
|235. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-s-r50x1-ilsvrc2012-featurevector-1
|236. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-s-r50x3-ilsvrc2012-featurevector-1
|237. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-s-r101x1-ilsvrc2012-featurevector-1
|238. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-s-r101x3-ilsvrc2012-featurevector-1
|239. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-m-r50x1-ilsvrc2012-featurevector-1
|240. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-m-r50x3-imagenet21k-featurevector-1
|241. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-m-r101x1-ilsvrc2012-featurevector-1
|242. |Image Embedding |Tensorflow |Same |Model ID: tensorflow-icembedding-bit-m-r101x3-imagenet21k-featurevector-1
|243. |Object Detection |Tensorflow |This is an object detection model from TensorFlow Hub  It takes an image as input and returns bounding boxes for the objects in the image   |Model ID: tensorflow-od-faster-rcnn-resnet50-v1-1024x1024-1
|244. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet101-v1-640x640-1
|245. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet101-v1-800x1333-1
|246. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet101-v1-1024x1024-1
|247. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet152-v1-640x640-1
|248. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet152-v1-800x1333-1
|249. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-resnet152-v1-1024x1024-1
|250. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-inception-resnet-v2-640x640-1
|251. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-faster-rcnn-inception-resnet-v2-1024x1024-1
|252. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d0-1
|253. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d1-1
|254. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d2-1
|255. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d3-1
|256. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d4-1
|257. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-efficientdet-d5-1
|258. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet50-v1-fpn-640x640-1
|259. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet50-v1-fpn-1024x1024-1
|260. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet101-v1-fpn-640x640-1
|261. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet101-v1-fpn-1024x1024-1
|262. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet152-v1-fpn-640x640-1
|263. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-retinanet-resnet152-v1-fpn-1024x1024-1
|264. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-hourglass-512x512-1
|265. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-hourglass-512x512-kpts-1
|266. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-hourglass-1024x1024-1
|267. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-hourglass-1024x1024-kpts-1
|268. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-resnet50v1-fpn-512x512-1
|269. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-resnet50v1-fpn-512x512-kpts-1
|270. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-resnet50v2-512x512-1
|271. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-resnet50v2-512x512-kpts-1
|272. |Object Detection |Tensorflow |Same |Model ID: tensorflow-od-centernet-resnet101v1-fpn-512x512-1
|273. |Text Classification |Tensorflow |This is a Text Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a text string as input and classifies the input text as either a positive or negative movie review   |Model ID: tensorflow-tc-bert-en-cased-L-12-H-768-A-12-2
|274. |Text Classification |Tensorflow |Same |Model ID: tensorflow-tc-bert-multi-cased-L-12-H-768-A-12-2
|275. |Text Classification |Tensorflow |Same |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-2-H-128-A-2
|276. |Text Classification |Tensorflow |Same |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-2-H-256-A-4
|277. |Text Classification |Tensorflow |Same |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-2-H-512-A-8
|278. |Question Answering |Huggingface |This is an Extractive Question Answering model built on a Transformer model from Hugging Face  It takes two strings as inputs: the first string is a question and the second string is the context or any text you want to use to find the answer of the question, and it returns a sub-string from the context as an answer to the question   |Model ID: huggingface-eqa-distilbert-base-cased
|279. |Question Answering |Huggingface |Same |Model ID: huggingface-eqa-distilbert-base-multilingual-cased
|280. |Question Answering |Huggingface |Same |Model ID: huggingface-eqa-bert-base-uncased
|281. |Question Answering |Huggingface |Same |Model ID: huggingface-eqa-bert-base-cased
|282. |Question Answering |Huggingface |Same |Model ID: huggingface-eqa-bert-base-multilingual-uncased
|283. |Sentence Pair Classification |Tensorflow |This is a Sentence Pair Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a pair of sentences as input and classifies the input pair to 'entailment' or 'no-entailment'   |Model ID: tensorflow-spc-bert-en-cased-L-12-H-768-A-12-2
|284. |Sentence Pair Classification |Tensorflow |Same |Model ID: tensorflow-spc-bert-multi-cased-L-12-H-768-A-12-2
|285. |Sentence Pair Classification |Tensorflow |Same |Model ID: tensorflow-spc-bert-en-uncased-L-24-H-1024-A-16-2
|286. |Sentence Pair Classification |Tensorflow |Same |Model ID: tensorflow-spc-electra-small-1
|287. |Sentence Pair Classification |Tensorflow |Same |Model ID: tensorflow-spc-electra-base-1
|288. |Sentence Pair Classification |Huggingface |Same |Model ID: huggingface-spc-distilbert-base-cased
|289. |Sentence Pair Classification |Huggingface |Same |Model ID: huggingface-spc-distilbert-base-multilingual-cased
|290. |Sentence Pair Classification |Huggingface |Same |Model ID: huggingface-spc-bert-base-uncased
|291. |Sentence Pair Classification |Huggingface |Same |Model ID: huggingface-spc-bert-base-cased
|292. |Sentence Pair Classification |Huggingface |Same |Model ID: huggingface-spc-bert-base-multilingual-uncased
|293. |Named Entity Recognition |Huggingface |This is a Named Entity Generation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts named entities in the input text   |Model ID: huggingface-ner-distilbert-base-uncased-finetuned-conll03-english
|294. |Text Generation |Huggingface |Same |Model ID: huggingface-textgeneration-bloom-1b1
|295. |Text Generation |Huggingface |Same |Model ID: huggingface-textgeneration-bloom-560m
|296. |Text Generation |Huggingface |Same |Model ID: huggingface-textgeneration-gpt2
|297. |Text Generation |Huggingface |Same |Model ID: huggingface-textgeneration-distilgpt2
|298. |Text Summarization |Huggingface |This is a Text Summarization model built upon a Transformer model from Hugging Face  It takes a text string as input and returns a summary of the text   |Model ID: huggingface-summarization-bert-small2bert-small-finetuned-cnn-daily-mail-summarization
|299. |Text Summarization |Huggingface |Same |Model ID: huggingface-summarization-distilbart-cnn-6-6
|300. |Text Summarization |Huggingface |Same |Model ID: huggingface-summarization-distilbart-xsum-12-3
|301. |Text Summarization |Huggingface |Same |Model ID: huggingface-summarization-distilbart-cnn-12-6
|302. |Text Summarization |Huggingface |Same |Model ID: huggingface-summarization-bart-large-cnn-samsum
|303. |Machine Translation |Huggingface |This is a Machine Translation model built upon a Transformer model from Hugging Face  It takes a text string as input and predicts its translation   |Model ID: huggingface-translation-t5-base
|304. |Machine Translation |Huggingface |Same |Model ID: huggingface-translation-t5-large
|305. |Machine Translation |Huggingface |Same |Model ID: huggingface-translation-opus-mt-en-es
|306. |Machine Translation |Huggingface |Same |Model ID: huggingface-translation-opus-mt-en-vi
|307. |Text Embedding |Tensorflow |This is a Text Embedding model from TensorFlow Hub  It takes a text string as input and outputs an embedding vector The Text Embedding model is pre-trained on Wikipedia and BookCorpus datasets  |Model ID: tensorflow-tcembedding-bert-en-uncased-L-2-H-256-A-4
|308. |Text Embedding |Tensorflow |same |Model ID: tensorflow-tcembedding-bert-en-uncased-L-2-H-512-A-8-2
|309. |Text Embedding |Tensorflow |same |Model ID: tensorflow-tcembedding-bert-en-uncased-L-2-H-768-A-12-2
|310. |Text to Image |Stabilityai |This is a text-to-image model from Stability AI and downloaded from HuggingFace  It takes a textual description as input and returns a generated image from the description   |Model ID: model-txt2img-stabilityai-stable-diffusion-v2
|311. |Text Embedding |Tensorflow |This is a Text Embedding model from TensorFlow Hub  It takes a text string as input and outputs an embedding vector The Text Embedding model is pre-trained on Wikipedia and BookCorpus datasets  |Model ID: tensorflow-tcembedding-bert-en-uncased-L-4-H-128-A-2-2
|312. |Text Embedding |Tensorflow |Same |Model ID: tensorflow-tcembedding-bert-en-uncased-L-4-H-256-A-4-2
|313. |Text Embedding |Mxnet |Same |Model ID: mxnet-tcembedding-robertafin-base-wiki-uncased
|314. |Text Embedding |Mxnet |Same |Model ID: mxnet-tcembedding-robertafin-large-uncased
|315. |Text Embedding |Mxnet |Same |Model ID: mxnet-tcembedding-robertafin-large-wiki-uncased
|316. |Text Classification |Tensorflow |This is a Text Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a text string as input and classifies the input text as either a positive or negative movie review   |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-2-H-768-A-12
|317. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-4-H-128-A-2
|318. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-4-H-256-A-4
|319. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-4-H-512-A-8
|320. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-4-H-768-A-12
|321. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-6-H-128-A-2
|322. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-6-H-256-A-4
|323. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-6-H-512-A-8
|324. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-6-H-768-A-12
|325. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-8-H-128-A-2
|326. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-8-H-256-A-4
|327. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-8-H-512-A-8
|328. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-8-H-768-A-12
|329. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-10-H-128-A-2
|330. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-10-H-256-A-4
|331. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-10-H-512-A-8
|332. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-10-H-768-A-12
|333. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-12-H-128-A-2
|334. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-12-H-256-A-4
|335. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-12-H-512-A-8
|336. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-small-bert-bert-en-uncased-L-12-H-768-A-12
|337. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-bert-en-uncased-L-24-H-1024-A-16-2
|338. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-bert-en-cased-L-24-H-1024-A-16-2
|339. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-bert-en-wwm-uncased-L-24-H-1024-A-16-2
|340. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-bert-en-wwm-cased-L-24-H-1024-A-16-2
|341. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-albert-en-base
|342. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-electra-small-1
|343. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-electra-base-1
|344. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-experts-bert-wiki-books-1
|345. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-experts-bert-pubmed-1
|346. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-talking-heads-base
|347. |Text Classification |Tensorflow |Same as above |Model ID: tensorflow-tc-talking-heads-large
|348. |Question Answering |Huggingface |This is an Extractive Question Answering model built on a Transformer model from Hugging Face  It takes two strings as inputs: the first string is a question and the second string is the context or any text you want to use to find the answer of the question, and it returns a sub-string from the context as an answer to the question   |Model ID: huggingface-eqa-bert-base-multilingual-cased
|349. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-bert-large-uncased
|350. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-bert-large-cased
|351. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-bert-large-uncased-whole-word-masking
|352. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-bert-large-cased-whole-word-masking
|353. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-distilroberta-base
|354. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-roberta-base
|355. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-roberta-base-openai-detector
|356. |Question Answering |Huggingface |Same as above |Model ID: huggingface-eqa-roberta-large
|357. |Sentence Pair Classification |Tensorflow |This is a Sentence Pair Classification model built upon a Text Embedding model from TensorFlow Hub  It takes a pair of sentences as input and classifies the input pair to 'entailment' or 'no-entailment'   |Model ID: tensorflow-spc-bert-en-wwm-uncased-L-24-H-1024-A-16-2
|358. |Sentence Pair Classification |Tensorflow |Same as above |Model ID: tensorflow-spc-bert-en-wwm-cased-L-24-H-1024-A-16-2
|359. |Sentence Pair Classification |Tensorflow |Same as above |Model ID: tensorflow-spc-experts-bert-wiki-books-1
|360. |Sentence Pair Classification |Tensorflow |Same as above |Model ID: tensorflow-spc-experts-bert-pubmed-1
|361. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-bert-base-multilingual-cased
|362. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-bert-large-uncased
|363. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-bert-large-cased
|364. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-bert-large-uncased-whole-word-masking
|365. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-bert-large-cased-whole-word-masking
|366. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-distilroberta-base
|367. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-roberta-base
|368. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-roberta-base-openai-detector
|369. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-roberta-large
|370. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-roberta-large-openai-detector
|371. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-xlm-mlm-ende-1024
|372. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-xlm-mlm-enro-1024
|373. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-xlm-mlm-xnli15-1024
|374. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-xlm-mlm-tlm-xnli15-1024
|375. |Sentence Pair Classification |Huggingface |Same as above |Model ID: huggingface-spc-xlm-clm-ende-1024
|376. |Text Summarization |Huggingface |This is a Text Summarization model built upon a Transformer model from Hugging Face  It takes a text string as input and returns a summary of the text   |Model ID: huggingface-summarization-bigbird-pegasus-large-arxiv
|377. |Text Summarization |Huggingface |Same as above |Model ID: huggingface-summarization-bigbird-pegasus-large-pubmed
|378. |Text Embedding |Tensorflow |This is a Text Embedding model from TensorFlow Hub  It takes a text string as input and outputs an embedding vector The Text Embedding model is pre-trained on Wikipedia and BookCorpus datasets  |Model ID: tensorflow-tcembedding-bert-en-uncased-L-4-H-512-A-8-2
|379. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-4-H-768-A-12-2
|380. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-6-H-128-A-2-2
|381. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-6-H-256-A-4
|382. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-6-H-512-A-8-2
|383. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-6-H-768-A-12-2
|384. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-8-H-256-A-4-2
|385. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-8-H-512-A-8-2
|386. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-8-H-768-A-12-2
|387. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-10-H-128-A-2-2
|388. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-10-H-256-A-4-2
|389. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-10-H-512-A-8-2
|390. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-10-H-768-A-12-2
|391. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-12-H-128-A-2-2
|392. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-12-H-256-A-4
|393. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-12-H-512-A-8-2
|394. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-12-H-768-A-12-2
|395. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-en-uncased-L-12-H-768-A-12-4
|396. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-wiki-books-sst2
|397. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-bert-wiki-books-mnli-2
|398. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-universal-sentence-encoder-cmlm-en-large-1
|399. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-universal-sentence-encoder-cmlm-en-base-1
|400. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-talkheads-ggelu-bert-en-base-2
|401. |Text Embedding |Tensorflow |Same as above |Model ID: tensorflow-tcembedding-talkheads-ggelu-bert-en-large-2
|402. |Tabular Classification | |This is the LightGBM algorithm for tabular classification task  LightGBM is a gradient boosting framework that uses tree based learning algorithms   |Model ID: lightgbm-classification-model
|403. |Tabular Classification |Catboost |This is the CatBoost algorithm for tabular classification task  CatBoost is a machine learning algorithm that uses gradient boosting on decision trees   |Model ID: catboost-classification-model
|404. |Tabular Classification | |This is the AutoGluon-Tabular algorithm for tabular classification task  AutoGluon-Tabular is an open-source AutoML framework that trains highly accurate machine learning models on an unprocessed tabular dataset Unlike existing AutoML frameworks that primarily focus on model/hyperparameter selection, AutoGluon-Tabular succeeds by ensembling multiple models and stacking them in multiple layers  |Model ID: autogluon-classification-ensemble
|405. |Tabular Classification | |This is the TabTransformer algorithm for tabular classification task  TabTransformer is a deep tabular data modeling architecture that built upon self-attention based Transformers   |Model ID: pytorch-tabtransformerclassification-model
|406. |Tabular Classification |Sklearn |This is the scikit-learn linear algorithm for tabular classification task  Linear Classification is a linear approach to classify data into labels (targets) based on a linear combination of its input features (predictors)   |Model ID: sklearn-classification-linear
|407. |Tabular Classification |Xgboost |This is the XGBoost algorithm for tabular classification task  XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable It implements machine learning algorithms under the Gradient Boosting framework  |Model ID: xgboost-classification-model
|408. |Tabular Regression | |This is the LightGBM algorithm for tabular regression task  LightGBM is a gradient boosting framework that uses tree based learning algorithms   |Model ID: lightgbm-regression-model
|409. |Tabular Regression |Catboost |This is the CatBoost algorithm for tabular regression task  CatBoost is a machine learning algorithm that uses gradient boosting on decision trees   |Model ID: catboost-regression-model
|410. |Tabular Regression | |This is the AutoGluon-Tabular algorithm for tabular regression task  AutoGluon-Tabular is an open-source AutoML framework that trains highly accurate machine learning models on an unprocessed tabular dataset Unlike existing AutoML frameworks that primarily focus on model/hyperparameter selection, AutoGluon-Tabular succeeds by ensembling multiple models and stacking them in multiple layers  |Model ID: autogluon-regression-ensemble
|411. |Tabular Regression | |This is the TabTransformer algorithm for tabular regression task  TabTransformer is a deep tabular data modeling architecture that built upon self-attention based Transformers   |Model ID: pytorch-tabtransformerregression-model
|412. |Tabular Regression |Sklearn |This is the scikit-learn linear algorithm for tabular regression task  Linear Regression is a linear approach for modelling the relationship between a scalar response and one or more explanatory variables   |Model ID: sklearn-regression-linear
|413. |Tabular Regression |Xgboost |This is the XGBoost algorithm for tabular regression task  XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable It implements machine learning algorithms under the Gradient Boosting framework  |Model ID: xgboost-regression-model
|414. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-distilbert-base-uncased
|415. |Question Answering |Pytorch |Same as above |Model ID: pytorch-eqa-bert-large-uncased-whole-word-masking
|416. |Question Answering |Pytorch |Same as above |Model ID: pytorch-eqa-bert-large-uncased
|417. |Question Answering |Pytorch |Same as above |Model ID: pytorch-eqa-bert-large-cased
|418. |Question Answering |Pytorch |Same as above |Model ID: pytorch-eqa-roberta-base
|419. |Question Answering |Pytorch |Same as above |Model ID: pytorch-eqa-distilbert-base-multilingual-cased
|420. |Object detection |SageMaker |Identify birds species in a scene using a SageMaker object detection model.     |
|421. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-distilroberta-base
|422. |Audio Embedding |Tensorflow |This is an audio embedding model from Tensorflow Hub  It takes a wav (audio file format) file as input and outputs an embedding vector   |Model ID: tensorflow-audioembedding-trill-distilled-3
|423. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-roberta-large-openai-detector
|424. |Object detection |SageMaker |Identify defective regions in product images either by training an object detection model from scratch or fine-tuning pretrained SageMaker models.     |
|425. |Audio Embedding |Tensorflow |This is an audio embedding model from Tensorflow Hub  It takes a wav (audio file format) file as input and outputs an embedding vector   |Model ID: tensorflow-audioembedding-trillsson2-1
|426. |Tabular classification |SageMaker |Automatically detect potentially fraudulent activity in transactions using SageMaker XGBoost with the over-sampling technique Synthetic Minority Over-sampling (SMOTE).     |
|427. |Feature importance using shap |SageMaker | |
|428. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-distilbert-base-cased
|429. |Graph neural network classification |SageMaker |Detect fraud in financial transactions by training a graph convolutional network with the deep graph library and a SageMaker XGBoost model.     |
|430. |Tabular classification |SageMaker |Classify financial payments based on transaction information using SageMaker XGBoost. Use this solution template as an intermediate step in fraud detection, personalization, or anomaly detection.     |
|431. |Tabular classification |SageMaker |Identify unhappy mobile phone customers using SageMaker XGBoost.     |
|432. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-bert-base-cased
|433. |RL |SageMaker |Distributed reinforcement learning starter kit for NeurIPS 2020 Procgen Reinforcement learning challenge.     |
|434. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-bert-large-cased-whole-word-masking-finetuned-squad
|435. |Tabular classification |SageMaker | |
|436. |RL |SageMaker | |
|437. |Entity resolution |SageMaker | |
|438. |Tabular classification |SageMaker | |
|439. |Tabular and text classification |SageMaker | |
|440. |Text classification |SageMaker |Anonymize text to better preserve user privacy in sentiment classification.     |
|441. |Tabular, image, and text classification. |SageMaker | |
|442. |Tabular classification |SageMaker | |
|443. |Text to Image |Stabilityai |This is a text-to-image model from Stability AI and downloaded from HuggingFace  It takes a textual description as input and returns a generated image from the description   |Model ID: model-txt2img-stabilityai-stable-diffusion-v2-fp16
|444. |Text to Image |Stabilityai |Same |Model ID: model-txt2img-stabilityai-stable-diffusion-v1-4-fp16
|445. |ext to Image |Stabilityai |Same |Model ID: model-txt2img-stabilityai-stable-diffusion-v1-4
|446. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-bert-base-multilingual-cased
|447. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-roberta-large
|448. |Audio Embedding |Tensorflow |This is an audio embedding model from Tensorflow Hub  It takes a wav (audio file format) file as input and outputs an embedding vector   |Model ID: tensorflow-audioembedding-frill-1
|449. |Audio Embedding |Tensorflow |Same |Model ID: tensorflow-audioembedding-trillsson3-1
|450. |Audio Embedding |Tensorflow |Same |Model ID: tensorflow-audioembedding-trill-3
|451. |Tabular and text classification |SageMaker | |
|452. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-roberta-base-openai-detector
|453. |Question Answering |Pytorch |Same |Model ID: pytorch-eqa-bert-large-cased-whole-word-masking
|454. |Time series |SageMaker |Demand forecasting for multivariate time series data using three state-of-the-art time series forecasting algorithms: LSTNet, Prophet, and SageMaker DeepAR.     |
|455. |Question Answering |Pytorch |This is a Extractive Question Answering model built upon a Text Embedding model from PyTorch Hub  It takes as input a pair of question-context strings, and returns a sub-string from the context as a answer to the question   |Model ID: pytorch-eqa-bert-large-uncased-whole-word-masking-finetuned-squad
|456. |Question Answering |Pytorch |Same |Model ID: pytorch-eqa-bert-base-multilingual-uncased
|457. |Question Answering |Pytorch |Same |Model ID: pytorch-eqa-bert-base-uncased
|458. |Audio Embedding |Tensorflow |This is an audio embedding model from Tensorflow Hub  It takes a wav (audio file format) file as input and outputs an embedding vector   |Model ID: tensorflow-audioembedding-trillsson1-1
|459. |Object detection |SageMaker | |
|460. |Causal inference |SageMaker |Generate a counterfactual analysis of corn response to nitrogen. This solution learns the crop phenology cycle in its entirety using multi-spectral satellite imagery and ground-level observations.     |
|461. |Price optimization |SageMaker |Estimate price elasticity using Double Machine Learning (ML) for causal inference and the Prophet forecasting procedure. Use these estimates to optimize daily prices.     |
|462. |Tabular and text classification |SageMaker | |
|463. |Upscaling |Stabilityai |This is a upscaling model from Stability AI downloaded from HuggingFace with FP16 precision  Given a low resolution image and a textual prompt, it generates a higher resolution image with size up to four times the original image size   |Model ID: model-upscaling-stabilityai-stable-diffusion-x4-upscaler-fp16


## References
- https://aws.amazon.com/sagemaker/jumpstart/getting-started/


**Author**   
Dr. Hari Thapliyaal   
dasarpai.com    
linkedin.com/in/harithapliyal   
