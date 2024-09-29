import { z, defineCollection } from "astro:content";

const postWithGallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string().default("").optional(),
    featuredImage: z.string().default("/images/placeholder.png"),
    tags: z.array(z.string()).default(["Undefined"]).optional(),
    draft: z.boolean().default(false).optional(),
    publishedDate: z.date(),
    coverImage: z.object({  // featured image of the post
      imagePath: z.string(), // Path to image
      description: z.string().optional(), // Alt text for accessibility
    }),
    gallery: z.object({
      galleryTitle: z.string().optional(),
      galleryDescription: z.string().optional(),
      useInternalGallery: z.boolean().default(false).optional(),
      externalImages: z.array( // List of external images as gallery
        z.object({
          imagePath: z.string(), // Path to external image
          imageAlt: z.string().optional(),
        })
      ).optional(),
    })
  })
});

export const collections = { 
  articles: postWithGallery,
};