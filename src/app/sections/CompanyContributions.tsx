"use client";

import ProjectCarousel from "@/app/components/ProjectCarousel";

export default function CompanyContributionsSection() {
  const contributions = [
    {
      title: "FAREMO — Bus Ticketing App",
      description: "A comprehensive bus ticketing application used for intercity travel. Features include interactive bus routes, seat selection, and digital ticketing.",
      image: "/images/projects/faremo-bus-ticketing.png",
      tags: ["React", "UI/UX", "Mobile"],
    },
    {
      title: "TES — Talent Extraction System",
      description: "A platform designed for students to identify and showcase their talents. Includes personalized student profiles and skills assessment analytics.",
      image: "/images/projects/tes-student-dashboard.png",
      tags: ["Web", "Dashboard", "Education"],
    },
    {
      title: "NeedleWork — Clothing Brand",
      description: "A premium e-commerce website for the NeedleWork clothing brand. Showcases an elegant fashion aesthetic with clean product presentation.",
      image: "/images/projects/needlework-clothing.png",
      tags: ["E-Commerce", "Fashion"],
    },
    {
      title: "TRP — Clothing Brand",
      description: "A distinct, high-end fashion website for the TRP brand, maintaining a cohesive brand identity with sophisticated design.",
      image: "/images/projects/trp-fashion-brand.png",
      tags: ["E-Commerce", "Fashion"],
    },
    {
      title: "MES ITI Mundur — College Website",
      description: "An official college website built for MES ITI Mundur. Features campus photography, academic program details, and student information.",
      image: "/images/projects/mes-iti-mundur.png",
      tags: ["Education", "Web"],
    },
    {
      title: "PRODEV Info Solutions",
      description: "The official corporate website for PRODEV Info Solutions, showcasing enterprise IT services and business solutions.",
      image: "/images/projects/prodev-info-solutions.png",
      tags: ["Corporate", "IT Services"],
    },
    {
      title: "MES Kerala — Educational Site",
      description: "A comprehensive educational portal for MES Kerala, designed to highlight academic excellence and student resources.",
      image: "/images/projects/mes-kerala.png",
      tags: ["Education", "Portal"],
    }
  ];

  return (
    <section className="bg-transparent py-24 border-y border-zinc-200 dark:border-zinc-800" id="company-contributions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Company <br/>Contributions</h2>
            <div className="w-12 h-1 bg-cyan-500 mt-6"></div>
          </div>
        </div>

        <div className="w-full mt-12 mb-8">
          <ProjectCarousel projects={contributions} />
        </div>

      </div>
    </section>
  );
}
