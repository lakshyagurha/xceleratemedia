import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <Section id="contact" className="bg-blue-600 dark:bg-blue-700 text-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 md:mb-10 font-light">
            Join the brands leveraging Xcelerate Media to dominate their niche. Let's build something great.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
             <a href="mailto:hello@xceleratemedia.com" className="w-full sm:w-auto">
               <Button size="lg" variant="secondary" className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base text-blue-700 w-full sm:w-auto">
                  Book a Strategy Call
               </Button>
             </a>
             <a href="mailto:hello@xceleratemedia.com" className="w-full sm:w-auto">
               <Button size="lg" variant="outline" className="h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base border-blue-200 text-blue-50 hover:bg-blue-500 hover:text-white dark:border-blue-400 w-full sm:w-auto">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

