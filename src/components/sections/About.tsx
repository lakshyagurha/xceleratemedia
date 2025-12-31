import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const About = () => {
  return (
    <Section id="about" className="bg-white dark:bg-black">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 order-2 md:order-1">
             <Image 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
               alt="Team collaboration"
               fill
               className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 to-blue-500/20" />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white tracking-tight">
              We Are Xcelerate Media
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed font-light">
              We believe influence is designed, not chased. We bridge the gap between creative storytelling and data-driven performance.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed font-light">
              In a noisy digital landscape, we help brands navigate the creator economy to build authentic connections that convert. We don't just chase views; we build recall.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
               <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-1 sm:mb-2">500+</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Campaigns Managed</p>
               </div>
               <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-1 sm:mb-2">10M+</h3>
                  <p className="text-xs sm:text-sm text-gray-500">Reach Generated</p>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

