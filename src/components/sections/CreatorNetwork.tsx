import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const creators = [
  {
    id: 1,
    name: "Alex Rivera",
    designation: "Tech Reviewer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Sarah Chen",
    designation: "Lifestyle Vlogger",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    designation: "Gaming Streamer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Fashion Influencer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Fitness Coach",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora Explorer",
    designation: "Travel Blogger",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const CreatorNetwork = () => {
  return (
    <Section id="creators" className="bg-gray-900 text-white overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
        </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Access a Global Network
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            From nano-influencers to mega-stars, we have direct access to thousands of creators across every niche and platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white/5 rounded-lg backdrop-blur-sm min-w-[100px] sm:min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">5k+</div>
                <div className="text-xs sm:text-sm text-gray-400">Creators</div>
            </div>
            <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white/5 rounded-lg backdrop-blur-sm min-w-[100px] sm:min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400">20+</div>
                <div className="text-xs sm:text-sm text-gray-400">Countries</div>
            </div>
            <div className="text-center px-4 sm:px-6 py-3 sm:py-4 bg-white/5 rounded-lg backdrop-blur-sm min-w-[100px] sm:min-w-[120px]">
                <div className="text-2xl sm:text-3xl font-bold text-pink-400">500M+</div>
                <div className="text-xs sm:text-sm text-gray-400">Audience</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center mb-6 sm:mb-8 md:mb-10 w-full px-4 sm:px-0 overflow-x-auto">
            <AnimatedTooltip items={creators} />
        </div>
        
        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4 sm:px-0">
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto">
                Join Our Creator Network
             </Button>
        </div>
      </Container>
    </Section>
  );
};

