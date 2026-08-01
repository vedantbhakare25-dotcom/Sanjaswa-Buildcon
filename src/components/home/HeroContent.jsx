import HeroCTA from "./HeroCTA.jsx";
import HeroLogo from "./HeroLogo.jsx";
import HeroShloka from "./HeroShloka.jsx";
import HeroTitle from "./HeroTitle.jsx";

function HeroContent() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center text-center px-6">

      {/* stack container */}
      <div className="flex flex-col items-center justify-center">

        <HeroLogo />

        {/* controlled spacing block */}
        <div className="mt-10 space-y-8">
          <HeroTitle />
          <HeroShloka />
        </div>

        <div className="mt-12">
          <HeroCTA />
        </div>

      </div>
    </div>
  );
}

export default HeroContent;