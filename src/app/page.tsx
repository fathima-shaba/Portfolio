import Header from "@/app/layouts/Header";
import {
  CoverPageSection,
  AboutMeSection,
  VisionMissionSection,
  EducationSection,
  SkillsSection,
  ExperienceSection,
  CompanyContributionsSection,
  ContactSection,
} from "@/app/sections";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="mx-auto w-full flex flex-1 flex-col overflow-x-hidden relative z-10">
        <CoverPageSection />
        <AboutMeSection />
        <VisionMissionSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <CompanyContributionsSection />
        <ContactSection />
      </main>
    </>
  );
}
