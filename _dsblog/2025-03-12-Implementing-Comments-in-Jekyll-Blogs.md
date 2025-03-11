---
mathjax: true
id: 6238
title: "Implementing Comments in Jekyll Blogs"
date: 2025-03-12
permalink: /dsblog/implementing-comments-in-jekyll-blogs
tags:
  - Jekyll Comments
  - Adding Comments to Jekyll
  - Jekyll Blog Comments
  - Static Site Comments
  - Commenting System in Jekyll
categories:
  - dsblog
  - web-development

header:
  teaser: /assets/images/dspost/dsp6238-Implementing-Comments-in-Jekyll-Blogs.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn how to add comments to your Jekyll blog. This guide covers different options for adding comments to static sites and provides step-by-step instructions for implementing comments with Disqus."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
keywords:
  - "Jekyll blog comments"
  - "Adding comments to Jekyll"
  - "Commenting system in Jekyll"
  - "Static site comments"
---

![Implementing Comments in Jekyll Blogs](/assets/images/dspost/dsp6238-Implementing-Comments-in-Jekyll-Blogs.jpg)

## Disqus Comments
For this 
1. you need to create one account on Disqus and then create a new site. It will generate one shortname for you. 
2. In your _config.yml update comments.disqus.shortname
3. Add the script to your Jekyll post template*. Typically this in _layouts\default.html or some other layout file.

```html
div id="disqus_thread"></div>
<script>
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

    var disqus_config = function () {
    this.page.url = "{{ page.url | absolute_url }}";  // Use Jekyll's Liquid template to get the absolute URL
    this.page.identifier = "{{ page.id }}"; // Use Jekyll's Liquid template to get the unique identifier
    };

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://dasarpai-com.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```


## Staticman Comments
For all github based commenting you must create a seperate repo for comments. Otherwise at every new comments you site will be rebuilt and redployed.

Perhaps this is one of the most complex.

It allows adding dynamic comments to a static Jekyll site without requiring a database or server-side processing.

### Step 1: Set Up Staticman Instance
1. **Choose a Staticman deployment method:**
   - Use the public Staticman API (v3) - simplest but may have rate limits
   - Self-host Staticman on your own server or a platform like Heroku

2. **For self-hosting (recommended):**
   - Fork the Staticman repository from GitHub
   - Deploy to Heroku, Vercel, or your preferred hosting platform
   - Configure environment variables following the Staticman documentation

### Step 2: Connect Staticman to Your GitHub Repository
1. **Create a GitHub bot account** (optional but recommended for self-hosting)
2. **Add Staticman as a collaborator to your Jekyll repository**
   - Go to your repository → Settings → Collaborators → Add collaborator
   - Add either your Staticman bot or `staticmanapp` if using the public instance
3. **Accept the collaboration invitation** (important!)
   - If using the public instance: Send a GET request to `https://staticman3.herokuapp.com/v3/connect/GITHUB-USERNAME/REPO-NAME`

### Step 3: Configure Your Jekyll Site
1. **Create a staticman.yml file** in the root of your repository with configuration:

```yaml
comments:
  allowedFields: ["name", "email", "url", "message"]
  branch: "master" # or "main" depending on your repository's default branch
  commitMessage: "New comment by {fields.name}"
  filename: "comment-{@timestamp}"
  format: "yaml"
  moderation: true
  path: "_data/comments/{options.slug}"
  requiredFields: ["name", "message"]
  transforms:
    email: md5
```

2. **Create comment form** in your post layout (`_layouts/post.html`):

```html
<form method="POST" action="https://YOUR-STATICMAN-INSTANCE/v3/entry/github/USERNAME/REPO-NAME/BRANCH/comments">
  <input name="options[redirect]" type="hidden" value="https://your-site.com{{ page.url }}">
  <input name="options[slug]" type="hidden" value="{{ page.slug }}">
  
  <label for="name">Name</label>
  <input name="fields[name]" type="text" required>
  
  <label for="email">Email (optional, not displayed)</label>
  <input name="fields[email]" type="email">
  
  <label for="message">Comment</label>
  <textarea name="fields[message]" required></textarea>
  
  <button type="submit">Submit Comment</button>
</form>
```

### Step 4: Display Comments
1. **Create a comments include file** (`_includes/comments.html`):

```html
{% if site.data.comments[page.slug] %}
  <h3>Comments</h3>
  <ul class="comments">
  {% assign comments = site.data.comments[page.slug] | sort %}
  {% for comment in comments %}
    {% assign commentData = comment[1] %}
    <li>
      <div class="comment-author">
        <strong>{{ commentData.name }}</strong>
        <time datetime="{{ commentData.date | date_to_xmlschema }}">
          {{ commentData.date | date: "%B %d, %Y" }}
        </time>
      </div>
      <div class="comment-content">
        {{ commentData.message | markdownify }}
      </div>
    </li>
  {% endfor %}
  </ul>
{% endif %}
```

