import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-8 backdrop-blur-md md:p-12"
        >
          {/* highlight */}
          <span className="pointer-events-none absolute -left-1/2 top-0 h-1 w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s collaborate</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Open to full-time roles and selective freelance—especially in healthcare, biotech, and wellness. I can share full case studies on request.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:nanda.aisyah.pratiwi@example.com?subject=Portfolio%20Inquiry"
              className="rounded-xl bg-gradient-to-tr from-slate-100 to-slate-300 px-5 py-3 font-medium text-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,.6),0_10px_30px_-10px_rgba(148,163,184,.6)] transition hover:brightness-110"
            >
              Email Nanda
            </a>
            <a
              href="#"
              className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-5 py-3 font-medium text-slate-200 backdrop-blur-md transition hover:border-slate-600 hover:bg-slate-900/80"
            >
              View Resume (PDF)
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-2 py-2 text-slate-300 transition hover:text-slate-100"
            >
              See work
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Nanda Aisyah Pratiwi. All rights reserved.</p>
          <p className="text-slate-500">Matte black, warm glow, clear outcomes.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
