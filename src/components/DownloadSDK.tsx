import React from 'react';
import { Mail, Phone, Building, Shield, Server, Clock, Check } from 'lucide-react';

export const DownloadSDK = () => {
  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC2 compliance, end-to-end encryption, and data sovereignty'
    },
    {
      icon: Server,
      title: 'On-Premise Deployment',
      description: 'Full control over infrastructure and data with local deployment'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Dedicated enterprise support team and priority response'
    }
  ];

  return (
    <section id="request-demo" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Enterprise Demo
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Experience the power of our enterprise voice cloning technology. 
                Contact our sales team to schedule a demo and discuss your specific needs.
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Contact Sales</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For enterprise demos, pricing information, and custom deployment options, please contact:
                </p>
                <a 
                  href="mailto:sales@databites.ca"
                  className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  sales@databites.ca
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Personalized demo of our enterprise solution</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Custom pricing based on your needs</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Technical architecture consultation</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span>Deployment strategy planning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Enterprise Features */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Enterprise-Grade
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Voice Technology</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Our enterprise solution offers unparalleled security, scalability, and support 
                for organizations with mission-critical voice cloning needs.
              </p>
            </div>

            <div className="space-y-6">
              {enterpriseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-500/20">
              <div className="flex items-center space-x-4 mb-6">
                <Building className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Enterprise Support</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>24/7 Priority Phone Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>Dedicated Account Manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span>Custom Deployment Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 