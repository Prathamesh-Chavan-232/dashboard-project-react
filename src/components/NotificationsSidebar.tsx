import React from 'react';
import { Bug, UserPlus, Bell, Clock, Paintbrush, Rocket, AlertCircle, User, Calendar } from 'lucide-react';

interface NotificationItem {
  id: number;
  icon: React.ReactNode;
  message: string;
  time: string;
  type: 'notification' | 'activity';
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    icon: <Bug className="text-blue-500" size={20} />,
    message: "You fixed a bug.",
    time: "Just now",
    type: 'notification'
  },
  {
    id: 2,
    icon: <UserPlus className="text-green-500" size={20} />,
    message: "New user registered.",
    time: "59 minutes ago",
    type: 'notification'
  },
  {
    id: 3,
    icon: <Bug className="text-blue-500" size={20} />,
    message: "You fixed a bug.",
    time: "12 hours ago",
    type: 'notification'
  },
  {
    id: 4,
    icon: <Bell className="text-purple-500" size={20} />,
    message: "Andi Lane subscribed to you.",
    time: "Today, 11:59 AM",
    type: 'notification'
  }
];

const activities: NotificationItem[] = [
  {
    id: 5,
    icon: <Paintbrush className="text-purple-500" size={20} />,
    message: "Changed the style.",
    time: "Just now",
    type: 'activity'
  },
  {
    id: 6,
    icon: <Rocket className="text-orange-500" size={20} />,
    message: "Released a new version.",
    time: "59 minutes ago",
    type: 'activity'
  },
  {
    id: 7,
    icon: <AlertCircle className="text-red-500" size={20} />,
    message: "Submitted a bug.",
    time: "12 hours ago",
    type: 'activity'
  },
  {
    id: 8,
    icon: <User className="text-blue-500" size={20} />,
    message: "Modified A data in Page X.",
    time: "Today, 11:59 AM",
    type: 'activity'
  },
  {
    id: 9,
    icon: <Calendar className="text-green-500" size={20} />,
    message: "Deleted a page in Project X.",
    time: "Feb 2, 2024",
    type: 'activity'
  }
];

const NotificationsSidebar = () => {
  return (
    <div className="w-80 bg-[#1C1C1C] border-l border-gray-800 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          {notifications.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">{item.icon}</div>
              <div>
                <p className="text-white text-sm">{item.message}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-white text-lg font-semibold mt-6 mb-4">Activities</h2>
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item.id} className="flex items-start gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
              <div className="p-2 bg-[#2A2A2A] rounded-lg">{item.icon}</div>
              <div>
                <p className="text-white text-sm">{item.message}</p>
                <p className="text-gray-400 text-xs">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-white text-lg font-semibold mb-4">Contacts</h2>
          <div className="flex items-center gap-3 p-2 hover:bg-[#2A2A2A] rounded-lg cursor-pointer">
            <div className="w-8 h-8 bg-[#2A2A2A] rounded-full flex items-center justify-center">
              <User className="text-gray-400" size={20} />
            </div>
            <span className="text-white">Natali Craig</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSidebar;