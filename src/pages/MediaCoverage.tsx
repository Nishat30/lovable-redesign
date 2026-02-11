import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import mediaCoverageData from "@/data/mediaCoverage.json";

export default function MediaCoverage() {
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeArticle = mediaCoverageData.articles.find(
    (a) => a.id === activeArticleId
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 md:px-6 py-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <span className="font-playfair text-lg font-bold text-primary">GFSRD</span>
        </div>
      </header>

      <div className="flex">
        {/* Mobile toggle */}
        <Button
          variant="outline"
          size="icon"
          className="fixed top-20 left-4 z-50 md:hidden bg-background border-primary/20"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed md:sticky top-0 left-0 z-40 h-screen w-80 bg-card border-r border-border transition-transform duration-300 md:translate-x-0",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="p-4 border-b border-border">
            <h2 className="font-playfair text-xl font-bold text-foreground">Media Coverage</h2>
            <p className="text-sm text-muted-foreground mt-1">Press & News Articles</p>
          </div>

          <ScrollArea className="h-[calc(100vh-80px)]">
            <nav className="p-2">
              {mediaCoverageData.articles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => {
                    setActiveArticleId(article.id);
                    setMobileOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 mb-1",
                    activeArticleId === article.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {article.title}
                </button>
              ))}
            </nav>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-57px)] p-4 md:p-8">
          {activeArticle ? (
            <motion.article
              key={activeArticle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Newspaper className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground font-medium">Media Coverage</span>
                  <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {activeArticle.title}
                  </h1>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                  This article covers GFSRD's efforts and contributions in sustainable rural development.
                  Full content coming soon.
                </p>
              </div>
            </motion.article>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Newspaper className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground font-medium">GFSRD</span>
                  <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    Media Coverage
                  </h1>
                </div>
              </div>
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <p className="text-foreground/80 mb-6">
                  Browse our media coverage from the sidebar. Click on any article to read more.
                </p>
                <ul className="space-y-2">
                  {mediaCoverageData.articles.map((article, i) => (
                    <motion.li
                      key={article.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.02 }}
                    >
                      <button
                        onClick={() => setActiveArticleId(article.id)}
                        className="text-primary hover:underline text-left text-sm md:text-base"
                      >
                        • {article.title}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
