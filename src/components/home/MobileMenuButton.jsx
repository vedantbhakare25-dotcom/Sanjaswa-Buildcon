function MobileMenuButton({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Open menu"
      onClick={onClick}
      className="group fixed right-6 top-6 z-30 flex h-12 w-12 flex-col items-center justify-center gap-[7px] transition-opacity duration-300 hover:opacity-75 sm:right-10 sm:top-10"
    >
      <span className="block h-px w-7 bg-white transition-transform duration-300 group-hover:scale-x-105" />
      <span className="block h-px w-5 bg-white transition-transform duration-300 group-hover:scale-x-110" />
      <span className="block h-px w-7 bg-white transition-transform duration-300 group-hover:scale-x-105" />
    </button>
  );
}

export default MobileMenuButton;