import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, User, Home, Calendar, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Programs', href: '#programs', icon: Dumbbell },
  { label: 'Coaches', href: '#coaches', icon: User },
  { label: 'Schedule', href: '#schedule', icon: Calendar },
  { label: 'Contact', href: '#contact', icon: Phone },
];

const AnimatedMenu = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? 'backdrop-blur bg-black/40' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Dumbbell className="h-6 w-6 text-fuchsia-400" />
          <span className="font-semibold">CyberGym</span>
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

        <nav className="hidden gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} className="text-sm text-white/80 hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black"
            >
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>

              <ul className="flex flex-col items-center gap-6">
                {navItems.map(({ label, href, icon: Icon }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="group inline-flex items-center gap-3 text-2xl font-medium text-white"
                    >
                      <Icon className="h-6 w-6 text-fuchsia-400 transition-transform group-hover:scale-110" />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pointer-events-none absolute inset-0"
              >
                <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
                <div className="absolute -bottom-16 right-10 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AnimatedMenu;
