import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

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
      className={`w-[60px] h-[60px] rounded-full grid place-items-center bg-white text-[#666] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition hover:-translate-y-1 ${className}`}
    >
      {children}
    </Link>
  );
}

export default function SocialSection() {
  return (
    <div className="text-center mb-14">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#333]">
        Connect With Us
      </h2>
      <p className="text-[#666] mt-2 mb-7">
        Follow us on social media for updates, tips, and community inspiration
      </p>

      <div className="flex justify-center gap-5 flex-wrap">
        <CircleLink
          href="https://facebook.com"
          label="Facebook"
          className="hover:bg-[#1877F2] hover:text-white"
        >
          <Facebook />
        </CircleLink>

        <CircleLink
          href="https://instagram.com"
          label="Instagram"
          className="hover:text-white hover:bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]"
        >
          <Instagram />
        </CircleLink>

        <CircleLink
          href="https://youtube.com"
          label="YouTube"
          className="hover:bg-[#FF0000] hover:text-white"
        >
          <Youtube />
        </CircleLink>

        <CircleLink
          href="https://linkedin.com"
          label="LinkedIn"
          className="hover:bg-[#0077B5] hover:text-white"
        >
          <Linkedin />
        </CircleLink>

        {/* WhatsApp (no lucide default icon used here) */}
        <CircleLink
          href="https://wa.me/9779818514837"
          label="WhatsApp"
          className="hover:bg-[#25D366] hover:text-white font-extrabold"
        >
          W
        </CircleLink>
      </div>
    </div>
  );
}
