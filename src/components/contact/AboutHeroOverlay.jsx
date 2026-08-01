import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
});

function AboutHeroOverlay({ isVisible, onDismiss }) {
  const [contentReady, setContentReady] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) { setContentReady(false); setExiting(false); return; }

    const contentTimer = setTimeout(() => setContentReady(true), 900);
    const exitTimer = setTimeout(() => setExiting(true), 900 + 2800);

    return () => { clearTimeout(contentTimer); clearTimeout(exitTimer); };
  }, [isVisible]);

  return (
    <AnimatePresence onExitComplete={onDismiss}>
      {isVisible && !exiting && (
        <motion.div
          key="about-hero-overlay"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80)',
              transform: 'scale(1.06)',
            }}
            initial={{ filter: 'blur(0px) brightness(0.15)' }}
            animate={contentReady
              ? { filter: 'blur(7px) brightness(0.28)' }
              : { filter: 'blur(0px) brightness(0.15)' }
            }
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.7)_100%)]" />

          <AnimatePresence>
            {contentReady && (
              <motion.div
                className="relative z-10 flex flex-col items-center px-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="mb-12 h-px bg-white/25"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.p
                  className="font-sanskrit text-2xl font-normal leading-relaxed tracking-[0.05em] text-white sm:text-3xl md:text-4xl lg:text-5xl"
                  {...fadeUp(0.3)}
                >
                  उत्कर्षः सर्वदा लक्ष्यम्।
                </motion.p>
                <motion.p
                  className="mt-8 font-sans text-[0.55rem] font-light uppercase tracking-[0.55em] text-white/50 sm:text-[0.625rem] sm:tracking-[0.6em] md:text-[0.6875rem]"
                  {...fadeUp(0.7)}
                >
                  Excellence is Always the Goal
                </motion.p>
                <motion.div
                  className="mt-12 h-px bg-white/25"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AboutHeroOverlay;