"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/app/constants";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/96 dark:bg-slate-950/96 border-b border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col"
        >
          <span className="text-lg font-bold text-slate-900 dark:text-white">Fathima Shaba</span>
          <span className="text-xs text-slate-600 dark:text-slate-400">Frontend Developer</span>
        </motion.div>
        <div className="flex items-center gap-6">
          <nav className="flex flex-wrap gap-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 font-semibold text-sm hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
