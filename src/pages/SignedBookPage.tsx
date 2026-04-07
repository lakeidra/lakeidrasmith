import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookMockup from "@/assets/book-mockup.png";
import bookLifestyle from "@/assets/book-lifestyle.png";
import authorHeadshot from "@/assets/author-headshot.jpeg";

const STRIPE_URL = "https://buy.stripe.com/eVa8xYdWHgA18Gk145";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const SignedBookPage = () => {
  return (
    <main className="pt-20">
      {/* Section 1 — Hero */}
      <section className="bg-charcoal py-24 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-6">
              The Book
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
              The cybersecurity book written for the rest of us.
            </h1>
            <p className="mt-6 font-body text-xl text-cream/80">
              Signed by the author. Personally inscribed. Shipped to your door.
            </p>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="mt-10 bg-gold text-charcoal hover:bg-gold/90 font-body font-semibold text-base px-10 py-6 h-auto"
              >
                Get Your Signed Copy — $47
              </Button>
            </a>
            <div className="mt-12 flex justify-center">
              <ChevronDown className="w-6 h-6 text-cream/40 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — Product Display */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Book cover placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <img src={bookMockup} alt="Cyber Curiosity book cover" className="rounded-lg shadow-lg max-w-md mx-auto" />
            </motion.div>

            {/* Copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
                Signed &amp; Personalized
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
                No two copies are alike.
              </h2>
              <div className="mt-6 space-y-4 font-body text-charcoal/85 leading-relaxed">
                <p>
                  Every copy of this book is signed and personally inscribed by
                  Lakeidra — written specifically for you or whoever you're
                  gifting it to. Just reply to your order confirmation email with
                  the name and any message you'd like included. If she doesn't
                  hear from you within 48 hours, she'll write a general
                  inscription.
                </p>
                <p className="italic">
                  This isn't a book you pull off a shelf. It's a personal
                  artifact from the author.
                </p>
              </div>

              <div className="mt-8 space-y-3 font-body text-charcoal/85">
                <p className="font-semibold text-charcoal">What's included:</p>
                <ul className="space-y-2">
                  {[
                    "Signed hardcopy of Cyber Curiosity: A Beginner's Guide to Cybersecurity",
                    "A handwritten message from Lakeidra — written for you",
                    "Ships within 3–5 business days",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="mt-8 bg-gold text-charcoal hover:bg-gold/90 font-body font-semibold w-full md:w-auto"
                >
                  Get Your Signed Copy — $47
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 — About the Book */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              About the Book
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight">
              Finally. Cybersecurity that makes sense.
            </h2>
            <div className="mt-8 space-y-5 font-body text-cream/80 leading-relaxed">
              <p>
                Most cybersecurity content is written for people who already get
                it. The acronyms, the technical deep-cuts, the assumption that
                you've been in the industry for years — it's exhausting if
                you're just trying to understand enough to protect yourself,
                your team, or your family.
              </p>
              <p>
                <em>Cyber Curiosity</em> is the book for the person who keeps
                hearing words like "phishing," "zero trust," and "ransomware" —
                and has been quietly nodding like they know what those mean. (No
                judgment. We've all been there.)
              </p>
              <p>
                It breaks down the concepts that matter most in language that
                actually makes sense, so you can stop feeling behind and start
                feeling confident. Written like a conversation with a trusted
                expert who genuinely gets it.
              </p>
            </div>

            {/* Interior/Lifestyle placeholder */}
            <img src={bookLifestyle} alt="Someone reading Cyber Curiosity" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </section>

      {/* Section 4 — About the Author */}
      <section className="bg-burgundy py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              About the Author
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight mb-12">
              Meet Lakeidra Smith.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <div className="bg-cream/10 border-2 border-dashed border-cream/20 rounded-lg aspect-[3/4] flex items-center justify-center">
                <p className="text-cream/40 font-body text-sm text-center px-8">
                  [AUTHOR PHOTO]
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <div className="space-y-5 font-body text-cream/85 leading-relaxed">
                <p>
                  Lakeidra Smith is a cybersecurity strategist, bestselling
                  author, and the founder of The Cyber Consultant — a firm
                  dedicated to helping executives and organizations understand
                  technology as a business risk, not just an IT problem.
                </p>
                <p>
                  She's spent her career doing one thing exceptionally well:
                  translating the complex, technical world of cybersecurity into
                  language that actually lands with the humans who need to hear
                  it most.
                </p>
                <p>
                  <em>Cyber Curiosity</em> is her first book — and the one she
                  wishes existed when she was starting out.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — Final CTA */}
      <section className="bg-charcoal py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight">
              The easiest cybersecurity investment you'll make all year.
            </h2>
            <p className="mt-4 font-body text-lg text-cream/60">
              Signed. Personalized. Shipped to you.
            </p>
            <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="mt-10 bg-gold text-charcoal hover:bg-gold/90 font-body font-semibold text-base px-10 py-6 h-auto"
              >
                Get Your Signed Copy — $47
              </Button>
            </a>
            <p className="mt-6 font-body text-[13px] text-cream/60">
              Ships within 3–5 business days. Each copy personally inscribed by
              the author.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SignedBookPage;
