import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { getAllPosts, BlogCategory } from "@/lib/blog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CategoryFilter = "all" | BlogCategory;
type SearchParams = Promise<Record<string, string | string[] | undefined>>;
type PageProps = { searchParams: SearchParams };

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Wellness Blog — Yoga, Meditation & Healing Insights | Jivan Parivartan",
  description:
    "Explore practical articles on yoga, meditation, Reiki, sound healing, and spiritual growth from experienced practitioners at Jivan Parivartan, Kathmandu.",
  keywords: [
    "wellness blog Nepal",
    "yoga articles Kathmandu",
    "meditation tips Nepal",
    "Reiki insights Kathmandu",
    "sound healing blog Nepal",
    "spiritual growth articles",
    "Jivan Parivartan blog",
    "healing practices Nepal",
  ],
  alternates: { canonical: "https://jivanparivartan.com/blog" },
  openGraph: {
    title: "Wellness Blog — Yoga, Meditation & Healing Insights | Jivan Parivartan",
    description:
      "Practical articles on yoga, meditation, Reiki, and spiritual growth from Jivan Parivartan, Kathmandu.",
    url: "https://jivanparivartan.com/blog",
    siteName: "Jivan Parivartan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1200",
        width: 1200,
        height: 630,
        alt: "Jivan Parivartan Wellness Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness Blog | Jivan Parivartan",
    description: "Yoga, meditation, Reiki & sound healing insights from Kathmandu.",
    images: ["https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1200"],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Jivan Parivartan Wellness Blog",
  description:
    "Practical articles on yoga, meditation, Reiki, sound healing, and spiritual growth from experienced practitioners in Kathmandu, Nepal.",
  url: "https://jivanparivartan.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Jivan Parivartan",
    url: "https://jivanparivartan.com",
    logo: {
      "@type": "ImageObject",
      url: "https://jivanparivartan.com/img/logo.png",
    },
  },
  inLanguage: "en-US",
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const categoryLabel: Record<BlogCategory, string> = {
  yoga: "Yoga",
  meditation: "Meditation",
  wellness: "Wellness",
  spirituality: "Spirituality",
  retreats: "Retreats",
};

const categoryIcon: Record<CategoryFilter, string> = {
  all: "✦",
  yoga: "🧘",
  meditation: "🌿",
  wellness: "💚",
  spirituality: "✨",
  retreats: "🏔️",
};

