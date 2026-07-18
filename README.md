# Patrika

A field-notebook blog template built on Astro 7, content collections, and Tailwind CSS v4. Content lives as Markdown/MDX and is meant to be edited from an Obsidian vault, but any editor works.

## Content model

```text
src/content/
├── posts/          longer essays  (src/pages/posts/[...slug].astro)
├── notes/          short entries  (src/pages/notes/[...slug].astro)
├── pages/          standalone pages (about, now, colophon, ...)
└── siteConfig/
    └── config.yaml site identity, navigation, and browse dimensions
```

Posts and notes share a `category`, `tags`, and a free-form `meta` object.
Any key you add under `meta` (e.g. `trip`, `place`) becomes a browsable
dimension automatically — configure it under `browse.dimensions` in
`config.yaml`. `/browse/` lists every configured dimension; `/browse/<slug>/`
lists its values; `/browse/<slug>/<value>/` lists the matching posts and
notes.

Site-wide settings (title, author, navigation, hero text, browse dimensions)
are defined in `src/site.config.ts` as defaults and overridden per-deployment
in `src/content/siteConfig/config.yaml` — only override what you need.

## Development

```sh
astro dev --background   # start the dev server in the background
astro dev stop            # stop it
astro dev status          # check if it's running
astro dev logs            # tail its output
```

```sh
astro build     # build to ./dist/
astro preview   # preview the production build locally
```

## Before you publish

- `src/content/siteConfig/config.yaml` — replace the `# ← replace` placeholders (title, author, url, social links).
- `astro.config.mjs` — set `site` to your real domain.
- `src/content/pages/` and `src/content/posts|notes/` — replace the sample content with your own.

## Learn more

[Astro documentation](https://docs.astro.build)
