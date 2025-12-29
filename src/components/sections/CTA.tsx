import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <Section id="contact" className="bg-blue-600 dark:bg-blue-700 text-white text-center">
      <Container>
        <div className="max-w-3xl mx-auto px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10">
            Join the hundreds of brands leveraging Xcelerate Media to dominate their niche. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
             <a href="mailto:hello@xceleratemedia.com" className="w-full sm:w-auto">
               <Button size="lg" variant="secondary" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base text-blue-700 w-full sm:w-auto">
                  Book a Strategy Call
               </Button>
             </a>
             <a href="mailto:hello@xceleratemedia.com" className="w-full sm:w-auto">
               <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-blue-200 text-blue-50 hover:bg-blue-500 hover:text-white dark:border-blue-400 w-full sm:w-auto">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
             </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

