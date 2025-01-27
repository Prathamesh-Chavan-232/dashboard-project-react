import React from 'react';
import { LayoutDashboard, ShoppingCart, FolderKanban, BookOpen, User, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#1C1C1C] h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full" />
        <span className="text-white text-lg font-semibold">ByeWind</span>
      </div>

      <div className="space-y-2">
        <div className="text-gray-400 text-sm mb-4">Favorites</div>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Overview" active />
        <SidebarItem icon={<FolderKanban size={20} />} text="Projects" />
      </div>

      <div className="mt-8 space-y-2">
        <div className="text-gray-400 text-sm mb-4">Dashboards</div>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Default" active />
        <SidebarItem icon={<ShoppingCart size={20} />} text="eCommerce" />
        <SidebarItem icon={<FolderKanban size={20} />} text="Projects" />
        <SidebarItem icon={<BookOpen size={20} />} text="Online Courses" />
      </div>

      <div className="mt-8 space-y-2">
        <div className="text-gray-400 text-sm mb-4">Pages</div>
        <SidebarItem icon={<User size={20} />} text="User Profile" />
        <SidebarItem icon={<Settings size={20} />} text="Account" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${active ? 'bg-[#2A2A2A] text-white' : 'text-gray-400 hover:bg-[#2A2A2A] hover:text-white'}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Sidebar;