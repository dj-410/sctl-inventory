import React from 'react';
import { Shield, Camera, MapPin, Users, BarChart3, Lock } from 'lucide-react';

interface PublicLandingProps {
  onLogin: () => void;
}

export const PublicLanding: React.FC<PublicLandingProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart City Asset Management
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Comprehensive surveillance and infrastructure management system for Thiruvananthapuram Smart City Initiative
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onLogin}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center"
              >
                <Lock className="w-5 h-5 mr-2" />
                Staff Login
              </button>
              <a
                href="#about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Advanced Infrastructure Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive system ensures efficient monitoring and management of smart city assets across Thiruvananthapuram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Surveillance Network</h3>
              <p className="text-gray-600">Advanced camera monitoring system covering key locations across the city</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location Tracking</h3>
              <p className="text-gray-600">Real-time GPS-based asset location monitoring and management</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive reporting and analytics for informed decision making</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Access</h3>
              <p className="text-gray-600">Role-based access control ensuring data security and privacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Building Tomorrow's Smart City
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The Smart City Thiruvananthapuram initiative leverages cutting-edge technology to create a safer, more efficient urban environment. Our asset management system is a cornerstone of this vision, providing comprehensive oversight of critical infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Real-time Monitoring</h4>
                    <p className="text-gray-600">24/7 surveillance and asset status tracking</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Centralized Management</h4>
                    <p className="text-gray-600">Unified platform for all city infrastructure assets</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Data-Driven Insights</h4>
                    <p className="text-gray-600">Advanced analytics for strategic planning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">System Overview</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-200">Surveillance Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-200">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-200">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Authorized Personnel Access
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Access to the asset management system is restricted to authorized Smart City staff members. 
            Please login with your credentials to manage city infrastructure assets.
          </p>
          <button
            onClick={onLogin}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg inline-flex items-center"
          >
            <Lock className="w-5 h-5 mr-2" />
            Access Management System
          </button>
        </div>
      </section>
    </div>
  );
};