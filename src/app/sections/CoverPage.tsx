"use client";

import { motion } from "framer-motion";

export default function CoverPageSection() {
  return (
    <section className="relative w-full bg-white pt-8 pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* HUGE "DEVELOPER" Heading */}
        <div className="w-full text-center relative z-0 flex justify-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[16vw] md:text-[14vw] font-black tracking-tighter text-black uppercase leading-none select-none"
          >
            DEVELOPER
          </motion.h1>
        </div>

        {/* Main Content Layout overlapping the text */}
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between -mt-[12vw] md:-mt-[10vw]">
          
          {/* Left Cards */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start pt-16 md:pt-[12vw] px-4 md:px-0 z-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-6 max-w-xs w-full cursor-pointer"
            >
              <h3 className="text-xl font-bold text-black mb-2">Hello! I&apos;m Fathima Shaba.</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                A Full Stack Developer focused on modern web experiences.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-50 text-gray-700 text-[10px] uppercase font-bold rounded border border-gray-200">HTML & CSS</span>
                <span className="px-3 py-1 bg-gray-50 text-gray-700 text-[10px] uppercase font-bold rounded border border-gray-200">JavaScript</span>
                <span className="px-3 py-1 bg-gray-50 text-gray-700 text-[10px] uppercase font-bold rounded border border-gray-200">React</span>
              </div>
            </motion.div>
          </div>

          {/* Center Portrait */}
          <div className="w-full md:w-1/3 flex justify-center z-10 mt-8 md:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-64 h-[22rem] md:w-80 md:h-[28rem] lg:w-[26rem] lg:h-[34rem]"
            >
              {/* Using rounded-[10rem] to create a pill/oval portrait look that acts like a nice cutout alternative */}
              <img 
                src="/shaba.jpeg" 
                alt="Fathima Shaba" 
                className="w-full h-full object-cover rounded-[10rem] border-8 border-white shadow-xl"
              />
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 items-center md:items-end pt-12 md:pt-[14vw] px-4 md:px-0 z-20">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-5 w-full max-w-[16rem] flex items-center gap-4 cursor-pointer"
            >
              <h4 className="text-4xl font-black text-black leading-none">100<span className="text-orange-500 text-2xl">%</span></h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase leading-tight">Client<br/>Satisfaction</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-5 w-full max-w-[16rem] flex items-center gap-4 cursor-pointer"
            >
              <h4 className="text-4xl font-black text-black leading-none">10<span className="text-orange-500 text-2xl">+</span></h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase leading-tight">Projects<br/>Launched</p>
            </motion.div>
          </div>

        </div>

        {/* Center Message Beneath Portrait */}
        <div className="relative z-30 w-full flex justify-center mt-12 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-[2rem] border border-gray-200 px-8 py-10 md:py-12 text-center max-w-3xl w-full mx-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-black uppercase tracking-tight leading-tight mb-8">
              Design, branding and <br className="hidden sm:block"/> web development made better.
            </h2>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="inline-flex items-center justify-center px-10 py-4 bg-black text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/20"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
