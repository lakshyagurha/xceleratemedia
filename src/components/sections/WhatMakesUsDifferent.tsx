import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  {
    title: "Influencer Marketing"
  },
  {
    title: "Meme Marketing"
  },
  {
    title: "Personal Branding"
  },
  {
    title: "Brand Consulting"
  }
];

export const WhatMakesUsDifferent = () => {
  return (
    <section className="bg-black text-white relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background layers similar to hero */}
      <div className="absolute inset-0 z-0">
        {/* Base black with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Color accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-blue-800/5" />
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* Header */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
              What Makes Us Different
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white">
                Most influencer campaigns optimise for reach.<br />
                We optimise for <span className="text-blue-500 font-semibold">perception, recall, and trust.</span>
              </p>
              
              <p className="text-lg sm:text-xl text-gray-400 italic">
                Because visibility alone doesn't build a brand — belief does.
              </p>
            </div>
          </div>

          {/* Core Philosophy */}
          <div className="mb-12 sm:mb-16 md:mb-20 w-full">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
                Our work begins by defining <span className="text-white font-medium">the story your audience should walk away with</span>, not the number of impressions on a dashboard. Before choosing creators, platforms, or formats, we answer one core question:
              </p>
              
              <div className="py-6 sm:py-8">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 italic">
                  "What should people believe about you after the campaign is over?"
                </p>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                From there, we design influence with intention — selecting <span className="text-white font-medium">the right voices, the right context, and the right narrative</span> so your brand is not just seen, but <span className="text-blue-400 font-medium">understood and remembered</span>.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12">
              Our Services
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="relative p-6 sm:p-8 md:p-10 h-full flex items-center justify-center">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white text-center whitespace-nowrap">
                      {service.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="flex mt-12 sm:mt-16">
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

