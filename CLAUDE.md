# Linnea Isaac's Personal Website

## Overview
A personal website/blog built with Jekyll and hosted on GitHub Pages at linneaisaac.github.io.

## Tech Stack
- **Jekyll** - Static site generator (GitHub Pages builds automatically)
- **Tufte CSS** - Typography and design framework
- **GoatCounter** - Analytics (via stats.vgel.me)

## Structure
```
_config.yml          # Jekyll configuration
_includes/
  header.html        # Shared navigation bar
  footer.html        # Shared footer (dynamic year)
_layouts/
  default.html       # Main page template
index.html           # Home page
blog/
  index.html         # Blog listing
  college/           # Blog post
  thedreaming/       # Blog post
  thesickness/       # Blog post
poems/index.html     # Poetry page
contact/index.html   # Contact page
tufte.css            # Tufte CSS framework
custom.css           # Custom styles (nav, project grid, poem separators)
```

## Adding New Content

### New Blog Post
Create `blog/postname/index.html`:
```html
---
layout: default
title: Post Title
---

<h1>Post Title</h1>

<p class="subtitle">Optional subtitle</p>

<section>
  <p>Content here...</p>
</section>

<p><i>Thanks to Theia Vogel for editing.</i></p>
```

Then add a link in `blog/index.html`.

### Modifying Navigation
Edit `_includes/header.html` - changes apply to all pages.

## Deployment
Push to `main` branch. GitHub Pages builds and deploys automatically.

## Local Development
```bash
jekyll serve
# or
bundle exec jekyll serve
```
