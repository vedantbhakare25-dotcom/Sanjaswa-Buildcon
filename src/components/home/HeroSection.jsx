import BackgroundSlideshow from './BackgroundSlideshow.jsx';
import HeroContent from './HeroContent.jsx';
import ScrollIndicator from './ScrollIndicator.jsx';

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden text-white">
      <BackgroundSlideshow />

      {/* Refined ambient glow — subtle, atmospheric, premium */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft violet bloom — top left, very low opacity */}
        <div
          className="absolute -top-60 -left-60 h-[900px] w-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Warm gold whisper — top right */}
        <div
          className="absolute -top-40 -right-60 h-[800px] w-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.055) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Ice blue breath — bottom left */}
        <div
          className="absolute -bottom-60 -left-40 h-[850px] w-[850px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,179,237,0.065) 0%, transparent 68%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Rose petal — bottom right */}
        <div
          className="absolute -bottom-40 -right-40 h-[800px] w-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,113,133,0.055) 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Center depth bloom — barely visible warm white */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />

      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <HeroContent />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
        <ScrollIndicator />
      </div>

      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}

export default HeroSection;