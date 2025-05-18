---
id: 710    
layout: posts
permalink: /pmbok6-tags
title: "PMBOK6 Topics"
author_profile: true
toc: true
toc_sticky: true
header:
  image: "/assets/images/pmlogy/pmbok-general.jpg"
sidebar:
   nav: "docs"
---

## Project Management - PMBOK6 Topics!

{% include group-by-array collection=site.pmbok6 field="tags" %}

{% for tag in group_names %}
{% assign posts = group_items[forloop.index0] %}

  <h1 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h1>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}


