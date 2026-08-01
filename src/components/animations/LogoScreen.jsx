import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const container = {
  initial: {
    opacity: 0,
    y: 18,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.65,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function LogoScreen() {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center"
    >
      <motion.img
        src={logo}
        alt="Sanjaswa Builcon Logo"
        className="h-60 w-60 object-contain sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
        initial={{
          scale: 0.94,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          willChange: "transform, opacity",
          filter:
            "drop-shadow(0 12px 40px rgba(31,72,255,0.12)) drop-shadow(0 0 80px rgba(31,72,255,0.08))",
        }}
      />
    </motion.div>
  );
}

export default LogoScreen;