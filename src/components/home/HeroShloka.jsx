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
          className="w-full flex flex-col items-center text-center max-w-2xl"
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Sanskrit text */}
          <p
            className="
              font-sanskrit
              text-xl sm:text-2xl md:text-3xl
              leading-[1.6]
              text-white/85
              text-center
              px-4
            "
            style={{
              textShadow: "0 0 25px rgba(59,130,246,0.18)",
            }}
          >
            {current.text}
          </p>

          {/* Meaning */}
          <p className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-white/50 text-center px-4">
            {current.meaning}
          </p>
        </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default HeroShloka;