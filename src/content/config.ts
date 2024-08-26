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
      attachedImages: z.object({
        featured: z.object({  // featured image of the post
          imagePath: z.string(), // Path to image
          description: z.string().optional(), // Alt text for accessibility
        }),
        gallery: z.object({
          galleryTitle: z.string().optional(), // Title of the gallery 
          galleryPath: z.string().optional(), // Directory where images are stored. Needs to be at /src/images/*
        }).optional(),
      }),
  })
});

const externalGallery = defineCollection({
  type: "content",
  schema: z.object({
      title: z.string(),
      excerpt: z.string().default("").optional(),
      featuredImage: z.string().default("/images/placeholder.png"),
      tags: z.array(z.string()).default(["Undefined"]).optional(),
      draft: z.boolean().default(false).optional(),
      publishedDate: z.date(),
      attachedImages: z.object({
        featured: z.object({  // featured image of the post
          imagePath: z.string(), // Path to image
          description: z.string().optional(), // Alt text for accessibility
        }),
        externalImages: z.array( // List of external images as gallery
          z.object({
            imagePath: z.string(), // Path to external image
            imageAlt: z.string().optional(),
          })
        ).optional(),
      }),
  })
});

export const collections = { 
  articles: postWithGallery,
  galleries: externalGallery,
};