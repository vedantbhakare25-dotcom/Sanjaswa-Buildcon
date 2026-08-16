import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

function Navbar({ menuOpen, onMenuOpen, onMenuClose }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled
    ? "rgba(250, 250, 248, 0.88)"
    : "rgba(8, 12, 20, 0.70)";

  const borderBottomColor = isScrolled
    ? "rgba(31, 72, 255, 0.12)"
    : "rgba(255, 255, 255, 0.08)";

  const logoFilter = isScrolled
    ? "none"
    : "brightness(0) invert(1) opacity(90%)";

  const burgerColor = isScrolled ? "#1F48FF" : "#ffffff";

  const brandTextColor = isScrolled
    ? "rgba(31, 72, 255, 0.75)"
    : "rgba(255, 255, 255, 0.75)";

  const boxShadow = isScrolled
    ? "0 4px 20px rgba(0, 0, 0, 0.04)"
    : "0 4px 30px rgba(0, 0, 0, 0.15)";

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6 sm:px-10 rounded-b-[24px] overflow-hidden"
      style={{
        height: "76px",
        background: navBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${borderBottomColor}`,
        boxShadow,
        transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="relative flex items-center justify-center cursor-pointer"
        aria-label="Go to homepage"
      >
        <img
          src={logo}
          alt="Sanjaswa Builcon"
          className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
          style={{
            filter: logoFilter,
            transition: "filter 0.5s ease",
          }}
        />
      </motion.button>

      {/* Center Brand Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2"
      >
        <h1
          className="text-[9px] sm:text-[10px] md:text-xs font-sans uppercase font-medium tracking-[0.25em] sm:tracking-[0.35em] whitespace-nowrap"
          style={{
            color: brandTextColor,
            fontFamily: "Inter, sans-serif",
            transition: "color 0.5s ease",
          }}
        >
          BUILDING WITH PRECISION
        </h1>
      </motion.div>

      {/* Menu Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={menuOpen ? onMenuClose : onMenuOpen}
        className="group relative flex h-11 w-11 items-center justify-center rounded-lg border border-transparent hover:border-white/10 cursor-pointer"
        style={{
          background: "none",
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
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="block h-[2px] w-5 origin-center rotate-45 translate-y-px rounded-full"
                style={{
                  background: burgerColor,
                  transition: "background 0.5s ease",
                }}
              />
              <span
                className="block h-[2px] w-5 origin-center -rotate-45 -translate-y-px rounded-full"
                style={{
                  background: burgerColor,
                  transition: "background 0.5s ease",
                }}
              />
            </motion.span>
          ) : (
            <motion.span
              key="burger"
              className="absolute flex flex-col items-center justify-center gap-[5px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="block h-[2px] w-5 rounded-full transition-all duration-300 group-hover:w-6"
                style={{
                  background: burgerColor,
                  transition: "background 0.5s ease, width 0.25s ease",
                }}
              />
              <span
                className="block h-[2px] w-3 rounded-full transition-all duration-300 group-hover:w-6"
                style={{
                  background: burgerColor,
                  transition: "background 0.5s ease, width 0.25s ease",
                }}
              />
              <span
                className="block h-[2px] w-5 rounded-full transition-all duration-300 group-hover:w-6"
                style={{
                  background: burgerColor,
                  transition: "background 0.5s ease, width 0.25s ease",
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
