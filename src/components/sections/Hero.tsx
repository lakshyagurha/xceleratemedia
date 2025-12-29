"use client";

import React from "react";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Vortex } from "@/components/ui/vortex";
import AnimatedTooltipPreview from "@/components/ui/animated-tooltip-demo";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={200}
        className="flex items-center justify-center w-full h-full min-h-screen pt-20"
        containerClassName="bg-gradient-to-br from-blue-50 to-white dark:from-black dark:to-gray-900"
      >
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1.5 px-3 sm:px-4 rounded-full bg-blue-50/80 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6 backdrop-blur-sm">
                The Future of Influencer Marketing
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 sm:mb-6 px-4 sm:px-0"
            >
              Scale Your Brand with <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                Authentic Influence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 max-w-2xl px-4 sm:px-0"
            >
              We connect visionary brands with world-class creators to drive meaningful engagement and measurable ROI. No fluff, just results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-0"
            >
              <a href="#contact" className="w-full sm:w-auto">
                <NoiseBackground
                  containerClassName="w-full sm:w-fit p-2 rounded-full"
                  gradientColors={[
                    "rgb(37, 99, 235)",   // Blue 600
                    "rgb(96, 165, 250)",  // Blue 400
                    "rgb(147, 197, 253)", // Blue 300
                  ]}
                >
                  <button className="h-12 sm:h-14 w-full cursor-pointer rounded-full bg-linear-to-r from-blue-50 via-blue-50 to-white px-6 sm:px-8 py-2 text-sm sm:text-base text-blue-700 shadow-[0px_2px_0px_0px_var(--color-blue-100)_inset,0px_0.5px_1px_0px_var(--color-blue-500)] transition-all duration-100 active:scale-98 dark:from-blue-950 dark:via-blue-950 dark:to-blue-900 dark:text-blue-100 dark:shadow-[0px_1px_0px_0px_var(--color-blue-900)_inset,0px_1px_0px_0px_var(--color-blue-700)] flex items-center justify-center gap-2 font-medium">
                    Start Your Campaign <ArrowRight className="h-4 w-4" />
                  </button>
                </NoiseBackground>
              </a>
              <a href="#work" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                  View Case Studies
                </Button>
              </a>
            </motion.div>

            {/* Social Proof / Trust Indicators */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-gray-100/20 dark:border-gray-800/20 w-full px-4 sm:px-0"
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 font-medium text-center">TRUSTED BY INNOVATIVE BRANDS</p>
              <AnimatedTooltipPreview />
            </motion.div>
          </div>
        </Container>
      </Vortex>
    </section>
  );
};

