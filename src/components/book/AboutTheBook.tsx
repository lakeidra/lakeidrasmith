import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutTheBook = () => (
  <section className="bg-charcoal py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12 max-w-[760px]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
          About the Book
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight">
          Finally. Cybersecurity that makes sense.
        </h2>
        <div className="mt-8 space-y-5 font-body text-cream/80 leading-[1.7]">
          <p>
            I got hacked once. I knew better. I had the credentials, the training, the job title — and I still clicked the thing I shouldn't have clicked. I was so embarrassed I almost didn't tell anyone. That's the moment this book started.
          </p>
          <p>
            Because if it could happen to me, it could happen to anyone. And every year, it does — to millions of people who fall for phishing emails, phone scams, romance scams, and identity theft. They're not careless. They're not stupid. They were just never taught what to look for.
          </p>
          <p>
            That's the gap <em>Cyber Curiosity</em> fills.
          </p>
          <p>
            I wrote this book because I lived it — the embarrassment of getting hacked despite knowing better, the frustration of watching smart people fall for scams that were completely preventable, and the stubborn belief that cybersecurity doesn't have to feel like a foreign language to be taken seriously.
          </p>
          <p>
            However, this isn't just a book of warnings. It's a book of tools. By the time you finish it, you won't just understand the threats — you'll know exactly what to do about them.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutTheBook;
