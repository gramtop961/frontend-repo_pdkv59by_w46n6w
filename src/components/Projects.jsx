import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Medical Branding System', tags: ['Identity', 'Guidelines', 'Print'] },
  { title: 'Patient Brochure Suite', tags: ['Editorial', 'Infographics'] },
  { title: 'Clinic Dashboard UI', tags: ['UI Kit', 'Accessibility'] },
  { title: 'Pharmaceutical Packaging', tags: ['Packaging', 'Regulatory'] },
  { title: 'Clinical Infographics', tags: ['Data Viz', 'Education'] },
  { title: 'Awareness Campaign', tags: ['Social', 'Motion'] },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
          <a
            href="#contact"
            className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition hover:border-slate-700 hover:bg-slate-900"
          >
            Request full portfolio
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-5 backdrop-blur-md"
            >
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-slate-300/40 via-slate-200/30 to-zinc-300/20 shadow-inner shadow-white/10 transition duration-300 group-hover:scale-[1.02]" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
                <span className="text-sm text-slate-300 transition group-hover:translate-x-0.5">→</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700/70 bg-slate-950/50 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
