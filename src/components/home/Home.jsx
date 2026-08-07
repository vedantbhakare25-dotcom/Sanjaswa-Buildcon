import Navbar from "./navbar/Navbar";

import Hero from "./hero/Hero";

import About from "./about/About";
import FeaturedProjects from "./projects/FeaturedProjects";
import Philosophy from "./philosophy/Philosophy";
import Stats from "./stats/Stats";
import ContactCTA from "./contact/ContactCTA";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#F7F7F5] text-[#111111]">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Philosophy */}
      <Philosophy />

      {/* Statistics */}
      <Stats />

      {/* Contact */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}