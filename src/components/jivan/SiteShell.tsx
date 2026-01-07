"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenu } from "@/lib/nav";
import {
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Footer } from "./Footer";
import { ChatModal } from "@/app/ChatModal";

// Helper functions for navigation items
function getSubItems(item: any): any[] {
  return item.children?.length ? item.children : item.items?.length ? item.items : [];
}

function hasSubItems(item: any): boolean {
  return getSubItems(item).length > 0;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [aiChatOpen, setAiChatOpen] = useState(false);

  // NEW: top bar visibility on scroll
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // NEW: hide/show top bar based on scroll direction
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // always show near top
      if (y < 30) {
        setIsTopBarVisible(true);
        lastY = y;
        return;
      }

      // hide on scroll down, show on scroll up
      if (y > lastY) setIsTopBarVisible(false);
      else setIsTopBarVisible(true);

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (id: string) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ChatModal open={aiChatOpen} onClose={() => setAiChatOpen(false)} />

      {/* ===== TOP BAR + HEADER WRAPPER ===== */}
      <div className="fixed top-0 left-0 right-0 z-[1000] shadow-md">
        {/* ===== TOP BAR (hide on scroll) ===== */}
        <div
          className={`bg-[#06402B] text-white/90 text-[13px] overflow-hidden transition-all duration-300 ${
            isTopBarVisible ? "max-h-[60px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2">
            <div className="w-[92%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex flex-wrap justify-center md:justify-start gap-5 items-center">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} />
                  <a
                    href="mailto:info@jivanparivartan.com"
                    className="hover:text-white underline underline-offset-2"
                  >
                    info@jivanparivartan.com
                  </a>
                </span>

                <span className="flex items-center gap-1.5">
                  <Phone size={14} /> +977 9818514837, 9863049261
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> Tarkeshwor-5, Kathmandu
                </span>
              </div>

              <Link
                href="/contact"
                className="border border-white/30 px-4 py-1.5 rounded-full cursor-pointer hover:bg-white hover:text-[#6E3B1F] transition-all duration-300 text-xs font-medium"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* ===== HEADER ===== */}
        <header className="text-white py-3 bg-gradient-to-r from-[#0F5D8A] via-[#2B78B9] to-[#58A6E8]">
          <div className="w-[92%] max-w-[1400px] mx-auto flex items-center justify-between gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 z-[1001]">
              <img
                src="/logo.png"
                alt="Jivan Parivartan Logo"
                className="h-[64px] md:h-[52px] sm:h-[44px] bg-white p-2 rounded-xl shadow-sm"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-[22px] md:text-lg sm:text-base font-semibold tracking-wide">
                  JIVAN PARIVARTAN
                </span>
                <span className="text-[11px] tracking-[2px] opacity-80">
                  HOLISTIC WELLNESS CENTER
                </span>
              </div>
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white z-[1001]"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* ===== DESKTOP NAV ===== */}
            <nav className="hidden md:flex flex-1 justify-end">
              <ul className="flex items-center gap-1">
                {navigationMenu.map((item) => (
                  <li key={item.id} className="relative group z-10 hover:z-[200]">
                    <Link
                      href={item.href}
                      className={`relative text-white/90 text-[15px] px-4 py-2.5 rounded-md transition-all duration-300
                        after:absolute after:left-4 after:right-4 after:bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform
                        ${
                          isActive(item.href)
                            ? "text-white after:scale-x-100"
                            : "hover:text-white hover:after:scale-x-100"
                        }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.children && (
                          <ChevronDown
                            size={16}
                            className="opacity-90 transition-transform duration-200 group-hover:rotate-180"
                          />
                        )}
                      </span>
                    </Link>

                    {/* ===== MEGA MENU ===== */}
                    {item.type === "mega" && item.children && (
                      <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-[-200px] top-full bg-white text-gray-800 shadow-2xl rounded-xl w-[900px] z-[100] p-8 transition-all duration-200">
                        <div className="grid grid-cols-2 gap-9">
                          {item.children.map((section: any) => (
                            <div key={section.id}>
                              <Link
                                href={section.href}
                                className="text-[#8B0000] font-semibold border-b pb-2 mb-3 block hover:text-[#C41E3A]"
                              >
                                {section.label}
                              </Link>

                              {section.items && (
                                <ul>
                                  {section.items.map((subItem: any) => (
                                    <li key={subItem.id}>
                                      <Link
                                        href={subItem.href}
                                        className="block text-sm text-gray-600 px-2 py-1.5 rounded hover:bg-[#f5f0ff] hover:text-[#8B0000] transition-all"
                                      >
                                        {subItem.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ===== DROPDOWN (RECURSIVE) ===== */}
                    {item.type === "dropdown" && item.children && (
                      <ul className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-0 top-full bg-white shadow-xl rounded-lg min-w-[260px] py-2 transition-all duration-200 z-[100]">
                        {item.children.map((subItem: any) => {
                          const renderDropdownItem = (navItem: any): JSX.Element => {
                            const children = getSubItems(navItem);
                            const expandable = hasSubItems(navItem);

                            return (
                              <li key={navItem.id} className="relative group/sub">
                                <Link
                                  href={navItem.href}
                                  className="flex items-center justify-between gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-[#f5f0ff] hover:text-[#8B0000] transition-all"
                                >
                                  <span className="leading-none">{navItem.label}</span>
                                  {expandable && (
                                    <ChevronRight size={16} className="text-gray-400" />
                                  )}
                                </Link>

                                {expandable && (
                                  <ul className="invisible opacity-0 translate-x-1 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 absolute left-full top-0 bg-white shadow-xl rounded-lg min-w-[260px] py-2 transition-all duration-200 z-[100]">
                                    {children.map((child: any) => renderDropdownItem(child))}
                                  </ul>
                                )}
                              </li>
                            );
                          };

                          return renderDropdownItem(subItem);
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* ===== MOBILE NAV (RECURSIVE) ===== */}
            <nav
              className={`md:hidden fixed top-0 ${
                isMobileMenuOpen ? "right-0" : "-right-full"
              } w-[300px] h-screen bg-[#8B0000] transition-all duration-300 z-[1100] pt-20 overflow-y-auto`}
            >
              <ul>
                {navigationMenu.map((item: any) => {
                  const renderMobileItem = (navItem: any, depth: number = 0): JSX.Element => {
                    const children = getSubItems(navItem);
                    const expandable = hasSubItems(navItem);
                    const isOpen = activeSubmenu === navItem.id;

                    return (
                      <li key={navItem.id} className="border-b border-white/10">
                        <div className="relative">
                          <Link
                            href={navItem.href}
                            className="block pr-12 py-4 text-white/90 hover:bg-white/10 transition"
                            style={{ paddingLeft: 20 + depth * 16 }}
                            onClick={(e) => {
                              if (expandable) {
                                e.preventDefault();
                                toggleSubmenu(navItem.id);
                              } else {
                                toggleMobileMenu();
                              }
                            }}
                          >
                            {navItem.label}
                          </Link>

                          {expandable && (
                            <button
                              type="button"
                              onClick={() => toggleSubmenu(navItem.id)}
                              className="absolute right-5 top-1/2 -translate-y-1/2 text-white"
                              aria-label="Toggle submenu"
                            >
                              {isOpen ? "−" : "+"}
                            </button>
                          )}
                        </div>

                        {expandable && (
                          <div
                            className={`overflow-hidden transition-all duration-300 bg-black/20 ${
                              isOpen ? "max-h-[1200px]" : "max-h-0"
                            }`}
                          >
                            <ul>{children.map((child: any) => renderMobileItem(child, depth + 1))}</ul>
                          </div>
                        )}
                      </li>
                    );
                  };

                  return renderMobileItem(item, 0);
                })}
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* ===== CONTENT + FOOTER ===== */}
      {/* NOTE: because header is fixed, your pages likely need top padding somewhere
         (layout or page wrapper) to avoid being hidden under the header. */}
      <main>{children}</main>
      <Footer onOpenAiChat={() => setAiChatOpen(true)} />
    </div>
  );
}
