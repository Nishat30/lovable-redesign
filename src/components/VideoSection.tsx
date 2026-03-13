import { motion } from "framer-motion";
import { Play, TreePine } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            <TreePine className="w-4 h-4" />
            Climate Action
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Children for Climate Change
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Empowering the next generation to take action against climate change through education, awareness, and community-driven environmental initiatives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-video bg-foreground/20">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-foreground/30" />
                <div className="text-center relative z-10">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform shadow-elevated"
                  >
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </button>
                  <p className="text-primary-foreground font-display text-lg font-semibold">
                    Watch the Documentary
                  </p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Coming Soon — Video will be added here
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-foreground/40">
                <p className="text-primary-foreground text-lg font-medium">
                  Video player placeholder — Add YouTube embed URL
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
          className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Children Engaged" },
            { value: "25+", label: "Countries Reached" },
            { value: "500+", label: "Schools Participating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
