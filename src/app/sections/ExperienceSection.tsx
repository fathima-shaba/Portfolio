"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="bg-gray-50 py-24 border-y border-gray-100" id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight">Featured <br/>Projects</h2>
            <div className="w-12 h-1 bg-orange-500 mt-6"></div>
          </div>
          <p className="text-gray-500 max-w-md md:text-right">
            A showcase of my recent professional work, featuring clean design, robust architecture, and responsive user experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects">
          
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full h-56 relative overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-50 text-gray-700 border border-gray-200 text-[10px] font-bold uppercase tracking-widest rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-black text-black uppercase tracking-wide mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.live} className="text-[10px] font-black text-white bg-black px-6 py-3 rounded uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-black border border-gray-200 px-6 py-3 rounded uppercase tracking-widest hover:bg-gray-50 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
