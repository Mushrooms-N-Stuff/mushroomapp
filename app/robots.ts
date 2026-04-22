import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly allow major AI crawlers so our content is eligible
      // for citation in AI search engines and overviews.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
          "Bytespider",
          "Amazonbot",
          "DuckAssistBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
