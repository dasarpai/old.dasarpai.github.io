---
mathjax: true
id: 6164
title: "Understanding HTML Templating with Python, Ruby, and PHP"
date: 2024-10-17
permalink: /dsblog/Understanding-HTML-Templating-with-Python-Ruby-PHP
tags: [HTML, Templating, "Python", "Ruby", "PHP"]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6164-Understanding-HTML-Templating-with-Python-Ruby-PHP.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 2
mathjax: "true"
comments: true
keywords: ["HTML", "Templating", "Python", "Ruby", "PHP"]
sidebar:
  nav: "docs" 
---

![Understanding HTML Templating with Python, Ruby, and PHP](/assets/images/dspost/dsp6164-Understanding-HTML-Templating-with-Python-Ruby-PHP.jpg)

# Understanding HTML Templating with Python, Ruby, and PHP

## What is HTML Templating?
This concept is widely used across different frameworks and languages to build dynamic, server-rendered web applications.

The concept of mixing a programming or scripting language with HTML is commonly referred to as **"Server-Side Templating"** or **"Embedding Server-Side Code in HTML"**. This approach allows dynamic generation of web pages by combining HTML (for structure and presentation) with server-side logic (like PHP, Python, Ruby, etc.) to create dynamic content.

### Common Terms for This Concept:
1. **HTML Templating**: More general, referring to any form of mixing dynamic code into an HTML template (using languages like PHP, Python, Ruby, JavaScript, etc.).
   
2. **Server-Side Templating**: Refers to the practice of embedding server-side code in HTML using templating engines (like Jinja for Python, ERB for Ruby, or native PHP syntax).
   
3. **Embedded Code**: Refers to any server-side or scripting code that is embedded within HTML tags.

4. **Dynamic Web Pages**: Refers to web pages that are generated with dynamic content based on server-side processing.


## What are Jinja2 syntax? (HTML + Python)
If you want to call python code within html then you need to use Jinja2 syntax.

Some important Jinja2 syntax elements used for embedding Python code in HTML templates are as following.

### 1. **Variable Output**
- **\{\{ variable \}\}**: Renders the value of the variable.
  ```jinja
  <p>\{\{ username \}\  }</p>
  ```

### 2. **Control Structures**
- **\{\% if condition \%\}**: Starts an if statement.
  ```jinja
  \{\% if user.is_authenticated \%\}
      <p>Welcome, \{\{ user.username \}\}\</p>
  \{\% endif \%\}
  ```

- **\{\% elif condition \%\}**: Adds an else-if condition.
  ```jinja
  \{\% if user.is_authenticated \%\}
      <p>Welcome, \{\{ user.username \}\}\</p>
  \{\% elif user.is_guest \%\}
      <p>Welcome, Guest!</p>
  \{\% endif \%\}
  ```

- **\{\% else \%\}**: Defines an else block.
  ```jinja
  \{\% if user.is_authenticated \%\}
      <p>Welcome, \{\{ user.username \}\}\</p>
  \{\% else \%\}
      <p>Please log in.</p>
  \{\% endif \%\}
  ```

- **`\{\% for item in list \%\}`**: Starts a loop through a list.
  ```jinja
  <ul>
      \{\% for item in items \%\}
          <li>\{\{ item \}\}\</li>
      \{\% endfor \%\}
  </ul>
  ```

- **`\{\% break \%\}`**: Exits the current loop.
- **`\{\% continue \%\}`**: Skips the current iteration and continues to the next one.

### 3. **Filters**
- **`\{\{ variable \| filter \}\}`**: Applies a filter to a variable.
  ```jinja
  <p>\{\{ username \| capitalize \}\}</p>
  ```

- **Common Filters**:
  - `length`: Gets the length of a list or string.
  - `join`: Joins a list into a string.
  - `default`: Provides a default value if the variable is undefined.
  - `safe`: Marks a string as safe HTML. It will convert &, %, $ etc text of the variable into html code.

### 4. **Comments**
- **`\{\# comment \#\}`**: Adds a comment that won’t be rendered in the output.
  ```jinja
  \{\# This is a comment \#\}
  ```

### 5. **Macros**
- **`\{\% macro macro_name(args) \%\}`**: Defines a reusable block of code.
  ```jinja
  \{\% macro render_item(item) \%\}
      <li>{{ item }}</li>
  \{\% endmacro \%\}

  
  # To call above function you have to write
  
  <ul>
    \{\% for item in items \%\}
        \{\{ render_item(item) \}\}  <!-- Calling the macro here -->
    \{\% endfor \%\}
  </ul>

  ```

