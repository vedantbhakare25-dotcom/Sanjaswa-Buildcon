import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundSlideshow, { HERO_PROJECTS } from './BackgroundSlideshow.jsx';
import HeroContent from './HeroContent.jsx';
import { MapPin } from 'lucide-react';

function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(100);
  const currentProject = HERO_PROJECTS[activeSlideIndex] || HERO_PROJECTS[0];

  // Dynamic Header Height Measurement via ResizeObserver
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector('header');
      if (headerEl) {
        const height = headerEl.getBoundingClientRect().height;
        if (height > 0) {
          setNavbarHeight(height);
        }
      }
    };

    updateHeaderHeight();

    const headerEl = document.querySelector('header');
    let observer;
    if (headerEl && typeof window !== 'undefined' && window.ResizeObserver) {
      observer = new ResizeObserver(() => {
        updateHeaderHeight();
      });
      observer.observe(headerEl);
    }

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      if (observer && headerEl) {
        observer.unobserve(headerEl);
      }
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden text-white bg-[#080C14] select-none flex flex-col justify-between pb-6 px-6 lg:px-10 transition-all duration-150"
      style={{
        marginTop: `${navbarHeight}px`,
        height: `calc(100vh - ${navbarHeight}px)`,
        minHeight: `calc(100dvh - ${navbarHeight}px)`,
      }}
    >
      <BackgroundSlideshow
        activeIndex={activeSlideIndex}
        onSlideChange={setActiveSlideIndex}
      />

      {/* Plain Text Dynamic Sub-heading Tag */}
      <div className="absolute top-4 right-6 lg:right-10 z-20 hidden sm:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white/90 drop-shadow-md"
            style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
          >
            <MapPin size={13} className="text-blue-400" />
            <span>{currentProject.title}</span>
            <span className="text-white/60 font-normal">({currentProject.location})</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Single Page Viewport Content Assembly */}
      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <HeroContent />
      </div>

      {/* Bottom Vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080C14] to-transparent" />
    </section>
  );
}

export default HeroSection;