import React from 'react';
import {
  Camera, Menu, Phone, Mail, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
  currentUser: string | null;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  currentUser,
  onLogin,
  onLogout
}) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 font-medium transition-colors hover:text-blue-600 ${
      isActive ? 'text-blue-600 font-semibold' : ''
    }`;

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 471 2234567
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@smartcitytvm.in
              </span>
            </div>
            <div className="flex space-x-3">
              <a href="#"><Facebook className="w-4 h-4" /></a>
              <a href="#"><Twitter className="w-4 h-4" /></a>
              <a href="#"><Instagram className="w-4 h-4" /></a>
              <a href="#"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Branding */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Camera className="w-10 h-10 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Smart City</h1>
                  <span className="text-sm text-gray-600">Thiruvananthapuram</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/assets" className={navLinkClass}>Assets</NavLink>
              <NavLink to="/reports" className={navLinkClass}>Reports</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>

              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Welcome, {currentUser}</span>
                  <button
                    onClick={onLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
