---
mathjax: true
id: 6270
title: Exploring go Hugo Framework for SSG
date: 2025-05-05
permalink: /dsblog/exploring-go-hugo-framework-par1
tags:
  - Hugo
  - Go
  - SSG
  - Static Site Generator
  - Web Development
categories:
  - dsblog
  - web-development
header:
  teaser: /assets/images/dspost/dsp6270-exploring-go-hugo-framework-par1.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: Learn about the Hugo framework, a fast and flexible open-source static site generator written in Go. This article explores its features, project structure, and deployment options.
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 3
comments: true
auto_number_headings: false
keywords: [Hugo Framework, Go Hugo, Static Site Generator, SSG, Web Development, Go Language, Website Generation]
---



![](/assets/images/dspost/dsp6270-exploring-go-hugo-framework-par1.jpg)

# Exploring go Hugo Framework for SSG

Hugo is a fast and flexible open-source static site generator written in Go, designed to help developers build modern websites quickly without relying on databases or heavy server-side frameworks. It uses simple Markdown files for content, supports powerful templating and theming systems, and can generate entire websites in milliseconds. With features like built-in live reload, content organization, internationalization, and Hugo Modules for reusable components, it's ideal for blogs, documentation sites, portfolios, and even complex multi-language websites. Hugo integrates easily with platforms like GitHub Pages and Netlify, making it a popular choice for developers seeking performance, simplicity, and portability in their web projects.

Would you like a version of this tailored for use in a README or presentation slide?


## Hugo Project Structure with Hugo Modules

Assume you have a site for a project like Agones, and your directory looks like this:

```
agones/
├── site/   <- Your Hugo site root
│   ├── config.toml
│   ├── content/
│   ├── layouts/
│   ├── static/
│   ├── themes/   <- Can be empty if using Hugo Modules
│   └── go.mod    <- Created by `hugo mod init`
├── build/
├── cmd/
├── pkg/
└── README.md
```

After running:

```bash
cd agones/site
hugo mod init github.com/googleforgames/agones/site
```

You’ll get this inside `site/go.mod`:

```go
module github.com/googleforgames/agones/site

go 1.20
```


## What is purpose of cmd and pkg folder?
These are conventions in Go projects, not specific to Hugo, but useful when your Hugo site is part of a larger Go monorepo, like agones.

cmd/:
Contains entry points (main packages) for Go binaries. Each subfolder usually builds to a separate binary.
Example: cmd/controller/, cmd/allocator/

pkg/:
Contains reusable Go packages that can be imported by cmd/ or other modules.
Example: pkg/apis/, pkg/util/

🟡 Note: You typically don't need these unless you're doing Go development in parallel with the Hugo site (as in the case of Agones).


## Should I run `go` build from site directory?
No, not for building the Hugo site.

go build is for building Go binaries — not for generating static websites.

✅ To build the Hugo site, run:

hugo   
(from the site/ directory)

This will use config.toml and the content/, layouts/, static/ folders to generate the final website.


## Where the build process the put the output?
By default, Hugo generates your static website into a folder named:


public/   
So after running:

hugo   
You'll get:


site/  
├── public/  
│   ├── index.html  
│   ├── css/  
│   ├── js/  
│   ├── ...  

You can change the output directory like this:  

hugo -d ../build_output/


## Can hugo website be published on github?

Yes! You can publish it on GitHub Pages:

**Option A: GitHub Pages (User or Project)**

Generate the site:

hugo  
Push the contents of the public/ folder to the gh-pages branch (or main, if using GitHub Pages defaults).

In GitHub:

Go to Settings > Pages

Select source as gh-pages branch (or main), and directory as / (root)

🔗 Tip: You can use GitHub Actions to automate the deployment.


## What needs to be done to publish the website on Netlify?
Netlify makes Hugo deployment very easy:

Steps:
- Push your Hugo site to a GitHub repo.
- Go to Netlify and:
	- Click "Add new site"
	- Choose "Import from GitHub"
	- Select your Hugo repo
- In build settings:
	- Build command: hugo
	- Publish directory: public
- Click Deploy site
- Netlify will:
	- Clone your repo
	- Run the build
	- Serve your site with HTTPS, CDN, and more

🎯 Bonus: You can set environment variables like HUGO_VERSION if needed.


## How to manage different branch for publishing website?
When working on Hugo project like 'Agones' and I push my project into github then it will go into main branch. Should I push public folder also? How to make sure that content of a specific folder (public) go to gh-branch and nothing else.

