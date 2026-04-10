import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Mail, User, ChevronRight, Flag } from "lucide-react";
import stateDirectors from "@/data/stateDirectors.json";

const states = Object.entries(stateDirectors).map(([id, data]) => ({
  id,
  ...data,
}));

export default function IndiaInitiative() {
  const [activeState, setActiveState] = useState(states[0].id);
  const current = states.find((s) => s.id === activeState)!;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-gradient-hero text-primary-foreground py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Flag className="w-4 h-4" />
                <span className="text-sm font-medium">India Network</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                India Initiative
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
                Our network of state directors driving sustainable rural development across India.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* State Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden sticky top-28">
                <div className="p-5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Flag className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">States & UTs</h3>
                      <p className="text-xs text-muted-foreground">{states.length} regions</p>
                    </div>
                  </div>
                </div>
                <nav className="p-3 max-h-[60vh] overflow-y-auto">
                  {states.map((state) => {
                    const isActive = activeState === state.id;
                    return (
                      <button
                        key={state.id}
                        onClick={() => setActiveState(state.id)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 mb-1 ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-soft"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span className="text-left">{state.state}</span>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? "translate-x-0.5" : "opacity-0"}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <section className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeState}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-8"
                >
                  {/* State Header Banner */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="bg-gradient-hero py-10 px-8">
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center">
                        {current.state}
                      </h2>
                    </div>
                  </div>

                  {/* Director Card */}
                  <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                    <div className="p-8">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-center mb-8">
                        {current.designation} : {current.director || "To Be Announced"}
                      </h3>

                      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Director Image */}
                        <div className="w-40 h-40 rounded-full bg-secondary flex items-center justify-center overflow-hidden border-4 border-primary/20 shadow-soft shrink-0">
                          {current.image ? (
                            <img src={current.image} alt={current.director} className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-16 h-16 text-muted-foreground" />
                          )}
                        </div>

                        {/* Director Info */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                          {current.director && (
                            <div>
                              <h4 className="font-display text-lg font-bold text-foreground">{current.director}</h4>
                              <p className="text-primary font-medium text-sm">{current.designation} — {current.state}</p>
                            </div>
                          )}

                          {current.email && (
                            <p className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                              <Mail className="w-4 h-4 text-primary/60" />
                              {current.email}
                            </p>
                          )}

                          {!current.director && (
                            <p className="text-muted-foreground text-sm italic">
                              State Director information will be updated soon.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section */}
                  <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
                    <div className="p-8">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                        About {current.state}
                      </h3>
                      {current.about ? (
                        <p className="text-muted-foreground leading-relaxed">{current.about}</p>
                      ) : (
                        <p className="text-muted-foreground italic text-sm">
                          About section for {current.state} will be updated soon.
                        </p>
                      )}
                    </div>
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
