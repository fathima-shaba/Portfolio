"use client";

import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <section className="bg-white py-24" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered bold uppercase paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-black uppercase leading-snug tracking-tight"
          >
            I am a web developer focused on creating modern, responsive, and accessible web experiences. I build projects with care and attention to detail. I enjoy crafting interfaces, solving problems, and learning new technologies.
          </motion.h2>
        </div>

        {/* About section with photo on left and bio on right */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24">
          
          <div className="w-full md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-sm"
            >
              <img 
                src="/shaba.jpeg" 
                alt="Fathima Shaba" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col md:pt-12">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                I&apos;m a passionate full stack developer focused on creating modern, user-centered digital experiences. I blend creativity with clean, efficient code to build websites that are not only visually appealing but also functional, fast, and scalable.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                With a strong computer science foundation from Calicut University, I combine technical expertise in React, JavaScript, HTML, CSS, Java, C, and C++ with a keen eye for minimalist design. Every layout, interaction, and line of code is crafted to deliver real value.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
                From concept to launch, I work closely with clients to understand their goals, audience and brand vision. My collaborative approach ensures every project reflects the client&apos;s identity while meeting business objectives and performance standards.
              </p>
              
              <a href="#contact" className="inline-block px-10 py-4 border-2 border-black text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors rounded-full">
                Get In Touch
              </a>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
