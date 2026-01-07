export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
  items?: NavItem[];
  type?: "dropdown" | "mega";
}

export const navigationMenu: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "yoga",
    label: "Yoga",
    href: "/yoga",
    type: "mega",
    children: [
      {
        id: "yoga-200hrs",
        label: "200 hrs Yoga Teacher Training",
        href: "/yoga/200hrs-teacher-training",
        items: [
          {
            id: "ashtanga",
            label: "Astang Mahayoga (Maharshi Patanjali)",
            href: "/yoga/200hrs-teacher-training#ashtanga",
          },
          {
            id: "hatha",
            label: "Hatha Yoga",
            href: "/yoga/200hrs-teacher-training#hatha",
          },
          {
            id: "pranayam",
            label: "Pranayam",
            href: "/yoga/200hrs-teacher-training#pranayam",
          },
          {
            id: "mudra",
            label: "Mudra Meditation",
            href: "/yoga/200hrs-teacher-training#mudra",
          },
          {
            id: "meditation",
            label: "Meditation Technique",
            href: "/yoga/200hrs-teacher-training#meditation",
          },
          {
            id: "theory",
            label: "Theory:",
            href: "/yoga/200hrs-teacher-training#theory",
          },
          {
            id: "history",
            label: "• History of Yoga",
            href: "/yoga/200hrs-teacher-training#history",
          },
          {
            id: "ashtang-yoga",
            label: "• Ashtang Maha Yoga",
            href: "/yoga/200hrs-teacher-training#ashtang-yoga",
          },
          {
            id: "anatomy",
            label: "• Yoga Anatomy by Dr.",
            href: "/yoga/200hrs-teacher-training#anatomy",
          },
        ],
      },
      {
        id: "yoga-500hrs",
        label: "500 hrs Yoga Teacher Training",
        href: "/yoga/500hrs-teacher-training",
        items: [
          {
            id: "surya-chandra",
            label: "Classical Surya & Chandra Namaskar",
            href: "/yoga/500hrs-teacher-training#surya-chandra",
          },
          {
            id: "ashtanga-500",
            label: "Astang Mahayoga (Maharshi Patanjali)",
            href: "/yoga/500hrs-teacher-training#ashtanga",
          },
          {
            id: "hatha-500",
            label: "Hatha Yoga",
            href: "/yoga/500hrs-teacher-training#hatha",
          },
          {
            id: "pranayam-500",
            label: "Pranayam",
            href: "/yoga/500hrs-teacher-training#pranayam",
          },
          {
            id: "mudra-500",
            label: "Mudra Meditation",
            href: "/yoga/500hrs-teacher-training#mudra",
          },
          {
            id: "meditation-500",
            label: "Meditation Technique",
            href: "/yoga/500hrs-teacher-training#meditation",
          },
          {
            id: "theory-500",
            label: "Theory:",
            href: "/yoga/500hrs-teacher-training#theory",
          },
          {
            id: "history-500",
            label: "• History of Yoga",
            href: "/yoga/500hrs-teacher-training#history",
          },
          {
            id: "ashtang-yoga-500",
            label: "• Ashtang Maha Yoga",
            href: "/yoga/500hrs-teacher-training#ashtang-yoga",
          },
          {
            id: "anatomy-500",
            label: "• Yoga Anatomy by Dr.",
            href: "/yoga/500hrs-teacher-training#anatomy",
          },
          {
            id: "mantra",
            label: "Mantra Sadana by analysing Birth Chart",
            href: "/yoga/500hrs-teacher-training#mantra",
          },
          {
            id: "naturopathy",
            label: "Naturopathy",
            href: "/yoga/500hrs-teacher-training#naturopathy",
          },
        ],
      },
    ],
  },
  {
    id: "singing-bowl",
    label: "Singing Bowl",
    href: "/singing-bowl",
    type: "dropdown",
    children: [
      {
        id: "singing-bowl-healing",
        label: "Singing Bowl Healing and Therapy",
        href: "/singing-bowl/singing-bowl-healing",
      },
      {
        id: "singing-bowl-meditation",
        label: "Singing Bowl Meditation",
        href: "/singing-bowl/singing-bowl-meditation",
      },
      {
        id: "singing-bowl-training",
        label: "Singing Bowl Training",
        type: "mega",
        href: "/singing-bowl/singing-bowl-training",
        children: [
          {
            id: "training-basic",
            label: "12 hours training (Basic)",
            href: "/singing-bowl/training-basic",
          },
          {
            id: "training-advance",
            label: "35 hours training (Advance)",
            href: "/singing-bowl/training-advance",
          },
        ],
      },
      {
        id: "energy-healing",
        label: "Energy Healing with Maa Nisha Kabir",
        href: "/singing-bowl/energy-healing",
      },
      {
        id: "7-chakra-healing",
        label: "7 Chakra Healing with Singing Bowl",
        href: "/singing-bowl/7-chakra-healing",
      },
    ],
  },
  {
    id: "reiki",
    label: "Reiki",
    href: "/reiki",
    type: "dropdown",
    children: [
      {
        id: "reiki-healing-session",
        label: "Reiki Healing Session",
        href: "/reiki/healing-session",
      },
      {
        id: "reiki-meditation",
        label: "Reiki Meditation",
        href: "/reiki/meditation",
      },
      {
        id: "reiki-training",
        label: "Reiki Training",
        href: "/reiki/training",
      },
      {
        id: "stress-management",
        label: "Stress Management",
        href: "/reiki/stress-management",
      },
    ],
  },
  {
    id: "meditation-retreat",
    label: "Meditation and Retreat",
    href: "/meditation",
    type: "dropdown",
    children: [
      {
        id: "trekking-retreat",
        label: "Pre and Post Trekking Retreat",
        href: "/meditation/trekking-retreat",
      },
      {
        id: "morning-meditation",
        label: "Morning Online Meditation (6:00 am - 8:00 am)",
        href: "/meditation/morning-meditation",
      },
      {
        id: "transformation-program",
        label: "One day special Transformation Program",
        href: "/meditation/transformation-program",
      },
    ],
  },
  {
    id: "luxury-himalayan-retreat",
    label: "Luxury Himalayan Retreat",
    href: "/luxury-himalayan-retreat",
  },
  {
    id: "corporate-retreat",
    label: "Corporate Retreat",
    href: "/corporate-retreat",
  },
  {
    id: "gallery",
    label: "Our Gallery",
    href: "/gallery",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];