import React from 'react';
import { Check, Crown, Building } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale deployments and mission-critical applications',
      features: [
        'Unlimited server deployment',
        'Unlimited voice generations',
        'Ultra-premium models + real-time',
        '24/7 dedicated support',
        'White-label licensing',
        'Custom feature development',
        'On-site installation',
        'SLA guarantees',
        'Compliance certifications'
      ],
      buttonText: 'Contact Enterprise',
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Enterprise
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Licensing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible licensing options designed for enterprise deployment scenarios. 
            All plans include perpetual licenses with optional support packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 place-items-center gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-slate-800 rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20' 
                  : 'border-slate-700 hover:border-blue-400'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Crown className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  {typeof plan.price === 'string' ? (
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-400">/year</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#request-demo"
                className={`block w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Volume Licensing */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 mt-16 text-center border border-blue-500/20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Building className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">Volume Licensing Available</h3>
          </div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Multi-year agreements, volume discounts, and custom deployment options available. 
            Contact our enterprise team for specialized pricing and implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#request-demo"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-center"
            >
              Request Quote
            </a>
            <a 
              href="#request-demo"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-center"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};