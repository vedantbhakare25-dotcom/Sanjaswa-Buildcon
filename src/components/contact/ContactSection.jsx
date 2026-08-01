import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import ContactForm from "./ContactForm";

const contactItems = [
  {
    icon: MapPin,
    title: "Corporate Office",
    value: "123 Business Park, Sector 14",
    sub: "Ahilyanagar, Maharashtra",
    id: "office",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    sub: "Mon – Sat · 9 AM – 6 PM",
    id: "phone",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@sanjaswabuilcon.com",
    sub: "Response within 24 hours",
    id: "email",
  },
  {
    icon: ExternalLink,
    title: "Location",
    value: "Open Google Maps",
    sub: "Get directions",
    id: "location",
  },
];

const handleLocationClick = () => {
  const el = document.getElementById("map-section");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-24 pb-10 lg:pt-28 lg:pb-12"
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Glass Card */}
        <div
          className="rounded-[34px] border p-3 md:p-4 lg:p-6"
          style={{
            background: "rgba(255,255,255,0.70)",
            backdropFilter: "blur(22px)",
            borderColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 40px 100px rgba(37,99,235,.10)",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-[11px] uppercase tracking-[0.35em] text-blue-500">
              Contact
            </span>
            <h2
              className="text-[30px] font-bold leading-tight md:text-[36px]"
              style={{
                fontFamily: '"Cinzel", serif',
                color: "#1e3a8a",
              }}
            >
              Let's Build Something Exceptional
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,380px)_1fr]">
            {/* Contact Cards */}
            <div className="grid gap-3">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className={`rounded-2xl border px-4 py-2.5 ${item.id === "location" ? "cursor-pointer" : ""}`}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    boxShadow: "0 10px 30px rgba(37,99,235,0.06)",
                  }}
                  onClick={
                    item.id === "location" ? handleLocationClick : undefined
                  }
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.id === "location" ? "bg-gradient-to-br from-blue-100 to-blue-200" : "bg-gradient-to-br from-blue-50 to-blue-100"}`}
                    >
                      <item.icon size={18} color="#2563eb" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-blue-500">
                        {item.title}
                      </p>
                      <h4
                        className={`break-words text-sm font-semibold ${item.id === "location" ? "text-blue-600" : "text-slate-900"}`}
                      >
                        {item.value}
                      </h4>
                      <p className="mt-1 break-words text-xs text-slate-500">
                        {item.sub}
                      </p>
                    </div>

                    {item.id === "location" && (
                      <span className="text-[10px] uppercase tracking-widest text-blue-400">
                        ↓
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
