import { motion } from "framer-motion";
import { Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const awards = [
  {
    title: "EFDIF Award 2021",
    description: "Partner of the Year",
    image: "/placeholder.svg",
  },
  {
    title: "Global SDG Award 2022",
    description: "Excellence in Rural Development",
    image: "/placeholder.svg",
  },
  {
    title: "UN Recognition 2023",
    description: "Outstanding Contribution to Sustainability",
    image: "/placeholder.svg",
  },
  {
    title: "International Development Award 2024",
    description: "Best Community Impact Initiative",
    image: "/placeholder.svg",
  },
];

export function AchievementsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Award className="w-8 h-8 text-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase">
            Our Achievements
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {awards.map((award, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-[320px] h-[400px] rounded-xl overflow-hidden mb-6 bg-muted flex items-center justify-center">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {award.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {award.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
