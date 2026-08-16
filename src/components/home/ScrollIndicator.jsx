import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  const handleClick = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll down to view content"
      className="group flex flex-col items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors"
    >
      <span
        className="font-sans text-[8px] uppercase tracking-[0.2em] font-medium"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        SCROLL
      </span>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm group-hover:border-white/40"
      >
        <ChevronDown size={14} />
      </motion.div>
    </button>
  );
}

export default ScrollIndicator;