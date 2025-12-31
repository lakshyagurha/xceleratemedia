"use client";

import React from "react";
import Image from "next/image";
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
    <section className="relative min-h-[auto] md:min-h-screen flex items-center overflow-hidden">
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
      <Container className="relative z-10 w-full">
        <div className="min-h-[auto] md:min-h-[85vh] flex flex-col justify-between py-20 pt-24 sm:py-16 md:py-20 w-full">
          {/* Top Section - Headline */}
          <div className="w-full mt-0 sm:mt-10 text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.05] font-display text-left">
              <span className="block sm:inline">Influence, designed</span>
              <span className="block mt-1 sm:mt-2 text-blue-500">not chased.</span>
            </h1>
          </div>

          {/* Bottom Section - Description and Manifesto */}
          <div className="relative mt-6 sm:mt-16 md:mt-20 w-full">
            {/* Left - Description */}
            <div className="w-full max-w-2xl space-y-3 sm:space-y-6 md:space-y-8 text-left">
              <p className="text-sm sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white font-light">
                We are an influencer marketing agency focused on purpose-led influence across Instagram, YouTube, and Reddit.
              </p>
              <p className="text-sm sm:text-lg md:text-xl lg:text-xl leading-relaxed text-white font-light">
                In a market full of noise, we help brands earn attention by placing the right narratives with the right creators, in the right context.
              </p>
              
              {/* CTA Button */}
              <div className="pt-4 sm:pt-8">
                <a href="#contact">
                  <Button 
                    size="lg" 
                    className="h-11 sm:h-14 px-6 sm:px-8 md:px-10 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full font-semibold shadow-2xl shadow-blue-500/30 border-0 transition-all duration-300 w-full sm:w-auto"
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
            <div className="mt-4 sm:mt-12 space-y-2 sm:space-y-4 md:hidden">
              <div className="text-white/60">
                <span className="text-xs sm:text-base font-medium">No hype cycles.</span>
              </div>
              <div className="text-white/60">
                <span className="text-xs sm:text-base font-medium">No random collaborations.</span>
              </div>
              <div className="text-white">
                <span className="text-xs sm:text-base font-bold">Only influence that compounds.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Tilted Square with Geometric Image - Right Side */}
      <div className="absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 w-[280px] h-[350px] sm:w-[400px] sm:h-[500px] md:w-[550px] md:h-[650px] lg:w-[700px] lg:h-[800px] translate-x-[25%] sm:translate-x-[15%] md:translate-x-[10%] z-[1] pointer-events-none">
        <div className="tilted-image-container">
          {/* Glow effect behind the image */}
          <div className="glow-layer"></div>
          
          {/* Image container */}
          <div className="image-wrapper">
            <Image
              src="/pexels-vlado-paunovic-1567547-3038740.jpg"
              alt="Geometric pattern"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay gradients for blending */}
            <div className="blend-overlay"></div>
            <div className="edge-fade"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tilted-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform: rotate(-15deg) perspective(1000px) rotateY(-5deg);
        }
        
        .glow-layer {
          position: absolute;
          inset: -20%;
          background: 
            radial-gradient(ellipse 60% 50% at 30% 40%, 
              rgba(251, 146, 60, 0.4) 0%,
              transparent 60%
            ),
            radial-gradient(ellipse 50% 60% at 70% 60%, 
              rgba(59, 130, 246, 0.3) 0%,
              transparent 60%
            );
          filter: blur(60px);
          z-index: -1;
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 25px 80px -20px rgba(0, 0, 0, 0.8),
            0 0 60px 10px rgba(59, 130, 246, 0.15),
            0 0 100px 20px rgba(251, 146, 60, 0.1);
        }
        
        .blend-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(135deg, 
              rgba(10, 10, 10, 0.3) 0%,
              transparent 40%,
              transparent 60%,
              rgba(10, 10, 10, 0.4) 100%
            ),
            linear-gradient(to bottom,
              rgba(10, 10, 10, 0.2) 0%,
              transparent 30%,
              transparent 70%,
              rgba(10, 10, 10, 0.5) 100%
            );
          z-index: 1;
        }
        
        .edge-fade {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 120% 120% at 50% 50%, 
              transparent 40%,
              rgba(10, 10, 10, 0.6) 70%,
              rgba(10, 10, 10, 0.9) 100%
            );
          z-index: 2;
        }
        
        @media (max-width: 640px) {
          .tilted-image-container {
            opacity: 0.5;
            transform: rotate(-12deg) perspective(1000px) rotateY(-3deg);
          }
        }
        
        @media (min-width: 641px) and (max-width: 768px) {
          .tilted-image-container {
            opacity: 0.6;
          }
        }
        
        @media (min-width: 769px) {
          .tilted-image-container {
            opacity: 0.85;
          }
        }
      `}</style>
    </section>
  );
};

