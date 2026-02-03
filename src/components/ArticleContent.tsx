import { motion } from "framer-motion";
import { 
  Leaf, TreePine, GraduationCap, CloudSun, Users, Wifi, Heart, Mountain,
  BookOpen, Building, Stethoscope, Briefcase, ArrowLeftRight, Microscope,
  HandHeart, Sparkles, FileText, CheckCircle, LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Leaf, TreePine, GraduationCap, CloudSun, Users, Wifi, Heart, Mountain,
  BookOpen, Building, Stethoscope, Briefcase, ArrowLeftRight, Microscope,
  HandHeart, Sparkles, FileText
};

interface Article {
  id: string;
  title: string;
  shortTitle: string;
  content: string;
  icon: string;
}

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const IconComponent = iconMap[article.icon] || FileText;

  return (
    <motion.article
      key={article.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary">
          <IconComponent className="h-8 w-8" />
        </div>
        <div>
          <span className="text-sm text-muted-foreground font-medium">GFSRD Academy</span>
          <h1 className="font-playfair text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm">
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            {article.content}
          </p>
          
          {/* Placeholder sections for future content */}
          <div className="mt-8 pt-6 border-t border-border">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">Key Focus Areas</h2>
            <ul className="space-y-2 text-foreground/70">
            <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Research and knowledge development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Capacity building and training programs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Policy advocacy and stakeholder engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Community-based implementation projects</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">Get Involved</h2>
            <p className="text-foreground/70 mb-4">
              Join our efforts to create sustainable change in rural communities worldwide. 
              Contact us to learn more about partnership opportunities, research collaborations, 
              or volunteer programs.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact This Centre
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
