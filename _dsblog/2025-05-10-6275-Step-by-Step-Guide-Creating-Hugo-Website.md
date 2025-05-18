# 🛠️ Building a Website from Any Hugo Template (Using Docsy as Example)

Creating a website with Hugo can be simple — but using themes like **Docsy**, **Blowfish**, or **PaperMod** often adds complexity due to things like modular configuration, asset pipelines, and Tailwind or PostCSS integrations. This article walks you through everything you need to get started using any Hugo theme, with **Docsy** as the working example.

---

## 📌 Prerequisites

* [Install Hugo Extended](https://gohugo.io/getting-started/installing/) (required for themes like Docsy)
* Git
* Node.js (for themes using PostCSS/Tailwind)
* A code editor (e.g., VS Code)

---

## 🔧 Step 1: Create a New Hugo Site

```bash
hugo new site my-docsy-site
cd my-docsy-site
```

---

## 📥 Step 2: Add the Theme

We'll vendorize the theme (clone into `themes/`):

```bash
git init
git submodule add https://github.com/google/docsy.git themes/docsy
```

This keeps the theme tracked as a submodule, so you can pull updates easily.

---

## 🧩 Step 3: Add the Example Site

Docsy provides an example under `exampleSite/`. Copy its contents into your project:

```bash
cp -r themes/docsy/exampleSite/* .
```

Now your project has everything needed: content, config, assets, etc.

---

## 🗂️ Step 4: Understand the Folder Structure

| Folder             | Purpose                            |
| ------------------ | ---------------------------------- |
| `content/`         | Markdown content                   |
| `layouts/`         | Custom templates (overrides)       |
| `static/`          | Static files (images, JS, CSS)     |
| `themes/docsy/`    | The theme source code              |
| `config/_default/` | Modular configuration files        |
| `archetypes/`      | Blueprint for new content          |
| `assets/`          | SCSS/CSS and other pipeline assets |

---

## ⚙️ Step 5: Configure Your Site

Docsy (and modern themes) use **modular config** files inside `config/_default/`:

* `config.toml`: base URL, theme, basic metadata
* `params.toml`: theme-specific settings
* `menus.toml`: site menus
* `languages.toml`: multilingual support
* `markup.toml`: markdown rendering settings

### Example `config/_default/config.toml`

```toml
baseURL = "https://yourdomain.com/"
languageCode = "en-us"
title = "My Docsy Site"
theme = "docsy"
```

---

## 💄 Step 6: Customize Styles (If Needed)

If the theme uses **Tailwind** or **PostCSS**, you’ll need to run:

```bash
npm install
```

(Usually done inside the root or theme folder, depending on `package.json` location.)

You can now add your custom styles to `assets/scss/custom.scss` or `assets/css/custom.css`, and configure them via `postcss.config.js` or theme overrides.

---

## 🚀 Step 7: Run the Site

Use:

```bash
hugo server
```

Optionally:

```bash
hugo server --baseURL http://localhost:1313
```

This starts the site locally and uses live reload.

---

## 🌐 Step 8: Deploy to Netlify

1. Push your site to a Git repo.
2. Connect the repo to [Netlify](https://www.netlify.com/).
3. Use these Netlify settings:

```
Build Command: hugo
Publish Directory: public
HUGO_VERSION: <your-version>
```

### Add a `netlify.toml` (optional)

```toml
[build]
  publish = "public"
  command = "hugo"

[context.production.environment]
  HUGO_VERSION = "0.125.4"
```

---

## 🧠 Key Takeaways for Any Hugo Theme

| Concept            | What to Know                                       |
| ------------------ | -------------------------------------------------- |
| `themes/`          | Vendorize the theme (clone or submodule)           |
| `config/_default/` | Use modular configs for clarity                    |
| `npm install`      | Required if theme uses Tailwind/PostCSS            |
| Customizing        | Override files in `layouts/`, `assets/`, `static/` |
| Deployment         | Set correct `baseURL`, use absolute URLs           |

---

## 🧪 Bonus: Test Multiple Themes

You can test multiple themes in the same project by switching `theme =` in your `config.toml`, assuming they follow Hugo standards.

---

## ✅ Conclusion

Once you understand how Hugo themes are structured and configured, you can confidently work with any theme — whether it’s **Docsy** for documentation sites or **Blowfish/PaperMod** for blogs. Modular configuration, asset pipelines, and theme overrides are key tools in your toolkit.
