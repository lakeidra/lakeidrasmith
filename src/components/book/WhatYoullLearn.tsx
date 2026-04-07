import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const items = [
  "Why 19 out of 20 successful cyberattacks come down to human error — not sophisticated hacking. And what that means for you.",
  "How to build passwords that actually protect you (and why the one you're using right now probably doesn't).",
  "What your personal data is worth, who wants it, and how they're already trying to get it.",
  "The Pause. Ask. Verify. framework — three simple steps that stop the most common attacks cold before they ever reach you.",
];

const WhatYoullLearn = () => (
  <section className="bg-charcoal py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12 max-w-[760px]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
          What You'll Learn
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight">
          The foundation your compliance training skipped.
        </h2>
        <ul className="mt-10 space-y-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 font-body text-cream/90 leading-[1.7]">
              <span className="text-gold font-semibold mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <blockquote className="mt-12 border-l-4 border-gold pl-6 py-2">
          <p className="font-heading italic text-xl md:text-2xl text-cream leading-snug">
            "Nineteen out of twenty attacks come down to a human making a decision. This is why the fix isn't better software — it's better-informed humans. That's what this book builds."
          </p>
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default WhatYoullLearn;
