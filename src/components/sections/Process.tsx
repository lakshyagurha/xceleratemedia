import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your brand, audience, and goals to craft a bespoke influencer strategy."
  },
  {
    number: "02",
    title: "Identification & Recruitment",
    description: "Our team handpicks creators who authentically resonate with your target market."
  },
  {
    number: "03",
    title: "Execution & Management",
    description: "We handle everything from briefs and contracts to content approval and scheduling."
  },
  {
    number: "04",
    title: "Reporting & Optimization",
    description: "Detailed analytics on campaign performance with actionable insights for future growth."
  }
];

export const Process = () => {
  return (
    <Section className="bg-white dark:bg-black">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white md:sticky md:top-24">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 md:sticky md:top-40">
              A streamlined process designed for transparency, efficiency, and results.
            </p>
          </div>
          
          <div className="md:w-2/3 space-y-8 sm:space-y-10 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 group">
                <div className="flex-shrink-0">
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-600 text-blue-600 font-bold text-base sm:text-lg bg-blue-50 dark:bg-blue-900/10 dark:border-blue-500 dark:text-blue-500">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

