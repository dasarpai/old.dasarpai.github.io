
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

