import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import LogoScreen from "./LogoScreen";
import CompanyNameScreen from "./CompanyNameScreen";
import ShlokaScreen from "./ShlokaScreen";

const INTRO_TIMELINE = [
  {
    id: "logo",
    component: LogoScreen,
    duration: 2600,
  },
  {
    id: "company",
    component: CompanyNameScreen,
    duration: 3000,
  },
  {
    id: "shloka",
    component: ShlokaScreen,
    duration: 3400,
  },
];

function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [finished, setFinished] = useState(false);

  const Current = INTRO_TIMELINE[stage]?.component;

  useEffect(() => {
    if (!INTRO_TIMELINE[stage]) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, INTRO_TIMELINE[stage].duration);

    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Background Glow */}

          <div
            className="absolute -top-72 -left-72 h-[900px] w-[900px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(31,72,255,0.06) 0%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />

          <div
            className="absolute -bottom-72 -right-72 h-[900px] w-[900px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(31,72,255,0.05) 0%, transparent 70%)",
              filter: "blur(120px)",
            }}
          />

          {/* Center */}

          <div className="relative flex h-full items-center justify-center overflow-hidden px-6">
            <AnimatePresence mode="wait">
              {Current && (
                <Current
                  key={INTRO_TIMELINE[stage].id}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSequence;