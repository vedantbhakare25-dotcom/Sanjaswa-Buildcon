import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.span
        className="font-sans text-[0.5rem] font-light uppercase tracking-[0.45em] text-white/50 sm:text-[0.5625rem] sm:tracking-[0.5em]"
        animate={{ opacity: [0.35, 0.75, 0.35] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        Scroll to Know More
      </motion.span>
    </motion.div>
  );
}

export default ScrollIndicator;