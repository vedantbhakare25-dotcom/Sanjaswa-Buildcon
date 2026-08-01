import { motion } from "framer-motion";

const container = {
  initial: {},

  animate: {
    transition: {
      staggerChildren: 0.18,
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.55,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function CompanyNameScreen() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-center"
      style={{
        willChange: "transform, opacity",
      }}
    >
      <motion.p
        variants={item}
        className="mb-5 text-xs font-semibold uppercase tracking-[0.35em]"
        style={{
          color: "rgba(31,72,255,0.55)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Building With Precision
      </motion.p>

      <motion.h1
        variants={item}
        style={{
          fontFamily:
            '"Barlow Condensed","Bebas Neue",Impact,sans-serif',

          fontWeight: 900,

          fontSize: "clamp(3.5rem,10vw,7rem)",

          lineHeight: 0.95,

          letterSpacing: "0.03em",

          textTransform: "uppercase",

          color: "#1F48FF",

          textShadow: "0 0 36px rgba(31,72,255,0.10)",

          willChange: "transform, opacity",
        }}
      >
        SANJASWA BUILDCON
      </motion.h1>
    </motion.div>
  );
}

export default CompanyNameScreen;