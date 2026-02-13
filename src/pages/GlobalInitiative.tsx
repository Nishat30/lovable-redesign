import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Globe, MapPin, Mail, User } from "lucide-react";
import globalData from "@/data/globalInitiative.json";

const continents = globalData.continents;

export default function GlobalInitiative() {
  const [activeContinent, setActiveContinent] = useState(continents[0].id);
  const current = continents.find((c) => c.id === activeContinent)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Global Initiative
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our worldwide network of country directors driving sustainable rural development across six continents.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Continent Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden sticky top-28">
                <div className="w-full h-1.5 bg-gradient-hero" />
                <nav className="p-2">
                  {continents.map((continent) => (
                    <button
                      key={continent.id}
                      onClick={() => setActiveContinent(continent.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeContinent === continent.id
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {continent.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContinent}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Continent Header */}
                  <div className="bg-gradient-hero text-primary-foreground rounded-xl p-6 mb-8 text-center">
                    <Globe className="w-10 h-10 mx-auto mb-2 opacity-80" />
                    <h2 className="font-display text-3xl font-bold">{current.name}</h2>
                  </div>

                  {/* Head of Continent */}
                  {current.head && (
                    <div className="bg-card rounded-xl shadow-card border border-border p-6 mb-8">
                      <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link to={`/global/profile/${current.head.id}`}>
                          <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center overflow-hidden border-4 border-primary/20 hover:border-primary/50 transition-colors">
                            {current.head.image ? (
                              <img src={current.head.image} alt={current.head.name} className="w-full h-full object-cover" />
                            ) : (
                              <User className="w-12 h-12 text-muted-foreground" />
                            )}
                          </div>
                        </Link>
                        <div className="text-center sm:text-left">
                          <Link to={`/global/profile/${current.head.id}`} className="hover:underline">
                            <h3 className="font-display text-xl font-bold text-primary">{current.head.name}</h3>
                          </Link>
                          <p className="text-accent font-medium text-sm">{current.head.role}</p>
                          {current.head.office && (
                            <div className="mt-3 text-sm text-muted-foreground space-y-1">
                              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {current.head.office.name}</p>
                              <p className="ml-6">{current.head.office.address}</p>
                              {current.head.email && (
                                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {current.head.email}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Members Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {current.members.map((member, i) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          to={`/global/profile/${member.id}`}
                          className="block bg-card rounded-xl border border-border p-4 text-center hover:shadow-elevated hover:-translate-y-1 transition-all duration-200 group"
                        >
                          <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary/30 transition-colors">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            ) : (
                              <User className="w-8 h-8 text-muted-foreground" />
                            )}
                          </div>
                          <h4 className="font-display text-sm font-semibold text-foreground leading-tight">{member.name}</h4>
                          <p className="text-xs text-accent mt-1">{member.role}</p>
                          <p className="text-xs text-muted-foreground">{member.country}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
