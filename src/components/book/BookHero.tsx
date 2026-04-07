import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookMockup from "@/assets/book-mockup.png";
const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const STRIPE_URL = "https://buy.stripe.com/eVa8xYdWHgA18Gk145";

const BookHero = () => (
  <section className="bg-charcoal py-24 lg:py-36">
    <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
      <motion.div initial="hidden" animate="visible" variants={fade}>
        <p className="text-gold font-body text-[11px] tracking-[0.2em] uppercase mb-6">
          The Book
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight">
          The cybersecurity book for the rest of us.
        </h1>
        <p className="mt-6 font-body text-xl text-cream/80 max-w-[680px] mx-auto leading-relaxed">
          No jargon. No lectures. No assumption that you already know what a firewall is. Just the book you wish someone had handed you the first time you went online. Signed by the author and shipped to your door.
        </p>
        <a href={STRIPE_URL}>
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
);

export default BookHero;
