import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Eye, ListChecks, Sparkles, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import academyData from "@/data/academyArticles.json";

export default function AcademyArticle() {
  const { id } = useParams();
  const article = academyData.articles.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-4">
            Article not found
          </h1>
          <Link to="/academy" className="text-primary hover:underline">
            Back to Academy
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const a = article as any;
  const objectives: string[] =
    typeof a.objectives === "string"
      ? a.objectives.split(/\n\n+/).map((s: string) => s.replace(/^•\s*/, "").trim()).filter(Boolean)
      : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-14 mb-10">
          <div className="container mx-auto px-4">
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Academy
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm flex items-center justify-center overflow-hidden p-3">
                {a.logo ? (
                  <img
                    src={a.logo}
                    alt={article.shortTitle}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <BookOpen className="w-10 h-10" />
                )}
              </div>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 mb-2">
                  GFSRD Academy
                </span>
                <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {article.title}
                </h1>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 max-w-4xl space-y-8">
          {article.content && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {article.content}
              </p>
            </div>
          )}

          {a.mission && (
            <Section icon={<Target className="w-5 h-5" />} title="Mission">
              {a.mission}
            </Section>
          )}

          {a.vision && (
            <Section icon={<Eye className="w-5 h-5" />} title="Vision">
              {a.vision}
            </Section>
          )}

          {objectives.length > 0 && (
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <ListChecks className="w-5 h-5" />
                </div>
                <h2 className="font-playfair text-2xl font-bold text-foreground">
                  Objectives
                </h2>
              </div>
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">●</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {a.conclusion && (
            <Section icon={<Sparkles className="w-5 h-5" />} title="Conclusion">
              {a.conclusion}
            </Section>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">{icon}</div>
        <h2 className="font-playfair text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{children}</p>
    </div>
  );
}
