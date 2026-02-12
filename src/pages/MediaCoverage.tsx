import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import mediaCoverageData from "@/data/mediaCoverage.json";

export default function MediaCoverage() {
  const featured = mediaCoverageData.articles[0];
  const sidebar = mediaCoverageData.articles.slice(1, 9);
  const remaining = mediaCoverageData.articles.slice(9);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <span className="font-playfair text-lg font-bold text-primary">GFSRD</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Title */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <Newspaper className="h-8 w-8" />
          </div>
          <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground">
            Media Coverage
          </h1>
        </div>

        {/* Hero + Sidebar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-10">
          {/* Featured Article */}
          <motion.a
            href={featured.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative block rounded-xl overflow-hidden bg-foreground aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                Featured
              </span>
              <h2 className="font-playfair text-xl md:text-3xl lg:text-4xl font-bold text-background leading-tight mb-3 group-hover:underline decoration-2 underline-offset-4">
                {featured.title}
              </h2>
              <div className="flex items-center gap-2 text-background/70 text-sm">
                <Clock className="w-3.5 h-3.5" />
                <span>GFSRD Media</span>
              </div>
            </div>
          </motion.a>

          {/* Sidebar Articles */}
          <div className="flex flex-col gap-4">
            {sidebar.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="group flex gap-4 items-start p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border"
              >
                <div className="shrink-0 w-20 h-16 md:w-24 md:h-[72px] rounded-md bg-primary/10 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-primary/50" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1.5">
                    <Clock className="w-3 h-3" />
                    <span>GFSRD</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Remaining Articles Grid */}
        {remaining.length > 0 && (
          <>
            <div className="border-t border-border pt-8 mb-6">
              <h2 className="font-playfair text-xl font-bold text-foreground">More Coverage</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {remaining.map((article, i) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  className="group block p-5 rounded-xl bg-card border border-border hover:shadow-card hover:border-primary/20 transition-all"
                >
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors mb-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      GFSRD
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
