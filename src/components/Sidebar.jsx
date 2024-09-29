// Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleSubMenu = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <aside className="fixed top-6 left-6 bottom-11 w-64 bg-black bg-opacity-32 backdrop-blur-lg rounded-lg p-4 flex flex-col gap-2">
      <header className="flex items-center h-18 pb-2 border-b border-white border-opacity-8">
        <img src="logo.svg" alt="Logo" className="h-11" />
      </header>
      <ul className="list-none p-0 m-0">
      
        <li>
          <input type="radio" id="dashboard" name="sidebar" className="hidden" />
          <label
            htmlFor="dashboard"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-dashboard" />
            <p>Dashboard</p>
          </label>
        </li>

        {/* Settings */}
        <li>
          <input
            type="radio"
            id="settings"
            name="sidebar"
            className="hidden"
            onChange={() => toggleSubMenu('settings')}
          />
          <label
            htmlFor="settings"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-gear" />
            <p>Settings</p>
            <i className="ai-chevron-down-small" />
          </label>
          <div
            className={`sub-menu overflow-hidden transition-all duration-500 ${activeTab === 'settings' ? 'h-auto' : 'h-0'}`}
          >
            <ul className="pl-8 list-none">
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Display
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Appearance
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Preferences
                </button>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <input
            type="radio"
            id="create"
            name="sidebar"
            className="hidden"
            onChange={() => toggleSubMenu('create')}
          />
          <label
            htmlFor="create"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-folder-add" />
            <p>Create</p>
            <i className="ai-chevron-down-small" />
          </label>
          <div
            className={`sub-menu overflow-hidden transition-all duration-500 ${activeTab === 'create' ? 'h-auto' : 'h-0'}`}
          >
            <ul className="pl-8 list-none">
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Article
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Document
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Video
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Presentation
                </button>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <input
            type="radio"
            id="profile"
            name="sidebar"
            className="hidden"
            onChange={() => toggleSubMenu('profile')}
          />
          <label
            htmlFor="profile"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-person" />
            <p>Profile</p>
            <i className="ai-chevron-down-small" />
          </label>
          <div
            className={`sub-menu overflow-hidden transition-all duration-500 ${activeTab === 'profile' ? 'h-auto' : 'h-0'}`}
          >
            <ul className="pl-8 list-none">
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Avatar
                </button>
              </li>
              <li>
                <button type="button" className="block w-full text-left h-12 px-4 text-white hover:bg-gray-800">
                  Theme
                </button>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <input type="radio" id="notifications" name="sidebar" className="hidden" />
          <label
            htmlFor="notifications"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-bell" />
            <p>Notifications</p>
          </label>
        </li>
        <li>
          <input type="radio" id="products" name="sidebar" className="hidden" />
          <label
            htmlFor="products"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-cart" />
            <p>Products</p>
          </label>
        </li>
        <li>
          <input type="radio" id="account" name="sidebar" className="hidden" />
          <label
            htmlFor="account"
            className="flex items-center gap-4 h-12 px-4 rounded-lg text-white hover:bg-gray-800 cursor-pointer"
          >
            <i className="ai-lock-on" />
            <p>Account</p>
          </label>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
