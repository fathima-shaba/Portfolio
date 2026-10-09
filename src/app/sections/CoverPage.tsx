"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CoverPageSection() {
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  return (
    <section className="relative mx-auto w-full max-w-widest overflow-hidden">
      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square max-h-[960px] max-w-[960px] overflow-visible md:mx-auto md:w-full w-full md:order-2 border-t md:border-t-0 md:border-l border-border-default">
           <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
           <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
           <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
           <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
           
           <div className="absolute inset-0 flex items-center justify-center p-roomy">
              <div className="w-full h-full rounded-full overflow-hidden border border-border-default/50">
                <img
                  src={photoSrc}
                  alt="Profile"
                  onError={() => setPhotoSrc("/profile-placeholder.svg")}
                  className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
           </div>
        </div>

        <div className="flex flex-col gap-roomy items-stretch relative z-10 p-roomy md:order-1 border-t md:border-t-0 border-border-default h-full justify-center">
          <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
          <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
          <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
          
          <div className="flex flex-col gap-snug items-stretch">
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-4">
              Frontend Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight xl:text-[6rem] leading-[1.1] text-text-default">
              Fathima<br />Shaba
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-prose leading-relaxed text-text-muted mt-6">
            I build polished, animated web experiences with React, modern CSS, and clean, responsive interfaces. Passionate about bringing elegant designs to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-start items-center mt-8">
            <a href="mailto:fathimashaba674@gmail.com" className="btn-flat btn-flat-primary">
              Let&apos;s talk
            </a>
            <a href="#about" className="btn-flat btn-flat-secondary">
              View Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="min-h-[2lh] md:min-h-0 text-xs font-medium uppercase tracking-widest text-text-faint">Projects Built</p>
            <p className="text-4xl md:text-5xl font-semibold tracking-tighter tabular-nums leading-none text-text-default">
              15<span className="text-text-faint text-3xl ml-1">+</span>
            </p>
          </div>
          <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="min-h-[2lh] md:min-h-0 text-xs font-medium uppercase tracking-widest text-text-faint">Technologies</p>
            <p className="text-4xl md:text-5xl font-semibold tracking-tighter tabular-nums leading-none text-text-default">
              12<span className="text-text-faint text-3xl ml-1">+</span>
            </p>
          </div>
          <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="min-h-[2lh] md:min-h-0 text-xs font-medium uppercase tracking-widest text-text-faint">Code Commits</p>
            <p className="text-4xl md:text-5xl font-semibold tracking-tighter tabular-nums leading-none text-text-default">
              500<span className="text-text-faint text-3xl ml-1">+</span>
            </p>
          </div>
          <div className="relative flex flex-col items-start gap-cozy p-roomy border-t md:border-l border-border-default">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="min-h-[2lh] md:min-h-0 text-xs font-medium uppercase tracking-widest text-text-faint">Passion</p>
            <p className="text-4xl md:text-5xl font-semibold tracking-tighter tabular-nums leading-none text-text-default">
              100<span className="text-text-faint text-3xl ml-1">%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
