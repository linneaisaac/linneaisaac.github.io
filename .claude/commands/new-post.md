# New Blog Post

Create a new blog post for Linnea's website.

## Instructions

1. Ask the user for:
   - **Title** of the post
   - **Subtitle** (or "none")
   - **Folder name** for the URL (e.g., `mypost` becomes `/blog/mypost`)

2. Once you have the info:
   - Create the folder `blog/{foldername}/`
   - Create `blog/{foldername}/index.md` with this template:

```markdown
---
layout: default
title: {title}
---

# {title}

{subtitle as paragraph if provided, otherwise omit}

YOUR TEXT HERE - paste plain text with blank lines between paragraphs.

*Thanks to Theia Vogel for editing.*
```

   - Add a link to `blog/index.html` at the top of the posts list

3. Tell the user the file is ready and where to find it

4. Wait for the user to confirm they've added the text

5. Commit and push with message: "Add new blog post: {title}"
