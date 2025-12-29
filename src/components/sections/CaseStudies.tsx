import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight, TrendingUp, Users, DollarSign, BarChart3, ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "LuxeBeauty Summer Launch",
    category: "Beauty & Lifestyle",
    image: "from-pink-500 to-rose-500",
    description: "Orchestrated a viral summer campaign leveraging micro-influencers and TikTok trends to drive massive brand awareness.",
    stats: [
      { label: "Reach", value: "2.5M" },
      { label: "Engagement", value: "8.4%" },
      { label: "ROI", value: "3.2x" }
    ],
    className: ""
  },
  {
    title: "TechFlow App User Acquisition",
    category: "Tech & SaaS",
    image: "from-blue-500 to-cyan-500",
    description: "Implemented a data-driven user acquisition strategy focusing on high-LTV users and retention loops.",
    stats: [
      { label: "Downloads", value: "50k+" },
      { label: "CPI", value: "-40%" },
      { label: "Impressions", value: "1.2M" }
    ],
    className: ""
  },
  {
    title: "UrbanFit Activewear",
    category: "Fashion & Fitness",
    image: "from-orange-500 to-amber-500",
    description: "Revamped content strategy with high-energy visuals and community challenges to boost sales and engagement.",
    stats: [
      { label: "Sales", value: "$150k" },
      { label: "Content", value: "200+" },
      { label: "Clicks", value: "45k" }
    ],
    className: ""
  }
];

export const CaseStudies = () => {
  return (
    <Section id="work" className="bg-white dark:bg-black py-20">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 px-4 sm:px-0">
           <div className="max-w-2xl">
             <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
               Success Stories
             </h2>
             <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
               Real results for real brands. Explore how we've helped ambitious companies scale new heights through strategic marketing and creative excellence.
             </p>
           </div>
           <Button variant="outline" className="hidden md:flex gap-2 group">
             View All Case Studies
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Button>
        </div>

        <BentoGrid className="mx-auto md:auto-rows-auto">
          {cases.map((study, index) => (
            <BentoGridItem
              key={index}
              title={
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{study.title}</span>
                </div>
              }
              description={
                  <div className="mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4 border-t border-gray-100 dark:border-neutral-800 pt-4">
                        {study.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                      </div>
                  </div>
              }
              header={
                <div className={`flex flex-1 w-full min-h-[12rem] rounded-xl bg-gradient-to-br ${study.image} relative overflow-hidden group/header transition-all duration-500 hover:scale-[1.02]`}>
                    <div className="absolute inset-0 bg-black/10 group-hover/header:bg-black/0 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 dark:text-white shadow-sm">
                        {study.category}
                    </div>
                </div>
              }
              className={study.className}
              icon={<ArrowUpRight className="h-4 w-4 text-neutral-500" />}
            />
          ))}
        </BentoGrid>
        
        <div className="mt-10 text-center md:hidden px-4">
            <Button variant="outline" className="w-full gap-2">
             View All Case Studies
             <ArrowRight className="w-4 h-4" />
           </Button>
        </div>
      </Container>
    </Section>
  );
};
