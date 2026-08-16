import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&fm=jpg&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&fm=jpg&fit=crop",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&fm=jpg&fit=crop",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85&fm=jpg&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85&fm=jpg&fit=crop",
];

const SLIDE_INTERVAL = 6000;

function BackgroundSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(t);
  }, []);

  const activeImage = useMemo(() => HERO_IMAGES[activeIndex], [activeIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080C14]">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={activeImage}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[#080C14]/50" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#080C14]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080C14]/80 to-transparent" />
    </div>
  );
}

export default BackgroundSlideshow;