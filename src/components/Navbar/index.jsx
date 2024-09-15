import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import DefaultNavbar from "./DefaultNavbar";
import FixedNavbar from "./FixedNavbar";

function Navbar() {
  const [isScrollPast, setIsScrollPast] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setIsScrollPast(true);
      console.log("Scrolled Past");
    } else {
      setIsScrollPast(false);
      console.log("Not Past");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isScrollPast ? <FixedNavbar key="navbar-fixed" /> : <DefaultNavbar />}
      </AnimatePresence>
    </>
  );
}
export default Navbar;