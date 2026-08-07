export default function FullscreenMenu({ isOpen, onClose }) {
  return (
    <div
      className={`home-fullscreen-menu fixed inset-0 z-50 bg-slate-950/95 p-8 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="mb-8 text-sm uppercase tracking-[0.25em] text-white"
      >
        Close
      </button>
      <nav className="space-y-4 text-2xl text-white">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
