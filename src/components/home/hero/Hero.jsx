import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import ScrollIndicator from "./ScrollIndicator";

import { fade } from "../utils/animations";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F7F7F5]
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-[1800px]
          items-center
          px-8
          pt-32
          pb-16
          md:px-14
          xl:px-20
        "
      >
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          className="
            grid
            w-full
            items-center
            gap-20
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          <HeroContent />

          <HeroVisual />
        </motion.div>
      </div>

      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
        "
      >
        <ScrollIndicator />
      </div>
    </section>
  );
}