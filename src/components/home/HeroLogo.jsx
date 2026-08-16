import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

function HeroLogo() {
  return (
    <motion.img
      src={logo}
      alt="Sanjaswa Emblem"
      className="mx-auto h-24 w-24 sm:h-28 sm:w-28 object-contain brightness-0 invert opacity-90"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export default HeroLogo;