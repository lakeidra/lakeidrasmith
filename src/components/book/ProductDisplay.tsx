import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bookMockup from "@/assets/book-mockup.png";
import bookLifestyle from "@/assets/book-lifestyle.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const STRIPE_URL = "https://buy.stripe.com/eVa8xYdWHgA18Gk145";

const includes = [
  "A signed hardcopy of Cyber Curiosity: A Beginner's Guide to Cybersecurity",
  "A handwritten message from Lakeidra written specifically for you",
  "Free shipping",
  "Ships within 3–5 business days",
];

const ProductDisplay = () => (
  <section className="bg-cream py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade} className="space-y-6">
          <img src={bookMockup} alt="Cyber Curiosity book cover" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
          <img src={bookLifestyle} alt="Cyber Curiosity lifestyle" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
          <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-4">
            Signed &amp; Personalized
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal leading-tight">
            No two copies are alike.
          </h2>
          <div className="mt-6 space-y-4 font-body text-charcoal/85 leading-[1.7]">
            <p>
              Every copy is signed and personally inscribed by Lakeidra — written specifically for you, or for whoever you're gifting it to. Just reply to your order confirmation email with the name and the message you'd like included. If she doesn't hear from you within 48 hours, she'll write a general inscription so your book still ships on time.
            </p>
            <p className="italic">
              This isn't a book you pull off a shelf. It's a personal artifact from the author.
            </p>
          </div>

          <div className="mt-8 space-y-3 font-body text-charcoal/85">
            <p className="font-semibold text-charcoal">What's included:</p>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold font-semibold mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a href={STRIPE_URL}>
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
);

export default ProductDisplay;
