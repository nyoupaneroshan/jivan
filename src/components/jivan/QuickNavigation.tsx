"use client";

import React, { useState, useEffect } from "react";

interface NavItem {
  id: string;
  icon: string;
  label: string;
  href: string;
}

interface QuickNavigationProps {
  items: NavItem[];
  variant?: "red" | "dark-red" | "orange";
}

const variantStyles = {
  red: {
    button: "bg-gradient-to-br from-[#C41E3A] to-[#8B0000]",
    buttonHover: "shadow-[#C41E3A]/60",
    header: "bg-gradient-to-br from-[#C41E3A] to-[#8B0000]",
    activeColor: "#C41E3A",
    hoverBg: "rgba(196, 30, 58, 0.05)",
    activeBg: "rgba(196, 30, 58, 0.1)",
  },
  "dark-red": {
    button: "bg-gradient-to-br from-[#8B0000] to-[#4B0000]",
    buttonHover: "shadow-[#8B0000]/60",
    header: "bg-gradient-to-br from-[#8B0000] to-[#4B0000]",
    activeColor: "#8B0000",
    hoverBg: "rgba(139, 0, 0, 0.05)",
    activeBg: "rgba(139, 0, 0, 0.1)",
  },
  orange: {
    button: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    buttonHover: "shadow-[#FF6B35]/60",
    header: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    activeColor: "#FF6B35",
    hoverBg: "rgba(255, 107, 53, 0.05)",
    activeBg: "rgba(255, 107, 53, 0.1)",
  },
};

export function QuickNavigation({ items, variant = "red" }: QuickNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(items[0]?.id || "");
  const styles = variantStyles[variant];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => ({
        id: item.id,
        element: document.querySelector(item.href),
      }));

      const scrollY = window.pageYOffset + 250;

      for (const section of sections) {
        if (section.element) {
          const sectionTop = (section.element as HTMLElement).offsetTop;
          const sectionHeight = (section.element as HTMLElement).offsetHeight;

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleNavigate = (href: string, id: string) => {
    const target = document.querySelector(href);
    if (target) {
      setIsOpen(false);
      const offset = 150;
      const targetPosition = (target as HTMLElement).offsetTop - offset;

      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 300);

      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-5 lg:top-[180px] md:top-[140px] sm:top-[120px] w-14 h-14 md:w-12 md:h-12 sm:w-11 sm:h-11 ${styles.button} border-none rounded-full cursor-pointer z-[1000] shadow-xl transition-all hover:scale-110 hover:${styles.buttonHover} active:scale-95 flex items-center justify-center`}
        aria-label="Quick Navigation"
      >
        <span className="flex flex-col gap-1.5 w-6">
          <span
            className={`block w-full h-0.5 bg-white rounded transition-all ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white rounded transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white rounded transition-all ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 w-80 md:w-[280px] sm:w-[260px] h-screen bg-white z-[1100] shadow-2xl overflow-y-auto transition-all duration-300 ${
          isOpen ? "left-0" : "-left-80 md:-left-[280px] sm:-left-[260px]"
        }`}
      >
        <div
          className={`flex justify-between items-center px-5 py-6 ${styles.header} text-white sticky top-0 z-10`}
        >
          <h3 className="text-xl font-bold m-0">Quick Navigation</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white/20 border-none text-white text-3xl cursor-pointer w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/30 hover:rotate-90 leading-none"
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>

        <div className="py-2.5">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.href, item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 text-gray-600 font-semibold text-[15px] border-l-4 transition-all ${
                activeSection === item.id
                  ? `border-l-[${styles.activeColor}] text-[${styles.activeColor}]`
                  : "border-l-transparent hover:border-l-[${styles.activeColor}]"
              }`}
              style={{
                background:
                  activeSection === item.id
                    ? `linear-gradient(to right, ${styles.activeBg}, transparent)`
                    : "",
                borderLeftColor: activeSection === item.id ? styles.activeColor : "transparent",
                color: activeSection === item.id ? styles.activeColor : "#555",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.background = styles.hoverBg;
                  e.currentTarget.style.borderLeftColor = styles.activeColor;
                  e.currentTarget.style.color = styles.activeColor;
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.borderLeftColor = "transparent";
                  e.currentTarget.style.color = "#555";
                }
              }}
            >
              <span className="text-2xl w-7 text-center flex-shrink-0">
                {item.icon}
              </span>
              <span className="flex-1 text-left">{item.label}</span>
              <span
                className={`transition-all ${
                  activeSection === item.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2.5"
                }`}
                style={{ color: styles.activeColor }}
              >
                →
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[1050] transition-all ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </>
  );
}