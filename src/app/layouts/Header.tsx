"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/app/constants";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b-0 border-white/5">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="relative grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-cozy px-roomy">
        
        <div className="flex items-center justify-self-start">
          <Link href="/" className="group/logo hidden min-h-6 cursor-pointer items-center py-1 lg:inline-flex">
            <span className="text-xs font-medium uppercase tracking-widest text-text-default">
              <span className="inline-flex items-center align-middle justify-start">
                <span className="relative inline-flex items-center gap-[0.45em]">
                  <span className="inline-flex items-center gap-[0.45em] transition-transform duration-150 group-active/logo:scale-95">
                    <span className="inline-block w-[0.85em] text-center">F</span>
                    <span aria-hidden="true" className="relative inline-block h-px overflow-hidden bg-current align-middle w-4">
                      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-transparent via-text-default to-transparent -translate-x-[120%]"></span>
                    </span>
                    <span className="inline-block w-[0.85em] text-center">S</span>
                  </span>
                </span>
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-self-center">
          <Link href="/" className="group/logo inline-flex min-h-6 cursor-pointer items-center py-1 lg:hidden">
            <span className="text-xs font-medium uppercase tracking-widest text-text-default">
              <span className="inline-flex items-center gap-[0.45em]">
                <span className="inline-block w-[0.85em] text-center">F</span>
                <span aria-hidden="true" className="relative inline-block h-px overflow-hidden bg-current align-middle w-4"></span>
                <span className="inline-block w-[0.85em] text-center">S</span>
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-stack lg:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors text-text-muted hover:text-text-default"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-roomy justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