### Should you push the public/ folder to the main branch?
No, you should not push the public/ folder to the main branch.

main branch should only contain your Hugo source files (content, config, layouts, etc.)

The public/ folder is the generated output and should go to a separate branch, typically gh-pages, for GitHub Pages to serve.

### How to push only the public/ folder to the gh-pages branch?
You can automate this with a few methods. Below is the most straightforward manual + scriptable approach:

**Method 1: Manual (once or occasionally)**  
From your site/ directory (after running hugo):

Navigate to the public folder   
cd public

Initialize a separate Git repo in public/   
git init   
git remote add origin https://github.com/your-username/[your-repo].git

Switch to the gh-pages branch   
git checkout -b gh-pages

Commit and push the contents  
git add .  
git commit -m "Deploy site to GitHub Pages"  
git push --force origin gh-pages  

✅ This will push only the contents of public/ to gh-pages.

**Method 2: Use a Deployment Script**  
You can automate it using a shell script like this:

Build the site   
hugo

**Go to public folder**   
cd public

**Init a temporary repo**   
git init
git remote add origin git@github.com:[your-username]/[your-repo].git
git checkout -b gh-pages

**Commit and force push**
git add .  
git commit -m "Publishing to gh-pages"  
git push --force origin gh-pages  

**Cleanup**
cd ..
rm -rf public/.git
Make sure it’s executable:


**Create a script .github/workflows/deploy.yml**  
```
name: Deploy Hugo site to GitHub Pages

on:
  push:
    branches:
    - main  # Trigger on push to main branch

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repo
    uses: actions/checkout@v3

    - name: Setup Hugo
    uses: peaceiris/actions-hugo@v2
    with:
    hugo-version: '0.125.4'  # Update to your required version

    - name: Build site
    run: hugo --minify

    - name: Deploy to GitHub Pages
    uses: peaceiris/actions-gh-pages@v3
    with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./public
    publish_branch: gh-pages

```

chmod +x deploy.sh

Then run:

./deploy.sh


## 🧩 Why Use Hugo Modules?

Instead of manually downloading or including themes and components, you can:

### ✅ Import a theme like this in `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/theNewDynamic/gohugo-theme-ananke"
```

### ✅ Hugo will download the theme as a Go module:

```bash
hugo mod get
```

No more git submodules or manual copying! It's clean, version-controlled, and reproducible.

---

### 🔁 Updating Modules

You can later run:

```bash
hugo mod tidy   # Clean up unused modules
hugo mod get -u   # Update all modules
```


## What are frequently used hugo commands?

Here are the **most frequently used Hugo commands**, grouped by purpose, to help you manage your site efficiently:

---

### 🚀 Development & Preview

| Command   | Description    |
| --- | --- |
| `hugo server`   | Starts a local development server at `http://localhost:1313`. Watches for changes. |
| `hugo server -D`    | Also includes **draft** content. Useful when working on unpublished posts.   |
| `hugo server --disableFastRender` | Reloads full site on changes; helpful if partial rebuilds misbehave.   |

---

### 🏗️ Build & Deployment

| Command    | Description    |
| --- | --- |
| `hugo`   | Builds the site into the `public/` folder. |
| `hugo -D`    | Includes drafts during build.    |
| `hugo -d ../output-folder` | Changes the default output directory.    |
| `hugo --minify`    | Minifies HTML/CSS/JS for production.   |

---

### 🧰 Module Commands (for Hugo Modules)

| Command   | Description   |
| --- | --- |
| `hugo mod init <module-path>` | Initializes the site as a Hugo module.  |
| `hugo mod get`    | Downloads all module dependencies.    |
| `hugo mod tidy`   | Cleans up unused modules from `go.mod`. |
| `hugo mod graph`    | Visualizes module dependencies.   |

---

### 📝 Content Creation

| Command   | Description    |
| --- | --- |
| `hugo new posts/my-post.md`   | Creates a new content file with front matter.    |
| `hugo new content/about/index.md` | Creates a new page bundle (useful for sections). |

---

### 🧪 Troubleshooting & Utilities

| Command    | Description   |
| --- | --- |
| `hugo config`  | Shows merged config from all files and environments.    |
| `hugo env`   | Shows Hugo version, OS, module path, etc. Useful for debugging. |
| `hugo version` | Displays installed Hugo version.    |

---



## What does this command does

```bash
hugo mod init github.com/googleforgames/agones/site
```

