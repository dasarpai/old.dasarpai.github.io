# Tech Context

## Technologies Used

*   **Core:**
    *   **Jekyll:** Static site generator (Ruby-based). Version needs confirmation (check `Gemfile.lock` or `bundle show jekyll`).
    *   **Ruby:** The language Jekyll is built on. Version needs confirmation (check `Gemfile` or `.ruby-version` file if present, or `ruby -v` command). Bundler is likely used for managing Ruby gems.
    *   **Liquid:** Templating language used by Jekyll.
    *   **Markdown:** Content authoring format. Kramdown is the likely processor (default in Jekyll).
    *   **HTML/CSS/JavaScript:** Standard web technologies for structure, styling, and client-side behavior.
*   **Hosting:**
    *   **GitHub Pages:** Platform for hosting the static site directly from the GitHub repository.
*   **Version Control:**
    *   **Git:** Used for version control.
    *   **GitHub:** Platform for hosting the Git repository.
*   **Potential Additional Tech (Needs Verification):**
    *   **Node.js/npm/yarn:** Might be used for frontend asset management (CSS preprocessing, JS bundling) if `package.json` exists and contains relevant scripts/dependencies.
    *   **Sass/SCSS:** Common CSS preprocessor used with Jekyll themes (check `_sass/` directory).
    *   **Staticman:** Appears to be used for handling comments, based on `staticman.yml`. Requires configuration and potentially a running instance or service.
    *   **Netlify:** `netlify.toml` suggests potential use of Netlify, possibly for builds, previews, or forms, although primary hosting seems to be GitHub Pages. Needs clarification.
    *   **Travis CI:** `.travis.yml` indicates past or present use of Travis CI, likely for continuous integration/build checks.

## Development Setup

*   **Prerequisites:** Ruby, Bundler, potentially Node.js/npm/yarn.
*   **Installation:** `bundle install` (to install Ruby gems from `Gemfile`), potentially `npm install` (if `package.json` exists).
*   **Running Locally:** `bundle exec jekyll serve` (starts a local development server, usually at `http://localhost:4000`).
*   **Building:** `bundle exec jekyll build` (generates the static site in the `_site` directory by default).

## Technical Constraints

*   **Static Site:** No server-side database or dynamic server-side code execution (beyond the build process). Features requiring dynamic interaction (like comments via Staticman) rely on external services or client-side JavaScript.
*   **GitHub Pages Limitations:** Specific Jekyll plugin restrictions might apply depending on the GitHub Pages build environment. Custom plugins often require a GitHub Actions build workflow.
*   **Dependency Management:** Requires careful management of Ruby (Gems) and potentially Node.js (npm packages) dependencies.

## Dependencies

*   **Ruby Gems:** Defined in `Gemfile` and locked in `Gemfile.lock`. Key gem is `jekyll`. Others likely include the theme and plugins.
*   **Node Packages:** Defined in `package.json` (if present).

## Tool Usage Patterns

*   **Git:** For all code and content changes.
*   **Bundler:** For managing Ruby dependencies (`bundle install`, `bundle update`, `bundle exec`).
*   **Jekyll CLI:** For local development and building (`jekyll serve`, `jekyll build`).
*   **npm/yarn:** (If applicable) for managing Node dependencies and running scripts.
*   **Text Editor/IDE:** (e.g., VS Code) for editing Markdown, code, and configuration files.

*(This file will be updated as more specific details about versions and configurations are confirmed.)*
