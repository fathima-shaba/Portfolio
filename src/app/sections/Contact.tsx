"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full inverted-section min-h-[80vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-24 pb-12 relative overflow-hidden" id="contact">
      
      {/* Decorative Sky Image Overlay if needed - mimicking Pamidor's footer bg */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
        <img src="/sky-placeholder.jpg" alt="" className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
      </div>
      
      <div className="max-w-[1600px] mx-auto w-full relative z-10 flex-grow flex flex-col justify-center items-center text-center">
        <h2 className="text-[12vw] font-bold tracking-tighter leading-none uppercase text-text-default mb-8 hover:text-accent transition-colors duration-500">
          OPEN THE DOOR
        </h2>
        
        <a href="mailto:fathimashaba674@gmail.com" className="text-xl md:text-3xl font-semibold border-b-2 border-text-default pb-1 hover:text-accent hover:border-accent transition-colors">
          fathimashaba674@gmail.com
        </a>
        
        <p className="mt-8 text-text-muted font-light">
          No spam. A real reply, usually the same day.
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-border-default pt-8 gap-8 md:gap-0">
          
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-text-muted font-bold">Somewhere between structure and instinct.</p>
          </div>
          
          <div className="flex gap-8">
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">LINKEDIN</a>
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">GITHUB</a>
             <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">RESUME</a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
