---
mathjax: true
id: 6208
title: "Understanding Callbacks"
date: 2025-01-24
permalink: /dsblog/understanding-callbacks
tags:
  - Callbacks
  - Software Design
  - Asynchronous Programming
categories:
  - dsblog
header:
  teaser: /assets/images/dspost/dsp6208-Understanding-Callbacks.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Explore the concept of callbacks in software design, their functionality, and their use in asynchronous programming."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
keywords: ["Callbacks", "Asynchronous Programming", "Software Development", "Programming Concepts"]  
---

![Understanding Callbacks](/assets/images/dspost/dsp6208-Understanding-Callbacks.jpg)

# Understanding Callbacks

In the software solution design sometime people find callback confusing and this article is about helping developers and architects understanding this. We will discuss what is callback? What is the use of this? How it workds?

## Context Setting for Understanding Callbacks

Assume you want to create a travel website. It has a feature of book ticket. For this you need to create frontend (UI page). But you don't want to create ticket for any unauthorized person and you don't want to implement the authentication and authorization on your website. 

To solve this authentication and authorization problem you can take help of google or facebook.

You can create a front end (UI page) where user can enter ticket booking related information, like name, email, phone number, from location, to location, date, time, ticket type etc.

When you click on the book ticket button, it will redirect to the login page (if you are not authorized person). Otherwise it will call a backend service to book the ticket. 

If all goes fine a ticket is booked and you get the ticket and message, otherwise you are informed about the reason why ticket was not booked.

Ticket Booking is a micro service on a server which has dozens of other services running. 

In this context we will understand how callback works.


## What is callback?
A **callback** is a function or piece of code that is passed as an argument to another function and is executed after a specific event or task is completed. It is commonly used in asynchronous programming to handle responses or results once an operation (e.g., a network request, file read, or user action) finishes. For example, in our travel website, after a user logs in via Google/Facebook, the authentication service redirects to a **callback URL** with an authorization code, allowing your backend to complete the login process. Similarly, when the `book_ticket` service processes a booking, it might use a callback to notify the frontend of the booking status. Callbacks ensure that actions are handled in the correct order and enable non-blocking, event-driven workflows.


## How it works?

In the context of your travel website with a "book ticket" feature, understanding the roles of **callback** and **authentication** is crucial for ensuring secure and seamless user interactions. Let’s break down their roles:

### **1. Authentication**
Authentication is the process of verifying the identity of a user. In your case, users can log in via Google or Facebook, which are third-party authentication providers. Here's how it works:

#### **Role of Authentication:**
- **User Identity Verification**: When a user logs in via Google or Facebook, these platforms verify the user's identity and provide your application with a token (e.g., OAuth token) that confirms the user is authenticated.
- **Secure Access**: Only authenticated users can access the "book ticket" feature. This ensures that unauthorized users cannot book tickets.
- **User Data**: After authentication, you may receive basic user information (e.g., name, email) from Google or Facebook, which you can use to personalize the booking experience.

#### **How It Works:**
1. The user clicks "Login with Google" or "Login with Facebook" on your front end.
2. Your front end redirects the user to Google/Facebook's authentication page.
3. The user logs in and grants permission to your app.
4. Google/Facebook redirects the user back to your website with an **authentication token**.
5. Your front end sends this token to your backend server for validation.
6. The backend server verifies the token with Google/Facebook and creates a session or issues a JWT (JSON Web Token) for the user.
7. The user is now authenticated and can access the "book ticket" feature.

---

### **2. Callback**
A callback is a mechanism where a function or service is executed after a specific event or task is completed. In your travel website, callbacks are used in multiple places, especially during authentication and ticket booking.

#### **Role of Callback:**
- **Authentication Flow**: After the user logs in via Google or Facebook, the third-party provider redirects the user back to your website using a **callback URL**. This URL is where the authentication result (success or failure) is handled.
- **Asynchronous Operations**: When the "book ticket" service processes the booking request, it may use callbacks to notify the front end or other services about the booking status (e.g., success, failure, or pending).

#### **How It Works:**
1. **Authentication Callback**:
   - You register a callback URL (e.g., `https://yourwebsite.com/auth/callback`) with Google/Facebook during OAuth setup.
   - After the user logs in, Google/Facebook redirects the user to this callback URL with an authorization code or token.
   - Your backend server handles this callback, exchanges the code for an access token, and completes the authentication process.

2. **Booking Service Callback**:
   - When the front end sends a booking request to the `book_ticket` service, the service might process the request asynchronously.
   - Once the booking is confirmed or fails, the `book_ticket` service can use a callback to notify the front end or another service about the result.

---

### **Example Flow in Your Application**
1. **User Authentication**:
   - User clicks "Login with Google."
   - Front end redirects to Google's authentication page.
   - User logs in and grants permission.
   - Google redirects to your callback URL (`https://yourwebsite.com/auth/callback`) with an authorization code.
   - Your backend server handles the callback, exchanges the code for an access token, and authenticates the user.

2. **Ticket Booking**:
   - Authenticated user fills out the ticket booking form on the front end.
   - Front end sends the booking details to the `book_ticket` service.
   - The `book_ticket` service processes the request and uses a callback to notify the front end about the booking status (e.g., "Booking successful" or "Payment failed").

---

### **Key Points to Remember**
- **Authentication** ensures that only valid users can access the "book ticket" feature.
- **Callback URLs** are essential for handling responses from third-party services (e.g., Google/Facebook) and asynchronous operations (e.g., booking confirmation).
- Always validate tokens and handle errors gracefully in both authentication and callback flows.

By implementing these concepts correctly, you can create a secure and user-friendly website with a seamless experience.

## Visualizing How Callback Works

![Understanding Callback Diagram](/assets/images/dspost/mermaid-code/dsp6208-callback-doagram.jpg)


