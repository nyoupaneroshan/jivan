"use client";

import React, { useState, useEffect } from "react";

interface Section {
  id: string;
  number: string;
  title: string;
  content: string[];
}

export function HelpContent({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-5 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        {/* Sticky Numbered Navigation */}
        <aside className="lg:sticky lg:top-[180px] h-fit">
          <div className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-t-[4px] border-[#2D6A4F]">
            <h3 className="text-[18px] font-bold text-[#333] mb-4 pb-3 border-b-2 border-[#e9ecef]">
              Help Topics
            </h3>

            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                    activeSection === section.id
                      ? "bg-[#2D6A4F] text-white shadow-[0_2px_8px_rgba(45,106,79,0.3)]"
                      : "text-[#555] hover:bg-[#2D6A4F]/10 hover:text-[#2D6A4F]"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full grid place-items-center text-[14px] font-bold transition-all ${
                      activeSection === section.id
                        ? "bg-white/20 text-white"
                        : "bg-[#2D6A4F]/10 text-[#2D6A4F]"
                    }`}
                  >
                    {section.number}
                  </span>
                  <span className="text-[13px] font-semibold leading-tight">
                    {section.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="space-y-8">
          {/* Introduction */}
          <div className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-[4px] border-[#2D6A4F]">
            <h2 className="text-[24px] md:text-[28px] font-bold text-[#333] mb-4">
              Welcome to Our Help Center
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#555] leading-[1.8] mb-4">
              We're here to support you every step of your wellness journey. Browse through the topics below to find answers to common questions, or contact us directly if you need personalized assistance.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#2D6A4F] to-[#34A853] text-white px-6 py-3 rounded-full font-semibold transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgba(45,106,79,0.3)]"
              >
                <span>📞</span>
                <span>Contact Us</span>
              </a>
              <a
                href="tel:+9779818514837"
                className="inline-flex items-center gap-2 bg-white text-[#2D6A4F] border-2 border-[#2D6A4F] px-6 py-3 rounded-full font-semibold transition-all hover:bg-[#2D6A4F]/5"
              >
                <span>📱</span>
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Help Sections */}
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center rounded-[15px] p-6 md:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border-l-[5px] border-[#2D6A4F] transition-all hover:shadow-[0_6px_25px_rgba(45,106,79,0.15)] scroll-mt-[180px]"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#34A853] text-white grid place-items-center text-[20px] font-bold shadow-[0_4px_15px_rgba(45,106,79,0.3)]">
                  {section.number}
                </span>
                <h2 className="text-[20px] md:text-[24px] font-bold text-[#2D6A4F] leading-tight pt-2">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-3 pl-16">
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[14px] md:text-[15px] text-[#555] leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="bg-gradient-to-br from-[#2D6A4F] to-[#34A853] text-white rounded-[15px] p-8 md:p-10 text-center shadow-[0_4px_20px_rgba(45,106,79,0.3)]">
            <h3 className="text-[22px] md:text-[26px] font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-[15px] md:text-[16px] mb-6 opacity-95">
              Can't find what you're looking for? Our team is ready to help you personally.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-block bg-white text-[#2D6A4F] px-8 py-3 rounded-full font-bold text-[16px] transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
              >
                Contact Support
              </a>
              <a
                href="https://wa.me/9779818514837"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-full font-bold text-[16px] transition-all hover:-translate-y-1 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
