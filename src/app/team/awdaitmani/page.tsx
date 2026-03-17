import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { TeamMemberProfile } from "@/components/jivan/team/TeamMemberProfile";

export const metadata = {
  title: "Yogi Awdaitmani - Yoga Master & Therapist | Jivan Parivartan",
  description:
    "Meet Yogi Awdaitmani, dedicated Yoga Master, Yoga Therapist, and Spiritual Guide with over 5 years of experience in traditional yoga and spiritual guidance.",
};

export default function YogiAwdaitmaniPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: "Yogi Awdaitmani" },
  ];

  const profile = {
    name: "Yogi Awdaitmani",
    title: "Yoga Master & Spiritual Guide",
    subtitle: "Yoga Therapist | Traditional Yoga Teacher | Biomedical Engineer",
    image: "/img/team/yogi-awdaitmani.jpg",
    
    introduction: {
      text: "Yogi Awdaitmani is a dedicated and spiritually grounded Yoga Master, Yoga Therapist, and Spiritual Guide based in Kathmandu, Nepal, with over five years of professional experience in teaching traditional yoga, yoga therapy, and spiritual guidance. He has received training under respected spiritual gurus across various Ashrams of Nepal and India and possesses deep knowledge of classical yogic texts and practices. With a unique combination of ancient yogic wisdom and a scientific academic background, he supports holistic physical, mental, and spiritual well-being.",
      stats: [
        { number: "5+", label: "Years Teaching" },
        // { number: "4+", label: "Years Training" },
        { number: "3+", label: "Languages" },
        { number: "Multiple", label: "Certifications" },
      ],
    },

    journey: {
      title: "Educational & Spiritual Journey",
      content: [
        "Yogi Awdaitmani's unique journey combines rigorous academic training with deep spiritual practice. He holds a Bachelor of Engineering (B.E.) in Biomedical Engineering from Anna University, Chennai, India. This scientific foundation provides him with comprehensive knowledge of human anatomy, physiology, and the biomechanics of the body—knowledge that enriches his approach to yoga therapy and instruction.",
        "Alongside his academic education, he dedicated more than two years to intensive Yoga Teacher Training and Spiritual Sadhana under multiple respected gurus in Nepal and India. His training encompasses in-depth practical and philosophical study of traditional yogic systems including Patanjali Yoga Sutra, Ashtanga Yoga, Hatha Yoga, Pranayama, and spiritual discipline.",
        "This dual foundation in engineering science and yogic philosophy creates a unique perspective that bridges ancient wisdom with modern understanding. He can explain yogic practices through both traditional spiritual lens and contemporary anatomical science, making his teachings accessible and meaningful to diverse students.",
        "His training across various Ashrams in Nepal and India has exposed him to different lineages and approaches, allowing him to offer well-rounded instruction that honors multiple traditions while maintaining authenticity and depth.",
      ],
    },

    expertise: {
      title: "Areas of Expertise",
      skills: [
        {
          icon: "",
          name: "Hatha Yoga",
          description:
            "Expert instruction in classical Hatha Yoga postures with emphasis on alignment, breath integration, and therapeutic applications. Teaches modifications for all body types and conditions.",
        },
        {
          icon: "",
          name: "Ashtanga Yoga",
          description:
            "Traditional Ashtanga Yoga practice following Maharshi Patanjali's teachings. Guides students through primary series with proper vinyasa, drishti, and bandha techniques.",
        },
        {
          icon: "",
          name: "Pranayama & Breathwork",
          description:
            "Comprehensive training in yogic breathing techniques for energy regulation, stress management, and spiritual development. Teaches both fundamental and advanced pranayama practices.",
        },
        {
          icon: "",
          name: "Yoga Therapy",
          description:
            "Therapeutic application of yoga for specific health conditions. Designs customized programs addressing physical ailments, mental health concerns, and chronic conditions using evidence-based approaches.",
        },
        {
          icon: "",
          name: "Meditation & Mindfulness",
          description:
            "Guided meditation practices ranging from concentration techniques to insight meditation. Integrates mindfulness into daily life for sustained mental clarity and emotional balance.",
        },
        {
          icon: "",
          name: "Yogic Lifestyle Guidance",
          description:
            "Comprehensive guidance on yogic ethics (Yamas and Niyamas), dietary principles, daily routines (Dinacharya), and lifestyle modifications for holistic well-being.",
        },
      ],
    },

    achievements: {
      title: "Professional Experience & Impact",
      items: [
        "Over three years of experience as Freelance Yoga Master and Yoga Teacher in Kathmandu and various locations across Nepal",
        "Conducted hundreds of yoga sessions for both individual clients and group classes across diverse settings",
        "Taught in society groups, rehabilitation centers, spiritual organizations, colleges, and universities",
        "Designed and implemented customized yoga programs based on individual physical, mental, and spiritual needs",
        "Successfully integrated meditation and pranayama techniques for stress management and inner growth with students",
        "Provided yogic lifestyle counseling and guidance on ethics, discipline, and mindful living",
        "Guided diverse age groups from beginners to advanced practitioners in safe and effective yoga practice",
        "Developed specialized programs including weight loss yoga, fitness and strength yoga, and spiritual growth practices",
      ],
    },

    philosophy: {
      title: "Teaching Philosophy",
      content:
        "Yogi Awdaitmani's teaching philosophy emphasizes that yoga is not merely physical exercise but a complete way of life focused on achieving harmony between body, breath, mind, and soul. He believes that yoga practice must be adapted to each individual's unique capacity, needs, and goals rather than forcing students into a one-size-fits-all approach. Drawing from both traditional yogic wisdom and modern anatomical science, he creates safe, effective, and transformative learning experiences. His approach integrates physical postures with breath awareness, meditation, and philosophical understanding to support comprehensive well-being. He emphasizes consistent, mindful practice over perfection, encouraging students to honor their bodies while gradually expanding their capabilities. Through patient guidance and personalized attention, he helps students develop sustainable yoga practices that enrich all aspects of their lives.",
    },

    sessions: {
      title: "Programs & Services",
      offerings: [
        {
          name: "Private Yoga Therapy Sessions",
          description: "Personalized one-on-one sessions addressing specific health concerns, injuries, or wellness goals",
          duration: "60-90 minutes",
        },
        {
          name: "Group Hatha Yoga Classes",
          description: "Traditional Hatha Yoga classes suitable for all levels with focus on alignment and breath",
          duration: "60-75 minutes",
        },
        {
          name: "Ashtanga Yoga Practice",
          description: "Guided Ashtanga practice following traditional sequences with proper technique instruction",
          duration: "90 minutes",
        },
        {
          name: "Pranayama & Meditation Sessions",
          description: "Dedicated breathwork and meditation classes for stress reduction and mental clarity",
          duration: "45-60 minutes",
        },
        {
          name: "Weight Loss & Fitness Yoga",
          description: "Dynamic yoga programs designed for weight management and physical fitness improvement",
          duration: "60 minutes",
        },
        {
          name: "Spiritual Growth & Development",
          description: "Comprehensive programs integrating asana, pranayama, meditation, and yogic philosophy for spiritual awakening",
          duration: "Multi-week series",
        },
        {
          name: "Lifestyle Improvement Coaching",
          description: "Personalized guidance on incorporating yogic principles into daily life for lasting transformation",
          duration: "Ongoing support",
        },
      ],
    },

    testimonials: [
      {
        text: "Yogi Awdaitmani's unique combination of scientific knowledge and spiritual wisdom made yoga accessible to me in ways I never experienced before. His patient teaching style and clear explanations transformed my practice.",
        author: "Ramesh P.",
        location: "Kathmandu",
      },
      {
        text: "His yoga therapy sessions helped me recover from a chronic back condition that other treatments couldn't fix. His understanding of anatomy combined with traditional yoga techniques worked wonders.",
        author: "Sarah L.",
        location: "Pokhara",
      },
      {
        text: "I appreciate how he adapts practices to individual needs. Whether working with beginners or advanced students, he creates a supportive environment where everyone can grow at their own pace.",
        author: "Bikram S.",
        location: "Kathmandu",
      },
    ],

    contact: {
      email: "info@jivanparivartan.com",
      phone: "+977 9818514837",
      bookingText: "To book a session with Yogi Awdaitmani or inquire about his programs, please contact us directly.",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />
      <TeamMemberProfile profile={profile} variant="green" />
    </div>
  );
}
