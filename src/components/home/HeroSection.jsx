import BackgroundSlideshow from './BackgroundSlideshow.jsx';
import HeroContent from './HeroContent.jsx';
import ScrollIndicator from './ScrollIndicator.jsx';

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden text-white bg-[#080C14]">
      <BackgroundSlideshow />

      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <HeroContent />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <ScrollIndicator />
      </div>

      {/* Soft bottom transition fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080C14] to-transparent" />
    </section>
  );
}

export default HeroSection;