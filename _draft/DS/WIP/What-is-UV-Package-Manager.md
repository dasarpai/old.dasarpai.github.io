uv: Python packaging in Rust
uv is an extremely fast Python package installer and resolver, written in Rust, and designed as a drop-in replacement for pip and pip-tools workflows.

It is developed at Astral, they build high-performance developer tools for the Python ecosystem. We're best known for Ruff, an extremely fast Python linter and formatter.

uv represents a milestone in our pursuit of a "Cargo for Python": a comprehensive Python project and package manager that's fast, reliable, and easy to use.


## Features of UV 
An obsessive focus on performance. In the above benchmarks, uv is 8-10x faster than pip and pip-tools without caching, and 80-115x faster when running with a warm cache (e.g., recreating a virtual environment or updating a dependency). uv uses a global module cache to avoid re-downloading and re-building dependencies, and leverages Copy-on-Write and hardlinks on supported filesystems to minimize disk space usage.

Optimized for adoption. While we have big aspirations for the future of Python packaging, uv's initial release is centered on supporting the pip and pip-tools APIs behind our uv pip interface, making it usable by existing projects with zero configuration. Similarly, uv can be used as "just" a resolver (uv pip compile to lock your dependencies), "just" a virtual environment creator (uv venv), "just" a package installer (uv pip sync), and so on. It's both unified and modular.

A simplified toolchain. uv ships as a single static binary capable of replacing pip, pip-tools, and virtualenv. uv has no direct Python dependency, so you can install it separately from Python itself, avoiding the need to manage pip installations across multiple Python versions (e.g., pip vs. pip3 vs. pip3.7).

## Commands 

```
uv init --app 
uv init --lib 
uv init project_name 
installed .git, env, .python -version, readme, pyproject.toml, hello.py
uv run hello.py
uv add pandas # automally update .toml file 
uv add fastap sqlalchemy 
uv remove sqlalchemy 
uv sync # sync with virtual env.
un lock --upgrade pacakge pandas 
uv tree 
un init another_project no-workspace 
uv tool run ruff 
uv tool run ruff check 
uvx 
uv tool dir # where tool is installed
uv tool update
uv tool installl ruf 
un tool uninstall ruff
uv tool upgrade ruff 
un python install 3.12.0 
uv python install '>3.9,<3.11'
```

oct 2023, puffin as package manager 


[](https://astral.sh/blog/uv)
[](https://www.youtube.com/watch?v=qh98qOND6MI)