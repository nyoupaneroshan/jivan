import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[450px] flex items-center justify-center px-5 pt-20 pb-16 text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms]"
        style={{ backgroundImage: "url('/img/contact-hero.jpg')" }}
      />

      {/* Solid green overlay */}
      <div className="absolute inset-0 bg-[#0B3D1C]" />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D1C]/30 via-transparent to-[#0B3D1C]/30" />

      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[850px] space-y-6 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Contact Us
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-[0_4px_25px_rgba(0,0,0,0.5)] leading-tight animate-slide-up">
          Get In Touch
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base md:text-lg lg:text-xl opacity-95 leading-relaxed max-w-[650px] mx-auto animate-slide-up-delayed">
          We&apos;d love to hear from you. Reach out for any questions, bookings,
          or inquiries about our wellness programs.
        </p>

        {/* Contact info cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Phone */}
          <a
            href="tel:+9779818514837"
            className="group flex items-center gap-3 bg-white/15 hover:bg-white/25 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider opacity-80 font-medium">
                Call Us
              </div>
              <div className="text-sm md:text-base font-semibold">
                +977 9818514837
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@jivanparivartan.com"
            className="group flex items-center gap-3 bg-white/15 hover:bg-white/25 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <Mail size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider opacity-80 font-medium">
                Email Us
              </div>
              <div className="text-sm md:text-base font-semibold">
                info@jivanparivartan.com
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="group flex items-center gap-3 bg-white/15 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
              <MapPin size={18} className="transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider opacity-80 font-medium">
                Visit Us
              </div>
              <div className="text-sm md:text-base font-semibold">
                Tarkeshwor-5, Kathmandu
              </div>
            </div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-3 opacity-50">
          <div className="w-12 h-px bg-white" />
          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <div className="w-12 h-px bg-white" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
