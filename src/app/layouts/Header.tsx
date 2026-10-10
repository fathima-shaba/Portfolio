"use client";

import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/app/constants";
import { motion } from "framer-motion";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
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
          
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-zinc-900 dark:bg-white block"></span>
            <span className="w-6 h-0.5 bg-zinc-900 dark:bg-white block"></span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
