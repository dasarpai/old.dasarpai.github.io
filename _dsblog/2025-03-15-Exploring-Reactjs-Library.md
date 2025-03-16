---
mathjax: true
id: 6241
title: "Exploring Reactjs Library"
date: 2025-03-15
permalink: /dsblog/exploring-reactjs-library
tags:
  - Reactjs
  - React Library
  - Frontend Development
  - JavaScript
  - UI Components
categories:
  - dsblog
  - frontend

header:
  teaser: /assets/images/dspost/dsp6241-Exploring-Reactjs-Library.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn the basics of React, a popular JavaScript library. Understand its history, features and how it is used in web development."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
auto_number_headings : true
keywords:
  - "Reactjs Tutorial for Beginners"
  - "Learn React Library"
  - "React Frontend Development"
  - "JavaScript Library"
  - "UI Components in React"
---

![React Logo](/assets/images/dspost/dsp6241-Exploring-Reactjs-Library.jpg)

## Why this another article around React?

There is no dearth of React tutorial and guide on the internet then why this article? 

The learning process can be quite diverse, and people come from different backgrounds and experiences. Some may prefer a more structured approach, while others may enjoy exploring concepts through Q&A formats. This article aims to provide a concise introduction to React.js, also known as React, by exploring the most common questions people have about this popular JavaScript library. Whether you're a beginner looking to learn the basics or an experienced developer wanting to know more about React, this article should provide you with a solid foundation.


## History Behind React
When Facebook introduced React in **2013**, it wasn’t just another JavaScript library—it was a response to major challenges in building complex web applications. 

**This was the time when**
- Facebook was rapidly growing, and its **News Feed** and **chat system** required frequent updates.  
- Existing JavaScript frameworks (like jQuery, Backbone.js) led to **spaghetti code** with **messy DOM manipulations**.  
- As the UI became more interactive, keeping track of **state changes** became a nightmare.

**The Problem was:**  
- Updating the DOM was slow
- State management was hard
- Code became difficult to maintain
- Re-rendering the entire UI was inefficient*

Facebook was exploring better way to build UI that updates efficiently.

**Before React**
- Frameworks like **AngularJS** used **two-way data binding**, where changes in the UI automatically updated the model and vice versa, it led to **performance issues** in large applications.  
- Because of too many dependencies, a small changes in one part of the UI triggered unexpected updates elsewhere.  Developers struggled debug and track how changes propagated.  
-  JavaScript frameworks manipulated the **real DOM** directly, which was **slow and expensive**.  Every small UI update caused **repaints and reflows**, slowing down applications.
- Developers used **template-based approaches** (like Handlebars, AngularJS), but they weren’t reusable. UI components were difficult to share and maintain.  
- Facebook’s engineering teams were working on multiple features **simultaneously**.  As the codebase grew, **merging and maintaining UI code became difficult**. 
- Facebook developers **Jordan Walke** and his team experimented with a **functional approach to UI development**.  They built **React as an internal tool** for the Facebook Ads team. It was so effective that Facebook decided to **open-source it in 2013**. 

They introduce 
- a **one-way data flow** where updates are predictable.
- React introduced a **Virtual DOM**, a lightweight copy of the real DOM.
- UI was broken into **reusable components** (buttons, forms, modals, etc.).  
- Components managed their **own state**, making the code cleaner and modular. 
- A UI library that allows teams to **work independently** while maintaining a **consistent experience**.


## Introductory Questions
### **What it is:**
React is a library, not a framework, meaning it provides tools and functions for building user interfaces, but it doesn't dictate how your application should be structured. 

### What are the Key Features of React?
- Component-Based: React applications are built using reusable components, which are independent and self-contained UI blocks. 
Virtual DOM: React uses a virtual DOM to efficiently update the user interface, minimizing direct manipulation of the actual DOM for better performance. 
- JSX: React uses JSX, a syntax extension to JavaScript that allows you to write HTML-like structures within your JavaScript code, making it easier to define UI elements. 
- Declarative: React encourages a declarative approach to UI development, meaning you describe what the UI should look like, and React handles the rendering and updates. 
- Open Source: React is an open source library, developed and maintained by Facebook and a large community of developers. 
Use Cases:
- Single-Page Applications (SPAs): React is well-suited for building SPAs, where the entire application runs within a single web page, and user interactions update the UI without full page reloads. 
- Mobile Applications: React Native, a framework built on React, allows developers to build native mobile apps (Android and iOS) using React's component-based architecture. 
- Web Applications: React is widely used for building complex web applications with dynamic and interactive user interfaces. 
Why it's popular:
- Performance: React's virtual DOM and efficient update mechanisms lead to fast and responsive applications. 
- Reusability: Components can be easily reused across different parts of an application, promoting code maintainability and efficiency. 
- Large Community: React has a large and active community, providing ample resources, libraries, and support. 
- Learnability: React's component-based approach and declarative nature make it relatively easy to learn and use. 
Alternatives:
- While React is a popular choice, other JavaScript libraries and frameworks for building user interfaces include Angular and Vue.js. 


## Beginner-Level Questions

### **What is React?**  
React is a JavaScript library for building interactive user interfaces, primarily using components.

### **Who created React?**  
React was created by Facebook in 2013.

### **What is JSX?**  
JSX is a syntax extension for JavaScript that looks like HTML and is used in React to define UI elements.

