import { motion } from 'framer-motion';

function ContactInfoCard({ icon: Icon, label, value, sub, delay = 0 }) {
  return (
    <motion.div
      className="flex items-start gap-4 py-5 border-b border-brand-primary/10 last:border-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center border border-brand-primary/20 bg-brand-primary/5">
        <Icon size={14} strokeWidth={1.25} className="text-brand-primary/60" />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-[0.46rem] font-light uppercase tracking-[0.42em] text-brand-primary/50">
          {label}
        </span>
        <span className="font-sans text-sm font-normal leading-snug tracking-wide text-brand-primary/85 whitespace-pre-line">
          {value}
        </span>
        {sub && (
          <span className="font-sans text-[0.7rem] font-light text-brand-primary/45 mt-0.5">{sub}</span>
        )}
      </div>
    </motion.div>
  );
}

export default ContactInfoCard;