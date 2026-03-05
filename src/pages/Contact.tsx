import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">Let's Talk</h1>
            <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-body">
              Whether you want to book a keynote, bring a workshop to your team, explore a curriculum partnership, or just say hello — I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Tally Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <iframe
                data-tally-src="https://tally.so/embed/VLZxR6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="1180"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact The Cyber Consultant"
              />
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@lakeidra.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <Mail className="w-5 h-5 text-primary" />
                    hello@lakeidra.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground font-body">
                    <MapPin className="w-5 h-5 text-primary" />
                    Birmingham, Alabama
                  </div>
                  <a href="https://the-cyber-consultant.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <Globe className="w-5 h-5 text-primary" />
                    the-cyber-consultant.com
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Or schedule a discovery call directly</h3>
                <a href="https://calendly.com/podcast-lakeidra/discovery-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac gap-2 w-full">
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </Button>
                </a>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground font-body">
                  Prefer to connect directly?
                </p>
                <a href="mailto:hello@lakeidra.com" className="inline-flex items-center gap-2 mt-2 text-primary hover:text-cognac transition-colors font-medium font-body">
                  hello@lakeidra.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
