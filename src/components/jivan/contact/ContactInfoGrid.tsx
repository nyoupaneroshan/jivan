import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

function Card({
  icon,
  title,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <div 
      className="group relative bg-white/95 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-8 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(45,106,79,0.25)] border-t-4 border-[#2D6A4F] overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-green-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon container */}
      <div className="relative w-[80px] h-[80px] mx-auto mb-6 rounded-2xl grid place-items-center text-white text-3xl bg-gradient-to-br from-[#2D6A4F] to-[#34A853] shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Content */}
      <div className="relative text-[15px] text-gray-700 leading-relaxed space-y-1">
        {children}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

export default function ContactInfoGrid() {
  const cards = [
    {
      icon: <MapPin />,
      title: "Visit Us",
      content: (
        <>
          <p className="font-medium text-gray-800">Tarkeshwor-5, Kathmandu,</p>
          <p className="text-gray-600">Nepal</p>
          <Link
            href="https://maps.app.goo.gl/6xiegSAstMekeJgo8"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 mt-4 text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300"
          >
            <span>Get Directions</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </>
      ),
    },
    {
      icon: <Phone />,
      title: "Call Us",
      content: (
        <>
          <p className="text-gray-600">
            Phone:{" "}
            <a 
              className="text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300" 
              href="tel:+9779818514837"
            >
              +977 9818514837
            </a>
          </p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <span className="text-xs font-semibold text-green-700">WhatsApp Available</span>
          </div>
          <a
            className="group/link inline-flex items-center gap-2 mt-4 text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300"
            href="tel:+9779818514837"
          >
            <span>Call Now</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </>
      ),
    },
    {
      icon: <Mail />,
      title: "Email Us",
      content: (
        <>
          <p>
            <a
              className="text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300 break-all"
              href="mailto:info@jivanparivartan.com"
            >
              info@jivanparivartan.com
            </a>
          </p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-green-700">Response within 24 hours</span>
          </div>
          <a
            className="group/link inline-flex items-center gap-2 mt-4 text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300"
            href="mailto:info@jivanparivartan.com"
          >
            <span>Send Email</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </>
      ),
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      content: (
        <>
          <p className="font-medium text-gray-800">Sun - Fri: 9:00 AM - 9:00 PM</p>
          <p className="text-gray-600">Saturday: By Appointment</p>
          <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            {/* <span className="text-xs font-semibold text-green-700">Currently Open</span> */}
          </div>
          <Link
            href="#hours"
            className="group/link inline-flex items-center gap-2 mt-4 text-[#2D6A4F] font-semibold hover:text-[#34A853] transition-colors duration-300"
          >
            <span>View Schedule</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-14">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          icon={card.icon}
          title={card.title}
          index={index}
        >
          {card.content}
        </Card>
      ))}
    </div>
  );
}
