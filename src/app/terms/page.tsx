import React from "react";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import { PageHero } from "@/components/jivan/PageHero";
import { TermsContent } from "@/components/jivan/legal/TermsContent";



export const metadata = {
  title: "Terms and Conditions - Jivan Parivartan",
  description: "Terms and conditions for Jivan Parivartan Holistic Wellness Center services",
};

export default function TermsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms and Conditions" },
  ];

  const sections = [
    {
      id: "acceptance",
      number: "1",
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the services provided by Jivan Parivartan Holistic Wellness Center, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our services, including yoga teacher training programs, wellness sessions, meditation classes, and all other offerings.",
      ],
    },
    {
      id: "enrollment",
      number: "2",
      title: "Program Enrollment and Registration",
      content: [
        "All enrollments for yoga teacher training programs (200-hour and 500-hour) and other courses require completion of the registration form and payment of applicable fees.",
        "Registration is confirmed only upon receipt of the required deposit or full payment as specified in the course details.",
        "Participants must meet any prerequisites specified for advanced programs and provide accurate information during registration.",
        "We reserve the right to cancel or reschedule programs due to insufficient enrollment or unforeseen circumstances. In such cases, full refunds will be provided.",
      ],
    },
    {
      id: "payment",
      number: "3",
      title: "Payment Terms",
      content: [
        "Payment can be made via bank transfer, cash, or approved mobile payment methods (eSewa, Khalti).",
        "For yoga teacher training programs, installment payment plans are available. The payment schedule must be agreed upon before the program start date.",
        "All fees are quoted in USD or NPR as specified and are subject to applicable taxes.",
        "Failure to complete payment according to the agreed schedule may result in suspension from the program without refund of amounts already paid.",
      ],
    },
    {
      id: "refund",
      number: "4",
      title: "Cancellation and Refund Policy",
      content: [
        "Cancellations made 30 days or more before the program start date: 90% refund (10% administrative fee applies).",
        "Cancellations made 15-29 days before the program start date: 50% refund.",
        "Cancellations made less than 15 days before the program start date: No refund.",
        "Refunds are not provided for no-shows or voluntary withdrawal after the program has commenced.",
        "In case of medical emergencies with proper documentation, special consideration may be given on a case-by-case basis.",
        "Refunds will be processed within 15-30 business days and returned via the original payment method.",
      ],
    },
    {
      id: "conduct",
      number: "5",
      title: "Code of Conduct",
      content: [
        "All participants must maintain respectful, professional behavior toward instructors, staff, and fellow students.",
        "Discrimination, harassment, or disruptive behavior of any kind will not be tolerated and may result in immediate dismissal from the program without refund.",
        "Participants are expected to follow the schedule, arrive on time, and participate fully in all sessions.",
        "Consumption of alcohol, tobacco, or illegal substances on the premises is strictly prohibited.",
        "The practice environment must be kept clean, quiet, and conducive to learning and meditation.",
      ],
    },
    {
      id: "health",
      number: "6",
      title: "Health and Safety",
      content: [
        "Participants must disclose any pre-existing medical conditions, injuries, or physical limitations during registration.",
        "Yoga and wellness practices involve physical activity. Participants engage at their own risk and should consult a healthcare provider before beginning any new physical program.",
        "Instructors will provide modifications and guidance, but it is the participant's responsibility to practice within their own limits and communicate any discomfort.",
        "Jivan Parivartan is not liable for injuries sustained during practice, except in cases of proven negligence.",
        "Basic first aid is available on-site. Participants are responsible for their own health insurance coverage.",
      ],
    },
    {
      id: "accommodation",
      number: "7",
      title: "Accommodation and Meals",
      content: [
        "When accommodation is included in the program fee, it covers shared or private rooms as specified in the program details.",
        "Accommodation is provided for the duration of the program only. Early arrival or late departure may incur additional charges.",
        "Vegetarian meals are provided as part of residential programs. Special dietary requirements must be communicated at the time of registration and will be accommodated where possible.",
        "Participants are responsible for keeping their accommodation clean and respecting quiet hours.",
        "Any damage to property or facilities will be charged to the participant responsible.",
      ],
    },
    {
      id: "certification",
      number: "8",
      title: "Certification Requirements",
      content: [
        "To receive certification, participants must attend at least 90% of all scheduled sessions.",
        "Successful completion of all practical assessments, written exams, and teaching practicum is required.",
        "Certification is issued by Jivan Parivartan and may be affiliated with recognized yoga alliances as specified in program materials.",
        "Certificates are issued within 30 days of program completion after all fees are fully paid.",
        "Replacement certificates can be requested for a nominal administrative fee.",
      ],
    },
    {
      id: "intellectual",
      number: "9",
      title: "Intellectual Property",
      content: [
        "All course materials, handouts, videos, and proprietary teaching methods are the intellectual property of Jivan Parivartan and its instructors.",
        "Participants may use materials for personal study and teaching practice but may not reproduce, distribute, or sell any materials without written permission.",
        "Recording of classes (audio or video) is not permitted without prior authorization from the instructor.",
        "The Jivan Parivartan name, logo, and branding may not be used for commercial purposes without written consent.",
      ],
    },
    {
      id: "privacy",
      number: "10",
      title: "Privacy and Data Protection",
      content: [
        "Personal information collected during registration is used solely for program administration, communication, and record-keeping.",
        "We do not sell or share your personal information with third parties except as required by law.",
        "Photographs or videos taken during programs may be used for promotional purposes unless you opt out in writing.",
        "You have the right to request access to, correction of, or deletion of your personal data by contacting us at info@jivanparivartan.com.",
      ],
    },
    {
      id: "liability",
      number: "11",
      title: "Limitation of Liability",
      content: [
        "Jivan Parivartan and its instructors are not liable for any indirect, incidental, or consequential damages arising from participation in our programs.",
        "Our liability is limited to the amount of fees paid by the participant for the specific program in question.",
        "We are not responsible for loss or damage to personal belongings. Participants should secure their valuables.",
        "Force majeure events (natural disasters, government actions, pandemics, etc.) that prevent program delivery will result in rescheduling or refunds at our discretion.",
      ],
    },
    {
      id: "changes",
      number: "12",
      title: "Changes to Programs and Terms",
      content: [
        "We reserve the right to modify program schedules, content, instructors, or venue as necessary to maintain quality standards.",
        "Participants will be notified of significant changes as soon as possible. If changes are material, participants may request a full refund.",
        "These terms and conditions may be updated periodically. Continued use of our services constitutes acceptance of updated terms.",
        "The most current version of these terms is always available on our website.",
      ],
    },
    {
      id: "governing",
      number: "13",
      title: "Governing Law and Disputes",
      content: [
        "These terms are governed by the laws of Nepal.",
        "Any disputes arising from these terms or your use of our services will be resolved through good faith negotiation.",
        "If negotiation fails, disputes will be subject to the exclusive jurisdiction of the courts in Kathmandu, Nepal.",
      ],
    },
    {
      id: "contact",
      number: "14",
      title: "Contact Information",
      content: [
        "For questions regarding these terms and conditions, please contact us:",
        "Jivan Parivartan Holistic Wellness Center",
        "Tarkeshwor-5, Kathmandu 44600, Nepal",
        "Phone: +977 9818514837, 9863049261",
        "Email: info@jivanparivartan.com",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">
      <Breadcrumb items={breadcrumbItems} />

      <PageHero
        badge={{ icon: "📋", text: "Legal Information" }}
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our services"
        variant="green"
      />

      <TermsContent sections={sections} />
    </div>
  );
}
