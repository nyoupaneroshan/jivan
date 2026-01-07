import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { QuickNavigation } from "@/components/jivan/QuickNavigation";
import { CTASection } from "@/components/jivan/yoga/CTASection";

type Highlight = { icon: string; text: string };

type ExperienceCard = {
  icon: string;
  title: string;
  description: string;
};

type ItineraryDay = {
  day: number;
  title: string;
  subtitle: string;
  description: string;
};

type Amenity = { icon: string; text: string };

export default function LuxuryHimalayanRetreatPage() {
  // Dummy images (replace later with real ones)
  const images = {
    hero: "https://picsum.photos/seed/mustang-hero/1920/1080",
    location: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBS1gU_ljbCLYP_zL647IQV9FBQFd8rxBAKA&s",
    accommodation: "https://picsum.photos/seed/mustang-accommodation/1400/900",
    cta: "https://picsum.photos/seed/mustang-cta/1920/900",
  };

  // Breadcrumb (PHP shows: Home > Luxury Himalayan Retreat - Mustang) [file:6]
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Luxury Himalayan Retreat - Mustang" },
  ];

  // Quick nav: cover all major sections from PHP [file:6]
  // Note: PHP only has id="itinerary" and id="pricing", but the page has other blocks too.
  // To ensure all components are reachable, IDs are added for each block.
  const quickNavItems = [
    { id: "overview", icon: "📋", label: "Overview", href: "#overview" },
    { id: "location", icon: "🗺️", label: "Location", href: "#location" },
    { id: "experiences", icon: "✨", label: "Experiences", href: "#experiences" },
    { id: "itinerary", icon: "🗓️", label: "Itinerary", href: "#itinerary" },
    { id: "accommodation", icon: "🏨", label: "Accommodation", href: "#accommodation" },
    { id: "pricing", icon: "💳", label: "Pricing", href: "#pricing" },
    { id: "testimonial", icon: "💬", label: "Testimonial", href: "#testimonial" },
    { id: "book", icon: "✅", label: "Book", href: "#book" },
  ];

  // Hero content (PHP) [file:6]
  const heroHighlights: Highlight[] = [
    { icon: "🏜️", text: "Upper Mustang" },
    { icon: "⭐", text: "5-Star Accommodation" },
    { icon: "🧘", text: "Wellness & Spirituality" },
    { icon: "🎟️", text: "VIP Experiences" },
  ];

  const heroStats = [
    { number: "10", label: "Days" },
    { number: "9", label: "Nights" },
    { number: "Max 8", label: "People" },
    { number: "All-inclusive", label: "Experience" },
  ];

  // PHP hero CTAs: Reserve -> #pricing, View Itinerary -> #itinerary [file:6]
  const heroCTAs = [
    { label: "Reserve Your Spot", href: "#pricing", primary: true },
    { label: "View Itinerary", href: "#itinerary" },
  ];

  // Intro section (PHP: "A Journey Beyond Imagination" + 2 paragraphs) [file:6]
  const introTitle = "A Journey Beyond Imagination";
  const introParagraphs = [
    "Discover the mystical kingdom of Mustang, where ancient Tibetan culture meets breathtaking Himalayan landscapes. This exclusive luxury retreat takes you to one of Nepal’s most remote and culturally rich regions, often called the Last Forbidden Kingdom. Experience 700-year-old monasteries, sacred caves, dramatic cliff faces, and the timeless traditions of a land that remained closed to outsiders until 1992.",
    "Our carefully curated retreat combines adventure, spirituality, and luxury comfort. Stay in premium accommodations, enjoy gourmet organic cuisine, practice yoga with mountain views, meditate in ancient temples, and immerse yourself in a culture that has remained virtually unchanged for centuries. This is not just a trek—it’s a transformational journey for the soul.",
  ];

  // Location section (PHP) [file:6]
  const locationTitle = "The Kingdom of Mustang";
  const locationParagraphs = [
    "Nestled between the Annapurna and Dhaulagiri mountain ranges at elevations between 2,800m to 4,900m, Mustang is a desert-like plateau that feels like stepping into another world. The landscape is stark, beautiful, and utterly unique—wind-carved canyons, ochre cliffs, and barren beauty reminiscent of Tibet.",
    "Upper Mustang, centered around the walled city of Lo Manthang, preserves authentic Tibetan Buddhist culture. Here, prayer wheels spin continuously, butter lamps flicker in ancient monasteries, and locals maintain traditions that have endured for over a millennium.",
  ];

  const locationFeatures = [
    "Altitude: 2,800m - 4,900m above sea level",
    "Location: Trans-Himalayan region of Nepal",
    "Culture: Authentic Tibetan Buddhist heritage",
    "Climate: Dry, rain-shadow desert landscape",
    "History: Former independent Buddhist kingdom",
    "Access: Restricted area requiring special permits",
  ];

  // Experience grid (PHP: 6 cards) [file:6]
  const experiences: ExperienceCard[] = [
    {
      icon: "🏛️",
      title: "Ancient Monasteries",
      description:
        "Visit 700-year-old monasteries adorned with vibrant murals and golden statues. Witness monks performing sacred rituals unchanged for centuries.",
    },
    {
      icon: "🕳️",
      title: "Sacred Caves",
      description:
        "Explore 2,000-year-old sky caves carved into cliff faces, once used as meditation retreats and burial chambers by ancient practitioners.",
    },
    {
      icon: "🧘",
      title: "Mountain Meditation",
      description:
        "Practice meditation and yoga against the backdrop of snow-capped peaks, in settings where Tibetan masters have practiced for millennia.",
    },
    {
      icon: "🎎",
      title: "Cultural Immersion",
      description:
        "Experience authentic Tibetan culture through traditional ceremonies, festivals, local crafts, and interactions with warm-hearted villagers.",
    },
    {
      icon: "🏔️",
      title: "Himalayan Vistas",
      description:
        "Witness panoramic views of Annapurna, Dhaulagiri, and Nilgiri peaks. Walk through landscapes that take your breath away—literally and figuratively.",
    },
    {
      icon: "🍲",
      title: "Gourmet Cuisine",
      description:
        "Savor organic, locally-sourced meals prepared by expert chefs. Experience traditional Tibetan dishes alongside international wellness cuisine.",
    },
  ];

  // Itinerary (PHP: 10 days) [file:6]
  const itinerary: ItineraryDay[] = [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      subtitle: "Welcome & Orientation",
      description:
        "Arrive in Kathmandu and transfer to luxury boutique hotel. Evening orientation session about the journey ahead, wellness consultation, and welcome dinner featuring Nepali cuisine.",
    },
    {
      day: 2,
      title: "Kathmandu to Pokhara",
      subtitle: "Scenic Flight & Preparation",
      description:
        "Morning flight to Pokhara. Rest and acclimatization at luxury lakeside resort. Gentle yoga session, meditation practice, and final preparation for the Mustang journey.",
    },
    {
      day: 3,
      title: "Pokhara to Jomsom",
      subtitle: "Gateway to Mustang",
      description:
        "Breathtaking morning flight through the world’s deepest gorge to Jomsom. Check into luxury Shinta Mani Mustang lodge. Afternoon exploration of local village and surrounding trails.",
    },
    {
      day: 4,
      title: "Jomsom to Kagbeni",
      subtitle: "Sacred Gateway Village",
      description:
        "Trek to Kagbeni, the gateway to Upper Mustang. Visit ancient Kag Chode Thupten Samphel Ling monastery. Meditation session at sunset overlooking the sacred Kali Gandaki river.",
    },
    {
      day: 5,
      title: "Kagbeni to Chele",
      subtitle: "Into the Forbidden Kingdom",
      description:
        "Cross into restricted Upper Mustang. Trek through dramatic landscapes with views of Nilgiri and Tilicho peaks. Evening sound healing session with traditional singing bowls.",
    },
    {
      day: 6,
      title: "Chele to Lo Manthang",
      subtitle: "The Walled City",
      description:
        "Arrive at Lo Manthang, the ancient walled capital. Check into Royal Mustang Resort. Explore the King’s Palace and medieval city walls. Evening cultural program with local performers.",
    },
    {
      day: 7,
      title: "Lo Manthang Exploration",
      subtitle: "Monasteries & Caves",
      description:
        "Full day exploring Thubchen and Champa Lhakang monasteries with 600-year-old murals. Visit sacred Jhong Cave and Chhoser Cave complex. Private meditation session with Buddhist monk.",
    },
    {
      day: 8,
      title: "Return to Jomsom",
      subtitle: "Journey Back",
      description:
        "Leisurely return trek to Jomsom, stopping at viewpoints and sacred sites. Spa treatments and massage at luxury lodge. Celebration dinner with traditional Mustangi hospitality.",
    },
    {
      day: 9,
      title: "Jomsom to Pokhara",
      subtitle: "Reflection & Rest",
      description:
        "Morning flight back to Pokhara. Rest at luxury resort with lake views. Integration session, journaling workshop, and gentle yoga. Farewell dinner by the lake.",
    },
    {
      day: 10,
      title: "Return to Kathmandu",
      subtitle: "Journey’s End",
      description:
        "Scenic drive back to Kathmandu. Final group sharing circle and closing ceremony. Certificate presentation. Evening international departure or extended stay options.",
    },
  ];

  // Accommodation section (PHP) [file:6]
  const accommodationTitle = "Luxury Accommodations";
  const accommodationParagraphs = [
    "Experience the perfect blend of luxury and authenticity. Stay in Nepal’s finest mountain lodges, featuring traditional Tibetan architecture with modern 5-star amenities. Each property is carefully selected for comfort, views, and cultural integration.",
    "In Jomsom, enjoy the renowned Shinta Mani Mustang, a Bensley Collection property with 29 suites overlooking the Nilgiri range. In Lo Manthang, the Royal Mustang Resort offers heritage-style luxury within the ancient city walls.",
  ];

  const amenities: Amenity[] = [
    { icon: "🏔️", text: "Luxury suites with mountain views" },
    { icon: "🧖", text: "Private spa & hot plunge pools" },
    { icon: "🔥", text: "Heated rooms & underfloor heating" },
    { icon: "🍽️", text: "Gourmet organic dining" },
    { icon: "💆", text: "On-site massage & wellness center" },
    { icon: "🧘", text: "Private yoga & meditation spaces" },
  ];

  // Pricing section (PHP) [file:6]
  const pricingTitle = "Investment in Your Journey";
  const pricingSubtitle = "An all-inclusive luxury experience";
  const pricingBadge = "Exclusive Retreat";
  const pricingProgram = "10-Day Luxury Himalayan Experience";
  const pricingAmount = "4,500";
  const pricingDuration = "Per Person Twin Sharing";

  const pricingIncludes = [
    "9 nights luxury accommodation",
    "All domestic flights included",
    "All meals (breakfast, lunch, dinner)",
    "Daily yoga & meditation sessions",
    "Expert guides & porters",
    "All permits & entry fees",
    "Spa treatments & wellness sessions",
    "Cultural experiences & ceremonies",
    "Airport transfers",
    "Travel insurance assistance",
    "Group size: Maximum 8 people",
    "Pre-departure support package",
  ];

  // Testimonial section (PHP) [file:6]
  const testimonialQuote =
    "The Mustang retreat was the most profound journey of my life. The combination of breathtaking landscapes, ancient culture, and spiritual practices created a transformation I never expected. The luxury accommodations made the high-altitude experience comfortable, while the expert guidance made it deeply meaningful. I returned home a changed person.";
  const testimonialAuthor = "Sarah Williams";
  const testimonialRole = "Wellness Coach, United Kingdom";

  // CTA section (PHP has background image + 3 CTA buttons) [file:6]
  const ctaButtons = [
    { icon: "📞", label: "Call to Book", href: "tel:+9779818514837" },
    { icon: "✉️", label: "Email Inquiry", href: "mailto:info@jivanparivartan.com" },
    // PHP points to contact.php; in Next.js use /contact
    { icon: "📝", label: "Request Information", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        // PHP uses "Exclusive Experience" badge [file:6]
        badge={{ icon: "⭐", text: "Exclusive Experience" }}
        title="Luxury Himalayan Retreat in Mustang"
        subtitle="Journey to the Last Forbidden Kingdom"
        stats={heroStats}
        ctas={heroCTAs}
        // If "gold" variant doesn't exist, keep "red" and style sections with yellow/gold classes.
        variant="red"
        backgroundImage={images.hero}
      />

      {/* Quick nav exists in PHP (floating + sidebar); in current codebase we keep QuickNavigation */}
      <QuickNavigation items={quickNavItems} variant="red" />

      <div className="max-w-[1400px] mx-auto px-5 py-16">
        {/* Overview / Intro (PHP intro-section) [file:6] */}
        <section
          id="overview"
          className="bg-gradient-to-br from-white to-yellow-50 p-10 md:p-8 sm:p-6 rounded-2xl shadow-lg border-t-4 border-yellow-700"
        >
          {/* PHP hero-highlights are in hero area; we include them here to ensure they exist as a component block too [file:6] */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {heroHighlights.map((h) => (
              <span
                key={h.text}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-yellow-900 bg-gradient-to-br from-yellow-50 to-white border border-yellow-200"
              >
                <span className="text-lg">{h.icon}</span>
                <span>{h.text}</span>
              </span>
            ))}
          </div>

          <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-6 text-center">
            {introTitle}
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-[17px] md:text-[15px] text-center max-w-[1000px] mx-auto">
            {introParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Location section (PHP location-section: content + image) [file:6] */}
        <section id="location" className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg">
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-6">
                {locationTitle}
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-[16px] md:text-[15px]">
                {locationParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <ul className="mt-8 space-y-3 text-gray-700 text-[15px]">
                {locationFeatures.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-yellow-700 font-extrabold">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl shadow-lg min-h-[360px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(184,134,11,0.25), rgba(139,69,19,0.15)), url('${images.location}')`,
              }}
            />
          </div>
        </section>

        {/* Experience grid (PHP experience-section) [file:6] */}
        <section id="experiences" className="mt-14">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
              Unforgettable Experiences Await
            </h2>
            <p className="mt-3 text-gray-600 text-lg md:text-base">
              Immerse yourself in experiences that transform and inspire
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7">
            {experiences.map((e) => (
              <div
                key={e.title}
                className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 text-center shadow-md hover:shadow-xl transition-all border-t-[3px] border-yellow-700"
              >
                <div className="text-5xl mb-5">{e.icon}</div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {e.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Itinerary (PHP itinerary-section, id="itinerary") [file:6] */}
        <section
          id="itinerary"
          className="mt-14 bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
              Your 10-Day Journey
            </h2>
            <p className="mt-3 text-gray-600 text-lg md:text-base">
              A carefully crafted itinerary balancing adventure, culture, and relaxation
            </p>
          </div>

          <div className="space-y-6">
            {itinerary.map((d) => (
              <div
                key={d.day}
                className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-yellow-700"
              >
                <div className="flex items-start gap-4 flex-wrap">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-900 text-white font-extrabold flex items-center justify-center shrink-0">
                    {d.day}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                      {d.title}
                    </h3>
                    <p className="text-sm font-semibold text-yellow-800 tracking-wide uppercase">
                      {d.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodation (PHP accommodation-section: image + content + amenities list) [file:6] */}
        <section id="accommodation" className="mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="rounded-2xl shadow-lg min-h-[360px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(184,134,11,0.18), rgba(139,69,19,0.10)), url('${images.accommodation}')`,
              }}
            />

            <div className="bg-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg">
              <h2 className="text-3xl md:text-2xl font-extrabold text-gray-900 mb-6">
                {accommodationTitle}
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-[16px] md:text-[15px]">
                {accommodationParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-1 gap-3">
                {amenities.map((a) => (
                  <div
                    key={a.text}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 text-gray-700 font-semibold text-[14px]"
                  >
                    <span className="text-yellow-700 text-lg">{a.icon}</span>
                    <span>{a.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing (PHP pricing-section, id="pricing") [file:6] */}
        <section id="pricing" className="mt-14">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900">
              {pricingTitle}
            </h2>
            <p className="mt-3 text-gray-600 text-lg md:text-base">
              {pricingSubtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg border border-yellow-200 max-w-[980px] mx-auto">
            <div className="text-center">
              <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-extrabold text-white bg-gradient-to-br from-yellow-700 to-yellow-900">
                {pricingBadge}
              </span>

              <h3 className="mt-5 text-2xl md:text-xl font-extrabold text-gray-900">
                {pricingProgram}
              </h3>

              <div className="mt-4 text-5xl md:text-4xl font-extrabold text-yellow-800">
                {pricingAmount}
              </div>
              <div className="mt-2 text-sm text-gray-600">{pricingDuration}</div>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-1 gap-4">
              {pricingIncludes.map((inc) => (
                <div key={inc} className="flex items-start gap-3 text-gray-700">
                  <span className="text-yellow-700 font-extrabold">•</span>
                  <span className="text-[15px] leading-relaxed">{inc}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              {/* PHP uses contact.php for reserve button [file:6] */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-extrabold text-white bg-gradient-to-br from-yellow-700 to-yellow-900 shadow-md hover:shadow-xl transition"
              >
                Reserve Your Spot
              </a>

              <p className="mt-4 text-sm text-gray-600">
                Limited to 8 participants per departure. Early booking recommended.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial (PHP testimonial-luxury) [file:6] */}
        <section
          id="testimonial"
          className="mt-14 bg-gradient-to-br from-yellow-700 to-yellow-950 text-white rounded-2xl p-10 md:p-8 sm:p-6 shadow-lg"
        >
          <p className="text-lg md:text-base leading-relaxed italic">
            {testimonialQuote}
          </p>
          <div className="mt-6 font-extrabold">{testimonialAuthor}</div>
          <div className="text-sm opacity-90">{testimonialRole}</div>
        </section>

        {/* Final CTA (PHP cta-section has bg image + 3 buttons) [file:6] */}
        <section id="book" className="mt-14">
          <CTASection
            title="Begin Your Himalayan Journey"
            description="Limited spots available for this exclusive experience"
            buttons={ctaButtons}
            // keep variant aligned with existing components (unknown if gold exists)
            variant="red"
            backgroundEmoji="🏔️"
            // If your CTASection supports a background image prop, add it here.
          />

          {/* If you want the CTA background image like PHP, but CTASection doesn't support it,
              this wrapper replicates the “image CTA” feel with dummy image. */}
          <div
            className="mt-8 rounded-2xl p-10 md:p-8 sm:p-6 text-white shadow-lg bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(184,134,11,0.85), rgba(139,69,19,0.78)), url('${images.cta}')`,
            }}
          >
            <h3 className="text-3xl md:text-2xl font-extrabold">
              Begin Your Himalayan Journey
            </h3>
            <p className="mt-3 text-white/90 text-[16px] md:text-[15px] max-w-[800px]">
              Limited spots available for this exclusive experience
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:+9779818514837"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-yellow-800 font-extrabold shadow hover:shadow-lg transition"
              >
                <span>📞</span>
                <span>Call to Book</span>
              </a>
              <a
                href="mailto:info@jivanparivartan.com"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-yellow-800 font-extrabold shadow hover:shadow-lg transition"
              >
                <span>✉️</span>
                <span>Email Inquiry</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-yellow-800 font-extrabold shadow hover:shadow-lg transition"
              >
                <span>📝</span>
                <span>Request Information</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
