import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type Category = { id: string; label: string };
type Item = { src: string; alt: string; category: string };

const GALLERY_DIR = path.join(process.cwd(), "public", "img", "gallery");

const isImage = (name: string) => /\.(jpe?g|png|webp|gif)$/i.test(name);
const toId = (folder: string) =>
  folder.trim().toLowerCase().replace(/\s+/g, "-"); // "Singing Bowl" -> "singing-bowl"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category") ?? "all";
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const limit = Math.min(60, Math.max(6, Number(searchParams.get("limit") ?? "18")));

  // Read category folders
  const dirents = await fs.readdir(GALLERY_DIR, { withFileTypes: true });
  const folders = dirents
    .filter((d) => d.isDirectory() && !d.name.startsWith("."))
    .map((d) => d.name)
    .sort((a, b) => a.localeCompare(b));

  const categories: Category[] = [
    { id: "all", label: "All" },
    ...folders.map((name) => ({ id: toId(name), label: name })),
  ];

  // Build item list (flat) from folders
  const allItems: Item[] = [];
  for (const folderName of folders) {
    const folderId = toId(folderName);
    if (category !== "all" && category !== folderId) continue;

    const folderPath = path.join(GALLERY_DIR, folderName);
    const files = (await fs.readdir(folderPath))
      .filter((f) => !f.startsWith(".") && isImage(f))
      .sort((a, b) => a.localeCompare(b));

    for (const file of files) {
      allItems.push({
        src: `/img/gallery/${encodeURIComponent(folderName)}/${encodeURIComponent(file)}`,
        alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " "),
        category: folderId,
      });
    }
  }

  // Paginate
  const total = allItems.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const items = allItems.slice(start, end);
  const hasMore = end < total;

  return NextResponse.json({ categories, items, page, limit, total, hasMore });
}
