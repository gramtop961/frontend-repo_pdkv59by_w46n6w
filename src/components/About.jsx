import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const items = [
    {
      title: 'Branding & Identity',
      desc: 'Minimal marks, modular systems, and guidelines that scale across print and digital.',
    },
    {
      title: 'Medical-Grade Clarity',
      desc: 'Patient-friendly diagrams and clear hierarchy for clinical communications.',
    },
    {
      title: 'UI for Healthcare',
      desc: 'Dashboard and component libraries designed for accessibility and trust.',
    },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      {/* soft glow accent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_10%,rgba(255,138,76,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Design with a clinical edge
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl text-slate-300"
        >
          A balance of creative experimentation and rigorous clarity. Metallic textures, restrained color, and warm orange accents echo a modern clinical future.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-6 backdrop-blur-md"
            >
              {/* metallic reflection */}
              <span className="pointer-events-none absolute -top-1/2 left-1/2 h-[140%] w-[130%] -translate-x-1/2 rotate-12 rounded-full bg-gradient-to-r from-white/5 via-white/20 to-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-slate-200 to-zinc-400 shadow-inner shadow-white/20 ring-1 ring-white/10" />
              <h3 className="text-lg font-semibold text-slate-100">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.desc}</p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-orange-400/80 to-amber-500/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
