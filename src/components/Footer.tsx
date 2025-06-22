import React from 'react';
import { AudioWaveform as Waveform, Mail, Phone, MapPin, Github, Linkedin, FileText, Code, Book } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Waveform className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Databites VoiceForge SDK</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enterprise-grade voice cloning SDK for on-premise deployment. 
              Complete control, maximum security, unlimited scalability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">SDK & Tools</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Python SDK</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Node.js SDK</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Java SDK</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>C++ SDK</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Docker Images</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Book className="w-4 h-4" />
                <span>Documentation</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>API Reference</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integration Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">System Requirements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Release Notes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Enterprise Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">enterprise@Databites VoiceForge SDK.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">Toronto, CA</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Support Tiers</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">Standard: 8x5 Email</div>
                <div className="text-gray-400">Premium: 24x7 Phone</div>
                <div className="text-gray-400">Enterprise: Dedicated CSM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Databites VoiceForge SDK. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">License Agreement</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};