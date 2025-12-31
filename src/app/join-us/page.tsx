"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";

export default function JoinUsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background - Same as Hero */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0f172a]" />
        
        {/* Subtle color accents */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-purple-900/10" />
        
        {/* Additional depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* Iridescent 3D Abstract Shape - Right Side */}
      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[500px] h-[600px] md:w-[700px] md:h-[800px] translate-x-1/4 z-[1] pointer-events-none">
        <div className="iridescent-shape"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-16 sm:pt-20 min-h-screen pb-20">
        <Section className="bg-transparent">
          <Container>
            <div className="w-full">
              {/* Header */}
              <div className="text-left mb-12 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                  Join Our Team
                </h1>
                <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
                  We're always looking for talented individuals who are passionate about influencer marketing and creative excellence. If you're ready to make an impact, we'd love to hear from you.
                </p>
              </div>

              {/* Form - Glassmorphism Container */}
              <div className="glassmorphism-container">
                <JobApplicationForm />
              </div>

              {/* Additional Info */}
              <div className="mt-12 text-center text-sm text-white/60">
                <p>
                  By submitting this application, you agree to our privacy policy. 
                  We'll review your application and contact you if there's a match.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <style jsx>{`
        /* Glassmorphism Container */
        .glassmorphism-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .glassmorphism-container {
            padding: 2rem 1.5rem;
            border-radius: 16px;
          }
        }
      
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
    </div>
  );
}

