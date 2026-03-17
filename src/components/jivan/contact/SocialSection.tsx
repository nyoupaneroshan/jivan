import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

function CircleLink({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group relative w-16 h-16 rounded-full grid place-items-center bg-white text-gray-600 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-110 overflow-hidden ${className}`}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 bg-current/10" />
      
      {/* Icon */}
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {children}
      </span>

      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {label}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
      </span>
    </Link>
  );
}

export default function SocialSection() {
  return (
    <div className="text-center mb-14 px-5">
      {/* Header */}
      <div className="max-w-[700px] mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Stay Connected
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
          Connect With Us
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Follow us on social media for updates, wellness tips, and community inspiration
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-5 flex-wrap mb-8">
        <CircleLink
          href="https://www.facebook.com/profile.php?id=100091674787130&mibextid=LQQJ4d"
          label="Follow on Facebook"
          className="hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
        >
          <Facebook size={24} />
        </CircleLink>

        <CircleLink
          href="https://www.instagram.com/jivanparivartan99/"
          label="Follow on Instagram"
          className="hover:text-white hover:bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] hover:shadow-pink-500/50"
        >
          <Instagram size={24} />
        </CircleLink>

        <CircleLink
          href="https://www.youtube.com/@jivanparivartan"
          label="Subscribe on YouTube"
          className="hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-red-500/50"
        >
          <Youtube size={24} />
        </CircleLink>

        <CircleLink
          href="https://www.tiktok.com/@jivanparivartan"
          label="Follow on TikTok"
          className="hover:bg-black hover:text-white hover:border-black"
        >
          <FaTiktok size={24} />
        </CircleLink>

        <CircleLink
          href="https://wa.me/9779818514837"
          label="Chat on WhatsApp"
          className="hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-green-500/50"
        >
          <FaWhatsapp size={26} />
        </CircleLink>
      </div>

      {/* Follow CTA */}
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
            />
          ))}
        </div>
        <div className="text-left">
          <div className="text-sm font-bold text-gray-900">Join 10,000+ followers</div>
          <div className="text-xs text-gray-500">Growing wellness community</div>
        </div>
      </div>
    </div>
  );
}
