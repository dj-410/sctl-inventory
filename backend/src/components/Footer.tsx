import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Smart City Thiruvananthapuram</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building a smarter, sustainable future for Thiruvananthapuram through 
              innovative technology and citizen-centric solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Assets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Smart City Office, Thiruvananthapuram
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                +91 471 2234567
              </p>
              <p className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                info@smartcitytvm.in
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Smart City Thiruvananthapuram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};