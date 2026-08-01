import { motion } from "framer-motion";

function HeroTitle() {
  return (
    <motion.h1
      className="
        font-display uppercase text-white
        text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.8rem]
         leading-[1.05]
      "
      style={{
        textShadow:
          "0 0 30px rgba(59,130,246,0.25), 0 25px 80px rgba(0,0,0,0.8)",
      }}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      Sanjaswa Buildcon
    </motion.h1>
  );
}

export default HeroTitle;