import React from "react";
import Dropdown from "./components/DropdownMenu";

const App = () => {
  const menuItems = [
    { label: "Serie A", link: "#" },
    { label: "Bundesliga", link: "#" },
    {
      label: "UEFA",
      submenu: [
        { label: "Champions League", link: "/" },
        { label: "Europa League", link: "/" },
        { label: "Super Cup", link: "/" },
      ],
    },
    { label: "Ligue 1", link: "#" },
    {
      label: "International Tournament",
      submenu: [
        { label: "Copa America", link: "/" },
        { label: "Euros", link: "/" },
        { label: "FIFA World Cup", link: "/" },
        { label: "AFC Asian Cup", link: "/" },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-start pt-10 h-screen bg-gray-100">
      <Dropdown menuItems={menuItems} />
    </div>
  );
};

export default App;
