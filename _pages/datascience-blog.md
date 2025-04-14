---
id: 703    
title: Data Science Blog
layout: paginated_collection  # Use the new layout instead of collection
permalink: /dsblog
collection: dsblog
entries_layout: grid
author_profile: true
classes: wide
header:
  overlay_image: /assets/images/banners/DS-Banner.jpg
  overlay_filter: 0.5
  teaser: /assets/images/banners/DS-thumbnail.jpg
sidebar:
   nav: "docs"
sort_order: reverse
pagination:
  enabled: true
  collection: dsblog
  per_page: 18
  permalink: '/dsblog/page/:num/'
  title: 'Data Science Blog - Page :num'
  trail:
    before: 2
    after: 2
---

# Welcome to Data Science Blog!

<div class="items-per-page-container">
  <label for="per-page">Items per page:</label>
  <select id="per-page" onchange="changeItemsPerPage(this.value)">
    <option value="10" {% if paginator.per_page == 10 %}selected{% endif %}>10</option>
    <option value="25" {% if paginator.per_page == 25 %}selected{% endif %}>25</option>
    <option value="50" {% if paginator.per_page == 50 %}selected{% endif %}>50</option>
    <option value="100" {% if paginator.per_page == 100 %}selected{% endif %}>100</option>
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