import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  initial: {
    y: -50,
    x: "-50%",
    opacity: 0,
  },
  animate: {
    y: 0,
    x: "-50%",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

function NavbarFixed() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={navVariants}
      className="fixed z-[999] w-full left-1/2 -translate-x-1/2 py-6 px-10"
    >
    <nav className="flex justify-between items-center">
    <h2 className="text-xl text-white font-semibold">CareerX</h2>
      <ul className="flex items-center gap-2 text-sm rounded-full p-1 bg-white bg-opacity-[.08] backdrop-blur-lg border border-white border-opacity-[.08] font-medium font-jakarta text-white">
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Career
          </a>
        </li>
        <li>
          <a href="#" className="p-4 hover:opacity-50">
            Sitemap
          </a>
        </li>
        <li>
          <button className="font-jakarta text-sm px-4 py-2 rounded-3xl text-white font-medium bg-[#171719] border border-white border-opacity-[.08] hover:border-opacity-25">
            Get Started
          </button>
        </li>
      </ul>
      <div className="flex text-sm space-x-4">
        <h2 className="text-[#531253] font-medium bg-white py-2 px-6 rounded cursor-pointer border border-[#531253]">Sign in</h2>
        <h2 className="text-white font-medium bg-[#531253] py-2 px-6 rounded cursor-pointer">Sign up</h2>
      </div>
    </nav>
    </motion.div>
  );
}
export default NavbarFixed;