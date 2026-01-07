"use client";

import React from "react";
import Link from "next/link";

interface TheoryCard {
  icon: string;
  title: string;
  description: string;
  link: {
    href: string;
    label: string;
  };
}

interface TheoryCardsProps {
  cards: TheoryCard[];
  variant?: "orange" | "red" | "dark-red";
}

const variantStyles = {
  orange: {
    border: "border-t-[#FF6B35]",
    linkColor: "text-[#FF6B35]",
  },
  red: {
    border: "border-t-[#C41E3A]",
    linkColor: "text-[#C41E3A]",
  },
  "dark-red": {
    border: "border-t-[#8B0000]",
    linkColor: "text-[#8B0000]",
  },
};

export function TheoryCards({ cards, variant = "orange" }: TheoryCardsProps) {
  const styles = variantStyles[variant];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
          Theory & Philosophy
        </h2>
        <p className="text-lg text-gray-600">
          Deep dive into the philosophical foundations and scientific aspects of yoga
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white p-9 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center border-t-4 ${styles.border}`}
          >
            <div className="text-6xl mb-5">{card.icon}</div>
            <h4 className="text-xl font-bold text-gray-800 mb-4">
              {card.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              {card.description}
            </p>
            <Link
              href={card.link.href}
              className={`${styles.linkColor} font-semibold inline-flex items-center gap-1.5 no-underline transition-all hover:gap-2.5`}
            >
              {card.link.label} <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}