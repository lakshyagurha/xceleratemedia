"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

export const JoinUs = () => {
  return (
    <section id="join-us" className="bg-black text-white relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background layers similar to other sections */}
      <div className="absolute inset-0 z-0">
        {/* Base black with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Color accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-blue-800/5" />
        
        {/* Abstract shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-white/3 rounded-full blur-3xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="w-full">
          {/* Header */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-white">
              Join Our Team
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We're always looking for talented individuals who are passionate about influencer marketing and creative excellence. If you're ready to make an impact, we'd love to hear from you.
            </p>
          </div>

          {/* Form - Glassmorphism Container */}
          <div className="glassmorphism-container">
            <JobApplicationForm />
          </div>

          {/* Additional Info */}
          <div className="mt-6 sm:mt-8 md:mt-12 text-xs sm:text-sm text-gray-400 font-light">
            <p>
              By submitting this application, you agree to our privacy policy. 
              We'll review your application and contact you if there's a match.
            </p>
          </div>
        </div>
      </Container>

      <style jsx>{`
        /* Glassmorphism Container */
        .glassmorphism-container {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .glassmorphism-container {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </section>
  );
};

