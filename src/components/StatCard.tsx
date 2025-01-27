import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  prefix?: string;
  suffix?: string;
}

const StatCard = ({ title, value, change, prefix = '', suffix = '' }: StatCardProps) => {
  const isPositive = change > 0;
  
  return (
    <div className="bg-[#2A2A2A] p-6 rounded-xl">
      <h3 className="text-gray-400 mb-2">{title}</h3>
      <div className="flex items-end gap-3">
        <div className="text-3xl font-semibold text-white">
          {prefix}{value}{suffix}
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;