"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CONTACT_INFO } from "@/app/constants";

export default function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-t border-b border-border-default md:col-span-1">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-2">Connect</p>
            <h2 className="text-3xl font-semibold tracking-tight text-text-default mb-4">Let's Talk</h2>
            <p className="text-base text-text-muted leading-relaxed mb-8 max-w-prose">
              Looking for a frontend developer who crafts modern, polished web apps? Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-text-default text-surface rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
                 <FaLinkedin /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-border-strong rounded-full text-sm font-semibold hover:bg-white/5 transition-colors">
                 <FaGithub /> GitHub
              </a>
            </div>
        </div>
        <div className="relative flex flex-col items-start gap-cozy p-roomy border-b md:border-t md:border-l border-border-default md:col-span-1">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 left-0 border-t border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t border-r w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 border-b border-l w-3 h-3 border-border-default"></span>
            <span aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 border-b border-r w-3 h-3 border-border-default"></span>
            <p className="text-xs font-medium uppercase tracking-widest text-text-faint mb-4">Contact Info</p>
            <ul className="flex flex-col gap-6 w-full">
              {CONTACT_INFO.map((item, index) => (
                <li key={index} className="flex flex-col gap-1 border-b border-border-default pb-6 last:border-b-0 last:pb-0">
                  <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{item.label}</span>
                  <a href={item.href} className="text-lg font-semibold text-text-default hover:underline decoration-border-strong underline-offset-4">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
