import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Target, Eye, CheckCircle, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset and start counting
          setCount(0);
          const duration = 1800;
          const steps = 60;
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
          // Reset when out of view so it replays next time
          setCount(0);
        }
      },
      { threshold: 0.3 },
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
    <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-blue-500">
      {children}
    </span>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[28px] border p-6 md:p-8 ${className}`}
      style={{
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(20px)",
        borderColor: "rgba(255,255,255,0.9)",
        boxShadow: "0 20px 60px rgba(37,99,235,0.08)",
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
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fcfdff 0%, #f8fbff 35%, #eef6ff 100%)",
      }}
    >
      {/* Background glows */}
      {/* Conic Glow Top Left */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.06, 1] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-72 -top-72 h-[900px] w-[900px] rounded-full"
        style={{
          background: `conic-gradient(from 0deg,rgba(255,0,128,0.14),rgba(255,120,0,0.12),rgba(255,255,0,0.10),rgba(0,255,180,0.12),rgba(0,140,255,0.14),rgba(140,0,255,0.14),rgba(255,0,128,0.14))`,
          filter: "blur(180px)",
        }}
      />

      {/* Conic Glow Bottom Right */}
      <motion.div
        animate={{ rotate: [360, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-72 -bottom-72 h-[900px] w-[900px] rounded-full"
        style={{
          background: `conic-gradient(from 180deg,rgba(59,130,246,0.14),rgba(139,92,246,0.14),rgba(236,72,153,0.14),rgba(34,197,94,0.10),rgba(59,130,246,0.14))`,
          filter: "blur(200px)",
        }}
      />

      {/* Floating Blue Orb Left */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-10 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(96,165,250,0.12) 45%, transparent 75%)",
          filter: "blur(110px)",
        }}
      />

      {/* Floating Blue Orb Right */}
      <motion.div
        animate={{ x: [0, -25, 18, 0], y: [0, 20, -14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.20) 0%, rgba(191,219,254,0.10) 45%, transparent 75%)",
          filter: "blur(130px)",
        }}
      />

      {/* Soft Center Bloom */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 75%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        {/* ── WHO ARE WE ── */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <GlassCard>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <SectionLabel>Who Are We</SectionLabel>
                <h2
                  className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl leading-tight"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: "#1e3a8a",
                  }}
                >
                  Building Maharashtra's
                  <br />
                  Future, One Project
                  <br />
                  at a Time
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600">
                  Sanjaswa Builcon is a Kopargaon-based construction company
                  with over a decade of experience delivering residential,
                  commercial, and infrastructure projects across the Ahmednagar
                  region. Founded on the principles of trust, quality, and
                  community, we have grown from a small local contractor to one
                  of the most respected builders in the area.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
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
                    className="rounded-2xl border p-5 text-center"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      borderColor: "#dbeafe",
                      boxShadow: "0 8px 24px rgba(37,99,235,0.07)",
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="text-3xl font-black text-blue-600"
                      style={{
                        fontFamily: '"Cinzel", serif',
                      }}
                    >
                      <CountUp target={stat.num} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ── VISION & MISSION ── */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <motion.div {...fadeUp(0.1)}>
            <GlassCard className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 mb-5">
                <Eye size={22} color="#2563eb" />
              </div>
              <SectionLabel>Our Vision</SectionLabel>
              <h3
                className="mt-3 text-2xl font-bold text-slate-900"
                style={{
                  fontFamily: '"Cinzel", serif',
                  color: "#1e3a8a",
                }}
              >
                A Landmark in Every Skyline
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                To be Maharashtra's most trusted construction partner —
                recognised for creating spaces that inspire, endure, and elevate
                communities. We envision a Kopargaon where every structure
                reflects quality, dignity, and purpose.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We aspire to expand our footprint across the region while
                staying true to our roots — building homes that families cherish
                for generations and commercial spaces that drive local
                prosperity.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div {...fadeUp(0.18)}>
            <GlassCard className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 mb-5">
                <Target size={22} color="#7c3aed" />
              </div>
              <SectionLabel>Our Mission</SectionLabel>
              <h3
                className="mt-3 text-2xl font-bold text-slate-900"
                style={{
                  fontFamily: '"Cinzel", serif',
                  color: "#1e3a8a",
                }}
              >
                Excellence in Every Brick
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                To deliver construction projects that exceed client expectations
                through innovative design, superior materials, skilled
                workmanship, and transparent communication at every stage of the
                journey.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our mission is to make quality construction accessible —
                ensuring every client, whether building their first home or a
                large commercial complex, receives the same dedication and care.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <motion.div className="mb-20" {...fadeUp(0.05)}>
          <div className="mb-8 text-center">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl"
              style={{
                fontFamily: '"Cinzel", serif',
                color: "#1e3a8a",
              }}
            >
              The Sanjaswa Difference
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-sm text-slate-500">
              We combine local knowledge with professional expertise to deliver
              results that truly matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl border p-5"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  borderColor: "#dbeafe",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.06)",
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="mt-0.5 flex-none text-blue-500"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
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
          <GlassCard>
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200">
                <MapPin size={22} color="#059669" />
              </div>
              <div>
                <SectionLabel>Why Kopargaon</SectionLabel>
                <h2
                  className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl "
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: "#1e3a8a",
                  }}
                >
                  Invest Where It Matters
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-500">
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
                  className="rounded-2xl border p-5"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    borderColor: "#d1fae5",
                    boxShadow: "0 8px 24px rgba(5,150,105,0.06)",
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <h4 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
