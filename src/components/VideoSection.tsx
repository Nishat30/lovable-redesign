import { motion } from "framer-motion";
import { Play, TreePine } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-3">
          <TreePine className="w-4 h-4" />
          Climate Action
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
          Children for Climate Change
        </h2>
        <p className="text-primary-foreground/80 text-sm">
          Empowering the next generation to take action against climate change through education and community-driven initiatives.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/20">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="text-center relative z-10">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform shadow-elevated"
                >
                  <Play className="w-6 h-6 text-accent-foreground ml-1" />
                </button>
                <p className="text-primary-foreground font-display text-sm font-semibold">
                  Watch the Documentary
                </p>
                <p className="text-primary-foreground/70 text-xs mt-1">
                  Coming Soon
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-foreground/40">
              <p className="text-primary-foreground text-sm font-medium">
                Video player placeholder
              </p>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-3 mt-6"
      >
        {[
          { value: "10,000+", label: "Children Engaged" },
          { value: "25+", label: "Countries Reached" },
          { value: "500+", label: "Schools Participating" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
            <div className="font-display text-xl font-bold mb-0.5">{stat.value}</div>
            <div className="text-primary-foreground/70 text-xs">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
