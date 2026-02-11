import { motion } from "framer-motion";
import { Building, Target, Eye, Award, Globe, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Who We Are</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mt-2">
            About GFSRD
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Main About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground">Our Organization</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              GFSRD is registered as Not-For-Profit Company under Section 8/15 under Ministry of Corporate Affairs, Government of India. GFSRD is also ISO 9001: 2015 certified Not-For-Profit Company with a mission to create a platform to bring and link Rural Development Research, Policies and Practices in one umbrella and advocate for Sustainable Rural Development globally.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                To bridge the gap between rural development research, policies, and practices by fostering global collaboration, capacity building, and advocacy for sustainable rural communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                A world where rural communities thrive with equitable access to resources, sustainable livelihoods, and inclusive development aligned with the UN Sustainable Development Goals.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Key highlights */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { icon: Award, label: "ISO 9001:2015 Certified" },
            { icon: Globe, label: "Global Network & Partnerships" },
            { icon: Users, label: "Community-Driven Approach" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                <item.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
