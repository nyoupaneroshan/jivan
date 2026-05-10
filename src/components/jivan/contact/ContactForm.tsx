"use client";

import { useState } from "react";

const SUBJECTS = [
  { value: "yoga", label: "Yoga Training Inquiry", icon: "🧘" },
  { value: "reiki", label: "Reiki Services", icon: "✨" },
  { value: "singing-bowl", label: "Singing Bowl Healing", icon: "🎵" },
  { value: "meditation", label: "Meditation Retreat", icon: "🧘‍♀️" },
  { value: "general", label: "General Inquiry", icon: "💬" },
  { value: "booking", label: "Booking/Scheduling", icon: "📅" },
  { value: "healing", label: "Healing Services", icon: "🧘" },
  { value: "other", label: "Other", icon: "📝" },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstname: String(formData.get("firstname") || ""),
      lastname: String(formData.get("lastname") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message");

      setStatus({ 
        type: "ok", 
        msg: "Thank you for your message! We will get back to you soon." 
      });
      form.reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (err: any) {
      setStatus({ 
        type: "err", 
        msg: err?.message || "Something went wrong. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="group relative bg-white/95 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-10 md:p-12 rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D6A4F] via-[#34A853] to-[#2D6A4F]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Send Us a Message
          </h2>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field 
              label="First Name" 
              name="firstname" 
              required 
              icon="👤"
              placeholder="Enter your first name"
            />
            <Field 
              label="Last Name" 
              name="lastname" 
              required 
              icon="👤"
              placeholder="Enter your last name"
            />
          </div>

          {/* Contact fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field 
              label="Email Address" 
              name="email" 
              type="email" 
              required 
              icon="✉️"
              placeholder="your.email@example.com"
            />
            <Field 
              label="Phone Number" 
              name="phone" 
              type="tel" 
              required 
              icon="📞"
              placeholder="+977 98XXXXXXXX"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                name="subject"
                required
                className="w-full pl-11 pr-4 py-4 rounded-xl border-2 border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all duration-300 text-gray-800 font-medium appearance-none cursor-pointer hover:border-gray-300"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.icon} {s.label}
                  </option>
                ))}
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
                📋
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2.5">
              Your Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all duration-300 resize-y min-h-[140px] text-gray-800"
              />
              <div className="absolute right-4 bottom-4 text-xs text-gray-400 pointer-events-none">
                Min. 10 characters
              </div>
            </div>
          </div>

          {/* Status message */}
          {status && (
            <div
              className={`text-sm font-semibold rounded-xl px-5 py-4 flex items-start gap-3 animate-slide-down ${
                status.type === "ok"
                  ? "bg-green-50 text-green-800 border-2 border-green-200"
                  : "bg-red-50 text-red-800 border-2 border-red-200"
              }`}
            >
              <span className="text-xl shrink-0 mt-0.5">
                {status.type === "ok" ? "✅" : "⚠️"}
              </span>
              <span className="leading-relaxed">{status.msg}</span>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="group/btn relative w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#2D6A4F] to-[#34A853] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed overflow-hidden"
          >
            {/* Shine effect */}
            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </form>

        {/* Privacy note */}
        <p className="mt-6 text-xs text-center text-gray-500 leading-relaxed">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Your information is safe with us. We respect your privacy.
          </span>
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  icon,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  icon?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label 
        className="block text-sm font-bold text-gray-800 mb-2.5" 
        htmlFor={name}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-4 rounded-xl border-2 border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all duration-300 text-gray-800 placeholder:text-gray-400 hover:border-gray-300`}
        />
      </div>
    </div>
  );
}
