"use client";

import Link from "next/link";
import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/app/constants";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 bg-white dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="mx-auto flex justify-between items-center h-20 px-6 md:px-12 lg:px-24">
        
        {/* Left: Name */}
        <div className="flex items-center">
          <Link href="/" className="font-bold tracking-widest text-zinc-900 dark:text-white text-xl uppercase">
            Fathima Shaba.
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Right: Resume Button, Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-zinc-950 bg-cyan-500 rounded hover:bg-cyan-400 transition-colors"
          >
            Download Resume
          </motion.a>
          
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-zinc-900 dark:bg-white block"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-zinc-900 dark:bg-white block"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-zinc-900 dark:bg-white block"
            ></motion.span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-black tracking-wide text-zinc-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors uppercase py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex md:hidden items-center justify-center px-6 py-4 text-sm font-black text-zinc-950 bg-cyan-500 rounded uppercase tracking-widest hover:bg-cyan-400 transition-colors"
              >
                Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
