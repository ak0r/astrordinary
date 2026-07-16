---
title: Typography Test
description: A living reference for testing markdown rendering and typography.
category: Reference
published: 2026-07-16
---

The purpose of this page is simple: every Markdown element should appear at least once. If this page looks balanced, every article on the site will look balanced.

## Paragraphs

Typography succeeds when it disappears. The reader should notice ideas, not styling. A comfortable measure, generous line height, and consistent spacing matter far more than decorative effects.

A paragraph can contain **bold text**, *emphasized text*, ~~strikethrough~~, `inline code`, abbreviations like HTML and CSS, and a link to [Astro](https://astro.build).

---

## External Links

This paragraph links to [Astro](https://astro.build), [MDN](https://developer.mozilla.org/), and [OpenStreetMap](https://www.openstreetmap.org/). External links should be distinguishable without distracting from the surrounding text.

---

## Images

![Placeholder image](https://placehold.co/1200x675)

A paragraph should continue naturally after an image.

<figure>
  <img src="https://placehold.co/1200x675" alt="Placeholder image" />
  <figcaption>
    Figure 1. A simple caption demonstrating spacing and typography.
  </figcaption>
</figure>

---

## Lists

### Unordered

- One item
- Another item
- A longer list item that wraps onto multiple lines to verify indentation.
  - Nested item
  - Another nested item
- Final item

### Ordered

1. First step
2. Second step
3. Third step
   1. Nested step
   2. Another nested step

---

## Task List

- [x] Finished item
- [ ] Remaining item
- [ ] Another unfinished task

---

## Blockquote

> We shape our tools, and thereafter our tools shape us.
>
> — Marshall McLuhan

---

## Aside

:::aside
Looking twice often reveals more than looking longer.
:::

---

## Code

Inline code like `Array.prototype.map()` should blend naturally into the text.

```ts
interface Article {
  title: string;
  published: Date;
}

const articles = await getCollection("articles");

const recent = articles
  .sort((a, b) => b.data.published.getTime() - a.data.published.getTime())
  .slice(0, 5);