Here’s guidance on how to implement each of your requested features with the Docsy theme in Hugo, using shortcodes, partials, or customizations:

---

### ✅ 1. **Mermaid Enabled**

Docsy doesn't support Mermaid by default, but you can add it easily:

* Add Mermaid JS to your `head.html` partial or via a shortcode.
* Create a shortcode `layouts/shortcodes/mermaid.html`:

```html
<div class="mermaid">
{{ .Inner | safeHTML }}
</div>
```

* Then use it in Markdown:

```markdown
{{< mermaid >}}
graph TD;
  A-->B;
  A-->C;
{{< /mermaid >}}
```

---

### ✅ 2. **Social Sharing**

Docsy includes a social sharing partial:

* Enable `[params.ui.socialShare]` in your `config.toml`.
* You can also customize or add more platforms by editing the partial `themes/docsy/layouts/partials/social-share.html`.

---

### ✅ 3. **Accordion**

Docsy doesn't include an accordion by default.

* Copy one from another Hugo theme like [PaperMod](https://github.com/adityatelange/hugo-PaperMod) or create one.
* Example shortcode: `layouts/shortcodes/accordion.html`

```html
<details>
  <summary>{{ .Get "title" }}</summary>
  {{ .Inner | markdownify }}
</details>
```

Use it like:

```markdown
{{< accordion title="Click to expand" >}}
Hidden content here.
{{< /accordion >}}
```

---

### ✅ 4. **Giscus Comment**

Add [Giscus](https://giscus.app) via a partial:

* Create `layouts/partials/comments.html` with your Giscus code.
* Call it in your article layout:

```go-html-template
{{ partial "comments.html" . }}
```

---

### ✅ 5. **Gallery**

Use Hugo's `resources` or a custom shortcode.

* Consider using something like the [Gallery shortcode from Ananke theme](https://github.com/theNewDynamic/gohugo-theme-ananke).
* Or create one using a `range` over image paths.

---

### ✅ 6. **Section-Specific Taxonomy**

In `config.toml`, define taxonomies per section manually using naming patterns (e.g., `tags_blog`, `tags_projects`).

* Then filter and display using `.Site.Taxonomies.tags_blog` or `.Site.Taxonomies.tags_projects`.

---

### ✅ 7. **Card-Type Grid for Articles**

Create a shortcode or layout partial:

* Use Bootstrap/Tailwind-style cards.
* `layouts/partials/article-card.html`:

```html
<div class="card">
  <img src="{{ .Params.image }}" class="card-img-top" alt="{{ .Title }}">
  <div class="card-body">
    <h5 class="card-title">{{ .Title }}</h5>
    <p class="card-text">{{ .Summary }}</p>
    <a href="{{ .RelPermalink }}" class="btn btn-primary">Read More</a>
  </div>
</div>
```

* Use it with:

```go-html-template
{{ range where .Site.RegularPages "Section" "blog" }}
  {{ partial "article-card.html" . }}
{{ end }}
```

---

### ✅ 8. **Author Bio with Photo**

Docsy supports author metadata via frontmatter. For more customization:

* Add `author` fields to frontmatter.
* Create `layouts/partials/author-bio.html`:

```html
<div class="author-box">
  <img src="{{ .Params.author.photo }}" alt="{{ .Params.author.name }}">
  <h4>{{ .Params.author.name }}</h4>
  <p>{{ .Params.author.bio }}</p>
</div>
```

* Include it at the end of your article layout.

---

### 9. Section-specific articles with pagination

To show **section-specific articles with pagination** in Hugo (especially when using Docsy), follow these steps:

---

#### 1. **Create Section List Page**

In `layouts/section/<section>.html`, for example `layouts/section/blog.html`:

```go-html-template
{{ define "main" }}
  <h1>{{ .Title }}</h1>

  {{ $paginator := .Paginate .Pages }}
  {{ range $paginator.Pages }}
    <article>
      <h2><a href="{{ .RelPermalink }}">{{ .Title }}</a></h2>
      <p>{{ .Summary }}</p>
    </article>
  {{ end }}

  <nav>
    {{ template "_internal/pagination.html" . }}
  </nav>
{{ end }}
```

This ensures that **only the articles in the `blog` section** are listed and paginated.

---

#### 2. **Set Pagination Limit**

In `config.toml` (or `config.yaml/json`):

```toml
paginate = 10  # Number of articles per page
```

---

#### 3. **Visit the Section Page**

For example:
Your `content/blog/_index.md` will become the paginated list view:

```markdown
---
title: "Blog"
---
```

Access it at: `/blog/`, and Hugo will automatically handle `/blog/page/2/`, `/blog/page/3/`, etc.

---

#### 4. **Optional: Use a Custom Layout for Other Sections**

If you have multiple sections like `blog`, `news`, `case-studies`, create:

* `layouts/section/blog.html`
* `layouts/section/news.html`
* etc.

Each with similar logic but can have their own styling.

