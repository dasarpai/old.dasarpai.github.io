---
mathjax: true
id: 6158
title: "What is Bundler?"
date: 2024-10-11
permalink: /dsblog/Exploring-Bundler
tags: ["Package Management", Programming]
categories:
  - dsblog
header:
    teaser: /assets/images/dspost/dsp6158-Exploring-Bundler.jpg
excerpt_separator: "<!--more-->"   
author: Hari Thapliyaal   
layout: dspost-layout   
excerpt:   
author_profile: true   
share: true   
toc: true   
toc_sticky: true 
toc_levels: 3
mathjax: "true"
comments: true
keywords: ["Bundler" , "Ruby" , "Gemfile" , "Dependency management" , "Ruby gems" , "Yehuda Katz" , "Ruby on Rails" , "Gemfile.lock" , "Ruby development tools" , "Bundler commands"]
---
![Exploring Bundler](/assets/images/dspost/dsp6158-Exploring-Bundler.jpg)

## What is Bundler?
**Bundler** is a dependency management tool for Ruby applications. It ensures that the right versions of gems (libraries) are installed and used in a project. Ruby packages are called Gem. Bundler is commonly used in situations where you need to manage multiple Ruby projects with different dependencies or need to ensure that a project has all the necessary gems with specific versions. 

### Key points about Bundler:
- **Language**: Bundler is used with **Ruby** programming language.
- **Purpose**: It manages gem dependencies for Ruby applications, ensuring consistent environments by locking gem versions.
- **Usage scenario**: 
  - When working with Ruby on Rails applications.
  - When collaborating on a project where multiple developers need the same gem versions.
  - In deployment environments where consistency between local and production gem versions is critical.
- **Developed by**: Bundler was originally created by **Yehuda Katz** in 2009 as part of the Ruby community, and it is now maintained by the Bundler core team under the **Ruby Together** umbrella.

### How it works:
1. **Gemfile**: You define your project's dependencies in a `Gemfile`.
2. **bundle install**: Installs the exact versions of gems specified in the Gemfile.
3. **Gemfile.lock**: Bundler creates a `Gemfile.lock` file to lock down the versions, ensuring consistency across different environments.
4. **bundle exec**: Ensures that the correct versions of gems are used when running scripts or commands.

## Top 50 Commands of Bundler 

1. **bundle install** - Installs gems listed in the Gemfile.
2. **bundle update** - Updates gems to the latest versions in Gemfile.
3. **bundle exec** - Runs a command in the context of the Gemfile.
4. **bundle init** - Creates a new Gemfile in the current directory.
5. **bundle add \<gem\>** - Adds a gem to the Gemfile.
6. **bundle remove \<gem\>** - Removes a gem from the Gemfile.
7. **bundle check** - Checks if dependencies are installed.
8. **bundle clean** - Cleans up unused gems.
9. **bundle outdated** - Lists gems that have newer versions.
10. **bundle lock** - Locks the Gemfile with the exact versions.
11. **bundle open \<gem\>** - Opens the source for a gem in your editor.
12. **bundle console** - Opens an IRB session with the Gemfile's gems.
13. **bundle show \<gem\>** - Shows the location of the gem.
14. **bundle config** - Manages bundler configuration settings.
15. **bundle cache** - Caches the gems for offline use.
16. **bundle outdated --local** - Checks for outdated gems locally.
17. **bundle platform** - Displays your platform and gem version requirements.
18. **bundle viz** - Generates a dependency graph.
19. **bundle pristine** - Restores installed gems to pristine condition.
20. **bundle list** - Lists all installed gems.
21. **bundle doctor** - Verifies the bundle environment.
22. **bundle gem \<name\>** - Creates a skeleton for a new gem.
23. **bundle outdated \<gem\>** - Checks for outdated versions of a specific gem.
24. **bundle show --paths** - Displays the gem install paths.
25. **bundle info \<gem\>** - Shows detailed information about a gem.
26. **bundle exec rails \<cmd\>** - Executes Rails commands in bundle context.
27. **bundle install --without \<group\>** - Excludes specified gem groups.
28. **bundle install --path \<dir\>** - Installs gems to a specific directory.
29. **bundle update --group \<group\>** - Updates gems in a specific group.
30. **bundle update \<gem\>** - Updates only a specific gem.
31. **bundle install --deployment** - Installs gems for deployment.
32. **bundle lock --add-platform** - Adds an additional platform to the lockfile.
33. **bundle install --local** - Installs gems from local cache.
34. **bundle inject \<gem\> \<version\>** - Injects a gem directly into the lockfile.
35. **bundle install --binstubs** - Generates binstubs for the gems.
36. **bundle exec rspec** - Runs RSpec within the bundle environment.
37. **bundle install --jobs \<n\>** - Parallelizes gem installation with `n` jobs.
38. **bundle install --retry \<n\>** - Retries installation if it fails.
39. **bundle update --patch** - Updates gems to the latest patch version.
40. **bundle update --minor** - Updates gems to the latest minor version.
41. **bundle update --major** - Updates gems to the latest major version.
42. **bundle show --bundler** - Shows the installed version of Bundler.
43. **bundle lock --update** - Updates lockfile with specific gem requirements.
44. **bundle config set --local** - Sets a local configuration option.
45. **bundle config set --global** - Sets a global configuration option.
46. **bundle exec rake \<task\>** - Runs a Rake task within the bundle context.
47. **bundle update --strict** - Only updates gems specified explicitly.
48. **bundle binstubs \<gem\>** - Creates binstubs for a specific gem.
49. **bundle plugin install** - Installs a Bundler plugin.
50. **bundle version** - Displays the version of Bundler.

