"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenu } from "@/lib/navv";
import { Mail, Phone, MapPin, Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Footer } from "./Footer";
import { ChatModal } from "@/app/ChatModal";
import { PopupProvider } from "@/lib/popup-context";
import Script from "next/script";


type AnyNavItem = any;

function getSubItems(item: AnyNavItem): AnyNavItem[] {
  return item?.children?.length ? item.children : item?.items?.length ? item.items : [];
}
function hasSubItems(item: AnyNavItem): boolean {
  return getSubItems(item).length > 0;
}
function toId(value: unknown) {
  return String(value ?? "");
}

function MobileNavItem({
  item,
  depth,
  openIds,
  toggleOpen,
  closeMenu,
  animationDelayMs = 0,
}: {
  item: AnyNavItem;
  depth: number;
  openIds: Set<string>;
  toggleOpen: (id: string) => void;
  closeMenu: () => void;
  animationDelayMs?: number;
}) {
  const id = toId(item.id);
  const children = getSubItems(item);
  const expandable = children.length > 0;
  const isOpen = openIds.has(id);

  const submenuId = `mobile-submenu-${id}`;

  const href: string | undefined = item?.href;
  const labelToggles = expandable && (!href || href === "#" || href === "");

  return (
    <li
      className="border-b border-white/10 animate-slide-in"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <div className="relative group">
        <Link
          href={href || "#"}
          className={`block pr-12 py-4 text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300 ${
            item.isGroup ? "font-bold text-white" : ""
          }`}
          style={{ paddingLeft: 20 + depth * 16 }}
          onClick={(e) => {
            if (labelToggles) {
              e.preventDefault();
              toggleOpen(id);
              return;
            }
            closeMenu();
          }}
        >
          <span className="flex items-center justify-between gap-3">
            <span className="leading-none transition-transform duration-300 group-hover:translate-x-1">
              {item.label}
            </span>
            {expandable && !labelToggles && (
              <ChevronRight
                size={16}
                className="text-white/70 transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </span>
        </Link>

        {expandable && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleOpen(id);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white px-2 py-2 hover:bg-white/20 rounded-lg transition-all duration-300"
            aria-label={isOpen ? "Collapse submenu" : "Expand submenu"}
            aria-expanded={isOpen}
            aria-controls={submenuId}
          >
            <span className={`block transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
              {isOpen ? "−" : "+"}
            </span>
          </button>
        )}
      </div>

      {expandable && (
        <div
          id={submenuId}
          className={`overflow-hidden transition-all duration-500 ease-in-out bg-black/20 ${
            isOpen ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* IMPORTANT: ul must contain only li children (MobileNavItem returns li) */}
          <ul>
            {children.map((child: AnyNavItem, index: number) => (
              <MobileNavItem
                key={toId(child.id)}
                item={child}
                depth={depth + 1}
                openIds={openIds}
                toggleOpen={toggleOpen}
                closeMenu={closeMenu}
                animationDelayMs={index * 50}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const pathname = usePathname();
  const scrollLockRef = useRef<{ overflow: string; paddingRight: string } | null>(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenus(new Set());
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) setOpenSubmenus(new Set());
      return next;
    });
  }, []);

  const toggleSubmenu = useCallback((id: string) => {
    setOpenSubmenus((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/";
      return pathname.startsWith(href);
    },
    [pathname]
  );

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      if (scrollLockRef.current) {
        document.body.style.overflow = scrollLockRef.current.overflow;
        document.body.style.paddingRight = scrollLockRef.current.paddingRight;
        scrollLockRef.current = null;
      }
      return;
    }

    const computed = window.getComputedStyle(document.body);
    scrollLockRef.current = {
      overflow: computed.overflow,
      paddingRight: computed.paddingRight,
    };

    const scrollbarComp = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarComp > 0) document.body.style.paddingRight = `${scrollbarComp}px`;

    return () => {
      if (scrollLockRef.current) {
        document.body.style.overflow = scrollLockRef.current.overflow;
        document.body.style.paddingRight = scrollLockRef.current.paddingRight;
        scrollLockRef.current = null;
      }
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y < 30) {
        setIsTopBarVisible(true);
        lastY = y;
        return;
      }

      setIsTopBarVisible(y <= lastY);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileItems = useMemo(() => navigationMenu, []);

  return (
     <PopupProvider>   
        {/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M5L01Q3MXY"></script>
 <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-M5L01Q3MXY');
    `}
  </Script>
    <div className="min-h-screen flex flex-col">
      <ChatModal open={aiChatOpen} onClose={() => setAiChatOpen(false)} />

      <div className="fixed top-0 left-0 right-0 z-[1000] shadow-md">
        {/* TOP BAR */}
        <div
          className={[
            "bg-gradient-to-r from-[#2F9E68] via-[#0B6B45] to-[#01371c] text-white/90 text-[13px] overflow-hidden transition-all duration-500 ease-in-out",
            isTopBarVisible
              ? "max-h-[120px] sm:max-h-[110px] md:max-h-[60px] opacity-100"
              : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="py-2">
            <div className="w-[92%] max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 items-center">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 min-w-0 group">
                    <Mail size={14} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <a
                      href="mailto:info@jivanparivartan.com"
                      className="hover:text-white transition-all duration-300 truncate hover:underline underline-offset-2"
                      title="info@jivanparivartan.com"
                    >
                      info@jivanparivartan.com
                    </a>
                  </span>

                  <Link
                    href="/contact"
                    className="group shrink-0 border border-white/30 px-4 py-1.5 rounded-full hover:bg-white hover:text-[#06402B] transition-all duration-300 text-xs font-medium hover:shadow-lg hover:scale-105 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="relative z-10">Join Us</span>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 md:justify-end text-[12.5px]">
                  <span className="flex items-center gap-2 group">
                    <Phone size={14} className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="whitespace-nowrap">+977 9818514837</span>
                    <span className="opacity-70">,</span>
                    <span className="whitespace-nowrap">9863049261</span>
                  </span>

                  <span className="flex items-center gap-2 group">
                    <MapPin size={14} className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="whitespace-nowrap">Tarkeshwor-5, Kathmandu</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <header className="text-white py-3 bg-gradient-to-r from-[#58A6E8] via-[#2B78B9] to-[#07486d] backdrop-blur-sm">
          <div className="w-[100%] max-w-[1400px] mx-auto flex items-center justify-between px-5">
            <Link href="/" className="flex items-center gap-4 z-[1001] group">
              <img
                src="/colorlogo.png"
                alt="Jivan Parivartan Logo"
                className="h-10 sm:h-11 md:h-12 w-auto object-contain p-1 rounded-lg transition-all duration-300 group-hover:scale-110"
              />
            </Link>

            <button
              className="md:hidden text-white z-[1101] transition-transform duration-300 hover:scale-110 active:scale-95"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex flex-1 justify-end">
              <ul className="flex items-center gap-1">
                {navigationMenu.map((item: AnyNavItem) => (
                  <li key={toId(item.id)} className="relative group z-10 hover:z-[200]">
                    <Link
                      href={item.href}
                      className={`relative text-white/90 text-[15px] px-4 py-2.5 rounded-md transition-all duration-300
                        after:absolute after:left-4 after:right-4 after:bottom-1 after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300
                        ${
                          isActive(item.href)
                            ? "text-white after:scale-x-100 bg-white/10"
                            : "hover:text-white hover:after:scale-x-100 hover:bg-white/5"
                        }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.children && (
                          <ChevronDown
                            size={16}
                            className="opacity-90 transition-transform duration-300 group-hover:rotate-180"
                          />
                        )}
                      </span>
                    </Link>

                    {/* Mega menu */}
                    {item.type === "mega" && item.children && (
                      <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-[-200px] top-full bg-white text-gray-800 shadow-2xl rounded-xl w-[900px] z-[100] p-8 transition-all duration-300">
                        <div className="grid grid-cols-2 gap-9">
                          {item.children.map((section: AnyNavItem) => (
                            <div key={toId(section.id)}>
                              <Link
                                href={section.href}
                                className="text-[#8B0000] font-semibold border-b pb-2 mb-3 block hover:text-[#C41E3A] transition-colors duration-300"
                              >
                                {section.label}
                              </Link>

                              {section.items && (
                                <ul>
                                  {section.items.map((subItem: AnyNavItem) => (
                                    <li key={toId(subItem.id)}>
                                      <Link
                                        href={subItem.href}
                                        className="group/sub block text-sm text-gray-600 px-2 py-1.5 rounded hover:bg-[#f5f0ff] hover:text-[#8B0000] transition-all duration-300 hover:translate-x-1"
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

                    {/* Dropdown */}
                    {item.type === "dropdown" && item.children && (
                      <ul className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 absolute left-0 top-full bg-white shadow-xl rounded-lg min-w-[280px] py-2 transition-all duration-300 z-[100]">
                        {item.children.map((subItem: AnyNavItem) => (
                          <li key={toId(subItem.id)} className="relative group/sub">
                            <Link
                              href={subItem.href}
                              className={`flex items-center justify-between gap-3 px-5 py-2.5 text-sm transition-all duration-300 hover:translate-x-1 ${
                                subItem.isGroup
                                  ? "font-bold text-green-700 hover:bg-green-50 border-t border-gray-100 first:border-t-0 mt-1 first:mt-0"
                                  : "text-gray-700 hover:bg-[#f5f0ff] hover:text-[#8B0000] pl-8"
                              }`}
                            >
                              <span className="leading-none">{subItem.label}</span>
                              {hasSubItems(subItem) && !subItem.isGroup && (
                                <ChevronRight
                                  size={16}
                                  className="text-gray-400 transition-transform duration-300 group-hover/sub:translate-x-1"
                                />
                              )}
                            </Link>

                            {hasSubItems(subItem) && subItem.children && (
                              <ul className="invisible opacity-0 translate-x-1 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 absolute left-full top-0 bg-white shadow-xl rounded-lg min-w-[260px] py-2 transition-all duration-300 z-[100]">
                                {subItem.children.map((nestedChild: AnyNavItem) => (
                                  <li key={toId(nestedChild.id)}>
                                    <Link
                                      href={nestedChild.href}
                                      className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#f5f0ff] hover:text-[#8B0000] transition-all duration-300 hover:translate-x-1"
                                    >
                                      {nestedChild.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* MOBILE OVERLAY */}
            {isMobileMenuOpen && (
              <button
                type="button"
                className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[1090] transition-opacity duration-300"
                aria-label="Close menu overlay"
                onClick={closeMobileMenu}
              />
            )}

            {/* MOBILE DRAWER */}
            <nav
              id="mobile-drawer"
              className={`md:hidden fixed top-0 ${
                isMobileMenuOpen ? "right-0" : "-right-full"
              } w-[300px] h-screen bg-[#8B0000] transition-all duration-500 ease-out z-[1100] pt-20 overflow-y-auto shadow-2xl`}
            >
              <ul>
                {mobileItems.map((item: AnyNavItem, index: number) => (
                  <MobileNavItem
                    key={toId(item.id)}
                    item={item}
                    depth={0}
                    openIds={openSubmenus}
                    toggleOpen={toggleSubmenu}
                    closeMenu={closeMobileMenu}
                    animationDelayMs={index * 30}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* CONTENT */}
      <main
        className={`transition-[padding-top] duration-500 ease-in-out ${
          isTopBarVisible ? "pt-[120px] md:pt-[104px]" : "pt-[92px] md:pt-[80px]"
        }`}
      >
        {children}
      </main>

      <Footer onOpenAiChat={() => setAiChatOpen(true)} />
    </div>
    </PopupProvider>
  );
}
