"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type ProjectData = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
};

interface ProjectCarouselProps {
  projects: ProjectData[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -50 || velocity < -500) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else if (offset > 50 || velocity > 500) {
      setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  return (
    <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center overflow-visible" style={{ perspective: 1200 }}>
      <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            let offset = index - currentIndex;
            
            if (offset < -Math.floor(projects.length / 2)) {
              offset += projects.length;
            } else if (offset > Math.floor(projects.length / 2)) {
              offset -= projects.length;
            }

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;
            const direction = Math.sign(offset);
            const absOffset = Math.abs(offset);

            // Hide cards that are far away
            const x = `${offset * 85}%`;
            const scale = isCenter ? 1 : 0.85 - (absOffset * 0.05);
            const zIndex = 30 - absOffset;
            const rotateY = isCenter ? 0 : direction * -20;
            const opacity = isVisible ? (isCenter ? 1 : 0.5) : 0;

            return (
              <motion.div
                key={project.title}
                className={`absolute w-full h-full max-h-[500px] md:max-h-[600px] bg-zinc-950 rounded-[2rem] border border-white/5 shadow-2xl flex flex-col overflow-hidden ${isCenter ? 'cursor-grab active:cursor-grabbing' : (isVisible ? 'cursor-pointer pointer-events-auto' : 'pointer-events-none')}`}
                initial={false}
                animate={{ x, scale, zIndex, rotateY, opacity }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={isCenter ? handleDragEnd : undefined}
                onClick={() => isVisible && !isCenter && setCurrentIndex(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-indigo-950/60 pointer-events-none z-0"></div>
                
                <div className="relative w-full h-2/5 min-h-[180px] md:min-h-[220px] z-10 overflow-hidden bg-zinc-950">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
                </div>

                <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow pointer-events-none">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-zinc-400 flex-grow leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {(project.live || project.github) && (
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 pointer-events-auto">
                      {project.live && (
                        <a 
                          href={project.live} 
                          className="flex-1 text-center text-[10px] md:text-xs font-black text-zinc-950 bg-cyan-500 px-4 py-3 md:py-4 rounded-xl uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                        >
                          View Live
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex-1 text-center text-[10px] md:text-xs font-black text-white border border-white/10 bg-white/5 px-4 py-3 md:py-4 rounded-xl uppercase tracking-widest hover:bg-white/10 transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
