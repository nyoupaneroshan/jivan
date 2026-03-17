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
  variant?: "red" | "dark-red" | "orange" | "green" | "purple" | "blue";
}

const variantStyles = {
  red: {
    button: "from-[#C41E3A] to-[#8B0000]",
    buttonShadow: "shadow-red-500/60",
    header: "from-[#C41E3A] to-[#8B0000]",
    activeColor: "#C41E3A",
    hoverBg: "rgba(196, 30, 58, 0.05)",
    activeBg: "rgba(196, 30, 58, 0.1)",
  },
  "dark-red": {
    button: "from-[#8B0000] to-[#4B0000]",
    buttonShadow: "shadow-red-900/60",
    header: "from-[#8B0000] to-[#4B0000]",
    activeColor: "#8B0000",
    hoverBg: "rgba(139, 0, 0, 0.05)",
    activeBg: "rgba(139, 0, 0, 0.1)",
  },
  orange: {
    button: "from-[#FF6B35] to-[#FF8C00]",
    buttonShadow: "shadow-orange-500/60",
    header: "from-[#FF6B35] to-[#FF8C00]",
    activeColor: "#FF6B35",
    hoverBg: "rgba(255, 107, 53, 0.05)",
    activeBg: "rgba(255, 107, 53, 0.1)",
  },
  green: {
    button: "from-green-600 to-green-800",
    buttonShadow: "shadow-green-500/60",
    header: "from-green-600 to-green-800",
    activeColor: "#16a34a",
    hoverBg: "rgba(22, 163, 74, 0.05)",
    activeBg: "rgba(22, 163, 74, 0.1)",
  },
  purple: {
    button: "from-purple-600 to-purple-800",
    buttonShadow: "shadow-purple-500/60",
    header: "from-purple-600 to-purple-800",
    activeColor: "#9333ea",
    hoverBg: "rgba(147, 51, 234, 0.05)",
    activeBg: "rgba(147, 51, 234, 0.1)",
  },
  blue: {
    button: "from-blue-600 to-blue-800",
    buttonShadow: "shadow-blue-500/60",
    header: "from-blue-600 to-blue-800",
    activeColor: "#2563eb",
    hoverBg: "rgba(37, 99, 235, 0.05)",
    activeBg: "rgba(37, 99, 235, 0.1)",
  },
};

export function QuickNavigation({ items, variant = "red" }: QuickNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(items[0]?.id || "");
  const styles = variantStyles[variant];

  // Lock body scroll when sidebar is open
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

  // Track active section on scroll
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

  // Close on Escape key
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
      const offset = 100; // Adjust based on your header height
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
      {/* Toggle Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-4 sm:left-5 top-[120px] sm:top-[140px] md:top-[160px] lg:top-[180px] w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-gradient-to-br ${styles.button} border-none rounded-full cursor-pointer z-[1000] shadow-2xl ${styles.buttonShadow} transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center`}
        aria-label="Quick Navigation Menu"
      >
        <span className="flex flex-col gap-1.5 w-5 sm:w-6">
          <span
            className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Overlay - Behind Sidebar */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1050] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden="true"
      />

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 w-[280px] sm:w-[320px] md:w-[340px] h-screen bg-white z-[1100] shadow-2xl overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Quick Navigation Sidebar"
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center px-5 sm:px-6 py-5 sm:py-6 bg-gradient-to-br ${styles.header} text-white sticky top-0 z-10 shadow-lg`}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold m-0 mb-1">Quick Navigation</h3>
            <p className="text-xs text-white/80 m-0">Jump to any section</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white/20 hover:bg-white/30 border-none text-white text-3xl cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:rotate-90 leading-none shadow-lg"
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>

        {/* Navigation Items */}
        <div className="py-3 sm:py-4">
          {items.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.href, item.id)}
                className={`w-full flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold border-l-4 transition-all duration-200 ${
                  isActive
                    ? "border-l-current"
                    : "border-l-transparent hover:border-l-gray-300"
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(to right, ${styles.activeBg}, transparent)`
                    : "",
                  borderLeftColor: isActive ? styles.activeColor : "transparent",
                  color: isActive ? styles.activeColor : "#555",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = `linear-gradient(to right, ${styles.hoverBg}, transparent)`;
                    e.currentTarget.style.borderLeftColor = styles.activeColor;
                    e.currentTarget.style.color = styles.activeColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.borderLeftColor = "transparent";
                    e.currentTarget.style.color = "#555";
                  }
                }}
              >
                <span className="text-xl sm:text-2xl w-7 sm:w-8 text-center flex-shrink-0">
                  {item.icon}
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                <span
                  className={`text-base sm:text-lg transition-all duration-200 ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                  style={{ color: styles.activeColor }}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-5 sm:px-6 py-3 sm:py-4">
          <p className="text-xs text-gray-600 text-center m-0">
            Press <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-semibold">ESC</kbd> to close
          </p>
        </div>
      </nav>
    </>
  );
}
