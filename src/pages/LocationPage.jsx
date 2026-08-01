import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowLeft, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/SANJASWA+BUILDCON/@19.8930327,74.477925,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdc458d60abbf41:0x16e59734b760030a!8m2!3d19.8930327!4d74.4804999!16s%2Fg%2F11qyp19mb3";

export default function LocationPage() {
  return (
    <section
      className="relative min-h-screen overflow-hidden py-20"
      style={{
        background:
          "linear-gradient(180deg, #fcfdff 0%, #f8fbff 35%, #eef6ff 100%)",
      }}
    >
      {/* 🌈 Rainbow Glow Left */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.06, 1] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-72 -top-72 h-[900px] w-[900px] rounded-full"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              rgba(255,0,128,0.14),
              rgba(255,120,0,0.12),
              rgba(255,255,0,0.10),
              rgba(0,255,180,0.12),
              rgba(0,140,255,0.14),
              rgba(140,0,255,0.14),
              rgba(255,0,128,0.14)
            )
          `,
          filter: "blur(180px)",
        }}
      />

      {/* 🌈 Rainbow Glow Right */}
      <motion.div
        animate={{ rotate: [360, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-72 -bottom-72 h-[900px] w-[900px] rounded-full"
        style={{
          background: `
            conic-gradient(
              from 180deg,
              rgba(59,130,246,0.14),
              rgba(139,92,246,0.14),
              rgba(236,72,153,0.14),
              rgba(34,197,94,0.10),
              rgba(59,130,246,0.14)
            )
          `,
          filter: "blur(200px)",
        }}
      />

      {/* 💙 Floating Orb Left */}
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

      {/* 💙 Floating Orb Right */}
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

      {/* Soft White Bloom */}
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
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-xl transition hover:bg-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Main Glass Card */}
        <div
          className="rounded-[34px] border p-6 md:p-10 lg:p-12"
          style={{
            background: "rgba(255,255,255,0.72)",
            backdropFilter: "blur(22px)",
            borderColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 40px 100px rgba(37,99,235,.10)",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <span className="text-[15px] uppercase tracking-[0.35em] text-blue-500">
              Location
            </span>

            <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
              Visit Our Office
            </h1>

            <p className="mt-4 max-w-2xl text-slate-600">
              We'd love to meet you and discuss your next project.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            {/* Office Information */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-blue-100 bg-white/75 p-5 shadow-sm backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <MapPin size={20} className="text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900">
                  SANJASWA BUILDCON
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  SANJASWA BUILDCON
                  <br />
                  Ahilyanagar,
                  <br />
                  Maharashtra, India
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/75 p-5 shadow-sm backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <Phone size={20} className="text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900">Call Us</h3>
                <p className="mt-2 text-sm text-slate-600">+91 98765 43210</p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-white/75 p-5 shadow-sm backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <Mail size={20} className="text-blue-600" />
                </div>

                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="mt-2 text-sm text-slate-600">
                  hello@sanjaswabuilcon.com
                </p>
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-medium text-white transition hover:bg-blue-700"
              >
                <Navigation size={18} />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="overflow-hidden rounded-3xl border border-white/80 bg-white/70 backdrop-blur-xl"
              style={{
                boxShadow: "0 30px 80px rgba(37,99,235,.10)",
              }}
            >
              <div className="relative">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in Google Maps"
                  className="absolute inset-0 z-10 flex items-end justify-center bg-transparent"
                >
                  <span className="pointer-events-none mb-4 rounded-full bg-slate-900/75 px-3 py-1 text-xs font-medium text-white">
                    Open in Google Maps
                  </span>
                </a>

                <iframe
                  title="SANJASWA BUILDCON Location"
                  src="https://maps.google.com/maps?q=19.8930327,74.4804999&z=17&output=embed"
                  width="100%"
                  height="650"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
