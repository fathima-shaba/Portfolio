"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default md:col-span-2">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-default">Recent Work</h2>
        </div>
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <div className="flex flex-col gap-1 w-full mb-4">
              <span className="text-sm font-semibold text-text-default">Frontend Project Lead</span>
              <span className="text-xs text-text-muted">Academic & Personal Projects</span>
            </div>
            <p className="text-sm text-text-muted mb-4 leading-relaxed font-light">
              Designed and implemented responsive web interfaces for academic and personal projects using React and modern CSS techniques.
            </p>
            <ul className="flex flex-col gap-2 w-full text-sm">
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">01</span> Created reusable component libraries
              </li>
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">02</span> Optimized performance for mobile
              </li>
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">03</span> Implemented accessibility
              </li>
            </ul>
        </div>
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <div className="flex flex-col gap-1 w-full mb-4">
              <span className="text-sm font-semibold text-text-default">UI Developer</span>
              <span className="text-xs text-text-muted">Modern Web Applications</span>
            </div>
            <p className="text-sm text-text-muted mb-4 leading-relaxed font-light">
              Built polished page layouts, visual hierarchy, and intuitive interfaces for modern web applications.
            </p>
            <ul className="flex flex-col gap-2 w-full text-sm">
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">01</span> Collaborated on project planning
              </li>
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">02</span> Focused on clarity
              </li>
              <li className="flex items-center gap-3 border-t border-border-default pt-2 text-text-muted">
                <span className="text-xs text-text-faint uppercase tracking-widest">03</span> Delivered pixel-perfect design
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
