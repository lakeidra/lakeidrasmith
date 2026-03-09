import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">Lakeidra Smith</h3>
            <p className="text-warm-grey-light text-sm leading-relaxed max-w-xs">
              Cybersecurity educator, keynote speaker, and author of Cyber Curiosity. Making digital safety accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-warm-grey-light hover:text-camel transition-colors">About</Link>
              <Link to="/services" className="text-sm text-warm-grey-light hover:text-camel transition-colors">Services</Link>
              <Link to="/cyber-curiosity" className="text-sm text-warm-grey-light hover:text-camel transition-colors">Cyber Curiosity</Link>
              <Link to="/contact" className="text-sm text-warm-grey-light hover:text-camel transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@lakeidra.com"
                className="flex items-center gap-2 text-sm text-warm-grey-light hover:text-camel transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@lakeidra.com
              </a>
              <div className="flex items-center gap-2 text-sm text-warm-grey-light">
                <MapPin className="w-4 h-4" />
                Birmingham, Alabama
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-grey/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-grey-light">
              © {new Date().getFullYear()} Lakeidra Smith / The Cyber Consultant LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/thecyberconsultant/" target="_blank" rel="noopener noreferrer" className="text-xs text-warm-grey-light hover:text-camel transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
