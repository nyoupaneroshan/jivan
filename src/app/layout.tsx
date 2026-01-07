import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/jivan/SiteShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jivan Parivartan - Holistic Wellness & Transformation Center",
  description: "At Jivan Parivartan, we are dedicated to providing a sanctuary for healing, transformation, and holistic well-being. Experience Yoga, Reiki, Singing Bowl Therapy, and more.",
  keywords: "yoga, reiki, singing bowl, meditation, retreat, wellness, Nepal, Kathmandu, holistic healing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}