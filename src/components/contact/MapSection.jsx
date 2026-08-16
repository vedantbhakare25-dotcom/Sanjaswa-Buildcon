import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function MapSection() {
  return (
    <section
      id="map-section"
      className="relative overflow-hidden pt-16 pb-20 bg-[#FAFAF8]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="text-[10px] font-sans font-medium uppercase tracking-[0.35em]"
            style={{ color: "rgba(31, 72, 255, 0.65)", fontFamily: "Inter, sans-serif" }}
          >
            Location
          </span>

          <h2
            className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#1F48FF]"
            style={{
              fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
            }}
          >
            Visit Our Corporate Office
          </h2>
        </motion.div>

        {/* Map Card */}
        <motion.div
          className="overflow-hidden rounded-3xl border border-[rgba(31,72,255,0.12)] bg-white p-2"
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="overflow-hidden rounded-2xl">
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

        {/* Google Maps Button */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://www.google.com/maps/place/SANJASWA+BUILDCON/@19.8930327,74.4804999,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1F48FF] px-6 py-3 text.xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-200 hover:bg-[#1534c4]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <MapPin size={14} />
            Open in Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
}
