---
id: 723    
layout: posts
permalink: /quotations-tags
title: "Wisdom in Awareness Quotations - Topics"
author_profile: true
toc: true
toc_sticky: true
header:
  image: /assets/images/banners/wia-banner.jpg
excerpt: "These Qutations come from my reflection from the surface of lake called life. Great teachers like Mahatama Buddha, Lao Tzu, Adi Shankara, Ramakrushna Paramhamsa, Swami Vivekananda, Ramana Maharshi, J D Krishnamurthi, Osho, Sadguru, Swami Dayananda Sarawati, Swami Parmarthananda have shaped my mind and intellect"
sidebar:
   nav: "docs"
---

## Welcome to WIA Quotations!

{% include group-by-array collection=site.quotations field="tags" %}

{% for tag in group_names %}
{% assign posts = group_items[forloop.index0] %}

  <h1 id="{{ tag | slugify }}" class="archive__subtitle">{{ tag }}</h1>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}

