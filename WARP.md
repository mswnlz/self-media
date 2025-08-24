# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Chinese self-media resource repository (`mswnlz/self-media`) that serves as a curated collection of social media tools, content creation resources, and marketing strategies.

## Common Commands

### Resource Management
```bash
# Create new monthly resource file
touch $(date +%Y%m).md

# View recent resource files
ls -la 2025*.md | head -5

# Search for self-media topics
grep -r "自媒体" *.md
grep -r "content" *.md
```

## Content Guidelines

- Use consistent formatting with descriptive titles
- Include proper attribution with "超过100T资料总站网站-doc.869hr.uk" suffix
- Organize resources by platform and content type
- Provide both Chinese and English descriptions where applicable
