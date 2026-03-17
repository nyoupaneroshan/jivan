"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PriceInfo {
  label: string;
  amount: string;
  duration: string;
  includes: string[];
  viewAllPricingLink?: string;
}

interface BatchDate {
  date: string;
  label?: string;
}

interface ContactInfo {
  phone: string[];
  email: string;
  address: string;
}

interface SidebarWidgetProps {
  price?: PriceInfo;
  batches?: BatchDate[];
  contact?: ContactInfo;
  showInquiryForm?: boolean;
  variant?: "red" | "dark-red" | "orange" | "green" | "purple" | "blue";
}

const variantStyles = {
  red: {
    button: "from-[#C41E3A] to-[#8B0000]",
    border: "border-t-[#C41E3A]",
    priceText: "text-[#C41E3A]",
    priceBox: "from-red-50 to-white border-[#C41E3A]/10",
    icon: "from-[#C41E3A] to-[#8B0000]",
    accentColor: "#C41E3A",
    linkColor: "text-[#C41E3A] hover:text-[#8B0000]",
  },
  "dark-red": {
    button: "from-[#8B0000] to-[#4B0000]",
    border: "border-t-[#8B0000]",
    priceText: "text-[#8B0000]",
    priceBox: "from-orange-50 to-white border-[#8B0000]/10",
    icon: "from-[#8B0000] to-[#4B0000]",
    accentColor: "#8B0000",
    linkColor: "text-[#8B0000] hover:text-[#4B0000]",
  },
  orange: {
    button: "from-[#FF6B35] to-[#FF8C00]",
    border: "border-t-[#FF6B35]",
    priceText: "text-[#FF6B35]",
    priceBox: "from-orange-50 to-white border-[#FF6B35]/10",
    icon: "from-[#FF6B35] to-[#FF8C00]",
    accentColor: "#FF6B35",
    linkColor: "text-[#FF6B35] hover:text-[#FF8C00]",
  },
  green: {
    button: "from-green-600 to-green-800",
    border: "border-t-green-600",
    priceText: "text-green-700",
    priceBox: "from-green-50 to-emerald-50 border-green-200",
    icon: "from-green-600 to-green-800",
    accentColor: "#16a34a",
    linkColor: "text-green-600 hover:text-green-700",
  },
  purple: {
    button: "from-purple-600 to-purple-800",
    border: "border-t-purple-600",
    priceText: "text-purple-700",
    priceBox: "from-purple-50 to-white border-purple-200",
    icon: "from-purple-600 to-purple-800",
    accentColor: "#9333ea",
    linkColor: "text-purple-600 hover:text-purple-700",
  },
  blue: {
    button: "from-blue-600 to-blue-800",
    border: "border-t-blue-600",
    priceText: "text-blue-700",
    priceBox: "from-blue-50 to-white border-blue-200",
    icon: "from-blue-600 to-blue-800",
    accentColor: "#2563eb",
    linkColor: "text-blue-600 hover:text-blue-700",
  },
};

const inputBase =
  "w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm sm:text-[15px] transition-all focus:outline-none focus:ring-2 focus:ring-offset-1";

export function SidebarWidget({
  price,
  batches,
  contact,
  showInquiryForm = false,
  variant = "red",
}: SidebarWidgetProps) {
  const styles = variantStyles[variant];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  return (
    <aside className="sticky top-24 space-y-6 hidden lg:block">
      {/* PRICE */}
      {price && (
        <div className={`bg-white p-7 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3">
            Course Investment
          </h3>

          <div className={`bg-gradient-to-br ${styles.priceBox} p-7 rounded-xl text-center border mb-4`}>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">{price.label}</p>
            <p className={`text-5xl font-extrabold ${styles.priceText}`}>{price.amount}</p>
            <p className="text-sm text-gray-600 mt-1">{price.duration}</p>
            
            {/* View All Pricing Link */}
            {price.viewAllPricingLink && (
              <Link
                href={price.viewAllPricingLink}
                className={`text-sm ${styles.linkColor} font-semibold underline mt-3 inline-block transition-colors`}
              >
                View All Pricing Options →
              </Link>
            )}
          </div>

          <ul className="space-y-2">
            {price.includes.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 text-sm">
                <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${styles.icon} text-white flex items-center justify-center flex-shrink-0`}>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* INQUIRY FORM */}
      {showInquiryForm && (
        <div className={`bg-white p-7 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3">
            Quick Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputBase}
              style={{ "--tw-ring-color": styles.accentColor } as React.CSSProperties}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputBase}
              style={{ "--tw-ring-color": styles.accentColor } as React.CSSProperties}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputBase}
              style={{ "--tw-ring-color": styles.accentColor } as React.CSSProperties}
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className={inputBase}
              style={{ "--tw-ring-color": styles.accentColor } as React.CSSProperties}
            >
              <option value="">Select Program *</option>
              <option value="1-day">1-Day Retreat</option>
              <option value="3-day">3-Day Retreat</option>
              <option value="5-day">5-Day Retreat</option>
              <option value="7-day">7-Day Retreat</option>
              <option value="custom">Custom Program</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message (Optional)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} resize-none`}
              style={{ "--tw-ring-color": styles.accentColor } as React.CSSProperties}
            />

            <button
              type="submit"
              className={`w-full bg-gradient-to-br ${styles.button} text-white py-4 rounded-lg font-semibold text-base transition-all hover:shadow-xl hover:scale-[1.02]`}
            >
              Submit Inquiry →
            </button>
          </form>
        </div>
      )}

      {/* BATCHES */}
      {batches && (
        <div className={`bg-white p-7 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3">
            Upcoming Batches
          </h3>

          <ul className="space-y-3">
            {batches.map((b, i) => (
              <li key={i} className="flex gap-3 text-gray-700 text-sm">
                <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${styles.icon} text-white flex items-center justify-center flex-shrink-0`}>
                  📅
                </span>
                <span>
                  <strong>{b.date}</strong>
                  {b.label && <span className="text-xs text-gray-500 ml-1">({b.label})</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CONTACT */}
      {contact && (
        <div className={`bg-white p-7 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-700">
            {contact.phone.map((p, i) => (
              <a key={i} href={`tel:${p}`} className="block hover:text-gray-900 font-medium transition-colors">
                📞 {p}
              </a>
            ))}
            <a href={`mailto:${contact.email}`} className="block hover:text-gray-900 font-medium transition-colors">
              ✉️ {contact.email}
            </a>
            <p>📍 {contact.address}</p>
          </div>
        </div>
      )}
    </aside>
  );
}
