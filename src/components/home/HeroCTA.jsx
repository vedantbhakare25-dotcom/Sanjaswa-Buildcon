import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function HeroCTA() {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 sm:gap-2.5 rounded-lg bg-[#1F48FF] px-4 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-[#1534c4] hover:gap-3 shadow-lg shadow-blue-600/30 cursor-pointer flex-none"
      style={{ fontFamily: "Inter, sans-serif" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Build With Us"
    >
      <span>BUILD WITH US</span>
      <ArrowRight size={13} />
    </motion.button>
  );
}

export default HeroCTA;