2. **Include comments in your post layout** (`_layouts/post.html`):

```html
<article class="post">
  <!-- Post content here -->
  
  {% include comments.html %}
  
  <!-- Comment form here -->
</article>
```

### Step 5: Handle Comment Moderation
1. **Set up GitHub notifications** to receive alerts for new pull requests
2. **Review and merge comment PRs** when they come in
3. **Alternatively, disable moderation** by setting `moderation: false` in staticman.yml

### Step 6: Add reCAPTCHA (Optional but Recommended)
1. **Register for reCAPTCHA** at Google's reCAPTCHA website
2. **Add reCAPTCHA configuration** to your staticman.yml:

```yaml
comments:
  # other config...
  reCaptcha:
    enabled: true
    siteKey: "YOUR-SITE-KEY"
    secret: "YOUR-ENCRYPTED-SECRET"
```

3. **Add reCAPTCHA to your form:**

```html
<div class="g-recaptcha" data-sitekey="YOUR-SITE-KEY"></div>
<script src="https://www.google.com/recaptcha/api.js"></script>
```

### Step 7: Testing and Troubleshooting
1. **Submit a test comment** and check your GitHub repository
2. **Verify comment storage** in the `_data/comments/` directory
3. **Check staticman logs** if you're self-hosting

### Step 8: Styling and Enhancement
1. **Add CSS to style** your comments and form
2. **Consider adding features** like:
   - Comment threading
   - Markdown support (already included in the template)
   - Email notifications for comment replies



## Utterances Comments
For all github based commenting you must create a seperate repo for comments. Otherwise at every new comments you site will be rebuilt and redployed.

1. **Create a new public GitHub repository** specifically for comments (e.g., `your-username/blog-comments`)

2. **Add the Utterances app to this repository**:
   - Go to https://github.com/apps/utterances
   - Click "Install"
   - Choose the repository you created for comments

3. **Add the script to your Jekyll site's post template** with your dedicated comments repo:

```html
<script src="https://utteranc.es/client.js"
        repo="your-username/blog-comments"
        issue-term="pathname"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
```

## Giscus with a Dedicated Comments Repository
For all github based commenting you must create a seperate repo for comments. Otherwise at every new comments you site will be rebuilt and redployed.

1. **Create a new public GitHub repository** for comments

2. **Enable Discussions in this repository**:
   - Go to your new repo settings
   - Scroll down to "Features" section
   - Check "Discussions"

3. **Install the Giscus app** on this repository:
   - Go to https://github.com/apps/giscus
   - Install it for your comments repository

4. **Generate your configuration**:
   - Visit https://giscus.app/
   - Fill in your repository details
   - Choose your preferred mapping (URL, pathname, etc.)
   - Select your theme and features
   - Copy the generated script

5. **Add the script to your Jekyll post template**:

This kind of script will be generated by step 4. This is already implemented in your _includes\comments-providers\giscus.html. But to implement it correctly you need to modify corresponding variables in the _config.yml file's section comments.giscus

```html
<script src="https://giscus.app/client.js"
        data-repo="your-username/blog-comments"
        data-repo-id="R_..."
        data-category="Announcements"
        data-category-id="DIC_..."
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
```

## Implenting reCaptcha on Statcman Comments 
This is required to prevent spam comments on your site. There are two types of reCaptcha available. One is reCaptcha v2 and the other is reCaptcha v3. For this you need to enable reCaptcha under Security category on Google Console.

https://console.cloud.google.com/security/recaptcha

1. You need to have a google account. Login into your google account.
2. Go to https://console.cloud.google.com/security/recaptcha
3. Create a project
4. Select that project and enable reCaptcha
5. go to https://console.cloud.google.com/security/recaptcha and click on "reCapatch Key: Create Key" and follow the instructions.
6. Copy the site key and secret key. For this you must complete a step "Verify the reCAPTCHA token"
7. Put the key and secret in your _config.yml file
8. Goto a file which is implementing your your comments, typically it is _includes\comments.html. Add the following code:

```html
{% if site.reCaptcha.siteKey %}
  <div class="form-group">
    <div class="g-recaptcha" data-sitekey="{{ site.reCaptcha.siteKey }}"></div>
  </div>
{% endif %}
{% if site.reCaptcha.siteKey %}<script async src="https://www.google.com/recaptcha/api.js"></script>{% endif %}
```


