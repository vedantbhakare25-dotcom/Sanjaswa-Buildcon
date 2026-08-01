import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

function HeroLogo() {
  return (
    <motion.img
      src={logo}
      className="mx-auto h-36 w-36 object-contain brightness-0 invert drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
      }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
        y: { duration: 4, repeat: Infinity },
      }}
    />
  );
}

export default HeroLogo;