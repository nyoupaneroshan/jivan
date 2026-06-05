// src/app/page.tsx
import { HeroSlider } from "@/components/jivan/HeroSlider";
import { ProgramsSection } from "@/components/jivan/ProgramsSection";
import { MissionServices } from "@/components/jivan/MissionServicesSection";
import { GallerySection } from "@/components/jivan/GallerySection";
// import { HomePopup } from "@/components/jivan/HomePopup"; 

import { getGalleryImages } from '../utils/gallery-reader'; 

export default function HomePage() {
  const galleryImages = getGalleryImages();
  return (
    <main className="">
        {/* <HomePopup />   */}
      <HeroSlider />
      <ProgramsSection />
      {/* <AboutSection /> */}
      <MissionServices />
      <GallerySection/>  
    </main>
  );
}
