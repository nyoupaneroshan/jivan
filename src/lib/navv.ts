export interface NavItem {
  id: string;
  label: string;
  href: string;
  type?: "dropdown" | "mega";
  children?: NavItem[];
  items?: NavItem[];
  isGroup?: boolean; // Add this to identify group headers
}

export const navigationMenu: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },

  /* ================= YOGA (MEGA MENU) ================= */
  {
    id: "yoga",
    label: "Yoga",
    href: "/yoga",
    type: "mega",
    children: [
      {
        id: "yoga-200",
        label: "200 Hrs Yoga Teacher Training",
        href: "/yoga/200hrs-teacher-training",
        items: [
          { id: "200-ashtanga", label: "Astang Mahayoga", href: "/yoga/200hrs-teacher-training#ashtanga" },
          { id: "200-hatha", label: "Hatha Yoga", href: "/yoga/200hrs-teacher-training#hatha" },
          { id: "200-pranayama", label: "Pranayama", href: "/yoga/200hrs-teacher-training#pranayam" },
          { id: "200-mudra", label: "Mudra Meditation", href: "/yoga/200hrs-teacher-training#mudra" },
          { id: "200-meditation", label: "Meditation Technique", href: "/yoga/200hrs-teacher-training#meditation" },
          { id: "200-theory", label: "Theory", href: "/yoga/200hrs-teacher-training#theory" },
        ],
      },
      {
        id: "yoga-500",
        label: "500 Hrs Yoga Teacher Training",
        href: "/yoga/500hrs-teacher-training",
        items: [
          { id: "500-ashtanga", label: "Astang Mahayoga", href: "/yoga/500hrs-teacher-training#ashtanga" },
          { id: "500-hatha", label: "Hatha Yoga", href: "/yoga/500hrs-teacher-training#hatha" },
          { id: "500-pranayama", label: "Pranayama", href: "/yoga/500hrs-teacher-training#pranayam" },
          { id: "500-meditation", label: "Meditation Technique", href: "/yoga/500hrs-teacher-training#meditation" },
          { id: "500-mantra", label: "Mantra Sadhana", href: "/yoga/500hrs-teacher-training#mantra" },
          { id: "500-naturopathy", label: "Naturopathy", href: "/yoga/500hrs-teacher-training#naturopathy" },
        ],
      },
    ],
  },



  /* ================= RETREATS ================= */
  {
    id: "meditation",
    label: "Meditation & Retreats",
    href: "/meditation",
    type: "dropdown",
    children: [
      { id: "corporate", label: "Corporate Wellness Retreats", href: "/corporate-retreat" },
      { id: "spiritual", label: "Spiritual Retreats (1/3/5/7 Days)", href: "/retreat" },
      { id: "international", label: "International Luxury Retreats", href: "/foreign-retreat" },
      { id: "himalayan", label: "Himalayan Wellness Retreat", href: "/luxury-himalayan-retreat" },
    ],
  },

  /* ================= HEALING (DROPDOWN WITH SUBGROUPS) ================= */
  {
    id: "healing",
    label: "Healing",
    href: "/healing",
    type: "dropdown",
    children: [
      // Singing Bowl Healing Group
      {
        id: "singing-bowl-group",
        label: "Sound & Singing Bowl Healing",
        href: "/healing/singing-bowl",
        isGroup: true,
      },
      // { id: "sound-healing", label: "→ Sound & Singing Bowl Healing", href: "/healing/sound-healing" },
      { id: "vedic-sound", label: "→ Vedic Sound Healing (60 mins)", href: "/healing/vedic-sound-healing" },
      { id: "vedic-therapy", label: "→ Vedic Sound Therapy (60 mins)", href: "/healing/vedic-sound-therapy" },
      // { id: "mantra", label: "→ Mantra Healing (60 mins)", href: "/healing/mantra" },
      { id: "mudra-yantra", label: "→ Mantra,Mudra & Yantra Healing (30 mins)", href: "/healing/mudra-yantra" },
      { id: "tibetan", label: "→ Tibetan Sound Healing (60 mins)", href: "/healing/tibetan-sound-healing" },
      { id: "sound-massage", label: "→ Sound Massage Therapy (15 mins)", href: "/healing/sound-massage" },
      { id: "elements", label: "→ 5 Elements Balancing (30 mins)", href: "/healing/5-elements-balancing" },

      // Reiki Healing Group
      {
        id: "reiki-healing-group",
        label: "Reiki Healing",
        href: "/healing/reiki",
        isGroup: true,
      },
      { id: "reiki-energy", label: "→ Reiki Energy Healing (60 mins)", href: "/healing/reiki-energy-healing" },
    ],
  },

  /* ================= TRAINING (DROPDOWN) ================= */
  {
    id: "training",
    label: "Training",
    href: "/training",
    type: "dropdown",
    children: [
      // Reiki Training Main
      {
        id: "reiki-training",
        label: "Reiki Training",
        href: "/training/reiki",
        isGroup: true,
      },
      { id: "reiki-l1", label: "→ Reiki Level 1 (L1)", href: "/training/reiki-level-1" },
      { id: "reiki-l2", label: "→ Reiki Level 2 (L2)", href: "/training/reiki-level-2" },
      { id: "reiki-l3", label: "→ Reiki Master Level (L3)", href: "/training/reiki-master-level" },

      // Singing Bowl Training Main
      {
        id: "sb-training",
        label: "Singing Bowl Training",
        href: "/training/singing-bowl",
        isGroup: true,
      },
      { id: "sb-basic", label: "→ 3 Days Basic Course", href: "/training/singing-bowl/basic-3-days" },
      { id: "sb-advanced", label: "→ 7 Days Advanced Course", href: "/training/singing-bowl/advanced-7-days" },
    ],
  },

  {
    id: "blogs",
    label: "Blogs",
    href: "/blog",
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
