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
const HEADER_OFFSET_PX = 140;

type PageProps = { params: Promise<{ slug: string }> };
type BlockType = BlogBlock;

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageAbs],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

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
            className="font-semibold text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:decoration-emerald-600 transition-all"
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
      <h2
        id={id}
        className="text-[22px] sm:text-[26px] font-bold text-[#1A1714] mt-12 mb-4 leading-snug tracking-tight"
        style={{ scrollMarginTop: `${HEADER_OFFSET_PX + 24}px` }}
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "h3") {
    const id = slugify(block.text);
    return (
      <h3
        id={id}
        className="text-[18px] sm:text-[21px] font-semibold text-[#1A1714] mt-8 mb-3 leading-snug"
        style={{ scrollMarginTop: `${HEADER_OFFSET_PX + 24}px` }}
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === "p") {
    return (
      <p className="text-[16px] sm:text-[17px] text-[#3D3A35] leading-[1.85] my-5">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="my-6 space-y-2.5 pl-0" role="list">
        {block.items.map((x) => (
          <li
            key={x}
            className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#3D3A35] leading-[1.8]"
          >
            <span
              className="mt-[7px] w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0"
              aria-hidden
            />
            <RichText text={x} />
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

// ─── Reading Time Progress Bar (Client) ──────────────────────────────────────
// Kept as inline async-safe server markup — use a separate client component
// if you want an animated scroll progress indicator (see note below).

// ─── Share Buttons ────────────────────────────────────────────────────────────

function ShareButtons({ url, title }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      color: "#1877F2",
    },
    {
      label: "Share on X / Twitter",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "#000",
    },
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
      color: "#25D366",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[12px] font-semibold text-[#8A8580] uppercase tracking-widest mr-1">
        Share
      </span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#E8E4DF] bg-white hover:border-transparent transition-all hover:shadow-sm"
          style={{ color: l.color }}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

// ─── Tag Pills ────────────────────────────────────────────────────────────────

function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F0F7F1] text-[#166534] border border-[#D1E8D4]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── TOC Item ────────────────────────────────────────────────────────────────

function TocItem({ id, label, level }: { id: string; label: string; level: "h2" | "h3" }) {
  return (
    <li className={level === "h3" ? "pl-4" : ""}>
      <a
        href={`#${id}`}
        className={[
          "block py-1 text-[13px] leading-snug transition-colors",
          "text-[#6B6560] hover:text-[#166534]",
          level === "h2" ? "font-medium" : "font-normal",
        ].join(" ")}
      >
        {label}
      </a>
    </li>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const breadcrumbItems = [
    { label: "Home",  href: "/" },
    { label: "Blog",  href: "/blog" },
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
  const heroFit = post.imageFit ?? "cover";
  const heroObjectPosition = post.imageFocus ?? "center";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    headline: post.title,
    description: post.excerpt,
    image: [imageAbs],
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: post.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Jivan Parivartan",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/img/logo.png` },
    },
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    url: pageUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "Blog",
      name: "Jivan Parivartan Blog",
      url: `${siteUrl}/blog`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const toc = post.content
    .filter((b): b is { type: "h2" | "h3"; text: string } => b.type === "h2" || b.type === "h3")
    .map((b) => ({ id: slugify(b.text), label: b.text, level: b.type as "h2" | "h3" }));

  // Estimate word count for reading progress context
  const wordCount = post.content
    .filter((b) => b.type === "p" || b.type === "ul")
    .reduce((acc, b) => {
      if (b.type === "p") return acc + b.text.split(" ").length;
      if (b.type === "ul") return acc + b.items.join(" ").split(" ").length;
      return acc;
    }, 0);
  const estimatedMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Subtle radial glow behind hero */}
      <div className="min-h-screen bg-[radial-gradient(70%_40%_at_50%_0%,rgba(16,185,129,0.08),transparent_60%)]">

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* Accessibility skip link */}
        <a
          href="#post-body"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-emerald-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Skip to article
        </a>

        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-5 lg:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">

            {/* ── Article ──────────────────────────────────────── */}
            <main id="post-body">

              {/* Hero Card */}
              <article
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE6E0]"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)" }}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Hero image */}
                <div
                  className="relative bg-gradient-to-br from-emerald-50 to-[#FAF8F5]"
                  style={{ height: "clamp(220px, 35vw, 420px)" }}
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 820px"
                    className={heroFit === "contain" ? "object-contain p-6 sm:p-10" : "object-cover"}
                    style={{ objectPosition: heroObjectPosition }}
                    itemProp="image"
                  />
                  {/* Subtle bottom gradient for text legibility if overlaid */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent"
                    aria-hidden
                  />

                  {/* Category badge floating on image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm text-emerald-900 px-3 py-1 text-[11px] font-bold uppercase tracking-widest border border-white/60 shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post header */}
                <div className="px-6 sm:px-10 pt-8 pb-6">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#8A8580]">
                    <time dateTime={isoDate} itemProp="datePublished" className="font-medium">
                      {readableDate}
                    </time>
                    <span aria-hidden className="text-[#D4D0CA]">·</span>
                    <span itemProp="timeRequired">{estimatedMinutes} min read</span>
                    {post.readTime && post.readTime !== `${estimatedMinutes} min read` && (
                      <>
                        <span aria-hidden className="text-[#D4D0CA]">·</span>
                        <span>{post.readTime}</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h1
                    className="mt-3 text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight text-[#1A1714] leading-[1.2]"
                    itemProp="headline"
                  >
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  <p
                    className="mt-4 text-[16px] sm:text-[17px] text-[#5A5550] leading-relaxed max-w-2xl"
                    itemProp="description"
                  >
                    {post.excerpt}
                  </p>

                  {/* Author row + CTA */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div
                      className="flex items-center gap-3"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      {/* Author avatar placeholder */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                        {post.author.charAt(0).toUpperCase()}
                      </div>
                      <p className="text-[13px] text-[#5A5550]">
                        By{" "}
                        <span className="font-semibold text-[#1A1714]" itemProp="name">
                          {post.author}
                        </span>
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-[13px] font-semibold bg-[#166534] text-white hover:bg-[#14532D] transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Talk to our team
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 sm:mx-10 border-t border-[#F0EDE8]" />

                {/* Article body */}
                <div className="px-6 sm:px-10 py-10">
                  <div className="mx-auto w-full max-w-[68ch]">
                    <div itemProp="articleBody">
                      {post.content?.map((b, i) => (
                        <Block key={i} block={b} />
                      ))}
                    </div>

                    {/* Post footer — tags + share */}
                    {(post.tags?.length || true) && (
                      <div className="mt-12 pt-6 border-t border-[#F0EDE8] space-y-4">
                        {post.tags?.length ? <TagPills tags={post.tags} /> : null}
                        <ShareButtons url={pageUrl} title={post.title} />
                      </div>
                    )}
                  </div>
                </div>
              </article>

              {/* ── Author bio card (below article) ────────────── */}
              <div
                className="mt-6 bg-white rounded-2xl px-6 py-5 border border-[#EAE6E0] flex items-start gap-4"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#1A1714]">{post.author}</p>
                  <p className="text-[12px] text-[#8A8580] mt-0.5">
                    Wellness practitioner & trainer at Jivan Parivartan, Kathmandu
                  </p>
                  <p className="text-[13px] text-[#5A5550] mt-2 leading-relaxed">
                    Sharing practical insights on Reiki, sound healing, and conscious living from years of hands-on training and retreat facilitation in Nepal.
                  </p>
                </div>
              </div>
            </main>

            {/* ── Sidebar ───────────────────────────────────────── */}
            <aside
              className="space-y-5 lg:sticky lg:top-[104px]"
              aria-label="Article sidebar"
            >
              {/* Table of Contents */}
              {toc.length > 0 && (
                <section
                  className="bg-white rounded-2xl overflow-hidden border border-[#EAE6E0]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  aria-labelledby="toc-heading"
                >
                  <div className="px-5 py-3.5 border-b border-[#F0EDE8] flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#8A8580]" aria-hidden>
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                    <h2
                      id="toc-heading"
                      className="text-[13px] font-semibold text-[#1A1714]"
                    >
                      On this page
                    </h2>
                  </div>
                  <nav aria-labelledby="toc-heading" className="p-4">
                    <ul className="space-y-0.5">
                      {toc.map((t) => (
                        <TocItem key={t.id} id={t.id} label={t.label} level={t.level} />
                      ))}
                    </ul>
                  </nav>
                </section>
              )}

              {/* Latest posts */}
              <LatestPostsCard currentSlug={post.slug} />

              {/* Newsletter */}
              <section
                className="bg-white rounded-2xl overflow-hidden border border-[#EAE6E0]"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                aria-labelledby="newsletter-heading"
              >
                <div className="px-5 py-3.5 border-b border-[#F0EDE8]">
                  <h2
                    id="newsletter-heading"
                    className="text-[13px] font-semibold text-[#1A1714]"
                  >
                    Weekly insights
                  </h2>
                  <p className="mt-1 text-[12px] text-[#8A8580] leading-relaxed">
                    Retreat updates & healing wisdom — no spam.
                  </p>
                </div>
                <div className="p-5">
                  <form className="space-y-2.5" action="/api/newsletter" method="POST">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      required
                      className="w-full px-4 py-2.5 text-[13px] rounded-xl border border-[#E8E4DF] bg-[#FAFAF9] placeholder:text-[#B0ACA8] focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#166534] text-white py-2.5 rounded-xl text-[13px] font-semibold hover:bg-[#14532D] transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </section>

              {/* Personalised CTA */}
              <section
                className="bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] rounded-2xl p-5 border border-[#D1E8D4]"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                aria-labelledby="cta-heading"
              >
                <div
                  className="w-8 h-8 rounded-lg bg-[#166534] flex items-center justify-center mb-3"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <h2 id="cta-heading" className="text-[14px] font-bold text-[#14532D]">
                  Find the right path for you
                </h2>
                <p className="mt-1.5 text-[12px] text-[#166534] leading-relaxed">
                  Tell us your goal and we'll guide you to the right retreat or training.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-[13px] font-semibold bg-[#166534] text-white hover:bg-[#14532D] transition-colors"
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