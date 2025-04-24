---
mathjax: true
id: 6168
title: "Understanding Jekyll Framework"
date: 2024-10-21
permalink: /dsblog/Understanding-Jekyll-Framework
tags: [Jekyll, "Static Site Generator", "Templating Language", "Liquid", "Collections", "Front Matter"]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6168-Understanding-Jekyll-Framework.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: ["jekyll tutorial", "jekyll static site generator", "jekyll liquid", "jekyll collections", "jekyll front matter", "jekyll github pages", "jekyll blog", "jekyll website", "jekyll theme", "jekyll plugin", "jekyll templates", "jekyll markdown", "jekyll seo", "jekyll metadata", "jekyll configuration"]

---

![Understanding Jekyll Framework](/assets/images/dspost/dsp6168-Understanding-Jekyll-Framework.jpg)

# Understanding Jekyll Framework

## What is Jekyll?

Jekyll is a popular static site generator that transforms plain text into static websites and blogs. It's built with Ruby and designed to be simple, flexible, and blog-aware. Key features of Jekyll include:

1. Simplicity: Jekyll doesn't require databases, making it easy to set up and maintain.
2. Static output: It generates static HTML files, resulting in fast-loading websites.
3. Markdown support: Content can be written in Markdown for easy formatting.
4. Templating: Uses Liquid templating language for dynamic content generation.
5. Blog-aware: Built-in support for blog-like features such as posts, categories, and permalinks.
6. GitHub Pages integration: Seamlessly works with GitHub Pages for free hosting.
7. Extensibility: Supports plugins and themes for added functionality and customization.

Jekyll is ideal for developers who want a lightweight, efficient solution for creating websites without the complexity of traditional content management systems.

## Understanding Key Concepts & Architecture

### 1. Front Matter:
   - The main content of the post/article is written in .md file. Therefore it is written in markdown language.
   - A block of metadata at the beginning of a Markdown (.md) file is front matter.
   - It is enclosed by triple dashes (---)
   - Contains key-value pairs that define variables and settings for the page
   - Used by Jekyll to process and render the file correctly
   - Can include predefined variables (e.g., layout, title, date) or custom variables
   - Allows for dynamic content generation and template selection
   - Typically written in YAML format, but can also be JSON or TOML
   Example:
   ```yaml
   ---
   layout: post
   title: "My First Post"
   date: 2023-05-20
   author: "John Doe"
   categories: [blog, technology]
   tags: [jekyll, web development]
   ---
   ```
   - Front matter is separated from the main Markdown content of the file
   - The main content follows the front matter and is written in Markdown
   - Jekyll processes both the front matter and the Markdown content to generate the final HTML page
   - Front matter is optional but highly useful for organizing and customizing content in Jekyll sites

### 2. Layouts:
   - Layouts are template in HTML format, they are kept in _layouts folder
   - There are different kind of pages and each template define the structure of pages
   - Layouts Use Liquid tags to insert content/text.

### 3. Liquid:
   - Liquid is a Templating language of Jekyll, it is used to insert dynamic content in the layout.
   Example:
   ```liquid
   {{ page.title }}
   {% for post in site.posts %}
     <h2>{{ post.title }}</h2>
   {% endfor %}
   ```

### 4. Collections:
   - Collections are groups of related content. 
   - All the collections are defined in _config.yml file.
   - Each collection is stored in a separate folder, for example, _posts for blog posts, __programming for programming realated posts.

### 5. _config.yml:
   - Site-wide configuration file
   - Defines global variables and settings

### 6. _site folder:
   - This folder is generated when we build jekyll website. 
   - It contains the generated static site with html files.
   - Created when running `jekyll build` command.

### 7. Plugins:
   - Ruby gems that extend Jekyll's functionality
   - They are Added in two files : _config.yml and Gemfile

### 8. Markdown:
   - Used for writing content
   - Converted to HTML during build process

## What is the difference between Jekyll and other static site generators like Hugo, Gatsby, etc?

Jekyll is a static site generator that is built with Ruby and designed to be simple, flexible, and blog-aware. It's a popular choice for creating blogs and websites with a focus on content creation and customization.

Hugo, on the other hand, is a static site generator that is built with Go and is known for its performance and speed. It's designed to be a more efficient alternative to Jekyll for large sites with many pages.

