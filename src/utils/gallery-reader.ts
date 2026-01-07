// src/utils/gallery-reader.ts
import * as fs from 'fs';
import * as path from 'path';

// Define the relative path to the public directory from the project root
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const GALLERY_PATH = 'img';
const FULL_GALLERY_PATH = path.join(PUBLIC_DIR, GALLERY_PATH);

/**
 * Reads the public/img/gallery directory and returns an array of
 * root-relative paths required by the Next.js Image component.
 * @returns {string[]} An array of paths like ['/img/gallery/1.jpg', '/img/gallery/2.png']
 */
export function getGalleryImages(): string[] {
  try {
    // 1. Read the contents of the directory
    const filenames = fs.readdirSync(FULL_GALLERY_PATH);
    
    // 2. Filter for common image extensions
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

    // 3. Map filenames to the public, root-relative paths
    const imagePaths = filenames
      .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map(file => `/${GALLERY_PATH}/${file}`);

    return imagePaths;

  } catch (error) {
    console.error(`Error reading gallery directory: ${FULL_GALLERY_PATH}`, error);
    // Return an empty array if the folder is missing or there's an error
    return [];
  }
}