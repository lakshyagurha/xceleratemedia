import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Megaphone, Users, BarChart3, PenTool, Globe, Zap } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";

const services = [
  {
    icon: <Megaphone className="h-4 w-4 text-neutral-500" />,
    title: "Influencer Strategy",
    description: "Data-backed strategies tailored to your brand goals. We prioritize long-term perception over short-term spikes.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] sm:min-h-[8rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
          alt="Influencer Strategy"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    icon: <Users className="h-4 w-4 text-neutral-500" />,
    title: "Creator Identification",
    description: "We don't just find influencers. We find partners who authentically align with your brand's narrative.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop"
          alt="Creator Sourcing"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    icon: <PenTool className="h-4 w-4 text-neutral-500" />,
    title: "Content Creation",
    description: "Platform-native storytelling that feels genuine, not transactional. Content that stops the scroll.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop"
          alt="Content Creation"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
    title: "End-to-End Execution",
    description: "From negotiation to posting, we handle the friction so you can focus on the big picture.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
          alt="Campaign Management"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    title: "Paid Amplification",
    description: "Scale your best performing organic content with strategic paid media to maximize reach.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
          alt="Performance Marketing"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    title: "Global Reach",
    description: "Multi-market campaigns with a global network of voices. Influence knows no borders.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
        <Image
          src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2940&auto=format&fit=crop"
          alt="Global Reach"
          fill
          className="object-cover"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
];

export const Services = () => {
  return (
    <Section id="services" className="bg-white dark:bg-black">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white tracking-tight">
            Our Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light">
            We build influence through four key pillars.
          </p>
        </div>

        <BentoGrid className="mx-auto px-4 sm:px-0">
          {services.map((service, i) => (
            <BentoGridItem
              key={i}
              title={service.title}
              description={service.description}
              header={service.header}
              icon={service.icon}
              className={service.className}
            />
          ))}
        </BentoGrid>
      </Container>
    </Section>
  );
};