### **What is a component in React?**  
A component is a reusable piece of UI, like a button or a card, written as a JavaScript function or class.

### **What’s the difference between functional and class components?**  
Functional components are simple JavaScript functions, while class components are ES6 classes with lifecycle methods and state.

### **How do you create a functional component?**  
```jsx
function MyComponent() {
    return <div>Hello, React!</div>;
}
```

### **What is the purpose of `render()` in a class component?**  
It defines what the component will display on the screen.

### **What are props in React?**  
Props (short for properties) are read-only data passed from a parent component to a child component.

### **How do you pass props to a component?**  
```jsx
<MyComponent name="John" />
```

### **What is the virtual DOM?**  
The virtual DOM is a lightweight copy of the real DOM that React uses to optimize updates.

## Intermediate-Level Questions

### **What is state in React?**  
State is a built-in object in React components that holds dynamic data and triggers re-renders when updated.

### **How do you initialize state in a functional component?**  
Use the `useState` hook:  
```jsx
const [count, setCount] = useState(0);
```

### **What does the `useState` hook do?**  
It adds state to functional components and returns the current state value and a function to update it.

### **How do you update state?**  
Call the state updater function, e.g., `setCount(count + 1)`.

### **What is the `useEffect` hook used for?**  
It handles side effects in functional components, like data fetching or subscriptions.

### **How do you write a `useEffect` hook?**  
```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

### **What’s the role of the dependency array in `useEffect`?**  
It tells React when to re-run the effect; an empty array (`[]`) means it runs only once on mount.

### **What are event handlers in React?**  
Functions that respond to user actions, like clicks, e.g., `onClick={() => alert("Clicked")}`.

### **What is conditional rendering?**  
Displaying different UI based on conditions, e.g., `{isLoggedIn ? <UserDashboard /> : <Login />}`.

### **How do you loop through a list in React?**  
Use `map()`:  
```jsx
items.map(item => <li key={item.id}>{item.name}</li>)
```

## Advanced-Level Questions

### **What are React hooks?**  
Hooks are functions that let you use state and other React features in functional components.

### **What is the `useContext` hook?**  
It provides a way to access context (shared data) without prop drilling.

### **How do you create a custom hook?**  
Write a function that uses built-in hooks:  
```jsx
function useCustomHook() {
    const [value, setValue] = useState(0);
    return [value, setValue];
}
```

### **What is prop drilling?**  
Passing props through multiple layers of components to reach a deeply nested child.

### **How can you avoid prop drilling?**  
Use the Context API or state management libraries like Redux.

### **What is the Context API?**  
A React feature to share global data (e.g., themes) across components without passing props manually.

### **What is a higher-order component (HOC)?**  
An HOC is a function that takes a component and returns a new component with added functionality.

### **How do you write an HOC?**  
```jsx
function withLogging(WrappedComponent) {
    return function(props) {
    console.log("Rendering", props);
    return <WrappedComponent {...props} />;
    };
}
```

### **What is the purpose of `React.memo`?**  
It memoizes a component to prevent unnecessary re-renders if props don’t change.

### **What are controlled components?**  
Form elements whose value is controlled by React state, e.g., `<input value={value} onChange={handleChange} />`.

### **What are uncontrolled components?**  
Form elements that manage their own state via the DOM, accessed with refs.

### **What is the `useRef` hook?**  
It creates a mutable reference that persists across renders, often used to access DOM elements.

### **How do you optimize React performance?**  
Use `React.memo`, lazy loading, code splitting, and avoid unnecessary re-renders.

### **What is lazy loading in React?**  
Loading components only when needed using `React.lazy` and `Suspense`:  
```jsx
const LazyComponent = React.lazy(() => import('./Component'));
```

### **What is the purpose of keys in React lists?**  
Keys help React identify which items have changed, added, or removed in a list.

### **What is reconciliation in React?**  
The process where React compares the virtual DOM with the real DOM to determine updates.

### **What is a portal in React?**  
A way to render children into a DOM node outside the parent hierarchy, using `ReactDOM.createPortal`.

### **What is the `useReducer` hook?**  
A hook for managing complex state logic, similar to Redux reducers.

### **How do you handle forms in React?**  
Use controlled components with state or libraries like Formik for complex forms.

### **What is server-side rendering (SSR) in React?**  
Rendering React components on the server to send HTML to the client, improving SEO and performance.

### **What is the difference between SSR and static site generation (SSG)?**  
SSR renders pages on each request; SSG pre-renders pages at build time.

### **What is React Router?**  
A library for handling navigation and routing in React applications.

### **How do you fetch data in React?**  
Use `fetch` or `axios` inside `useEffect` or a custom hook.

### **What is Redux?**  
A state management library for predictable state updates across a React app.

### **What are React fragments?**  
A way to group elements without adding extra nodes to the DOM, e.g., `<><div>1</div><div>2</div></>`.

### **What is the difference between `useEffect` and `useLayoutEffect`?**  
`useEffect` runs after rendering; `useLayoutEffect` runs synchronously before painting.

### **How do you test React components?**  
Use tools like Jest and React Testing Library to write unit and integration tests.

### **What is a suspense component?**  
A feature to handle loading states, e.g., `<Suspense fallback={<Loading />}>`.

### **What are error boundaries?**  
Components that catch JavaScript errors in their child tree and display a fallback UI.

### **How do you implement an error boundary?**  
Use a class component with `componentDidCatch` and `static getDerivedStateFromError`.
