// src/app/sitemap.js
// Generates https://yourdomain.com/sitemap.xml
import { navigationMenu } from "@/lib/nav";

export const revalidate = 3600; // refresh every 1 hour

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_WEBSITE_URL ||
  "https://jivanparivartan.com";

// --- helpers ---
function normalizePath(path = "") {
  if (!path) return "/";
  if (!path.startsWith("/")) return `/${path}`;
  return path;
}

function isExternal(href = "") {
  return /^https?:\/\//i.test(href);
}

function uniqByUrl(items) {
  const map = new Map();
  items.forEach((it) => map.set(it.url, it));
  return [...map.values()];
}

function flattenNav(items = []) {
  const out = [];

  const walk = (nodeList) => {
    for (const node of nodeList) {
      if (!node) continue;

      // support href/url keys
      const href = node.href || node.url;
      if (href && !isExternal(href)) out.push(normalizePath(href));

      const children = []
        .concat(node.children || [])
        .concat(node.items || []);

      if (children.length) walk(children);
    }
  };

  walk(items);
  return out;
}

export default async function sitemap() {
  const now = new Date();

  // Base static routes (add/remove as needed)
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/programs",
    "/gallery",
    "/meditation",
    "/reiki",
    "/singing-bowl",
    "/training",
    "/meditation-retreat",
    "/corporate-retreat",
  ];

  // Pull routes from your nav too (so menu changes auto-update sitemap)
  const navRoutes = flattenNav(navigationMenu);

  const routes = [...new Set([...staticRoutes, ...navRoutes])];

  const entries = routes.map((path) => {
    const url = `${SITE_URL}${normalizePath(path)}`;

    // Simple SEO defaults (tweak priorities if you want)
    const isHome = path === "/";
    const isTopLevel = path.split("/").filter(Boolean).length <= 1;

    return {
      url,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isTopLevel ? "monthly" : "monthly",
      priority: isHome ? 1 : isTopLevel ? 0.8 : 0.6,
    };
  });

  return uniqByUrl(entries);
}
