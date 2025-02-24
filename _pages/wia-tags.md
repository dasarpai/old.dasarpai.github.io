---
id: 739    
layout: posts
permalink: /wia-tags
title: "Wisdom in Awareness Tag - Posts"
author_profile: true
toc: true
toc_sticky: true
header:
  overlay_image: /assets/images/banners/wia-banner.jpg
  overlay_filter: 0 # same as adding an opacity of 0.5 to a black background
sidebar:
   nav: "docs"
---

## Welcome to dasarpAI WIA Blogs - Posts!

{% include group-by-array collection=site.wiapost field="tags" %}

{% for tag in group_names %}
{% assign posts = group_items[forloop.index0] %}

  <h1 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h1>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}