### 6. **Inheritance**
- **`\{\% extends "base.html" \%\}`**: Inherits from a parent template.
- **`\{\% block block_name \%\}`**: Defines a block that can be overridden in child templates.
  ```jinja
  \{\% extends "base.html" \%\}

  \{\% block content \%\}
      <h1>Title</h1>
  \{\% endblock \%\}
  ```

### 7. **Test Statements**
- **`\{\% if variable is test \%\}`**: Checks if a variable meets a condition.
  ```jinja
  \{\% if user is none \%\}
      <p>No user found.</p>
  \{\% endif \%\}
  ```

- Common Tests:
  - `none`
  - `defined`
  - `even`
  - `odd`
  - `empty`

### 8. **Global Functions**
- **`\{\{ function() \}\}`**: Calls global functions defined in your Flask app.
  ```jinja
  <p>Current Time: \{\{ current_time() \}\}</p>
  ```

### 9. **With Statement**
- **`\{\% with variable = expression \%\}`**: Assigns a value to a variable for use within a block.
  ```jinja
  \{\% with total = items|length \%\}
      <p>Total items: {{ total }}</p>
  \{\% endwith \%\}
  ```

### 10. **Include Statement**
- **`\{\% include "filename.html" \%\}`**: Includes another template file.
  ```jinja
  \{\% include "header.html" \%\}
  ```

## What are ERB Tags? (HTML + Ruby Templating)
When we are developing web application in frameworks like Rails where we use Ruby and we need to execute some code on server on a HTML page before sending it to client we need to us this concept. People also refer this as ERB Tags.

## What are important ERB Tags?
These are the core Ruby on Rails helpers, syntax, and commands you would frequently write in **`.html.erb`** files to build dynamic web pages. These tools make Rails highly productive for developing web applications.

Here’s a list of important syntax and commands that are commonly used in **`.html.erb`** files within a Ruby on Rails application. These cover both Ruby and HTML interactions:

### ERB Tags:
1. **`<% %>`**:
   - Executes Ruby code but **does not print output**.
   - Example (control structures):
     ```erb
     <% @articles.each do |article| %>
       <!-- HTML content here -->
     <% end %>
     ```

2. **`<%= %>`**:
   - Executes Ruby code and **prints the output** to the HTML.
   - Example (outputting data):
     ```erb
     <p><%= article.title %></p>
     ```

3. **`<%- %>`** and **`<%= -%>`**:
   - Executes Ruby code but **trims whitespace** around the code.
   - Example (trimmed output):
     ```erb
     <%- @articles.each do |article| -%>
       <%= article.title -%>
     <%- end -%>
     ```

### Ruby Control Structures:
1. **Loops**:
   - You can use Ruby's loop structures like `each`, `times`, etc.
   - Example:
     ```erb
     <ul>
       <% @items.each do |item| %>
         <li><%= item.name %></li>
       <% end %>
     </ul>
     ```

2. **Conditionals**:
   - You can use `if`, `elsif`, `else`, `unless` statements for conditional logic.
   - Example:
     ```erb
     <% if @user %>
       <p>Welcome, <%= @user.name %>!</p>
     <% else %>
       <p>Welcome, Guest!</p>
     <% end %>
     ```

3. **Iterating with `each_with_index`**:
   - Useful for displaying an index along with each element.
   - Example:
     ```erb
     <% @items.each_with_index do |item, index| %>
       <p><%= index + 1 %>. <%= item.name %></p>
     <% end %>
     ```

### Common Rails Helpers in ERB Files:
1. **`link_to`**:
   - Creates a hyperlink.
   - Example:
     ```erb
     <%= link_to 'Home', root_path %>
     ```

2. **`form_for`**:
   - Creates a form bound to an ActiveRecord model.
   - Example:
     ```erb
     <%= form_for @article do |f| %>
       <p>
         <%= f.label :title %><br>
         <%= f.text_field :title %>
       </p>

       <p>
         <%= f.label :body %><br>
         <%= f.text_area :body %>
       </p>

       <p>
         <%= f.submit %>
       </p>
     <% end %>
     ```

3. **`image_tag`**:
   - Renders an image tag.
   - Example:
     ```erb
     <%= image_tag "logo.png", alt: "Company Logo" %>
     ```

