"use client";

import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/app/constants";
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface border-b border-border-default">
      <div className="relative flex justify-between items-center h-16 px-6 md:px-12 lg:px-24">
        
        <div className="flex items-center">
          <Link href="/" className="font-bold tracking-tight text-text-default hover:opacity-70 transition-opacity">
            FATHIMA.STUDIO®
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-text-default transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Icon Placeholder */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-text-default block"></span>
            <span className="w-6 h-0.5 bg-text-default block"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
