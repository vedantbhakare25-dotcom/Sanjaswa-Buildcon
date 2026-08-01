import { motion } from "framer-motion";

function HeroCTA() {
  const handleClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      className="
        relative overflow-hidden
        px-8 py-3
        text-xs uppercase tracking-[0.5em]
        text-white
        border border-white/40
        rounded-full
        backdrop-blur-md
        transition-all duration-5000
        hover:border-white/70 hover:bg-white/10
      "
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 2 }}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
      Enquire More
    </motion.button>
  );
}

export default HeroCTA;