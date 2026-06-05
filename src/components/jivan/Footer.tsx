"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer({ onOpenAiChat }: { onOpenAiChat: () => void }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const whatsappNumber = "9779818514837";
  const email = "jivanparivartan9@gmail.com";
  const callNumber1 = "+977 9818514837";
  const callNumber2 = "+977 9863049261";
  const address = "Tarkeshwor-5, Kathmandu, Nepal";

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (popoverRef.current && !popoverRef.current.contains(target)) {
        setOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const companyLinks = [
    { name: "About Us", link: "/about" },
    { name: "Our Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  const exploreLinks = [
    { name: "Yoga", link: "/yoga" },
    { name: "Meditation & Retreats", link: "/meditation" },
    { name: "Healing", link: "/healing" },
    { name: "Training", link: "/training" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100091674787130&mibextid=LQQJ4d",
      label: "Facebook",
      icon: <Facebook size={18} />,
      hover: "hover:bg-[#1877F2] hover:shadow-[0_10px_24px_rgba(24,119,242,0.35)]",
    },
    {
      href: "https://www.instagram.com/jivanparivartan99/",
      label: "Instagram",
      icon: <Instagram size={18} />,
      hover:
        "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:shadow-[0_10px_24px_rgba(188,24,136,0.35)]",
    },
    {
      href: "https://www.youtube.com/@jivanparivartan",
      label: "YouTube",
      icon: <Youtube size={18} />,
      hover: "hover:bg-[#FF0000] hover:shadow-[0_10px_24px_rgba(255,0,0,0.35)]",
    },
    {
      href: "https://www.tiktok.com/@jivanparivartan",
      label: "TikTok",
      icon: <FaTiktok size={18} />,
      hover: "hover:bg-black hover:shadow-[0_10px_24px_rgba(37,244,238,0.28)]",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#23140d] text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.08),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative z-10 mx-auto w-[92%] max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20">
        {/* Top CTA strip */}
        <div className="mb-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl">
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100">
                <Sparkles size={14} />
                Begin Your Journey
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Ready to explore healing, retreats, yoga, or training?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
                Connect with Jivan Parivartan for guidance, booking support, or help
                choosing the right path for your personal or professional wellness journey.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#23140d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-50"
              >
                Contact Us
              </Link>
              <button
                onClick={onOpenAiChat}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Ask AI Assistant
              </button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.2fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/colorlogo.png"
                alt="Jivan Parivartan logo"
                className="h-12 w-auto object-contain opacity-95 transition-transform duration-300 hover:scale-[1.02]"
              />
            </Link>

            <p className="max-w-md text-[15px] leading-8 text-white/72">
              Jivan Parivartan is a holistic healing and transformation center
              dedicated to physical, emotional, and spiritual well-being through
              yoga, meditation, retreats, healing, and training experiences.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 ${item.hover}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-base font-semibold tracking-wide text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="group inline-flex items-center gap-2 text-sm text-white/72 transition-all duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-base font-semibold tracking-wide text-white">
              Explore
            </h3>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="group inline-flex items-center gap-2 text-sm text-white/72 transition-all duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-semibold tracking-wide text-white">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" />
                <div className="space-y-1">
                  <a
                    href={`tel:${callNumber1.replace(/\s+/g, "")}`}
                    className="block transition-colors hover:text-white"
                  >
                    {callNumber1}
                  </a>
                  <a
                    href={`tel:${callNumber2.replace(/\s+/g, "")}`}
                    className="block transition-colors hover:text-white"
                  >
                    {callNumber2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" />
                <a
                  href={`mailto:${email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" />
                <span>{address}</span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-100 transition-all duration-300 hover:bg-emerald-400/15"
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[13px] text-white/55">
            © {new Date().getFullYear()} Jivan Parivartan. All rights reserved.
          </p>

          <p className="text-[13px] text-white/50">
            Designed & Developed by{" "}
            <a
              href="https://11techmedia.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/75 transition-colors hover:text-white"
            >
              11 TechMedia
            </a>
          </p>
        </div>
      </div>

      {/* Floating contact */}
      <div ref={popoverRef} className="fixed bottom-6 right-6 z-[70]">
        {open && (
          <div className="mb-3 w-[290px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.22)] animate-scale-in">
            <div className="flex items-start justify-between border-b bg-gradient-to-r from-slate-50 to-white px-4 py-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Quick Contact</p>
                <p className="text-xs text-slate-500">Choose the fastest way to reach us</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close contact menu"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-1 p-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 hover:bg-emerald-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 font-bold text-emerald-700">
                  WA
                </span>
                <div>
                  <p className="font-semibold text-slate-900">WhatsApp</p>
                  <p className="text-xs text-slate-500">Fast reply for bookings</p>
                </div>
                <ChevronRight
                  size={16}
                  className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <button
                onClick={() => {
                  onOpenAiChat();
                  setOpen(false);
                }}
                className="group flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition-all duration-300 hover:bg-sky-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 font-bold text-sky-700">
                  AI
                </span>
                <div>
                  <p className="font-semibold text-slate-900">AI Assistant</p>
                  <p className="text-xs text-slate-500">Instant guidance and support</p>
                </div>
                <ChevronRight
                  size={16}
                  className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <a
                href={`tel:${callNumber1.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-300 hover:bg-amber-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 font-bold text-amber-700">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <p className="text-xs text-slate-500">{callNumber1}</p>
                </div>
                <ChevronRight
                  size={16}
                  className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Open contact options"
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(37,99,235,0.45)]"
        >
          <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
          <MessageCircle size={18} className="relative" />
          <span className="relative">Contact Us</span>
        </button>
      </div>
    </footer>
  );
}