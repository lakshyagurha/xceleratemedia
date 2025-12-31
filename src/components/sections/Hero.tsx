"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section - Inspired by LUMEN Design
 * 
 * Features:
 * - Dark gradient background with modern color palette
 * - Iridescent 3D abstract shapes using pure CSS
 * - Bold, clean typography
 * - Minimal, elegant design
 * - No animations for better performance
 */
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - Dark gradient with teal/cyan accents */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0f172a]" />
        
        {/* Subtle color accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-purple-900/10" />
        
        {/* Additional depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="min-h-[85vh] flex flex-col justify-between py-12 sm:py-16 md:py-20">
          {/* Top Section - Headline */}
          <div className="max-w-full mt-8 sm:mt-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05] font-display">
              <span className="block sm:inline">Influence, designed</span>
              <span className="block mt-1 sm:mt-2 text-blue-500">not chased.</span>
            </h1>
          </div>

          {/* Bottom Section - Description and Manifesto */}
          <div className="relative mt-12 sm:mt-16 md:mt-20">
            {/* Left - Description */}
            <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8">
              <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white font-light">
                We are an influencer marketing agency focused on purpose-led influence across Instagram, YouTube, and Reddit.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white font-light">
                In a market full of noise, we help brands earn attention by placing the right narratives with the right creators, in the right context.
              </p>
              
              {/* CTA Button */}
              <div className="pt-6 sm:pt-8">
                <a href="#contact">
                  <Button 
                    size="lg" 
                    className="h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold shadow-2xl shadow-blue-500/30 border-0 transition-all duration-300 w-full sm:w-auto"
                  >
                    Start Your Campaign
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Manifesto Points (Extreme Right) */}
            <div className="absolute right-0 bottom-0 space-y-4 sm:space-y-5 text-right hidden md:block">
              <div className="text-white/60">
                <span className="text-base lg:text-lg font-medium whitespace-nowrap">No hype cycles.</span>
              </div>
              <div className="text-white/60">
                <span className="text-base lg:text-lg font-medium whitespace-nowrap">No random collaborations.</span>
              </div>
              <div className="text-white">
                <span className="text-base lg:text-lg font-bold whitespace-nowrap">Only influence that compounds.</span>
              </div>
            </div>
            
            {/* Mobile - Manifesto Points */}
            <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4 md:hidden">
              <div className="text-white/60">
                <span className="text-sm sm:text-base font-medium">No hype cycles.</span>
              </div>
              <div className="text-white/60">
                <span className="text-sm sm:text-base font-medium">No random collaborations.</span>
              </div>
              <div className="text-white">
                <span className="text-sm sm:text-base font-bold">Only influence that compounds.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Iridescent 3D Abstract Shape - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[700px] lg:h-[800px] translate-x-1/4 sm:translate-x-1/3 md:translate-x-1/4 z-[1] pointer-events-none opacity-50 sm:opacity-100">
        <div className="iridescent-shape"></div>
      </div>

      <style jsx>{`
        /* Iridescent 3D Abstract Shape */
        .iridescent-shape {
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotate(-20deg);
        }
        
        .iridescent-shape::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 10%;
          width: 80%;
          height: 70%;
          background: 
            linear-gradient(135deg, 
              rgba(30, 64, 175, 0.4) 0%,
              rgba(59, 130, 246, 0.4) 25%,
              rgba(251, 146, 60, 0.4) 50%,
              rgba(245, 158, 11, 0.4) 75%,
              rgba(37, 99, 235, 0.4) 100%
            );
          border-radius: 50% 30% 40% 60% / 60% 40% 60% 40%;
          filter: blur(40px);
          opacity: 0.6;
        }
        
        .iridescent-shape::after {
          content: '';
          position: absolute;
          top: 20%;
          left: 20%;
          width: 70%;
          height: 60%;
          background: 
            linear-gradient(225deg, 
              rgba(59, 130, 246, 0.5) 0%,
              rgba(251, 146, 60, 0.5) 20%,
              rgba(96, 165, 250, 0.5) 40%,
              rgba(234, 179, 8, 0.5) 60%,
              rgba(29, 78, 216, 0.5) 80%,
              rgba(37, 99, 235, 0.5) 100%
            );
          border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
          filter: blur(50px);
          opacity: 0.8;
          transform: rotate(45deg);
        }
        
        /* Additional abstract layers for depth */
        @media (min-width: 768px) {
          .iridescent-shape {
            background: 
              radial-gradient(ellipse 400px 500px at 40% 50%, 
                rgba(59, 130, 246, 0.15) 0%,
                transparent 70%
              ),
              radial-gradient(ellipse 350px 450px at 60% 40%, 
                rgba(251, 146, 60, 0.15) 0%,
                transparent 70%
              ),
              radial-gradient(ellipse 300px 400px at 50% 60%, 
                rgba(245, 158, 11, 0.15) 0%,
                transparent 70%
              );
            filter: blur(2px);
          }
        }
        
        /* Subtle glow effect around the shape */
        @media (min-width: 768px) {
          .iridescent-shape {
            box-shadow: 
              0 0 100px 50px rgba(59, 130, 246, 0.1),
              0 0 150px 75px rgba(251, 146, 60, 0.1),
              0 0 200px 100px rgba(37, 99, 235, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

