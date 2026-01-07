import ContactHero from "@/components/jivan/contact/ContactHero";
import ContactInfoGrid from "@/components/jivan/contact/ContactInfoGrid";
import ContactMain from "@/components/jivan/contact/ContactMain";
import FAQSection from "@/components/jivan/contact/FAQSection";

import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import SocialSection from "@/components/jivan/contact/SocialSection";
 

export const metadata = {
  title: "Contact Us - Jivan Parivartan",
};

export default function ContactPage() {
  return (
   <div className="min-h-screen bg-[#faf6f1] bg-[url('/img/design/color-page.jpg')] bg-repeat bg-center">

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      <ContactHero />

      {/* container sits up into hero like your PHP (-80px) */}
      <div className="w-[92%] max-w-[1400px] mx-auto px-0 relative z-10 -mt-20 pb-16">
        <ContactInfoGrid />
        <ContactMain />
        <FAQSection />
        <SocialSection />
      </div>
    </div>
  );
}
