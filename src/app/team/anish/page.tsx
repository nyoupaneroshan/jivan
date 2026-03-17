import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { TeamMemberProfile } from "@/components/jivan/team/TeamMemberProfile";

export const metadata = {
  title: "Swami Anish - Co-Founder & Meditation Guide | Jivan Parivartan",
  description:
    "Meet Swami Anish, meditation specialist, Reiki Master, and sound healer at Jivan Parivartan with expertise in holistic healing and spiritual guidance.",
};

export default function AnishPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Swami Anish" },
  ];

  const profile = {
    name: "Swami Anish",
    title: "Co-Founder & Meditation Specialist",
    subtitle: "Reiki Master | Sound Healer | Hypnotherapy Practitioner",
    image: "/img/team/anish.jpg",
    
    introduction: {
      text: "Swami Anish is a distinguished meditation specialist and holistic healing practitioner with extensive expertise in spiritual and therapeutic modalities. Drawing from years of dedicated practice and training in Eastern and Western healing traditions, he offers transformative experiences designed to facilitate profound personal growth and wellness. His integrated approach addresses the physical, emotional, mental, and spiritual dimensions of health, supporting clients in achieving balance and fulfillment in all aspects of life.",
      stats: [
        { number: "10+", label: "Years Experience" },
        { number: "5,000+", label: "Sessions Conducted" },
        { number: "Certified", label: "Reiki Master" },
        { number: "Holistic", label: "Approach" },
      ],
    },

    journey: {
      title: "Path to Healing",
      content: [
        "Swami Anish's journey into the healing arts began with a profound personal awakening—a realization that true wellness extends far beyond physical health to encompass emotional, mental, and spiritual well-being. This insight sparked a decade-long commitment to mastering various healing modalities.",
        "His training encompasses traditional Eastern practices including Reiki energy healing, Tibetan sound therapy, and advanced meditation techniques learned from masters in Nepal, India, and Tibet. He spent extensive time in meditation retreats, refining his ability to guide others through transformative inner experiences.",
        "Recognizing the power of the subconscious mind, Swami Anish pursued certification in clinical hypnotherapy and therapeutic counseling. This Western psychological training perfectly complements his Eastern spiritual foundation, allowing him to bridge ancient wisdom with modern therapeutic approaches.",
        "As Co-Founder of Jivan Parivartan, Swami Anish has created a sanctuary where these diverse healing traditions converge. His vision is to make authentic, transformative healing accessible to all seekers, regardless of their background or experience level.",
      ],
    },

    expertise: {
      title: "Healing Modalities & Expertise",
      skills: [
        {
          icon: "🧘‍♂️",
          name: "Meditation Guidance",
          description:
            "Expert instruction in mindfulness, Vipassana, chakra meditation, and guided visualization. Offers personalized meditation programs for beginners to advanced practitioners, emphasizing breath awareness and conscious embodiment.",
        },
        {
          icon: "✨",
          name: "Reiki Energy Healing",
          description:
            "Certified Reiki Master offering all levels of Reiki attunement and healing. Specializes in channeling universal life energy to address physical ailments, emotional blockages, chronic pain, and spiritual imbalances.",
        },
        {
          icon: "🔔",
          name: "Sound Healing Therapy",
          description:
            "Master practitioner of Tibetan singing bowls, crystal bowls, and sacred sound instruments. Creates immersive resonant frequencies that realign energy centers, facilitate deep meditation, and promote cellular rejuvenation.",
        },
        {
          icon: "🌀",
          name: "Hypnotherapy & Subconscious Work",
          description:
            "Certified hypnotherapist utilizing gentle, effective techniques to access the subconscious mind. Helps clients release limiting beliefs, process trauma, overcome phobias, and manifest positive behavioral change.",
        },
        {
          icon: "💆‍♂️",
          name: "Stress & Anxiety Management",
          description:
            "Specialized programs for chronic stress reduction, anxiety relief, and burnout recovery. Combines breathwork, meditation, energy healing, and counseling for comprehensive mental wellness support.",
        },
        {
          icon: "🌟",
          name: "Spiritual Counseling",
          description:
            "Compassionate guidance for those navigating spiritual awakening, life transitions, or existential questions. Provides safe space for exploration of consciousness, purpose, and higher self-connection.",
        },
      ],
    },

    achievements: {
      title: "Accomplishments & Impact",
      items: [
        "Co-founded Jivan Parivartan Holistic Wellness Center, establishing it as a premier destination for authentic healing in Nepal",
        "Conducted over 5,000 individual healing sessions across Reiki, sound therapy, meditation, and hypnotherapy",
        "Trained and certified hundreds of students in Reiki healing levels I, II, and Master certification",
        "Designed and facilitated transformational meditation retreats in serene Himalayan locations",
        "Developed specialized healing protocols integrating multiple modalities for chronic conditions and emotional trauma",
        "Regular facilitator at wellness conferences, spiritual gatherings, and holistic health expos",
        "Created accessible meditation programs for corporate professionals, students, and marginalized communities",
        "Pioneered integration of hypnotherapy with traditional energy healing in the Nepali wellness context",
      ],
    },

    philosophy: {
      title: "Healing Philosophy",
      content:
        "Swami Anish believes that every individual possesses innate healing potential waiting to be awakened. His philosophy centers on the understanding that true healing addresses not just symptoms but root causes existing across physical, emotional, mental, and spiritual dimensions. By blending the intuitive wisdom of Eastern traditions with the precision of Western therapeutic methods, he creates personalized healing journeys tailored to each client's unique needs. He views healing as a collaborative process—not something done to clients, but a transformation they actively participate in. Through compassionate presence, expert guidance, and sacred space, Swami Anish empowers individuals to access their inner healer, release what no longer serves them, and step into their fullest potential. His approach is gentle yet profound, honoring each person's pace while facilitating breakthrough experiences that catalyze lasting change.",
    },

    sessions: {
      title: "Services & Programs",
      offerings: [
        {
          name: "Personal Reiki Healing Sessions",
          description: "One-on-one energy healing to restore balance, clear blockages, and promote deep relaxation and vitality",
          duration: "60-90 minutes",
        },
        {
          name: "Sound Healing with Singing Bowls",
          description: "Immersive vibrational therapy using Tibetan and crystal bowls for stress relief, energy alignment, and meditative states",
          duration: "45-75 minutes",
        },
        {
          name: "Guided Meditation Sessions",
          description: "Personalized meditation instruction for mindfulness, breath awareness, and spiritual deepening",
          duration: "30-60 minutes",
        },
        {
          name: "Hypnotherapy for Personal Transformation",
          description: "Therapeutic hypnosis to release limiting beliefs, overcome fears, process trauma, and create positive change",
          duration: "75-90 minutes",
        },
        {
          name: "Reiki Training & Certification (Levels I-III)",
          description: "Comprehensive Reiki attunement and training from beginner to master level",
          duration: "2-4 days per level",
        },
        {
          name: "Holistic Wellness Consultations",
          description: "Integrated healing approach combining multiple modalities tailored to individual needs",
          duration: "60 minutes",
        },
        {
          name: "Meditation & Healing Retreats",
          description: "Immersive multi-day experiences in serene settings combining meditation, healing, and spiritual practices",
          duration: "3-10 days",
        },
      ],
    },

    testimonials: [
      {
        text: "Swami Anish's Reiki healing gave me relief from chronic back pain that doctors couldn't fix. His calm presence and healing energy are truly transformative.",
        author: "Ramesh T.",
        location: "Kathmandu",
      },
      {
        text: "The hypnotherapy session with Anish helped me overcome my fear of public speaking. His gentle guidance created a safe space for deep healing. Highly recommend!",
        author: "Sarah M.",
        location: "Australia",
      },
      {
        text: "The sound healing with singing bowls was a profound experience. I felt layers of stress melt away. Swami Anish is a true master of his craft.",
        author: "Deepak S.",
        location: "New Delhi, India",
      },
    ],

    contact: {
      email: "anish@jivanparivartan.com",
      phone: "+977 9863049261",
      bookingText: "To book a healing session or consultation with Swami Anish, or to inquire about meditation and Reiki training programs, please contact us directly.",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />
      <TeamMemberProfile profile={profile} variant="green" />
    </div>
  );
}
