import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const RecognitionMoment = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12 max-w-[760px]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
          If This Sounds Familiar…
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
          You're not bad with technology. You were just never taught.
        </h2>
        <div className="mt-8 space-y-5 font-body text-charcoal/85 leading-[1.7]">
          <p>
            You've sat through the compliance training. You nodded along. You clicked the right boxes. And you still don't feel like you actually understand what you're supposed to be protecting — or how.
          </p>
          <p>
            You're not alone, and you're definitely not behind. You were handed a smartphone, a laptop, and a dozen logins, and then told to "stay safe out there" like that was a plan.
          </p>
          <p>It wasn't a plan. It was a shrug.</p>
          <p>
            Imagine being handed a set of car keys, pointed at the interstate, and told to "drive safe." No lessons. No practice lot. Just go. That's how most of us were handed the internet — and then blamed when we crashed.
          </p>
          <p>
            <em>Cyber Curiosity</em> is the book that finally teaches the lessons, in plain English, with real stories, from someone who remembers exactly what it felt like to not know.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default RecognitionMoment;
