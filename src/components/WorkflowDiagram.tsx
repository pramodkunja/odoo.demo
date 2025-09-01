import React, { useState, useEffect } from 'react';
import { User, FileText, CheckCircle, Bell, ArrowRight } from 'lucide-react';

const WorkflowDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FileText,
      title: 'Request Submission',
      description: 'User submits approval request',
      color: 'blue'
    },
    {
      icon: User,
      title: 'Level 1 Approval',
      description: 'Department head review',
      color: 'purple'
    },
    {
      icon: User,
      title: 'Level 2 Approval',
      description: 'Senior management review',
      color: 'green'
    },
    {
      icon: CheckCircle,
      title: 'Final Approval',
      description: 'Request approved & executed',
      color: 'orange'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStepClass = (index: number) => {
    if (index <= activeStep) {
      return 'bg-green-500 border-green-500 text-white';
    }
    return 'bg-white border-gray-300 text-gray-400';
  };

  const getConnectorClass = (index: number) => {
    if (index < activeStep) {
      return 'bg-green-500';
    }
    return 'bg-gray-300';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center space-y-4 z-10">
              <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${getStepClass(index)}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-center max-w-xs">
                <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-4 bg-gray-300 relative">
                <div 
                  className={`h-full transition-all duration-500 ${getConnectorClass(index)}`}
                  style={{ width: index < activeStep ? '100%' : '0%' }}
                ></div>
                <ArrowRight className={`absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 ${index < activeStep ? 'text-green-500' : 'text-gray-300'}`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white text-center">
          <Bell className="w-8 h-8 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Instant Notifications</h4>
          <p className="text-sm opacity-90">Real-time alerts to all stakeholders</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
          <CheckCircle className="w-8 h-8 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Audit Trail</h4>
          <p className="text-sm opacity-90">Complete approval history tracking</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
          <User className="w-8 h-8 mx-auto mb-3" />
          <h4 className="font-bold mb-2">Role-Based Access</h4>
          <p className="text-sm opacity-90">Secure permission management</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;