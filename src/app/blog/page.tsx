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

type PageProps = {
  searchParams: SearchParams;
};

export const metadata: Metadata = {
  title: "Wellness Blog | Jivan Parivartan",
  description:
    "Explore yoga, meditation, retreats, and spiritual growth articles from our experienced teachers and practitioners.",
};

const categoryLabel: Record<BlogCategory, string> = {
  yoga: "Yoga",
  meditation: "Meditation",
  wellness: "Wellness",
  spirituality: "Spirituality",
  retreats: "Retreats",
};

const categories: Array<{ id: CategoryFilter; label: string }> = [
  { id: "all", label: "All Posts" },
  { id: "yoga", label: "Yoga" },
  { id: "meditation", label: "Meditation" },
  { id: "wellness", label: "Wellness" },
  { id: "spirituality", label: "Spirituality" },
  { id: "retreats", label: "Retreats" },
];

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
  const qs = new URLSearchParams({ category: id });
  return `/blog?${qs.toString()}`;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const sp = await searchParams; // Next.js 16: searchParams is a Promise [web:145][web:150]
  const categoryRaw = normalizeParam(sp.category);

  const selectedCategory: CategoryFilter = isCategoryFilter(categoryRaw)
    ? categoryRaw
    : "all";

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Blog" }];

  const heroStats = [
    { number: "100+", label: "Articles" },
    { number: "Weekly", label: "Updates" },
    { number: "Expert", label: "Insights" },
    { number: "Free", label: "Resources" },
  ];

  const heroCTAs = [
    { label: "Explore Articles", href: "#articles", primary: true },
    { label: "Subscribe", href: "#newsletter" },
  ];

  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((p) => p.featured);
  const recentPosts = allPosts.slice(0, 3);

  const filteredPosts =
    selectedCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === selectedCategory);

  const categoryCounts: Record<CategoryFilter, number> = {
    all: allPosts.length,
    yoga: allPosts.filter((p) => p.category === "yoga").length,
    meditation: allPosts.filter((p) => p.category === "meditation").length,
    wellness: allPosts.filter((p) => p.category === "wellness").length,
    spirituality: allPosts.filter((p) => p.category === "spirituality").length,
    retreats: allPosts.filter((p) => p.category === "retreats").length,
  };

  return (
    <div className="min-h-screen bg-[#faf6f1]">
      <div className="min-h-screen bg-gradient-to-b from-emerald-950/10 via-transparent to-transparent">
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          badge={{ icon: "", text: "Insights & Inspiration" }}
          title="Wellness Blog"
          subtitle="Explore articles on yoga, meditation, wellness practices, and spiritual growth from our experienced teachers and practitioners."
          stats={heroStats}
          ctas={heroCTAs}
          variant="green"
          backgroundImage="https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=1920"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-5 lg:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
            <main id="articles">
              <section className="mb-10">
                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm ring-1 ring-black/10 mb-8">
                  <h2 className="text-base font-semibold text-gray-900 mb-4">
                    Browse by category
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                      const active = selectedCategory === cat.id;
                      return (
                        <Link
                          key={cat.id}
                          href={buildCategoryHref(cat.id)}
                          className={[
                            "px-4 py-2 rounded-full text-sm font-semibold transition",
                            "ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600",
                            active
                              ? "bg-emerald-700 text-white ring-emerald-700"
                              : "bg-white text-gray-700 ring-black/10 hover:bg-emerald-50 hover:text-emerald-900",
                          ].join(" ")}
                        >
                          {cat.label}
                          <span className="ml-1 opacity-70">({categoryCounts[cat.id]})</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {selectedCategory === "all" && featuredPosts.length > 0 && (
                  <section className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-5">
                      Featured articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featuredPosts.map((post) => (
                        <article key={post.slug}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 hover:shadow-md transition"
                          >
                            <div className="relative aspect-[16/9] overflow-hidden">
                              <Image
                                src={post.image}
                                alt={post.imageAlt ?? post.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-4 left-4">
                                <span className="bg-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                  Featured
                                </span>
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                <span className="font-semibold text-emerald-800">
                                  {getCategoryName(post.category)}
                                </span>
                                <span className="text-gray-300">•</span>
                                <span>{post.readTime}</span>
                              </div>

                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-900 transition-colors line-clamp-2">
                                {post.title}
                              </h3>

                              <p className="text-gray-700 leading-relaxed line-clamp-3">
                                {post.excerpt}
                              </p>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">
                    {selectedCategory === "all"
                      ? "Latest articles"
                      : `${getCategoryName(selectedCategory)} articles`}
                  </h2>

                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {filteredPosts.map((post) => (
                        <article key={post.slug}>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/10 hover:shadow-md transition"
                          >
                            <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
                              <div className="relative h-56 sm:h-full overflow-hidden">
                                <Image
                                  src={post.image}
                                  alt={post.imageAlt ?? post.title}
                                  fill
                                  sizes="(max-width: 640px) 100vw, 280px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>

                              <div className="p-6">
                                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                  <span className="bg-emerald-50 text-emerald-900 px-3 py-1 rounded-full font-semibold">
                                    {getCategoryName(post.category)}
                                  </span>
                                  <span className="text-gray-300">•</span>
                                  <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-900 transition-colors line-clamp-2">
                                  {post.title}
                                </h3>

                                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                                  {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-sm">
                                  <span className="text-gray-700 font-medium">
                                    {post.author}
                                  </span>
                                  <time
                                    dateTime={new Date(post.date).toISOString()}
                                    className="text-gray-500"
                                  >
                                    {new Date(post.date).toLocaleDateString()}
                                  </time>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl p-10 text-center shadow-sm ring-1 ring-black/10">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No articles found
                      </h3>
                      <p className="text-gray-600 mb-6">
                        No articles in this category yet. Please check back soon.
                      </p>
                      <Link
                        href="/blog"
                        className="inline-flex items-center justify-center bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-800 transition"
                      >
                        View all articles
                      </Link>
                    </div>
                  )}
                </section>
              </section>
            </main>

            <aside className="space-y-6 lg:sticky lg:top-24">
              <section id="newsletter" className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/10">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Newsletter</h3>
                <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                  Weekly articles, wellness tips, and retreat updates—delivered to your inbox.
                </p>

                <form className="space-y-3" action="/api/newsletter" method="POST">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 transition"
                    required
                  />
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
              </section>

              <section className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-black/10">
                <h3 className="text-lg font-semibold text-gray-900 mb-5">Recent articles</h3>
                <div className="space-y-5">
                  {recentPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.imageAlt ?? post.title}
                            fill
                            sizes="80px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-2 group-hover:text-emerald-900 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <time
                            dateTime={new Date(post.date).toISOString()}
                            className="text-xs text-gray-600 block"
                          >
                            {new Date(post.date).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {recentPosts.length === 0 && (
                    <p className="text-sm text-gray-600">No posts yet.</p>
                  )}
                </div>
              </section>

              <section className="bg-emerald-800 rounded-2xl p-7 shadow-sm text-white">
                <h3 className="text-lg font-semibold mb-3">Have questions?</h3>
                <p className="text-sm mb-5 opacity-90 leading-relaxed">
                  Contact our team for personalized guidance on trainings, retreats, and wellness programs.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-emerald-800 text-center py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
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
