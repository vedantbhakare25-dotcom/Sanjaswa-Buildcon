import { motion } from "framer-motion";

function HeroTitle() {
  return (
    <motion.h1
      className="uppercase font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-[0.02em]"
      style={{
        fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
      }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      Sanjaswa Buildcon
    </motion.h1>
  );
}

export default HeroTitle;