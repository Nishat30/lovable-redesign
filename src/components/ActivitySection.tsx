import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowUpRight, Leaf, BookOpen, Globe, Handshake } from "lucide-react";

const activities = [
  {
    title: "International Conference on Sustainable Agriculture",
    date: "March 2026",
    location: "Geneva, Switzerland",
    category: "Conference",
    description: "Annual gathering of researchers, policymakers, and practitioners to discuss cutting-edge sustainable farming practices.",
    icon: Globe,
    color: "primary" as const,
  },
  {
    title: "Rural Youth Leadership Program",
    date: "April 2026",
    location: "New Delhi, India",
    category: "Training",
    description: "Intensive training for young rural leaders on sustainable development, entrepreneurship, and community organizing.",
    icon: Users,
    color: "accent" as const,
  },
  {
    title: "Bamboo Value Chain Workshop",
    date: "May 2026",
    location: "Jakarta, Indonesia",
    category: "Workshop",
    description: "Hands-on workshop on bamboo cultivation, processing, and market development for rural communities.",
    icon: Leaf,
    color: "primary" as const,
  },
  {
    title: "SDG Localization Summit",
    date: "June 2026",
    location: "Nairobi, Kenya",
    category: "Summit",
    description: "Bringing together local governments and community leaders to implement Sustainable Development Goals at the grassroots level.",
    icon: Handshake,
    color: "accent" as const,
  },
  {
    title: "Digital Literacy for Rural Women",
    date: "July 2026",
    location: "Dhaka, Bangladesh",
    category: "Program",
    description: "Empowering rural women with digital skills for economic participation and community development.",
    icon: BookOpen,
    color: "primary" as const,
  },
  {
    title: "Climate-Resilient Farming Masterclass",
    date: "August 2026",
    location: "Manila, Philippines",
    category: "Masterclass",
    description: "Advanced training on climate adaptation strategies, water management, and resilient crop varieties.",
    icon: Leaf,
    color: "accent" as const,
  },
];

export function ActivitySection() {
  return (
    <section className="py-24 lg:py-32 bg-background pattern-leaves">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Activities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From conferences to community programs, explore our diverse activities driving sustainable rural development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`h-1.5 ${activity.color === "accent" ? "bg-gradient-accent" : "bg-gradient-hero"}`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    activity.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                  }`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    activity.color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                  }`}>
                    {activity.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {activity.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {activity.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
