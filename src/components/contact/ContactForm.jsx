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
    <div className="relative">
      <div
        className="rounded-xl border transition-all duration-200"
        style={{
          background: "#ffffff",
          borderColor: focused ? "#1F48FF" : "rgba(31, 72, 255, 0.18)",
          boxShadow: focused ? "0 0 0 3px rgba(31, 72, 255, 0.08)" : "none",
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
          className="w-full bg-transparent px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-slate-400 text-slate-900"
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>
    </div>
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
    <div className="relative">
      <div
        className="rounded-xl border transition-all duration-200"
        style={{
          background: "#ffffff",
          borderColor: focused ? "#1F48FF" : "rgba(31, 72, 255, 0.18)",
          boxShadow: focused ? "0 0 0 3px rgba(31, 72, 255, 0.08)" : "none",
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
          className="w-full resize-none bg-transparent px-4 py-3 text-xs sm:text-sm outline-none placeholder:text-slate-400 text-slate-900"
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>
    </div>
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
    <div className="rounded-2xl border border-[rgba(31,72,255,0.12)] bg-[#FAFAF8] p-6 md:p-8">
      {/* Heading */}
      <div className="mb-5">
        <p
          className="mb-1 text-[10px] font-sans font-medium uppercase tracking-[0.35em]"
          style={{
            color: "rgba(31, 72, 255, 0.65)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Send Enquiry
        </p>

        <h2
          className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1F48FF]"
          style={{
            fontFamily: '"Barlow Condensed", "Bebas Neue", Impact, sans-serif',
          }}
        >
          Let's Talk
        </h2>
      </div>

      {/* Form Fields */}
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
        <button
          type="button"
          className="w-full rounded-lg bg-[#1F48FF] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-200 hover:bg-[#1534c4] cursor-pointer"
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
}