## What is Ruby on Rails?
Here we discussed about Ruby and also mentioned about Ruby on Rails, therefore le's understand what this is? Rails is known for making web development easier by offering a full-stack framework that supports both front-end and back-end development. 

**Ruby on Rails (often simply called Rails)** is a popular open-source web application framework written in the Ruby programming language. It follows the **Model-View-Controller (MVC)** architectural pattern and provides default structures for a database, a web service, and web pages. Rails emphasizes the use of well-known software engineering paradigms like **convention over configuration (CoC)** and **don't repeat yourself (DRY)** to improve developer productivity and reduce the complexity of code.

### Key Features of Ruby on Rails:
1. **MVC Architecture**: Rails organizes an application into three interconnected components:
   - **Model**: Represents the data and the business logic. Written in Ruby.
   - **View**: Displays the data to the user (usually HTML templates). Written in HTML and some Emedded Ruby code. Embedded Ruby will have .html.erb extention.
   - **Controller**: Manages the interaction between the model and the view. Written in Ruby.

2. **Convention Over Configuration**: Rails assumes sensible defaults, so developers don't have to write a lot of configuration code. This makes it faster to build applications.

3. **DRY (Don't Repeat Yourself)**: Rails encourages reusable code, minimizing duplication.

4. **Active Record**: Rails includes an Object-Relational Mapping (ORM) system, which allows developers to interact with the database using Ruby objects instead of writing SQL queries.

5. **Routing**: Rails has a built-in routing system that maps HTTP requests to specific controller actions.

6. **Scaffolding**: Automatically generates boilerplate code for creating, reading, updating, and deleting (CRUD) operations based on database models.

7. **Security Features**: Rails includes security features like protection against SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

### Use Cases:
Ruby on Rails is ideal for developing:
- Web applications
- Content management systems (CMS)
- E-commerce platforms
- Social media websites
- APIs and backend services

### Developed by:
Ruby on Rails was created by **David Heinemeier Hansson (DHH)** in 2004 and has since become widely used by web developers.

### Notable Applications Built with Ruby on Rails:
- **GitHub**
- **Shopify**
- **Basecamp**
- **Airbnb**
- **Hulu**

## Apart from bundle exec jekyll, what are other commands that we can use to run jekyll?

1. **jekyll new** - Creates a new Jekyll site.
2. **jekyll build** - Builds the site.
3. **jekyll serve** - Serves the site locally.
4. **jekyll serve --watch** - Serves the site locally and watches for changes.
5. **jekyll serve --livereload** - Serves the site locally and reloads the page on changes.
6. **jekyll serve --incremental** - Serves the site locally and rebuilds the site on changes.
7. **jekyll serve --port \<port\>** - Serves the site locally on a specific port.

## Apart from bundle exec jekyll, what are other commands which we can run bundle exec for?
Apart from Jekyll commands, you can use `bundle exec` to run various Ruby-based tools and frameworks that are specified in your `Gemfile`. Here are some common tools and the commands you can run with `bundle exec`:

1. **Rake**:   - Command: `bundle exec rake db:migrate`, Rake is a build automation tool for Ruby. You can define and run tasks like database migration, tests, and other automations.

2. **RSpec**   - Command: `bundle exec rspec spec/`, Used for running tests in Ruby projects, especially for behavior-driven development (BDD).

3. **Rubocop**   - Command: `bundle exec rubocop .`, A Ruby static code analyzer and code formatter, Rubocop helps in adhering to coding standards.

4. **Capistrano**   - Command: `bundle exec cap production deploy`, A tool for automating deployment and server management.

5. **Rails**   - Command: `bundle exec rails server`, If you’re working on a Ruby on Rails application, you use this command to interact with the Rails framework, such as running the server or database migrations.

6. **Middleman**   - Command: `bundle exec middleman build`, A static site generator like Jekyll, but Middleman is often used for more complex static sites.

7. **Cucumber**   - Command: `bundle exec cucumber`, A tool for running automated acceptance tests written in a behavior-driven development style.

8. **Guard**   - Command: `bundle exec guard`, A command-line tool to automatically run tests or other tasks when files are modified.

9. **Puma**   - Command: `bundle exec puma -C config/puma.rb`, A web server optimized for running Ruby web applications like Rails.

10. **Sidekiq**   - Command: `bundle exec sidekiq`, Used for background processing in Rails or Ruby applications.

11. **Brakeman**   - Command: `bundle exec brakeman`, A static analysis tool to check for security vulnerabilities in Ruby on Rails applications.

12. **Jekyll**   - Command: `bundle exec jekyll`, Jekyll commands for building, serving, and deploying static sites.

13. **Thoreau**   - Command: `bundle exec thoreau server`, A content management system for Markdown blogs, similar to Jekyll.

14. **Sinatra**   - Command: `bundle exec sinatra app.rb`, If you're using Sinatra, a Ruby framework for web applications, you can run its commands with `bundle exec`.

15. **Foreman**   - Command: `bundle exec foreman start`, A tool to run multiple processes concurrently, often used for managing processes in development.

16. **Overcommit**   - Command: `bundle exec overcommit --install`, A Git hook manager for Ruby projects.

17. **Fastlane**   - Command: `bundle exec fastlane release`, Automates building and releasing mobile apps.

You can execute any Ruby-based tool or framework installed through the `Gemfile` by using `bundle exec`. This ensures you're using the correct versions of gems defined in the `Gemfile.lock`.



## Hashtags
#Ruby
#Bundler
#RubyOnRails
#DependencyManagement
#Gemfile
#GemDependencies
#WebDevelopment
#OpenSource
#RubyGems
#ProgrammingTools
