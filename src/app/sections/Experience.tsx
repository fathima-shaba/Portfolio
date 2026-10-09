"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="education">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <div className="flex flex-col gap-1 w-full mb-4">
              <span className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Education</span>
              <span className="text-xl font-semibold text-text-default">Calicut University</span>
            </div>
            <p className="text-sm text-text-muted mb-2 font-semibold">Bachelor of Computer Science</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Ongoing coursework in software development, data structures, and web technologies.
            </p>
        </div>
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <div className="flex flex-col gap-1 w-full mb-4">
              <span className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Specialization</span>
              <span className="text-xl font-semibold text-text-default">Web Development</span>
            </div>
            <p className="text-sm text-text-muted mb-2 font-semibold">React, JavaScript, HTML, CSS</p>
            <p className="text-sm text-text-muted leading-relaxed">
              Practical projects focused on responsive, user-first frontends.
            </p>
        </div>
      </div>
    </section>
  );
}
