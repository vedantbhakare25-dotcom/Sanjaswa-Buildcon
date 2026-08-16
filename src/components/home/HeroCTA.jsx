import { motion } from "framer-motion";

function HeroCTA() {
  const handleClick = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className="rounded-lg border border-white/25 bg-white/[0.04] px-7 py-3 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-200 hover:border-[#1F48FF] hover:bg-[#1F48FF] hover:text-white cursor-pointer"
      style={{ fontFamily: "Inter, sans-serif" }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Enquire More"
    >
      Enquire More
    </motion.button>
  );
}

export default HeroCTA;