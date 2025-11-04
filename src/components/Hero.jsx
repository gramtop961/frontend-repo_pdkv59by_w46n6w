import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const handleScrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle radial light and metallic sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(148,163,184,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs uppercase tracking-widest text-slate-300">Creative & Innovative Design</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl md:text-6xl"
        >
          Nanda Aisyah Pratiwi
          <span className="relative ml-3 inline-block">
            <span className="bg-gradient-to-r from-slate-200 via-zinc-200 to-slate-400 bg-clip-text text-transparent">— Graphic Designer</span>
            <span className="pointer-events-none absolute -inset-1 rounded-md bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.35)_45%,rgba(255,255,255,0)_60%)] blur-[2px] [animation:pulse_4s_ease-in-out_infinite]" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          I craft clean, modern visuals with a metallic, tech-forward character—polished branding, clear information design, and human-centered layouts that translate beautifully to medical and clinical environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={handleScrollToWork}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-300 px-5 py-3 font-medium text-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,.6),0_10px_30px_-10px_rgba(148,163,184,.6)] transition hover:brightness-110 active:scale-[0.98]"
          >
            View Work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-medium text-slate-200 backdrop-blur-md transition hover:border-slate-600 hover:bg-slate-900/80"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* subtle bottom fade to ensure text legibility */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />
    </section>
  );
};

export default Hero;
