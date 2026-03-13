import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Globe } from "lucide-react";
import globalData from "@/data/globalInitiative.json";

// Approximate positions for countries on an SVG world map (percentage-based)
const countryPositions: Record<string, { x: number; y: number }> = {
  "Indonesia": { x: 72, y: 62 },
  "Laos": { x: 70, y: 45 },
  "Türkiye": { x: 54, y: 35 },
  "Kyrgyz Republic": { x: 60, y: 33 },
  "Iraq": { x: 55, y: 38 },
  "Cambodia": { x: 71, y: 50 },
  "Myanmar": { x: 68, y: 45 },
  "Malaysia": { x: 71, y: 55 },
  "Afghanistan": { x: 59, y: 38 },
  "Sri Lanka": { x: 63, y: 52 },
  "Philippines": { x: 76, y: 48 },
  "Nepal": { x: 64, y: 40 },
  "Bhutan": { x: 66, y: 40 },
  "Bangladesh": { x: 66, y: 43 },
};

export function WorldMapSection() {
  const allMembers = globalData.continents.flatMap(c => {
    const members = [...c.members];
    if (c.head) members.push(c.head as any);
    return members;
  }).filter(m => m.country && countryPositions[m.country]);

  return (
    <section className="py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Our Global Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Where We Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            GFSRD operates across multiple continents, with country directors driving sustainable development in their regions.
          </p>
        </motion.div>

        {/* World Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden"
        >
          <div className="relative w-full" style={{ paddingTop: "50%" }}>
            {/* Simple world map background */}
            <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center">
              <svg viewBox="0 0 100 50" className="w-full h-full opacity-20" preserveAspectRatio="xMidYMid meet">
                {/* Simplified continent shapes */}
                <ellipse cx="25" cy="22" rx="12" ry="10" fill="hsl(var(--primary))" opacity="0.3" />
                <ellipse cx="50" cy="20" rx="8" ry="12" fill="hsl(var(--primary))" opacity="0.3" />
                <ellipse cx="47" cy="35" rx="6" ry="8" fill="hsl(var(--primary))" opacity="0.3" />
                <ellipse cx="70" cy="25" rx="15" ry="12" fill="hsl(var(--primary))" opacity="0.3" />
                <ellipse cx="82" cy="38" rx="6" ry="5" fill="hsl(var(--primary))" opacity="0.3" />
                <ellipse cx="15" cy="35" rx="5" ry="8" fill="hsl(var(--primary))" opacity="0.3" />
              </svg>
            </div>

            {/* Country markers */}
            {allMembers.map((member, i) => {
              const pos = countryPositions[member.country];
              if (!pos) return null;
              const slug = member.country.toLowerCase().replace(/\s+/g, "-");
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="absolute group"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <Link to={`/country/${slug}`} className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary border-2 border-card shadow-soft group-hover:scale-150 transition-transform cursor-pointer">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-foreground text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-elevated">
                      {member.country}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="p-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span>GFSRD Country Office</span>
            </div>
            <Link to="/global" className="text-sm text-primary font-medium hover:underline">
              View All Directors →
            </Link>
          </div>
        </motion.div>

        {/* Continent stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 max-w-5xl mx-auto">
          {globalData.continents.map((continent, i) => (
            <motion.div
              key={continent.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl p-4 text-center shadow-soft border border-border/50"
            >
              <div className="font-display text-2xl font-bold text-primary">{continent.members.length}</div>
              <div className="text-xs text-muted-foreground">{continent.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
