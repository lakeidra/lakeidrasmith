import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const personas = [
  { title: "The Overwhelmed Professional", body: "You've sat through the training. You still don't feel confident. This book gives you the foundation the training skipped." },
  { title: "The Protective Parent", body: "You want to keep your family safe online without becoming an IT expert. This book meets you exactly where you are." },
  { title: "The Founder", body: "You're building something — and you know a single breach could unravel it. This book helps you understand what you're protecting before something goes wrong." },
  { title: "The Team Leader", body: "You want your team building real security habits, not just checking compliance boxes. This is the starting point for that culture shift." },
  { title: "The Curious Beginner", body: "You've always felt like digital safety was someone else's job. Consider this your permission slip to make it yours." },
  { title: "The Executive", body: "You need to talk about cyber risk with confidence — in the boardroom, with clients, and with your team. This book gives you the language and the framework to do it." },
];

const WhoThisIsFor = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
          Who This Is For
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
          If you live and work online, this book was written for you.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.7, delay: i * 0.1 } } }}
            className="bg-white border border-charcoal/15 rounded-lg p-7"
          >
            <h3 className="font-body font-medium text-charcoal text-lg mb-2">{p.title}</h3>
            <p className="font-body text-charcoal/80 leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoThisIsFor;
