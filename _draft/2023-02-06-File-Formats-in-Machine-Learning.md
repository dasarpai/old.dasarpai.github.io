---
mathjax: true
id: 6054
title: File Formats in Machine Learning 
date: 2023-01-28
permalink: '/dsblog/File-Formats-in-Machine-Learning'
tags: [NLP] 
categories: 

header:
    teaser: /assets/images/dspost/dspnn-File-Formats-in-Machine-Learning.jpg
author: Hari Thapliyaal 
excerpt:
share: true 
---

![File Formats in Machine Learning ](/assets/images/dspost/dspnn-File-Formats-in-Machine-Learning.jpg)


# File Formats in Machine Learning 

https://towardsdatascience.com/guide-to-file-formats-for-machine-learning-columnar-training-inferencing-and-the-feature-store-2e0c3d18d4f9#:~:text=This%20section%20introduces%20the%20most,serving%2C%20that%20are%20described%20below.


- [hdf5](https://www.neonscience.org/about-hdf5)
- [numpy](https://towardsdatascience.com/why-you-should-start-using-npy-file-more-often-df2a13cc0161)
- [tftransform](https://www.tensorflow.org/tfx/transform/get_started)
- [featurestore](https://www.logicalclocks.com/featurestore)
- [tfrecords](https://medium.com/mostly-ai/tensorflow-records-what-they-are-and-how-to-use-them-c46bc4bbb564)
- [bigdataFileFormats](https://luminousmen.com/post/big-data-file-formats)
- [petastorm](https://qcon.ai/system/files/presentation-slides/yevgeni_-_petastorm_16th_apr_2019_.pdf)

File formats used in opensource framework. Python, including TensorFlow/Keras, PyTorch, Scikit-Learn, and PySpark.
Data format of the files needed for training model.

File formats used by feature stores. Hopsworks Feature Store enables the easy creation of training data in popular file formats for ML, such as .tfrecords, .csv, .npy, and .petastorm

# File formats used to store data
- Image file formats (e.g., .png, .jpeg), 
- Video file formats (e.g.,.mp4, .mkv, etc), 
- Archive file formats (e.g.,.zip, .gz, .tar, .bzip2), 
- Document file formats (e.g., .docx, .pdf, .txt) 
- Web file formats (e.g., .html).

A local file system (POSIX) usually stores its data on one or more disks (magnetic (hard drives), SSD (solid-state storage), or NVMe drives). 

Files are stored on file systems, and, in the cloud, increasingly on object stores. File systems come in different flavors. A local file system (POSIX) usually stores its data on one or more disks (magnetic (hard drives), SSD (solid-state storage), or NVMe drives). Such file systems can be accessible over the network (e.g., NFS), or if large amounts of capacity are needed distributed file systems can be used that scale to store hundreds of Petabytes of data across thousands of servers, like HDFS, HopsFS, and CephFS. In the cloud, object stores are the cheapest file storage option where the files can be read/written with reasonable performance by applications.

## Petastorm
Petastorm file format was developed by Uber to store PBs of data for self-driving vehicles that is stored on HDFS

- Petastorm files are large, splittable, and compressed with readers for TensorFlow and PyTorch enabling them to feed lots of V100 in parallel, ensuring they do not bottleneck on file I/O
- if you ran a TensorFlow/Pytorch application to train ImageNet on images stored in S3 (object store) on a Nvidia V100 GPU, you might be able to process 100 images/sec, as that is what a single client can read from S3. However, the V100 can potentially process 1000 images/sec — you are bottlenecking on the I/O to the filesystem.
 
## TFRecord
TFRecord file format was designed for TensorFlow and has full support in tf.data, while PyTorch’s DataLoader was designed, first-and-foremost, around Numpy files and then extended to other file formats
 
## Scikit Learn 
ScikitLearn was first designed to work with CSV and Pandas and then extended to work with other file formats
 
the Feature Store (introduced later) enables you to easily convert your data into the most important file formats for machine learning with no effort.

## Row-oriented format
Apart from possibly Excel, the most common location for Enterprise data is the Data Warehouse or Data Lake. This data is typically accessed using Structured Query Language (SQL) and the data may be stored in either row-oriented format (typically OLTP databases that provide low latency access, high write throughput) or, more commonly, column-oriented format (OLAP/columnar databases that can scale from TBs to PBs and provide faster queries and aggregations).

## Columnar Data File Formats

In Data Lakes, structured data may be stored as files (.parquet and .orc) that is still accessible via SQL using scalable SQL engines such as SparkSQL, Hive, and Presto.

feature engineering on them often requires data-parallel processing frameworks (Spark, Beam, and Flink) to enable feature engineering to scale-out over many servers.
This scalable processing is enabled because the path to data in parquet/orc/petastorm data is actually a directory — not a file.

parquet and orc have similar properties, Petastorm is uniquely designed to support ML data — it is the only columnar file format that natively supports multi-dimensional data.

Columnar file formats typically assume 2-dimensional relational data, but tensors can have much higher dimensionality than 1-d vector or 2-d relational data sources.

Petastorm provides multi-dimensional data capability by extending Parquet with its own Unischema designed explicitly for machine learning use-cases. The Unischema enables petastorm files to store multi-dimensional tensors natively in Parquet.

The unischema is also compatible with PyTorch and TensorFlow so you can convert the petastorm schema directly to TensorFlow schema or PyTorch schema, which enables native TensorFlow/PyTorch readers for petastorm

Columnar file formats are designed for use on distributed file systems (HDFS, HopsFS) and object stores (S3, GCS, ADL) where workers can read the different files in parallel.

File formats: .parquet, .orc, .petastorm.
Feature Engineering: PySpark, Beam, Flink.
Training:.petastorm has native readers in TensorFlow and PyTorch; .orc, .parquet have native readers in Spark; JDBC/Hive sources supported by Spark

## Tabular Text-based File Formats
File formats: .csv, .xslx
Feature Engineering: Pandas, Scikit-Learn, PySpark, Beam, and lots more
Training: .csv has native readers in TensorFlow, PyTorch, Scikit-Learn, Spark


## Nested File Formats

File formats: .tfrecords, .json, .xml, .avro
Feature Engineering: Pandas, Scikit-Learn, PySpark, Beam, and lots more
Training: .tfrecords is the native file format for TensorFlow; .json has native readers in TensorFlow, PyTorch, Scikit-Learn, Spark, .avro files can be used as training data in TensorFlow with LinkedIn’s library.



## Array-Based Formats

File formats: .npy
Feature Engineering: PyTorch, Numpy, Scikit-Learn, TensorFlow;
Training: .npy has native readers in PyTorch, TensorFlow, Scikit-Learn.


## Hierarchical Data Formats

File formats: .h5 (HDF5), .nc (NetCDF)
Feature Engineering: Pandas, Dask, XArray;
Training: .h5 has no native readers in TensorFlow or PyTorch; .nc has no native readers we are aware of.

## Model File Formats
- TensorFlow saves models as protocol buffer files, with a .pb file extension. 
- Keras saves models natively as .h5 file. 
- Scikit-Learn saves models as pickled python objects, with a .pkl file extension. 
- An older format for model serving based on XML, predictive model markup language (.pmml), is still usable on some frameworks, such as Scikit-Learn.
- SparkML models that can be saved in MLeap file format 
- Apple developed the .mlmodel file format to store models embedded in iOS applications as part of its Core ML framework
- TensorFlow, Scikit-Learn, and other frameworks need to convert their model files to the .mlmodel file format for use on iOS, with tools like, coremltools and Tensorflow converter being available to help file format conversion
- ONNX is a ML framework independent file format, supported by Microsoft, Facebook, and Amazon.
- In theory, any ML framework should be able to export its models in .onnx file format, so it offers great promise in unifying model serving across the different frameworks. 
- In PyTorch, the recommended way to serve models is to use Torch Script to trace and save a model as a .pt file
- YAML that is used to package models as part of the MLFlow framework for ML pipelines on Spark
 
 