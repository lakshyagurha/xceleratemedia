import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import AnimatedTestimonialsDemo from "@/components/ui/animated-testimonials-demo";

export const Testimonials = () => {
  return (
    <Section className="bg-white dark:bg-black">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-gray-900 dark:text-white px-4 sm:px-0">
          Client Feedback
        </h2>
        <AnimatedTestimonialsDemo />
      </Container>
    </Section>
  );
};

