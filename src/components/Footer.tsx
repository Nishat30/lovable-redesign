import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  programs: [
    { name: "GFSRD Academy", href: "/academy", isRoute: true },
    { name: "Global Initiatives", href: "/global", isRoute: true },
    { name: "Media Coverage", href: "/media-coverage", isRoute: true },
    { name: "Careers", href: "/careers", isRoute: true },
  ],
  about: [
    { name: "About Us", href: "/about", isRoute: true },
    { name: "Our Team", href: "/about", isRoute: true },
    { name: "Partners", href: "#", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
  ],
  resources: [
    { name: "Publications", href: "#", isRoute: false },
    { name: "Research", href: "#", isRoute: false },
    { name: "Case Studies", href: "#", isRoute: false },
    { name: "Glossary", href: "/academy", isRoute: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Globe className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold">GFSRD</span>
                <span className="block text-xs text-primary-foreground/70">
                  Global Forum for Sustainable Rural Development
                </span>
              </div>
            </motion.div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Empowering rural communities worldwide through sustainable
              agriculture, education, and collaborative partnerships since 2005.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@gfsrd.org"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@gfsrd.org
              </a>
              <a
                href="tel:+41227889900"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                +41 22 788 99 00
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                Geneva, Switzerland
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 Global Forum for Sustainable Rural Development. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
