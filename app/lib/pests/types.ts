// app/lib/pests/types.ts

export interface PestFAQ {
  question: string;
  answer: string;
}

export interface ImageAttribution {
  author: string;
  sourceName: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  originalUrl?: string;
}

export interface PestSpecies {
  name: string;
  image?: string;      
  imageAttribution?: ImageAttribution;
  description: string[];
}

export interface PestContentSection {
  heading: string;
  body: string;
}

export interface Pest {
  /** URL slug used in /pests/[slug] */
  slug: string;

  /** Page + SEO title (eg: "Ant Control") */
  name: string;

  /** Hero headline shown over the image */
  heroTitle: string;

  /** Supporting hero text (short, mobile friendly) */
  heroSubtitle: string;

  /** Image Attribution Optional */
  heroImageAttribution?: ImageAttribution;

  /** Full-width hero image (Next/Image compatible path) */
  heroImage: string;

  /** Optional icon for cards/lists */
  icon: string;

  /** Intro / overview sections */
  intro: string[];

  /** Detailed overview or long-form content sections */
  overview?: string[];

  /** Why this pest is a problem in Moreton Bay, Sunshine Coast & Bribie Island */
  whyItsAProblem?: string[];

  /** Species / subspecies info */
  species?: PestSpecies[];

  /** Prevention tips */
  prevention?: string[];

  /** Treatment / control tips */
  treatment?: string[];

  /** FAQ section specific to this pest */
  faq?: PestFAQ[];

  /** CTA override */
  ctaTitle?: string;
  ctaText?: string;
  ctaLink?: string;
}
