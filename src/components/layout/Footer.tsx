import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter">
              Xcelerate<span className="text-blue-600">Media</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
              We connect brands with world-class creators to drive real results.
              Premium influencer marketing for the modern era.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#about" className="hover:text-blue-600">About Us</Link></li>
              <li><Link href="#services" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="#work" className="hover:text-blue-600">Our Work</Link></li>
              <li><Link href="#contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="#" className="hover:text-blue-600">Influencer Strategy</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Content Creation</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Campaign Management</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Brand Ambassadorship</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@xceleratemedia.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a href="https://www.instagram.com/xcelerate_media" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                  @xcelerate_media
                </a>
              </li>
               <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Los Angeles, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Xcelerate Media. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-600 dark:hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

