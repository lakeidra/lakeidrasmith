import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Pause, HelpCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import bookCover from "@/assets/book-cover.png";
import aboutPortrait from "@/assets/about-portrait.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const BookPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <img src={bookCover} alt="Cyber Curiosity book cover" className="rounded-lg shadow-2xl max-w-md mx-auto" />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">Cyber Curiosity</h1>
              <p className="mt-4 font-heading text-2xl font-medium text-primary">Pause. Ask. Verify.</p>
              <div className="mt-4 w-16 h-0.5 bg-gold" />
              <p className="mt-6 text-lg font-heading italic text-muted-foreground">
                The framework for protecting yourself in a digital world designed to exploit you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac gap-2 w-full sm:w-auto">
                    Get Your Copy <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Link to="/book">
                  <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 gap-2 w-full sm:w-auto">
                    Get Your Signed Copy <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading centered>What's Inside</SectionHeading>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-body text-center">
              <p><em>Cyber Curiosity</em> is the book Lakeidra Smith wrote for everyone who has ever felt like cybersecurity was someone else's job. It introduces the Cyber Curiosity Mindset — <strong>Pause. Ask. Verify.</strong> — and walks readers through the habits, decisions, and assumptions that quietly shape their digital risk every day.</p>
              <p>It is the foundation of everything The Cyber Consultant teaches.</p>
              <p>This is the book you wish existed when you first realized you needed to protect yourself online. No jargon. No fear tactics. Just the insight that actually changes behavior.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Framework */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading centered>The Framework</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Pause, title: "Pause", desc: "Take a moment before you act. That split-second of awareness is your first defense." },
              { icon: HelpCircle, title: "Ask", desc: "Question what you're seeing and what you know. Curiosity is the antidote to exploitation." },
              { icon: ShieldCheck, title: "Verify", desc: "Confirm before you trust. A simple habit that changes everything." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-8 bg-secondary/50 rounded-lg border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-12 text-center text-lg font-heading italic text-muted-foreground max-w-2xl mx-auto">
            The Pause. Ask. Verify. framework is simple enough to remember and powerful enough to change how you think about your digital safety forever. It's not a technical skill. It's a human one.
          </p>
        </div>
      </section>

      {/* Who This Book Is For */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading centered>Who This Book Is For</SectionHeading>
            <div className="mt-10 space-y-4">
              {[
                "Professionals who feel overwhelmed by cybersecurity",
                "Parents wanting to protect their families online",
                "Teams wanting to build better digital habits",
                "Anyone who's ever felt like digital safety was someone else's job",
                "Organizations building cybersecurity culture",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground font-body">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <img src={aboutPortrait} alt="Lakeidra Smith, author" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div className="md:col-span-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <SectionHeading>About the Author</SectionHeading>
              <p className="text-muted-foreground leading-relaxed font-body">
                Lakeidra Smith is a cybersecurity educator, keynote speaker, and founder of The Cyber Consultant LLC. She has been building, breaking, and securing systems since childhood. <em>Cyber Curiosity</em> is her first published book.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section className="py-20 lg:py-28 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream">Get Your Copy</h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac gap-2 w-full sm:w-auto">
                Buy Now <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" className="bg-gold text-charcoal hover:bg-gold/90 gap-2 w-full sm:w-auto">
                Get Your Signed Copy <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact?service=bulk-order">
              <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 gap-2 w-full sm:w-auto">
                Inquire About Bulk Orders <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-warm-grey-light font-body">
            Still have questions? <Link to="/contact" className="text-camel hover:underline">Get in touch.</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookPage;
