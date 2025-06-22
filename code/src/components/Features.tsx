import React from 'react';
import { Server, Shield, Code, Zap, Globe, Settings } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Server,
      title: 'On-Premise Deployment',
      description: 'Deploy entirely within your infrastructure. No external API calls, complete data sovereignty and control.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade encryption, SOC2 compliance, and zero-trust architecture. Your data never leaves your network.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Developer-First SDK',
      description: 'Comprehensive APIs for Python, Node.js, Java, and C++. Complete documentation and code samples included.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for GPU acceleration. Generate voice clones in real-time with sub-100ms latency.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Native support for 50+ languages with accent preservation. Train custom models for specialized domains.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'Customizable Pipeline',
      description: 'Fine-tune models, adjust quality parameters, and integrate with existing ML workflows seamlessly.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Enterprise-Grade
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Voice Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for mission-critical applications requiring maximum security, performance, 
            and control over voice generation technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Technical Specifications</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Designed for enterprise workloads with industry-leading performance metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;100ms</div>
              <div className="text-gray-300">Voice Generation Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Supported Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Voice Similarity Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Enterprise Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};