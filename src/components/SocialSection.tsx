import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Globe } from "lucide-react";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/gfsrd", color: "hover:bg-[hsl(220,46%,48%)]", followers: "15K+" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/gfsrd", color: "hover:bg-[hsl(203,89%,53%)]", followers: "8K+" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/gfsrd", color: "hover:bg-[hsl(210,80%,42%)]", followers: "12K+" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/gfsrd", color: "hover:bg-[hsl(340,75%,54%)]", followers: "10K+" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@gfsrd", color: "hover:bg-[hsl(0,100%,40%)]", followers: "5K+" },
  { icon: Globe, label: "Website", href: "https://gfsrd.net", color: "hover:bg-primary", followers: "" },
];

export function SocialSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Connect With Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Stay connected through our social channels and join the conversation on sustainable rural development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group flex flex-col items-center gap-2 p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 w-36 ${social.color}`}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
                <social.icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors">{social.label}</span>
              {social.followers && (
                <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">{social.followers} followers</span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
