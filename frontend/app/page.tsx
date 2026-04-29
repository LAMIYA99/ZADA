import BannerSection from "@/components/sections/home/BannerSection";
import SolutionSection from "@/components/sections/home/SolutionSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";
import WhatSection from "@/components/sections/home/WhatSection";
import WhySection from "@/components/sections/home/WhySection";
import ClientSection from "@/components/sections/home/ClientSection";
import MeetSection from "@/components/sections/home/MeetSection";
import RecentSection from "@/components/sections/home/RecentSection";
import TouchSection from "@/components/sections/home/TouchSection";
import PartnersSection from "@/components/sections/home/PartnersSection";

export default function Home() {
  return (
    <main className="relative">
      <BannerSection />
      <SolutionSection />
      <FeaturedSection />
      <WhatSection />
      <WhySection />
      <ClientSection />
      <MeetSection />
      <PartnersSection />
      <RecentSection />
      <TouchSection />
    </main>
  );
}
