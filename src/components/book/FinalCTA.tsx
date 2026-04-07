import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const STRIPE_URL = "https://buy.stripe.com/eVa8xYdWHgA18Gk145";

const FinalCTA = () => (
  <section className="bg-charcoal py-20 lg:py-28">
    <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream leading-tight">
          Stop feeling behind. Start feeling ready.
        </h2>
        <p className="mt-4 font-body text-lg text-cream/80 max-w-[600px] mx-auto leading-relaxed">
          One book. A few hours of your time. The confidence to finally understand the thing everyone keeps telling you is important. Signed, personalized, and on its way to your door.
        </p>
        <a href={STRIPE_URL}>
          <Button
            size="lg"
            className="mt-10 bg-gold text-charcoal hover:bg-gold/90 font-body font-semibold text-base px-10 py-6 h-auto"
          >
            Get Your Signed Copy — $47
          </Button>
        </a>
        <p className="mt-6 font-body text-[13px] text-cream/60">
          Ships within 3–5 business days. Each copy personally inscribed by the author.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
