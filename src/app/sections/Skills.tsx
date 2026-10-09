"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { num: "01", title: "Frontend Architecture", desc: "From “we have an idea” to flows, prototypes and systems ready to grow." },
    { num: "02", title: "Brand & Art Direction", desc: "Identities with a point of view, built to be recognized, remembered and used." },
    { num: "03", title: "UX | UI", desc: "Clear interfaces for real behavior, weird edge cases and every screen in between." },
    { num: "04", title: "Motion & Polish", desc: "Motion and polish that explain, elevate and occasionally steal the show." }
  ];

  return (
    <section className="w-full inverted-section py-24 px-6 md:px-12 lg:px-24" id="skills">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text-default mb-16 uppercase">Skillset</h2>
        
        <div className="flex flex-col border-t border-border-default">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-start py-8 md:py-12 border-b border-border-default group hover:pl-4 transition-all duration-300">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-sm font-bold text-accent">{skill.num}</span>
              </div>
              <div className="md:w-3/4 flex flex-col gap-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-text-default">{skill.title}</h3>
                <p className="text-lg md:text-xl text-text-muted max-w-2xl font-light">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-xl md:text-2xl text-text-muted max-w-4xl mt-16 font-light leading-relaxed">
          Consistency, persistence, and visual problem solving that challenges perception and emotion.
        </p>
      </div>
    </section>
  );
}
