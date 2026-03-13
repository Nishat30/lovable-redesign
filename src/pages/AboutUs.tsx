import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building, Target, Eye, Award, Globe, Users, FileText, MapPin, Calendar, Shield, Heart } from "lucide-react";

const milestones = [
  { year: "2005", title: "Foundation", description: "GFSRD established as a global platform for sustainable rural development." },
  { year: "2008", title: "First International Conference", description: "Hosted the inaugural Global Rural Development Summit in Geneva." },
  { year: "2012", title: "Academy Launch", description: "GFSRD Academy launched with 8 global centres for research and training." },
  { year: "2015", title: "ISO Certification", description: "Received ISO 9001:2015 certification for quality management standards." },
  { year: "2018", title: "50 Countries", description: "Network expanded to cover operations across 50+ countries worldwide." },
  { year: "2020", title: "Digital Transformation", description: "Launched virtual training programs reaching 100,000+ rural practitioners." },
  { year: "2023", title: "SDG Localization", description: "Pioneered grassroots SDG implementation framework adopted by 15 governments." },
  { year: "2026", title: "Global Expansion", description: "Continuing to expand with new country offices and partnership programs." },
];

const values = [
  { icon: Heart, title: "Empathy", description: "Understanding the needs and aspirations of rural communities worldwide." },
  { icon: Globe, title: "Inclusivity", description: "Ensuring development benefits reach every segment of society." },
  { icon: Shield, title: "Integrity", description: "Maintaining the highest standards of transparency and accountability." },
  { icon: Users, title: "Collaboration", description: "Building partnerships that multiply our collective impact." },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-gradient-hero text-primary-foreground pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Building className="w-4 h-4" />
                <span className="text-sm font-medium">About GFSRD</span>
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Story & Mission
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Building a world where rural communities thrive through sustainable development, innovation, and global collaboration since 2005.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Organization Overview */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 mb-8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground">Who We Are</h2>
                </div>
                <p className="text-foreground/75 leading-relaxed text-lg">
                  The Global Forum for Sustainable Rural Development (GFSRD) is registered as a Not-For-Profit Company under Section 8/15 under the Ministry of Corporate Affairs, Government of India. GFSRD is also ISO 9001:2015 certified. Our mission is to create a platform that brings together Rural Development Research, Policies, and Practices under one umbrella and advocates for Sustainable Rural Development globally.
                </p>
              </motion.div>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    To bridge the gap between rural development research, policies, and practices by fostering global collaboration, capacity building, and advocacy for sustainable rural communities.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    A world where rural communities thrive with equitable access to resources, sustainable livelihoods, and inclusive development aligned with the UN Sustainable Development Goals.
                  </p>
                </motion.div>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Award, label: "ISO 9001:2015", desc: "Quality Certified" },
                  { icon: FileText, label: "Section 8/15", desc: "Registered NPO" },
                  { icon: Globe, label: "50+ Countries", desc: "Global Network" },
                  { icon: Users, label: "2M+ Farmers", desc: "Lives Impacted" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-xl p-5 shadow-soft border border-border/50 text-center"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm text-foreground block mb-1">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide everything we do.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50 hover:shadow-card transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Key milestones in our mission for sustainable development.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-1.5 z-10" />
                  <div className="ml-14 md:ml-0 md:w-1/2 bg-card rounded-xl p-5 shadow-soft border border-border/50">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded mb-2">{milestone.year}</span>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
