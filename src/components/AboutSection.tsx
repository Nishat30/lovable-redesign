import { motion } from "framer-motion";
import { Building, Target, Eye, Award, Globe, Users, Shield, FileText } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background border-t-4 border-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Official Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-primary text-primary-foreground px-6 py-4 rounded-t-lg flex items-center gap-3"
        >
          <Shield className="h-6 w-6 shrink-0" />
          <h2 className="font-display text-xl md:text-2xl font-bold tracking-wide uppercase">
            About GFSRD
          </h2>
        </motion.div>

        {/* Main Content Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-t-0 border-border rounded-b-lg shadow-sm"
        >
          {/* Organization Description */}
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex items-start gap-3 mb-3">
              <Building className="h-5 w-5 text-primary mt-1 shrink-0" />
              <h3 className="font-display text-lg font-semibold text-foreground">Our Organization</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed pl-8">
              GFSRD is registered as Not-For-Profit Company under Section 8/15 under Ministry of Corporate Affairs, Government of India. GFSRD is also ISO 9001: 2015 certified Not-For-Profit Company with a mission to create a platform to bring and link Rural Development Research, Policies and Practices in one umbrella and advocate for Sustainable Rural Development globally.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                To bridge the gap between rural development research, policies, and practices by fostering global collaboration, capacity building, and advocacy for sustainable rural communities.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm">
                A world where rural communities thrive with equitable access to resources, sustainable livelihoods, and inclusive development aligned with the UN Sustainable Development Goals.
              </p>
            </div>
          </div>

          {/* Key Credentials Bar */}
          <div className="bg-secondary/50 border-t border-border px-6 py-5">
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { icon: Award, label: "ISO 9001:2015 Certified" },
                { icon: FileText, label: "Section 8/15 Registered" },
                { icon: Globe, label: "Global Network & Partnerships" },
                { icon: Users, label: "Community-Driven Approach" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5 text-sm">
                  <item.icon className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