const categories: Array<{ id: CategoryFilter; label: string }> = [
  { id: "all",         label: "All Posts" },
  { id: "yoga",        label: "Yoga" },
  { id: "meditation",  label: "Meditation" },
  { id: "wellness",    label: "Wellness" },
  { id: "spirituality",label: "Spirituality" },
  { id: "retreats",    label: "Retreats" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getCategoryName(cat: CategoryFilter): string {
  if (cat === "all") return "All Posts";
  return categoryLabel[cat] ?? "Articles";
}

function normalizeParam(x: string | string[] | undefined) {
  const v = Array.isArray(x) ? x[0] : x;
  return v?.trim().toLowerCase();
}

function isCategoryFilter(x: string | undefined): x is CategoryFilter {
  if (!x) return false;
  return ["all", "yoga", "meditation", "wellness", "spirituality", "retreats"].includes(x);
}

function buildCategoryHref(id: CategoryFilter) {
  if (id === "all") return "/blog";
  return `/blog?${new URLSearchParams({ category: id }).toString()}`;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ─── Featured Post Card ───────────────────────────────────────────────────────

function FeaturedPostCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-[#EAE6E0] transition-all hover:shadow-lg"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.05)" }}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            aria-hidden
          />
          {/* Featured badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#166534] border border-white/60">
              Featured
            </span>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="flex items-center gap-2 text-[12px] text-[#8A8580] mb-2.5">
            <span className="font-semibold text-[#166534]">
              {getCategoryName(post.category as CategoryFilter)}
            </span>
            <span aria-hidden className="text-[#D4D0CA]">·</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1A1714] mb-2 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-[13px] text-[#5A5550] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[12px] font-medium text-[#5A5550]">{post.author}</span>
            <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#166534] group-hover:gap-2 transition-all">
              Read
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
                <path d="M1 5h10M7 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ─── Post Row Card (list view) ────────────────────────────────────────────────

function PostRowCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  return (
    <article>
      <Link
        href={`/blog/${post.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-[#EAE6E0] transition-all hover:shadow-md"
        style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-[240px_1fr]">
          {/* Thumbnail */}
          <div className="relative h-52 sm:h-full min-h-[180px] overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              sizes="(max-width: 640px) 100vw, 240px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Body */}
          <div className="px-5 sm:px-6 py-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[12px] text-[#8A8580] mb-2.5 flex-wrap">
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{ background: "#F0F7F1", color: "#166534", border: "1px solid #D1E8D4" }}
                >
                  {getCategoryName(post.category as CategoryFilter)}
                </span>
                <span aria-hidden className="text-[#D4D0CA]">·</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-[16px] sm:text-[19px] font-bold text-[#1A1714] mb-2 group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#5A5550] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <span className="text-[12px] font-medium text-[#5A5550]">{post.author}</span>
              </div>
              <time
                dateTime={new Date(post.date).toISOString()}
                className="text-[12px] text-[#8A8580]"
              >
                {formatDate(post.date)}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

// ─── Category Filter Bar ──────────────────────────────────────────────────────

function CategoryFilterBar({
  categories,
  selected,
  counts,
}: {
  categories: Array<{ id: CategoryFilter; label: string }>;
  selected: CategoryFilter;
  counts: Record<CategoryFilter, number>;
}) {
  return (
    <div
      className="bg-white rounded-2xl px-5 py-4 border border-[#EAE6E0] mb-8"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <p className="text-[11px] font-bold uppercase tracking-widest text-[#8A8580] mb-3">
        Browse by category
      </p>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const active = selected === cat.id;
          return (
            <Link
              key={cat.id}
              href={buildCategoryHref(cat.id)}
              className={[
                "inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                active
                  ? "bg-[#166534] text-white shadow-sm"
                  : "bg-[#F4FAF5] text-[#3D3A35] border border-[#E0EDE0] hover:bg-[#E6F4E6] hover:text-[#166534]",
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              <span aria-hidden>{categoryIcon[cat.id]}</span>
              {cat.label}
              <span
                className={[
                  "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                  active ? "bg-white/20 text-white" : "bg-[#E0EDE0] text-[#5A5550]",
                ].join(" ")}
              >
                {counts[cat.id]}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ category }: { category: CategoryFilter }) {
  return (
    <div
      className="bg-white rounded-2xl px-8 py-14 text-center border border-[#EAE6E0]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div
        className="w-12 h-12 rounded-2xl bg-[#F0F7F1] flex items-center justify-center text-2xl mx-auto mb-4"
        aria-hidden
      >
        {categoryIcon[category]}
      </div>
      <h3 className="text-[17px] font-bold text-[#1A1714] mb-2">
        No articles yet in {getCategoryName(category)}
      </h3>
      <p className="text-[14px] text-[#8A8580] mb-6 max-w-xs mx-auto leading-relaxed">
        We're working on it. Check back soon or browse all posts in the meantime.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 bg-[#166534] text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-[#14532D] transition-colors"
      >
        View all articles
      </Link>
    </div>
  );
}

// ─── Sidebar: Recent Posts ────────────────────────────────────────────────────

function SidebarRecentPosts({
  posts,
}: {
  posts: ReturnType<typeof getAllPosts>;
}) {
  return (
    <section
      className="bg-white rounded-2xl overflow-hidden border border-[#EAE6E0]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
      aria-labelledby="recent-heading"
    >
      <div className="px-5 py-3.5 border-b border-[#F0EDE8]">
        <h2 id="recent-heading" className="text-[13px] font-semibold text-[#1A1714]">
          Recent articles
        </h2>
      </div>
      <div className="p-4 space-y-4">
        {posts.length === 0 && (
          <p className="text-[13px] text-[#8A8580]">No posts yet.</p>
        )}
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-3 items-start"
          >
            <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                sizes="64px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-[13px] font-semibold text-[#1A1714] group-hover:text-[#166534] transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <time
                dateTime={new Date(post.date).toISOString()}
                className="mt-1 block text-[11px] text-[#8A8580]"
              >
                {formatDate(post.date)}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Sidebar: Newsletter ──────────────────────────────────────────────────────

function SidebarNewsletter() {
  return (
    <section
      id="newsletter"
      className="bg-white rounded-2xl overflow-hidden border border-[#EAE6E0]"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="px-5 py-3.5 border-b border-[#F0EDE8]">
        <h2 id="newsletter-heading" className="text-[13px] font-semibold text-[#1A1714]">
          Weekly insights
        </h2>
        <p className="mt-1 text-[12px] text-[#8A8580] leading-relaxed">
          Articles, retreat updates & wellness tips — no spam.
        </p>
      </div>
      <div className="p-5">
        <form className="space-y-2.5" action="/api/newsletter" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-2.5 text-[13px] rounded-xl border border-[#E8E4DF] bg-[#FAFAF9] placeholder:text-[#B0ACA8] focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 transition"
          />
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
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = await searchParams;
  const categoryRaw = normalizeParam(sp.category);
  const selectedCategory: CategoryFilter = isCategoryFilter(categoryRaw) ? categoryRaw : "all";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog" },
  ];

  const heroStats = [
    { number: "100+",   label: "Articles" },
    { number: "Weekly", label: "Updates" },
    { number: "Expert", label: "Insights" },
    { number: "Free",   label: "Resources" },
  ];

  const heroCTAs = [
    { label: "Explore Articles", href: "#articles",   primary: true },
    { label: "Subscribe",        href: "#newsletter" },
  ];

  const allPosts   = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.featured);
  const recentPosts   = allPosts.slice(0, 4);

  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const categoryCounts: Record<CategoryFilter, number> = {
    all:          allPosts.length,
    yoga:         allPosts.filter((p) => p.category === "yoga").length,
    meditation:   allPosts.filter((p) => p.category === "meditation").length,
    wellness:     allPosts.filter((p) => p.category === "wellness").length,
    spirituality: allPosts.filter((p) => p.category === "spirituality").length,
    retreats:     allPosts.filter((p) => p.category === "retreats").length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <div className="min-h-screen bg-[#FAF8F5]">
        <div className="min-h-screen bg-[radial-gradient(70%_35%_at_50%_0%,rgba(16,185,129,0.07),transparent_55%)]">

          {/* Skip link */}
          <a
            href="#articles"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-emerald-800 focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
          >
            Skip to articles
          </a>

          <Breadcrumb items={breadcrumbItems} />

          <PageHero
            badge={{ icon: "📝", text: "Insights & Inspiration" }}
            title="Wellness Blog"
            subtitle="Explore articles on yoga, meditation, Reiki, sound healing, and spiritual growth from our experienced practitioners in Kathmandu."
            stats={heroStats}
            ctas={heroCTAs}
            variant="green"
            backgroundImage="https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1920"
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-6 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 lg:gap-12">

              {/* ── Main Content ─────────────────────────────── */}
              <main id="articles">

                {/* Category filter */}
                <CategoryFilterBar
                  categories={categories}
                  selected={selectedCategory}
                  counts={categoryCounts}
                />

                {/* Featured posts — only on "all" */}
                {selectedCategory === "all" && featuredPosts.length > 0 && (
                  <section className="mb-10" aria-labelledby="featured-heading">
                    <h2
                      id="featured-heading"
                      className="text-[20px] font-bold text-[#1A1714] mb-5"
                    >
                      Featured articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {featuredPosts.map((post) => (
                        <FeaturedPostCard key={post.slug} post={post} />
                      ))}
                    </div>
                  </section>
                )}

                {/* All / filtered posts */}
                <section aria-labelledby="articles-heading">
                  <div className="flex items-center justify-between mb-5">
                    <h2
                      id="articles-heading"
                      className="text-[20px] font-bold text-[#1A1714]"
                    >
                      {selectedCategory === "all"
                        ? "Latest articles"
                        : `${getCategoryName(selectedCategory)} articles`}
                    </h2>
                    <span className="text-[13px] text-[#8A8580]">
                      {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {filteredPosts.length > 0 ? (
                    <div className="space-y-5">
                      {filteredPosts.map((post) => (
                        <PostRowCard key={post.slug} post={post} />
                      ))}
                    </div>
                  ) : (
                    <EmptyState category={selectedCategory} />
                  )}
                </section>
              </main>

              {/* ── Sidebar ───────────────────────────────────── */}
              <aside
                className="space-y-5 lg:sticky lg:top-[104px] self-start"
                aria-label="Blog sidebar"
              >
                <SidebarNewsletter />

                <SidebarRecentPosts posts={recentPosts} />

                {/* Contact CTA */}
                <section
                  className="rounded-2xl p-5 border overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #166534, #14532D)",
                    borderColor: "#0F3F22",
                    boxShadow: "0 4px 20px rgba(22,101,52,0.25)",
                  }}
                  aria-labelledby="contact-cta-heading"
                >
                  <div
                    className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-lg mb-3"
                    aria-hidden
                  >
                    💬
                  </div>
                  <h2
                    id="contact-cta-heading"
                    className="text-[14px] font-bold text-white mb-1.5"
                  >
                    Have questions?
                  </h2>
                  <p className="text-[12px] text-white/80 leading-relaxed mb-4">
                    Contact our team for personalized guidance on trainings, retreats, and wellness programs.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full bg-white text-[#166534] text-center py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#F0FDF4] transition-colors"
                  >
                    Contact us
                  </Link>
                </section>

                {/* Browse categories (sidebar shortcut) */}
                <section
                  className="bg-white rounded-2xl overflow-hidden border border-[#EAE6E0]"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                  aria-labelledby="categories-heading"
                >
                  <div className="px-5 py-3.5 border-b border-[#F0EDE8]">
                    <h2 id="categories-heading" className="text-[13px] font-semibold text-[#1A1714]">
                      Categories
                    </h2>
                  </div>
                  <ul className="p-2" role="list">
                    {categories.filter((c) => c.id !== "all").map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={buildCategoryHref(cat.id)}
                          className={[
                            "flex items-center justify-between px-3 py-2 rounded-xl text-[13px] transition-colors",
                            selectedCategory === cat.id
                              ? "bg-[#F0F7F1] text-[#166534] font-semibold"
                              : "text-[#3D3A35] hover:bg-[#F7FAF7] hover:text-[#166534]",
                          ].join(" ")}
                          aria-current={selectedCategory === cat.id ? "page" : undefined}
                        >
                          <span className="flex items-center gap-2">
                            <span aria-hidden>{categoryIcon[cat.id]}</span>
                            {cat.label}
                          </span>
                          <span className="text-[11px] text-[#8A8580] font-medium">
                            {categoryCounts[cat.id]}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}