"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Do I need prior experience for yoga training?",
    a: "No prior experience is needed for our 200-hour Yoga Teacher Training. We welcome complete beginners as well as experienced practitioners looking to deepen their practice.",
    icon: "🧘",
  },
  {
    q: "How do I book a session?",
    a: "You can book sessions through our contact form, by calling us at +977 9818514837, or via WhatsApp. We'll confirm your booking within 24 hours.",
    icon: "📅",
  },
  {
    q: "What should I bring to my first session?",
    a: "For yoga and meditation sessions, wear comfortable clothing. We provide mats, but you're welcome to bring your own. For healing sessions, just come with an open mind and comfortable clothes.",
    icon: "🎒",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. We offer online morning meditation sessions and distance Reiki healing. Some training programs are also available in hybrid format.",
    icon: "💻",
  },
  {
    q: "What are your payment options?",
    a: "We accept cash, bank transfer, and mobile payment options (eSewa, Khalti). For training programs, we offer installment payment plans.",
    icon: "💳",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0); // First item open by default

  return (
    <div className="max-w-[900px] mx-auto mb-14 group relative bg-white/95 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-10 md:p-12 rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#34A853] to-[#2D6A4F]" />

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-3">
            <HelpCircle size={14} className="text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-base leading-relaxed max-w-[600px] mx-auto">
            Quick answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((f, idx) => {
            const active = open === idx;
            
            return (
              <div
                key={idx}
                className={`group/item border-2 rounded-2xl overflow-hidden transition-all duration-500 ${
                  active 
                    ? "border-green-600 shadow-lg shadow-green-600/10" 
                    : "border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : idx)}
                  className={`w-full flex items-center gap-4 px-6 py-5 text-left font-semibold transition-all duration-300 ${
                    active 
                      ? "bg-gradient-to-r from-green-50 to-white text-green-900" 
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {/* Icon */}
                  <div className={`text-2xl transition-all duration-500 ${
                    active ? "scale-110 rotate-12" : "group-hover/item:scale-110"
                  }`}>
                    {f.icon}
                  </div>

                  {/* Question Text */}
                  <span className="flex-1 text-base md:text-lg leading-relaxed">
                    {f.q}
                  </span>

                  {/* Chevron Icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    active 
                      ? "bg-green-600 text-white rotate-180 scale-110" 
                      : "bg-gray-100 text-green-600 group-hover/item:bg-green-50"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Answer Content */}
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    active ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    {/* Decorative line */}
                    <div className="h-px bg-gradient-to-r from-green-200 via-green-300 to-transparent mb-4" />
                    
                    {/* Answer text */}
                    <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100">
            <p className="text-gray-700 font-medium">
              Still have questions?
            </p>
            <a
              href="#contact-form"
              className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative">Contact Us</span>
              <svg className="relative w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
