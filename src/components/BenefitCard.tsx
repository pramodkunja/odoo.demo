import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description, color }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 border-blue-200',
    green: 'from-green-500 to-green-600 border-green-200',
    purple: 'from-purple-500 to-purple-600 border-purple-200',
    orange: 'from-orange-500 to-orange-600 border-orange-200'
  };

  const selectedColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <div className="group hover:scale-105 transition-all duration-300">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
        <div className={`w-16 h-16 bg-gradient-to-r ${selectedColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Impact</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedColor}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;