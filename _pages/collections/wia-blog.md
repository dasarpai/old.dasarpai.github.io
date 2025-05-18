---
id: 737    
title: Wisdom in Awareness Blog
layout: paginated_collection
permalink: /wiaposts
collection: wiaposts
entries_layout: grid
author_profile: true
classes: wide
header:
  overlay_image: /assets/images/banners/wia-banner.jpg
  overlay_filter: 0 # same as adding an opacity of 0.5 to a black background
  teaser: /assets/images/banners/wia-thumbnail.jpg
sidebar:
   nav: "docs"
sort_order : reverse   
pagination:
  enabled: true
  collection: wiaposts
  per_page: 18
  permalink: '/wiaposts/page/:num/'
  title: 'Wisdom in Awareness Blog - Page :num'
  trail:
    before: 2
    after: 2 
---

# Welcome to WIA Posts - Spritual Drops!

## A brief [introduction to my spiritual journey](/wia-home) and introduction to this deeper dimensions of life.


<div class="items-per-page-container">
  <label for="per-page">Items per page:</label>
  <select id="per-page" onchange="changeItemsPerPage(this.value)">
    <option value="18" {% if paginator.per_page == 18 %}selected{% endif %}>18</option>
    <option value="36" {% if paginator.per_page == 36 %}selected{% endif %}>36</option>
    <option value="54" {% if paginator.per_page == 54 %}selected{% endif %}>54</option>
    <option value="72" {% if paginator.per_page == 72 %}selected{% endif %}>72</option>
  </select>
</div>

<script>
function changeItemsPerPage(value) {
  localStorage.setItem('itemsPerPage', value);
  
  // Build new URL with per_page parameter
  let url = new URL(window.location.href);
  url.searchParams.set('per_page', value);
  
  // Reset to page 1 when changing items per page
  let pathParts = window.location.pathname.split('/');
  let pageIndex = pathParts.indexOf('page');
  
  if (pageIndex !== -1 && pageIndex < pathParts.length - 1) {
    // We're on a page like /dsblog/page/2/ - reset to page 1
    pathParts.splice(pageIndex + 1, 1, '1');
    url.pathname = pathParts.join('/');
  }
  
  window.location.href = url.toString();
}

document.addEventListener('DOMContentLoaded', function() {
  const savedValue = localStorage.getItem('itemsPerPage');
  const urlParams = new URLSearchParams(window.location.search);
  const urlPerPage = urlParams.get('per_page');
  
  if (urlPerPage) {
    document.getElementById('per-page').value = urlPerPage;
  } else if (savedValue) {
    document.getElementById('per-page').value = savedValue;
    
    // Apply the saved value by redirecting
    if (savedValue !== '25') { // Only redirect if different from default
      changeItemsPerPage(savedValue);
    }
  }
});
</script>