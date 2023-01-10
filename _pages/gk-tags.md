---
id: 742    
layout: posts
permalink: /gk-tags
title: "General Knowledge Tag - Posts"
author_profile: true
toc: true
toc_sticky: true
header:
  image: /assets/images/General-Knowledge-Banner.jpg
sidebar:
   nav: "docs"
---

## Welcome to dasarpAI WIA Blogs - Posts!

{% include group-by-array collection=site.gk field="tags" %}

{% for tag in group_names %}
{% assign posts = group_items[forloop.index0] %}

  <h1 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h1>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}

