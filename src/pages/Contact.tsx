import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: "keynote", label: "Keynote & Speaking" },
  { value: "workshop", label: "Workshop & Team Training" },
  { value: "curriculum", label: "Curriculum Development" },
  { value: "advisory", label: "Advisory Services" },
  { value: "bulk-order", label: "Book Purchase / Bulk Order" },
  { value: "hello", label: "Other / Just Saying Hello" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [service, setService] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setService(serviceParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out! I'll be in touch within 48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setService("");
  };

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
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input id="company" name="company" placeholder="Optional" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Optional" className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">What are you interested in?</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me a little about what you're looking for..."
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-primary text-primary-foreground hover:bg-cognac w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
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
                  <a href="mailto:hello@thecyberconsultantllc.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <Mail className="w-5 h-5 text-primary" />
                    hello@thecyberconsultantllc.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground font-body">
                    <MapPin className="w-5 h-5 text-primary" />
                    Birmingham, Alabama
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground font-body">
                    <Clock className="w-5 h-5 text-primary" />
                    Typically responds within 48 hours
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="https://calendly.com/podcast-lakeidra/discovery-call" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <Calendar className="w-5 h-5 text-primary" />
                    Schedule a Call
                  </a>
                  <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Get the Book
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground font-body">
                  Prefer to connect directly?
                </p>
                <a href="mailto:hello@thecyberconsultantllc.com" className="inline-flex items-center gap-2 mt-2 text-primary hover:text-cognac transition-colors font-medium font-body">
                  hello@thecyberconsultantllc.com <ArrowRight className="w-4 h-4" />
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
