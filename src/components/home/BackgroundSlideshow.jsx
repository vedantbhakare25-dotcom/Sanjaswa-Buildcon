import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const HERO_IMAGES = [
  // 1. Glass skyscraper geometry — looking up, dramatic perspective
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&fm=jpg&fit=crop",
  // 2. Golden hour construction silhouette — workers, dramatic amber sky
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&fm=jpg&fit=crop",
  // 3. Luxury modern building facade — clean lines, geometric precision
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85&fm=jpg&fit=crop",
  // 4. Night city skyline — cinematic urban light trails
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85&fm=jpg&fit=crop",
  // 5. Abstract concrete architecture — brutalist texture, raw premium
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
    <div className="absolute inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeImage}
          src={activeImage}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.78)_75%)]" />
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/80 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.10), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.08), transparent 45%)",
        }}
      />
    </div>
  );
}

export default BackgroundSlideshow;