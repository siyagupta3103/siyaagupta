import { createFileRoute } from "@tanstack/react-router";
import { portfolioHtml } from "@/content/portfolio-html";

const title = "Siya Gupta — Full-Stack Developer & Cybersecurity";
const description =
  "Full-stack developer and cybersecurity student building and auditing production-grade web platforms end to end.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "author", content: "Siya Gupta" },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: "/siya-cutout.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <div dangerouslySetInnerHTML={{ __html: portfolioHtml }} />;
}
