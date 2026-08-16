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
      className="relative overflow-hidden pt-20 pb-12 bg-[#FAFAF8]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Architectural Card */}
        <div
          className="rounded-3xl border border-[rgba(31,72,255,0.12)] bg-white p-6 md:p-8 lg:p-10"
          style={{
            boxShadow: "0 4px 24px rgba(0,0,0,0.02)",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span
              className="text-[10px] font-sans font-medium uppercase tracking-[0.35em]"
              style={{ color: "rgba(31, 72, 255, 0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Contact
            </span>
            <h2
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none"
              style={{
                fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
                color: "#1F48FF",
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                  className={`rounded-xl border border-[rgba(31,72,255,0.12)] bg-[#FAFAF8] px-4 py-3 ${
                    item.id === "location" ? "cursor-pointer" : ""
                  }`}
                  onClick={
                    item.id === "location" ? handleLocationClick : undefined
                  }
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1F48FF]/[0.06] border border-[#1F48FF]/15 flex-none">
                      <item.icon size={16} className="text-[#1F48FF]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[10px] font-sans font-medium uppercase tracking-[0.25em]"
                        style={{ color: "rgba(31, 72, 255, 0.65)", fontFamily: "Inter, sans-serif" }}
                      >
                        {item.title}
                      </p>
                      <h4
                        className={`break-words text-sm font-semibold font-sans ${
                          item.id === "location" ? "text-[#1F48FF]" : "text-slate-900"
                        }`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.value}
                      </h4>
                      <p
                        className="mt-0.5 break-words text-xs text-slate-500 font-sans"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.sub}
                      </p>
                    </div>

                    {item.id === "location" && (
                      <span className="text-[10px] uppercase tracking-widest text-[#1F48FF]">
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
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
