import React, { useState } from "react";
import search from "../assets/search.svg"
const data = [
    { name: "Polkadot SDK", size: "Coming Soon" },
    { name: "Polkadot Chain", size: "Coming Soon"},
    { name: "Polka Bridge", size: "Coming Soon"},
  ];

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="flex items-center justify-between gap-5 bg-white w-full h-16 px-5 shadow-md">
      <p className="text-2xl font-bold">Polkadot</p>

      <div className="relative w-[300px] h-[40px]">
        <img
            src={search}
            alt="Search Icon" 
            className="absolute top-[11px] left-2 w-4 h-4 z-40 pointer-events-none"       
        />
        <input
          type="text"
          placeholder="Try logo, poster, anything!"
          className={`absolute z-20 top-0 transition-[width,height] duration-300 left-0 h-[36px] border border-[#DFE4E7] rounded-lg pl-8 text-xs font-medium outline-none transition focus:ring focus:ring-violet-500 ${isFocused ? "w-[390px]" : "w-full"}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute z-10 top-10 left-0 w-full transition-[width,height] duration-300 ${
            isFocused ? "h-[170px] w-[390px] pt-[40px] bg-white shadow-md rounded-lg" : "h-[40px]"
          }`}
        >
          <div
            className={`absolute h-full inset-0 transition-opacity duration-300 ${
              isFocused ? "opacity-100 visible" : "opacity-0 invisible"
            } border-t border-[#DFE4E7]`}
          >
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-2 w-full p-3 hover:bg-gray-100"
              >
                <span>{item.name}</span>
                <span className="ml-auto text-xs text-gray-500">{item.size}</span>
              </button>
            ))
          ) : (
            <p className="p-3 text-sm text-gray-500">No results found</p>
          )}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
      <p>Login</p>
      <p>Register</p>
      </div>
    </nav>
  );
};

export default Navbar;
