"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="page"
      id="contact"
    >
      <div className="section-header">
        <span className="section-label">Connect</span>
        <h2 className="text-3xl font-bold text-slate-900">Let&apos;s Talk</h2>
      </div>
      <p className="text-lg text-slate-700 mb-8 leading-relaxed">
        If you&apos;re looking for a motivated frontend developer to join a team or collaborate on a modern web project, let&apos;s connect.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <motion.a
          href="mailto:fathimashaba674@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="card flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition"
        >
          <FaEnvelope className="text-2xl text-blue-600" />
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold">Email</p>
            <p className="text-slate-900 font-semibold">fathimashaba674@gmail.com</p>
          </div>
        </motion.a>
        <motion.a
          href="tel:+918089888450"
          whileHover={{ scale: 1.05 }}
          className="card flex items-center gap-4 cursor-pointer hover:bg-blue-50 transition"
        >
          <FaPhone className="text-2xl text-blue-600" />
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold">Phone</p>
            <p className="text-slate-900 font-semibold">+91 8089888450</p>
          </div>
        </motion.a>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="card flex items-center gap-4"
        >
          <FaMapMarkerAlt className="text-2xl text-blue-600" />
          <div>
            <p className="text-xs text-slate-600 uppercase font-semibold">Location</p>
            <p className="text-slate-900 font-semibold">Kerala, India</p>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-6 mt-8 justify-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-3xl text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="text-3xl text-slate-900 hover:text-slate-700"
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.section>
  );
}
