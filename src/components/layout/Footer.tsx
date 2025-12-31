import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden pt-16 pb-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {/* Brand */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter">
              Xcelerate<span className="text-blue-600">Media</span>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xs font-light">
              Influence, designed. We connect brands with world-class creators to drive real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link href="#work" className="hover:text-blue-600 transition-colors">Our Work</Link></li>
              <li><Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Influencer Strategy</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Content Creation</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Campaign Management</Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">Brand Ambassadorship</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-white text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
              <li className="flex items-start sm:items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="break-words">hello@xceleratemedia.com</span>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <a href="https://www.instagram.com/xcelerate_media" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors break-words">
                  @xcelerate_media
                </a>
              </li>
               <li className="flex items-start sm:items-center gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-400">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Xcelerate Media. All rights reserved.</p>
          <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center sm:justify-end">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

