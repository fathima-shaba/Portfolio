"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/app/constants";

export default function ContactSection() {
  return (
    <section className="bg-transparent py-24 md:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 justify-between">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none mb-6">
                Let&apos;s Work<br/>Together.
              </h2>
              <div className="w-12 h-1 bg-cyan-500 mb-10"></div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed mb-12">
                I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s build something great.
              </p>

              <div className="flex flex-col gap-6">
                {CONTACT_INFO.map((contact) => (
                  <a 
                    key={contact.label} 
                    href={contact.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-cyan-500 group-hover:text-zinc-950 group-hover:border-cyan-500 transition-colors">
                      <contact.icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">{contact.label}</p>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-cyan-500/5 p-8 md:p-12"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="How can I help you?" 
                    className="w-full bg-transparent border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-zinc-900 dark:text-white placeholder-zinc-600 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-cyan-500 text-zinc-950 font-black uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>

        </div>

      </div>
    </section>
  );
}
