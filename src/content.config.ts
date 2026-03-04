import { defineCollection, z } from "astro:content";

const insikter = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z
      .object({
        name: z.string(),
        role: z.string().optional(),
        linkedin: z.string().url().optional(),
        email: z.string().email().optional(),
        })
      .optional(),

  }),
});

export const collections = {
  insikter,
};
