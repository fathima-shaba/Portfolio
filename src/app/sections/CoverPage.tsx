"use client";

import { motion } from "framer-motion";

export default function CoverPageSection() {
  return (
    <section className="relative w-full bg-transparent pt-8 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* HUGE "DEVELOPER" Heading */}
        <div className="w-full text-center relative z-0 flex justify-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[16vw] md:text-[14vw] font-black tracking-tighter text-zinc-900 dark:text-white uppercase leading-none select-none"
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* Main Content Layout overlapping the text */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between mt-4 md:-mt-[10vw] gap-8 md:gap-0">
          
          {/* Left Cards */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start pt-0 md:pt-[12vw] px-4 md:px-0 z-20 order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-50 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 max-w-xs w-full cursor-pointer"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Hello! I&apos;m Fathima Shaba.</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                A Full Stack Developer focused on modern web experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] uppercase font-bold rounded border border-zinc-300 dark:border-zinc-700">HTML & CSS</span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] uppercase font-bold rounded border border-zinc-300 dark:border-zinc-700">JavaScript</span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] uppercase font-bold rounded border border-zinc-300 dark:border-zinc-700">React</span>
              </div>
            </motion.div>
          </div>

          {/* Center Portrait */}
          <div className="w-full md:w-1/3 flex justify-center z-10 order-1 md:order-2 mt-8 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-56 h-[18rem] sm:w-64 sm:h-[22rem] md:w-80 md:h-[28rem] lg:w-[26rem] lg:h-[34rem] flex items-center justify-center"
            >
              {/* Soft Background Glow Behind Image */}
              <div className="absolute inset-4 bg-cyan-400/20 dark:bg-cyan-500/20 blur-3xl rounded-[10rem]"></div>
              
              {/* Outer Orbital Ring 1 */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 md:-inset-4 rounded-[10rem] border-2 border-transparent border-t-cyan-400/60 border-r-cyan-400/30 opacity-80"
              />
              
              {/* Outer Orbital Ring 2 */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-6 rounded-[10rem] border border-transparent border-b-cyan-300/40 border-l-cyan-300/20 opacity-60"
              />

              {/* Orbiting Particles/Spheres */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 md:-inset-4 rounded-[10rem] pointer-events-none"
              >
                {/* Top Right Particle */}
                <div className="absolute top-12 right-2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.9)]"></div>
                {/* Bottom Left Particle */}
                <div className="absolute bottom-12 left-2 w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_rgba(103,232,249,0.8)]"></div>
              </motion.div>

              <img 
                src="/shaba.jpeg" 
                alt="Fathima Shaba" 
                className="w-full h-full object-cover rounded-[10rem] border-4 border-white dark:border-zinc-950 shadow-[0_0_40px_rgba(6,182,212,0.2)] relative z-10"
              />
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 items-center md:items-end pt-0 md:pt-[14vw] px-4 md:px-0 z-20 order-3 md:order-3">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-50 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-5 w-full max-w-[16rem] flex items-center gap-4 cursor-pointer"
            >
              <h4 className="text-4xl font-black text-zinc-900 dark:text-white leading-none">100<span className="text-cyan-400 text-2xl">%</span></h4>
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold uppercase leading-tight">Client<br/>Satisfaction</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-zinc-50 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-5 w-full max-w-[16rem] flex items-center gap-4 cursor-pointer"
            >
              <h4 className="text-4xl font-black text-zinc-900 dark:text-white leading-none">10<span className="text-cyan-400 text-2xl">+</span></h4>
              <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-bold uppercase leading-tight">Projects<br/>Launched</p>
            </motion.div>
          </div>

        </div>

        {/* Center Message Beneath Portrait */}
        <div className="relative z-30 w-full flex justify-center mt-12 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-50 dark:bg-zinc-900/80 backdrop-blur-md rounded-[2rem] border border-zinc-200 dark:border-zinc-800 px-8 py-10 md:py-12 text-center max-w-3xl w-full mx-4 shadow-2xl shadow-cyan-500/10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-tight mb-8">
              Design, branding and <br className="hidden sm:block"/> web development made better.
            </h2>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="inline-flex items-center justify-center px-10 py-4 bg-cyan-500 text-zinc-950 text-xs font-black uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
