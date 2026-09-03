import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  const [showTop, setShowTop] = useState(false);
  const topBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Reveal animations for names and section elements
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );

    // Re-observe whenever React re-renders the raw HTML container,
    // since replaced nodes detach from the observer.
    const observeAll = () => {
      document.querySelectorAll(".name-reveal, .reveal").forEach((el) => {
        const delay = (el as HTMLElement).style.transitionDelay;
        if (delay) {
          (el as HTMLElement).style.setProperty("--reveal-delay", delay);
        }
        observer.observe(el);
      });
    };
    observeAll();

    const container = document.getElementById("portfolio-root");
    const mutation = new MutationObserver(observeAll);
    if (container) {
      mutation.observe(container, { childList: true, subtree: true });
    }

    // Back-to-top visibility
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: portfolioHtml }} />
      <button
        ref={topBtnRef}
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
