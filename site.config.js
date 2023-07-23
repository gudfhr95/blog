const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Hyungstler",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "Hustle & Bustle",
    email: "ghldnjsdlf@gmail.com",
    linkedin: "hyungrok-ham",
    github: "gudfhr95",
    instagram: "hyungstler",
  },
  /*
  projects: [
    {
      name: `morethan-log`,
      href: "https://github.com/morethanmin/morethan-log",
    },
  ],
  */
  // blog setting (required)
  blog: {
    title: "Hyungstler's Blog",
    description: "Hustle & Bustle",
  },

  // CONFIG configration (required)
  link: "https://hyungstler.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Blog",
      "블로그",
      "Developer",
      "개발자",
      "Algorithm",
      "알고리즘",
      "System Design",
      "시스템 디자인",
      "Architecture",
      "아키텍처",
      "Book",
      "책",
    ],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  giscus: {
    enable: true,
    config: {
      repo: "gudfhr95/blog",
      "repo-id": "R_kgDOJ-yvVg",
      category: "Announcements",
      "category-id": "DIC_kwDOJ-yvVs4CYE8U",
      mapping: "pathname",
      strict: "1",
      "reactions-enabled": "1",
      "emit-metadata": "0",
      "input-position": "top",
      lang: "ko",
      loading: "lazy",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
