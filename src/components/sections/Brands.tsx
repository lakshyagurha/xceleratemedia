import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandStripe,
  IconBrandNetflix,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandDisney,
  IconBrandApple,
  IconBrandSpotify,
  IconBrandAmazon,
  IconBrandAdobe,
} from "@tabler/icons-react";

const logos = [
  {
    name: "GitHub",
    logo: <IconBrandGithub className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Google",
    logo: <IconBrandGoogle className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Stripe",
    logo: <IconBrandStripe className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Netflix",
    logo: <IconBrandNetflix className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "React",
    logo: <IconBrandReact className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Tailwind",
    logo: <IconBrandTailwind className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Figma",
    logo: <IconBrandFigma className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Spotify",
    logo: <IconBrandSpotify className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Apple",
    logo: <IconBrandApple className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
   {
    name: "Adobe",
    logo: <IconBrandAdobe className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
   {
    name: "Amazon",
    logo: <IconBrandAmazon className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
  {
    name: "Disney",
    logo: <IconBrandDisney className="w-12 h-12 md:w-16 md:h-16 text-neutral-800 dark:text-neutral-200" />,
  },
];

export const Brands = () => {
  return (
    <Section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-black overflow-hidden">
      <Container>
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          Trusted by Industry Leaders
        </p>
        
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased px-4 sm:px-0">
          <InfiniteMovingLogos
            items={logos}
            direction="left"
            speed="slow"
          />
        </div>
      </Container>
    </Section>
  );
};
