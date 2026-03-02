import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic, Users, Building2, Compass, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import speakingImage from "@/assets/speaking.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const services = [
  {
    icon: Mic,
    title: "Keynote & Speaking",
    tagline: "The talk your audience will still be thinking about on Monday.",
    copy: [
      "Lakeidra brings a rare combination to the stage: hands-on technical roots going back to childhood, the credibility of a published cybersecurity author, and the warmth of a storyteller who genuinely believes her audience is capable of protecting themselves. She doesn't lecture — she shifts perspectives.",
      "Her signature talk, The Cyber Curiosity Mindset, is available as a keynote, breakout session, or conference closing. Audiences leave with one clear mindset shift and a framework they can use before they even get back to their desks.",
      "Lakeidra has spoken at the Dell Cybersecurity Summit, Sloss Tech, Elevate and Empower Tech Event, EdFarm, and Correlation One.",
    ],
    bestFor: "Conferences, corporate all-hands, leadership summits, and professional associations.",
    cta: "Book a Keynote",
    link: "/contact?service=keynote",
  },
  {
    icon: Users,
    title: "Workshops & Team Training",
    tagline: "Your team doesn't need another compliance training. They need a practice.",
    copy: [
      "Our workshops are built around real scenarios, not slides full of statistics. Participants learn to recognize threats by developing the same instinct Lakeidra teaches in her book: pause, ask, verify.",
    ],
    offerings: [
      { name: "The Spark Session", desc: "A 90-minute interactive experience for teams of up to 50. Fast, focused, and immediately actionable.", price: "Starting at $3,500 virtual / $5,000 in-person" },
      { name: "The Cyber Curiosity Workshop", desc: "A half-day experience for teams of up to 75. The full Cyber Curiosity methodology — habit assessment, scenario simulations, and a personalized action plan. Each participant receives a copy of Cyber Curiosity.", price: "Starting at $7,500 virtual / $10,000 in-person" },
      { name: "The Executive Cyber Briefing", desc: "A focused 60-minute strategic session for leadership teams of 10-20. Not a training — a risk conversation in the language executives speak.", price: "Starting at $5,000 virtual / $7,500 in-person" },
    ],
    bestFor: "SMBs, corporate teams, HR and L&D initiatives, leadership retreats, and company off-sites.",
    cta: "Bring a Workshop to Your Team",
    link: "/contact?service=workshop",
  },
  {
    icon: Building2,
    title: "Curriculum Development & Partnerships",
    tagline: "For organizations that want to build something that lasts.",
    copy: [
      "Lakeidra partners with workforce development organizations, training providers, community colleges, and corporate learning teams to design and deliver cybersecurity curricula that are rigorous, human-centered, and built for the real world.",
      "With expertise in CompTIA certification pathways — including Security+ — and experience designing programs for both corporate and government-funded workforce initiatives, Lakeidra brings subject matter authority and instructional design skill to every partnership.",
    ],
    bestFor: "Workforce development organizations, community colleges, government-funded training programs, and corporate L&D teams.",
    cta: "Explore a Partnership",
    link: "/contact?service=curriculum",
  },
  {
    icon: Compass,
    title: "Advisory Services",
    tagline: "For leaders who want to keep thinking, not just react.",
    copy: [
      "The Cyber Curiosity Advisory Retainer is a monthly engagement for SMB leaders who want a trusted strategic partner on human cyber risk — without adding headcount or navigating vendor relationships.",
      "Each month includes two 60-minute strategy sessions, async access for time-sensitive questions, a quarterly risk review and recommendation report, and priority access to workshops at preferred rates. Engagements begin with a minimum three-month commitment.",
    ],
    bestFor: "SMB owners and executives who want ongoing strategic guidance on cyber risk without the overhead of an in-house team.",
    cta: "Learn More About Advisory",
    link: "/contact?service=advisory",
  },
  {
    icon: BookOpen,
    title: "Cyber Curiosity — The Book",
    tagline: "Start here. Everything else builds from this.",
    copy: [
      "Cyber Curiosity is the book Lakeidra wrote for everyone who has ever felt like cybersecurity was someone else's job. It introduces the Cyber Curiosity Mindset — Pause. Ask. Verify. — and walks readers through the habits, decisions, and assumptions that quietly shape their digital risk every day.",
      "It is the foundation of everything The Cyber Consultant teaches. Available individually or in bulk for workshop and conference use.",
    ],
    cta: "Order Individual Copies",
    link: "https://book-purchase-link.com",
    external: true,
    secondaryCta: "Inquire About Bulk Orders",
    secondaryLink: "/contact?service=bulk-order",
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src={speakingImage} alt="Lakeidra speaking on stage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fade}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream">What We Do</h1>
            <p className="mt-4 font-heading text-xl italic text-camel">
              Cybersecurity is not a technology problem. It is a human one.
            </p>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            <p className="mt-8 text-cream/80 leading-relaxed font-body">
              At The Cyber Consultant, we help individuals, teams, and organizations build the habits, mindset, and culture that technology alone can never provide. Our work is rooted in one philosophy: Cyber Curiosity — the practice of pausing, asking the right questions, and verifying before you act.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 lg:py-28 ${i % 2 === 0 ? "" : "bg-secondary/50"}`}
        >
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">{service.title}</h2>
              </div>
              <p className="font-heading text-lg italic text-muted-foreground mb-8">{service.tagline}</p>
              <div className="w-12 h-0.5 bg-gold mb-8" />

              <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
                {service.copy.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>

              {service.offerings && (
                <div className="mt-10 space-y-6">
                  {service.offerings.map((o) => (
                    <div key={o.name} className="bg-background border border-border rounded-lg p-6">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{o.name}</h3>
                      <p className="text-muted-foreground font-body mb-3">{o.desc}</p>
                      <p className="text-sm font-medium text-primary">{o.price}</p>
                    </div>
                  ))}
                </div>
              )}

              {service.bestFor && (
                <p className="mt-8 text-sm text-muted-foreground font-body">
                  <strong className="text-foreground">Best for:</strong> {service.bestFor}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                {service.external ? (
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac gap-2">
                      {service.cta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                ) : (
                  <Link to={service.link}>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac gap-2">
                      {service.cta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
                {service.secondaryCta && (
                  <Link to={service.secondaryLink!}>
                    <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 gap-2">
                      {service.secondaryCta} <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-cream">Ready to build something that lasts?</h2>
          <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
          <p className="mt-6 text-warm-grey-light leading-relaxed font-body">Every engagement begins with a conversation.</p>
          <Link to="/contact">
            <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-cognac">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
