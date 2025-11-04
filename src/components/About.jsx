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
      <div className="mx-auto max-w-6xl px-6">
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
          I blend creative intuition with systematic thinking. My work is polished and contemporary—yet purposeful, accessible, and ready for the rigor of medical contexts.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-6 backdrop-blur-md"
            >
              <div className="mb-3 h-10 w-10 rounded-xl bg-gradient-to-br from-slate-200 to-zinc-400 shadow-inner shadow-white/20" />
              <h3 className="text-lg font-semibold text-slate-100">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
