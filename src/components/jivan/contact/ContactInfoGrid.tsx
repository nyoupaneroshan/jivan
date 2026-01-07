import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-8 rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center transition hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(45,106,79,0.2)] border-t-4 border-[#2D6A4F]">
      <div className="w-[70px] h-[70px] mx-auto mb-5 rounded-full grid place-items-center text-white text-[28px] bg-gradient-to-br from-[#2D6A4F] to-[#34A853]">
        {icon}
      </div>
      <h3 className="text-[20px] font-semibold text-[#333] mb-3">{title}</h3>
      <div className="text-[15px] text-[#666] leading-relaxed">{children}</div>
    </div>
  );
}

export default function ContactInfoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
      <Card icon={<MapPin />} title="Visit Us">
        <p>Tarkeshwor-5, Kathmandu</p>
        <p>Nepal</p>
        <Link
          href="https://www.google.com/maps"
          target="_blank"
          className="inline-block mt-3 text-[#2D6A4F] font-semibold hover:text-[#34A853]"
        >
          Get Directions →
        </Link>
      </Card>

      <Card icon={<Phone />} title="Call Us">
        <p>
          Phone:{" "}
          <a className="text-[#2D6A4F] font-semibold" href="tel:+9779818514837">
            +977 9818514837
          </a>
        </p>
        <p>WhatsApp Available</p>
        <a
          className="inline-block mt-3 text-[#2D6A4F] font-semibold hover:text-[#34A853]"
          href="tel:+9779818514837"
        >
          Call Now →
        </a>
      </Card>

      <Card icon={<Mail />} title="Email Us">
        <p>
          <a
            className="text-[#2D6A4F] font-semibold"
            href="mailto:info@jivanparivartan.com"
          >
            info@jivanparivartan.com
          </a>
        </p>
        <p>Response within 24 hours</p>
        <a
          className="inline-block mt-3 text-[#2D6A4F] font-semibold hover:text-[#34A853]"
          href="mailto:info@jivanparivartan.com"
        >
          Send Email →
        </a>
      </Card>

      <Card icon={<Clock />} title="Working Hours">
        <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
        <p>Sunday: By Appointment</p>
        <Link
          href="#hours"
          className="inline-block mt-3 text-[#2D6A4F] font-semibold hover:text-[#34A853]"
        >
          View Schedule →
        </Link>
      </Card>
    </div>
  );
}
