import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

type Props = {
  currentSlug?: string;
  limit?: number;
};

export default function LatestPostsCard({ currentSlug, limit = 6 }: Props) {
  const posts = getAllPosts()
    .filter((p) => (currentSlug ? p.slug !== currentSlug : true))
    .slice(0, limit);

  return (
    <section className="bg-white rounded-2xl shadow-sm ring-1 ring-black/10 overflow-hidden">
      <div className="px-5 py-4 flex items-center justify-between border-b border-black/10">
        <h2 className="text-sm font-semibold text-gray-950">Latest posts</h2>
        <Link href="/blog" className="text-sm font-semibold text-emerald-800 hover:underline">
          View all
        </Link>
      </div>

      <div className="p-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-3 rounded-xl p-3 hover:bg-emerald-50/60 transition"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10 bg-gray-100">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="64px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: post.imageFocus ?? "center" }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-950 line-clamp-2 group-hover:text-emerald-900 transition-colors">
                {post.title}
              </p>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-600">
                <time dateTime={new Date(post.date).toISOString()}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <span className="text-gray-300">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="px-3 py-4 text-sm text-gray-600">No posts yet.</p>
        )}
      </div>
    </section>
  );
}
