import { useState } from "react";
import { AcademySidebar } from "@/components/AcademySidebar";
import { ArticleContent } from "@/components/ArticleContent";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import academyData from "@/data/academyArticles.json";

export default function Academy() {
  const [activeArticleId, setActiveArticleId] = useState(academyData.articles[0].id);
  
  const activeArticle = academyData.articles.find(
    (article) => article.id === activeArticleId
  ) || academyData.articles[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex pt-20">
        {/* Sidebar */}
        <AcademySidebar
          articles={academyData.articles}
          activeArticleId={activeArticleId}
          onSelectArticle={setActiveArticleId}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-80px)] p-4 md:p-8 md:ml-0">
          <ArticleContent article={activeArticle} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
