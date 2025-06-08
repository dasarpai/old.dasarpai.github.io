---
mathjax: true
id: 6277
title: "Choosing Display Type in CSS"
date: 2025-05-23
permalink: /dsblog/choosing-display-type-in-css
tags: [CSS Display Property, CSS Display Types, CSS Block-level Displays, CSS Inline-level Displays, CSS Flexbox Layout, CSS Grid Layout]
categories: [CSS]
header:
  teaser: /assets/images/dspost/dsp6277-choosing-display-type-in-css.jpg
excerpt_separator: "<!--more-->"
author: Hari Thapliyaal
layout: dspost-layout
excerpt: "Learn about the different display property values in CSS, their meanings, and when to use them. Understand the difference between block-level displays, inline-level displays, flexbox layout, and grid layout."
author_profile: true
share: true
toc: true
toc_sticky: true
toc_levels: 2
comments: true
auto_number_headings: false
keywords: [CSS Display Property, CSS Display Types, CSS Block-level Displays, CSS Inline-level Displays, CSS Flexbox Layout, CSS Grid Layout]
---

## What is display property in HTML container?
There are many HTML container tags, discussed in [another article](dsblog/html-containers). But the content inside these container can be rendered in different ways. This is controlled by a property `display`. What are the different values of `display` property and what is the meaning of those, we will see those in this article.

The `display` property in CSS defines **how an element is displayed** in the layout — it's one of the most fundamental properties in CSS.

Here’s a breakdown of the **most common and important values of `display`**, along with their meanings and typical use cases:

### 1. **Block-level Displays**

| Value          | Description                                                           | Example                     |
| -------------- | --------------------------------------------------------------------- | --------------------------- |
| `block`        | Element starts on a new line and takes up full width                  | `<div>`, `<section>`, `<p>` |
| `inline`       | Element flows inline with text, only takes up as much width as needed | `<span>`, `<a>`, `<b>`      |
| `inline-block` | Behaves like `inline`, but you can set `width` and `height`           | Custom buttons, badges      |
| `none`         | Hides the element completely (it’s not in the DOM visually)           | Toggle visibility           |

### 2. **Flexbox Layout**

| Value         | Description                                                       | Use Case                         |
| ------------- | ----------------------------------------------------------------- | -------------------------------- |
| `flex`        | Turns container into a **flexbox**, for 1D layout (row or column) | Navigation bars, centering items |
| `inline-flex` | Same as `flex` but behaves like `inline` element                  | Inline flexible elements         |

> Once you use `display: flex`, you use properties like `justify-content`, `align-items`, `flex-direction` inside it.

### 3. **Grid Layout**

| Value         | Description                                                          | Use Case                         |
| ------------- | -------------------------------------------------------------------- | -------------------------------- |
| `grid`        | Turns container into a **CSS Grid** for 2D layout (rows and columns) | Page sections, dashboards        |
| `inline-grid` | Same as `grid` but behaves like inline                               | Rarely used, inline grid content |

### 4. **Table Layout (for table-like designs)**

| Value                                 | Description                                  | HTML Equivalent      |
| ------------------------------------- | -------------------------------------------- | -------------------- |
| `table`                               | Behaves like a `<table>`                     | `<table>`            |
| `table-row`                           | Behaves like `<tr>`                          | `<tr>`               |
| `table-cell`                          | Behaves like `<td>`                          | `<td>`               |
| `table-column`, `table-caption`, etc. | Corresponding to other parts of table layout | `<col>`, `<caption>` |

> You can use these to make a table-like layout **without actual `<table>` elements**.

### 5. **Other Values**

| Value       | Description                                                   |                                  |
| ----------- | ------------------------------------------------------------- | -------------------------------- |
| `contents`  | Makes the element disappear visually, but keeps its children  | Rare; useful in component design |
| `list-item` | Makes element behave like a list item (`<li>`) with a bullet  | Often used for custom lists      |
| `inherit`   | Inherits the display value from the parent                    |                                  |
| `initial`   | Resets to the default display value                           |                                  |
| `unset`     | Removes any set value, falling back to inheritance or default |                                  |

### Common Use Cases

| Task                | Use `display` value           |
| ------------------- | ----------------------------- |
| Layout sections     | `block`, `grid`, `flex`       |
| Inline buttons      | `inline-block`, `inline-flex` |
| Toggle visibility   | `none`                        |
| Responsive navbars  | `flex`                        |
| Image galleries     | `grid`                        |
| Custom list bullets | `list-item`                   |

## Usage of display : flex

When you apply `display: flex` to a container, you can then use various **flex properties** to control the layout of its child elements.

### Example:

```html
<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;
  justify-content: space-between; /* Align items horizontally */
  align-items: center;            /* Align items vertically */
  flex-direction: row;            /* Default: row (horizontal) */
  gap: 10px;                      /* Add spacing between items */
}
```

### Common `flex` properties:

| Property          | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `justify-content` | Aligns items **horizontally** (e.g., `flex-start`, `center`, `space-between`) |
| `align-items`     | Aligns items **vertically** (e.g., `stretch`, `center`, `baseline`)           |
| `flex-direction`  | Changes the axis direction (`row`, `column`, `row-reverse`, `column-reverse`) |
| `flex-wrap`       | Allows wrapping to next line if needed                                        |

## Usage of display: grid 
CSS **Grid Layout** is a powerful layout system in CSS designed to help web developers create complex and responsive web layouts easily and efficiently. It allows you to **create two-dimensional layouts**—both rows and columns—without using floats or positioning tricks.

### What is CSS Grid Layout?

