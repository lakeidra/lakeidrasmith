import { motion } from "framer-motion";
import authorHeadshot from "@/assets/author-headshot.jpeg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutTheAuthor = () => (
  <section className="bg-burgundy py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <img src={authorHeadshot} alt="Lakeidra Smith" className="rounded-lg shadow-lg w-full" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
            About the Author
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight mb-6">
            Meet Lakeidra Smith.
          </h2>
          <div className="space-y-5 font-body text-cream/85 leading-[1.7]">
            <p>
              Lakeidra Smith is a cybersecurity strategist, bestselling author, and the founder of The Cyber Consultant — a firm that helps executives and organizations understand technology as a business risk, not just an IT problem.
            </p>
            <p>
              She's spent her career doing one thing exceptionally well: translating the complex, technical world of cybersecurity into language that actually lands with the humans who need to hear it most. Her clients call her a "cognitive translator." Her readers call her the friend they wish they'd had the first time they logged on.
            </p>
            <p>
              <em>Cyber Curiosity</em> is her first book — and the one she wishes had existed when she was starting out.
            </p>
            <p>
              When she's not advising boards or leading executive workshops, she's in Birmingham, Alabama, being a mom and proving every single day that cybersecurity doesn't have to be scary to be taken seriously.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutTheAuthor;
