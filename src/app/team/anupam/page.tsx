import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { TeamMemberProfile } from "@/components/jivan/team/TeamMemberProfile";

export const metadata = {
  title: "Anupam Chidananda - Spiritual Practitioner | Jivan Parivartan",
  description:
    "Meet Anupam Chidananda, spiritual practitioner devoted to inner inquiry, meditation, and conscious living through direct experience and communion with nature.",
};

export default function AnupamChidanandaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Anupam Chidananda" },
  ];

  const profile = {
    name: "Anupam Chidananda",
    title: "Spiritual Practitioner & Meditation Guide",
    subtitle: "Nature-Based Practice | Self-Inquiry | Conscious Living",
    image: "/img/team/anupam.jpg",
    
    introduction: {
      text: "Anupam Chidananda is a spiritual practitioner devoted to the path of inner inquiry, meditation, and conscious living. Drawn naturally toward silence and contemplation from an early age, his journey has been shaped less by formal institutions and more by direct experience, self-discipline, and communion with nature. His approach emphasizes presence, simplicity, and direct seeing, integrating self-inquiry, meditation, and mindful action into daily life.",
      stats: [
        { number: "Lifetime", label: "Journey" },
        { number: "Nature", label: "Primary Teacher" },
        { number: "Vedic", label: "Foundation" },
        { number: "Direct", label: "Experience" },
      ],
    },

    journey: {
      title: "Spiritual Journey",
      content: [
        "From childhood, solitude felt natural to Anupam. Forests, rivers, mountains, and open skies became his first teachers, offering a living presence of stillness and awareness. This early communion with nature established a foundation for his spiritual unfolding that continues to guide his path today.",
        "Under the guidance of his father, he was introduced to the foundational wisdom of the Vedas, Upanishads, and other timeless spiritual teachings. These ancient texts grounded his experiential inclination in clear philosophical understanding, creating a bridge between direct experience and traditional wisdom.",
        "Over the years, Anupam cultivated an organic approach to yoga and meditation—one that arises from attentiveness to the body, breath, mind, and the rhythms of nature rather than rigid technique. His practice developed naturally through observation, experimentation, and patient listening to the intelligence of life itself.",
        "His spiritual practice is not a journey toward a destination, but a silent recognition of the Self that is ever-present in reality. From childhood, he lived the question 'Who am I?' not as an intellectual inquiry, but as a living pulse of existence itself. He does not identify himself as a guru nor as a seeker, for in this path all such distinctions dissolve into silence. He simply flows with that silence, where there is neither bondage nor liberation—only Truth.",
      ],
    },

    expertise: {
      title: "Areas of Practice & Guidance",
      skills: [
        {
          icon: "",
          name: "Self-Inquiry (Ātma-Vicāra)",
          description:
            "Guidance in the practice of self-inquiry as a path to recognizing one's true nature. Emphasis on direct investigation of awareness rather than conceptual understanding.",
        },
        {
          icon: "",
          name: "Meditation (Dhyāna)",
          description:
            "Teaching meditation as a natural unfolding of presence rather than a technique to be mastered. Focus on awareness, stillness, and the organic development of meditative states.",
        },
        {
          icon: "",
          name: "Mindful Action (Karma)",
          description:
            "Integration of awareness into daily activities. Teaching how ordinary actions become opportunities for presence when performed with complete attention and without inner division.",
        },
        {
          icon: "",
          name: "Nature-Based Spirituality",
          description:
            "Using the natural world as a mirror for inner understanding. Learning from the balance, impermanence, and quiet intelligence displayed in forests, rivers, and mountains.",
        },
        {
          icon: "",
          name: "Vedic & Upanishadic Wisdom",
          description:
            "Sharing insights from ancient texts not as dogma but as pointers to direct experience. Making traditional teachings accessible and relevant to contemporary seekers.",
        },
        {
          icon: "",
          name: "Conscious Living",
          description:
            "Guidance on bringing spiritual awareness into all aspects of life. Emphasis on simplicity, authenticity, and living in harmony with one's deepest understanding.",
        },
      ],
    },

    achievements: {
      title: "Service & Contribution",
      items: [
        "Shares lived understanding through yoga and meditation sessions focused on authentic transformation rather than ideology",
        "Works in rehabilitation and healing environments, bringing awareness and inner stability to those in recovery",
        "Facilitates nature-based meditation retreats where the natural environment serves as primary teacher",
        "Guides sincere seekers in self-inquiry and meditation through one-on-one sessions and small group settings",
        "Integrates Vedic wisdom with direct experiential practice, making ancient teachings accessible to modern practitioners",
        "Cultivates conscious community through shared meditation practice and contemplative dialogue",
        "Emphasizes inner transformation over external achievement, creating space for genuine spiritual unfolding",
        "Walks the spiritual path as ongoing journey of learning and service, offering companionship to fellow seekers rather than authority",
      ],
    },

    philosophy: {
      title: "Approach to Spiritual Practice",
      content:
        "Anupam's approach to spirituality is rooted in direct experience rather than borrowed knowledge. For him, nature remains central to spiritual life—not as a concept but as a living guide. The outer landscape mirrors the inner, revealing balance, impermanence, and quiet intelligence. His practice emphasizes presence, simplicity, and direct seeing rather than accumulation of techniques or concepts. He views spiritual practice not as something to achieve but as a natural unfolding when one lives with complete attention and openness. The question 'Who am I?' is not approached as an intellectual puzzle but as a living inquiry that penetrates the fabric of daily existence. In his work with others, the focus is on awareness, inner stability, and genuine transformation. He does not present himself as one who has arrived but as a companion on the path, sharing what has been discovered through patient observation and sincere practice. All teachings point back to the student's own direct experience, for truth cannot be transferred but only recognized within oneself.",
    },

    sessions: {
      title: "Offerings & Practice Sessions",
      offerings: [
        {
          name: "Self-Inquiry Sessions",
          description: "Individual guidance in the practice of self-investigation, exploring the fundamental question of identity and awareness",
          duration: "60-90 minutes",
        },
        {
          name: "Meditation Practice",
          description: "Group and individual meditation sessions emphasizing natural awareness and presence rather than technique",
          duration: "45-75 minutes",
        },
        {
          name: "Nature-Based Retreats",
          description: "Silent retreats in natural settings where the environment serves as teacher and mirror for inner understanding",
          duration: "2-7 days",
        },
        {
          name: "Contemplative Dialogue",
          description: "Small group discussions exploring spiritual questions through direct inquiry rather than philosophical debate",
          duration: "90 minutes",
        },
        {
          name: "Yoga for Inner Inquiry",
          description: "Yoga practice approached as moving meditation and body awareness rather than physical exercise",
          duration: "60-90 minutes",
        },
        {
          name: "Rehabilitation & Healing Work",
          description: "Specialized sessions for those in recovery, focusing on awareness, stability, and inner transformation",
          duration: "Customized",
        },
        {
          name: "Conscious Living Guidance",
          description: "Personal mentorship in integrating spiritual awareness into daily life with simplicity and authenticity",
          duration: "Ongoing",
        },
      ],
    },

    testimonials: [
      {
        text: "Anupam's presence creates a space where pretense falls away. His guidance in self-inquiry helped me stop seeking and start seeing. The simplicity of his approach cut through years of spiritual accumulation.",
        author: "Deepak M.",
        location: "Kathmandu",
      },
      {
        text: "What I appreciate most is that he doesn't position himself as someone who knows. He simply shares what he has seen, and somehow that creates more trust than any authority could. The nature retreats he facilitates are profound.",
        author: "Lisa K.",
        location: "Netherlands",
      },
      {
        text: "His work in our rehabilitation center brought something we couldn't name but desperately needed—a quality of awareness and presence that supported real healing. He meets people where they are with complete acceptance.",
        author: "Dr. Sharma R.",
        location: "Pokhara",
      },
    ],

    contact: {
      email: "info@jivanparivartan.com",
      phone: "+977 9818514837",
      bookingText: "To connect with Anupam Chidananda regarding practice sessions or retreats, please contact us directly.",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />
      <TeamMemberProfile profile={profile} variant="green" />
    </div>
  );
}
