"use client";

import { motion } from "framer-motion";
import { ANIMATION_CONFIG } from "@/app/constants";

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: ANIMATION_CONFIG.pageTransition.duration }}
      viewport={{ once: true }}
      className="border-t border-border-strong px-roomy py-cozy flex items-center justify-between mt-page"
    >
      <p className="text-sm text-text-muted">
        Thank you for exploring my portfolio. Let&apos;s create something amazing together.
      </p>
      <p className="text-[10px] uppercase tracking-wider text-text-faint">
        © {new Date().getFullYear()} Fathima Shaba
      </p>
    </motion.footer>
  );
}
