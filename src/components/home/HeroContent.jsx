import HeroCTA from "./HeroCTA.jsx";
import HeroShloka from "./HeroShloka.jsx";
import HeroTitle from "./HeroTitle.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";

function HeroContent() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col justify-between flex-1 h-full py-2 sm:py-4">
      {/* Middle Row: Left-Aligned Headline */}
      <div className="flex-1 flex items-center my-auto min-h-0">
        <HeroTitle />
      </div>

      {/* Bottom Unified Control & Information Row */}
      <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 min-h-0">
        {/* Left: Action CTA Button */}
        <div className="flex items-center gap-3">
          <HeroCTA />
        </div>

        {/* Right: Frameless Shloka & Scroll Indicator */}
        <div className="flex items-end justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto">
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