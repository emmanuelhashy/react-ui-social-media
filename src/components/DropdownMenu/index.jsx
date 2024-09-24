import React, { useState } from "react";

const Dropdown = ({ menuItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(index);
    }
  };

  return (
    <div className="relative w-full max-w-[220px]">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full p-3 bg-white rounded shadow-md cursor-pointer"
      >
        <span className="text-gray-500">Competition</span>
        <i
          className={`fa-solid fa-caret-down text-orange-500 transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      <ul
        className={`flex flex-col w-full shadow-md bg-white rounded absolute left-0 transition-all duration-300 ease-in-out ${
          isDropdownOpen ? "opacity-100 visible translate-y-3" : "opacity-0 invisible -translate-y-3"
        }`}
      >
        {menuItems.map((menuItem, index) => (
          <li key={index} className="relative p-3 hover:bg-gray-100 cursor-pointer">
            {menuItem.submenu ? (
              <>
                <a
                  href="/"
                  onMouseEnter={() => toggleSubmenu(index)}
                  className="flex justify-between items-center"
                >
                  <span>{menuItem.label}</span>
                  <i
                    className={`fa-solid fa-caret-right text-orange-500 transition-transform ${
                      openSubmenu === index ? "rotate-90" : ""
                    }`}
                  ></i>
                </a>
                {openSubmenu === index && (
                  <ul className="absolute top-0 left-full w-max bg-white rounded shadow-md translate-x-2">
                    {menuItem.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="p-3 hover:bg-gray-100 cursor-pointer">
                        <a href={subItem.link}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <a href={menuItem.link}>{menuItem.label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
