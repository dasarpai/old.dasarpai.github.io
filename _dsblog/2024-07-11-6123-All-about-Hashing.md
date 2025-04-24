---
mathjax: true
id: 6123
title: All about Hashing
date: 2024-07-11
permalink: /dsblog/All-about-Hashing
tags: [Cryptography, Data Security, Hash Functions, Cybersecurity, Data Integrity, Security Algorithms, Digital Signatures]
categories:
  - dsblog
keywords: [Hash Functions, Cryptographic Hashing, Data Security, SHA Algorithms, MD5, Digital Signatures, Data Integrity, Security Verification]
header:
    teaser: /assets/images/dspost/dsp6123-All-about-Hashing.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt: Dive into the world of cryptographic hashing. Understand different hashing algorithms, their applications in data security, and best practices for ensuring data integrity through hashing.   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
mathjax: "true"
comments: true
---

![All-about-Hashing](/assets/images/dspost/dsp6123-All-about-Hashing.jpg)

# All about Hashing

## What is Hashing function?
A hashing function is a mathematical algorithm that converts an input (or "message") into a fixed-size string of bytes, typically a hash code or hash value. This output is usually a short, unique representation of the input data. Examples of common hash functions include MD5, SHA-1, and SHA-256.

Hashing is a process where an algorithm (known as a hash function) takes an input (or "message") and returns a fixed-size string of bytes. The output, typically a hexadecimal number, appears random. The purpose of hashing is to ensure data integrity and to securely compare large amounts of data.

Here's a high-level overview of how hashing works:

### 1. **Input Data**
   The data to be hashed, which can be of any size (e.g., a string, a file, etc.).

### 2. **Hash Function**
   The hash function processes the input data and performs several operations to transform the input into a fixed-size hash value. 

### 3. **Fixed-Size Output**
   Regardless of the input size, the output (hash value) will have a fixed size. For example, SHA-256 always produces a 256-bit (32-byte) hash value.


## Properties of a Good Hash Function

- **Deterministic:** The same input will always produce the same hash output.
- **Fast Computation:** The hash value should be quick to compute.
- **Avalanche Effect:** A small change in the input should produce a significantly different hash.
- **Fixed Output Length:** The output hash length should be fixed, regardless of input size.
- **Pre-image Resistance:** Given a hash value, it should be infeasible to find the original input.
- **Collision Resistance:** It should be infeasible to find two different inputs that produce the same hash value.

Hashing functions are widely used in various applications, including:

1. **Data Retrieval**: Hash functions are used in hash tables to quickly locate data records. By hashing a key, the system can quickly access the corresponding value in the table.

2. **Data Integrity**: Hash functions can generate a checksum or digest that verifies data integrity. If the data changes, the hash value will also change, indicating potential tampering or corruption. Hashes allow users to verify that the file they downloaded has not been corrupted or altered. By comparing the hash of the downloaded file with the hash provided on the website, users can ensure the file's integrity. Hashes protect against tampering. If an attacker tries to alter the file, the hash of the modified file will not match the hash provided on the website, indicating that the file has been compromised. When downloading software from multiple sources or mirrors, hashes help ensure that each source provides the exact same file.

3. **Cryptography**: In cryptographic applications, hash functions are used to create digital signatures and perform password hashing. They are designed to be secure against various attacks, ensuring that it’s infeasible to reverse-engineer the original input from the hash value.

4. **Data Deduplication**: Hash functions help identify duplicate data by generating a unique hash for each piece of data. Identical data will have the same hash value.
   

### How to Use Hashes for Verification

1. **Download the File**:
   First, download the package file, for example `mistral_inference-0.0.0.tar.gz`.

2. **Calculate the Hash**:
   Use a hashing tool to calculate the hash of the downloaded file. Here are some examples of commands you can use to calculate different types of hashes:

   - **SHA256**:
     ```sh
     sha256sum mistral_inference-0.0.0.tar.gz
     ```

   - **MD5**:
     ```sh
     md5sum mistral_inference-0.0.0.tar.gz
     ```

   - **BLAKE2b-256**:
     ```sh
     b2sum mistral_inference-0.0.0.tar.gz
     ```

3. **Compare the Hash**:
   Compare the calculated hash with the hash provided on the PyPI website. If they match, the file is verified.

### Example of Verification Process

Let's say you downloaded `mistral_inference-0.0.0.tar.gz` and want to verify it using SHA256:

1. Calculate the SHA256 hash of the file:
   ```sh
   sha256sum mistral_inference-0.0.0.tar.gz
   ```

2. Compare the output with the hash provided on the website:
   ```
   f69c6cb3852e2d937b8d196845bdf6fba9dafa12fc89b795d96b92a3d987cf9c
   ```

