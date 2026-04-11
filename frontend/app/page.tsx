import BannerSection from "@/components/sections/home/BannerSection";
import SolutionSection from "@/components/sections/home/SolutionSection";
import FeaturedSection from "@/components/sections/home/FeaturedSection";
import WhatSection from "@/components/sections/home/WhatSection";
import WhySection from "@/components/sections/home/WhySection";

export default function Home() {
  return (
    <main className="relative">
      <BannerSection />
      <SolutionSection />
      <FeaturedSection />
      <WhatSection />
      <WhySection />
    </main>
  );
}
