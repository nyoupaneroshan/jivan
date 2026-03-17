import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { TeamMemberProfile } from "@/components/jivan/team/TeamMemberProfile";


export const metadata = {
  title: "Maa Nisha Kabir - Founder & Spiritual Healer | Jivan Parivartan",
  description:
    "Meet Nisha Maa, spiritual healer, Reiki Master, and founder of Jivan Parivartan with over 12 years of Sadhana and 8,000+ lives transformed.",
};

export default function NishaMaaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Maa Nisha" },
  ];

  const profile = {
    name: "Maa Nisha Kabir",
    title: "Founder & Lead Spiritual Healer",
    subtitle: "Reiki Master | Transformational Trainer | Himalayan Practitioner",
    image: "/img/team/nisha-maa.jpg",
    
    introduction: {
      text: "Maa Nisha Majhi is a dedicated spiritual healer and transformational trainer with over 12 years of continuous Sadhana (spiritual practice). Beginning her spiritual journey at the young age of 14, she has immersed herself in deep meditation, spending two years in a Himalayan cave refining her spiritual practice. For the past six years, she has been actively engaged in the healing field, guiding individuals through Reiki, sound healing, and energy therapies.",
      stats: [
        { number: "12+", label: "Years of Sadhana" },
        { number: "8,000+", label: "Lives Transformed" },
        { number: "2 Years", label: "Himalayan Cave Meditation" },
        { number: "6+", label: "Years in Healing" },
      ],
    },

    journey: {
      title: "Spiritual Journey",
      content: [
        "Nisha Maa's spiritual awakening began at the tender age of 14, when she felt a profound calling toward meditation and inner exploration. Guided by an innate desire for truth and self-realization, she embarked on a transformative path that would shape her life's mission.",
        "In pursuit of deeper spiritual mastery, she undertook an extraordinary two-year retreat in the sacred Himalayan caves—a practice reserved for the most dedicated seekers. During this period of intense solitude and meditation, she cultivated profound inner stillness, awakened subtle energy channels, and developed heightened intuitive abilities.",
        "This rigorous Sadhana included advanced pranayama techniques, prolonged silent meditation, mantra chanting, and communion with the divine energies of the Himalayas. The experience forged her into a vessel of healing light, preparing her for the sacred work of serving humanity.",
        "Emerging from the mountains with clarity and purpose, Nisha Maa dedicated herself to translating her spiritual insights into practical healing modalities, founding Jivan Parivartan to share these gifts with the world.",
      ],
    },

    expertise: {
      title: "Areas of Expertise",
      skills: [
        {
          icon: "🙏",
          name: "Reiki Healing",
          description:
            "Certified Reiki Master offering all levels of Reiki training and healing sessions. Specializes in energy balancing, chakra alignment, and distance healing for physical, emotional, and spiritual wellness.",
        },
        {
          icon: "🔔",
          name: "Sound Healing Therapy",
          description:
            "Expert in Tibetan singing bowls, crystal bowls, and vibrational sound therapy. Uses specific frequencies to release energetic blockages, reduce stress, and induce deep states of relaxation and healing.",
        },
        {
          icon: "🧘‍♀️",
          name: "Meditation & Pranayama",
          description:
            "Teaches advanced meditation techniques including Vipassana, Chakra Dhyana, and Trataka. Guides students through transformative pranayama practices for prana control and spiritual awakening.",
        },
        {
          icon: "💫",
          name: "Energy Balancing",
          description:
            "Specializes in emotional energy clearing, aura cleansing, and removing energetic blockages that hinder personal growth. Helps clients release trauma, fear, and limiting beliefs.",
        },
        {
          icon: "🌿",
          name: "Holistic Wellness Coaching",
          description:
            "Provides personalized guidance integrating spiritual practices with lifestyle modifications, nutritional awareness, and mental health support for complete transformation.",
        },
        {
          icon: "🕉️",
          name: "Spiritual Guidance & Counseling",
          description:
            "Offers one-on-one spiritual counseling to help seekers navigate life challenges, discover their purpose, and deepen their connection to higher consciousness.",
        },
      ],
    },

    achievements: {
      title: "Impact & Achievements",
      items: [
        "Founded Jivan Parivartan Holistic Wellness Center, now a leading destination for authentic spiritual healing and yoga training in Nepal",
        "Personally conducted healing sessions for over 8,000 individuals across Nepal, India, and internationally",
        "Trained hundreds of Reiki practitioners and sound healing therapists who now serve communities worldwide",
        "Organized and led numerous wellness retreats, spiritual camps, and transformation workshops in Himalayan regions",
        "Pioneered integration of traditional Himalayan healing wisdom with contemporary therapeutic approaches",
        "Mentored aspiring spiritual teachers and wellness practitioners, empowering them to start their own healing journeys",
        "Featured speaker at wellness conferences and spiritual gatherings across South Asia",
        "Developed specialized healing protocols for chronic stress, anxiety, emotional trauma, and spiritual disconnection",
      ],
    },

    philosophy: {
      title: "Healing Philosophy",
      content:
        "Maa Nisha believes that true healing occurs when we address not just physical symptoms but the root causes residing in our emotional, mental, and spiritual bodies. Her approach integrates ancient Himalayan wisdom—passed down through generations of yogis and healers—with modern understanding of energy medicine and holistic wellness. She teaches that every individual possesses innate healing power; her role is to awaken, activate, and guide that inner light. Through compassionate presence, sacred practices, and energetic attunement, she creates safe spaces for profound transformation, helping individuals reconnect with their authentic selves and live purposefully aligned lives.",
    },

    sessions: {
      title: "Sessions & Programs Led by Nisha Maa",
      offerings: [
        {
          name: "Personal Reiki Healing Sessions",
          description: "One-on-one energy healing for physical ailments, emotional release, and spiritual alignment",
          duration: "60-90 minutes",
        },
        {
          name: "Sound Healing with Singing Bowls",
          description: "Deep relaxation and energetic cleansing through vibrational sound therapy",
          duration: "45-60 minutes",
        },
        {
          name: "Advanced Meditation Training",
          description: "Intensive meditation courses for deepening practice and spiritual awakening",
          duration: "Multi-week programs",
        },
        {
          name: "Reiki Level I, II & Master Training",
          description: "Complete Reiki certification programs from beginner to master level",
          duration: "2-4 days per level",
        },
        {
          name: "Spiritual Transformation Retreats",
          description: "Immersive residential retreats combining meditation, healing, and yogic practices",
          duration: "3-14 days",
        },
        {
          name: "Private Spiritual Counseling",
          description: "Personalized guidance for life challenges, purpose discovery, and spiritual growth",
          duration: "60 minutes",
        },
      ],
    },

    testimonials: [
      {
        text: "Nisha Maa's Reiki healing transformed my chronic anxiety into peace. Her gentle energy and profound wisdom helped me reconnect with myself after years of feeling lost.",
        author: "Priya S.",
        location: "Kathmandu",
      },
      {
        text: "The two years she spent in Himalayan caves shine through her teaching. Her meditation guidance is unlike anything I've experienced—authentic, powerful, and deeply transformative.",
        author: "Michael R.",
        location: "USA",
      },
      {
        text: "I came to Jivan Parivartan with deep emotional wounds. Through Maa Nisha's sound healing and spiritual counseling, I found healing I didn't think was possible. Eternally grateful.",
        author: "Anjali K.",
        location: "Mumbai, India",
      },
    ],

    contact: {
      email: "nisha@jivanparivartan.com",
      phone: "+977 9818514837",
      bookingText: "To book a personal session with Nisha Maa or inquire about her programs, please contact us directly.",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />
      <TeamMemberProfile profile={profile} variant="green" />
    </div>
  );
}
