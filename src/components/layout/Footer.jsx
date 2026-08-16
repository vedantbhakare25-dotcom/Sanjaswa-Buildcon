import logo from "../../assets/images/logo.png";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080C14] text-white border-t border-white/10 select-none">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2 rounded-xl bg-white/10 border border-white/15">
                <img
                  src={logo}
                  alt="Sanjaswa Buildcon"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <div>
                <span
                  className="block text-2xl font-bold uppercase tracking-tight leading-none text-white"
                  style={{
                    fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                  }}
                >
                  SANJASWA BUILDCON
                </span>
                <span
                  className="block text-[9px] font-mono uppercase tracking-[0.25em] text-white/60 mt-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Building With Precision
                </span>
              </div>
            </div>

            <p
              className="text-xs text-white/60 leading-relaxed max-w-sm font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Sanjaswa Builcon is a premier construction enterprise delivering benchmark residential, commercial, and municipal infrastructure projects across Kopargaon and Ahilyanagar.
            </p>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2">
            <h4
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer">
                  Why Kopargaon
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors cursor-pointer">
                  Vision & Mission
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors cursor-pointer">
                  Careers & Hiring
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2">
            <h4
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              OUR WORK
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer">
                  Residential Sky Villas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer">
                  Commercial Complexes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer">
                  Civic Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="hover:text-white transition-colors cursor-pointer">
                  Featured Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Office & Contact Column 3 */}
          <div className="lg:col-span-3">
            <h4
              className="text-[10px] font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              CORPORATE OFFICE
            </h4>
            <p className="text-xs text-white/70 leading-relaxed mb-3 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
              SANJASWA BUILDCON <br />
              123 Business Park, Sector 14 <br />
              Ahilyanagar, Maharashtra, India
            </p>
            <p className="text-xs text-white/70 font-mono">
              +91 98765 43210 <br />
              hello@sanjaswabuilcon.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/50">
          <p>© {new Date().getFullYear()} SANJASWA BUILDCON. ALL RIGHTS RESERVED.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:border-white/30 hover:text-white transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
