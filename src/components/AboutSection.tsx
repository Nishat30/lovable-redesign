import { motion } from "framer-motion";
import { Building, Target, Eye, Award, Globe, Users, FileText } from "lucide-react";

const credentials = [
  { icon: Award, label: "ISO 9001:2015 Certified", desc: "Quality management standard" },
  { icon: FileText, label: "Section 8/15 Registered", desc: "Ministry of Corporate Affairs, India" },
  { icon: Globe, label: "Global Partnerships", desc: "International collaboration network" },
  { icon: Users, label: "Community-Driven", desc: "Grassroots development approach" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Who We Are
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About GFSRD
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A global platform bridging rural development research, policies, and practices for sustainable communities.
          </p>
        </motion.div>

        {/* Organization Card */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-elevated border border-border/50 hover:shadow-card transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">Our Organization</h3>
            </div>
            <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
              GFSRD is registered as Not-For-Profit Company under Section 8/15 under Ministry of Corporate Affairs, Government of India. GFSRD is also ISO 9001: 2015 certified Not-For-Profit Company with a mission to create a platform to bring and link Rural Development Research, Policies and Practices in one umbrella and advocate for Sustainable Rural Development globally.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-foreground/75 leading-relaxed">
              To bridge the gap between rural development research, policies, and practices by fostering global collaboration, capacity building, and advocacy for sustainable rural communities.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-card rounded-2xl p-7 md:p-8 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-foreground/75 leading-relaxed">
              A world where rural communities thrive with equitable access to resources, sustainable livelihoods, and inclusive development aligned with the UN Sustainable Development Goals.
            </p>
          </motion.div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {credentials.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i + 3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-card rounded-xl p-5 shadow-soft border border-border/50 text-center hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-sm text-foreground block mb-1">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
