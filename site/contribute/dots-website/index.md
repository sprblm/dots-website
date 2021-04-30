---
layout: article
title: Contributing to the DOTS website
body_class: contribute-website
---

# Contributing to the DOTS website

Here you find ressources that can help when editing this website.

## README.md

Please refer to the project [README](https://github.com/simplysecure/dots-website/tree/master/README.md) for information on how to set up a development environment and some helpful pointers on the directory structure, the `dots-patterns` subrepo and Github actions used to commission the site.

## Style Guides

There are style guides that help when creating pages using [Nunjucks](./style-guide-nunjucks) and [Markdown](./style-guide-markdown). They contain commonly used elements that can be copied from the guide's source code.

## Writing a new pattern

Refer to [this guide](./create-pattern) and look at the sources for existing patterns when creating new ones.

## Adding new pages to the DOTS website

A couple of things to keep in mind when creating new content on the DOTS website (that is not a pattern):

- Add new pages by creating `.md` or `.njk` files in the `site` directory and its subdirectories.
- Add a YAML-formatted section delineated by dashes (`---`) to define metadata for the page
  - Use `layout: default` to inject header, footer and base styles into your new page
  - Use `layout: article` for additional styles that make reading content easier
  - Use `title: <page title>` to give your page a `<title>` HTML tag
  - Add a line `body_class: <page_name>` with your page name to apply an HTML id to the whole page that can be used for applying page-specific styles (see next tip)
- SCSS styles are available globally and included from `styles/main.scss`, which imports scss from various files in that directory.
  - Add a scss file in `styles/pages/<pagename>.scss`, include it in `styles/pages/_all.scss` and define rules for your page by placing them inside a `#<page_name>` selector in that file. Refer to `style-guide.scss` and `style-guide-nunjucks.njk` for an example.
