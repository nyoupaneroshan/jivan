"use client";

import { useState } from "react";

const SUBJECTS = [
  { value: "yoga", label: "Yoga Training Inquiry" },
  { value: "reiki", label: "Reiki Services" },
  { value: "singing-bowl", label: "Singing Bowl Healing" },
  { value: "meditation", label: "Meditation Retreat" },
  { value: "general", label: "General Inquiry" },
  { value: "booking", label: "Booking/Scheduling" },
  { value: "other", label: "Other" },
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

      setStatus({ type: "ok", msg: "Thank you for your message! We will get back to you soon." });
      form.reset();
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-10 md:p-12 rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#333]">
        Send Us a Message
      </h2>
      <p className="text-[#666] mt-2 mb-7">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="First Name" name="firstname" required />
          <Field label="Last Name" name="lastname" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Email Address" name="email" type="email" required />
          <Field label="Phone Number" name="phone" type="tel" required />
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-[#333] mb-2">
            Subject
          </label>
          <select
            name="subject"
            required
            className="w-full px-4 py-3.5 rounded-lg border-2 border-[#e9ecef] bg-white/90 focus:bg-white focus:outline-none focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10 transition"
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[14px] font-semibold text-[#333] mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-4 py-3.5 rounded-lg border-2 border-[#e9ecef] bg-white/90 focus:bg-white focus:outline-none focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10 transition resize-y min-h-[120px]"
          />
        </div>

        {status && (
          <div
            className={`text-sm font-medium rounded-lg px-4 py-3 ${
              status.type === "ok"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {status.msg}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-lg font-bold text-[17px] text-white bg-gradient-to-br from-[#2D6A4F] to-[#34A853] hover:-translate-y-0.5 transition disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[14px] font-semibold text-[#333] mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3.5 rounded-lg border-2 border-[#e9ecef] bg-white/90 focus:bg-white focus:outline-none focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10 transition"
      />
    </div>
  );
}
