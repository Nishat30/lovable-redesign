import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, User, MapPin, Mail, Phone, Globe, Users, Target, Building, Calendar } from "lucide-react";
import globalData from "@/data/globalInitiative.json";

export default function CountryPage() {
  const { countrySlug } = useParams<{ countrySlug: string }>();

  // Find the member by slug (derived from country name)
  let person: any = null;
  let continentName = "";
  let continentMembers: any[] = [];

  for (const continent of globalData.continents) {
    // Check head
    if (continent.head) {
      const headSlug = continent.head.country.toLowerCase().replace(/\s+/g, "-");
      if (headSlug === countrySlug) {
        person = continent.head;
        continentName = continent.name;
        continentMembers = continent.members;
        break;
      }
    }
    // Check members
    for (const member of continent.members) {
      const memberSlug = member.country.toLowerCase().replace(/\s+/g, "-");
      if (memberSlug === countrySlug) {
        person = member;
        continentName = continent.name;
        continentMembers = continent.members.filter(m => m.id !== member.id);
        break;
      }
    }
    if (person) break;
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-28 pb-16 container mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Country Page Not Found</h1>
          <Link to="/global" className="text-primary hover:underline">← Back to Global Initiative</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="bg-gradient-hero text-primary-foreground pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/global" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Global Initiative
            </Link>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">{continentName}</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                GFSRD {person.country}
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl text-lg">
                Driving sustainable rural development initiatives in {person.country} through research, education, and community partnerships.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Country Director */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-card border border-border overflow-hidden mb-12"
              >
                <div className="h-2 bg-gradient-hero" />
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden border-4 border-primary/15 shrink-0">
                      {person.image ? (
                        <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-14 h-14 text-muted-foreground" />
                      )}
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">Country Director</span>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{person.name}</h2>
                      <p className="text-primary font-medium mt-1">{person.role}</p>
                      <p className="text-muted-foreground flex items-center gap-2 mt-2 justify-center md:justify-start">
                        <MapPin className="w-4 h-4" /> {person.country}
                      </p>
                      {person.bio && (
                        <p className="text-muted-foreground mt-4 leading-relaxed">{person.bio}</p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-4">
                        {person.email && (
                          <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                            <Mail className="w-4 h-4" /> {person.email}
                          </a>
                        )}
                        {person.phone && (
                          <a href={`tel:${person.phone}`} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                            <Phone className="w-4 h-4" /> {person.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Country Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Target, title: "Focus Areas", items: ["Sustainable Agriculture", "Rural Education", "Community Health", "Climate Adaptation"] },
                  { icon: Users, title: "Programs", items: ["Youth Leadership", "Women Empowerment", "Farmer Training", "Digital Literacy"] },
                  { icon: Calendar, title: "Key Activities", items: ["Annual Conference", "Field Research", "Policy Advocacy", "Capacity Building"] },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-soft border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { value: "50+", label: "Villages Reached" },
                  { value: "5,000+", label: "Farmers Trained" },
                  { value: "10+", label: "Active Programs" },
                  { value: "20+", label: "Partner Organizations" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-gradient-hero text-primary-foreground rounded-2xl p-6 text-center"
                  >
                    <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Other members in continent */}
              {continentMembers.length > 0 && (
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6">Other {continentName} Directors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {continentMembers.slice(0, 8).map((member, i) => {
                      const slug = member.country.toLowerCase().replace(/\s+/g, "-");
                      return (
                        <motion.div
                          key={member.id}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={`/country/${slug}`}
                            className="block bg-card rounded-xl border border-border/50 p-4 text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300 group"
                          >
                            <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-3 border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                              ) : (
                                <User className="w-6 h-6 text-muted-foreground" />
                              )}
                            </div>
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{member.name}</h4>
                            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-1">
                              <MapPin className="w-3 h-3" /> {member.country}
                            </p>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
