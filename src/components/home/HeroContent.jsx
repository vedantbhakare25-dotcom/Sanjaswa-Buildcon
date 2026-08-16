import HeroCTA from "./HeroCTA.jsx";
import HeroShloka from "./HeroShloka.jsx";
import HeroTitle from "./HeroTitle.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";

function HeroContent() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-between flex-1 py-4 sm:py-6">
      {/* Middle Row: Massive Left-Aligned Headline */}
      <div className="flex-1 flex items-center">
        <HeroTitle />
      </div>

      {/* Bottom Control & Info Row (No separators) */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        {/* Left: Action CTA Button */}
        <div className="flex items-center gap-4">
          <HeroCTA />
        </div>

        {/* Middle/Right: Frameless Shloka & Scroll Indicator */}
        <div className="flex items-end gap-6">
          <HeroShloka />
          <div className="hidden sm:block">
            <ScrollIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;