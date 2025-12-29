import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Data-Driven Approach",
    description: "We don't guess. We use proprietary data to identify high-performing creators and predict campaign outcomes."
  },
  {
    title: "End-to-End Service",
    description: "From creative ideation to final reporting, we handle every detail so you can focus on the big picture."
  },
  {
    title: "Authentic Storytelling",
    description: "We prioritize creative freedom for influencers, ensuring content feels genuine and converts better."
  },
  {
    title: "Global Scalability",
    description: "Whether you need 10 creators or 1,000, our systems and team are built to scale with your needs."
  }
];

export const WhyChooseUs = () => {
  return (
    <Section className="bg-white dark:bg-black">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
           <div className="lg:w-1/2 w-full order-2 lg:order-1">
             <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px] xl:h-[600px]">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                  alt="Strategic partnership meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10" />
             </div>
           </div>
           
           <div className="lg:w-1/2 w-full order-1 lg:order-2">
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
               Why Leading Brands Partner With Us
             </h2>
             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10">
               In a crowded market, Xcelerate Media stands out by delivering transparency, creativity, and measurable performance.
             </p>
             
             <div className="space-y-6 sm:space-y-8">
               {reasons.map((reason, index) => (
                 <div key={index} className="flex gap-3 sm:gap-4">
                   <div className="flex-shrink-0 mt-1">
                     <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                   </div>
                   <div>
                     <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 dark:text-white">
                       {reason.title}
                     </h3>
                     <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                       {reason.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </Container>
    </Section>
  );
};

