import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Instagram, Youtube, Linkedin, Facebook, Twitter } from "lucide-react";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-purple-400/20 to-pink-400/20",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    name: "Twitter",
    icon: Twitter,
    gradient: "from-cyan-400 to-blue-500",
    bgColor: "bg-gradient-to-br from-cyan-400/20 to-blue-400/20",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500"
  },
  {
    name: "YouTube",
    icon: Youtube,
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-br from-red-400/20 to-rose-400/20",
    iconBg: "bg-gradient-to-br from-red-500 to-rose-500"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-gradient-to-br from-blue-400/20 to-sky-400/20",
    iconBg: "bg-gradient-to-br from-blue-500 to-sky-500"
  },
  {
    name: "Facebook",
    icon: Facebook,
    gradient: "from-blue-600 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    iconBg: "bg-gradient-to-br from-blue-600 to-indigo-600"
  },
  {
    name: "Reddit",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-400/20 to-red-400/20",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500"
  }
];

export const PlatformsWeUse = () => {
  return (
    <section className="bg-black text-white overflow-hidden relative py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background layers similar to hero */}
      <div className="absolute inset-0 z-0">
        {/* Base black with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-black" />
        
        {/* Color accents */}
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-transparent to-blue-800/5" />
        
        {/* Abstract geometric shapes */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>
      
      <Container className="relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 sm:mb-6">
            WHERE WE CREATE IMPACT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Platforms We Use
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Background with platform color */}
                  <div className={`absolute inset-0 ${platform.bgColor} backdrop-blur-sm`} />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Silhouette/Icon Background */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <IconComponent className="w-full h-full" />
                  </div>
                  
                  {/* Main Icon */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-10">
                    <div className={`${platform.iconBg} p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-30 blur-2xl -z-10 transition-opacity duration-500`} />
                </div>

                {/* Platform name */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {platform.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom description */}
        <div className="max-w-3xl">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light leading-relaxed">
            We leverage the unique strengths of each platform to craft narratives that resonate, building campaigns that transcend channels and create lasting impact.
          </p>
        </div>
      </Container>
    </section>
  );
};

