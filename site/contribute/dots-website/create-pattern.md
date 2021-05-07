---
title: Writing new patterns
layout: layouts/website-contributions.njk
---

# Writing new patterns

Before you start writing a new pattern, [get in touch](https://decentpatterns.xyz/contribute/) with the dots community to announce and discuss your idea!

## Step by Step

New patterns are added to the website by creating a new folder in the [`dots-patterns` repository's `patterns`](https://github.com/simplysecure/dots-patterns/tree/master/patterns) folder.

Here we are going to create the "Address" pattern as an example.

1. Create a folder `patterns/address` in the `dots-patterns` repository.
2. Create a file with the name `index.md` inside your new folder.
3. Write your pattern using Markdown syntax (see [Pattern Text](#pattern-text)).
4. Add metadata for the pattern at the top of the file (see [Adding Metadata](#metadata)).
5. Add a large illustration for your pattern as a file `illustration.svg` and a thumbnail version as `thumbnail.svg` (see [Formatting Illustrations](#illustrations)).
6. Create a pull request on Github.com and request a review from a project maintainer.
7. See your new pattern appear on the DOTS website after your pull request is merged!

## Pattern Text

### Structure

Every pattern starts with a general description of the design problem. We first want to quickly answer the question, "What makes the user story particularly interesting or different when the application uses decentralized technology?" Readers should then be able to understand how the pattern solves this problem, why one would choose this pattern (and why not), and real-world examples of where it has been used.

[See the full pattern template here](https://github.com/simplysecure/dots-patterns/issues/new?assignees=&labels=pattern-submission&template=pattern-proposal-template.md&title=%5Bsubmission%5D)

### Related Patterns and Wikilinks

All the patterns of the library should be interlinked. Patterns don't stand alone, they are connected and in relation to other patterns. Use Wikilinks to add links to other patterns to your pattern text. They are formatted like

    [[pattern name]]

and automatically converted to hyperlinks. Adding a wikilink to a pattern also adds the linked pattern to the _related patterns_ section of the pattern page.

### Examples

Include examples of your pattern in the wild in the form of screenshots. Place the image files for these screenshots in your pattern's directory and make sure they are in an adequate size and compression - keep in mind that some visitors of the library may have limited internet bandwidth.

You can then use the `::: examples` syntax to include your examples in the pattern. Please see existing patterns or the [Markdown style guide](../style-guide-markdown) for examples of this. Make sure to include an _alt text_ of the image and a _description_ of the example.

## Metadata

Metadata lets us embed your new pattern in the right places in the website. You can add metadata to your pattern by inserting the following lines at the top of the `index.md` file.

```
---
title: A title for your pattern
topic: your-topic
description: "A description of your pattern"
---
```

Add a title and short description to this template.

Select a fitting category for your pattern by entering one of the following choices in the `topic:` line:

- identity-agency
- moderation-curation
- sharing-permissions
- sync-status

See the [pattern library page](http://decentpatterns.xyz/library) for descriptions of these topics.

## Illustrations

<span class="text-highlight">Help needed! We need help describing the image format used for the existing illustrations so that new illustrations may be created in similar style and size.</span>
