/**
 * Browse utilities.
 *
 * Purely mechanical: these functions read whatever key they're given out of
 * an entry's `meta` object and compare slugs. They assign no meaning to any
 * key — "place", "trip", or anything else is only ever a config value
 * passed in by the caller (see site.config.ts's `browse.indexes`).
 */

import type { Post, Note } from "./content";
import { slugify } from "./text";

export type Entry = Post | Note;

export interface BrowseValue {
  value: string;
  slug:  string;
  count: number;
}

function metaValuesOf(entry: Entry, key: string): string[] {
  const raw = entry.data.meta?.[key];

  if (!raw) return [];

  return Array.isArray(raw) ? raw : [raw];
}

/**
 * Every unique value configured `key` takes across the given entries,
 * sorted alphabetically. Each value carries its slug (for linking to
 * /browse/<indexSlug>/<valueSlug>).
 */
export function getMetaValues(entries: Entry[], key: string): BrowseValue[] {
  const values = new Map<
    string,
    { value: string; count: number }
  >();

  for (const entry of entries) {
    for (const value of metaValuesOf(entry, key)) {
      const slug = slugify(value);
      if (!slug) continue;

      const existing = values.get(slug);

      if (existing) {
        existing.count++;
      } else {
        values.set(slug, {
          value,
          count: 1,
        });
      }
    }
  }

  return Array.from(values, ([slug, { value, count }]) => ({
    slug,
    value,
    count,
  })).sort((a, b) => a.value.localeCompare(b.value));
}

/** Entries whose `meta[key]` (flattened) includes the given value slug. */
export function filterByMetaSlug(
  entries: Entry[],
  key: string,
  valueSlug: string
): Entry[] {
  return entries.filter((entry) =>
    metaValuesOf(entry, key).some((value) => slugify(value) === valueSlug)
  );
}

/** Unique publication years across the given entries, newest first. */
export function getYears(entries: Entry[]): BrowseValue[] {
  const years = new Map<string, number>();

  for (const entry of entries) {
    const year = String(entry.data.published.getFullYear());

    years.set(year, (years.get(year) ?? 0) + 1);
  }

  return Array.from(years, ([value, count]) => ({
    value,
    slug: value,
    count,
  })).sort((a, b) => Number(b.value) - Number(a.value));
}

/** Entries published in the given year. */
export function filterByYear(entries: Entry[], year: string): Entry[] {
  return entries.filter(
    (entry) => String(entry.data.published.getFullYear()) === year
  );
}
