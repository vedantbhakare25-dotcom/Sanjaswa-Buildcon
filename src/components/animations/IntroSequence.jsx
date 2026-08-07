import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

// Smooth cinematic easing curve
const SMOOTH_EASE = [0.16, 1, 0.3, 1];
const EXIT_EASE = [0.7, 0, 0.84, 0];

const STAGE_VARIANTS = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: SMOOTH_EASE,
      staggerChildren: 0.16,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 1.02,
    filter: "blur(8px)",
    transition: {
      duration: 0.7,
      ease: EXIT_EASE,
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const ITEM_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: SMOOTH_EASE },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.5, ease: EXIT_EASE },
  },
};

function LogoStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex items-center justify-center"
    >
      <motion.img
        src={logo}
        alt="Sanjaswa Builcon Logo"
        className="h-60 w-60 object-contain sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
        style={{
          willChange: "transform, opacity, filter",
          filter:
            "drop-shadow(0 16px 48px rgba(31,72,255,0.16)) drop-shadow(0 0 90px rgba(31,72,255,0.12))",
        }}
      />
    </motion.div>
  );
}

function CompanyNameStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-center px-6"
      style={{ willChange: "transform, opacity, filter" }}
    >
      <motion.p
        variants={ITEM_VARIANTS}
        className="mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.38em]"
        style={{
          color: "rgba(31,72,255,0.65)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Building With Precision
      </motion.p>

      <motion.h1
        variants={ITEM_VARIANTS}
        style={{
          fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
          fontWeight: 900,
          fontSize: "clamp(3.5rem, 10vw, 7rem)",
          lineHeight: 0.95,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          color: "#1F48FF",
          textShadow: "0 0 40px rgba(31,72,255,0.15)",
        }}
      >
        SANJASWA BUILDCON
      </motion.h1>
    </motion.div>
  );
}

function ShlokaStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      className="max-w-5xl text-center px-6"
      style={{ willChange: "transform, opacity, filter" }}
    >
      <motion.p
        variants={ITEM_VARIANTS}
        className="font-sanskrit"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          lineHeight: 1.45,
          fontWeight: 600,
          color: "#1F48FF",
          textShadow: "0 0 35px rgba(31,72,255,0.15)",
        }}
      >
        दृढमूलं हि यत् कार्यं न तद् विपद्यते क्वचित्।
      </motion.p>

      <motion.p
        variants={ITEM_VARIANTS}
        style={{
          marginTop: "2rem",
          fontFamily: "Inter, sans-serif",
          fontSize: "0.92rem",
          fontWeight: 500,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "rgba(31,72,255,0.55)",
        }}
      >
        A work built on a strong foundation never fails.
      </motion.p>
    </motion.div>
  );
}

const TIMELINE = [
  { id: "logo", duration: 2600, Component: LogoStage },
  { id: "company", duration: 3000, Component: CompanyNameStage },
  { id: "shloka", duration: 3400, Component: ShlokaStage },
];

function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (stage >= TIMELINE.length) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, TIMELINE[stage].duration);

    return () => clearTimeout(timer);
  }, [stage]);

  const CurrentComponent = TIMELINE[stage]?.Component;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!finished && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden bg-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Ambient Motion Glow 1 - Top Left */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-72 -left-72 h-[900px] w-[900px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(31,72,255,0.08) 0%, transparent 70%)",
              filter: "blur(130px)",
            }}
          />

          {/* Ambient Motion Glow 2 - Bottom Right */}
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-72 -right-72 h-[900px] w-[900px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(31,72,255,0.07) 0%, transparent 70%)",
              filter: "blur(130px)",
            }}
          />

          {/* Main Stage Display */}
          <div className="relative flex h-full items-center justify-center overflow-hidden px-6">
            <AnimatePresence mode="wait">
              {CurrentComponent && (
                <CurrentComponent key={TIMELINE[stage].id} />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSequence;