import React, { useEffect, useState } from 'react';
import { 
  Building2, 
  Settings, 
  ShoppingCart, 
  Package, 
  CheckCircle, 
  Shield, 
  Calculator, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Play,
  Pause,
  ChevronDown,
  Database,
  Workflow,
  BarChart3,
  FileText,
  Eye,
  Target,
  Zap,
  Globe,
  Mail,
  Phone,
  Contact
} from 'lucide-react';
import HeroSection from './components/HeroSection';
import AnimatedSection from './components/AnimatedSection';
import ModuleCard from './components/ModuleCard';
import WorkflowDiagram from './components/WorkflowDiagram';
import BenefitCard from './components/BenefitCard';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(entry.target as Element);
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelectorAll('.section')[1];
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onScrollNext={scrollToNext} />

      {/* What is Odoo */}
      <AnimatedSection className="bg-gradient-to-br from-white to-gray-50 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">What is Odoo?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                  <Database className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">All-in-One ERP System</h3>
                  <p className="text-gray-600">Comprehensive business management solution</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <Settings className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Module Suite</h3>
                  <p className="text-gray-600">Purchases, Inventory, Approvals, Quality, Sales, Accounting, Contacts</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Modular & Scalable</h3>
                  <p className="text-gray-600">Customizable, flexible, grows with your business</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: ShoppingCart, color: 'purple', label: 'Purchase' },
                  { icon: Package, color: 'blue', label: 'Inventory' },
                  { icon: CheckCircle, color: 'green', label: 'Approvals' },
                  { icon: Shield, color: 'orange', label: 'Quality' },
                  { icon: Calculator, color: 'indigo', label: 'Accounting' },
                  { icon: Contact, color: 'pink', label: 'Contact' }
                ].map((module, index) => (
                  <div 
                    key={index}
                    className={`p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <module.icon className={`w-8 h-8 text-${module.color}-600 mx-auto mb-2`} />
                    <p className="text-sm text-center font-medium text-gray-700">{module.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Odoo for Elegant Infra */}
      <AnimatedSection className="bg-gradient-to-r from-purple-900 to-purple-800 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">Why Odoo for Elegant Infra Developers?</h2>
              <div className="space-y-6">
                {[
                  'Centralized Control Across All Projects',
                  'Real-time Visibility Into Operations',
                  'Streamlined Vendor Approval Process',
                  'Reduced Paperwork & Manual Processes',
                  'Better Cost Control & Profitability'
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 opacity-0 animate-slide-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <p className="text-white text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">50%</div>
                    <p className="text-white/80">Time Saved</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">30%</div>
                    <p className="text-white/80">Cost Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">99%</div>
                    <p className="text-white/80">Accuracy</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                    <p className="text-white/80">Availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Purchase Module */}
      <AnimatedSection className="bg-white  flex items-center">
        <div className="container mx-auto px-6 py-20">
          <ModuleCard
            title="Purchase Module"
            icon={ShoppingCart}
            color="purple"
            description="Streamlined procurement process from request to payment"
            features={[
              'Purchase Requests (PR) Management',
              'Request for Quotation (RFQ) System',
              'Vendor Comparison & Analysis',
              'Purchase Order (PO) Generation',
              'Multi-level Vendor Approval System',
              'Real-time Budget Tracking'
            ]}
            workflow={['PR Creation', 'RFQ Generation', 'Vendor Selection', 'PO Approval', 'Order Placement']}
          />
        </div>
      </AnimatedSection>

      {/* Inventory Module */}
      <AnimatedSection className="bg-gradient-to-br from-blue-50 to-indigo-50  flex items-center">
        <div className="container mx-auto px-6 py-20">
          <ModuleCard
            title="Inventory Module"
            icon={Package}
            color="blue"
            description="Complete stock management across multiple sites and warehouses"
            features={[
              'Multi-warehouse Stock Tracking',
              'Goods Receipt Note (GRN) Processing',
              'Internal Transfer Management',
              'Planned vs Actual Consumption Analysis',
              'Low Stock Alerts & Reorder Points',
              'Site-wise Inventory Reports'
            ]}
            workflow={['Stock Receipt', 'Quality Check', 'Storage Assignment', 'Issue Management', 'Stock Reports']}
          />
        </div>
      </AnimatedSection>

      {/* Approvals Module */}
      <AnimatedSection className="bg-white  flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Approvals Module</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Multi-level approval system with instant notifications and complete audit trail</p>
          </div>
          
          <WorkflowDiagram />
        </div>
      </AnimatedSection>

      {/* Quality Module */}
      <AnimatedSection className="bg-gradient-to-r from-green-900 to-teal-900 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-white">Quality Module</h2>
              </div>
              
              <p className="text-xl text-white/80 mb-8">
                Ensure material quality and supplier performance with comprehensive quality control
              </p>

              <div className="space-y-4">
                {[
                  'Incoming Material Inspections',
                  'Supplier Quality Monitoring',
                  'Quality Certificates Management',
                  'Non-Conformance Tracking',
                  'Vendor Performance Scorecards'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Quality Score', value: '96%', color: 'green' },
                { label: 'Inspection Rate', value: '100%', color: 'blue' },
                { label: 'Reject Rate', value: '2.1%', color: 'yellow' },
                { label: 'Supplier Rating', value: '4.8★', color: 'purple' }
              ].map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                  <div className={`text-3xl font-bold text-${metric.color}-400 mb-2`}>{metric.value}</div>
                  <p className="text-white/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Accounting Module */}
      <AnimatedSection className="bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <ModuleCard
            title="Accounting Module"
            icon={Calculator}
            color="indigo"
            description="Complete financial management with automated 3-way matching and project costing"
            features={[
              '3-Way Match: PO → GRN → Invoice',
              'Project-based Cost Tracking',
              'Automated Journal Entries',
              'Vendor Payment Management',
              'Financial Reporting & Analytics',
              'Budget vs Actual Analysis'
            ]}
            workflow={['Invoice Receipt', '3-Way Matching', 'Approval Process', 'Payment Processing', 'Financial Reports']}
          />
        </div>
      </AnimatedSection>

      {/* Sales Module
      <AnimatedSection className="bg-white">
        <div className="container mx-auto px-6 py-20">
          <ModuleCard
            title="Sales Module"
            icon={TrendingUp}
            color="pink"
            description="Manage client relationships and track project profitability"
            features={[
              'Client Contract Management',
              'Revenue Tracking & Forecasting',
              'Project Profitability Analysis',
              'Invoice Generation & Tracking',
              'Payment Collection Management',
              'Client Performance Reports'
            ]}
            workflow={['Contract Creation', 'Milestone Tracking', 'Invoice Generation', 'Payment Collection', 'Profitability Analysis']}
          />
        </div>
      </AnimatedSection> */}

      {/* Contacts Module */}
      <AnimatedSection className="bg-gradient-to-r from-orange-900 to-yellow-900 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-5xl font-bold text-white">Contacts Module</h2>
              </div>
              
              <p className="text-xl text-white/80 mb-8">
                Centralized vendor and client database with comprehensive status tracking
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { status: 'Approved', count: 45, color: 'green' },
                  { status: 'Under Review', count: 12, color: 'yellow' },
                  { status: 'Restricted', count: 3, color: 'red' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 bg-${item.color}-400 rounded-full`}></div>
                      <span className="text-white font-medium">{item.status} Vendors</span>
                    </div>
                    <span className="text-white text-lg font-bold">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Vendor Management Features</h3>
              <div className="space-y-4">
                {[
                  'Complete Vendor Profiles',
                  'Document Management',
                  'Performance Tracking',
                  'Communication History',
                  'Compliance Monitoring',
                  'Rating & Reviews System'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Workflow Integration */}
      <AnimatedSection className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Complete Workflow Integration</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Seamlessly connected modules for end-to-end business process automation
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { icon: FileText, label: 'Site Request', color: 'blue' },
                { icon: ShoppingCart, label: 'Purchase', color: 'purple' },
                { icon: CheckCircle, label: 'Approval', color: 'green' },
                { icon: Shield, label: 'Quality', color: 'orange' },
                { icon: Package, label: 'Inventory', color: 'indigo' },
                { icon: Calculator, label: 'Accounting', color: 'pink' },
                { icon: Contact, label: 'Contact', color: 'teal' },
                { icon: BarChart3, label: 'Reports', color: 'yellow' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-${step.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white font-medium">{step.label}</p>
                  {index < 7 && (
                    <ArrowRight className="w-6 h-6 text-white/50 mx-auto mt-2 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="bg-white flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Benefits for Elegant Infra Developers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your construction business with powerful ERP capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Eye}
              title="Transparency"
              description="Complete visibility into all business processes and project status"
              color="blue"
            />
            <BenefitCard
              icon={Zap}
              title="Efficiency"
              description="Streamlined workflows and automated processes reduce manual work"
              color="green"
            />
            <BenefitCard
              icon={Target}
              title="Profitability"
              description="Better cost control and project tracking improve margins"
              color="purple"
            />
            <BenefitCard
              icon={Globe}
              title="Scalability"
              description="Grows with your business from startup to enterprise level"
              color="orange"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Next Steps */}
      <AnimatedSection className="bg-gradient-to-r from-gray-900 to-black flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Implementation Roadmap</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A structured approach to successful Odoo ERP implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Pilot Implementation',
                
                description: 'Setup core modules with limited users and basic workflows',
                features: ['System Setup', 'User Training', 'Data Migration', 'Basic Testing']
              },
              {
                phase: 'Phase 2',
                title: 'Training & Refinement',
               
                description: 'Comprehensive user training and process optimization',
                features: ['Advanced Training', 'Process Optimization', 'Custom Reports', 'Integration Testing']
              },
              {
                phase: 'Phase 3',
                title: 'Full Rollout',
             
                description: 'Company-wide deployment with ongoing support',
                features: ['Full Deployment', 'Go-Live Support', 'Performance Monitoring', '24/7 Support']
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="text-yellow-400 font-bold text-sm mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <div className="text-white/60 text-sm mb-4">{phase.duration}</div>
                <p className="text-white/80 mb-6">{phase.description}</p>
                <div className="space-y-2">
                  {phase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

export default App;