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
      <main className="mx-auto w-full max-w-none flex flex-1 flex-col overflow-x-clip px-4 md:px-8">
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
