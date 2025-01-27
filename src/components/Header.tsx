import React from 'react';
import { Search, Sun, History, Bell, Layout } from 'lucide-react';

const Header = () => {
  return (
    <div className="h-16 bg-[#1C1C1C] border-b border-gray-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Layout className="text-gray-400" />
          <span className="text-gray-400">Dashboards</span>
          <span className="text-gray-600">/</span>
          <span className="text-white">Default</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#2A2A2A] text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#2A2A2A] rounded-lg">
            <Sun className="text-gray-400" size={20} />
          </button>
          <button className="p-2 hover:bg-[#2A2A2A] rounded-lg">
            <History className="text-gray-400" size={20} />
          </button>
          <button className="p-2 hover:bg-[#2A2A2A] rounded-lg">
            <Bell className="text-gray-400" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;