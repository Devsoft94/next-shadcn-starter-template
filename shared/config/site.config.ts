export const siteConfig = {
  name: "Next JS Scafold",
  title: "Your Site Name — Short Tagline",
  description:
    "A brief, compelling description of your site used for SEO and social previews.",
  url: "https://example.com",
  ogImage: "https://example.com/og.png",

  // Open Graph locale (underscore format, used by og:locale)
  locale: "en_IN",

  // BCP 47 language tag (hyphen format, used by <html lang="...">)
  lang: "en-IN",

  keywords: [
    "nextjs",
    "react",
    "typescript",
    "tailwindcss",
  ],
  authors: [
    {
      name: "Your Name",
      url: "https://example.com",
    },
  ],
  creator: "Your Name",
  publisher: "Your Company",
  links: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
} as const

export type SiteConfig = typeof siteConfig