import React from 'react';
import { DivideIcon as LucideIcon, CheckCircle, ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  features: string[];
  workflow?: string[];
}

const ModuleCard: React.FC<ModuleCardProps> = ({ 
  title, 
  icon: Icon, 
  color, 
  description, 
  features,
  workflow = []
}) => {
  const colorClasses = {
    purple: 'bg-purple-600 text-purple-600 border-purple-200',
    blue: 'bg-blue-600 text-blue-600 border-blue-200',
    green: 'bg-green-600 text-green-600 border-green-200',
    orange: 'bg-orange-600 text-orange-600 border-orange-200',
    indigo: 'bg-indigo-600 text-indigo-600 border-indigo-200',
    pink: 'bg-pink-600 text-pink-600 border-pink-200'
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.purple;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <div className={`w-16 h-16 ${selectedColor.split(' ')[0]} rounded-2xl flex items-center justify-center`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-800">{title}</h2>
        </div>
        
        <p className="text-xl text-gray-600 mb-8">{description}</p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle className={`w-6 h-6 ${selectedColor.split(' ')[1]} flex-shrink-0 mt-0.5`} />
              <span className="text-gray-700 text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        {workflow.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Workflow Process</h3>
            <div className="space-y-4">
              {workflow.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 ${selectedColor.split(' ')[0]} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{step}</span>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
        
        <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className={`text-3xl font-bold ${selectedColor.split(' ')[1]} mb-1`}>85%</div>
              <p className="text-sm text-gray-600">Time Saved</p>
            </div>
            <div>
              <div className={`text-3xl font-bold ${selectedColor.split(' ')[1]} mb-1`}>99%</div>
              <p className="text-sm text-gray-600">Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;