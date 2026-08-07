import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroCTA() {
  return (
    <motion.button
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="
        group
        relative
        inline-flex
        w-fit
        items-center
        gap-5
        overflow-hidden
        cursor-pointer
      "
    >
      {/* Left Line */}
      <motion.span
        variants={{
          rest: { width: 50 },
          hover: { width: 90 },
        }}
        transition={{ duration: 0.35 }}
        className="h-px bg-[#1F48FF]"
      />

      {/* Text */}
      <span
        className="
          text-[13px]
          font-medium
          uppercase
          tracking-[0.35em]
          text-[#111111]
        "
      >
        Enquire Now
      </span>

      {/* Arrow */}
      <motion.div
        variants={{
          rest: { x: 0 },
          hover: { x: 8 },
        }}
        transition={{ duration: 0.35 }}
      >
        <ArrowRight
          size={18}
          strokeWidth={1.8}
          className="text-[#1F48FF]"
        />
      </motion.div>
    </motion.button>
  );
}