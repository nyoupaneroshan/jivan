"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PriceInfo {
  label: string;
  amount: string;
  duration: string;
  includes: string[];
  viewAllPricingLink?: string;
}

interface BatchDate {
  date: string;
  label?: string;
}

interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
}

interface SidebarWidgetProps {
  price?: PriceInfo;
  batches?: BatchDate[];
  contact?: ContactInfo;
  showInquiryForm?: boolean;
  variant?: "crimson" | "saffron" | "forest" | "indigo" | "ocean" | "gold" | "green";
}

// ─── Variant Tokens ───────────────────────────────────────────────────────────

const variants: Record<
  NonNullable<SidebarWidgetProps["variant"]>,
  {
    accent: string;
    accentMid: string;
    accentLight: string;
    accentBorder: string;
    badgeBg: string;
    badgeFg: string;
  }
> = {
  crimson: {
    accent: "#9B1C1C",
    accentMid: "#C41E3A",
    accentLight: "#FFF1F1",
    accentBorder: "#F5CACA",
    badgeBg: "#9B1C1C",
    badgeFg: "#fff",
  },
  saffron: {
    accent: "#B45309",
    accentMid: "#D97706",
    accentLight: "#FFFBEB",
    accentBorder: "#FDE68A",
    badgeBg: "#B45309",
    badgeFg: "#fff",
  },
  forest: {
    accent: "#166534",
    accentMid: "#16A34A",
    accentLight: "#F0FDF4",
    accentBorder: "#BBF7D0",
    badgeBg: "#166534",
    badgeFg: "#fff",
  },
  indigo: {
    accent: "#4338CA",
    accentMid: "#6366F1",
    accentLight: "#EEF2FF",
    accentBorder: "#C7D2FE",
    badgeBg: "#4338CA",
    badgeFg: "#fff",
  },
  ocean: {
    accent: "#0E7490",
    accentMid: "#0891B2",
    accentLight: "#ECFEFF",
    accentBorder: "#A5F3FC",
    badgeBg: "#0E7490",
    badgeFg: "#fff",
  },
  gold: {
    accent: "#92400E",
    accentMid: "#D97706",
    accentLight: "#FFFBEB",
    accentBorder: "#FCD34D",
    badgeBg: "#92400E",
    badgeFg: "#fff",
  },
  green: {
  accent: "#166534",
  accentMid: "#15803D",
  accentLight: "#F0FDF4",
  accentBorder: "#BBF7D0",
  badgeBg: "#166534",
  badgeFg: "#fff",
},
};

// ─── Shared Input Class ───────────────────────────────────────────────────────

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-[#E5E0D8] bg-[#FDFCFA] text-[#2D2A26] " +
  "placeholder-[#A09990] text-sm leading-relaxed transition-all duration-200 " +
  "focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-transparent";

// ─── Sub-Components ───────────────────────────────────────────────────────────

function Card({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.06)",
        borderTop: `3px solid ${accent}`,
      }}
    >
      {children}
    </div>
  );
}

function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-[15px] font-semibold tracking-wide uppercase text-[#6B6560]"
      style={{ letterSpacing: "0.07em" }}
    >
      {children}
    </h3>
  );
}

