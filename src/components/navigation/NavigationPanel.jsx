import { motion } from 'framer-motion';
import { useState } from 'react';

const panelVariants = {
  hidden: { y: '-100%' },
  visible: (i) => ({
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.07,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  exit: (i) => ({
    y: '-100%',
    transition: {
      duration: 0.7,
      delay: (4 - i) * 0.055,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

function NavigationPanel({ item, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden h-[20vh] w-full sm:h-full sm:flex-1 sm:min-w-0"
      custom={index}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
        animate={{
          scale: hovered ? 1.06 : 1,
          filter: hovered ? 'brightness(0.62)' : 'brightness(0.38)',
        }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />

     

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-16 md:pb-20 lg:pb-24 px-4">

        <motion.span
          className="mb-3 sm:mb-5 font-sans text-[0.45rem] sm:text-[0.5rem] font-light tracking-[0.4em] text-white/30"
          animate={{ opacity: hovered ? 0.65 : 0.3 }}
          transition={{ duration: 0.4 }}
        >
          0{index + 1}
        </motion.span>

        <motion.h2
          className="font-display text-center text-xs sm:text-sm md:text-base lg:text-lg font-medium uppercase leading-none tracking-[0.18em] text-white"
          animate={{
            letterSpacing: hovered ? '0.24em' : '0.18em',
            opacity: hovered ? 1 : 0.82,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {item.title}
        </motion.h2>

        <motion.span
          className="hidden sm:block mt-3 font-sans text-[0.45rem] font-light uppercase tracking-[0.38em] text-white/40"
          animate={{ opacity: hovered ? 0.7 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.45 }}
        >
          {item.subtitle}
        </motion.span>

        <motion.div
          className="mt-3 sm:mt-5 h-px bg-white/60"
          animate={{
            width: hovered ? '2.5rem' : '1rem',
            opacity: hovered ? 0.6 : 0.2,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
}

export default NavigationPanel;