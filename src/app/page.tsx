import Header from "@/app/layouts/Header";
import {
  CoverPageSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from "@/app/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full flex flex-1 flex-col overflow-x-hidden">
        <CoverPageSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
