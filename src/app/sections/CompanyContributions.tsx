"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="bg-white py-24 border-y border-gray-100" id="company-contributions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">Company <br/>Contributions</h2>
            <div className="w-12 h-1 bg-orange-500 mt-6"></div>
          </div>
          <p className="text-gray-500 max-w-md md:text-right font-medium">
            Projects I&apos;ve contributed to at <strong className="text-black">PRODEV Info Solutions</strong>.
          </p>
        </div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {contributions.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-gray-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-56 relative overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-700 border border-gray-200 text-[10px] font-bold uppercase tracking-widest rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-black text-black uppercase tracking-wide mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 flex-grow leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
