"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="vision-mission">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-t border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Goal</p>
            <h3 className="text-3xl font-semibold text-text-default mb-2">Vision</h3>
            <p className="text-base text-text-muted leading-relaxed">
              To build elegant digital experiences that help people connect with ideas, products, and careers in a meaningful way.
            </p>
        </div>
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Objective</p>
            <h3 className="text-3xl font-semibold text-text-default mb-2">Mission</h3>
            <p className="text-base text-text-muted leading-relaxed">
              To deliver polished interfaces that are accessible, responsive, and thoughtfully coded for a better web experience.
            </p>
        </div>
      </div>
    </section>
  );
}
