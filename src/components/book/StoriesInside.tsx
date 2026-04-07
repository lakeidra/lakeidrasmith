import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stories = [
  {
    title: "The smart camera that wasn't.",
    body: "A couple installed a home security camera to feel safer. Instead, it livestreamed their private moments to strangers on the internet.",
  },
  {
    title: "The hospital that went dark.",
    body: "A ransomware attack brought the DCH hospital system of West Alabama to its knees — and exposed just how unprepared most organizations really are.",
  },
  {
    title: 'The $2 million "I love you."',
    body: "A romance scam drained one victim of more than two million dollars. The psychological tactics behind it are the same ones being used on someone you know, right now.",
  },
];

const StoriesInside = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
          Real Stories, Real Stakes
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
          These aren't cautionary tales tucked in a textbook.
        </h2>
        <p className="mt-4 font-body text-charcoal/80 max-w-[640px] mx-auto leading-relaxed">
          They're real things that happened to real people — explained plainly, with the context and practical tools you need to make sure they don't become your story.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {stories.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ ...fade, visible: { ...fade.visible, transition: { duration: 0.7, delay: i * 0.15 } } }}
            className="bg-charcoal rounded-lg p-8"
          >
            <h3 className="font-body text-gold font-semibold text-lg mb-3">{s.title}</h3>
            <p className="font-body text-cream/85 leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fade}
        className="text-center font-body text-charcoal/80 italic mt-10 max-w-2xl mx-auto"
      >
        Each story gets you the facts, the context, and — most importantly — what you can actually do about it.
      </motion.p>
    </div>
  </section>
);

export default StoriesInside;
