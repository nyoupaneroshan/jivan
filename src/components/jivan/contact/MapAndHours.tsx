import { Clock, MapPin, Navigation } from "lucide-react";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4032.093983149326!2d85.2883512!3d27.74950809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9c0f6e88f%3A0x1a730d17d30de947!2sJivan%20Parivartan!5e1!3m2!1sen!2snp!4v1763405437361!5m2!1sen!2snp";

export default function MapAndHours() {
  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
  };

  const currentDay = getCurrentDay();

  const schedule = [
    { day: "Sunday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Monday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Tuesday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Wednesday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Thursday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Friday", time: "6:00 AM - 8:00 PM", closed: false },
    { day: "Saturday", time: "By Appointment Only", closed: true },
  ];

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
            <MapPin size={14} className="text-green-600" />
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">
              Location
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Find Us Here
          </h2>
          <p className="text-gray-600 mt-3 text-base leading-relaxed">
            Visit our wellness center in the heart of Kathmandu.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative group/map w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-500">
          {/* Map overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 pointer-events-none opacity-0 group-hover/map:opacity-100 transition-opacity duration-500" />
          
          <iframe
            src={MAP_EMBED}
            className="w-full h-full border-0 transition-transform duration-500 group-hover/map:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Jivan Parivartan Map"
          />

          {/* Directions button overlay */}
          <a
            href="https://maps.app.goo.gl/6xiegSAstMekeJgo8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-20 group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Navigation size={16} className="text-green-600 transition-transform duration-300 group-hover/btn:rotate-45" />
            <span className="text-sm font-semibold text-gray-900">Get Directions</span>
          </a>
        </div>

        {/* Working Hours */}
        <div
          id="hours"
          className="mt-8 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white shadow-md">
                <Clock size={20} />
              </div>
              Working Hours
            </h3>
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              <span className="text-xs font-bold text-green-700">Open Today</span>
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {schedule.map((item, idx) => {
              const isToday = item.day === currentDay;
              
              return (
                <li
                  key={idx}
                  className={`group/item flex items-center justify-between py-4 transition-all duration-300 ${
                    isToday 
                      ? "bg-green-50 -mx-4 px-4 rounded-xl border-l-4 border-green-600" 
                      : "hover:translate-x-2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    )}
                    <span className={`font-semibold ${
                      isToday ? "text-green-900" : "text-gray-800"
                    }`}>
                      {item.day}
                      {isToday && (
                        <span className="ml-2 text-xs font-bold text-green-600 uppercase tracking-wider">
                          Today
                        </span>
                      )}
                    </span>
                  </div>

                  <span className={`font-medium transition-colors duration-300 ${
                    item.closed 
                      ? "text-red-600" 
                      : isToday
                      ? "text-green-700 font-semibold"
                      : "text-gray-600 group-hover/item:text-gray-900"
                  }`}>
                    {item.time}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Additional info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">ℹ️</span>
              </div>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Note:</strong> Saturday appointments can be scheduled by calling us in advance. We offer special weekend sessions for corporate groups and private retreats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
