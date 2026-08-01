
import { motion } from "framer-motion";
import { useState } from "react";

function InputField({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      animate={{
        y: focused ? -1 : 0,
      }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      <div
        className="rounded-xl border transition-all duration-300"
        style={{
          background: "#ffffff",
          borderColor: focused ? "#60a5fa" : "#dbeafe",
          boxShadow: focused
            ? "0 0 0 4px rgba(96,165,250,0.12), 0 12px 35px rgba(96,165,250,0.15)"
            : "0 2px 10px rgba(37,99,235,0.05)",
        }}
      >
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            w-full
            bg-transparent
            px-4
            py-3
            text-[13px]
            outline-none
            placeholder:text-[11px]
            placeholder:text-slate-400
          "
          style={{
            color: "#1e3a8a",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>
    </motion.div>
  );
}

function MessageField({
  name,
  placeholder,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      animate={{
        y: focused ? -1 : 0,
      }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      <div
        className="rounded-xl border transition-all duration-300"
        style={{
          background: "#ffffff",
          borderColor: focused ? "#60a5fa" : "#dbeafe",
          boxShadow: focused
            ? "0 0 0 4px rgba(96,165,250,0.12), 0 12px 35px rgba(96,165,250,0.15)"
            : "0 2px 10px rgba(37,99,235,0.05)",
        }}
      >
        <textarea
          rows={3}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="
            w-full
            resize-none
            bg-transparent
            px-4
            py-3
            text-[13px]
            outline-none
            placeholder:text-[11px]
            placeholder:text-slate-400
          "
          style={{
            color: "#1e3a8a",
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Ambient Glow 1 */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 -top-24 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(96,165,250,0.25), transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* Ambient Glow 2 */}
      <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
          filter: "blur(65px)",
        }}
      />

      {/* Card */}
      <div
        className="
          relative
          rounded-3xl
          border
          p-6
          md:p-8
        "
        style={{
          background: "#f8fbff",
          borderColor: "#dbeafe",
          boxShadow:
            "0 20px 60px rgba(37,99,235,0.08)",
        }}
      >
        {/* Heading */}
        <div className="mb-5">
          <p
            className="mb-1 text-[10px] font-medium uppercase tracking-[0.35em]"
            style={{
              color: "#60a5fa",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Send Enquiry
          </p>

          <h2
            className="text-[30px] font-bold leading-tight md:text-[36px]"
            style={{
              fontFamily: '"Cinzel", serif',
              color: "#1e3a8a",
            }}
          >
            Let's Talk
          </h2>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <InputField
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={onChange}
          />

          <InputField
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={onChange}
          />

          <InputField
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={onChange}
          />

          <MessageField
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={onChange}
          />
        </div>

        {/* Button */}
        <div className="mt-5">
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              relative
              overflow-hidden
              rounded-xl
              px-6
              py-3
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
            "
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#60a5fa)",
              color: "#ffffff",
              boxShadow:
                "0 12px 30px rgba(37,99,235,0.25)",
            }}
          >
            <motion.span
              animate={{
                x: ["-120%", "250%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
              }}
            />

            <span className="relative z-10">
              Send Enquiry
            </span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

