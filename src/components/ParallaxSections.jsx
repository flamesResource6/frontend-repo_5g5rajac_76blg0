import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Activity, Flame } from 'lucide-react';

const Feature = ({ icon: Icon, title, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.05 * index, duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
  >
    <div className="mb-4 inline-flex rounded-full bg-fuchsia-600/20 p-3">
      <Icon className="h-6 w-6 text-fuchsia-400" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{text}</p>
  </motion.div>
);

const ParallaxSections = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.15, 0.35]);

  return (
    <section id="programs" ref={ref} className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-24 text-white">
      {/* Parallax decorative layers */}
      <motion.div style={{ y: y1, opacity: opacityBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </motion.div>
      <motion.div style={{ y: y2, opacity: opacityBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Programs engineered for results</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Strength, conditioning, mobility, and recovery—tailored by coaches with technology-enhanced feedback.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            index={0}
            icon={Activity}
            title="Performance Training"
            text="Progressive strength cycles and conditioning blocks calibrated to your metrics."
          />
          <Feature
            index={1}
            icon={Sparkles}
            title="Mobility & Recovery"
            text="Active mobility flows and guided recovery so you come back stronger each session."
          />
          <Feature
            index={2}
            icon={Flame}
            title="HIIT & Metabolic"
            text="High-intensity circuits with smart pacing to spike output while protecting form."
          />
        </div>
      </div>
    </section>
  );
};

export default ParallaxSections;
