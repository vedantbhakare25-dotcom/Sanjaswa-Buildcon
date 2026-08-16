import { motion } from "framer-motion";

function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-left"
    >
      <h1
        className="uppercase font-bold text-white text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] xl:text-[6rem] leading-[0.88] tracking-tight"
        style={{
          fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
        }}
      >
        Building <br />
        What <br />
        Matters, <br />
        Together
      </h1>
    </motion.div>
  );
}

export default HeroTitle;