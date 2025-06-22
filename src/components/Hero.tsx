import React from 'react';
import { Code, Shield, AudioWaveform as Waveform, ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Waveform className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Databites VoiceForge SDK</span>
          </div>
          <div className="hidden md:flex space-x-8 text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="hover:text-white transition-colors">Documentation</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </div>
          <a 
            href="#request-demo" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Download SDK
          </a>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Enterprise
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Voice SDK</span>
                <br />
                On-Premise
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Deploy advanced voice cloning technology directly in your desktop for your apps. 
                Complete control, maximum security, and unlimited scalability for enterprise applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#request-demo"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download SDK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#docs" 
                className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Code className="w-5 h-5" />
                <span>View Docs</span>
              </a>
            </div>

            <div className="flex items-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Enterprise Support</div>
              </div>
            </div>
          </div>

          {/* SDK Demo */}
          <div className="relative">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">SDK Integration</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-slate-900/80 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2"># Initialize Databites VoiceForge SDK</div>
                  <div className="text-blue-300">import VoiceForge from 'VoiceForge';</div>
                  <div className="text-white mt-2">const sdk = new VoiceForge({`{`}</div>
                  <div className="text-gray-300 ml-4">apiKey: 'your-enterprise-key',</div>
                  <div className="text-gray-300 ml-4">endpoint: 'localhost:8080'</div>
                  <div className="text-white">{`}`});</div>
                  <div className="text-purple-300 mt-3">// Clone voice locally</div>
                  <div className="text-white">const result = await sdk.cloneVoice({`{`}</div>
                  <div className="text-gray-300 ml-4">audioFile: 'sample.wav',</div>
                  <div className="text-gray-300 ml-4">text: 'Hello, world!'</div>
                  <div className="text-white">{`}`});</div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 text-sm">100% On-Premise • Zero Data Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};