If the hash values match, the file is intact and has not been tampered with. If they do not match, the file may have been corrupted or altered, and you should not use it.

### Summary

The hashes provided on the PyPI website are essential for ensuring the security and integrity of downloaded files. They allow users to verify that they have received the correct and unaltered version of the software.

## Common Hash Functions

- **MD5:** Produces a 128-bit hash value. It's now considered broken and unsuitable for further use.
- **SHA-1:** Produces a 160-bit hash value. It has vulnerabilities and is not recommended for security-sensitive applications.
- **SHA-256:** Part of the SHA-2 family, produces a 256-bit hash value. Widely used for security applications.
- **SHA-3:** The latest member of the Secure Hash Algorithm family, standardized in 2015.
- **BLAKE2:** A fast and secure hash function, designed as an alternative to MD5 and SHA-2.

Understanding how hashing works is crucial for ensuring data integrity, securing data, and verifying data authenticity in various applications.


## Can we have different hash value for same input? How to check hash value?

Hash values calculated of some text may different using different tools like [BLAKE2b-256 hash](https://toolkitbay.com/tkb/tool/BLAKE2b_256) 

### 1. Verify the Correct File is Being Hashed

Ensure that the file you downloaded is the exact file you are calculating the hash for.

### 2. Check for Partial or Corrupted Download

Sometimes a file may not be fully downloaded. You can check the file size and compare it with the expected size listed on the website. Re-download the file if necessary.

### 3. Calculate the BLAKE2b-256 Hash Correctly

Ensure you are using the correct command and syntax. For BLAKE2b-256, the correct command should be:

```sh
b2sum -a blake2b-256 mistral_inference-0.0.0.tar.gz
```

If your system does not have the `b2sum` command, you might need to install it. Alternatively, you can use Python to calculate the hash.

### 4. Use Python to Calculate the BLAKE2b-256 Hash

If `b2sum` is not available or not giving the correct result, you can use Python to calculate the BLAKE2b-256 hash:

## How to compute the BLAKE2b hash of a file in Python:

```python
import hashlib

# Initialize the BLAKE2b hash function
blake2b_hash = hashlib.blake2b(digest_size=32)

# Open the file in binary mode and read it in chunks
with open('example_file.txt', 'rb') as f:
    while chunk := f.read(8192):
        blake2b_hash.update(chunk)

# Finalize the hash computation
hash_value = blake2b_hash.hexdigest()

# Print the computed hash value
print(hash_value)
```

# Can we do Hasing for binary files? 
Yes, you can hash binary files like MP3, XLS, JPG, BMP, and other file types. Hashing a binary file is essentially the same as hashing a text file, as hash functions operate on raw bytes. Here's a step-by-step process to hash binary files in Python using the `hashlib` module.

### Example: Hashing a Binary File

Let's hash an example binary file, such as an image (JPG).

```python
import hashlib

# Function to calculate the hash of a file
def calculate_file_hash(file_path, hash_algorithm='sha256'):
    # Initialize the hash function
    hash_func = hashlib.new(hash_algorithm)
    
    # Open the file in binary mode
    with open(file_path, 'rb') as file:
        # Read and update the hash in chunks
        for byte_block in iter(lambda: file.read(4096), b""):
            hash_func.update(byte_block)
    
    # Return the hexadecimal representation of the hash
    return hash_func.hexdigest()

# Path to the binary file
file_path = 'example_image.jpg'

# Calculate the hash of the file
hash_value = calculate_file_hash(file_path, 'sha256')

# Print the computed hash value
print(f"The SHA-256 hash of the file is: {hash_value}")
```

## Hashing Different File Types

The above method works for any binary file type, including MP3, XLS, JPG, BMP, etc. Simply change the `file_path` variable to the path of your binary file. 

## Verifying the Hash

If you want to verify that the hash matches the expected value (as given on a website or other source), compare the computed hash value with the provided one:

```python
expected_hash = 'expected_hash_value_from_website'

if hash_value == expected_hash:
    print("The hash matches the expected value.")
else:
    print("The hash does not match the expected value.")
```

## Understanding Hash Mismatches

If the computed hash does not match the expected value, consider the following:
- Ensure the file is not altered or corrupted.
- Verify the hash algorithm used is the same as specified.
- Check for extra bytes (like newlines) in text files if converted from one format to another.
- Ensure no hidden metadata is affecting the file content. 

This approach ensures data integrity and authenticity across different file types and scenarios.


**Author**   
Dr Hari Thapliyaal   
dasarpai.com    
linkedin.com/in/harithapliyal   