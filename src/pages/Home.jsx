import { useState } from "react";
import AboutHeroOverlay from "../components/contact/AboutHeroOverlay.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import ContactHeroOverlay from "../components/contact/ContactHeroOverlay.jsx";
import EnquiryHeroOverlay from "../components/contact/EnquiryHeroOverlay.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import MapSection from "../components/contact/MapSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import NavigationOverlay from "../components/navigation/NavigationOverlay.jsx";

const overlayConfig = {
  about: {
    bgImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80",
    scrollTarget: "about",
  },
  contact: {
    bgImage:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80",
    scrollTarget: "contact",
  },
  enquiry: {
    bgImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
    scrollTarget: "contact",
  },
};

function Home({ introComplete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const handleNavItem = (id) => {
    setTimeout(() => setActiveOverlay(id), 950);
  };

  const handleDismiss = () => {
    const target = overlayConfig[activeOverlay]?.scrollTarget;
    setActiveOverlay(null);
    setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300); // short delay — exit animation already played inside overlay
  };

  return (
    <main className="min-h-screen" style={{ background: "#080c14" }}>
      {introComplete && (
        <Navbar
          menuOpen={menuOpen}
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
        />
      )}

      <NavigationOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavItem={(id) => {
          setMenuOpen(false);
          handleNavItem(id);
        }}
      />

      <HeroSection />
      <AboutSection />
      <ContactSection />
      <MapSection />

      {activeOverlay === "about" && (
        <AboutHeroOverlay isVisible={true} onDismiss={handleDismiss} />
      )}
      {activeOverlay === "contact" && (
        <ContactHeroOverlay isVisible={true} onDismiss={handleDismiss} />
      )}
      {activeOverlay === "enquiry" && (
        <EnquiryHeroOverlay isVisible={true} onDismiss={handleDismiss} />
      )}
    </main>
  );
}

export default Home;
