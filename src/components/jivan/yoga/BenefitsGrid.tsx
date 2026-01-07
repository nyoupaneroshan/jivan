"use client";

import React from "react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsGridProps {
  benefits: Benefit[];
}

export function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-16 md:p-10 sm:p-6 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-4">
          Why Train With Us
        </h2>
        <p className="text-lg text-gray-600">
          Experience authentic yoga education in the heart of the Himalayas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-10 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center border-t-4 border-[#FF6B35]"
          >
            <div className="text-6xl md:text-5xl mb-5">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {benefit.title}
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}