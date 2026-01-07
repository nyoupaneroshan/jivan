"use client";

import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 py-5">
      <div className="max-w-[1400px] mx-auto px-5">
        <nav className="flex items-center text-sm" aria-label="Breadcrumb">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && (
                <span className="mx-3 text-gray-400 text-xs">→</span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-[#C41E3A] transition-colors flex items-center"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#C41E3A] font-semibold">
                  {item.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}