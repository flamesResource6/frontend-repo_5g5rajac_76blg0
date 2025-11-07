import React from 'react';
import AnimatedMenu from './components/AnimatedMenu';
import Hero from './components/Hero';
import ParallaxSections from './components/ParallaxSections';
import ScrollingBackground from './components/ScrollingBackground';
import CTA from './components/CTA';

const App = () => {
  return (
    <div id="home" className="relative min-h-screen bg-black text-white">
      {/* Interactive starfield and glow background */}
      <ScrollingBackground />

      {/* Header with animated full-screen menu */}
      <AnimatedMenu />

      {/* Hero with Spline 3D scene */}
      <Hero />

      {/* Parallax-driven features section */}
      <ParallaxSections />

      {/* Call to Action */}
      <CTA />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} CyberGym. Train beyond limits.
      </footer>
    </div>
  );
};

export default App;
