import { motion } from "framer-motion";

const container = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const item = {
  initial: {
    opacity: 0,
    y: 24,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function ShlokaScreen() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-5xl text-center px-6"
      style={{
        willChange: "transform, opacity",
      }}
    >
      <motion.p
        variants={item}
        className="font-sanskrit"
        style={{
          fontSize: "clamp(2rem,5vw,3.8rem)",
          lineHeight: 1.45,
          fontWeight: 600,
          color: "#1F48FF",
          textShadow: "0 0 30px rgba(31,72,255,0.10)",
        }}
      >
        दृढमूलं हि यत् कार्यं न तद् विपद्यते क्वचित्।
      </motion.p>

      <motion.p
        variants={item}
        style={{
          marginTop: "2rem",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.92rem",
          fontWeight: 500,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(31,72,255,0.50)",
        }}
        animate={{
          opacity: [0.55, 1, 0.55],
        }}
        transition={{
          opacity: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        A work built on a strong foundation never fails.
      </motion.p>
    </motion.div>
  );
}

export default ShlokaScreen;