Gatsby is a modern static site generator that is built with React and is designed for building fast, modern websites. It's known for its use of GraphQL for data querying and its focus on performance and speed.

## Can you tell me database requirements for Jekyll, Hugo and Gatsby ?

Jekyll, Hugo and Gatsby does not require a database. they are static site generator, meaning they can generates static HTML, CSS, and JavaScript files that can be served as a static website.

## Can I host Jekyll, Hugo and Gatsby sites on GitHub Pages?

Yes, you can host Jekyll, Hugo and Gatsby sites on GitHub Pages. GitHub Pages is a service that allows you to host your static websites for free.

## Can I host Jekyll, Hugo and Gatsby sites on other hosting services like Vercel, Netlify, etc?

Yes, you can host Jekyll, Hugo and Gatsby sites on other hosting services like Vercel, Netlify, etc.

## Apart from Github, Netlify, Vercel, what are other free hosting services for Jekyll, Hugo and Gatsby sites?

There are other free hosting services for Jekyll, Hugo and Gatsby sites like:

1. Netlify
2. Vercel
3. Cloudflare Pages
4. Render
5. Surge


## Can I integrate Google Analytics with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate Google Analytics with Jekyll, Hugo and Gatsby sites.

## Can I integrate Google Ads with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate Google Ads with Jekyll, Hugo and Gatsby sites.

## Can I integrate payment gateway with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate payment gateway with Jekyll, Hugo and Gatsby sites.

## Can I integrate social media with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate social media with Jekyll, Hugo and Gatsby sites.

## Can I integrate email marketing with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate email marketing with Jekyll, Hugo and Gatsby sites.

## Can I integrate chatbot with Jekyll, Hugo and Gatsby sites?

Yes, you can integrate chatbot with Jekyll, Hugo and Gatsby sites.

## What is the difference between Collection, Categories and Tags in Jekyll?

Collection:
1. Collections allow you to manage and organize specific types of content with defined behavior (e.g., custom permalink structures). Once defined, their structure is fixed unless modified in the configuration.
2. It is hard-coded hierarchical categorization of the content/post/articles. 
3. Collection is defined in _config.yml file.
4. Collection is stored in a separate folder, for example, _posts for blog posts, __programming for programming realated posts.

Categories:
1. Categories in Jekyll can be thought of as a soft-coded hierarchy because they are flexible and can be applied to posts dynamically. You can assign categories to posts or collection items in their front matter, and they can also be nested (i.e., hierarchical) by using a list.
2. Categories allow for a loose organization of content and can represent broader sections or topics, but the structure isn’t as rigid or predefined as collections.

Tags:
1. Tags are a flat structure because they do not have any hierarchy or nesting. They are used to label specific aspects or topics related to a piece of content, without any parent-child relationships between tags.
2. Tags help in fine-grained classification of content but are not used to create navigational hierarchies like collections or categories.

## What are popular themes for Jekyll?

Here are some popular themes for Jekyll with their respective URLs:

1. [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
2. [So Simple](https://github.com/mmistakes/so-simple-theme)
3. [Lanyon](https://github.com/poole/lanyon)
4. [Jekyll Now](https://github.com/barryclark/jekyll-now)
5. [Hyde](https://github.com/poole/hyde)
6. [Cactus](https://github.com/koenbok/Cactus)
7. [H2O](https://github.com/kaeyleo/jekyll-theme-H2O)

## What are most useful plugins for Jekyll which works with Minimal Mistakes theme?

1. [jekyll-feed](https://github.com/jekyll/jekyll-feed) - Generates an Atom feed of your Jekyll posts.
2. [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag) - Adds metadata tags to your Jekyll site for better SEO.
3. [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) - Generates a sitemap.xml file for your Jekyll site.
4. [jekyll-paginate](https://github.com/jekyll/jekyll-paginate) - Adds pagination to your Jekyll site.
5. [jekyll-archives](https://github.com/jekyll/jekyll-archives) - Generates archive pages for your Jekyll site.
6. [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) - Allows you to specify multiple URLs for a page, which can be useful for SEO.
7. [jekyll-include-cache](https://github.com/benbalter/jekyll-include-cache) - Caches the results of included files to improve performance.



