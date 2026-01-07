"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

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

  // update if needed
  const whatsappNumber = "9779818514837"; // no +
  const email = "jivanparivartan9@gmail.com";
  const callNumber1 = "+977 9818514837";
  const callNumber2 = "+977 9863049261";

  return (
    <footer className="relative bg-gradient-to-br from-[#5E3523] via-[#4A2915] to-[#3D2012] text-white">
      {/* Main footer */}
      <div className="mx-auto w-[92%] max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-14">
        <div className="grid gap-12 pb-12 border-b border-white/20 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* About */}
          <div className="pr-0 lg:pr-6">
            <p className="text-[15px] leading-8 text-white/85">
              At Jivan Parivartan, we are dedicated to providing a sanctuary for
              healing, transformation, and holistic well-being. Our center is a
              haven where individuals can embark on a journey towards physical,
              emotional, and spiritual wellness. We believe that true healing
              encompasses the mind, body, heart, and soul, and our mission is to
              guide you on this transformative path.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25 hover:-translate-y-1"
              >
                f
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25 hover:-translate-y-1"
              >
                ◎
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25 hover:-translate-y-1"
              >
                ▶
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25 hover:-translate-y-1"
              >
                X
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-bold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  Our services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-bold">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  Help & support
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] text-white/80 transition hover:text-white hover:pl-2 inline-block"
                >
                  Terms & condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-[20px] font-bold">Address</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-white" />
                <div className="text-[15px] leading-7 text-white/85">
                  <a className="hover:text-white" href="tel:+9779818514837">
                    {callNumber1}
                  </a>
                  ,{" "}
                  <a className="hover:text-white" href="tel:+9779863049261">
                    {callNumber2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-white" />
                <div className="text-[15px] leading-7 text-white/85">
                  <a className="hover:text-white" href={`mailto:${email}`}>
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-white" />
                <div className="text-[15px] leading-7 text-white/85">
                  Tarkeshwor-5, Kathmandu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center">
          <p className="text-[14px] text-white/70">
            © {new Date().getFullYear()} Jivan Parivartan. All rights reserved. |
            Designed by{" "}
            <a href="#" className="text-white/90 hover:text-white">
              11 TechMedia
            </a>
          </p>
        </div>
      </div>

      {/* Floating Contact Menu (same functionality as before) */}
      <div ref={popoverRef} className="fixed bottom-7 right-7 z-[60]">
        {open && (
          <div className="mb-3 w-64 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
            <div className="border-b px-4 py-3">
              <div className="text-sm font-semibold text-slate-900">
                Contact options
              </div>
              <div className="text-xs text-slate-500">
                Choose how you want to reach us
              </div>
            </div>

            <div className="p-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  WA
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-slate-500">Fast response</div>
                </div>
              </a>

              <button
                type="button"
                onClick={() => {
                  onOpenAiChat();
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  AI
                </span>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900">
                    Chat with our AI
                  </div>
                  <div className="text-xs text-slate-500">Popup chat</div>
                </div>
              </button>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  @
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">Email us</div>
                  <div className="text-xs text-slate-500">{email}</div>
                </div>
              </a>

              <a
                href={`tel:${callNumber1.replace(/\s/g, "")}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                  ☎
                </span>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">Call us</div>
                  <div className="text-xs text-slate-500">{callNumber1}</div>
                </div>
              </a>
            </div>

            <div className="border-t p-2">
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#357ABD] px-6 py-3 text-[15px] font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-1 hover:shadow-xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/30 text-[16px]">
            💬
          </span>
          <span>Contact us</span>
        </button>
      </div>
    </footer>
  );
}
