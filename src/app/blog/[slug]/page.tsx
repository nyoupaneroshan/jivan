import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { getPostBySlug, type BlogBlock } from "@/lib/blog";
import LatestPostsCard from "@/components/jivan/blog/LatestPostsCard";

export const runtime = "nodejs";
export const dynamicParams = true;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jivanparivartan.com";
const metadataBase = new URL(siteUrl);

// Adjust this to your real sticky header height (top bar + nav)
const HEADER_OFFSET_PX = 140;

type PageProps = {
  params: Promise<{ slug: string }>;
};

type BlockType = BlogBlock;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const publishedIso = new Date(post.date).toISOString();
  const url = `${siteUrl}/blog/${slug}`;
  const title = `${post.title} | Jivan Parivartan`;
  const description = (post.excerpt ?? "").slice(0, 155);
  const ogImageAbs = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  return {
    metadataBase,
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    keywords: post.tags?.length ? post.tags : undefined,
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: publishedIso,
      authors: [post.author],
      tags: [post.category, ...(post.tags ?? [])],
      images: [{ url: ogImageAbs, alt: post.imageAlt ?? post.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImageAbs] },
  };
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function RichText({ text }: { text: string }) {
  const parts: Array<{ type: "text" | "link"; value: string; href?: string }> = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const [full, label, href] = match;
    const start = match.index;

    if (start > lastIndex) parts.push({ type: "text", value: text.slice(lastIndex, start) });
    parts.push({ type: "link", value: label, href });
    lastIndex = start + full.length;
  }

  if (lastIndex < text.length) parts.push({ type: "text", value: text.slice(lastIndex) });

  return (
    <>
      {parts.map((p, i) =>
        p.type === "link" ? (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-800 no-underline hover:underline"
          >
            {p.value}
          </a>
        ) : (
          <React.Fragment key={i}>{p.value}</React.Fragment>
        )
      )}
    </>
  );
}

function Block({ block }: { block: BlockType }) {
  if (block.type === "h2") {
    const id = slugify(block.text);
    return (
      <h2 id={id} style={{ scrollMarginTop: `${HEADER_OFFSET_PX + 24}px` }}>
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    const id = slugify(block.text);
    return (
      <h3 id={id} style={{ scrollMarginTop: `${HEADER_OFFSET_PX + 24}px` }}>
        {block.text}
      </h3>
    );
  }

  if (block.type === "p") {
    return (
      <p>
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((x) => (
          <li key={x}>
            <RichText text={x} />
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blog" },
    { label: post.title },
  ];

  const publishedDate = new Date(post.date);
  const isoDate = publishedDate.toISOString();
  const readableDate = publishedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const pageUrl = `${siteUrl}/blog/${slug}`;
  const imageAbs = post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: post.title,
    description: post.excerpt,
    image: [imageAbs],
    datePublished: isoDate,
    dateModified: isoDate,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Jivan Parivartan",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` }
    },
    articleSection: post.category,
    keywords: post.tags?.join(", ")
  };

  const toc = post.content
    .filter((b): b is { type: "h2" | "h3"; text: string } => b.type === "h2" || b.type === "h3")
    .map((b) => ({ id: slugify(b.text), label: b.text, level: b.type }));

  const heroFit = post.imageFit ?? "cover";
  const heroObjectPosition = post.imageFocus ?? "center";

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="min-h-screen bg-[radial-gradient(70%_45%_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)]">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-5 lg:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
            <main>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />

              {/* HERO (full width, premium) */}
              <section className="bg-white rounded-3xl shadow-sm ring-1 ring-black/10 overflow-hidden">
                <div className="relative h-[280px] sm:h-[360px] lg:h-[420px] bg-gradient-to-br from-emerald-50 to-white">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 820px"
                    className={heroFit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover"}
                    style={{ objectPosition: heroObjectPosition }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-10">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-900 px-3 py-1 font-semibold">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                    <span className="text-gray-300">•</span>
                    <time dateTime={isoDate}>{readableDate}</time>
                  </div>

                  <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
                    {post.title}
                  </h1>

                  <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm text-gray-700">
                      By <span className="font-semibold text-gray-950">{post.author}</span>
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                                 bg-emerald-700 text-white hover:bg-emerald-800 transition"
                    >
                      Talk to our team
                    </Link>
                  </div>
                </div>
              </section>

              {/* BODY */}
              <section className="mt-6 bg-white rounded-3xl shadow-sm ring-1 ring-black/10">
                <div className="px-6 sm:px-10 py-10">
  {/* Reading container: prevents long ugly lines */}
  <div className="mx-auto w-full max-w-prose">
    {/* Premium typography rules */}
    <div
      className={[
        "prose prose-emerald prose-lg max-w-none",
        "text-gray-800",

        // Headings: more space + stronger hierarchy
        "prose-headings:text-gray-950 prose-headings:tracking-tight",
        "prose-h2:text-2xl sm:prose-h2:text-3xl",
        "prose-h2:mt-12 prose-h2:mb-4",
        "prose-h3:text-xl sm:prose-h3:text-2xl",
        "prose-h3:mt-8 prose-h3:mb-3",

        // Paragraphs: professional readability
        "prose-p:leading-8 prose-p:text-gray-800",
        "prose-p:my-5",

        // Lists: spacing + bullets not cramped
        "prose-ul:my-6 prose-ol:my-6",
        "prose-li:my-2 prose-li:leading-8",

        // Links
        "prose-a:text-emerald-800 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline",

        // Quotes & rules
        "prose-blockquote:border-emerald-200 prose-blockquote:text-gray-700",
        "prose-hr:border-black/10",

        // Prevent “giant first paragraph” feel
        "prose-p:first:mt-0"
      ].join(" ")}
    >
      {post.content?.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </div>

    {/* Optional: subtle divider before tags / footer */}
    <div className="mt-10 border-t border-black/10 pt-6" />
  </div>
</div>

              </section>
            </main>

            {/* SIDEBAR */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {toc.length > 0 && (
                <section className="bg-white rounded-2xl shadow-sm ring-1 ring-black/10 overflow-hidden">
                  <div className="px-5 py-4 border-b border-black/10">
                    <h2 className="text-sm font-semibold text-gray-950">On this page</h2>
                  </div>

                  {/* Use plain <a> for hash scrolling reliability in App Router [web:220] */}
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      {toc.map((t) => (
                        <li key={t.id} className={t.level === "h3" ? "pl-4" : ""}>
                          <a
                            href={`#${t.id}`}
                            className="text-gray-700 hover:text-emerald-900 hover:underline"
                          >
                            {t.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              <LatestPostsCard currentSlug={post.slug} />

              <section className="bg-white rounded-2xl shadow-sm ring-1 ring-black/10 overflow-hidden">
                <div className="px-5 py-4 border-b border-black/10">
                  <h2 className="text-sm font-semibold text-gray-950">Newsletter</h2>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    Weekly insights and retreat updates—no spam.
                  </p>
                </div>

                <div className="p-5">
                  <form className="space-y-3" action="/api/newsletter" method="POST">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-emerald-700 text-white py-3.5 rounded-xl font-semibold hover:bg-emerald-800 transition"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </section>

              <section className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-emerald-900/10">
                <h2 className="text-sm font-semibold text-gray-950">Personalized recommendation</h2>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Tell us your goal and we’ll guide you to the right retreat or training.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold
                             bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200 hover:bg-emerald-100 transition"
                >
                  Contact us
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
