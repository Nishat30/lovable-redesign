import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import mediaCoverageData from "@/data/mediaCoverage.json";

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5f9cf1da241d?w=800&h=500&fit=crop",
  "https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&h=500&fit=crop",
];

export default function MediaCoverage() {
  const sidebarNews = mediaCoverageData.articles.slice(0, 6);
  const remaining = mediaCoverageData.articles.slice(6);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

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

        {/* Image Slider + Sidebar News */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mb-10">
          {/* Image Slider */}
          <div className="relative rounded-xl overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {SLIDE_IMAGES.map((src, i) => (
                  <div key={i} className="min-w-0 shrink-0 grow-0 basis-full">
                    <img
                      src={src}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-[280px] md:h-[380px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Nav buttons */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDE_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentSlide ? "bg-primary scale-110" : "bg-background/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sidebar - 6 News */}
          <div className="flex flex-col gap-3">
            <h2 className="font-playfair text-lg font-bold text-foreground mb-1">Latest News</h2>
            {sidebarNews.map((article, i) => (
              <motion.a
                key={article.id}
                href={article.url}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="group block p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-secondary/40 transition-all"
              >
                <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Remaining Articles */}
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
                  className="group block p-5 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-3 group-hover:text-primary transition-colors mb-3">
                    {article.title}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </motion.a>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
