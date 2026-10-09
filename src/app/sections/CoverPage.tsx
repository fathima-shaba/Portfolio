"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CoverPageSection() {
  const [photoSrc, setPhotoSrc] = useState("/profile.jpg");

  return (
    <section className="relative w-full overflow-hidden border-b border-border-default">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between p-roomy md:p-12 lg:p-24 border-b md:border-b-0 md:border-r border-border-default relative">
          
          <div className="flex flex-col items-start max-w-2xl">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.85] text-text-default uppercase mb-8">
              Fathima<br />Shaba
            </h1>
            <p className="text-xl md:text-2xl leading-snug font-medium text-text-default mb-12 max-w-lg">
              Brands, products & the art in between. I take the fun seriously.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-16">
              {['Brand Design', 'Product Design', 'UX | UI', 'Art Direction', 'Motion & 3D'].map((skill, i) => (
                <span key={i} className="inline-flex px-4 py-2 rounded-full border border-border-default text-xs font-semibold uppercase tracking-wider text-text-default bg-surface hover:bg-muted transition-colors">
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a href="#about" className="btn-flat btn-flat-secondary group">
                Enter The Lab <span className="ml-2 group-hover:translate-x-1 transition-transform">-&gt;</span>
              </a>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 p-6 hidden md:block">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(PORTFOLIO 2026)</span>
          </div>
          <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-24 hidden md:block">
            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">(SCROLL TO EXPLORE)</span>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="relative h-[60vh] md:h-auto w-full bg-muted overflow-hidden group">
          <img
            src={photoSrc}
            alt="Profile Portrait"
            onError={() => setPhotoSrc("/profile-placeholder.svg")}
            className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
          />
          <div className="absolute top-0 left-0 p-6 md:p-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white mix-blend-difference">(PROFILE)</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