CSS Grid is a layout model that lets you **divide a web page into major regions** or define the relationship in terms of size, position, and layer between parts of a control built from HTML primitives.

Think of it as turning your container into a **grid of cells**, where you can place child elements precisely in any cell or span across multiple cells.

### How CSS Grid Works

#### 1. **Create a Grid Container**

You define a grid by setting `display: grid` on a container.

```css
.container {
  display: grid;
}
```

#### 2. **Define Rows and Columns**

Use `grid-template-columns` and `grid-template-rows` to define the structure.

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto auto;
}
```

This example creates:

* 3 columns: one fixed (200px) and two flexible (`1fr` each)
* 2 rows with automatic height

#### 3. **Place Grid Items**

Each direct child of the grid container becomes a **grid item**, and you can control its position using:

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

Or use shorthand:

```css
.item1 {
  grid-area: 1 / 1 / 2 / 3; /* row-start / column-start / row-end / column-end */
}
```

### ✅ Key Features of CSS Grid

| Feature                                       | Description                             |
| --------------------------------------------- | --------------------------------------- |
| `display: grid`                               | Activates grid layout on a container    |
| `grid-template-columns`, `grid-template-rows` | Defines columns and rows                |
| `grid-column`, `grid-row`                     | Places items in specific grid areas     |
| `fr` unit                                     | Fractional unit for flexible layouts    |
| `grid-gap` / `gap`                            | Space between rows and columns          |
| `grid-template-areas`                         | Name areas and place items semantically |

### 🎯 Use Cases of CSS Grid

* **Page Layouts**: Headers, sidebars, footers, main content
* **Dashboards**: Control panels with resizable sections
* **Galleries**: Image grids with consistent spacing
* **Forms**: Neatly aligned labels and inputs

### 🆚 Flexbox vs Grid

| Feature        | Flexbox                    | Grid                        |
| -------------- | -------------------------- | --------------------------- |
| Direction      | 1D (row **or** column)     | 2D (row **and** column)     |
| Use Case       | Alignment, navigation bars | Layouts, full-page sections |
| Item Placement | Sequential                 | Absolute (by coordinates)   |

### 🧠 Visualization Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 10px;
}
```

HTML:

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

This creates a 3-column layout with equal widths and 10px gaps between boxes.

## How to set `display` property in bootstrap and tailwind?
**The underlying CSS `display` values are the same**, but **the class names and flexibility differ** between Bootstrap and Tailwind. Tailwind tends to be more expressive and granular by default.
Both provide utility-based control over `display`. Both support responsive variants.

1. **Bootstrap:**

Bootstrap provides utility classes for the `display` property using the pattern:

```
.d-{value}
```

Common examples:

* `.d-block` → `display: block;`
* `.d-inline` → `display: inline;`
* `.d-flex` → `display: flex;`
* `.d-none` → `display: none;`
* responsive variations like: `.d-sm-none`, `.d-md-block`, etc.

---

2. **Tailwind CSS:**

Tailwind provides utility classes for `display` using descriptive class names:

```
display: {value}
```


| Feature       | Bootstrap                                   | Tailwind CSS                                                                             |
| ------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Syntax        | `.d-block`, `.d-none`                       | `block`, `hidden`                                                                        |
| Naming style  | Short + prefixed                            | Descriptive + unprefixed                                                                 |
| Customization | Requires Sass override                      | Fully configurable via `tailwind.config.js`                                              |
| Consistency   | Bootstrap is limited to fewer display types | Tailwind supports more modern `display` values like `grid`, `inline-grid` out of the box |

**Common examples:**

| Utility Class    | CSS Equivalent         | tailwind |
| ---------------- | ---------------------- | -------- |
| `.d-block`       | `display: block`       | block  |
| `.d-inline`      | `display: inline`      | inline | 
| `.d-flex`        | `display: flex`        | flex |
| `.d-grid`        | `display: grid`        | grid |
| `.d-inline-grid` | `display: inline-grid` | inline-grid |
| `.d-none`        | `display: none`        | hidden |
| `.d-inline-block` | `display: inline-block` | inline-block |
| .d-sm-none`, `.d-md-block`, `.d-md-grid`, `.d-lg-inline-grid` | responsive variations | `sm:hidden`, `md:flex` |
| | Utility Classes | `grid-cols-2`, `gap-4`, `auto-rows-fr` |



## How does browser knows which framework to use for css class?
Frameworks like Tailwind and Bootstrap are developer tools. Browsers just apply CSS rules — they don’t "know" what framework you're using.

1. **Tailwind / Bootstrap = Class Names → CSS**

Frameworks like Tailwind and Bootstrap define a set of **prewritten CSS classes** that map to standard CSS properties.

**Example:**

```html
<div class="grid"> <!-- Tailwind -->
<div class="d-grid"> <!-- Bootstrap -->
```

Behind the scenes:

* Tailwind:

  ```css
  .grid {
    display: grid;
  }
  ```
* Bootstrap:

  ```css
  .d-grid {
    display: grid;
  }
  ```

When the browser sees:

```html
<div class="grid">
```

It doesn’t think: “Ah, Tailwind!”
It just sees the class name and applies the CSS rule:

```css
display: grid;
```

**Developer Side vs. Browser Side**

| Aspect              | Developer View (Tailwind/Bootstrap) | Browser View     |
| ------------------- | ----------------------------------- | ---------------- |
| Semantic Frameworks | `grid`, `d-grid`, etc.              | Just CSS classes |
| Additional Features | Config files, responsive variants   | Not relevant     |
| Rendered Output     | HTML + linked CSS files             | CSS → Style Tree |



