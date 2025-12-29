import { Hero } from "@/components/sections/Hero";
import { LatestWork } from "@/components/sections/LatestWork";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CreatorNetwork } from "@/components/sections/CreatorNetwork";
import { Brands } from "@/components/sections/Brands";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestWork />
      <Brands />
      <About />
      <Services />
      <Process />
      <CreatorNetwork />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}
