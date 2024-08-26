import { type CollectionEntry, getCollection } from "astro:content";
import { slugify } from "./commonFunctions";
import fs from 'fs';
import path from 'path';

const isProd = import.meta.env.PROD;

/** filter out draft posts based on the environment and sorts the posts by published date*/
export async function getAllPublishedPosts() {
	const filteredPosts: CollectionEntry<'articles'>[] = await getCollection("articles");
  return filteredPosts
    .filter((post:CollectionEntry<"articles">) => {
      return isProd ? !post.data.draft : true;
    })
    .sort((post1: CollectionEntry<"articles">, post2: CollectionEntry<"articles">) => {
      return new Date(post1.data.publishedDate).getTime() - new Date(post2.data.publishedDate).getTime();
    })
}

export function getLimitedPosts(
  allPosts: CollectionEntry<'articles'>[], 
  limit: undefined ) {
    const filteredPosts: CollectionEntry<'articles'>[] = allPosts;
    if (typeof limit === "number") {
      return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(
  posts: CollectionEntry<"articles">[]) {
	  return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(
  posts: CollectionEntry<"articles">[]) {
	  return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(
  posts: CollectionEntry<"articles">[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}

export async function getGalleryImages(galleryPath: string) {
  // 1. List all gallery files from collections path
  let images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/**/*.{jpeg,jpg}"
  );

  
  // 2. Filter images by galleryId
  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(galleryPath))
  );

  // 3. Images are promises, so we need to resolve the glob promises
  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default))
  );

  // 4. Shuffle images in random order
  resolvedImages.sort(() => Math.random() - 0.5);
  return resolvedImages;
}


export function loadInternalGalleryImages(galleryPath: string): { imagePath: string; alt?: string; caption?: string }[] {
  let images = import.meta.glob("/src/assets/**/*.{jpeg,jpg}");

  images = Object.fromEntries(
    Object.entries(images).filter(([key]) => key.includes(galleryPath))
  );

  return Object.keys(images).map((key) => ({
    imagePath: images[key],
    alt: '',
    caption: ''
  }));
}