initializes a **Hugo Module** in your current Hugo site directory with the specified module path:
`github.com/googleforgames/agones/site`.

Here's a breakdown of what it does:

### ✅ What It Does:

1. **Initializes Hugo Modules** in the current site folder (if not already initialized).
2. **Creates a `go.mod` file** with the module path `github.com/googleforgames/agones/site`, used to manage Hugo modules with Go Modules under the hood.
3. **Prepares the site for using themes or components as Hugo modules**, which can then be fetched, versioned, and updated using Go tooling (`hugo mod get`, etc.).
4. This setup is useful especially when:

   * You're working on a **Hugo site that's part of a larger GitHub repo** (like Agones).
   * You want to **import themes or shared components** via Go module paths instead of submodules or manual copying.

---

### 📁 Example Output:

It will generate a `go.mod` file like:

```go
module github.com/googleforgames/agones/site

go 1.20

require (
    github.com/some/theme v1.0.0
)
```

This tells Hugo and Go which module your site represents and what dependencies it may have.




## What are pupular hugo modules? where are stored in directory structure? How to use them?
Hugo Modules are a powerful way to **reuse components like themes, partials, shortcodes, or entire content structures** across multiple Hugo projects.

Hugo Modules are a **Go Modules-based system** that allows you to:

* Import **themes**, **partials**, **shortcodes**, and **assets** as dependencies.
* Version and manage them cleanly.
* Share and reuse code easily across sites.

They're declared in `config.toml` (or `config.yaml`) and managed via `go.mod`.

---

### 🔥 Popular Hugo Modules

Here are some widely used Hugo modules:

