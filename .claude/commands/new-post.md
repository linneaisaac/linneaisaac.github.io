# New Blog Post

Create a new blog post for Linnea's website.

## Instructions

1. Ask the user for:
   - **Title** of the post
   - **Subtitle** (or "none")
   - **Slug** for the URL (e.g., `mypost` becomes `/blog/mypost/`)
   - **Date** (or "today" for current date)

2. Once you have the info:
   - Create `_posts/YYYY-MM-DD-slug.md` with this template:

```markdown
---
layout: post
title: {title}
subtitle: {subtitle if provided, otherwise omit this line}
slug: {slug}
---

{First paragraph goes here - this will be the excerpt shown on the blog index}

<!--more-->

YOUR TEXT HERE - paste plain text with blank lines between paragraphs.
```

3. Explain that:
   - The first paragraph (before `<!--more-->`) will appear as the preview on the blog index
   - Everything after `<!--more-->` is the rest of the post
   - The date and "Thanks to Theia Vogel for editing" are added automatically
   - Tell them where to find the file

4. Wait for the user to confirm they've added the text

5. Commit and push with message: "Add new blog post: {title}"
