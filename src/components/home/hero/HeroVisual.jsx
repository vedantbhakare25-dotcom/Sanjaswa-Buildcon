import { motion } from "framer-motion";
import heroImage from "../../../assets/images/hero/image1.avif";

import { imageReveal } from "../utils/animations";

export default function HeroVisual() {
  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      animate="visible"
      className="relative hidden h-[720px] lg:flex items-center justify-center"
    >
      {/* Decorative Background */}
      <div
        className="
          absolute
          right-8
          top-1/2
          h-[82%]
          w-[82%]
          -translate-y-1/2
          rounded-[36px]
          border
          border-black/5
          bg-white/55
          backdrop-blur-md
        "
      />

      {/* Hero Image */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          z-10
          overflow-hidden
          rounded-[32px]
          shadow-[0_35px_80px_rgba(0,0,0,.12)]
        "
      >
        <img
          src={heroImage}
          alt="Sanjaswa"
          className="
            h-[720px]
            w-[560px]
            object-cover
            object-center
            select-none
            pointer-events-none
          "
        />
      </motion.div>

      {/* Blue Accent */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.24, 0.16],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-10
          bottom-12
          h-48
          w-48
          rounded-full
          bg-[#1F48FF]
          blur-[110px]
        "
      />
    </motion.div>
  );
}