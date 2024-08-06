import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
      title: z.string(),
      excerpt: z.string().default("").optional(),
      featuredImage: z.string().default("/images/placeholder.png"),
      tags: z.array(z.string()).default(["Undefined"]).optional(),
      draft: z.boolean().default(false).optional(),
      publishedDate: z.date(),
  })
});

export const collections = { articles };