"use client";

import ProjectCarousel from "@/app/components/ProjectCarousel";

export default function ExperienceSection() {
  const projects = [
    {
      title: "Multi-Vendor E-Commerce Website",
      description: "A comprehensive multi-vendor platform providing a seamless online shopping experience. Features include complete product listings, shopping cart, user authentication, and product management all within a highly responsive UI.",
      image: "/images/projects/ecommerce-showcase.png",
      tags: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/fathima-shaba",
      live: "#"
    },
    {
      title: "Retreat Hostel Website",
      description: "A welcoming, premium website developed for Retreat hostel. Showcases the hostel's modern design, responsive accommodation layouts, and essential information in an elegant, hospitality-focused interface.",
      image: "/images/projects/retreat-hostel-showcase.png",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/fathima-shaba",
      live: "#"
    },
    {
      title: "TRP Dress Brand Website",
      description: "A sophisticated fashion e-commerce storefront for TRP. Features a clean, brand-focused identity with stylish product presentations, responsive grids, and a premium editorial shopping aesthetic.",
      image: "/images/projects/trp-fashion-showcase.png",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/fathima-shaba",
      live: "#"
    }
  ];

  return (
    <section className="bg-transparent py-24 border-y border-zinc-200 dark:border-zinc-800" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">Featured <br/>Projects</h2>
            <div className="w-12 h-1 bg-cyan-500 mt-6"></div>
          </div>
        </div>

        <div className="w-full mt-12 mb-8">
          <ProjectCarousel projects={projects} />
        </div>

      </div>
    </section>
  );
}
