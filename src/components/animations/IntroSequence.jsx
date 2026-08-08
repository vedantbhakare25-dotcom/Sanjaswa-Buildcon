import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

// Restrained Apple/Linear easing curve & timing
const EASE_SPEC = [0.16, 1, 0.3, 1];

// Hardware compositing style helper to force GPU layer promotion
// and prevent CPU subpixel text antialiasing re-rasterization jitter
const GPU_LAYER_STYLE = {
  transform: "translate3d(0,0,0)",
  backfaceVisibility: "hidden",
  WebkitFontSmoothing: "antialiased",
  willChange: "transform, opacity",
};

const STAGE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: EASE_SPEC,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: EASE_SPEC,
    },
  },
};

const CHILD_VARIANTS = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_SPEC },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.3, ease: EASE_SPEC },
  },
};

function LogoStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      style={GPU_LAYER_STYLE}
      className="flex flex-col items-center justify-center text-center"
    >
      {/* Frameless Printed Logo with GPU Compositing Promotion */}
      <motion.img
        variants={CHILD_VARIANTS}
        src={logo}
        alt="Sanjaswa Builcon Logo"
        decoding="async"
        loading="eager"
        style={GPU_LAYER_STYLE}
        className="h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 object-contain pointer-events-none"
      />
    </motion.div>
  );
}

function IdentityStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      style={GPU_LAYER_STYLE}
      className="flex flex-col items-center justify-center text-center max-w-3xl px-6"
    >
      <motion.p
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          fontFamily: "Inter, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.35em",
          color: "rgba(31, 72, 255, 0.65)",
        }}
        className="uppercase font-medium mb-4"
      >
        BUILDING WITH PRECISION
      </motion.p>

      <motion.h1
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
          color: "#1F48FF",
          lineHeight: 0.98,
          letterSpacing: "0.02em",
        }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase"
      >
        SANJASWA BUILDCON
      </motion.h1>

      {/* Specified Separator Rule */}
      <motion.div
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          height: "1px",
          width: "48px",
          background: "rgba(31, 72, 255, 0.30)",
        }}
        className="my-6"
      />

      <motion.p
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          fontFamily: "Inter, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.35em",
          color: "rgba(31, 72, 255, 0.65)",
        }}
        className="uppercase font-medium"
      >
        RESIDENTIAL · COMMERCIAL · INFRASTRUCTURE
      </motion.p>
    </motion.div>
  );
}

function HeritageStage() {
  return (
    <motion.div
      variants={STAGE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
      style={GPU_LAYER_STYLE}
      className="flex flex-col items-center justify-center text-center max-w-3xl px-6"
    >
      <motion.p
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          color: "#1F48FF",
        }}
        className="font-sanskrit text-2xl sm:text-4xl md:text-5xl font-medium leading-relaxed"
      >
        दृढमूलं हि यत् कार्यं न तद् विपद्यते क्वचित्।
      </motion.p>

      {/* Specified Separator Rule */}
      <motion.div
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          height: "1px",
          width: "48px",
          background: "rgba(31, 72, 255, 0.30)",
        }}
        className="my-6"
      />

      <motion.p
        variants={CHILD_VARIANTS}
        style={{
          ...GPU_LAYER_STYLE,
          fontFamily: "Inter, sans-serif",
          fontSize: "10px",
          letterSpacing: "0.35em",
          color: "rgba(31, 72, 255, 0.65)",
        }}
        className="uppercase font-medium"
      >
        A WORK BUILT ON A STRONG FOUNDATION NEVER FAILS.
      </motion.p>
    </motion.div>
  );
}

const TIMELINE = [
  { id: "logo", duration: 2200, Component: LogoStage },
  { id: "identity", duration: 2600, Component: IdentityStage },
  { id: "heritage", duration: 2800, Component: HeritageStage },
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

  // Keyboard ESC listener for immediate completion
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setFinished(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: true });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSkip = () => {
    setFinished(true);
  };

  const CurrentComponent = TIMELINE[stage]?.Component;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!finished && (
        <motion.div
          className="fixed inset-0 h-[100dvh] w-full z-50 flex flex-col justify-between overflow-hidden select-none"
          style={{
            background: "#FAFAF8",
            contain: "layout style",
            ...GPU_LAYER_STYLE,
          }}
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Top Control Bar with Minimalist Pure CSS Skip Button */}
          <header className="relative z-10 flex items-center justify-end px-6 py-6 sm:px-10 sm:py-8">
            <button
              type="button"
              onClick={handleSkip}
              className="rounded-lg px-4 py-2 font-medium uppercase tracking-[0.25em] text-[10px] border border-[rgba(31,72,255,0.18)] bg-transparent text-[rgba(31,72,255,0.75)] transition-all duration-200 hover:border-[rgba(31,72,255,0.38)] hover:bg-[rgba(31,72,255,0.04)] hover:text-[#1F48FF] cursor-pointer"
              style={{ fontFamily: "Inter, sans-serif" }}
              aria-label="Skip intro animation"
            >
              <span>SKIP ✕</span>
            </button>
          </header>

          {/* Main Stage Display Area */}
          <main className="relative z-10 flex flex-1 items-center justify-center px-6">
            <AnimatePresence mode="wait">
              {CurrentComponent && (
                <CurrentComponent key={TIMELINE[stage].id} />
              )}
            </AnimatePresence>
          </main>

          {/* Bottom Spacing Spacer */}
          <footer className="relative z-10 px-6 py-6 sm:px-10 sm:py-8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroSequence;