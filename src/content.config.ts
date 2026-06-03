/**
 * Content Collections Schema Definitions (Astro v6+)
 *
 * These schemas define strict type safety for frontmatter metadata.
 * Currently prep for Round 3 — the actual migration of pages to use
 * getCollection() will happen then. For now, data is still fetched
 * via import.meta.glob in pages.
 *
 * Note: The experience directory has two frontmatter shapes:
 * - workExperience (company/role/duration)
 * - experienceOverview (type/years — used for the skills summary grid)
 * The schema uses .optional() on fields unique to each shape.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: 'case-study-*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    thumb: z.string(),
    collection: z.literal('portfolioWork'),
    collection_label: z.string(),
    project_link: z.boolean().optional(),
    featured: z.boolean().default(false),
    id: z.string(),
    type_productStrategy: z.boolean().default(false),
    type_productDesign: z.boolean().default(false),
    type_designSystem: z.boolean().default(false),
    type_research: z.boolean().default(false),
    type_leadership: z.boolean().default(false),
    type_dev: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const workExperience = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/posts/experience' }),
  schema: z.object({
    // Fields shared by both shapes
    specifics: z.string().optional(),
    collection: z.string(),
    productdesign: z.number().default(0),
    designsystems: z.number().default(0),
    researchandanalysis: z.number().default(0),
    leadershipandmentorship: z.number().default(0),
    productandstrategy: z.number().default(0),
    frontenddevelopment: z.number().default(0),
    date: z.coerce.date(),
    // workExperience shape
    company: z.string().optional(),
    location: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    // experienceOverview shape
    type: z.string().optional(),
    years: z.number().optional(),
  }),
});

const referrals = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/posts/referral' }),
  schema: z.object({
    title: z.string(),
    intro: z.string(),
    collection: z.literal('referral'),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/posts/gallery' }),
  schema: z.object({
    title: z.string().optional(),
    intro: z.string().optional(),
    thumb: z.string(),
    collection: z.string(),
    collection_label: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const profilePics = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/posts/profile-pic' }),
  schema: z.object({
    title: z.string().optional(),
    thumb: z.string(),
    featured: z.boolean().default(false),
  }),
});

const socialMedia = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/posts/socials' }),
  schema: z.object({
    title: z.string(),
    link: z.string(),
    collection: z.string().optional(),
  }),
});

export const collections = {
  caseStudies,
  workExperience,
  referrals,
  gallery,
  profilePics,
  socialMedia,
};
