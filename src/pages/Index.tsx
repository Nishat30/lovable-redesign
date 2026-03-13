import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { AboutSection } from "@/components/AboutSection";
import { NewsSection } from "@/components/NewsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { VideoSection } from "@/components/VideoSection";
import { AcademyScrollbar } from "@/components/AcademyScrollbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ActivitySection } from "@/components/ActivitySection";
import { SocialSection } from "@/components/SocialSection";
import { WorldMapSection } from "@/components/WorldMapSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AcademyScrollbar />
        <AchievementsSection />
        <VideoSection />
        <ActivitySection />
        <WorldMapSection />
        <TeamSection />
        <NewsSection />
        <NewsletterSection />
        <SocialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
