import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic, BookOpen, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImage from "@/assets/hero-home.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import bookCover from "@/assets/book-cover.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Lakeidra Smith seated in warm natural light" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 py-32">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream leading-tight"
            >
              I wrote the book on why cybersecurity starts with <em className="text-camel">you.</em>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-xl text-cream/80 font-heading italic"
            >
              Not your IT department. Not your software. You.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-base text-cream/70 leading-relaxed max-w-lg font-body"
            >
              I'm Lakeidra Smith — cybersecurity educator, keynote speaker, and author of Cyber Curiosity. I help people stop feeling helpless about their digital safety and start feeling like the capable, curious humans they already are.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
              <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac text-base px-8">
                  Get the Book
                </Button>
              </a>
              <Link to="/contact?service=keynote">
                <Button size="lg" variant="outline" className="border-cream/40 text-cream hover:bg-cream/10 text-base px-8">
                  Invite Me to Speak
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
              I believe the cybersecurity industry has been talking to the wrong people.
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed font-body">
              For years, the conversation about digital safety has been aimed at IT professionals and technical experts. Meanwhile, the rest of us — the assistants, the executives, the parents, the students, the everyday humans actually being targeted — were left with nothing but fear and jargon.
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-body">
              I started The Cyber Consultant and wrote <em>Cyber Curiosity</em> to change that. Because protecting yourself online isn't a technical skill. It's a human one.
            </p>
            <p className="mt-6 text-xl font-heading italic text-foreground">
              And you already have everything you need to do it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <SectionHeading centered>How I Work</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            {[
              {
                icon: Mic,
                title: "I speak.",
                copy: "Keynotes, conference talks, and executive briefings that make cybersecurity feel urgent, accessible, and — somehow — exciting. Audiences leave with a framework they can use before they even get back to their desks.",
                cta: "Invite me to speak",
                link: "/contact?service=keynote",
              },
              {
                icon: BookOpen,
                title: "I teach.",
                copy: "Workshops and team training sessions that change how people think about their digital habits. Based on the Cyber Curiosity Mindset: Pause. Ask. Verify.",
                cta: "Bring a workshop to your team",
                link: "/contact?service=workshop",
              },
              {
                icon: Building2,
                title: "I build.",
                copy: "Curriculum development partnerships for workforce organizations and training providers who want to add rigorous, human-centered cybersecurity programs to their catalog.",
                cta: "Explore a curriculum partnership",
                link: "/contact?service=curriculum",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-background rounded-lg p-8 lg:p-10 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-body mb-6">{item.copy}</p>
                <Link to={item.link} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cognac transition-colors">
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Book */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={bookCover} alt="Cyber Curiosity book cover" className="rounded-lg shadow-2xl max-w-sm mx-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Cyber Curiosity</h2>
              <div className="mt-4 w-16 h-0.5 bg-gold" />
              <p className="mt-6 text-lg font-heading italic text-muted-foreground">
                The book I wrote for everyone who ever felt like digital safety was too complicated, too technical, or too late.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed font-body">
                Cyber Curiosity introduces <strong>Pause. Ask. Verify.</strong> and shows you how to weave it into your daily life — without overwhelm, without jargon, and without feeling like it's someone else's problem.
              </p>
              <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-cognac gap-2">
                  Get your copy <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={aboutPortrait} alt="Lakeidra Smith portrait" className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading>A little about me</SectionHeading>
              <p className="text-muted-foreground leading-relaxed font-body">
                I've been fascinated by technology since before I could fully understand it. By nine I was fixing my own computer after breaking it out of curiosity. By fifteen I was charging neighbors for virus removal and website builds. I never stopped tinkering — I just eventually figured out that the most important system to secure is the human one.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed font-body">
                I carry my grandmother's conviction into everything I do: that education is liberation, and that access to knowledge changes what's possible. Cybersecurity has been gatekept for too long. I'm here to open it up.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-cognac transition-colors">
                Read my full story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Let's make cyber curiosity contagious.
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-body">
              Whether you want to book a keynote, bring a workshop to your team, or build something new together — I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-cognac text-base px-10">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
