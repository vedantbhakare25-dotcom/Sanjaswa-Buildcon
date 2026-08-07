import { motion } from "framer-motion";
import HeroCTA from "./HeroCTA";
import { fadeUp, stagger } from "../utils/animations";

export default function HeroContent() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="
        relative
        z-10
        flex
        flex-col
        justify-center
        max-w-[620px]
      "
    >
      {/* Tag */}
      <motion.span
        custom={0.1}
        variants={fadeUp}
        className="
          mb-8
          inline-flex
          items-center
          uppercase
          tracking-[0.45em]
          text-[12px]
          font-medium
          text-[#1F48FF]
        "
      >
        BUILDING WITH PRECISION
      </motion.span>

      {/* Title */}
      <motion.h1
        custom={0.25}
        variants={fadeUp}
        className="
          text-[#111111]
          uppercase
          font-black
          leading-[0.88]
          tracking-[-0.04em]
          text-[72px]
          md:text-[108px]
          xl:text-[132px]
        "
        style={{
          fontFamily:
            '"Barlow Condensed","Bebas Neue","Anton",sans-serif',
        }}
      >
        SANJASWA
        <br />
        BUILDCON
      </motion.h1>

      {/* Divider */}
      <motion.div
        custom={0.35}
        variants={fadeUp}
        className="mt-10 h-px w-24 bg-[#1F48FF]"
      />

      {/* Description */}
      <motion.p
        custom={0.45}
        variants={fadeUp}
        className="
          mt-10
          max-w-[520px]
          text-[18px]
          leading-9
          text-[#5B5B5B]
          font-light
        "
      >
        We create timeless residential and commercial spaces through
        architectural excellence, uncompromising quality, and meticulous
        execution that stands strong for generations.
      </motion.p>

      {/* CTA */}
      <motion.div
        custom={0.6}
        variants={fadeUp}
        className="mt-16"
      >
        <HeroCTA />
      </motion.div>
    </motion.div>
  );
}