"use client";

import Link from "next/link";
import { NAVIGATION_ITEMS } from "@/app/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="mx-auto flex justify-between items-center h-20 px-6 md:px-12 lg:px-24">
        
        {/* Left: Name */}
        <div className="flex items-center">
          <Link href="/" className="font-bold tracking-widest text-black text-xl uppercase">
            Fathima Shaba.
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-gray-500 hover:text-black transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        {/* Right: Resume Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-black rounded hover:bg-gray-800 transition-colors"
          >
            Download Resume
          </a>
          
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-black block"></span>
            <span className="w-6 h-0.5 bg-black block"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
