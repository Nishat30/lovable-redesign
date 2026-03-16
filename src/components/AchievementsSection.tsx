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
    <div className="h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-6"
      >
        <Award className="w-6 h-6 text-primary-foreground" />
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase">
          Our Achievements
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex items-center justify-center"
      >
        <Carousel opts={{ loop: true }} className="w-full max-w-[320px]">
          <CarouselContent>
            {awards.map((award, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-[260px] h-[320px] rounded-xl overflow-hidden mb-4 bg-primary-foreground/10 flex items-center justify-center">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-primary-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs">
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
  );
}
