// src/app/page.tsx
import { HeroSlider } from "@/components/jivan/HeroSlider";
import { ProgramsSection } from "@/components/jivan/ProgramsSection";
import { MissionServices } from "@/components/jivan/MissionServicesSection";
import { GallerySection } from "@/components/jivan/GallerySection";

import { getGalleryImages } from '../utils/gallery-reader'; // <-- Import the utility

export default function HomePage() {
  const galleryImages = getGalleryImages();
  return (
    <main className="">
      <HeroSlider />
      <ProgramsSection />
      {/* <AboutSection /> */}
      <MissionServices />
      <GallerySection images={galleryImages} />
    </main>
  );
}
