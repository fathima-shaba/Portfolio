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

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full flex flex-1 flex-col overflow-x-hidden bg-white">
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
