import React from 'react';
import { Mail, Phone, Globe, Building2, CheckCircle } from 'lucide-react';
import oddoo from '../assets/generated-image.png';  

const ContactSection: React.FC = () => {
  return (
    <section className="section min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-600/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full animate-spin"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header */}
            <div className="mb-16">
              <div className="flex items-center justify-center space-x-4 mb-8">
               <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                 <img src={oddoo}/>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">ERP</div>
                  <div className="text-sm text-purple-300">Ready to Transform</div>
                </div>
              </div>
              </div>
              
              <h2 className="text-6xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss how Odoo ERP can transform your construction business operations
              </p>
            </div>

            {/* Key Benefits Summary */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { value: '50%', label: 'Time Reduction', desc: 'Faster processes' },
                { value: '30%', label: 'Cost Savings', desc: 'Improved efficiency' },
                { value: '99%', label: 'Accuracy', desc: 'Error-free operations' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-white/70">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-12">
              <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-white/80">odoo@sriainfotech.com</div>
                    </div>
                  </div>

                          <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-white/80">+91 6309782855</div>
                    </div>
                  </div>

                     <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Website</div>
                      <div className="text-white/80">www.sriainfotech.com</div>
                    </div>
                  </div> 
{/*                   
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-white/80">+91 98765 43210</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Website</div>
                      <div className="text-white/80">www.odoosolutions.com</div>
                    </div>
                  </div> */}
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white text-left mb-4">What's Included</h4>
                  {[
                    'Free Initial Consultation',
                    'Detailed Implementation Plan',
                    'Comprehensive Training Program',
                    'Ongoing Support & Maintenance',
                    'Custom Report Development',
                    '24/7 Technical Support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              
              <button className="text-white/80 hover:text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div> */}

            {/* Footer */}
            {/* <div className="mt-16 pt-8 border-t border-white/20 text-center">
              <p className="text-white/60">
                © 2025 Odoo ERP Implementation Services. Transforming businesses with innovative ERP solutions.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;