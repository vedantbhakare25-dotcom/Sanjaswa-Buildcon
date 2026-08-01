import { AnimatePresence, motion } from 'framer-motion';
import { navigationItems } from '../../data/navigationItems.js';
import NavigationHeader from './NavigationHeader.jsx';
import NavigationPanel from './NavigationPanel.jsx';

// IDs that trigger a hero overlay before scrolling
const OVERLAY_IDS = ['about', 'contact', 'enquiry'];

function NavigationOverlay({ isOpen, onClose, onNavItem }) {
  const handlePanelClick = (item) => {
    onClose();
    if (OVERLAY_IDS.includes(item.id) && onNavItem) {
      onNavItem(item.id);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="nav-overlay"
          className="fixed inset-0 z-40 flex overflow-hidden"
          initial={false}
          exit={{}}
        >
          <div className="flex h-full w-full flex-col sm:flex-row">
            {navigationItems.map((item, index) => (
              <NavigationPanel
                key={item.id}
                item={item}
                index={index}
                onClick={() => handlePanelClick(item)}
              />
            ))}
          </div>
          <NavigationHeader onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavigationOverlay;
