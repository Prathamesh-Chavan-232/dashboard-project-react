import React from 'react';

const WorldMap = () => {
  return (
    <div className="bg-[#2A2A2A] p-6 rounded-xl">
      <h3 className="text-gray-400 mb-4">Revenue by Location</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-white">New York</span>
          <span className="text-gray-400">72K</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">San Francisco</span>
          <span className="text-gray-400">39K</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">Sydney</span>
          <span className="text-gray-400">25K</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white">Singapore</span>
          <span className="text-gray-400">61K</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;