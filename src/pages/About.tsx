import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import aboutPortrait from "@/assets/about-portrait.jpg";
import lifestyleFlatlay from "@/assets/lifestyle-flatlay.jpg";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <img src={aboutPortrait} alt="Lakeidra Smith" className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fade}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Hi. I'm Lakeidra.
              </h1>
              <div className="mt-4 w-16 h-0.5 bg-gold" />
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-body">
                I've been fascinated by what's inside the machine since I was four years old. That curiosity never left. I just eventually realized it was pointing me somewhere specific.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading>It started with a neon yellow bedroom.</SectionHeading>
            <div className="prose prose-lg text-muted-foreground font-body space-y-6">
              <p>My sister Kalisha had just gotten her bedroom painted the most blinding shade of neon yellow. I had opinions about the color choice, but it wasn't my room. What mattered was what was sitting on her desk.</p>
              <p>I was four. She let me hold the mouse. She wouldn't let me click anything — hit me with a stark stare every time my finger moved a centimeter — but I was completely transfixed. I had no idea what a computer did or how it worked. I just knew I had to find out.</p>
              <p>Years later, my mom bought me my first laptop for Christmas. I was nine. Within weeks I had downloaded enough sketchy programs to give it a proper virus — and spent the next several days figuring out how to fix what I'd broken. It was the most fun I'd ever had.</p>
              <p>By fifteen I was charging family and neighbors for virus removal, graphic design, and website builds. I was learning Python, Ruby, and a handful of other languages. I still haven't made peace with C, but that's a personal matter.</p>
              <p className="font-heading italic text-foreground text-xl">I didn't set out to build a career in tech. I just kept following the thing that made me feel most alive — and it kept leading me back to the same place.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading>She taught me what education is really for.</SectionHeading>
            <div className="prose prose-lg text-muted-foreground font-body space-y-6">
              <p>My grandmother was born a sharecropper's daughter. She earned her master's degree during the civil rights era. She taught special education for over 35 years in a community facing more barriers than most people ever have to.</p>
              <p>She never talked about education as a credential. She talked about it as liberation. As the thing that changes what's possible — not just for you, but for everyone around you.</p>
              <p>I carry that into everything I build. Cybersecurity education has been gatekept for too long. It has been made to feel technical, inaccessible, and frankly a little intimidating — which suits some people just fine. I'm not one of them.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading>One sentence that changed the direction of everything.</SectionHeading>
            <div className="prose prose-lg text-muted-foreground font-body space-y-6">
              <p>I was a college senior, working tech support by day and writing my first book by night. I called my boss to resign. He was technical, experienced, someone I genuinely respected. I told him what the book was about — cybersecurity, privacy, how everyday people had been left unprotected in a digital world designed to exploit them.</p>
              <p>I expected enthusiasm. Instead he said:</p>
              <blockquote className="border-l-4 border-gold pl-6 my-8 text-xl font-heading italic text-foreground">
                "Well, our data is already gone anyway. Who cares."
              </blockquote>
              <p>I couldn't shake it. Here was someone who knew the systems — and he'd given up. Not because he was careless. Because nobody had ever given him a reason to believe he could do anything about it.</p>
              <p>That was the moment I understood what I was actually writing. Not a book about technology. A book about agency. About giving people the belief — and the tools — to protect themselves.</p>
              <p className="font-heading italic text-foreground text-xl">That book became Cyber Curiosity. That conviction became The Cyber Consultant.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <SectionHeading>The work, in plain language.</SectionHeading>
            <div className="prose prose-lg text-muted-foreground font-body space-y-6">
              <p>I founded The Cyber Consultant in 2020 to make cybersecurity education accessible to the people who actually need it — not just technical experts, but the assistants, the executives, the parents, the teams, the organizations being targeted every single day.</p>
              <p>I speak at conferences and corporate events. I've been on stages at the Dell Cybersecurity Summit, Sloss Tech, Elevate and Empower Tech Event, EdFarm, and Correlation One. I want audiences to leave feeling curious and capable, not scared and overwhelmed.</p>
              <p>I design and deliver workshops that change how teams think about their digital habits — not for a week, but for good.</p>
              <p>And I wrote <em>Cyber Curiosity</em> — the book that introduces the Pause. Ask. Verify. framework, and the foundation of everything I teach.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Person */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <img src={lifestyleFlatlay} alt="Warm lifestyle flat lay with journal, coffee, and glasses" className="rounded-lg shadow-xl" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
              <SectionHeading>A few things that make me, me.</SectionHeading>
              <div className="prose prose-lg text-muted-foreground font-body space-y-6">
                <p>I'm based in Birmingham, Alabama — and I love it here more than I expected to.</p>
                <p>I'm a new mom. My daughter is the reason I came back to my business with more intention and more fire than I had before. She's watching. That matters.</p>
                <p>I do yoga to center myself and I listen to female rap to hype myself up before I go on stage. Both of those things are entirely, unapologetically me.</p>
                <p>I believe self-care and self-protection are the same instinct. Taking care of your digital life is no different from taking care of your skin, your body, your mental health. It's all about showing up for yourself with intention — and deciding that you are worth protecting.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fade}>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              If something on this page resonated —
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-cognac">Get in Touch</Button>
              </Link>
              <a href="https://www.amazon.com/Cyber-Curiosity-Beginners-Cybersecurity-Yourself/dp/1636768695/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">Get the Book</Button>
              </a>
              <Link to="/contact?service=keynote">
                <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">Invite Me to Speak</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
