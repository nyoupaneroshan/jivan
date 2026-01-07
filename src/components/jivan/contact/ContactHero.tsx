import { Mail, Phone } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[420px] flex items-center justify-center px-5 pt-16 pb-14 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/contact-hero.jpg')" }}
      />

      {/* SOLID green overlay (100% opacity) */}
      <div className="absolute inset-0 bg-[#0B3D1C]" />

      {/* Optional: very subtle shading, still not revealing photo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/10" />

      <div className="relative z-10 text-center max-w-[800px]">
        <h1 className="text-[38px] md:text-[48px] font-extrabold drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          Get In Touch
        </h1>

        <p className="mt-3 text-[16px] md:text-[18px] opacity-95">
          We&apos;d love to hear from you. Reach out for any questions, bookings,
          or inquiries.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-white/15 px-5 py-2 rounded-full backdrop-blur">
            <Phone size={18} />
            <span className="text-sm md:text-[15px]">+977 9818514837</span>
          </div>

          <div className="flex items-center gap-2 bg-white/15 px-5 py-2 rounded-full backdrop-blur">
            <Mail size={18} />
            <span className="text-sm md:text-[15px]">
              info@jivanparivartan.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
