import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Animated, interactive starfield-like background with subtle mouse parallax
const ScrollingBackground = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    let raf;
    let offset = 0;

    const tick = () => {
      offset += 0.25; // background scroll speed
      controls.start({ backgroundPositionY: `${offset}px` });
      raf = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(raf);
  }, [controls]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 6; // -3..3
      const y = (e.clientY / innerHeight - 0.5) * 6; // -3..3
      el.style.setProperty('--tiltX', `${y}deg`);
      el.style.setProperty('--tiltY', `${-x}deg`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      animate={controls}
      className="pointer-events-none fixed inset-0 -z-0"
      style={{
        backgroundImage:
          'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.35) 0, transparent 60%), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,0.35) 0, transparent 60%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.35) 0, transparent 60%), radial-gradient(600px 300px at 50% 120%, rgba(168,85,247,0.18) 0, transparent 70%)',
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px, 220px 220px, 260px 260px, cover',
        transform: 'perspective(1000px) rotateX(var(--tiltX, 0deg)) rotateY(var(--tiltY, 0deg))',
      }}
    />
  );
};

export default ScrollingBackground;
