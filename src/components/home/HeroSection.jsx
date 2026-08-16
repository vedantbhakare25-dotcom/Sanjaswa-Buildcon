import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundSlideshow, { HERO_PROJECTS } from './BackgroundSlideshow.jsx';
import HeroContent from './HeroContent.jsx';
import { MapPin } from 'lucide-react';

function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentProject = HERO_PROJECTS[activeSlideIndex] || HERO_PROJECTS[0];

  return (
    <section className="relative mt-[64px] xs:mt-[72px] sm:mt-[108px] md:mt-[124px] h-[calc(100vh-64px)] xs:h-[calc(100vh-72px)] sm:h-[calc(100vh-108px)] md:h-[calc(100vh-124px)] h-[calc(100dvh-64px)] xs:h-[calc(100dvh-72px)] sm:h-[calc(100dvh-108px)] md:h-[calc(100dvh-124px)] overflow-hidden text-white bg-[#080C14] select-none flex flex-col justify-between pb-3 sm:pb-6 px-4 sm:px-6 lg:px-10">
      <BackgroundSlideshow
        activeIndex={activeSlideIndex}
        onSlideChange={setActiveSlideIndex}
      />

      {/* Dynamic Sub-heading Tag (Plain text in Roboto Condensed font) */}
      <div className="absolute top-3 sm:top-4 right-4 sm:right-6 lg:right-10 z-20 hidden sm:block">
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

      {/* Single Screen Mobile & Desktop Viewport Content Assembly */}
      <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden">
        <HeroContent />
      </div>

      {/* Bottom Vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#080C14] to-transparent" />
    </section>
  );
}

export default HeroSection;