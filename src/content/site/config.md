---
title: Astrordinary
description: A field notebook, kept in the open
url: https://astrordinary.pages.dev  # ← replace with your domain
locale: en

author:
  name: The Localhost Studio           # ← replace
  bio: A short line about who you are and what you write about.
  url: https://example.com  # ← replace
  # avatar: /images/avatar.jpg

# logo: /images/logo.svg
# ogImage: /images/og-default.jpg

navigation:
  - title: Articles
    url: /posts
  - title: Notes
    url: /notes

footerLinks:
  - title: About
    url: /about
  - title: Now
    url: /now
  - title: Colophon
    url: /colophon

social:
  - title: GitHub
    url: https://github.com/thelocalhoststudio
    icon: github
  # - title: Mastodon
  #   url: https://mastodon.social/@username  # ← replace or remove
  #   icon: mastodon
  - title: RSS
    url: /rss.xml
    icon: rss

heroText: Notes, observations, and the occasional long read.  # ← replace
footerCredits: "Copyright Astrordinary"  # ← replace with your tagline, or delete this line
postsPerPage: 8
recentPosts: 4
showLogo: false

browse:
  dimensions:
    - key: published
      slug: years
      title: Years
    - key: category
      slug: categories
      title: Categories
    - key: tags
      slug: tags
      title: Tags
    - key: trip
      slug: trips
      title: Trips
    - key: place
      slug: places
      title: Places
---

# Site configuration

This file lives in the Obsidian vault alongside the rest of the content —
edit the frontmatter above like any other note. Only the frontmatter is
read by the site (via `getConfig()` in `src/utils/config.ts`); everything
below this line is for you, not for the build. The file's own name gives
it its id (`config`) — don't add an `id` field.

Frontmatter is merged over the defaults in `src/site.config.ts` — only
include the fields you want to override. `author` merges one level deep
(setting just `author.bio` won't wipe `author.name`); everything else
(`navigation`, `social`, `browse.dimensions`, etc.) is a full replace, not
a merge.

## Site identity

- **title** — site name. Shown in the header, browser tab (` · <title>` on
  every page), and OG/social cards.
- **description** — one-line site description. Default meta description
  for pages that don't set their own.
- **url** — canonical domain. Also set `site` in `astro.config.mjs` to the
  same value (Astro needs it at the config level for sitemap/canonical URL
  generation; this field is for anywhere the site reads its own config at
  render time, e.g. structured data).
- **locale** — BCP-47 locale tag (`en`, `en-IN`, ...).

## Author

- **author.name** — required if you set `author` at all. Used in article
  JSON-LD (`author.name` on every post/note's structured data) and
  wherever the site credits an author.
- **author.bio** — short line about you. Not currently rendered anywhere
  in the UI as of this writing — safe to fill in for future use.
- **author.url** — your personal/portfolio site.
- **author.avatar** — path under `/public`. Commented out until you add one.

## Assets

- **logo** — path under `/public`, only used if `showLogo: true`.
- **ogImage** — fallback OG image path. Leave unset to use the generated
  per-page OG images from `/og/...png` (see `src/pages/og/[...path].png.ts`).

## Navigation

- **navigation** — top nav bar links, `{ title, url }[]`, in display order.
- **footerLinks** — footer links, same shape.

## Social

- **social** — `{ title, url, icon? }[]`. `icon` is optional and restricted
  to `github | mastodon | twitter | rss | email` — anything else fails the
  schema. Omit `icon` for a plain text link.

## Content display

- **heroText** — opening line on the homepage, under the site title.
- **footerCredits** — footer text. Omit the field entirely to hide it.
- **postsPerPage** — posts per archive/listing page.
- **recentPosts** — how many recent posts/notes show on the homepage.

## Flags

- **showLogo** — show `logo` in the header instead of the text title.

## Browse

Each entry in `browse.dimensions` turns post/note frontmatter into a
browsable index at `/browse/<slug>/`:

- **key** — where the value comes from. Built-in: `published` (groups by
  year), `category`, `tags`. Anything else looks up `meta.<key>` on each
  post/note.
- **slug** — URL segment (`/browse/<slug>/`).
- **title** — display name for the dimension's index page.

Unconfigured `meta` keys on your posts/notes are simply not browsable —
they don't error, they're just ignored until you add a dimension entry
for them here.
