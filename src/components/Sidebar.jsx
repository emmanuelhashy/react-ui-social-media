import React, { useState } from 'react';

const sidebarMenu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'ai-dashboard', subItems: [] },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: 'ai-gear', 
    subItems: [
      { label: 'Display' },
      { label: 'Appearance' },
      { label: 'Preferences' }
    ] 
  },
  { 
    id: 'create', 
    label: 'Create', 
    icon: 'ai-folder-add', 
    subItems: [
      { label: 'Article' },
      { label: 'Document' },
      { label: 'Video' },
      { label: 'Presentation' }
    ] 
  },
  { 
    id: 'profile', 
    label: 'Profile', 
    icon: 'ai-person', 
    subItems: [
      { label: 'Avatar' },
      { label: 'Theme' }
    ] 
  },
  { id: 'notifications', label: 'Notifications', icon: 'ai-bell', subItems: [] },
  { id: 'products', label: 'Products', icon: 'ai-cart', subItems: [] },
  { id: 'account', label: 'Account', icon: 'ai-lock-on', subItems: [] },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleSubMenu = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <aside className="fixed top-6 left-6 bottom-11 w-64 bg-[#825B32] bg-opacity-32 backdrop-blur-lg rounded-lg p-4 flex flex-col gap-2 transition-all duration-300">
      <header className="flex items-center space-x-2 h-18 pb-2 border-b border-white border-opacity-8">
        <div className="h-8 w-8 bg-[#654520] flex items-center justify-center rounded-lg transition-transform duration-300 hover:scale-105">
          <i className={`ai-coffee font-bold text-2xl transition-transform duration-300 hover:scale-110`} />
        </div>
        <p className="font-semibold text-xl">Coffee Cafe</p>
      </header>
      <ul className="list-none p-0 m-0">
        {sidebarMenu.map((menuItem) => (
          <li key={menuItem.id}>
            <input
              type="radio"
              id={menuItem.id}
              name="sidebar"
              className="hidden"
              onChange={() => toggleSubMenu(menuItem.id)}
            />
            <label
              htmlFor={menuItem.id}
              className="flex items-center justify-between h-12 px-4 rounded-lg text-white hover:bg-[#654520] cursor-pointer transition-all duration-200"
            >
              <div className="gap-4 flex items-center">
                <i className={`${menuItem.icon} transition-transform duration-300 hover:scale-110`} />
                <p>{menuItem.label}</p>
              </div>
              {menuItem.subItems.length > 0 && (
                <i className={`ai-chevron-down-small transition-transform duration-300 ${activeTab === menuItem.id ? 'rotate-180' : ''}`} />
              )}
            </label>
            {menuItem.subItems.length > 0 && (
              <div
                className={`sub-menu overflow-hidden transition-all duration-500 ${activeTab === menuItem.id ? 'h-auto max-h-60' : 'h-0 max-h-0'}`}
              >
                <ul className="pl-8 list-none">
                  {menuItem.subItems.map((subItem, index) => (
                    <li key={index}>
                      <button
                        type="button"
                        className="block w-full rounded-md text-left h-12 px-4 text-white hover:bg-[#654520] transition-colors duration-200"
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
