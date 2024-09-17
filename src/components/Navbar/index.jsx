import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-white">
      <h1 className="text-2xl text-[#4c0979] font-bold">OJGames</h1>
      <div className="links flex">
        {["Downloads", "Videos", "Support", "FAQ"].map((item) => (
          <a href="/" className="ml-8 text-[#4c0979b1]" key={item}>
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
