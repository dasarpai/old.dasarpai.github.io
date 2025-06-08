---
mathjax: true
id: 6274
title: "A Developer's Guide to Templating Engines"
date: 2025-05-09
permalink: /dsblog/A-Developers-Guide-to-Templating-Engines
tags: [Templating Engines, Jekyll, Liquid, Hugo, Go Templates, Web Development]
categories: [Web Development]
header:
  teaser: /assets/images/dspost/dsp6274-A-Developers-Guide-to-Templating-Engines.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Dive into the world of templating engines, including Liquid, Go templates, and more. Learn how to use them for static site generation, web development, and content management."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
auto_number_headings: false
keywords: [Templating Engines, Jekyll, Liquid, Hugo, Go Templates, Web Development, Content Management, Static Site Generation]
---

## What is a Templating Engine?

A **templating engine** is a system used to generate dynamic HTML pages by combining a template with data. It's used in static site generators (SSGs), web frameworks, and CMSs.

Templating engines **can be confusing**, especially when switching between site generators like **Jekyll** (Liquid) and **Hugo** (Go templates).


## 🔍 Common Templating Engines (and who uses them)

| Templating Engine | Syntax Example                         | Used By                        | Language          |
| ----------------- | -------------------------------------- | ------------------------------ | ----------------- |
| **Liquid**        | `{\{ variable }\}` / `{\% raw %}{\% if %}{\% endraw %}`          | **Jekyll**, Shopify            | Ruby              |
| **Go Templates**  | `{\{ .Variable }\}` / `{\% raw %}{\{ if . }\} {\% endraw %}`       | **Hugo**                       | Go                |
| **Handlebars**    | `{\{variable}\}` / `{\{#if}\}`             | Ember.js, Ghost, many JS tools | JavaScript        |
| **EJS**           | `&lt;%= variable %&gt;` / `&lt;% if (...) { %&gt;` | Express.js (Node)              | JavaScript        |
| **Mustache**      | `{\{variable}\}`                         | Many static generators         | Language-agnostic |
| **Twig**          | `{\{ variable }\}` / `{\% raw %}{\% if %}{\% endraw %}`          | Symfony (PHP), Grav CMS        | PHP               |
| **Jinja2**        | `{\{ variable }\}` / `{\% raw %}{\% if %} {\% endraw %}`          | Flask (Python)                 | Python            |
| **Nunjucks**      | `{\{ variable }\}` / `{\% raw %}{\% if %} {\% endraw %}`          | Eleventy (JS SSG)              | JavaScript        |

---

## 💡 Key Differences Between Hugo (Go Templates) and Jekyll (Liquid)

| Feature               | Jekyll (Liquid)                | Hugo (Go Templates)                 |
| --------------------- | ------------------------------ | ----------------------------------- |
| **Tag syntax**        | `{\{ variable }\}` / `{\% ... %}` | `{\{ .Variable }\}` / `{\{ if ... }\}`  |
| **Loops**             | `{\% for item in list %}`       | `{\{ range .List }\}`                 |
| **Conditions**        | `{\% if condition %}`           | `{\{ if .Condition }\}`               |
| **Partial templates** | `{\% include 'file.html' %}`    | `{\{ partial "file.html" . }\}`       |
| **Data scope**        | Intuitive (like Ruby)          | Very strict (`.` = current context) |
| **Error messages**    | Friendly-ish                   | Sometimes cryptic                   |
| **Extensibility**     | Easy with plugins              | Very fast, limited customization    |
| **Performance**       | Slower for big sites           | Blazing fast                        |

---

## 🧠 Why It Feels Confusing

* `{\{ ... }\}` is common across many engines but means different things.
* In **Liquid**, `{\{ }\}` is for output; `{\% \%}` is for logic.
* In **Hugo**, everything is in `{\{ }\}` and the dot (`.`) matters a lot (`.Title`, `.Params`, etc.).
* Hugo doesn’t use `{\% raw \%-}` — that’s Liquid-only. (remove -)
* Each engine has its quirks and idioms — no true standard.

---

## 🧰 When to Use What?

| Use Case                                 | Recommended Engine                            |
| ---------------------------------------- | --------------------------------------------- |
| **Simple blog, Markdown-focused**        | Jekyll (Liquid) or Hugo                       |
| **Fast builds with complex structure**   | Hugo (Go Templates)                           |
| **Tight integration with JS frameworks** | Nunjucks, Handlebars                          |
| **Backend web frameworks**               | Jinja2 (Flask), Twig (Symfony), EJS (Express) |
| **Cross-language portability**           | Mustache                                      |

---

## 🔄 Migrating Tips

When moving between engines (e.g., Jekyll → Hugo):

* Strip all `{\% raw %}`, `{\% endraw %}`
* Replace `{\% include %}` with `{\{ partial }\}`
* Replace `{\% for post in site.posts %}` with `{\{ range .Site.RegularPages }\}` or similar
* Be very careful with `.`, `.Params`, and context in Hugo
