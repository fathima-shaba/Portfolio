"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/96 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col"
        >
          <span className="text-lg font-bold text-slate-900">Fathima Shaba</span>
          <span className="text-xs text-slate-600">Frontend Developer</span>
        </motion.div>
        <nav className="flex flex-wrap gap-6">
          {["About", "Vision", "Education", "Skills", "Experience", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-slate-700 font-semibold text-sm hover:text-blue-600 transition"
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>
    </motion.header>
  );
}
