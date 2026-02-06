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
  post.html          # Blog post template (includes date)
_posts/              # Blog posts (date in filename)
  2026-02-03-howtohearvoices.md
  2025-12-01-thesickness.md
  2024-10-01-thedreaming.md
  2023-01-05-college.md
index.html           # Home page
blog/index.html      # Blog listing (auto-generates from _posts)
poems/index.html     # Poetry page
contact/index.html   # Contact page
tufte.css            # Tufte CSS framework
custom.css           # Custom styles
```

## Adding New Blog Posts

Use the `/new-post` command, or manually create a file in `_posts/`:

Filename format: `YYYY-MM-DD-slug.md`

```markdown
---
layout: post
title: Post Title
subtitle: Optional subtitle
slug: urlslug
---

First paragraph appears as excerpt on blog index.

<!--more-->

Rest of the post content here...
```

- The `slug` determines the URL: `/blog/slug/`
- Date is extracted from filename
- First paragraph (before `<!--more-->`) is the excerpt
- "Thanks to Theia Vogel for editing" is added automatically by the layout

## Modifying Navigation
Edit `_includes/header.html` - changes apply to all pages.

## Deployment
Push to `main` branch. GitHub Pages builds and deploys automatically.

## Local Development
```bash
jekyll serve
# or
bundle exec jekyll serve
```
