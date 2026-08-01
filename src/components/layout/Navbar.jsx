import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar({ menuOpen, onMenuOpen, onMenuClose }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch theme after scrolling past 80% of viewport height
      setIsDark(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme values
  const navBg = isDark ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.08)";

  const borderTopColor = isDark
    ? "rgba(56,189,248,0.15)"
    : "rgba(255,255,255,0.4)";

  const borderBottomColor = isDark
    ? "rgba(56,189,248,0.20)"
    : "rgba(255,255,255,0.35)";

  const logoFilter = isDark
    ? "drop-shadow(0 0 6px rgba(56,189,248,0.35))"
    : "brightness(0) invert(1) drop-shadow(0 0 18px rgba(255,255,255,0.45))";

  const burgerColor = isDark ? "#38bdf8" : "#ffffff";

  const brandTextGradient = isDark
    ? "linear-gradient(90deg,#38bdf8,#7dd3fc,#bae6fd,#7dd3fc,#38bdf8)"
    : "linear-gradient(90deg,#ffffff,#dbeafe,#93c5fd,#60a5fa,#dbeafe,#ffffff)";

  const brandTextShadow = isDark
    ? "0 0 10px rgba(56,189,248,0.25), 0 0 20px rgba(125,211,252,0.15)"
    : "0 0 10px rgba(147,197,253,0.35), 0 0 20px rgba(96,165,250,0.25)";

  const boxShadow = isDark
    ? "0 4px 24px rgba(56,189,248,0.15), 0 0 20px rgba(125,211,252,0.12), inset 0 1px 0 rgba(255,255,255,0.8)"
    : "0 12px 40px rgba(0,0,0,0.25), 0 0 30px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.15)";
  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6 sm:px-10 rounded-b-[32px] overflow-hidden"
      style={{
        height: "82px",
        background: navBg,
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        boxShadow,
        transition: "background 0.6s ease, box-shadow 0.6s ease",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px transition-all duration-600"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderTopColor}, transparent)`,
        }}
      />

      {/* Bottom glow line */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px transition-all duration-600"
        style={{
          background: `linear-gradient(90deg, transparent, ${borderBottomColor}, transparent)`,
        }}
      />

      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2"
        style={{
          background: isDark
            ? "none"
            : "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative flex items-center justify-center cursor-pointer"
        aria-label="Go to homepage"
      >
        <img
          src={logo}
          alt="Sanjaswa Builcon"
          className="h-14 w-14 sm:h-20 md:h-24 object-contain"
          style={{
            filter: logoFilter,
            transition: "filter 0.6s ease",
          }}
        />
      </motion.button>

      {/* Center Brand */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <h1
          className="text-[8px] sm:text-[10px] md:text-xs font-serif uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.45em] text-transparent bg-clip-text whitespace-nowrap"
          style={{
            backgroundImage: brandTextGradient,
            WebkitBackgroundClip: "text",
            textShadow: brandTextShadow,
            transition: "all 0.6s ease",
          }}
        >
          Building With Precision
        </h1>
      </motion.div>

      {/* Menu Toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={menuOpen ? onMenuClose : onMenuOpen}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full"
        style={{
          border: "transparent",
          background: "none",
          boxShadow: "none",
        }}
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.span
              key="close"
              className="absolute flex flex-col items-center justify-center"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="block h-[2px] w-6 origin-center rotate-45 translate-y-px rounded-full opacity-90"
                style={{
                  background: burgerColor,
                  transition: "background 0.6s ease",
                }}
              />
              <span
                className="block h-[2px] w-6 origin-center -rotate-45 -translate-y-px rounded-full opacity-90"
                style={{
                  background: burgerColor,
                  transition: "background 0.6s ease",
                }}
              />
            </motion.span>
          ) : (
            <motion.span
              key="burger"
              className="absolute flex flex-col items-center justify-center gap-[6px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="block h-[2px] w-6 rounded-full transition-all duration-300 group-hover:w-7"
                style={{
                  background: burgerColor,
                  transition: "background 0.6s ease, width 0.3s ease",
                }}
              />
              <span
                className="block h-[2px] w-4 rounded-full transition-all duration-300 group-hover:w-7"
                style={{
                  background: burgerColor,
                  transition: "background 0.6s ease, width 0.3s ease",
                }}
              />
              <span
                className="block h-[2px] w-6 rounded-full transition-all duration-300 group-hover:w-7"
                style={{
                  background: burgerColor,
                  transition: "background 0.6s ease, width 0.3s ease",
                }}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;
