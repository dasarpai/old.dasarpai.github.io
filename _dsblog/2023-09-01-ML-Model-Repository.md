---
mathjax: true
id: 6095
title: ML Model Respository from Pinto0309
date: 2023-09-01
permalink: /dsblog/ML-Model-Repository-from-Pinto0309
tags: [ML Models, Pretrained Models, Deep Learning, NLP, Computer Vision]
categories:
header:
    teaser: /assets/images/dspost/dsp6095-ML-Model-Repository-from-Pinto0309.jpg
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

![ML Model Respository from Pinto0309](/assets/images/dspost/dsp6095-ML-Model-Repository-from-Pinto0309.jpg)

# ML Model Repository from Pinto0309

## Introduction
Using AI we can solve many kinds of tasks for this input can be text, structured data, image, video, audio, time-series, etc. To solve these problems we need to training model. These models may be computer vision, NLP, or traditional machine learning kind. There are hundreds of architectures and algorithms to solve business problems and create models. There a hundreds of different datasets that can be along with a particular architecture or algorithm to solve the problem. If you have any of these tasks then you can explore using these pre-trained models to solve your problem. There is a GitHub user "Katsuya Hyodo" with GitHub account "PINTO0309". He has trained hundreds of models and created these pre-trained models for the community. You can scan and explore them from there. From there you can download the pre-trained models.


## Supported Formats
- WQ = Weight Quantization    
- OV = OpenVINO IR    
- CM = CoreML    
- DQ = Dynamic Range Quantization   
- FP32 = Floating Point 32	
- FP16	= Floating Point 16
- INT8	= Integer
- TPU = Tensor Processing Unit	
- TFJS	= Tensorlfow javascript
- TF-TRT = ensorFlow-Tensor Run Time	
- ONNX = Open Neural Network Exchange

## [](#1-image-classification)1\. Image Classification

Number in the tables below is from the main [repository](https://github.com/PINTO0309/PINTO_model_zoo)

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
4|[Efficientnet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/004_efficientnet)|✔️|✔️||||||||
10|[Mobilenetv3](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/010_mobilenetv3)|✔️|✔️||||||||
11|[Mobilenetv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/011_mobilenetv2)|✔️|✔️|✔️|||||||
16|[Efficientnet-lite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/016_EfficientNet-lite)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
70|[age-gender-recognition](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/070_age-gender-recognition)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
83|[Person\_Reidentification](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/083_Person_Reidentification)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
87|[DeepSort](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/087_DeepSort)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
124|[person-attributes-recognition-crossroad-0230](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/124_person-attributes-recognition-crossroad-0230)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
125|[person-attributes-recognition-crossroad-0234](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/125_person-attributes-recognition-crossroad-0234)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
126|[person-attributes-recognition-crossroad-0238](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/126_person-attributes-recognition-crossroad-0238)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
175|[face-recognition-resnet100-arcface-onnx](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/175_face-recognition-resnet100-arcface-onnx)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
187|[vehicle-attributes-recognition-barrier-0039](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/187_vehicle-attributes-recognition-barrier-0039)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
188|[vehicle-attributes-recognition-barrier-0042](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/188_vehicle-attributes-recognition-barrier-0042)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
191|[anti-spoof-mn3](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/191_anti-spoof-mn3)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
192|[open-closed-eye-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/192_open-closed-eye-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
194|[face\_recognizer\_fast](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/194_face_recognizer_fast)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
195|[person\_reid\_youtu](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/195_person_reid_youtu)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
199|[NSFW](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/199_NSFW)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
244|[FINNger](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/244_FINNger)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
256|[SFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/256_SFace)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
257|[PiCANet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/257_PiCANet)|✔️|||||||||
259|[Emotion\_FERPlus](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/259_Emotion_FERPlus)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
290|[AdaFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/290_AdaFace)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
317|[MobileOne](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/317_MobileOne)||||||||||
346|[facial\_expression\_recognition\_mobilefacenet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/346_facial_expression_recognition_mobilefacenet)|✔️|✔️|✔️|✔️|✔️|||||
379|[PP-LCNetV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/379_PP-LCNetV2)|✔️|✔️||||||||

## [](#2-2d-object-detection)2\. 2D Object Detection

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
2|[Mobilenetv3-SSD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/002_mobilenetv3-ssd)|✔️|✔️|✔️|||||||
6|[Mobilenetv2-SSDlite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/006_mobilenetv2-ssdlite)|✔️|✔️|✔️|||||||
8|[Mask\_RCNN\_Inceptionv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/008_mask_rcnn_inceptionv2)|✔️|✔️||||||||
18|[EfficientDet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/018_EfficientDet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
23|[Yolov3-nano](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/023_yolov3-nano)|✔️|✔️|✔️|||||||
24|[Yolov3-lite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/024_yolov3-lite)|✔️|✔️|✔️|✔️|✔️|||||
31|[Yolov4](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/031_yolov4)|✔️|✔️|✔️|✔️|✔️|||||
34|[SSD\_Mobilenetv2\_mnasfpn](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/034_ssd_mobilenet_v2_mnasfpn_shared_box_predictor)|✔️|✔️|✔️|✔️|✔️|||||
38|[SSDlite\_MobileDet\_edgetpu](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/038_ssdlite_mobiledet_edgetpu)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
39|[SSDlite\_MobileDet\_cpu](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/039_ssdlite_mobiledet_cpu)|✔️|✔️|✔️|||||||
42|[Centernet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/042_centernet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
45|[SSD\_Mobilenetv2\_oid\_v4](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/045_ssd_mobilenet_v2_oid_v4)|✔️|✔️|✔️|✔️|✔️|||||
46|[Yolov4-tiny](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/046_yolov4-tiny)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
47|[SpineNetMB\_49](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/047_SpineNetMB_49)|✔️|✔️|✔️|✔️||||||
51|[East\_Text\_Detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/051_East_Text_Detection)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
54|[KNIFT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/054_KNIFT)|✔️|✔️|✔️|✔️|✔️|||||
56|[TextBoxes++ with dense blocks, separable convolution and Focal Loss](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/056_TextBoxes%2B%2B)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
58|[keras-retinanet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/058_keras-retinanet)|✔️|✔️|✔️|✔️|✔️|✔️||||
59|[Yolov5](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/059_yolov5)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
72|[NanoDet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/072_NanoDet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
73|[RetinaNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/073_RetinaNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
74|[Yolact](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/074_Yolact)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
85|[Yolact\_Edge](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/085_Yolact_Edge)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
89|[DETR](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/089_DETR)|✔️|✔️|✔️|✔️||||||
103|[EfficientDet\_lite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/103_EfficientDet_lite)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
116|[DroNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/116_DroNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
123|[YOLOR](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/123_YOLOR)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
132|[YOLOX](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/132_YOLOX)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
143|[RAPiD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/143_RAPiD)|✔️|✔️|✔️|✔️|✔️|||||
145|[text\_detection\_db](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/145_text_detection_db)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
151|[object\_detection\_mobile\_object\_localizer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/151_object_detection_mobile_object_localizer)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
169|[spaghettinet\_edgetpu](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/169_spaghettinet_edgetpu)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
174|[PP-PicoDet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/174_PP-PicoDet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
178|[vehicle-detection-0200](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/178_vehicle-detection-0200)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
1|[person-detection-0202](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/179_person-detection-0202)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
180|[YOLOv5-Lite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/180_YOLOv5-Lite)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
183|[pedestrian-detection-adas-0002](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/183_pedestrian-detection-adas-0002)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
184|[pedestrian-and-vehicle-detector-adas-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/184_pedestrian-and-vehicle-detector-adas-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
185|[person-vehicle-bike-detection-crossroad-0078](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/185_person-vehicle-bike-detection-crossroad-0078)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
186|[person-vehicle-bike-detection-crossroad-1016](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/186_person-vehicle-bike-detection-crossroad-1016)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
189|[vehicle-license-plate-detection-barrier-0106](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/189_vehicle-license-plate-detection-barrier-0106)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
190|[person-detection-asl-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/190_person-detection-asl-0001)|✔️|✔️|✔️|✔️|✔️|✔️||||
197|[yolact-resnet50-fpn](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/197_yolact-resnet50-fpn)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
198|[YOLOF](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/198_YOLOF)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
221|[YOLACT-PyTorch](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/221_YOLACT-PyTorch)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
226|[CascadeTableNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/226_CascadeTableNet)|✔️|✔️|✔️|✔️|✔️|||||
262|[ByteTrack](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/262_ByteTrack)||||||||||
264|[object\_localization\_network](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/264_object_localization_network)||||||||||
307|[YOLOv7](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/307_YOLOv7)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
308|[FastestDet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/308_FastestDet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
329|[YOLOX-PAI](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/329_YOLOX-PAI)||||||||||
331|[YOLOv5L6\_Ball](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/331_YOLOv5L6_Ball)||||||||||
332|[CrowdDet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/332_CrowdDet)||||||||||
334|[DAMO-YOLO](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/334_DAMO-YOLO)||||||||||
336|[PP-YOLOE-Plus](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/336_PP-YOLOE-Plus)||||||||||
337|[FreeYOLO](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/337_FreeYOLO)||||||||||
341|[YOLOv6](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/341_YOLOv6)|✔️|✔️|✔️|✔️|✔️|||||
356|[EdgeYOLO](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/356_EdgeYOLO)||||||||||
376|[RT-DETR](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/376_RT-DETR)||||||||||
386|[naruto\_handsign\_detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/386_naruto_handsign_detection)|✔️|✔️|✔️|✔️||||||

## [](#3-3d-object-detection)3\. 3D Object Detection

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
36|[Objectron](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/036_Objectron)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
63|[3D BoundingBox estimation for autonomous driving](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/063_3d-bounding-box-estimation-for-autonomous-driving)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
107|[SFA3D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/107_SFA3D)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
263|[EgoNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/263_EgoNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
321|[DID-M3D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/321_DID-M3D)||||||||||
363|[YOLO-6D-Pose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/363_YOLO-6D-Pose)|✔️|✔️||||||||

## [](#4-2d3d-face-detection)4\. 2D/3D Face Detection

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
25|[Head\_Pose\_Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/025_head_pose_estimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
30|[BlazeFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/030_BlazeFace)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
32|[FaceMesh](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/032_FaceMesh)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
40|[DSFD\_vgg](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/040_DSFD_vgg)|✔️|✔️||||||||
41|[DBFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/041_DBFace)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
43|[Face\_Landmark](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/043_face_landmark)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
49|[Iris\_Landmark](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/049_iris_landmark)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
95|[CenterFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/095_centerface)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
96|[RetinaFace](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/096_RetinaFace)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
106|[WHENet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/106_WHENet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
129|[SCRFD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/129_SCRFD)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
130|[YOLOv5\_Face](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/130_YOLOv5_Face)|✔️|✔️|✔️|✔️|✔️|✔️||||
134|[head-pose-estimation-adas-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/134_head-pose-estimation-adas-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
144|[YuNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/144_YuNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
227|[face-detection-adas-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/227_face-detection-adas-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
250|[Face-Mask-Detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/250_Face-Mask-Detection)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
282|[face\_landmark\_with\_attention](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/282_face_landmark_with_attention)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
289|[face-detection-0100](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/289_face-detection-0100)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
293|[Lightweight-Head-Pose-Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/293_Lightweight-Head-Pose-Estimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
300|[6DRepNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/300_6DRepNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
301|[YOLOv4\_Face](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/301_YOLOv4_Face)||||||||||
302|[SLPT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/302_SLPT)||||||||||
303|[FAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/303_FAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
304|[SynergyNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/304_SynergyNet)||||||||||
305|[DMHead](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/305_DMHead)||||||||||
311|[HHP-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/311_HHP-Net)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
319|[ACR-Loss](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/319_ACR-Loss)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
322|[YOLOv7\_Head](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/322_YOLOv7_Head)||||||||||
345|[YOLOv8](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/345_YOLOv8)||||||||||
383|[DirectMHP](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/383_DirectMHP)|✔️|✔️||||||||
387|[YuNetV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/387_YuNetV2)|✔️|✔️|✔️|✔️||||||
390|[BlendshapeV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/390_BlendshapeV2)|✔️|✔️||||||||
399|[RetinaFace\_MobileNetv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/399_RetinaFace_MobileNetv2)||||||||||
410|[FaceMeshV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/410_FaceMeshV2)|✔️|✔️|✔️|✔️|✔️|||||

## [](#5-2d3d-hand-detection)5\. 2D/3D Hand Detection

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
27|[Minimal-Hand](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/027_minimal-hand)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
33|[Hand\_Detection\_and\_Tracking](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/033_Hand_Detection_and_Tracking)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
94|[hand\_recrop](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/094_hand_recrop)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
403|[trt\_pose\_hand](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/)||||||||||

## [](#6-2d3d-humananimal-pose-estimation)6\. 2D/3D Human/Animal Pose Estimation

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
3|[Posenet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/003_posenet)|✔️|✔️|✔️|✔️|✔️|||||
7|[Mobilenetv2\_Pose\_Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/007_mobilenetv2-poseestimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
29|[Human\_Pose\_Estimation\_3D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/029_human-pose-estimation-3d-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
53|[BlazePose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/053_BlazePose)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
65|[ThreeDPoseUnityBarracuda](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/065_ThreeDPoseUnityBarracuda)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
80|[tf\_pose\_estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/080_tf_pose_estimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
84|[EfficientPose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/084_EfficientPose)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
88|[Mobilenetv3\_Pose\_Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/088_mobilenetv3-poseestimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
115|[MoveNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/115_MoveNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
137|[MoveNet\_MultiPose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/137_MoveNet_MultiPose)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
156|[MobileHumanPose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/156_MobileHumanPose)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
157|[3DMPPE\_POSENET](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/157_3DMPPE_POSENET)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
265|[PoseAug](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/265_PoseAug)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
268|[Lite-HRNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/268_Lite-HRNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
269|[Higher-HRNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/269_Higher-HRNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
271|[HRNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/271_HRNet)||||||||||
333|[E2Pose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/333_E2Pose)|✔️|✔️|✔️|✔️||||||
350|[P-STMO](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/350_P-STMO)||||||||||
355|[MHFormer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/355_MHFormer)|✔️|✔️||||||||
365|[HTNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/365_HTNet)|✔️|✔️||||||||
392|[STCFormer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/392_STCFormer)|✔️|✔️||||||||
393|[RTMPose\_WholeBody](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/393_RTMPose_WholeBody)|✔️|✔️|✔️|✔️||||||
394|[RTMPose\_Animal](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/394_RTMPose_Animal)|✔️|✔️|✔️|✔️||||||
402|[trt\_pose](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/402_trt_pose)||||||||||
412|[pytorch\_cpn](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/412_pytorch_cpn)|✔️|✔️||||||||

## [](#7-depth-estimation-from-monocularstereo-images)7\. Depth Estimation from Monocular/Stereo Images

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
9|[Multi-Scale Local Planar Guidance for Monocular Depth Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/009_multi-scale_local_planar_guidance_for_monocular_depth_estimation)||||||||||
14|[tf-monodepth2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/014_tf-monodepth2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
28|[struct2depth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/028_struct2depth)|✔️|✔️|✔️|||||||
64|[Dense Depth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/064_Dense_Depth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
66|[Footprints](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/066_footprints)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
67|[MiDaS](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/067_MiDaS)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
81|[MiDaS v2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/081_MiDaS_v2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
135|[CoEx](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/135_CoEx)|✔️|||||||||
142|[HITNET](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/142_HITNET)|✔️|✔️|✔️|||||||
146|[FastDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/146_FastDepth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
147|[PackNet-SfM](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/147_PackNet-SfM)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
148|[LapDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/148_LapDepth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
149|[depth\_estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/149_depth_estimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
150|[MobileStereoNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/150_MobileStereoNet)||||||||||
153|[MegaDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/153_MegaDepth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
158|[HR-Depth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/158_HR-Depth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
159|[EPCDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/159_EPCDepth)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
160|[msg\_chn\_wacv20](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/160_msg_chn_wacv20)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
162|[PyDNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/162_PyDNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
164|[MADNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/164_MADNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
165|[RealtimeStereo](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/165_RealtimeStereo)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
166|[Insta-DM](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/166_Insta-DM)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
167|[DPT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/168_DPT)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
173|[MVDepthNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/173_MVDepthNet)|✔️|||||||||
202|[stereoDNN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/202_stereoDNN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
203|[SRHNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/203_SRHNet)||||||||||
210|[SC\_Depth\_pl](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/210_SC_Depth_pl)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
211|[Lac-GwcNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/211_Lac-GwcNet)||||||||||
219|[StereoNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/219_StereoNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
235|[W-Stereo-Disp](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/235_W-Stereo-Disp)||||||||||
236|[A-TVSNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/236_A-TVSNet)|✔️|✔️|✔️|✔️||||||
239|[CasStereoNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/239_CasStereoNet)||||||||||
245|[GLPDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/245_GLPDepth)|✔️|||||||||
258|[TinyHITNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/258_TinyHITNet)|✔️|||||||||
266|[ACVNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/266_ACVNet)|✔️|||||||||
280|[GASDA](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/280_GASDA)||||||||||
284|[CREStereo](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/284_CREStereo)||||||||||
292|[Graft-PSMNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/292_Graft-PSMNet)||||||||||
294|[FSRE-Depth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/294_FSRE-Depth)|✔️|||||||||
296|[MGNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/296_MGNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
312|[NeWCRFs](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/312_NeWCRFs)||||||||||
313|[PyDNet2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/314_PyDNet2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
327|[EMDC](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/327_EMDC)||||||||||
338|[Fast-ACVNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/338_Fast-ACVNet)||||||||||
358|[CGI-Stereo](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/358_CGI-Stereo)|✔️|✔️||||||||
362|[ZoeDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/362_ZoeDepth)||||||||||
364|[IGEV](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/364_IGEV)||||||||||
371|[Lite-Mono](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/371_Lite-Mono)||||||||||
384|[TCMonoDepth](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/384_TCMonoDepth)||||||||||
397|[MiDaSv3.1](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/397_MiDaSv3.1)||||||||||

## [](#8-semantic-segmentation)8\. Semantic Segmentation

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
1|[deeplabv3](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/001_deeplabv3)|✔️|||||||||
15|[Faster-Grad-CAM](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/015_Faster-Grad-CAM)|✔️|✔️||||||||
20|[EdgeTPU-Deeplab](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/020_edgetpu-deeplab)|✔️|✔️|✔️|||||||
21|[EdgeTPU-Deeplab-slim](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/021_edgetpu-deeplab-slim)|✔️|✔️|✔️|||||||
26|[Mobile-Deeplabv3-plus](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/026_mobile-deeplabv3-plus)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
35|[BodyPix](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/035_BodyPix)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
57|[BiSeNetV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/057_BiSeNetV2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
60|[Hair Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/060_hair_segmentation)|✔️|✔️|✔️|✔️||||||
61|[U^2-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/061_U-2-Net)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
69|[ENet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/069_ENet)|✔️|✔️|✔️|✔️|✔️|||||
75|[ERFNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/075_ERFNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
78|[MODNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/078_MODNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
82|[MediaPipe\_Meet\_Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/082_MediaPipe_Meet_Segmentation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
104|[DeeplabV3-plus](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/104_DeeplabV3-plus)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
109|[Selfie\_Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/109_Selfie_Segmentation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
136|[road-segmentation-adas-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/136_road-segmentation-adas-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
138|[BackgroundMattingV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/138_BackgroundMattingV2)|✔️|✔️|✔️|✔️||||||
181|[models\_edgetpu\_checkpoint\_and\_tflite\_vision\_segmentation-edgetpu\_tflite\_default\_argmax](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/181_models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_default_argmax)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
182|[models\_edgetpu\_checkpoint\_and\_tflite\_vision\_segmentation-edgetpu\_tflite\_fused\_argmax](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/182_models_edgetpu_checkpoint_and_tflite_vision_segmentation-edgetpu_tflite_fused_argmax)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
196|[human\_segmentation\_pphumanseg](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/196_human_segmentation_pphumanseg)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
201|[CityscapesSOTA](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/201_CityscapesSOTA)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
206|[Matting](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/206_Matting)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
228|[Fast-SCNN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/228_Fast-SCNN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
238|[SUIM-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/238_SUIM-Net)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
242|[RobustVideoMatting](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/242_RobustVideoMatting)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
246|[SqueezeSegV3](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/246_SqueezeSegV3)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
267|[LIOT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/267_LIOT)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
287|[Topformer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/287_Topformer)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
295|[SparseInst](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/295_SparseInst)|✔️|||||||||
299|[DGNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/299_DGNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
313|[IS-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/313_IS-Net)||||||||||
335|[PIDNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/335_PIDNet)||||||||||
343|[PP-MattingV2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/343_PP-MattingV2)|✔️|✔️||||||||
347|[RGBX\_Semantic\_Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/347_RGBX_Semantic_Segmentation)||||||||||
369|[Segment\_Anything](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/369_Segment_Anything)||||||||||
380|[Skin-Clothes-Hair-Segmentation-using-SMP](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/380_Skin-Clothes-Hair-Segmentation-using-SMP)|✔️|✔️||||||||
391|[MagicTouch](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/391_MagicTouch)|✔️|✔️|✔️|||||||
405|[Ear\_Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/405_Ear_Segmentation)||||||||||

## [](#9-anomaly-detection)9\. Anomaly Detection

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
5|[One\_Class\_Anomaly\_Detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/005_one_class_anomaly_detection)|✔️|✔️|✔️|||||||
99|[Efficientnet\_Anomaly\_Detection\_Segmentation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/099_efficientnet_anomaly_detection_segmentation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||

## [](#10-artistic)10\. Artistic

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
17|[Artistic-Style-Transfer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/017_Artistic-Style-Transfer)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
19|[White-box-Cartoonization](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/019_White-box-Cartoonization)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
37|[First\_Neural\_Style\_Transfer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/037_First_Neural_Style_Transfer)|✔️|✔️||||||||
44|[Selfie2Anime](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/044_selfie2anime)|✔️|✔️|✔️|✔️|✔️|✔️||||
50|[AnimeGANv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/050_AnimeGANv2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
62|[Facial Cartoonization](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/062_facial_cartoonization)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
68|[Colorful\_Image\_Colorization](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/068_Colorful_Image_Colorization)|✔️|✔️|✔️|✔️|✔️|✔️||||
101|[arbitrary\_image\_stylization](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/101_arbitrary_image_stylization)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
113|[Anime2Sketch](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/113_Anime2Sketch)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
161|[EigenGAN-Tensorflow](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/161_EigenGAN-Tensorflow)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
193|[CoCosNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/193_CoCosNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||

## [](#11-super-resolution)11\. Super Resolution

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
12|[Fast\_Accurate\_and\_Lightweight\_Super-Resolution](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/012_Fast_Accurate_and_Lightweight_Super-Resolution)|✔️|✔️||||||||
22|[Learning\_to\_See\_Moving\_Objects\_in\_the\_Dark](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/022_Learning_to_See_Moving_Objects_in_the_Dark)|✔️|✔️|✔️|||||||
71|[Noise2Noise](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/071_Noise2Noise)|✔️|✔️|✔️|✔️|✔️|||||
76|[Deep\_White\_Balance](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/076_Deep_White_Balance)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
77|[ESRGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/077_ESRGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
79|[MIRNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/079_MIRNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
86|[Defocus Deblurring Using Dual-Pixel](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/086_defocus-deblurring-dual-pixel)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
90|[Ghost-free\_Shadow\_Removal](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/090_Ghost-free_Shadow_Removal)|✔️|✔️|✔️|✔️|✔️|✔️||||
111|[SRN-Deblur](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/111_SRN-Deblur)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
112|[DeblurGANv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/112_DeblurGANv2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
114|[Two-branch-dehazing](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/114_Two-branch-dehazing)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
133|[Real-ESRGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/133_Real-ESRGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
152|[DeepLPF](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/152_DeepLPF)|✔️|✔️|✔️|✔️||||||
170|[Learning-to-See-in-the-Dark](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/170_Learning-to-See-in-the-Dark)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
171|[Fast-SRGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/171_Fast-SRGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
172|[Real-Time-Super-Resolution](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/172_Real-Time-Super-Resolution)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
176|[StableLLVE](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/176_StableLLVE)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
200|[AGLLNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/200_AGLLNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
204|[HINet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/204_HINet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
205|[MBLLEN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/205_MBLLEN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
207|[GLADNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/207_GLADNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
208|[SAPNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/208_SAPNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
209|[MSBDN-DFF](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/209_MSBDN-DFF)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
212|[GFN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/212_GFN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
213|[TBEFN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/213_TBEFN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
214|[EnlightenGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/214_EnlightenGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
215|[AOD-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/215_AOD-Net)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
216|[Zero-DCE-TF](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/216_Zero-DCE-TF)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
217|[RUAS](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/217_RUAS)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
218|[DSLR](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/218_DSLR)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
220|[HEP](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/220_HEP)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
222|[LFT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/222_LFT)||||||||||
223|[DA\_dahazing](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/223_DA_dahazing)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
224|[Y-net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/224_Y-net)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
225|[DRBL](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/225_NTIRE-2021-Dehazing-Two-branch)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
230|[Single-Image-Desnowing-HDCWNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/230_Single-Image-Desnowing-HDCWNet)|✔️|✔️|✔️|✔️|✔️|||||
231|[DRBL](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/231_DRBL)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
232|[MIMO-UNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/232_MIMO-UNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
234|[FBCNN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/234_FBCNN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
240|[BSRGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/240_BSRGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
241|[SCL-LLE](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/241_SCL-LLE)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️
243|[Zero-DCE-improved](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/243_Zero-DCE-improved)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
249|[Real-CUGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/249_Real-CUGAN)|✔️|||||||||
251|[AU-GAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/251_AU-GAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
253|[TransWeather](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/253_TransWeather)|✔️|||||||||
261|[EfficientDerain](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/261_EfficientDerain)||||||||||
270|[HWMNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/270_HWMNet)||||||||||
275|[FD-GAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/275_FD-GAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
277|[EDN-GTM](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/277_EDN-GTM)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
281|[IMDN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/281_IMDN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
283|[UIE-WD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/283_UIE-WD)||||||||||
285|[Decoupled-Low-light-Image-Enhancement](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/285_Decoupled-Low-light-Image-Enhancement)||||||||||
286|[SCI](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/286_SCI)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
315|[Illumination-Adaptive-Transformer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/315_Illumination-Adaptive-Transformer)||||||||||
316|[night\_enhancement](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/316_night_enhancement)||||||||||
320|[Dehamer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/320_Dehamer)||||||||||
323|[Stripformer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/323_Stripformer)||||||||||
325|[DehazeFormer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/325_DehazeFormer)||||||||||
344|[XYDeblur](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/344_XYDeblur)||||||||||
348|[Bread](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/348_Bread)||||||||||
348|[PMN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/349_PMN)||||||||||
351|[RFDN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/351_RFDN)||||||||||
352|[MAXIM](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/352_MAXIM)|✔️|✔️||||||||
353|[ShadowFormer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/353_ShadowFormer)||||||||||
354|[DEA-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/354_DEA-Net)|✔️|✔️||||||||
359|[MSPFN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/359_MSPFN)|✔️|✔️||||||||
361|[KBNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/361_KBNet)||||||||||
367|[FLW-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/367_FLW-Net)||||||||||
368|[C2PNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/368_C2PNet)||||||||||
370|[Semantic-Guided-Low-Light-Image-Enhancement](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/370_Semantic-Guided-Low-Light-Image-Enhancement)||||||||||
372|[URetinex-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/372_URetinex-Net)||||||||||
375|[SCANet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/375_SCANet)||||||||||
377|[DRSformer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/377_DRSformer)||||||||||
385|[PairLIE](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/385_PairLIE)||||||||||
389|[WGWS-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/389_WGWS-Net)||||||||||
396|[MixDehazeNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/396_MixDehazeNet)||||||||||
400|[CSRNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/400_CSRNet)||||||||||
404|[HDR-Transformer](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/404_HDR-Transformer)||||||||||
409|[nighttime\_dehaze](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/409_nighttime_dehaze)||||||||||
411|[UDR-S2Former\_deraining](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/411_UDR-S2Former_deraining)||||||||||

## [](#12-sound-classifier)12\. Sound Classifier

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
13|[ml-sound-classifier](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/013_ml-sound-classifier)|✔️|✔️|✔️|✔️|✔️|✔️||||
97|[YAMNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/097_YAMNet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
98|[SPICE](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/098_SPICE)|✔️|✔️|✔️|✔️|✔️|||||
118|[Speech-enhancement](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/118_Speech-enhancement)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
120|[FRILL](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/120_FRILL)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
177|[BirdNET-Lite](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/177_BirdNET-Lite)|✔️|✔️|✔️|✔️|✔️|||||
381|[Whisper](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/381_Whisper)||||||||||
382|[Light-SERNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/382_Light-SERNet)|✔️|✔️||||||||

## [](#13-natural-language-processing)13\. Natural Language Processing

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
48|[Mobile\_BERT](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/048_mobile_bert)|✔️|✔️|✔️|✔️|✔️|✔️||||
121|[GPT2/DistillGPT2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/121_GPT2_DistillGPT2)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
122|[DistillBert](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/122_DistillBert)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||

## [](#14-text-recognition)14\. Text Recognition

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
52|[Handwritten\_Text\_Recognition](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/052_Handwritten_Text_Recognition)|✔️|✔️||||||||
55|[Handwritten\_Japanese\_Recognition](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/055_Handwritten_Japanese_Recognition)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
93|[ocr\_japanese](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/093_ocr_japanese)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||

## [](#15-action-recognition)15\. Action Recognition

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
92|[weld-porosity-detection-0001](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/092_weld-porosity-detection-0001)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
247|[PoseC3D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/247_PoseC3D)||||||||||
248|[MS-G3D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/248_MS-G3D)||||||||||

## [](#16-inpainting)16\. Inpainting

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
100|[HiFill](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/100_HiFill)|✔️|✔️|✔️|✔️||||||
163|[MST\_inpainting](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/163_MST_inpainting)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
273|[OPN(Onion-Peel Networks)](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/273_OPN)||||||||||
274|[DeepFillv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/274_DeepFillv2)|✔️|✔️|✔️|✔️|✔️|||||

## [](#17-gan)17\. GAN

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
105|[MobileStyleGAN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/105_MobileStyleGAN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
310|[attentive-gan-derainnet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/310_attentive-gan-derainnet)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||

## [](#18-transformer)18\. Transformer

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
127|[dino](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/127_dino)|✔️|✔️|✔️|✔️|✔️|✔️||||

## [](#19-others)19\. Others

|No.|Model Name|FP32|FP16|INT8|TPU|DQ|WQ|OV|CM|TFJS|TF-TRT|ONNX
|---|---|---|---|---|---|---|---|---|---|---|---|---
91|[gaze-estimation-adas-0002](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/091_gaze-estimation-adas-0002)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
102|[Coconet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/102_Coconet)|✔️|✔️|✔️|||||||
108|[HAWP](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/108_HAWP)||||||||||
110|[L-CNN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/110_L-CNN)||||||||||
117|[DTLN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/117_DTLN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
119|[M-LSD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/119_M-LSD)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
131|[CFNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/131_CFNet)||||||||||
139|[PSD-Principled-Synthetic-to-Real-Dehazing-Guided-by-Physical-Priors](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/139_PSD-Principled-Synthetic-to-Real-Dehazing-Guided-by-Physical-Priors)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
140|[Ultra-Fast-Lane-Detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/140_Ultra-Fast-Lane-Detection)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
141|[lanenet-lane-detection](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/141_lanenet-lane-detection)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
154|[driver-action-recognition-adas-0002-encoder](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/154_driver-action-recognition-adas-0002-encoder)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
155|[driver-action-recognition-adas-0002-decoder](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/155_driver-action-recognition-adas-0002-decoder)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
167|[LSTR](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/167_LSTR)|✔️|✔️|✔️|✔️|✔️|✔️||||
229|[DexiNed](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/229_DexiNed)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️|
233|[HRNet-for-Fashion-Landmark-Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/233_HRNet-for-Fashion-Landmark-Estimation)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
237|[piano\_transcription](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/237_piano_transcription)|✔️||||✔️|||||
254|[FullSubNet-plus](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/254_FullSubNet-plus)||||✔️|✔️|✔️|✔️|✔️|✔️|✔️
260|[KP2D](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/260_KP2D)|✔️|✔️|✔️|✔️|✔️|||||
272|[CSFlow](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/272_CSFlow)||||||||||
276|[HybridNets](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/276_HybridNets)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
278|[DWARF](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/278_DWARF)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|✔️||
279|[F-Clip](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/279_F-Clip)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
288|[perceptual-reflection-removal](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/288_perceptual-reflection-removal)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
291|[SeAFusion](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/291_SeAFusion)|✔️|✔️|✔️|✔️|✔️|✔️||||
297|[GazeNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/297_GazeNet)||||||||||
298|[DEQ-Flow](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/298_DEQ-Flow)||||||||||
306|[GMFlowNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/306_GMFlowNet)||||||||||
309|[ImageForensicsOSN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/309_ImageForensicsOSN)|✔️|✔️|✔️|✔️|✔️|✔️|✔️|||
318|[pips](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/318_pips)||||||||||
324|[Ultra-Fast-Lane-Detection-v2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/324_Ultra-Fast-Lane-Detection-v2)||||||||||
326|[YOLOPv2](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/326_YOLOPv2)|✔️|✔️|✔️|✔️|✔️|||||
328|[Stable\_Diffusion](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/328_Stable_Diffusion)||||||||||
339|[DeepLSD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/339_DeepLSD)||||||||||
342|[ALIKE](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/342_ALIKE)|✔️|✔️|✔️|✔️|✔️|||||
357|[Unimatch](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/357_Unimatch)|✔️|✔️||||||||
360|[PARSeq](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/360_PARSeq)|✔️|✔️||||||||
366|[text\_recognition\_CRNN](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/366_text_recognition_CRNN)|✔️|✔️||||||||
373|[LiteTrack](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/373_LiteTrack)|✔️|✔️||||||||
374|[LaneSOD](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/374_LaneSOD)||||||||||
378|[P2PNet\_tfkeras](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/378_P2PNet_tfkeras)|✔️|✔️||||||||
388|[LightGlue](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/388_LightGlue)||||||||||
398|[L2CS-Net](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/398_L2CS-Net)|✔️|✔️|✔️|✔️||||||
401|[CLRerNet](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/401_CLRerNet)||||||||||
406|[DeDoDe](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/406_DeDoDe)|✔️|✔️||||||||
407|[Generalizing\_Gaze\_Estimation](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/407_Generalizing_Gaze_Estimation)|✔️|✔️||||||||
408|[UAED](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/408_UAED)||||||||||
413|[DocShadow](https://github.com/PINTO0309/PINTO_model_zoo/tree/main/413_DocShadow)|✔️|||||||||


## [](#4-reference-articles)4\. Reference articles
1. [Pinto Model Zoo](https://github.com/PINTO0309/PINTO_model_zoo)
1.  **[\[deeplab\] what's the parameters of the mobilenetv3 pretrained model?](https://github.com/tensorflow/models/issues/7911)**
1.  **[When you want to fine-tune DeepLab on other datasets, there are a few cases](https://github.com/tensorflow/models/issues/3730#issuecomment-380168917)**
1.  **[\[deeplab\] Training deeplab model with ADE20K dataset](https://github.com/tensorflow/models/issues/3730)**
1.  **[Running DeepLab on PASCAL VOC 2012 Semantic Segmentation Dataset](https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/pascal.md)**
1.  **[Quantize DeepLab model for faster on-device inference](https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/quantize.md)**
1.  **[https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/model\_zoo.md](https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/model_zoo.md)**
1.  **[https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/quantize.md](https://github.com/tensorflow/models/blob/main/research/deeplab/g3doc/quantize.md)**
1.  **[the quantized form of Shape operation is not yet implemented](https://github.com/tensorflow/tensorflow/issues/20955)**
1.  **[Post-training quantization](https://www.tensorflow.org/lite/performance/post_training_quantization)**
1.  **[Converter command line reference](https://www.tensorflow.org/lite/convert/cmdline_reference)**
1.  **[Quantization-aware training](https://github.com/tensorflow/tensorflow/tree/v1.15.0/tensorflow/contrib/quantize)**
1.  **[Converting a .pb file to .meta in TF 1.3](https://github.com/tensorflow/tensorflow/issues/15292)**
1.  **[Minimal code to load a trained TensorFlow model from a checkpoint and export it with SavedModelBuilder](https://gist.github.com/zhanwenchen/d628ef70e9f76525fd47d6213c30730d)**
1.  **[How to restore Tensorflow model from .pb file in python?](https://stackoverflow.com/questions/50632258/how-to-restore-tensorflow-model-from-pb-file-in-python)**
1.  **[Error with tag-sets when serving model using tensorflow\_model\_server tool](https://github.com/tensorflow/models/issues/3530)**
1.  **[ValueError: No 'serving\_default' in the SavedModel's SignatureDefs. Possible values are 'name\_of\_my\_model'](https://stackoverflow.com/questions/55901234/valueerror-no-serving-default-in-the-savedmodels-signaturedefs-possible-val)**
1.  **[Configure input\_map when importing a tensorflow model from metagraph file](https://stackoverflow.com/questions/42306484/configure-input-map-when-importing-a-tensorflow-model-from-metagraph-file)**
1.  **[TFLite Model Benchmark Tool](https://github.com/tensorflow/tensorflow/tree/main/tensorflow/lite/tools/benchmark)**
1.  **[How to install Ubuntu 19.10 aarch64 (64bit) on RaspberryPi4](https://qiita.com/PINTO/items/adc5db7af7a5996c0f72)**
1.  **[https://github.com/rwightman/posenet-python.git](https://github.com/rwightman/posenet-python.git)**
1.  **[https://github.com/sayakpaul/Adventures-in-TensorFlow-Lite.git](https://github.com/sayakpaul/Adventures-in-TensorFlow-Lite.git)**