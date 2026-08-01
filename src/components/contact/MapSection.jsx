import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapSection() {
return (
<section
id="map-section"
className="relative overflow-hidden pt-20 pb-16"
style={{
background:
"linear-gradient(180deg, #fcfdff 0%, #f8fbff 35%, #eef6ff 100%)",
}}
>
{/* Conic Glow Top Left */}
<motion.div
animate={{ rotate: [0, 360], scale: [1, 1.06, 1] }}
transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
className="pointer-events-none absolute -left-72 -top-72 h-[900px] w-[900px] rounded-full"
style={{
background:
"conic-gradient(from 0deg,rgba(255,0,128,0.14),rgba(255,120,0,0.12),rgba(255,255,0,0.10),rgba(0,255,180,0.12),rgba(0,140,255,0.14),rgba(140,0,255,0.14),rgba(255,0,128,0.14))",
filter: "blur(180px)",
}}
/>

  {/* Conic Glow Bottom Right */}
  <motion.div
    animate={{ rotate: [360, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
    className="pointer-events-none absolute -right-72 -bottom-72 h-[900px] w-[900px] rounded-full"
    style={{
      background:
        "conic-gradient(from 180deg,rgba(59,130,246,0.14),rgba(139,92,246,0.14),rgba(236,72,153,0.14),rgba(34,197,94,0.10),rgba(59,130,246,0.14))",
      filter: "blur(200px)",
    }}
  />

  {/* Floating Orb */}
  <motion.div
    animate={{ x: [0, 25, -15, 0], y: [0, -15, 12, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    className="pointer-events-none absolute left-0 top-10 h-[520px] w-[520px] rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(59,130,246,0.20) 0%, rgba(96,165,250,0.10) 45%, transparent 75%)",
      filter: "blur(120px)",
    }}
  />

  {/* Floating Orb Right */}
  <motion.div
    animate={{ x: [0, -25, 18, 0], y: [0, 20, -14, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    className="pointer-events-none absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full"
    style={{
      background:
        "radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(191,219,254,0.10) 45%, transparent 75%)",
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

  <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
    {/* Header */}
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="text-[11px] uppercase tracking-[0.35em] text-blue-500">
        Location
      </span>

      <h2 className="text-[30px] font-bold leading-tight md:text-[36px]"
            style={{
              fontFamily: '"Cinzel", serif',
              color: "#1e3a8a",
            }}>
        Visit Our Corporate Office
      </h2>
    </motion.div>

    {/* Glass Map Card */}
    <motion.div
      className="overflow-hidden rounded-[34px] border p-2"
      style={{
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(22px)",
        borderColor: "rgba(255,255,255,0.9)",
        boxShadow: "0 40px 100px rgba(37,99,235,.10)",
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="overflow-hidden rounded-[28px]">
        <iframe
          title="Sanjaswa Builcon Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1874.0!2d74.4804999!3d19.8930327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc458d60abbf41%3A0x16e59734b760030a!2sSANJASWA+BUILDCON!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>

    {/* Address */}
    <motion.div
      className="mt-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
    </motion.div>

    {/* Google Maps Button */}
    <motion.div
      className="mt-6 flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <a
        href="https://www.google.com/maps/place/SANJASWA+BUILDCON/@19.8930327,74.4804999,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        style={{
          background: "linear-gradient(135deg, #2563eb, #60a5fa)",
          boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
        }}
      >
        <MapPin size={14} />
        Open in Google Maps
      </a>
    </motion.div>
  </div>
</section>


);
}
