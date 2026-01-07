import { Clock } from "lucide-react";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4032.093983149326!2d85.2883512!3d27.74950809999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9c0f6e88f%3A0x1a730d17d30de947!2sJivan%20Parivartan!5e1!3m2!1sen!2snp!4v1763405437361!5m2!1sen!2snp";

export default function MapAndHours() {
  return (
    <div className="bg-white/90 bg-[url('/img/design/cream.jpg')] bg-cover bg-center p-10 md:p-12 rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      <h2 className="text-[28px] md:text-[32px] font-bold text-[#333]">
        Find Us Here
      </h2>
      <p className="text-[#666] mt-2 mb-6">
        Visit our wellness center in the heart of Kathmandu.
      </p>

      <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden bg-[#f0f0f0]">
        <iframe
          src={MAP_EMBED}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title="Jivan Parivartan Map"
        />
      </div>

      <div
        id="hours"
        className="mt-6 bg-gradient-to-br from-[#f0fff4] to-white p-8 rounded-xl"
      >
        <h3 className="text-[20px] font-semibold text-[#333] flex items-center gap-2 mb-5">
          <Clock size={18} />
          Working Hours
        </h3>

        <ul className="divide-y divide-[#e9ecef]">
          {[
            ["Monday", "6:00 AM - 8:00 PM"],
            ["Tuesday", "6:00 AM - 8:00 PM"],
            ["Wednesday", "6:00 AM - 8:00 PM"],
            ["Thursday", "6:00 AM - 8:00 PM"],
            ["Friday", "6:00 AM - 8:00 PM"],
            ["Saturday", "6:00 AM - 8:00 PM"],
            ["Sunday", "By Appointment Only", true],
          ].map(([day, time, closed], idx) => (
            <li key={idx} className="flex items-center justify-between py-3">
              <span className="font-semibold text-[#333]">{day as string}</span>
              <span className={closed ? "text-red-600 font-medium" : "text-[#666]"}>
                {time as string}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
