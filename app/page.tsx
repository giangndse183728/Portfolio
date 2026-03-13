import Hero from "@/components/sections/Hero";
import AboutMeSection from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjectBanner from "@/components/sections/FeaturedProjectBanner";
import HighlightProject from "@/components/sections/HighlightProject";
import MyContact from "@/components/sections/MyContact";

export default function Home() {
  return (
    <main className="space-y-4">
      <Hero />
      <AboutMeSection />
      <TechStack />
      <FeaturedProjectBanner />
      <HighlightProject />
      <MyContact />
    </main>
  );
}
