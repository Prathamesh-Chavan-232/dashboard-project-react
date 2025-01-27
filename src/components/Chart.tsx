import React from 'react';

interface ChartProps {
  title: string;
  children: React.ReactNode;
}

const Chart = ({ title, children }: ChartProps) => {
  return (
    <div className="bg-[#2A2A2A] p-6 rounded-xl">
      <h3 className="text-gray-400 mb-4">{title}</h3>
      <div className="h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default Chart;