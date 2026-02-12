import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper, Clock, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import mediaCoverageData from "@/data/mediaCoverage.json";

const CATEGORIES = ["General News", "Conferences", "Partnerships", "Events"];

export default function MediaCoverage() {
  const featured = mediaCoverageData.articles.slice(0, 5);
  const remaining = mediaCoverageData.articles.slice(5);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

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

        {/* Featured Slider */}
        <section className="mb-10">
          <h2 className="text-primary font-bold text-lg uppercase tracking-wide mb-5">Today's News</h2>
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -ml-5">
                {featured.map((article) => (
                  <div key={article.id} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-5">
                    <a href={article.url} className="group block">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">General</span>
                      <h3 className="font-playfair text-base font-bold text-foreground leading-snug mt-1 mb-2 line-clamp-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">POSTED ON 2026-02-12</p>
                      <p className="text-sm text-muted-foreground line-clamp-4 mb-2">
                        GFSRD media coverage article about {article.title.slice(0, 60).toLowerCase()}...
                      </p>
                      <span className="text-sm text-primary font-medium group-hover:underline">Read More →</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-card border border-border shadow flex items-center justify-center hover:bg-secondary disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-card border border-border shadow flex items-center justify-center hover:bg-secondary disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
          {/* Articles Grid */}
          <div>
            <div className="border-t border-border pt-6 mb-6">
              <h2 className="font-playfair text-xl font-bold text-foreground">More Coverage</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {remaining.map((article, i) => (
                <motion.a
                  key={article.id}
                  href={article.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  className="group block p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">General</span>
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors mt-1 mb-2">
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
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-bold text-sm text-foreground mb-3">Archive:</h3>
              <input
                type="month"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                defaultValue="2026-02"
              />
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-primary font-bold text-sm uppercase tracking-wide mb-4">Categories</h3>
              <ul className="space-y-3">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
