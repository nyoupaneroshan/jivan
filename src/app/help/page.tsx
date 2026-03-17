import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { HelpContent } from "@/components/jivan/legal/HelpContent";

export const metadata = {
  title: "Help & Support - Jivan Parivartan",
  description: "Get help and support for your wellness journey at Jivan Parivartan",
};

export default function HelpPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Help & Support" },
  ];

  const sections = [
    {
      id: "getting-started",
      number: "1",
      title: "Getting Started",
      content: [
        "Welcome to Jivan Parivartan Holistic Wellness Center! We're here to guide you on your journey to wellness and spiritual growth.",
        "To begin, browse our programs including 200-hour and 500-hour Yoga Teacher Training, weekly meditation sessions, Reiki healing, and singing bowl therapy. Each program page provides detailed information about curriculum, schedule, and pricing.",
        "If you're new to yoga or wellness practices, we recommend starting with our introductory sessions or contacting us for personalized guidance on which program best suits your needs and experience level.",
      ],
    },
    {
      id: "booking",
      number: "2",
      title: "How to Book a Session or Program",
      content: [
        "Booking your wellness journey with us is simple and straightforward.",
        "For Yoga Teacher Training Programs: Visit the program page (200-hour or 500-hour), review the curriculum and schedule, then fill out the inquiry form or contact us directly. Our team will guide you through the enrollment process, payment options, and answer any questions.",
        "For Individual Sessions (Meditation, Reiki, Singing Bowl): Use the contact form on our website, call us at +977 9818514837, or send us a WhatsApp message. We'll confirm your preferred date and time within 24 hours.",
        "For Group Bookings or Corporate Retreats: Please contact us at least 2 weeks in advance to discuss your requirements, group size, and customization options.",
      ],
    },
    {
      id: "payment",
      number: "3",
      title: "Payment Methods and Installments",
      content: [
        "We accept multiple payment methods for your convenience: Bank Transfer (local and international), Cash payments at our center, Mobile payments through eSewa and Khalti.",
        "For Yoga Teacher Training programs, we offer flexible installment payment plans. You can pay in 2-3 installments with the first payment due upon registration and subsequent payments scheduled before program milestones.",
        "All fees are quoted in USD or NPR. Current exchange rates apply for international payments. Payment confirmations and receipts are provided for all transactions.",
        "If you need a customized payment plan due to financial circumstances, please contact us to discuss options. We're committed to making wellness accessible.",
      ],
    },
    {
      id: "schedule",
      number: "4",
      title: "Class Schedules and Timings",
      content: [
        "Yoga Teacher Training Programs: Full-time intensive programs run Monday through Saturday. Daily schedule typically includes morning practice (6:00-8:00 AM), theory sessions (9:00 AM-12:00 PM), lunch break, afternoon practice and teaching methodology (2:00-6:00 PM).",
        "Weekly Meditation Sessions: Available every morning from 6:00-8:00 AM. Drop-in sessions welcome, or register for monthly passes for better rates.",
        "Reiki and Healing Sessions: Available by appointment, Monday-Saturday. Evening slots (5:00-8:00 PM) and weekend morning slots available.",
        "Singing Bowl Therapy: Available by appointment. Group sessions can be arranged for 4+ participants.",
        "Private Sessions: Can be scheduled at flexible times based on instructor availability. Contact us to arrange.",
      ],
    },
    {
      id: "location",
      number: "5",
      title: "Location and How to Reach Us",
      content: [
        "We are located at Tarkeshwor-5, Kathmandu 44600, Nepal, in a serene environment perfect for yoga and meditation practice.",
        "By Taxi/Ride-sharing: Share our address with your driver. We're a well-known wellness center in the Tarkeshwor area.",
        "By Public Transport: Take a bus heading toward Tarkeshwor from Ratna Park or Old Bus Park. Get down at Tarkeshwor-5 and ask locals for Jivan Parivartan—we're within walking distance.",
        "By Private Vehicle: Parking is available on-site for students and visitors.",
        "For first-time visitors, we recommend calling us when you're nearby (+977 9818514837) and we'll guide you to our exact location.",
      ],
    },
    {
      id: "accommodation",
      number: "6",
      title: "Accommodation for Training Programs",
      content: [
        "For residential Yoga Teacher Training programs, accommodation is included in the program fee (check specific program details).",
        "We offer both shared rooms (2-3 students) and private rooms based on availability and your preference. All rooms are clean, comfortable, and conducive to rest and study.",
        "Accommodation includes: Clean bedding and towels, shared or attached bathrooms, common study area, WiFi access, and secure storage for belongings.",
        "Check-in is typically the day before the program starts, and check-out is the day after completion. If you need early arrival or late departure, let us know in advance—we'll do our best to accommodate.",
        "Local guesthouses and hotels are also available nearby if you prefer external accommodation. We can provide recommendations.",
      ],
    },
    {
      id: "meals",
      number: "7",
      title: "Meals and Dietary Requirements",
      content: [
        "All residential programs include vegetarian meals—breakfast, lunch, and dinner—prepared with fresh, local ingredients.",
        "Our meals are designed to support your yoga practice: light, nutritious, and sattvic (promoting clarity and calmness).",
        "We accommodate dietary restrictions and preferences including vegan, gluten-free, allergies, and religious requirements. Please inform us at registration so we can prepare accordingly.",
        "Meal times are scheduled to align with practice sessions. We encourage mindful eating as part of the yogic lifestyle.",
        "Drinking water, herbal teas, and light snacks are available throughout the day.",
      ],
    },
    {
      id: "what-to-bring",
      number: "8",
      title: "What to Bring",
      content: [
        "For Yoga Sessions: Comfortable, breathable clothing (leggings, loose pants, t-shirts), personal yoga mat (though mats are provided), water bottle, towel, notebook and pen for theory sessions.",
        "For Residential Programs: Personal toiletries, comfortable clothing for daily wear, layers for cooler mornings/evenings, any personal medications, flip-flops or sandals for indoor use.",
        "Optional Items: Your own meditation cushion if you have one, personal books or journals, camera (photography allowed in designated areas with permission).",
        "What Not to Bring: Alcohol, tobacco, non-vegetarian food, loud music devices, excessive valuables (we have safe storage but prefer you minimize valuables).",
      ],
    },
    {
      id: "cancellation",
      number: "9",
      title: "Cancellation and Rescheduling",
      content: [
        "We understand plans can change. Here's our policy:",
        "For Training Programs: Cancellations 30+ days before start: 90% refund. Cancellations 15-29 days before: 50% refund. Less than 15 days: No refund. See our full Terms and Conditions for details.",
        "For Individual Sessions: Cancel or reschedule up to 24 hours before your appointment for a full refund or credit. Cancellations with less notice may incur a fee.",
        "Medical Emergencies: We understand emergencies happen. Contact us with documentation, and we'll work with you on a case-by-case basis.",
        "Rescheduling: If you need to move to a different program batch, let us know at least 2 weeks in advance. We'll transfer your enrollment based on availability.",
      ],
    },
    {
      id: "certification",
      number: "10",
      title: "Certification and Credentials",
      content: [
        "Upon successful completion of our Yoga Teacher Training programs, you will receive a certificate from Jivan Parivartan, recognized for teaching yoga.",
        "Our 200-hour and 500-hour programs follow traditional yogic curriculum and may be affiliated with international yoga alliances. Check specific program details for accreditation information.",
        "Certification Requirements: Attend 90%+ of all sessions, pass practical and written assessments, complete teaching practicum, submit all assignments, and clear all fee payments.",
        "Certificates are issued within 30 days of program completion. Digital copies are available immediately; physical certificates are mailed or available for pickup.",
        "If you lose your certificate, replacement certificates can be issued for a nominal administrative fee.",
      ],
    },
    {
      id: "health-safety",
      number: "11",
      title: "Health and Safety Guidelines",
      content: [
        "Your safety and well-being are our top priority.",
        "Health Disclosure: Please inform us of any medical conditions, injuries, or physical limitations during registration. This helps our instructors provide appropriate modifications.",
        "Practice Safely: Yoga involves physical activity. Always practice within your limits, communicate any discomfort to instructors, and never push through pain.",
        "Hygiene: We maintain clean practice spaces and accommodation. Please help us by respecting cleanliness, removing shoes in practice areas, and using provided mats and props mindfully.",
        "First Aid: Basic first aid is available on-site. For serious medical needs, we're close to hospitals and clinics.",
        "COVID-19 and Health Protocols: We follow current health guidelines. If you're feeling unwell, please inform us and rest—we'll help you catch up on missed sessions.",
      ],
    },
    {
      id: "code-of-conduct",
      number: "12",
      title: "Community Guidelines and Conduct",
      content: [
        "Jivan Parivartan is a space of peace, learning, and mutual respect. We ask all participants to:",
        "Be Respectful: Treat instructors, staff, and fellow students with kindness and respect. Discrimination or harassment of any kind is not tolerated.",
        "Be Punctual: Arrive on time for sessions. Late arrivals disrupt the practice environment.",
        "Maintain Silence: Keep practice areas quiet. Silence is encouraged during meals and in accommodation areas during rest hours (10 PM - 6 AM).",
        "No Substances: Alcohol, tobacco, and non-vegetarian food are not permitted on premises, in alignment with yogic principles.",
        "Participate Fully: Engage in all sessions with an open heart and mind. Yoga is a journey of self-discovery—embrace it fully.",
      ],
    },
    {
      id: "technical-support",
      number: "13",
      title: "Website and Technical Support",
      content: [
        "Having trouble with our website, online booking, or digital materials? We're here to help.",
        "If you encounter issues with: Online forms not submitting, payment processing errors, accessing digital course materials, or general website navigation—contact our technical support.",
        "Reach our technical team: Email: roshan@jivanparivartan.com, Phone/WhatsApp: +977 9818514837 (mention 'technical support')",
        "We typically respond within 24 hours on business days. For urgent enrollment issues, call us directly.",
      ],
    },
    {
      id: "contact",
      number: "14",
      title: "Contact Us",
      content: [
        "We're here to answer your questions and support your wellness journey.",
        "Phone/WhatsApp: +977 9818514837, +977 9863049261 (Call or message us anytime)",
        "Email: info@jivanparivartan.com (We respond within 24 hours)",
        "Visit Us: Tarkeshwor-5, Kathmandu 44600, Nepal (Open Monday-Sunday, 9:00 AM - 9:00 PM; Sunday by appointment)",
        "Online: Fill out the contact form on our website, and we'll get back to you promptly.",
        "Social Media: Follow us on Facebook, Instagram, and YouTube for updates, tips, and community inspiration.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "💬", text: "We're Here to Help" }}
        title="Help & Support"
        subtitle="Find answers to your questions and get the support you need"
        variant="green"
      />

      <HelpContent sections={sections} />
    </div>
  );
}