4. **`form_tag`**:
   - Creates a form not bound to a specific model.
   - Example:
     ```erb
     <%= form_tag search_path, method: :get do %>
       <%= text_field_tag :query %>
       <%= submit_tag "Search" %>
     <% end %>
     ```

5. **`button_to`**:
   - Creates a form with a button.
   - Example:
     ```erb
     <%= button_to 'Delete', article_path(@article), method: :delete %>
     ```

6. **`render`**:
   - Renders a partial template or collection.
   - Example (partial):
     ```erb
     <%= render 'shared/header' %>
     ```

   - Example (collection):
     ```erb
     <%= render @articles %>
     ```

7. **`content_for` and `yield`**:
   - Defines and renders content in specific parts of a layout.
   - Example:
     ```erb
     <% content_for :title do %>
       Article List
     <% end %>

     <%= yield :title %>
     ```

8. **`pluralize`**:
   - Returns singular or plural text based on a count.
   - Example:
     ```erb
     <%= pluralize(@articles.count, 'article') %>
     ```

9. **`time_ago_in_words`**:
   - Displays a human-readable time difference.
   - Example:
     ```erb
     <%= time_ago_in_words(@article.created_at) %> ago
     ```

### HTML Input Helpers:
1. **`text_field_tag`**:
   - Creates a text input field.
   - Example:
     ```erb
     <%= text_field_tag :name %>
     ```

2. **`password_field_tag`**:
   - Creates a password input field.
   - Example:
     ```erb
     <%= password_field_tag :password %>
     ```

3. **`submit_tag`**:
   - Creates a submit button.
   - Example:
     ```erb
     <%= submit_tag "Save" %>
     ```

4. **`check_box_tag`**:
   - Creates a checkbox input.
   - Example:
     ```erb
     <%= check_box_tag 'accept_terms', 'yes' %> Accept Terms
     ```

### Flash Messages:
- To display flash messages for notifications.
  ```erb
  <% if flash[:notice] %>
    <p><%= flash[:notice] %></p>
  <% end %>

  <% if flash[:alert] %>
    <p><%= flash[:alert] %></p>
  <% end %>
  ```

### Localization Helpers:
1. **`t` (translate)**:
   - Used for translating text based on locale.
   - Example:
     ```erb
     <%= t 'welcome_message' %>
     ```

### Routes:
- Using Rails route helpers to link to paths or resources.
  - Example:
    ```erb
    <%= link_to 'Edit', edit_article_path(@article) %>
    ```

### Asset Helpers:
1. **`javascript_include_tag`**:
   - Embeds JavaScript files.
   - Example:
     ```erb
     <%= javascript_include_tag 'application' %>
     ```

2. **`stylesheet_link_tag`**:
   - Embeds CSS files.
   - Example:
     ```erb
     <%= stylesheet_link_tag 'application', media: 'all' %>
     ```

### Other Common Syntax:
1. **Comments in ERB**:
   - Ruby code comments in ERB.
   - Example:
     ```erb
     <%# This is a comment that won't be rendered in HTML %>
     ```

2. **Escape HTML**:
   - To safely escape user input and prevent XSS.
   - Example:
     ```erb
     <%= h user_input %>
     ```

### Layouts:
- ERB layout files like `application.html.erb` often use `<%= yield %>` to render the content from view files.

## Can we write ERB tag within Non-HTML tags?
Yes. You can. But keep in mind they should only within Rail projects.

Within JavaScript 
```
<script>
  var articleCount = <%= @articles.count %>;
  alert("You have " + articleCount + " articles.");
</script>
```

Within CSS
```
<style>
  .highlight {
    background-color: <%= @highlight_color %>;
  }
</style>
```
Within Markdown 

```
<div>
  <%= markdown(@article.content) %>
</div>

```

## What is Embedding PHP in HTML? (HTML + PHP Templating)
When we mix php code on server side with html so that we can send processed HTML page to the client then we use this concept.

You can use PHP tags to write PHP code inside HTML files. The most common PHP tags are:

<?php ... ?> for PHP code blocks.
<?= ... ?> as shorthand for <?php echo ... ?>, used for outputting values directly.

## Most common PHP + HTML Templates 

These PHP tags and syntax options allow embedding dynamic logic and content directly within HTML. The mix of PHP and HTML is common for web development, enabling server-side logic to generate dynamic pages on the fly.

