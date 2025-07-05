import React from 'react';
import { Shield, Camera, MapPin, Users, BarChart3, Clock, Award, Target } from 'lucide-react';

export const Abouts: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Smart City Asset Register System</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital infrastructure management for Thiruvananthapuram Smart City Initiative
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To create a comprehensive, secure, and efficient asset management system that enables 
            the Smart City Thiruvananthapuram initiative to monitor, maintain, and optimize urban 
            infrastructure for the benefit of all citizens.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To establish Thiruvananthapuram as a model smart city through innovative technology 
            solutions, ensuring transparent governance, enhanced security, and improved quality 
            of life for all residents.
          </p>
        </div>
      </div>

      {/* System Features */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">System Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Surveillance Management</h3>
            <p className="text-gray-600">
              Comprehensive camera network monitoring with real-time status tracking and location mapping.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Geographic Mapping</h3>
            <p className="text-gray-600">
              Interactive map visualization of all assets with precise GPS coordinates and location details.
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Analytics & Reporting</h3>
            <p className="text-gray-600">
              Advanced reporting capabilities with PDF generation and comprehensive system analytics.
            </p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Security & Access Control</h3>
            <p className="text-gray-600">
              Role-based access control with comprehensive activity logging and audit trails.
            </p>
          </div>

          <div className="text-center p-6 bg-red-50 rounded-lg">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User Management</h3>
            <p className="text-gray-600">
              Multi-user support with assignment tracking and responsibility management.
            </p>
          </div>

          <div className="text-center p-6 bg-yellow-50 rounded-lg">
            <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600">
              24/7 system monitoring with instant status updates and maintenance scheduling.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">System Architecture</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Modern React-based frontend with TypeScript</li>
              <li>• Responsive design with Tailwind CSS</li>
              <li>• Real-time data synchronization</li>
              <li>• Progressive Web App capabilities</li>
              <li>• Cross-platform compatibility</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Security Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-factor authentication support</li>
              <li>• Role-based access control (RBAC)</li>
              <li>• Comprehensive audit logging</li>
              <li>• Data encryption in transit and at rest</li>
              <li>• Session management and timeout</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Management</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Centralized asset database</li>
              <li>• Automated backup and recovery</li>
              <li>• Data validation and integrity checks</li>
              <li>• Export capabilities (PDF, CSV)</li>
              <li>• Historical data retention</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Integration Capabilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• RESTful API architecture</li>
              <li>• Third-party system integration</li>
              <li>• Real-time notification system</li>
              <li>• Mobile application support</li>
              <li>• Cloud deployment ready</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Timeline */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Project Timeline</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="bg-blue-600 w-4 h-4 rounded-full mr-4"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Phase 1: System Design & Planning</h4>
              <p className="text-gray-600">Requirements analysis, system architecture design, and technology selection</p>
              <span className="text-sm text-blue-600">Completed - Q4 2023</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-green-600 w-4 h-4 rounded-full mr-4"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Phase 2: Core Development</h4>
              <p className="text-gray-600">Asset management system, user authentication, and basic reporting</p>
              <span className="text-sm text-green-600">Completed - Q1 2024</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-yellow-600 w-4 h-4 rounded-full mr-4"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Phase 3: Advanced Features</h4>
              <p className="text-gray-600">Map integration, advanced reporting, and activity logging</p>
              <span className="text-sm text-yellow-600">In Progress - Q2 2024</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-400 w-4 h-4 rounded-full mr-4"></div>
            <div>
              <h4 className="font-semibold text-gray-800">Phase 4: Deployment & Training</h4>
              <p className="text-gray-600">System deployment, staff training, and full operational rollout</p>
              <span className="text-sm text-gray-600">Planned - Q3 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h4 className="font-semibold mb-2">Project Management Office</h4>
            <p className="text-gray-300">Smart City Mission Cell</p>
            <p className="text-gray-300">Thiruvananthapuram Corporation</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technical Support</h4>
            <p className="text-gray-300">Email: tech@smartcitytvm.in</p>
            <p className="text-gray-300">Phone: +91 471 2234567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Emergency Contact</h4>
            <p className="text-gray-300">24/7 Control Room</p>
            <p className="text-gray-300">Phone: +91 471 2234568</p>
          </div>
        </div>
      </div>
    </div>
  );
};