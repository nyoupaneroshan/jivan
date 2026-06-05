// src/app/sitemap.js
import { navigationMenu } from "@/lib/nav";

export const revalidate = 3600;

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXT_PUBLIC_WEBSITE_URL ||
  "https://jivanparivartan.com";

const EXCLUDED_PATHS = new Set([
  "/404",
  "/thank-you",
  "/privacy-policy-draft",
  "/admin",
]);

function normalizePath(path = "") {
  if (!path) return "/";

  let clean = String(path).trim();

  if (!clean) return "/";

  if (isExternal(clean)) return null;
  if (clean.startsWith("#")) return null;
  if (clean.startsWith("mailto:")) return null;
  if (clean.startsWith("tel:")) return null;

  if (!clean.startsWith("/")) clean = `/${clean}`;

  clean = clean.split("#")[0].split("?")[0];

  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }

  return clean;
}

function isExternal(href = "") {
  return /^https?:\/\//i.test(href);
}

function shouldInclude(path) {
  if (!path) return false;
  if (EXCLUDED_PATHS.has(path)) return false;
  return true;
}

function uniqByUrl(items) {
  const map = new Map();
  for (const item of items) {
    if (!item?.url) continue;
    map.set(item.url, item);
  }
  return [...map.values()];
}

function flattenNav(items = []) {
  const out = [];

  function walk(nodeList = []) {
    for (const node of nodeList) {
      if (!node) continue;

      const href = node.href || node.url;
      const normalized = normalizePath(href);

      if (normalized && shouldInclude(normalized)) {
        out.push(normalized);
      }

      const children = [
        ...(node.children || []),
        ...(node.items || []),
      ];

      if (children.length) walk(children);
    }
  }

  walk(items);
  return out;
}

function getPriority(path) {
  if (path === "/") return 1.0;

  const highPriorityRoutes = new Set([
    "/about",
    "/contact",
    "/programs",
    "/meditation",
    "/reiki",
    "/singing-bowl",
    "/training",
    "/corporate-retreat",
    "/meditation-retreat",
  ]);

  if (highPriorityRoutes.has(path)) return 0.9;

  const depth = path.split("/").filter(Boolean).length;
  if (depth === 1) return 0.8;
  if (depth === 2) return 0.7;

  return 0.6;
}

function getChangeFrequency(path) {
  if (path === "/") return "weekly";

  const frequentlyUpdatedRoutes = new Set([
    "/programs",
    "/gallery",
    "/blog",
  ]);

  if (frequentlyUpdatedRoutes.has(path)) return "weekly";

  return "monthly";
}

export default async function sitemap() {
  const now = new Date();

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

  const navRoutes = flattenNav(navigationMenu);

  const routes = [...new Set([...staticRoutes, ...navRoutes])]
    .map(normalizePath)
    .filter((path) => path && shouldInclude(path));

  const entries = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: getChangeFrequency(path),
    priority: getPriority(path),
  }));

  return uniqByUrl(entries);
}