function Badge({ bg, fg, children }: { bg: string; fg: string; children: React.ReactNode }) {
  return (
    <span
      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
      style={{ background: bg, color: fg }}
    >
      {children}
    </span>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden>
    <path d="M1 4.5L4 7.5L10 1" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalIcon = ({ color }: { color: string }) => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
    <rect x="1" y="2" width="10" height="9" rx="1.5" stroke={color} strokeWidth="1.4" />
    <path d="M4 1v2M8 1v2M1 5h10" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const PhoneIcon = ({ color }: { color: string }) => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path
      d="M10.5 8.5c-.3-.4-1.2-1-1.7-1.2-.5-.2-.7 0-1 .4-.2.3-.5.6-.7.5C6.3 8 5 6.7 4.8 5.9c-.1-.2.2-.5.5-.7.4-.3.6-.5.4-1C5.5 3.7 4.9 2.8 4.5 2.5c-.4-.3-.7-.3-1 0-.7.6-1.1 1.4-1 2.2C2.8 6.5 5.5 9.2 7.3 9.5c.8.1 1.6-.3 2.2-1 .3-.3.3-.6 0-1z"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const MailIcon = ({ color }: { color: string }) => (
  <svg width="11" height="9" viewBox="0 0 12 10" fill="none" aria-hidden>
    <rect x="1" y="1" width="10" height="8" rx="1.5" stroke={color} strokeWidth="1.3" />
    <path d="M1 3l5 3.5L11 3" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const PinIcon = ({ color }: { color: string }) => (
  <svg width="10" height="12" viewBox="0 0 10 13" fill="none" aria-hidden>
    <path d="M5 12S1 7.5 1 4.5a4 4 0 0 1 8 0C9 7.5 5 12 5 12z" stroke={color} strokeWidth="1.3" />
    <circle cx="5" cy="4.5" r="1.3" stroke={color} strokeWidth="1.2" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden>
    <path
      d="M1 5h10M7 1l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export function SidebarWidget({
  price,
  batches,
  contact,
  showInquiryForm = false,
  variant = "crimson",
}: SidebarWidgetProps) {
  const v = variants[variant];

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to submit. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside
      aria-label="Course information sidebar"
      className="space-y-5 lg:sticky lg:top-24"
    >
      {/* ── PRICE ──────────────────────────────────────────────────────── */}
      {price && (
        <Card accent={v.accent}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <CardHeading>Course Investment</CardHeading>
            </div>

            <div
              className="rounded-xl p-6 text-center mb-5"
              style={{ background: v.accentLight, border: `1px solid ${v.accentBorder}` }}
            >
              <p
                className="text-[11px] uppercase font-semibold tracking-widest mb-2"
                style={{ color: v.accent }}
              >
                {price.label}
              </p>

              <p
                className="text-5xl font-extrabold leading-none tracking-tight"
                style={{ color: v.accent }}
              >
                {price.amount}
              </p>

              <p className="text-sm text-[#6B6560] mt-2 font-medium">{price.duration}</p>

              {price.viewAllPricingLink && (
                <Link
                  href={price.viewAllPricingLink}
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold mt-3 transition-opacity hover:opacity-75"
                  style={{ color: v.accentMid }}
                >
                  View all pricing options
                  <ArrowIcon />
                </Link>
              )}
            </div>

            <ul className="space-y-2.5" role="list">
              {price.includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-[#3D3A36]">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: v.accentBorder }}
                  >
                    <CheckIcon color={v.accent} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {/* ── INQUIRY FORM ───────────────────────────────────────────────── */}
      {showInquiryForm && (
        <Card accent={v.accent}>
          <div className="p-6">
            <div className="mb-5">
              <CardHeading>Quick Inquiry</CardHeading>
              <p className="text-[13px] text-[#9B9590] mt-1">
                We'll get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div
                className="rounded-xl p-6 text-center"
                style={{ background: v.accentLight, border: `1px solid ${v.accentBorder}` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: v.accentBorder }}
                >
                  <CheckIcon color={v.accent} />
                </div>
                <p className="font-semibold text-[#2D2A26] text-[15px]">Inquiry Received!</p>
                <p className="text-[13px] text-[#6B6560] mt-1">
                  Our team will contact you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-[13px] font-medium underline transition-opacity hover:opacity-70"
                  style={{ color: v.accent }}
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div>
                  <label htmlFor="sw-name" className="sr-only">Your Name</label>
                  <input
                    id="sw-name"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputCls}
                    style={{ "--tw-ring-color": v.accent } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="sw-email" className="sr-only">Email Address</label>
                  <input
                    id="sw-email"
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={inputCls}
                    style={{ "--tw-ring-color": v.accent } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="sw-phone" className="sr-only">Phone Number</label>
                  <input
                    id="sw-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                    className={inputCls}
                    style={{ "--tw-ring-color": v.accent } as React.CSSProperties}
                  />
                </div>

                <div>
                  <label htmlFor="sw-course" className="sr-only">Select Program</label>
                  <select
                    id="sw-course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className={inputCls}
                    style={{ "--tw-ring-color": v.accent } as React.CSSProperties}
                  >
                    <option value="">Select Program *</option>
                    <option value="1-day">1-Day Retreat</option>
                    <option value="3-day">3-Day Retreat</option>
                    <option value="5-day">5-Day Retreat</option>
                    <option value="7-day">7-Day Retreat</option>
                    <option value="custom">Custom Program</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="sw-message" className="sr-only">Message</label>
                  <textarea
                    id="sw-message"
                    name="message"
                    placeholder="Message (Optional)"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputCls} resize-none`}
                    style={{ "--tw-ring-color": v.accent } as React.CSSProperties}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-[14px] text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${v.accentMid}, ${v.accent})`,
                    boxShadow: `0 4px 14px ${v.accent}40`,
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-75"
                          fill="white"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                        />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowIcon />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-[#A09990] leading-relaxed">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:opacity-70"
                    style={{ color: v.accentMid }}
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </Card>
      )}

      {/* ── UPCOMING BATCHES ───────────────────────────────────────────── */}
      {batches && batches.length > 0 && (
        <Card accent={v.accent}>
          <div className="p-6">
            <div className="mb-5">
              <CardHeading>Upcoming Batches</CardHeading>
              <p className="text-[13px] text-[#9B9590] mt-1">Reserve your spot early.</p>
            </div>

            <ul className="space-y-3" role="list">
              {batches.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Badge bg={v.badgeBg} fg={v.badgeFg}>
                    <CalIcon color={v.badgeFg} />
                  </Badge>

                  <div className="flex flex-col min-w-0">
                    <span className="text-[14px] font-semibold text-[#2D2A26] leading-snug">
                      {b.date}
                    </span>
                    {b.label && (
                      <span
                        className="text-[12px] font-medium mt-0.5 px-2 py-0.5 rounded-full w-fit"
                        style={{
                          background: v.accentLight,
                          color: v.accent,
                          border: `1px solid ${v.accentBorder}`,
                        }}
                      >
                        {b.label}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      {contact && (
        <Card accent={v.accent}>
          <div className="p-6">
            <div className="mb-5">
              <CardHeading>Get In Touch</CardHeading>
            </div>

            <ul className="space-y-3" role="list">
              {contact.phone.map((p, i) => (
                <li key={i}>
                  <a
                    href={`tel:${p}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Call us at ${p}`}
                  >
                    <Badge bg={v.badgeBg} fg={v.badgeFg}>
                      <PhoneIcon color={v.badgeFg} />
                    </Badge>
                    <span className="text-[14px] font-medium text-[#2D2A26] group-hover:underline transition-all">
                      {p}
                    </span>
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Email us at ${contact.email}`}
                >
                  <Badge bg={v.badgeBg} fg={v.badgeFg}>
                    <MailIcon color={v.badgeFg} />
                  </Badge>
                  <span className="text-[14px] font-medium text-[#2D2A26] group-hover:underline transition-all truncate max-w-[220px]">
                    {contact.email}
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Badge bg={v.badgeBg} fg={v.badgeFg}>
                  <PinIcon color={v.badgeFg} />
                </Badge>
                <span className="text-[14px] text-[#3D3A36] leading-relaxed">
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </Card>
      )}
    </aside>
  );
}