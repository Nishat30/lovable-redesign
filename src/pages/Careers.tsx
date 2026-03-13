import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, GraduationCap, Search, Users, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const opportunities = [
  {
    title: "Research Intern — Sustainable Agriculture",
    type: "Internship",
    duration: "3-6 months",
    location: "New Delhi, India / Remote",
    description: "Assist in conducting research on climate-resilient farming practices and contribute to policy briefs for sustainable agriculture programs.",
    requirements: ["Pursuing or completed Master's in Agriculture, Environmental Science, or related field", "Strong research and analytical skills", "Proficiency in English; additional languages are a plus"],
  },
  {
    title: "Research Fellow — Climate Change & Rural Communities",
    type: "Research",
    duration: "12 months",
    location: "Geneva, Switzerland",
    description: "Lead an independent research project on climate change impacts on rural livelihoods and develop actionable recommendations for policy interventions.",
    requirements: ["PhD or advanced degree in Environmental Studies, Development Economics, or related field", "Published research in peer-reviewed journals", "Experience with field research in developing countries"],
  },
  {
    title: "Communications Intern",
    type: "Internship",
    duration: "3 months",
    location: "Remote",
    description: "Support GFSRD's digital communications, social media management, and content creation for global outreach campaigns.",
    requirements: ["Pursuing degree in Communications, Journalism, or Marketing", "Experience with social media management", "Strong writing and visual storytelling skills"],
  },
  {
    title: "Program Coordinator — Youth Development",
    type: "Internship",
    duration: "6 months",
    location: "Jakarta, Indonesia",
    description: "Coordinate youth leadership programs and facilitate workshops for rural youth across Southeast Asian countries.",
    requirements: ["Bachelor's degree in Social Work, Education, or Development Studies", "Experience working with youth in rural settings", "Fluency in English and Bahasa Indonesia"],
  },
  {
    title: "Research Associate — Gender Equality in Rural Development",
    type: "Research",
    duration: "12 months",
    location: "Nairobi, Kenya / Remote",
    description: "Conduct field research on gender dynamics in rural communities and develop frameworks for gender-inclusive development programs.",
    requirements: ["Master's or PhD in Gender Studies, Development Studies, or related field", "Field research experience in Sub-Saharan Africa", "Knowledge of gender mainstreaming frameworks"],
  },
  {
    title: "Data Analysis Intern",
    type: "Internship",
    duration: "3-6 months",
    location: "Remote",
    description: "Analyze rural development data, create visualizations, and support evidence-based decision making across GFSRD programs.",
    requirements: ["Pursuing degree in Data Science, Statistics, or related field", "Proficiency in Python/R and data visualization tools", "Interest in sustainable development and rural issues"],
  },
];

const benefits = [
  { icon: GraduationCap, title: "Learning & Mentorship", description: "Work alongside global experts in rural development." },
  { icon: Globe, title: "Global Exposure", description: "Collaborate with teams across 50+ countries." },
  { icon: BookOpen, title: "Research Opportunities", description: "Access to extensive research databases and networks." },
  { icon: Users, title: "Networking", description: "Build connections with leading development practitioners." },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-gradient-hero text-primary-foreground pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">Careers & Opportunities</span>
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Join Our Mission
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Explore internship and research opportunities to make a real impact on sustainable rural development worldwide.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Benefits */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities List */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Open Opportunities
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Current internship and research positions available at GFSRD.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={opp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-elevated transition-all duration-300"
                >
                  <div className={`h-1 ${opp.type === "Research" ? "bg-gradient-accent" : "bg-gradient-hero"}`} />
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            opp.type === "Research" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                          }`}>
                            {opp.type}
                          </span>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {opp.title}
                        </h3>
                      </div>
                      <Button variant="hero" size="sm" className="shrink-0">
                        Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-4">{opp.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {opp.duration}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {opp.location}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {opp.requirements.map((req, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Don't See the Right Fit?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              We're always looking for passionate individuals. Send us your CV and areas of interest.
            </p>
            <Button variant="accent" size="lg">
              Send Open Application <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
