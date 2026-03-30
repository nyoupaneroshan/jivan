"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer({ onOpenAiChat }: { onOpenAiChat: () => void }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (popoverRef.current && !popoverRef.current.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const whatsappNumber = "9779818514837";
  const email = "jivanparivartan9@gmail.com";
  const callNumber1 = "+977 9818514837";
  const callNumber2 = "+977 9863049261";

  return (
    <footer className="relative bg-gradient-to-br from-[#4B2A1A] via-[#3A1F13] to-[#2B150C] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto w-[92%] max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-16 relative z-10">
        {/* Top Grid */}
        <div className="grid gap-14 pb-14 border-b border-white/15 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* Brand / About */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start group">
              <img
                src="/colorlogo.png"
                alt="Jivan Parivartan Logo"
                className="h-12 sm:h-14 w-auto object-contain opacity-95 transition-all duration-500 hover:opacity-100 hover:scale-105"
              />
            </div>

            <p className="text-[15px] leading-[1.9] text-white/80 transition-colors duration-300 hover:text-white/90">
              Jivan Parivartan is a holistic healing and transformation center dedicated to
              physical, emotional, and spiritual well-being. We provide a nurturing space where
              individuals rediscover balance, clarity, and inner peace.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100091674787130&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group/social flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-[#1877F2] hover:shadow-[0_8px_20px_rgba(24,119,242,0.4)] hover:scale-110"
              >
                <Facebook size={18} className="transition-transform duration-300 group-hover/social:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jivanparivartan99/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group/social flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] hover:shadow-[0_8px_20px_rgba(188,24,136,0.4)] hover:scale-110"
              >
                <Instagram size={18} className="transition-transform duration-300 group-hover/social:scale-110" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@jivanparivartan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group/social flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-[#FF0000] hover:shadow-[0_8px_20px_rgba(255,0,0,0.4)] hover:scale-110"
              >
                <Youtube size={18} className="transition-transform duration-300 group-hover/social:scale-110" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@jivanparivartan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group/social flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-black hover:shadow-[0_8px_20px_#25F4EE] hover:scale-110"
              >
                <FaTiktok size={18} className="transition-transform duration-300 group-hover/social:scale-110" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="group/section">
            <h3 className="mb-6 text-[18px] font-semibold tracking-wide relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover/section:w-full" />
            </h3>
            <ul className="space-y-3 text-[15px]">
              {[
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="group/link inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover/link:w-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="group/section">
            <h3 className="mb-6 text-[18px] font-semibold tracking-wide relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover/section:w-full" />
            </h3>
            <ul className="space-y-3 text-[15px]">
              {[
                { name: "Help & Support", link: "/help" },
                { name: "Our Team", link: "/team" },
                { name: "Terms & Conditions", link: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="group/link inline-flex items-center gap-2 text-white/75 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-0 h-px bg-white transition-all duration-300 group-hover/link:w-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="group/section">
            <h3 className="mb-6 text-[18px] font-semibold tracking-wide relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/50 transition-all duration-300 group-hover/section:w-full" />
            </h3>

            <div className="space-y-5 text-[15px] text-white/80">
              <div className="group/contact flex gap-3 transition-all duration-300 hover:translate-x-1">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0 transition-transform duration-300 group-hover/contact:scale-110" />
                <div>
                  <a
                    href="tel:+9779818514837"
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    {callNumber1}
                  </a>
                  <a
                    href="tel:+9779863049261"
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    {callNumber2}
                  </a>
                </div>
              </div>

              <div className="group/contact flex gap-3 transition-all duration-300 hover:translate-x-1">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0 transition-transform duration-300 group-hover/contact:scale-110" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  {email}
                </a>
              </div>

              <div className="group/contact flex gap-3 transition-all duration-300 hover:translate-x-1">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 transition-transform duration-300 group-hover/contact:scale-110" />
                <span>Tarkeshwor-5, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="py-8 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] text-white/65 transition-colors duration-300 hover:text-white/80">
            © {new Date().getFullYear()} Jivan Parivartan. All rights reserved.
          </p>

          <p className="text-[13px] text-white/50 transition-colors duration-300 hover:text-white/70">
            Designed & Developed by{" "}
            <a 
  href="https://11techmedia.com.np/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-white/80 font-semibold hover:text-white hover:underline transition-all"
>
  11 TechMedia
</a>
          </p>
        </div>
      </div>

      {/* ================= FLOATING CONTACT ================= */}
      <div ref={popoverRef} className="fixed bottom-7 right-7 z-[60]">
        {/* Popover with smooth animation */}
        {open && (
          <div className="mb-3 w-64 rounded-[20px] bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden animate-scale-in">
            <div className="px-4 py-3 border-b bg-gradient-to-r from-slate-50 to-white">
              <p className="text-sm font-semibold text-slate-900">Contact Options</p>
              <p className="text-xs text-slate-500">Reach us instantly</p>
            </div>

            <div className="p-2 space-y-1">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 hover:translate-x-1"
              >
                <span className="h-10 w-10 flex items-center justify-center bg-emerald-100 text-emerald-700 rounded-xl font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                  WA
                </span>
                <div>
                  <p className="font-semibold text-slate-900">WhatsApp</p>
                  <p className="text-xs text-slate-500">Fast reply</p>
                </div>
                <span className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <button
                onClick={() => {
                  onOpenAiChat();
                  setOpen(false);
                }}
                className="group flex w-full items-center gap-3 px-3 py-3 rounded-xl hover:bg-sky-50 transition-all duration-300 hover:translate-x-1"
              >
                <span className="h-10 w-10 flex items-center justify-center bg-sky-100 text-sky-700 rounded-xl font-bold text-sm transition-transform duration-300 group-hover:scale-110">
                  AI
                </span>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">AI Assistant</p>
                  <p className="text-xs text-slate-500">Instant help</p>
                </div>
                <span className="ml-auto text-slate-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <div className="border-t p-2">
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-all duration-300 hover:shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Floating button with pulse */}
        <button
          onClick={() => setOpen(!open)}
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_6px_20px_rgba(74,144,226,0.4)] hover:shadow-[0_8px_30px_rgba(74,144,226,0.6)] hover:-translate-y-2 transition-all duration-300"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#4A90E2] animate-ping opacity-20" />
          
          <span className="relative text-xl transition-transform duration-300 group-hover:scale-110">
            💬
          </span>
          <span className="relative">Contact Us</span>
        </button>
      </div>

      {/* Custom animations */}
       
    </footer>
  );
}
