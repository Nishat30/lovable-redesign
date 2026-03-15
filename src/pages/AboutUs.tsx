import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Building, Target, Eye, Award, Globe, Users, FileText, Shield, Heart, Lightbulb, BookOpen, Handshake, Megaphone, GraduationCap } from "lucide-react";

const goals = [
  { icon: Globe, text: "Work as a rural development network and policy think tank that develops and promotes alternative solutions to issues concerned with sustainable rural development." },
  { icon: Users, text: "Provide a platform for stakeholders to engage in rural development issues, present best practices and initiate policy dialogue." },
  { icon: Handshake, text: "Build a strong network by working in collaboration and cooperation with similar training, research, and academic organizations/institutions globally." },
  { icon: BookOpen, text: "Conduct cross-country policy research and evaluation studies and establish a knowledge-based resource storehouse in the field of sustainable rural development." },
  { icon: GraduationCap, text: "Focus on information dissemination and capacity building by organizing conferences, seminars, training on different thrust areas related to sustainable rural development." },
  { icon: Megaphone, text: "Advocate for sustainable rural development globally." },
];

const objectives = [
  "To provide platform for academicians, policy makers and practitioners to share their works and thought.",
  "To conduct and facilitate collaborative interdisciplinary cross country rural development issues / rural policy research.",
  "To promote action research on sustainable rural development in different countries.",
];

const values = [
  { icon: Heart, title: "Empathy", description: "Understanding the needs and aspirations of rural communities worldwide." },
  { icon: Globe, title: "Inclusivity", description: "Ensuring development benefits reach every segment of society." },
  { icon: Shield, title: "Integrity", description: "Maintaining the highest standards of transparency and accountability." },
  { icon: Users, title: "Collaboration", description: "Building partnerships that multiply our collective impact." },
];

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

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
                Building a world where rural communities thrive through sustainable development, innovation, and global collaboration.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Who We Are */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50 mb-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Who We Are</h2>
              </div>
              <p className="text-foreground/75 leading-relaxed text-lg">
                GFSRD is registered as a Not-For-Profit Company under Section 8/15 under the Ministry of Corporate Affairs, Government of India. GFSRD is also ISO 9001:2015 certified Not-For-Profit Company with a mission to create a platform to bring and link Rural Development Research, Policies and Practices in one umbrella and advocate for Sustainable Rural Development globally.
              </p>
            </motion.div>

            {/* Credentials */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: Award, label: "ISO 9001:2015", desc: "Quality Certified" },
                { icon: FileText, label: "Section 8/15", desc: "Registered NPO" },
                { icon: Globe, label: "50+ Countries", desc: "Global Network" },
                { icon: Users, label: "2M+ Farmers", desc: "Lives Impacted" },
              ].map((item, i) => (
                <motion.div key={item.label} initial="hidden" whileInView="visible" custom={i + 1} variants={fadeUp} viewport={{ once: true }}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border/50 text-center">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm text-foreground block mb-1">{item.label}</span>
                  <span className="text-xs text-muted-foreground">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Genesis */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }} className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Origin</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Genesis</h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" custom={1} variants={fadeUp} viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Why GFSRD Was Founded</h3>
              </div>
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">
                Rural Development encompasses issues relating to all segments of the rural population and rural areas — presenting to policy makers and development practitioners with both problems as well as opportunities. It involves many dimensions and challenges, requiring an inter-disciplinary approach, which may not be possible to be addressed by individuals acting alone or by single institutions and organisations and by viewing issues solely from any particular level, region, or country.
              </p>
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg mt-4">
                Further, despite the abundance of best practice examples, and the wealth of initiatives, success stories, innovations, projects, programmes, organisational structures, institutions, opinions, and research related to rural issues that exist, there are few common platforms to present these and advocate towards policy reform for sustainable rural development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-foreground/75 leading-relaxed">
                  To create a platform to bring and link Rural Development Researches, Policies and Practices in one umbrella and advocate for Sustainable Rural Development globally.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" custom={1} variants={fadeUp} viewport={{ once: true }}
                className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-foreground/75 leading-relaxed">
                  Work as a rural development policy think tank that develops and promotes alternative solutions to issues concerned with sustainable rural development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">What We Do</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Goals</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goals.map((goal, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" custom={i + 1} variants={fadeUp} viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <goal.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground/75 leading-relaxed text-sm">{goal.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Focus</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Objectives</h2>
            </motion.div>
            <div className="space-y-4">
              {objectives.map((obj, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" custom={i + 1} variants={fadeUp} viewport={{ once: true }}
                  className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-soft border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-foreground/75 leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">The principles that guide everything we do.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, i) => (
                <motion.div key={value.title} initial="hidden" whileInView="visible" custom={i + 1} variants={fadeUp} viewport={{ once: true }}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50 hover:shadow-card transition-all">
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
            <motion.div initial="hidden" whileInView="visible" custom={0} variants={fadeUp} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Key milestones in our mission for sustainable development.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
              {milestones.map((milestone, i) => (
                <motion.div key={milestone.year} initial="hidden" whileInView="visible" custom={i} variants={fadeUp} viewport={{ once: true }}
                  className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
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
