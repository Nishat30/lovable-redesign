import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, ChevronDown, ChevronUp, BookOpen, User, Mail, Phone, Linkedin, Handshake,
  Target, ListChecks, Sparkles, ClipboardList, Info
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import academyData from "@/data/academyArticles.json";
import orgPhoto from "@/assets/aardo-felicitation.png.asset.json";

export default function AcademyArticle() {
  const { id } = useParams();
  const article = academyData.articles.find((a) => a.id === id);
  const [openGroup, setOpenGroup] = useState<string | null>("people");

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
  const head = a.head || {};
  const objectives: string[] =
    typeof a.objectives === "string"
      ? a.objectives.split(/\n\n+/).map((s: string) => s.replace(/^•\s*/, "").trim()).filter(Boolean)
      : [];

  const aboutText: string =
    a.about ||
    `${article.shortTitle} is one of the GFSRD Global Centres of Excellence, dedicated to advancing research, knowledge exchange, capacity building, and community-driven action in its field. The centre brings together experts, practitioners, and partner institutions from around the world to develop practical solutions for sustainable rural development.`;

  const planText: string =
    a.plan ||
    `The strategic plan and roadmap for this centre — including upcoming programs, research priorities, and partnership goals — will be published here soon.`;

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleGroup = (key: string) => {
    setOpenGroup((prev) => (prev === key ? null : key));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== Banner strip: photo left, logo + centre name right (below fixed header) ===== */}
      <section className="bg-primary text-primary-foreground pt-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-stretch">
          {/* Photo strip */}
          <div className="h-40 md:h-[230px] overflow-hidden">
            <img
              src={orgPhoto.url}
              alt="GFSRD team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo + name block */}
          <div className="flex items-center gap-5 px-6 py-6 md:py-0 md:pl-10 md:pr-8">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full bg-primary-foreground border-4 border-primary-foreground/30 flex items-center justify-center overflow-hidden">
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
                <BookOpen className="w-10 h-10 text-primary" />
              )}
            </div>
            <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug">
              {article.shortTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* ===== Body: Quick View sidebar + content ===== */}
      <main className="container mx-auto px-4 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start">
        {/* Sidebar */}
        <aside className="w-full max-w-md lg:max-w-none mx-auto lg:mx-0 border border-border rounded-xl overflow-hidden bg-card shadow-card lg:sticky lg:top-28">
          <div className="bg-primary text-primary-foreground text-center py-3">
            <span className="font-playfair text-lg font-semibold tracking-wide">Quick View</span>
          </div>
          <nav className="flex flex-col">
            <button
              onClick={() => scrollTo("about")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors text-left"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo("vision")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors border-t border-border text-left"
            >
              Vision
            </button>
            <button
              onClick={() => scrollTo("mission")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors border-t border-border text-left"
            >
              Mission
            </button>
            <button
              onClick={() => scrollTo("objectives")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors border-t border-border text-left"
            >
              Objectives
            </button>
            <button
              onClick={() => scrollTo("plan")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors border-t border-border text-left"
            >
              Plan
            </button>

            {/* People — expandable group */}
            <div className="border-t border-border bg-card">
              <button
                onClick={() => toggleGroup("people")}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:bg-muted transition-colors text-left"
              >
                People
                {openGroup === "people" ? (
                  <ChevronUp className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              {openGroup === "people" && (
                <div className="pb-2">
                  <button
                    onClick={() => scrollTo("head")}
                    className="flex items-center gap-2.5 pl-8 pr-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:bg-muted transition-colors w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    Academy Head
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("conclusion")}
              className="px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground/80 bg-card hover:bg-muted transition-colors border-t border-border text-left"
            >
              Conclusion
            </button>
          </nav>
        </aside>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Title + rule */}
          <div className="mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary leading-snug pb-4 border-b border-border">
              {article.title}
            </h2>
          </div>

          {/* About Us */}
          <div id="about" className="scroll-mt-28 mb-10">
            <SectionHeading icon={<Info className="w-5 h-5" />} title="About Us" />
            <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {aboutText}
            </p>
          </div>

          {/* Vision */}
          {a.vision && (
            <div id="vision" className="scroll-mt-28 mb-10">
              <SectionHeading icon={<Eye className="w-5 h-5" />} title="Vision" />
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {a.vision}
              </p>
            </div>
          )}

          {/* Mission */}
          {a.mission && (
            <div id="mission" className="scroll-mt-28 mb-10">
              <SectionHeading icon={<Target className="w-5 h-5" />} title="Mission" />
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {a.mission}
              </p>
            </div>
          )}

          {/* Objectives */}
          {objectives.length > 0 && (
            <div id="objectives" className="scroll-mt-28 mb-10">
              <SectionHeading icon={<ListChecks className="w-5 h-5" />} title="Objectives" />
              <ul className="space-y-3">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex gap-3 text-foreground/85 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">●</span>
                    <span className="whitespace-pre-line">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Plan */}
          <div id="plan" className="scroll-mt-28 mb-10">
            <SectionHeading icon={<ClipboardList className="w-5 h-5" />} title="Plan" />
            <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {planText}
            </p>
          </div>

          {/* Academy Head */}
          {head.name && (
            <div id="head" className="scroll-mt-28 mb-10 bg-card border border-border rounded-2xl shadow-card p-6 md:p-8">
              <SectionHeading icon={<User className="w-5 h-5" />} title="Academy Head" className="mb-6" />
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="w-40 sm:w-48 shrink-0 aspect-[4/5] rounded-xl overflow-hidden border border-border bg-secondary/50">
                  {head.image ? (
                    <img src={head.image} alt={head.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <h3 className="font-playfair text-2xl font-bold text-foreground">{head.name}</h3>
                  {head.role && <p className="text-primary font-medium">{head.role}</p>}
                  {head.bio && (
                    <p className="text-muted-foreground leading-relaxed text-sm">{head.bio}</p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-1 justify-center sm:justify-start">
                    {head.email && (
                      <a href={`mailto:${head.email}`} className="flex items-center gap-2 text-primary hover:underline text-sm justify-center sm:justify-start">
                        <Mail className="w-4 h-4" /> {head.email}
                      </a>
                    )}
                    {head.phone && (
                      <a href={`tel:${head.phone}`} className="flex items-center gap-2 text-primary hover:underline text-sm justify-center sm:justify-start">
                        <Phone className="w-4 h-4" /> {head.phone}
                      </a>
                    )}
                    {head.linkedin && (
                      <a
                        href={head.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <Link
                    to="/#join-us"
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                  >
                    <Handshake className="w-4 h-4" />
                    Join with Us
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Conclusion */}
          {a.conclusion && (
            <div id="conclusion" className="scroll-mt-28">
              <SectionHeading icon={<Sparkles className="w-5 h-5" />} title="Conclusion" />
              <p className="text-foreground/85 leading-relaxed text-base md:text-lg whitespace-pre-line">
                {a.conclusion}
              </p>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-6 border-t border-border">
            <Link
              to="/academy"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Centres
            </Link>
          </div>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}

function SectionHeading({
  icon,
  title,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <div className="p-2.5 rounded-xl bg-primary/10 text-primary">{icon}</div>
      <h2 className="font-playfair text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}
