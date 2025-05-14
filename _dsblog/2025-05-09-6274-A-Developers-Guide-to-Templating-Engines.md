## What is a Templating Engine?

A **templating engine** is a system used to generate dynamic HTML pages by combining a template with data. It's used in static site generators (SSGs), web frameworks, and CMSs.

Templating engines **can be confusing**, especially when switching between site generators like **Jekyll** (Liquid) and **Hugo** (Go templates).


## 🔍 Common Templating Engines (and who uses them)

| Templating Engine | Syntax Example                         | Used By                        | Language          |
| ----------------- | -------------------------------------- | ------------------------------ | ----------------- |
| **Liquid**        | `{{ variable }}` / `{% if %}`          | **Jekyll**, Shopify            | Ruby              |
| **Go Templates**  | `{{ .Variable }}` / `{{ if . }}`       | **Hugo**                       | Go                |
| **Handlebars**    | `{{variable}}` / `{{#if}}`             | Ember.js, Ghost, many JS tools | JavaScript        |
| **EJS**           | `&lt;%= variable %&gt;` / `&lt;% if (...) { %&gt;` | Express.js (Node)              | JavaScript        |
| **Mustache**      | `{{variable}}`                         | Many static generators         | Language-agnostic |
| **Twig**          | `{{ variable }}` / `{% if %}`          | Symfony (PHP), Grav CMS        | PHP               |
| **Jinja2**        | `{{ variable }}` / `{% if %}`          | Flask (Python)                 | Python            |
| **Nunjucks**      | `{{ variable }}` / `{% if %}`          | Eleventy (JS SSG)              | JavaScript        |

---

## 💡 Key Differences Between Hugo (Go Templates) and Jekyll (Liquid)

| Feature               | Jekyll (Liquid)                | Hugo (Go Templates)                 |
| --------------------- | ------------------------------ | ----------------------------------- |
| **Tag syntax**        | `{{ variable }}` / `{% ... %}` | `{{ .Variable }}` / `{{ if ... }}`  |
| **Loops**             | `{% for item in list %}`       | `{{ range .List }}`                 |
| **Conditions**        | `{% if condition %}`           | `{{ if .Condition }}`               |
| **Partial templates** | `{% include 'file.html' %}`    | `{{ partial "file.html" . }}`       |
| **Data scope**        | Intuitive (like Ruby)          | Very strict (`.` = current context) |
| **Error messages**    | Friendly-ish                   | Sometimes cryptic                   |
| **Extensibility**     | Easy with plugins              | Very fast, limited customization    |
| **Performance**       | Slower for big sites           | Blazing fast                        |

---

## 🧠 Why It Feels Confusing

* `{{ ... }}` is common across many engines but means different things.
* In **Liquid**, `{{ }}` is for output; `{% %}` is for logic.
* In **Hugo**, everything is in `{{ }}` and the dot (`.`) matters a lot (`.Title`, `.Params`, etc.).
* Hugo doesn’t use `{% raw %}` — that’s Liquid-only.
* Each engine has its quirks and idioms — no true standard.

---

## 🧰 When to Use What?

| Use Case                                 | Recommended Engine                            |
| ---------------------------------------- | --------------------------------------------- |
| **Simple blog, Markdown-focused**        | Jekyll (Liquid) or Hugo                       |
| **Fast builds with complex structure**   | Hugo (Go Templates)                           |
| **Tight integration with JS frameworks** | Nunjucks, Handlebars                          |
| **Backend web frameworks**               | Jinja2 (Flask), Twig (Symfony), EJS (Express) |
| **Cross-language portability**           | Mustache                                      |

---

## 🔄 Migrating Tips

When moving between engines (e.g., Jekyll → Hugo):

* Strip all `{% raw %}`, `{% endraw %}`
* Replace `{% include %}` with `{{ partial }}`
* Replace `{% for post in site.posts %}` with `{{ range .Site.RegularPages }}` or similar
* Be very careful with `.`, `.Params`, and context in Hugo
