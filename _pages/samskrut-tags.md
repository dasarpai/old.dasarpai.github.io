---
id: 723    
layout: posts
permalink: /samskrutyatra-tags
title: "Samskrut Yatra Topics"
author_profile: true
toc: true
toc_sticky: true
header:
  image: /assets/images/samskrut/SanskritYatra-Sloka.jpg
sidebar:
   nav: "docs"
---

## Welcome to Samskrut Yatra Blogs - Posts!

{% include group-by-array collection=site.samskrut field="tags" %}

{% for tag in group_names %}
{% assign posts = group_items[forloop.index0] %}

  <h1 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h1>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}

