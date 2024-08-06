import { type CollectionEntry, getCollection } from "astro:content";
import { slugify } from "./commonFunctions";

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



