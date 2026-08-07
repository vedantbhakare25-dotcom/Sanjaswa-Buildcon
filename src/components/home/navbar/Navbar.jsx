import MenuButton from "./MenuButton";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="home-navbar sticky top-0 z-40 border-b border-slate-200/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-8 py-4 lg:px-14 xl:px-20">
        <div className="text-lg font-semibold tracking-[0.16em] text-slate-900">
          Sanjaswa
        </div>
        <MenuButton onClick={onMenuClick} />
      </div>
    </header>
  );
}
