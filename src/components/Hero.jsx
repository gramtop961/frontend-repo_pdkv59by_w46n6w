import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { PlugZap } from 'lucide-react';

const Hero = () => {
  const handleScrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D character */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Creative metal + glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,138,76,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.35)_55%,rgba(2,6,23,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-28 md:pt-32">
        {/* top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 backdrop-blur-md"
        >
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,.6)]">
            <PlugZap size={14} />
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-300">Futuristic • Clinical • Human</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-100 sm:text-5xl md:text-6xl"
        >
          Nanda Aisyah Pratiwi
          <span className="relative ml-3 inline-block">
            <span className="bg-gradient-to-r from-slate-200 via-zinc-100 to-slate-400 bg-clip-text text-transparent">— Graphic Designer</span>
            {/* metallic sheen */}
            <span className="pointer-events-none absolute -inset-1 rounded-md bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.45)_45%,rgba(255,255,255,0)_60%)] blur-[2px] [animation:pulse_4s_ease-in-out_infinite]" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          I design modern identities, editorial systems, and UI with a metallic aesthetic and calm precision—tailored for healthcare and clinical teams. Clean hierarchy, warm accent glow, and motion that feels effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={handleScrollToWork}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-300 px-5 py-3 font-medium text-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,.7),0_12px_40px_-16px_rgba(148,163,184,.8)] transition hover:brightness-110 active:scale-[0.98]"
          >
            View Work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-medium text-slate-200 backdrop-blur-md transition hover:border-slate-600 hover:bg-slate-900/80"
          >
            Download CV
            <span className="relative ml-1 inline-block h-1 w-6 overflow-hidden rounded-full bg-slate-700/60">
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom fade for legibility */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950" />

      <style>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};

export default Hero;
