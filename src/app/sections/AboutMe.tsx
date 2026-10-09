"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col items-start gap-cozy p-roomy md:col-span-1 lg:col-span-1">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-default mb-4">Professional Summary</h2>
            <p className="text-base text-text-muted leading-relaxed">
              I'm a frontend developer with a strong computer science foundation from Calicut University. I create modern, responsive web applications using React, HTML, CSS, Java, C, and C++.
            </p>
        </div>
        
        <div className="relative flex flex-col items-start gap-cozy p-roomy md:col-span-1 lg:col-span-1 border-t md:border-t-0 md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-4">Core Expertise</p>
            <ul className="flex flex-col gap-4 w-full">
              <li className="flex flex-col gap-1 border-b border-border-default pb-4">
                <span className="text-sm font-semibold text-text-default">Frontend Architecture</span>
                <span className="text-xs text-text-muted">React and responsive design</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-border-default pb-4">
                <span className="text-sm font-semibold text-text-default">Modern UX/UI</span>
                <span className="text-xs text-text-muted">Dark/light theme support</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text-default">Clean Tooling</span>
                <span className="text-xs text-text-muted">VS Code, animation, polish</span>
              </li>
            </ul>
        </div>

        <div className="relative flex flex-col items-start gap-cozy p-roomy md:col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-4">Academic Background</p>
            <ul className="flex flex-col gap-4 w-full">
              <li className="flex flex-col gap-1 border-b border-border-default pb-4">
                <span className="text-sm font-semibold text-text-default">Computer Science</span>
                <span className="text-xs text-text-muted">Calicut University</span>
              </li>
              <li className="flex flex-col gap-1 border-b border-border-default pb-4">
                <span className="text-sm font-semibold text-text-default">Core Languages</span>
                <span className="text-xs text-text-muted">Java, C, and C++</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text-default">Focus</span>
                <span className="text-xs text-text-muted">Polished, professional UI</span>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
