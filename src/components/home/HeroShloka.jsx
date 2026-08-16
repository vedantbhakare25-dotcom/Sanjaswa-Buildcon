import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const shlokas = [
  {
    text: "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।",
    meaning: "SUCCESS COMES FROM EFFORT, NOT DESIRE ALONE.",
  },
  {
    text: "दृढमूलं हि यत् कार्यं न तद् विपद्यते क्वचित्।",
    meaning: "A WORK BUILT ON A STRONG FOUNDATION NEVER FAILS.",
  },
  {
    text: "योगः कर्मसु कौशलम्।",
    meaning: "EXCELLENCE IN ACTION IS YOGA.",
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
    <div className="text-left sm:text-right">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.text}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0.5"
        >
          {/* Sanskrit Text - Compact single line Devanagari */}
          <p className="font-sanskrit text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl font-medium leading-tight text-white whitespace-nowrap drop-shadow-sm">
            {current.text}
          </p>

          {/* Translation - Compact single line directly below */}
          <p
            className="font-sans text-[8px] xs:text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-medium text-white/85 whitespace-nowrap drop-shadow-sm"
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