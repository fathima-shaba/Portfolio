"use client";

import { motion } from "framer-motion";

export default function IntroductionSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="introduction">
      <div className="grid grid-cols-1">
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Profile</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-default mb-4">Introduction</h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-prose">
              I'm Fathima Shaba, a frontend developer from Perinthalmanna. I build modern, animated portfolios and web applications using React, HTML, CSS, and clean developer tooling in VS Code.
            </p>
        </div>
      </div>
    </section>
  );
}
