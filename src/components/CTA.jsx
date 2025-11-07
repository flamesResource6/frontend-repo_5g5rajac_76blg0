import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-zinc-950 to-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-10 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Ready to enter the arena?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-3 max-w-2xl text-white/70"
        >
          Claim a free consultation and bespoke plan. Our team will reach out within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/30 transition-colors hover:bg-fuchsia-500"
          >
            Start Membership <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
          >
            <PhoneCall className="h-5 w-5" /> Call Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
