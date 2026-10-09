"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "JavaScript", "React", "HTML & CSS", "Responsive Design",
    "Git", "UI/UX", "Vite", "Accessibility"
  ];

  return (
    <section className="mx-auto w-full max-w-[1600px]" id="skills">
      <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default">
        <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
        <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
        
        <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Capabilities</p>
        <h2 className="text-3xl font-semibold tracking-tight text-text-default mb-6">Key Skills</h2>
        
        <div className="flex flex-wrap gap-2 w-full max-w-4xl">
          {skills.map((skill, index) => (
            <span key={index} className="inline-flex items-center whitespace-nowrap rounded-full border border-border-strong px-4 py-1.5 text-sm font-medium tracking-wide transition-colors text-text-default bg-surface hover:bg-muted">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
