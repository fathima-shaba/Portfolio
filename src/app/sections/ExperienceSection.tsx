"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  const projects = [
    { title: "Rise", role: "Frontend · Product · Marketing", timeline: "17 Months", year: "2025-2026", team: "In-House Studio" },
    { title: "Figcoms", role: "Frontend & Product Design", timeline: "4 Months", year: "2025", team: "Co-Founder" },
    { title: "iMotion", role: "Frontend & Product Designer", timeline: "3 Months", year: "2025", team: "Co-founded studio" },
    { title: "Portfolio System", role: "Architecture Design", timeline: "Ongoing", year: "2026", team: "Solo (external)" }
  ];

  return (
    <section className="w-full bg-surface px-6 md:px-12 lg:px-24 py-12 md:py-24" id="work">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex justify-between items-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-text-muted">(CLIENTS & COLLABORATIONS)</span>
        </div>
        
        <div className="flex flex-col border-t border-border-default">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 lg:py-12 border-b border-border-default hover:bg-muted transition-colors px-4 -mx-4 cursor-pointer">
              
              <div className="flex-1 min-w-[200px] mb-6 lg:mb-0">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-text-default group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="mt-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-300">
                   <a href="#" className="btn-flat btn-flat-secondary inline-flex text-xs">
                     Jump To Project <span className="ml-2">-&gt;</span>
                   </a>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 md:grid-cols-4 w-full gap-4 lg:gap-8 opacity-70 group-hover:opacity-100 transition-opacity">
                 <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(ROLE)</span>
                   <span className="text-sm font-semibold">{project.role}</span>
                 </div>
                 <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(TIMELINE)</span>
                   <span className="text-sm font-semibold">{project.timeline}</span>
                 </div>
                 <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(YEAR)</span>
                   <span className="text-sm font-semibold">{project.year}</span>
                 </div>
                 <div className="flex flex-col gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(TEAM)</span>
                   <span className="text-sm font-semibold">{project.team}</span>
                 </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
