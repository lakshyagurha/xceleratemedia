import { Hero } from "@/components/sections/Hero";
import { LatestWork } from "@/components/sections/LatestWork";
import { WhatMakesUsDifferent } from "@/components/sections/WhatMakesUsDifferent";
import { PlatformsWeUse } from "@/components/sections/PlatformsWeUse";
import { JoinUs } from "@/components/sections/JoinUs";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestWork />
      <WhatMakesUsDifferent />
      <PlatformsWeUse />
      <JoinUs />
      <CTA />
    </>
  );
}