### 1. **Standard PHP Tag**  
   The full PHP tag is used to write general PHP code.
   ```php
   <?php ... ?>
   ```
   Example:
   ```php
   <?php
   $name = "John";
   echo "Hello, " . $name;
   ?>
   ```

### 2. **PHP Short Echo Tag (`<?= ... ?>`)**  
   This is a shorthand for `<?php echo ... ?>` used for outputting values.
   ```php
   <?= $variable ?>
   ```
   Example:
   ```php
   <p>Hello, <?= $name ?>!</p>
   ```
   This tag is useful for concise output and is always enabled from PHP 5.4 onward.

### 3. **Short PHP Tag (Deprecated)**  
   This shorthand `<? ... ?>` is a deprecated version of the full PHP tag. It may be disabled depending on your PHP configuration (requires `short_open_tag=On` in `php.ini`).
   ```php
   <? echo "Hello, World!"; ?>
   ```
   However, this is **discouraged** in modern PHP versions due to potential compatibility issues.

### 4. **Alternative Control Structure Syntax**
   PHP provides alternative syntax for `if`, `while`, `for`, and `foreach` control structures, which is especially useful when embedding PHP in HTML.

   #### **If-Else Statement:**
   ```php
   <?php if ($condition): ?>
       <p>Condition is true.</p>
   <?php else: ?>
       <p>Condition is false.</p>
   <?php endif; ?>
   ```

   #### **For Loop:**
   ```php
   <?php for ($i = 0; $i < 5; $i++): ?>
       <p>Iteration <?= $i ?></p>
   <?php endfor; ?>
   ```

   #### **Foreach Loop:**
   ```php
   <?php foreach ($items as $item): ?>
       <li><?= $item ?></li>
   <?php endforeach; ?>
   ```

   #### **While Loop:**
   ```php
   <?php while ($condition): ?>
       <p>Looping...</p>
   <?php endwhile; ?>
   ```

### 5. **Herodoc and Nowdoc for Embedding HTML Blocks**
   These are used to define multi-line strings or HTML blocks inside PHP code.

   #### **Heredoc Syntax**:
   ```php
   $html = <<<HTML
   <p>Hello, World!</p>
   <p>Welcome to the site.</p>
   HTML;
   echo $html;
   ```

   #### **Nowdoc Syntax** (No variable parsing):
   ```php
   $html = <<<'HTML'
   <p>Hello, World!</p>
   <p>Welcome to the site.</p>
   HTML;
   echo $html;
   ```

### 6. **Include and Require Tags**
   These tags include external PHP files or HTML templates inside another PHP file.

   #### **Include**:
   ```php
   <?php include 'header.php'; ?>
   ```
   If the file is not found, a warning is raised but the script continues.

   #### **Require**:
   ```php
   <?php require 'header.php'; ?>
   ```
   If the file is not found, a fatal error is raised and the script halts.

### 7. **Comments in PHP**
   PHP supports multiple types of comments, useful when embedding PHP code inside HTML to prevent confusion.

   #### **Single-line Comment**:
   ```php
   <?php // This is a comment ?>
   ```

   #### **Multi-line Comment**:
   ```php
   <?php
   /*
      This is a multi-line comment.
   */
   ?>
   ```

### 8. **Switch Statements with HTML Embedding**
   ```php
   <?php switch($day): ?>
       <?php case 'Monday': ?>
           <p>It's Monday!</p>
           <?php break; ?>
       <?php case 'Tuesday': ?>
           <p>It's Tuesday!</p>
           <?php break; ?>
       <?php default: ?>
           <p>It's another day.</p>
   <?php endswitch; ?>
   ```

### 9. **Escape PHP Code in HTML Using `<?php` and `?>`**
   You can use `<?php ... ?>` within HTML to escape and execute PHP code inline.

   Example:
   ```html
   <html>
   <body>
       <p><?php echo "This is dynamic content!"; ?></p>
   </body>
   </html>
   ```

### 10. **Output Buffers (Optional Advanced)**
   Used when you want to manipulate content before sending it to the browser.
   ```php
   <?php ob_start(); ?>
   <p>This will be captured in the buffer.</p>
   <?php $buffer = ob_get_clean(); ?>
   ```

## Hashtags:
#webdevelopment, #serversidetemplating, #dynamicwebpages, #htmltemplating, #PHP, #Jinja2, #RubyOnRails