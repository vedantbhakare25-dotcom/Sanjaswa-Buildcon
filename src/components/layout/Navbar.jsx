import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import logo from "../../assets/images/logo.png";

const SEARCH_INDEX = [
  {
    title: "Sanjaswa Heights (Residential Sky Villas)",
    category: "Project",
    targetId: "projects",
  },
  {
    title: "Ahilyanagar Commercial Hub (Office Complex)",
    category: "Project",
    targetId: "projects",
  },
  {
    title: "Godavari Plaza & Retail Boulevard",
    category: "Project",
    targetId: "projects",
  },
  {
    title: "Shirdi Corridor Infrastructure Project",
    category: "Project",
    targetId: "projects",
  },
  {
    title: "Who Are We & Company History",
    category: "About",
    targetId: "about",
  },
  {
    title: "Why Kopargaon Investment Advantages",
    category: "About",
    targetId: "about",
  },
  {
    title: "Our Vision & Mission Statement",
    category: "About",
    targetId: "about",
  },
  {
    title: "Send Project Enquiry & Consultation",
    category: "Contact",
    targetId: "contact",
  },
  {
    title: "Corporate Office & Map Location",
    category: "Location",
    targetId: "map-section",
  },
];

function Navbar({ menuOpen, onMenuOpen, onMenuClose }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    setSearchOpen(false);
    setSearchQuery("");

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const filteredResults = searchQuery.trim()
    ? SEARCH_INDEX.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          item.category
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="fixed inset-x-0 top-0 z-[60] select-none">
      <motion.nav
        className={`
          w-full
          bg-white/95
          backdrop-blur-xl
          border-b border-[rgba(31,72,255,0.12)]
          text-slate-900
          transition-all duration-300
          ${
            isScrolled
              ? "py-2 shadow-md"
              : "py-2.5 sm:py-3 lg:py-3.5"
          }
        `}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div
          className="
            mx-auto
            max-w-[1440px]
            px-4
            sm:px-6
            lg:px-10
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* =========================
              LOGO / BRAND
          ========================== */}
          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              lg:gap-4
              cursor-pointer
              text-left
              group
              min-w-0
              flex-1
              lg:flex-none
            "
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Sanjaswa Buildcon Logo"
              className="
                h-12
                w-auto
                object-contain
                flex-none
                transition-transform
                duration-300
                group-hover:scale-105
                sm:h-14
                md:h-16
                lg:h-20
                xl:h-24
              "
            />

            {/* Brand Text */}
            <div className="min-w-0">
              <span
                className="
                  block
                  text-lg
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  xl:text-5xl
                  font-bold
                  uppercase
                  tracking-tight
                  leading-none
                  text-[#1F48FF]
                  whitespace-nowrap
                "
                style={{
                  fontFamily:
                    '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                }}
              >
                SANJASWA BUILDCON
              </span>

              <span
                className="
                  block
                  text-[6px]
                  sm:text-[8px]
                  md:text-[9px]
                  lg:text-[10px]
                  font-sans
                  uppercase
                  font-medium
                  tracking-[0.18em]
                  sm:tracking-[0.25em]
                  text-[#1F48FF]/70
                  mt-1
                  whitespace-nowrap
                "
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Building With Precision
              </span>
            </div>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
              >= 1024px
          ========================== */}
          <div className="hidden lg:flex flex-col items-end gap-2 flex-none">
            {/* Top Row */}
            <div
              className="
                flex
                items-center
                gap-5
                xl:gap-7
                text-xs
                xl:text-sm
                font-semibold
                uppercase
                tracking-[0.10em]
                whitespace-nowrap
              "
              style={{
                fontFamily: '"Roboto Condensed", sans-serif',
              }}
            >
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                CONTACT US
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("map-section")}
                className="
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                FIND US
              </button>
            </div>

            {/* Main Navigation Row */}
            <div
              className="
                flex
                items-center
                gap-4
                xl:gap-7
                text-xs
                xl:text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
                xl:tracking-[0.16em]
                whitespace-nowrap
              "
              style={{
                fontFamily: '"Roboto Condensed", sans-serif',
              }}
            >
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="
                  text-slate-700
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                ABOUT US
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="
                  text-slate-700
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                OUR WORK
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="
                  text-slate-700
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                WHY KOPARGAON
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  text-slate-700
                  hover:text-[#1F48FF]
                  transition-colors
                  cursor-pointer
                "
              >
                ENQUIRY
              </button>

              {/* Search */}
              <div
                ref={searchRef}
                className="relative flex-none"
              >
                <button
                  type="button"
                  aria-label="Open search"
                  onClick={() =>
                    setSearchOpen((prev) => !prev)
                  }
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[rgba(31,72,255,0.20)]
                    text-[#1F48FF]
                    hover:bg-[#1F48FF]/[0.06]
                    hover:border-[#1F48FF]
                    transition-all
                    duration-200
                    cursor-pointer
                    shadow-sm
                  "
                >
                  <Search size={15} />
                </button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 4,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="
                        absolute
                        right-0
                        top-full
                        mt-2
                        w-[min(20rem,calc(100vw-2rem))]
                        rounded-2xl
                        border
                        border-[rgba(31,72,255,0.18)]
                        bg-white
                        p-3
                        shadow-2xl
                        text-slate-900
                        z-[70]
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-[rgba(31,72,255,0.20)]
                          bg-[#FAFAF8]
                          px-3
                          py-2
                          text-slate-900
                          focus-within:border-[#1F48FF]
                        "
                      >
                        <Search
                          size={14}
                          className="text-[#1F48FF] flex-none"
                        />

                        <input
                          type="text"
                          value={searchQuery}
                          placeholder="Search website..."
                          autoFocus
                          onChange={(e) =>
                            setSearchQuery(e.target.value)
                          }
                          className="
                            w-full
                            min-w-0
                            bg-transparent
                            text-xs
                            font-sans
                            text-slate-900
                            outline-none
                            placeholder:text-slate-400
                            font-medium
                          "
                          style={{
                            fontFamily:
                              '"Roboto Condensed", sans-serif',
                          }}
                        />

                        {searchQuery && (
                          <button
                            type="button"
                            onClick={() =>
                              setSearchQuery("")
                            }
                            className="
                              text-slate-400
                              hover:text-slate-700
                              cursor-pointer
                              flex-none
                            "
                          >
                            <X size={12} />
                          </button>
                        )}
                      </div>

                      {searchQuery.trim() !== "" && (
                        <div className="mt-2">
                          {filteredResults.length > 0 ? (
                            <div className="max-h-60 overflow-y-auto space-y-1">
                              {filteredResults.map(
                                (result, i) => (
                                  <button
                                    type="button"
                                    key={i}
                                    onClick={() =>
                                      scrollToSection(
                                        result.targetId
                                      )
                                    }
                                    className="
                                      w-full
                                      text-left
                                      p-2.5
                                      rounded-xl
                                      hover:bg-[#1F48FF]/[0.06]
                                      transition-colors
                                      flex
                                      items-center
                                      justify-between
                                      group
                                      cursor-pointer
                                    "
                                  >
                                    <div className="min-w-0">
                                      <span
                                        className="
                                          block
                                          text-[9px]
                                          font-mono
                                          uppercase
                                          tracking-widest
                                          text-[#1F48FF]
                                          font-semibold
                                        "
                                      >
                                        {result.category}
                                      </span>

                                      <span
                                        className="
                                          block
                                          text-xs
                                          font-semibold
                                          text-slate-900
                                          group-hover:text-[#1F48FF]
                                        "
                                      >
                                        {result.title}
                                      </span>
                                    </div>

                                    <ArrowRight
                                      size={13}
                                      className="
                                        text-[#1F48FF]
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-opacity
                                        flex-none
                                      "
                                    />
                                  </button>
                                )
                              )}
                            </div>
                          ) : (
                            <div
                              className="
                                p-3
                                text-center
                                text-xs
                                text-slate-500
                              "
                            >
                              No matching content found for "
                              {searchQuery}"
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* =========================
              MOBILE / TABLET MENU
              < 1024px
          ========================== */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={
              menuOpen ? onMenuClose : onMenuOpen
            }
            className="
              lg:hidden
              flex
              h-10
              w-10
              sm:h-11
              sm:w-11
              flex-none
              items-center
              justify-center
              rounded-lg
              border
              border-[rgba(31,72,255,0.15)]
              hover:bg-[#1F48FF]/[0.05]
              cursor-pointer
              text-[#1F48FF]
              transition-colors
            "
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span
                  key="close"
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                  initial={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <span
                    className="
                      block
                      h-[2px]
                      w-5
                      origin-center
                      rotate-45
                      translate-y-px
                      rounded-full
                      bg-[#1F48FF]
                    "
                  />

                  <span
                    className="
                      block
                      h-[2px]
                      w-5
                      origin-center
                      -rotate-45
                      -translate-y-px
                      rounded-full
                      bg-[#1F48FF]
                    "
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="burger"
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-[5px]
                  "
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <span
                    className="
                      block
                      h-[2px]
                      w-5
                      rounded-full
                      bg-[#1F48FF]
                    "
                  />

                  <span
                    className="
                      block
                      h-[2px]
                      w-3.5
                      rounded-full
                      bg-[#1F48FF]
                    "
                  />

                  <span
                    className="
                      block
                      h-[2px]
                      w-5
                      rounded-full
                      bg-[#1F48FF]
                    "
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;