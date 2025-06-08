---
mathjax: true
id: 6282
title: "Understanding `async`, `await`, and Concurrency in Python - A Simple Tutorial"
date: 2025-05-27
permalink: /dsblog/Understanding-async-await-and-Concurrency
tags: [Asyncio, Concurrency, Synchronous Programming, Asynchronous Programming]
categories: [Python]
header:
  teaser: /assets/images/dspost/dsp6282-Understanding-async-await-and-Concurrency.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn how to write Python code that runs multiple tasks simultaneously, such as reading data from the internet, analyzing logs, and fetching records from a remote server."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
auto_number_headings: false
keywords: [Asyncio Tutorial, Concurrency in Python, Synchronous vs Asynchronous Programming]

---

# Understanding `async`, `await`, and Concurrency in Python — A Simple Tutorial

If you’re learning Python and find terms like `async`, `await`, and `concurrent tasks` confusing — you’re not alone! This tutorial explains how to write Python code that runs **multiple tasks simultaneously**, such as reading data from the internet, analyzing logs, and fetching records from a remote server.

Let’s walk through a real-world example.

---

## Problem Scenario

Imagine you work at a company that:

* Reads content from its **company website**
* Analyzes yesterday’s **webserver logs**
* Retrieves **client information from a remote SAP server**
* Then **sends a report email** to the clients

All these actions involve **waiting** — for internet access, file I/O, or server responses. If we run them one-by-one (**synchronously**), it could take **over 40 minutes**.

Instead, we'll use Python’s **asynchronous capabilities** to do these tasks **concurrently** and finish everything in just **23 minutes**.

---

## 🧠 What You’ll Learn

* What `async` and `await` mean in Python
* How to run multiple tasks at once with `asyncio.create_task()`
* How `asyncio.gather()` helps you wait for multiple tasks
* Why this pattern saves time in I/O-heavy operations

---

## 🔧 Step-by-Step Async Python Example

```python
import asyncio

# 🕸️ 1. Async function to read from company website
async def read_some_content_from_internet():
    print("🔵 Reading content from website...")
    await asyncio.sleep(15 * 60)  # simulate 15 minutes delay
    content = "Company news and updates"
    print("✅ Finished reading website content.")
    return content

# 🧾 2. Async function to analyze yesterday’s logs
async def analyse_log_of_events_of_last_day():
    print("🔵 Analyzing yesterday's logs...")
    await asyncio.sleep(5 * 60)  # simulate 5 minutes delay
    log_content = "Errors and warnings found in logs"
    print("✅ Finished analyzing logs.")
    return log_content

# 📡 3. Async function to fetch client data from SAP server
async def read_client_data_from_sap_server():
    print("🔵 Fetching client data from SAP...")
    await asyncio.sleep(12 * 60)  # simulate 12 minutes delay
    client_data = {
        "clients": [
            {"name": "Alice", "email": "alice@example.com"},
            {"name": "Bob", "email": "bob@example.com"}
        ]
    }
    print("✅ Finished fetching SAP client data.")
    return client_data

# 📬 4. Async function to merge all data and send email
async def merge_infomation_a_b_c__and_send_email_to_client(a, b, c):
    print("🟡 Merging information and sending emails...")
    await asyncio.sleep(8 * 60)  # simulate 8 minutes processing
    print(f"📧 Email sent to {len(c['clients'])} clients.")
    return "Email task complete"
```

---

## 🚀 Running All Tasks Concurrently

Here’s the main function that does the magic:

```python
async def main():
    # 🟢 Fire all 3 tasks concurrently
    task_a = asyncio.create_task(read_some_content_from_internet())  # 15 mins
    task_b = asyncio.create_task(analyse_log_of_events_of_last_day())  # 5 mins
    task_c = asyncio.create_task(read_client_data_from_sap_server())  # 12 mins

    # 🔄 Wait for all 3 tasks to complete (runs in parallel)
    a, b, c = await asyncio.gather(task_a, task_b, task_c)

    # 🟢 Now safely do the final step
    result = await merge_infomation_a_b_c__and_send_email_to_client(a, b, c)

    print("🎉 All tasks completed:", result)
```

Finally, run this:

```python
asyncio.run(main())
```

---

## 🕒 Total Time Breakdown

| Task                               | Time Taken |
| ---------------------------------- | ---------- |
| Website Content (task\_a)          | 15 min     |
| Log Analysis (task\_b)             | 5 min      |
| SAP Client Data (task\_c)          | 12 min     |
| Merge + Email                      | 8 min      |
| **Total Time with Async**          | **23 min** |
| *(vs 40+ min if run sequentially)* |            |

---

## ✅ Final Thoughts

* `async def` is used to define asynchronous functions
* `await` is used **inside async functions** to pause until an async task completes
* `asyncio.create_task()` lets you start multiple async functions at once
* `asyncio.gather()` waits for **multiple tasks concurrently** and collects their results

This pattern is ideal for any program that deals with **networking, file I/O, or waiting**.

---

## 🎁 Bonus Tip

You can extend this idea for:

* Calling multiple APIs at once
* Running 100s of slow web scrapers in parallel
* Simultaneously checking system logs and health metrics

---

Would you like a visual diagram (timeline or flowchart) of this process for your article?