| Module   | Description    |
| --- | --- |
| [`github.com/theNewDynamic/gohugo-theme-ananke`](https://github.com/theNewDynamic/gohugo-theme-ananke) | A popular starter theme, good for beginners.   |
| [`github.com/panr/hugo-theme-terminal`](https://github.com/panr/hugo-theme-terminal)   | A terminal-style blog theme.   |
| [`github.com/dzello/reveal-hugo`](https://github.com/dzello/reveal-hugo)   | A theme/module for creating slides with Reveal.js. |
| [`github.com/luizdepra/hugo-coder`](https://github.com/luizdepra/hugo-coder)   | Clean and minimal theme for developers.    |
| [`github.com/alex-shpak/hugo-book`](https://github.com/alex-shpak/hugo-book)   | A theme used for documentation sites.    |

---

### 📁 Where Are Hugo Modules Stored?

Hugo modules are not stored directly inside your project unless you **vendor** them.

They are:

* Downloaded to your Go module cache (usually `~/go/pkg/mod/`)
* **Mounted virtually** into your site at build/runtime

But if you vendor them (for reproducibility):

```bash
hugo mod vendor
```

Then they go into:

```
/my-hugo-site/
├── themes/
│   └── <module contents>
├── go.mod
├── go.sum
```

---

### ⚙️ How to Use Hugo Modules?

**🛠️ Step-by-Step**

1. **Initialize module (if not already):**

```bash
hugo mod init github.com/yourname/yoursite
```

2. **Add a theme or module as a dependency:**

```toml
# config.toml
theme = ["github.com/theNewDynamic/gohugo-theme-ananke"]
```

Or in `config.yaml`:

```yaml
theme:
  - github.com/theNewDynamic/gohugo-theme-ananke
```

3. **(Optional) Mount parts of the module:**

```toml
[module]
  [[module.mounts]]
    source = "assets"
    target = "assets"

  [[module.mounts]]
    source = "layouts"
    target = "layouts"
```

4. **Run Hugo:**

```bash
hugo server
```

If everything is correct, Hugo fetches and mounts the module.

5. **(Optional) Vendor your modules:**

```bash
hugo mod vendor
```

This copies the module code into `themes/` and avoids downloading on every build.

---

### 📌 Useful Hugo Module Commands

```bash
hugo mod init github.com/your/module   # Initialize
hugo mod get   # Fetch new deps
hugo mod tidy    # Clean unused deps
hugo mod vendor    # Copy modules into /themes
hugo mod graph   # Show dependency tree
```

## What is hugo pipeline and how to use this?
In Hugo, the **Hugo Pipes** (or Hugo Asset Pipeline) refers to a built-in feature for processing and optimizing assets like CSS, JavaScript, and images during site generation. It’s particularly useful when you're working with themes like **Docsy** or building custom layouts that need dynamic asset handling.

---

### 🔧 What Hugo Pipes Can Do

Hugo Pipes can:

1. **Concatenate files** (e.g., bundle multiple CSS/JS files).
2. **Minify** CSS/JS to reduce file size.
3. **Fingerprint** files (hashing to enable cache busting).
4. **Compile Sass/SCSS** to CSS.
5. **Process images** (resize, crop, convert format).

---

### ⚙️ Example Use in `baseof.html` (SCSS pipeline)

Here’s a common Hugo Pipes pipeline used in a theme like **Docsy**:

```gohtml
{{ $options := dict "targetPath" "css/styles.css" }}
{{ $styles := resources.Get "scss/styles.scss" | toCSS $options | minify | fingerprint }}
<link rel="stylesheet" href="{{ $styles.RelPermalink }}" integrity="{{ $styles.Data.Integrity }}">
```

**What this does:**

* `resources.Get` loads the SCSS file.
* `toCSS` compiles SCSS to CSS.
* `minify` reduces CSS file size.
* `fingerprint` adds a content hash for cache busting.
* `RelPermalink` creates the final link.
* `integrity` supports Subresource Integrity (SRI).

---

### 🔁 JavaScript Pipeline Example

```gohtml
{{ $js := resources.Get "js/main.js" | minify | fingerprint }}
<script src="{{ $js.RelPermalink }}" integrity="{{ $js.Data.Integrity }}"></script>
```

---

### 🧪 Image Processing Example

```gohtml
{{ $image := resources.Get "images/example.jpg" | images.Resize "600x" }}
<img src="{{ $image.RelPermalink }}" width="{{ $image.Width }}" height="{{ $image.Height }}">
```

---

### ✅ Requirements

* **Hugo Extended** version (needed for SCSS support).
* Your assets should be in the `assets/` directory (not `static/`).
* Place these pipelines inside your `layouts/_default/baseof.html` or any other template file.

---

### 📁 Folder Structure for Hugo Pipes

```
my-site/
├── assets/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
├── layouts/
│   └── _default/
│       └── baseof.html
```

---



## What is purpose of static and assets folder in hugo project?


### ✅ **Hugo Assets vs Static Folder — In a Nutshell**

**🗂️ `assets/` folder**

* **Use it when you want Hugo to process the files** during the build (via Hugo Pipes).
* Examples:

  * Compile SCSS to CSS
  * Minify JavaScript
  * Resize or optimize images
  * Fingerprint files for cache busting
* These files are **not directly accessible** via URL.
* The transformed output is **automatically placed into the `public/` folder** during build.

**📁 `static/` folder**

* **Use it for raw files** that don’t need processing.
* Examples:

  * Plain images (`.jpg`, `.png`)
  * Ready-made CSS/JS files
  * Fonts or downloadable PDFs
* These files are **copied as-is to the `public/` folder** and are directly accessible via `/filename.ext`.
* Faster build time, since Hugo doesn’t touch them.

---

## 🚀 Rule of Thumb

> 🧠 **“If transformation is needed → `assets/`. If it’s ready to serve → `static/`.”**



## What format is better hugo.toml or hugo.yaml?
Both `config.toml` and `config.yaml` work equally well in Hugo — **the choice depends on your preference** or your team's conventions. Here's a comparison to help you decide:

---

### ✅ TOML (default & popular)

**Pros:**

* **Default** in Hugo documentation and starter templates.
* Simple, clean syntax for small to medium configs.
* Better for nested tables (hierarchical data).

**Example:**

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Hugo Site"

[params]
  author = "Alice"
  description = "A cool site"
```

---

### ✅ YAML (more common in DevOps)

**Pros:**

* Familiar to people from DevOps, CI/CD, or Kubernetes backgrounds.
* Great for complex structured data.
* Many IDEs support auto-completion and linting.

**Example:**

```yaml
baseURL: "https://example.com"
languageCode: "en-us"
title: "My Hugo Site"

params:
  author: "Alice"
  description: "A cool site"
```

### Summary

| Feature         | TOML                 | YAML             |
| --------------- | -------------------- | ---------------- |
| Hugo default    | ✅ Yes                | ❌ No             |
| Readability     | ✅ Simple             | ✅ Human-friendly |
| Best for        | Hugo, simple configs | Complex nesting  |
| Community usage | Common in Hugo       | Common in DevOps |



**🔄 You can also use JSON**

Hugo also supports `config.json`, but it’s rarely used due to verbosity.


**💡 Tip:** If you're using multiple environments (`config.production.toml`, etc.), stick with one format for consistency.
