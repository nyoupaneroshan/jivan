"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Do I need prior experience for yoga training?",
    a: "No prior experience is needed for our 200-hour Yoga Teacher Training. We welcome complete beginners as well as experienced practitioners looking to deepen their practice.",
  },
  {
    q: "How do I book a session?",
    a: "You can book sessions through our contact form, by calling us at +977 9818514837, or via WhatsApp. We'll confirm your booking within 24 hours.",
  },
  {
    q: "What should I bring to my first session?",
    a: "For yoga and meditation sessions, wear comfortable clothing. We provide mats, but you're welcome to bring your own. For healing sessions, just come with an open mind and comfortable clothes.",
  },
  {
    q: "Do you offer online sessions?",
    a: "Yes. We offer online morning meditation sessions and distance Reiki healing. Some training programs are also available in hybrid format.",
  },
  {
    q: "What are your payment options?",
    a: "We accept cash, bank transfer, and mobile payment options (eSewa, Khalti). For training programs, we offer installment payment plans.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-[900px] mx-auto mb-14 bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-10 md:p-12 rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#333] text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-[#666] text-center mt-2 mb-10">
        Quick answers to common questions about our services
      </p>

      <div className="space-y-4">
        {FAQS.map((f, idx) => {
          const active = open === idx;
          return (
            <div
              key={idx}
              className="border-2 border-[#e9ecef] rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(active ? null : idx)}
                className={`w-full flex items-center justify-between gap-4 px-5 py-5 text-left font-semibold transition ${
                  active ? "bg-[#f8f9fa] text-[#2D6A4F]" : "bg-white text-[#333] hover:bg-[#f8f9fa] hover:text-[#2D6A4F]"
                }`}
              >
                <span>{f.q}</span>
                <ChevronDown
                  className={`shrink-0 text-[#2D6A4F] transition-transform ${
                    active ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className={`${active ? "max-h-[300px]" : "max-h-0"} overflow-hidden transition-all`}>
                <div className="px-5 pb-5 text-[#666] leading-relaxed bg-[#f8f9fa]">
                  {f.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
