import Header from "@/app/layouts/Header";
import {
  CoverPageSection,
  IntroductionSection,
  AboutMeSection,
  VisionMissionSection,
  EducationSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
  FooterSection,
} from "@/app/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <CoverPageSection />
        <IntroductionSection />
        <AboutMeSection />
        <VisionMissionSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
