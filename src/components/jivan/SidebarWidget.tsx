"use client";

import React, { useState } from "react";

interface PriceInfo {
  label: string;
  amount: string;
  duration: string;
  includes: string[];
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
  variant?: "red" | "dark-red" | "orange";
}

const variantStyles = {
  red: {
    button: "bg-gradient-to-br from-[#C41E3A] to-[#8B0000]",
    border: "border-t-[#C41E3A]",
    priceText: "text-[#C41E3A]",
    priceBox: "bg-gradient-to-br from-purple-50 to-white border-[#C41E3A]/10",
    icon: "bg-gradient-to-br from-[#C41E3A] to-[#8B0000]",
    focus: "border-[#C41E3A] shadow-[0_0_0_3px_rgba(196,30,58,0.1)]",
  },
  "dark-red": {
    button: "bg-gradient-to-br from-[#8B0000] to-[#4B0000]",
    border: "border-t-[#8B0000]",
    priceText: "text-[#8B0000]",
    priceBox: "bg-gradient-to-br from-orange-50 to-white border-[#8B0000]/10",
    icon: "bg-gradient-to-br from-[#8B0000] to-[#4B0000]",
    focus: "border-[#8B0000] shadow-[0_0_0_3px_rgba(139,0,0,0.1)]",
  },
  orange: {
    button: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    border: "border-t-[#FF6B35]",
    priceText: "text-[#FF6B35]",
    priceBox: "bg-gradient-to-br from-orange-50 to-white border-[#FF6B35]/10",
    icon: "bg-gradient-to-br from-[#FF6B35] to-[#FF8C00]",
    focus: "border-[#FF6B35] shadow-[0_0_0_3px_rgba(255,107,53,0.1)]",
  },
};

export function SidebarWidget({
  price,
  batches,
  contact,
  showInquiryForm = false,
  variant = "red",
}: SidebarWidgetProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const styles = variantStyles[variant];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <aside className="sticky top-48 space-y-6">
      {/* Price Widget */}
      {price && (
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 pb-4 border-b-2 border-gray-100">
            Course Investment
          </h3>
          <div className={`${styles.priceBox} p-8 rounded-xl mb-5 text-center border-2`}>
            <div className="text-sm text-gray-600 uppercase tracking-wider mb-2.5 font-semibold">
              {price.label}
            </div>
            <div className={`text-5xl font-extrabold ${styles.priceText} mb-2.5`}>
              {price.amount}
            </div>
            <div className="text-sm text-gray-600">{price.duration}</div>
          </div>
          <ul className="list-none p-0">
            {price.includes.map((item, index) => (
              <li
                key={index}
                className="py-3 border-b border-gray-100 last:border-b-0 flex items-center gap-3 text-[15px] text-gray-600"
              >
                <span className={`w-7 h-7 ${styles.icon} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Inquiry Form */}
      {showInquiryForm && (
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 pb-4 border-b-2 border-gray-100">
            Quick Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] transition-all focus:outline-none focus:${styles.focus}`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] transition-all focus:outline-none focus:${styles.focus}`}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] transition-all focus:outline-none focus:${styles.focus}`}
            />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] transition-all focus:outline-none focus:${styles.focus}`}
            >
              <option value="">Select Course</option>
              <option value="200hrs">200 Hrs Training</option>
              <option value="500hrs">500 Hrs Training</option>
              <option value="weekly">Weekly Course</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg text-[15px] transition-all focus:outline-none focus:${styles.focus}`}
            />
            <button
              type="submit"
              className={`w-full ${styles.button} text-white py-4 rounded-lg text-[17px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xl`}
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      )}

      {/* Upcoming Batches */}
      {batches && batches.length > 0 && (
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 pb-4 border-b-2 border-gray-100">
            Upcoming Batches
          </h3>
          <ul className="list-none p-0">
            {batches.map((batch, index) => (
              <li
                key={index}
                className="py-3 border-b border-gray-100 last:border-b-0 flex items-center gap-3 text-[15px] text-gray-600"
              >
                <span className={`w-7 h-7 ${styles.icon} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                  📅
                </span>
                {batch.date}
                {batch.label && <span className="text-xs text-gray-500">({batch.label})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Info */}
      {contact && (
        <div className={`bg-white p-8 rounded-2xl shadow-lg border-t-4 ${styles.border}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-5 pb-4 border-b-2 border-gray-100">
            Contact Us
          </h3>
          <ul className="list-none p-0">
            <li className="py-3 border-b border-gray-100 flex items-center gap-3 text-[15px] text-gray-600">
              <span className={`w-7 h-7 ${styles.icon} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                📞
              </span>
              <div className="flex flex-col">
                {contact.phone.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone}`}
                    className="text-gray-600 hover:text-gray-800 no-underline"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </li>
            <li className="py-3 border-b border-gray-100 flex items-center gap-3 text-[15px] text-gray-600">
              <span className={`w-7 h-7 ${styles.icon} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                ✉️
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-gray-600 hover:text-gray-800 no-underline"
              >
                {contact.email}
              </a>
            </li>
            <li className="py-3 flex items-center gap-3 text-[15px] text-gray-600">
              <span className={`w-7 h-7 ${styles.icon} text-white rounded-full flex items-center justify-center text-sm flex-shrink-0`}>
                📍
              </span>
              {contact.address}
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
}