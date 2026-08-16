import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, MapPin, Building2 } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Sanjaswa Heights",
    category: "Residential",
    location: "Kopargaon, Maharashtra",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
    desc: "Luxury 3 & 4 BHK sky residences with modern amenities and seismic-resistant engineering.",
    stats: "45,000 Sq. Ft.",
  },
  {
    id: 2,
    title: "Ahilyanagar Commercial Hub",
    category: "Commercial",
    location: "Ahilyanagar, Maharashtra",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    desc: "State-of-the-art corporate office complex with high-speed elevators and green building certification.",
    stats: "75,000 Sq. Ft.",
  },
  {
    id: 3,
    title: "Godavari Plaza & Retail",
    category: "Commercial",
    location: "Kopargaon, Maharashtra",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    desc: "Prime retail boulevard and commercial spaces designed for high footfall and merchant growth.",
    stats: "32,000 Sq. Ft.",
  },
  {
    id: 4,
    title: "Shirdi Corridor Infra Project",
    category: "Infrastructure",
    location: "Ahmednagar District",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    desc: "Key civic access road and bridge infrastructure strengthening regional transport connectivity.",
    stats: "12 KM Transit Line",
  },
];

const CATEGORIES = ["All", "Residential", "Commercial", "Infrastructure"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-24 bg-[#FAFAF8] text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="text-[10px] font-sans font-medium uppercase tracking-[0.35em]"
              style={{ color: "rgba(31, 72, 255, 0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Our Work
            </span>
            <h2
              className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#1F48FF]"
              style={{
                fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
              }}
            >
              Featured Projects
            </h2>
            <p
              className="mt-3 max-w-xl text-sm text-slate-600 font-sans"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore our portfolio of landmark residential, commercial, and municipal infrastructure developments across Maharashtra.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[rgba(31,72,255,0.12)] bg-white p-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`rounded-lg px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  activeTab === cat
                    ? "bg-[#1F48FF] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#1F48FF] hover:bg-[#1F48FF]/[0.04]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(31,72,255,0.12)] bg-white transition-all duration-300 hover:shadow-xl hover:border-[#1F48FF]/30"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F48FF]">
                  <Building2 size={11} />
                  <span>{project.category}</span>
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 transition-transform duration-300 group-hover:bg-[#1F48FF] group-hover:text-white group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-white/90">
                  <MapPin size={13} className="text-blue-400" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">{project.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3
                    className="text-2xl font-bold uppercase tracking-tight text-[#1F48FF] group-hover:text-blue-700 transition-colors"
                    style={{ fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                    {project.stats}
                  </span>
                </div>

                <p
                  className="text-xs text-slate-600 leading-relaxed font-sans"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
