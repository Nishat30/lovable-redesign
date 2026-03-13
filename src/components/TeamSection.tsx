import { motion } from "framer-motion";
import { User, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & President",
    bio: "Leading global rural development initiatives for over 20 years.",
    image: "",
    linkedin: "#",
    email: "president@gfsrd.net",
  },
  {
    name: "Maria Christina Endarwati",
    role: "Co-Founder & Head, GFSRD-Asia",
    bio: "Driving sustainable change across Asian rural communities.",
    image: "",
    linkedin: "#",
    email: "asia@gfsrd.net",
  },
  {
    name: "Dr. Sarah Mitchell",
    role: "Director of Research",
    bio: "Pioneering research in climate-resilient agricultural practices.",
    image: "",
    linkedin: "#",
    email: "",
  },
  {
    name: "Prof. James Okonkwo",
    role: "Head of Programs",
    bio: "Designing impactful programs for rural empowerment.",
    image: "",
    linkedin: "#",
    email: "",
  },
  {
    name: "Dr. Anita Sharma",
    role: "Director, GFSRD Academy",
    bio: "Building capacity through education and skills development.",
    image: "",
    linkedin: "#",
    email: "",
  },
  {
    name: "David Chen",
    role: "Head of Partnerships",
    bio: "Forging strategic alliances with governments and NGOs worldwide.",
    image: "",
    linkedin: "#",
    email: "",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our People
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated leaders and experts driving sustainable rural development across the globe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-2 bg-gradient-hero" />
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center overflow-hidden mb-4 border-3 border-primary/10 group-hover:border-primary/30 transition-colors">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex items-center justify-center gap-3">
                  {member.linkedin && (
                    <a href={member.linkedin} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
