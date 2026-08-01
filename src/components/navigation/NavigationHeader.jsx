import { motion } from 'framer-motion';
import logo from '../../assets/images/logo.png';

function NavigationHeader({ onClose }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Return to homepage"
        className="pointer-events-auto flex items-center gap-3 opacity-70 transition-opacity duration-300 hover:opacity-100"
      >
      </button>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="pointer-events-auto group flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
      >
        <span className="block h-px w-6 origin-center rotate-45 translate-y-[3px] bg-white opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:w-7" />
        <span className="block h-px w-6 origin-center -rotate-45 -translate-y-[3px] bg-white opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:w-7" />
      </button>
    </motion.div>
  );
}

export default NavigationHeader;