import React from 'react';

const BarChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values = [15, 25, 20, 30, 15, 25];
  const maxValue = Math.max(...values);

  return (
    <div className="h-full flex items-end justify-between gap-4 pt-8">
      {months.map((month, index) => {
        const height = (values[index] / maxValue) * 100;
        return (
          <div key={month} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full bg-purple-500/20 rounded-lg" style={{ height: `${height}%` }}>
              <div 
                className="w-full bg-purple-500 rounded-lg transition-all duration-300 hover:bg-purple-400"
                style={{ height: `${height * 0.7}%` }}
              />
            </div>
            <span className="text-gray-400 text-sm">{month}</span>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;