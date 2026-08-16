import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Target, Eye, CheckCircle, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          const duration = 1600;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        } else {
          setCount(0);
        }
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const whyChooseUs = [
  {
    title: "Decade of Experience",
    desc: "Over 10 years building trust and structures that stand the test of time across Maharashtra.",
  },
  {
    title: "Quality Craftsmanship",
    desc: "Every project is executed with precision, premium materials, and uncompromising attention to detail.",
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your time. Our streamlined process ensures projects are completed on schedule.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs. Clear quotations, honest communication, and value for every rupee spent.",
  },
  {
    title: "End-to-End Service",
    desc: "From design and planning to construction and handover — we manage everything seamlessly.",
  },
  {
    title: "Licensed & Certified",
    desc: "Fully licensed with all regulatory approvals, ensuring complete legal compliance on every project.",
  },
];

const whyKopargaon = [
  {
    title: "Strategic Location",
    desc: "Kopargaon sits at the heart of Ahmednagar district with excellent connectivity to Pune, Nashik, and Aurangabad.",
  },
  {
    title: "Growing Infrastructure",
    desc: "Rapid development of roads, utilities, and civic amenities makes Kopargaon a prime investment destination.",
  },
  {
    title: "Affordable Land",
    desc: "Compared to metro cities, Kopargaon offers exceptional value with significant appreciation potential.",
  },
  {
    title: "Peaceful Living",
    desc: "A city that balances modern amenities with the calm of a close-knit community — ideal for families.",
  },
];

function SectionLabel({ children }) {
  return (
    <span
      className="text-[10px] font-sans font-medium uppercase tracking-[0.35em]"
      style={{ color: "rgba(31, 72, 255, 0.65)", fontFamily: "Inter, sans-serif" }}
    >
      {children}
    </span>
  );
}

function ArchitecturalCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 bg-white ${className}`}
      style={{
        borderColor: "rgba(31, 72, 255, 0.12)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
      }}
    >
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAFAF8]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* ── WHO ARE WE ── */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <ArchitecturalCard>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <SectionLabel>Who Are We</SectionLabel>
                <h2
                  className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-tight"
                  style={{
                    fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                    color: "#1F48FF",
                  }}
                >
                  Building Maharashtra's
                  <br />
                  Future, One Project
                  <br />
                  at a Time
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                  Sanjaswa Builcon is a Kopargaon-based construction company
                  with over a decade of experience delivering residential,
                  commercial, and infrastructure projects across the Ahmednagar
                  region. Founded on the principles of trust, quality, and
                  community, we have grown from a small local contractor to one
                  of the most respected builders in the area.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                  Our team of engineers, architects, and craftsmen work in
                  unison to bring your vision to life — on time, within budget,
                  and beyond expectations. At Sanjaswa, we don't just build
                  structures. We build relationships.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: 10, suffix: "+", label: "Years of Experience" },
                  { num: 150, suffix: "+", label: "Projects Completed" },
                  { num: 500, suffix: "+", label: "Happy Families" },
                  { num: 12, suffix: "", label: "Expert Team Members" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-[rgba(31,72,255,0.12)] bg-white p-5 text-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p
                      className="text-4xl font-bold text-[#1F48FF]"
                      style={{
                        fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                      }}
                    >
                      <CountUp target={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-500 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ArchitecturalCard>
        </motion.div>

        {/* ── VISION & MISSION ── */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp(0.1)}>
            <ArchitecturalCard className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F48FF]/[0.06] border border-[#1F48FF]/15 mb-5">
                <Eye size={20} className="text-[#1F48FF]" />
              </div>
              <SectionLabel>Our Vision</SectionLabel>
              <h3
                className="mt-3 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1F48FF]"
                style={{
                  fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                }}
              >
                A Landmark in Every Skyline
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                To be Maharashtra's most trusted construction partner —
                recognised for creating spaces that inspire, endure, and elevate
                communities. We envision a Kopargaon where every structure
                reflects quality, dignity, and purpose.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                We aspire to expand our footprint across the region while
                staying true to our roots — building homes that families cherish
                for generations and commercial spaces that drive local
                prosperity.
              </p>
            </ArchitecturalCard>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <ArchitecturalCard className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1F48FF]/[0.06] border border-[#1F48FF]/15 mb-5">
                <Target size={20} className="text-[#1F48FF]" />
              </div>
              <SectionLabel>Our Mission</SectionLabel>
              <h3
                className="mt-3 text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1F48FF]"
                style={{
                  fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                }}
              >
                Excellence in Every Brick
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                To deliver construction projects that exceed client expectations
                through innovative design, superior materials, skilled
                workmanship, and transparent communication at every stage of the
                journey.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                Our mission is to make quality construction accessible —
                ensuring every client, whether building their first home or a
                large commercial complex, receives the same dedication and care.
              </p>
            </ArchitecturalCard>
          </motion.div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <div className="mb-8 text-center">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#1F48FF]"
              style={{
                fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
              }}
            >
              The Sanjaswa Difference
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm text-slate-500 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
              We combine local knowledge with professional expertise to deliver
              results that truly matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl border border-[rgba(31,72,255,0.12)] bg-white p-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 flex-none text-[#1F48FF]"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── WHY KOPARGAON ── */}
        <motion.div {...fadeUp(0.05)}>
          <ArchitecturalCard>
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#1F48FF]/[0.06] border border-[#1F48FF]/15">
                <MapPin size={20} className="text-[#1F48FF]" />
              </div>
              <div>
                <SectionLabel>Why Kopargaon</SectionLabel>
                <h2
                  className="mt-2 text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1F48FF]"
                  style={{
                    fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                  }}
                >
                  Invest Where It Matters
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-500 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                  Kopargaon is not just where we work — it's a city on the rise,
                  offering unmatched opportunity for homebuyers and investors
                  alike.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyKopargaon.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-xl border border-[rgba(31,72,255,0.12)] bg-white p-5"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -2 }}
                >
                  <h4 className="text-sm font-semibold text-slate-900 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </ArchitecturalCard>
        </motion.div>
      </div>
    </section>
  );
}
