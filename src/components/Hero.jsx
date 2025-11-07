import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronRight, PlayCircle, Dumbbell } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Interactive 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft glow overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Dumbbell className="h-4 w-4 text-fuchsia-400" />
            <span className="text-sm text-white/80">CyberGym • Train beyond limits</span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Elevate your fitness in a futuristic training arena
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Personalized programs, immersive ambience, and coaching driven by motion and data. Step into the next generation of performance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/30 transition-colors hover:bg-fuchsia-500"
            >
              Join Now <ChevronRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#tour"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
            >
              <PlayCircle className="h-5 w-5" /> Take a Tour
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border border-white/30">
          <motion.span
            className="mx-auto mt-1 block h-2 w-1 rounded-full bg-white/70"
            animate={{ y: [2, 18, 2] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
