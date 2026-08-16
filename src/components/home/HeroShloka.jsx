import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const shlokas = [
  {
    text: "योगः कर्मसु कौशलम्।",
    meaning: "Excellence in action is Yoga.",
  },
  {
    text: "विद्या ददाति विनयं।",
    meaning: "Knowledge gives humility.",
  },
  {
    text: "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।",
    meaning: "Success comes from effort, not desire alone.",
  },
  {
    text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    meaning: "Focus on action, not just results.",
  },
];

function HeroShloka() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % shlokas.length);
    }, 4500);

    return () => clearInterval(t);
  }, []);

  const current = shlokas[index];

  return (
    <div className="w-full flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.text}
          className="w-full flex flex-col items-center text-center max-w-2xl px-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sanskrit text */}
          <p className="font-sanskrit text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-white">
            {current.text}
          </p>

          {/* Separator rule */}
          <div className="my-3 h-[1px] w-[36px] bg-white/20" />

          {/* Meaning */}
          <p
            className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium text-white/70"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {current.meaning}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default HeroShloka;