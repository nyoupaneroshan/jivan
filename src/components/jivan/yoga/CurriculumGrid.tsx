"use client";

import React from "react";

interface CurriculumItem {
  icon: string;
  title: string;
  topics: string[];
}

interface CurriculumGridProps {
  items: CurriculumItem[];
}

export function CurriculumGrid({ items }: CurriculumGridProps) {
  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
          Core Curriculum Components
        </h2>
        <p className="text-lg text-gray-600">
          Comprehensive training covering all aspects of yoga
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-9 rounded-2xl shadow-lg border-l-[5px] border-[#FF6B35]"
          >
            <h4 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-3">
              <span className="text-3xl">{item.icon}</span>
              {item.title}
            </h4>
            <ul className="list-none p-0 space-y-2.5">
              {item.topics.map((topic, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-gray-600 text-[15px]"
                >
                  <span className="text-[#FF6B35] text-xl font-bold flex-shrink-0">
                    •
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}