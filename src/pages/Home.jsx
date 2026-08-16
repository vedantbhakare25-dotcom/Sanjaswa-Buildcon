import { useState } from "react";
import AboutHeroOverlay from "../components/contact/AboutHeroOverlay.jsx";
import AboutSection from "../components/about/AboutSection.jsx";
import ContactHeroOverlay from "../components/contact/ContactHeroOverlay.jsx";
import EnquiryHeroOverlay from "../components/contact/EnquiryHeroOverlay.jsx";
import ContactSection from "../components/contact/ContactSection.jsx";
import MapSection from "../components/contact/MapSection.jsx";
import HeroSection from "../components/home/HeroSection.jsx";
import ProjectsSection from "../components/projects/ProjectsSection.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import NavigationOverlay from "../components/navigation/NavigationOverlay.jsx";

const overlayConfig = {
  about: {
    scrollTarget: "about",
  },
  contact: {
    scrollTarget: "contact",
  },
  enquiry: {
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
    }, 300);
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-slate-900 overflow-x-hidden">
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
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <MapSection />
      <Footer />

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
