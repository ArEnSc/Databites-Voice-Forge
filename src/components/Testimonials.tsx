import React from 'react';
import { Star, Quote, Building, Shield, Code } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    // {
    //   name: 'David Kim',
    //   role: 'CTO',
    //   company: 'TechCorp Industries',
    //   content: 'Databites VoiceForge SDK has transformed our customer service automation. The on-premise deployment gives us complete control over sensitive voice data while maintaining exceptional quality.',
    //   avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    //   rating: 5,
    //   industry: 'Technology'
    // },
    // {
    //   name: 'Sarah Mitchell',
    //   role: 'Head of Engineering',
    //   company: 'SecureBank Solutions',
    //   content: 'The enterprise security features and compliance certifications made Databites VoiceForge SDK the only viable solution for our financial services applications.',
    //   avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    //   rating: 5,
    //   industry: 'Financial Services'
    // },
    // {
    //   name: 'Michael Chen',
    //   role: 'VP of Product',
    //   company: 'HealthTech Innovations',
    //   content: 'Integration was seamless with our existing infrastructure. The SDK documentation is comprehensive and the support team is incredibly responsive.',
    //   avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
    //   rating: 5,
    //   industry: 'Healthcare'
    // }
  ];

  const useCases = [
    {
      icon: Building,
      title: 'Enterprise Applications',
      description: 'Customer service automation, internal training, and accessibility solutions'
    },
    {
      icon: Shield,
      title: 'Government & Defense',
      description: 'Secure communications, training simulations, and classified voice processing'
    },
    {
      icon: Code,
      title: 'Developer Platforms',
      description: 'Voice-enabled applications, gaming, and interactive media experiences'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Enterprise Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations worldwide are leveraging Databites VoiceForge SDK for mission-critical applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  <p className="text-gray-500 text-xs">{testimonial.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Use Cases</h3>
            <p className="text-xl text-gray-600">Deployed across industries for critical voice generation needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Enterprise Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Countries Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Enterprise Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};