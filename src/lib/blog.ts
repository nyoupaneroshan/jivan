import "server-only";
import fs from "fs";
import path from "path";

export const BLOG_CATEGORIES = [
  "yoga",
  "meditation",
  "wellness",
  "spirituality",
  "retreats",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

 

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt?: string;
  featured?: boolean;
  tags?: string[];
  content: BlogBlock[];

  // ✅ add these:
  imageFocus?: string;
  imageFit?: "cover" | "contain";
};

const BLOG_DIR_CANDIDATES = [
  path.join(process.cwd(), "content", "blog"),
  path.join(process.cwd(), "src", "content", "blog"),
] as const;

let _resolvedBlogDir: string | null = null;

function resolveBlogDir(): string | null {
  if (_resolvedBlogDir) return _resolvedBlogDir;

  for (const dir of BLOG_DIR_CANDIDATES) {
    if (fs.existsSync(dir)) {
      _resolvedBlogDir = dir;
      return dir;
    }
  }

  return null;
}

export function getBlogDir(): string | null {
  return resolveBlogDir();
}

export function getAllBlogSlugs(): string[] {
  const dir = resolveBlogDir();
  if (!dir) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[blog] No blog directory found. Checked: ${BLOG_DIR_CANDIDATES.join(
          " | "
        )}`
      );
    }
    return [];
  }

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".json"))
    .map((d) => d.name.replace(/\.json$/, ""));
}

function normalizeCategory(input: unknown): BlogCategory | null {
  if (typeof input !== "string") return null;
  const x = input.trim().toLowerCase();
  return (BLOG_CATEGORIES as readonly string[]).includes(x) ? (x as BlogCategory) : null;
}

function isIsoDateYYYYMMDD(date: unknown): date is string {
  return typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date);
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllBlogSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null);

  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const dir = resolveBlogDir();
  if (!dir) return null;

  const filePath = path.join(dir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw) as Partial<BlogPost>;

    // Required fields (don’t silently fail without telling you why in dev)
    const missing: string[] = [];
    if (!data.title) missing.push("title");
    if (!data.excerpt) missing.push("excerpt");
    if (!data.image) missing.push("image");
    if (!data.date) missing.push("date");

    if (missing.length) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[blog] Skipping "${slug}" (missing: ${missing.join(", ")})`);
      }
      return null;
    }

    if (!isIsoDateYYYYMMDD(data.date)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `[blog] Skipping "${slug}" (date must be YYYY-MM-DD). Got: ${String(data.date)}`
        );
      }
      return null;
    }

    const safeSlug = slug; // force filename slug
const safeId = (data.id && String(data.id)) || safeSlug;

if (process.env.NODE_ENV !== "production" && data.slug && data.slug !== slug) {
  console.warn(
    `[blog] Slug mismatch in "${slug}.json": file slug="${slug}" but JSON slug="${data.slug}". Using file slug.`
  );
}


    const cat = normalizeCategory(data.category) ?? "wellness";

    const post: BlogPost = {
  id: safeId,
  slug: safeSlug,
  title: String(data.title),
  excerpt: String(data.excerpt),
  category: cat,
  author: data.author ? String(data.author) : "Jivan Parivartan",
  date: data.date,
  readTime: data.readTime ? String(data.readTime) : "5 min read",
  image: String(data.image),
  imageAlt: data.imageAlt ? String(data.imageAlt) : String(data.title),
  featured: Boolean(data.featured),
  imageFocus: typeof (data as any).imageFocus === "string" ? (data as any).imageFocus : "center", // NEW
  content: Array.isArray(data.content) ? (data.content as BlogBlock[]) : [],
  tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
imageFit: (data as any).imageFit === "contain" ? "contain" : "cover",

};


    return post;
  } catch (e) {
    console.error(`[blog] Error reading "${slug}" from ${filePath}:`, e);
    return null;
  }
}
