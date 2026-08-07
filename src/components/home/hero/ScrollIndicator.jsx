import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 1.2,
      }}
      className="flex flex-col items-center select-none"
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown
          size={20}
          strokeWidth={1.8}
          className="text-[#1F48FF]"
        />
      </motion.div>

      <span
        className="
          mt-3
          text-[11px]
          uppercase
          tracking-[0.45em]
          text-[#7A7A7A]
        "
      >
        Scroll
      </span>
    </motion.div>
  );
}