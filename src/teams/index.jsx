import React, { useState } from "react";

const teams = [
  { name: "Arsenal FC", logo: "Arsenal-FC.png", headCoach: "Mikel Arteta" },
  { name: "Chelsea FC", logo: "Chelsea-FC.png", headCoach: "Enzo Maresca" },
  {
    name: "AFC-Bournemouth",
    logo: "AFC-Bournemouth.png",
    headCoach: "Andoni Iraola",
  },
  { name: "Brighton", logo: "Brighton-Hove-Albion.png", headCoach: 2 },
  { name: "Crystal Palace", logo: "Crystal-Palace-FC.png", headCoach: 7 },
  { name: "Brentford FC", logo: "Brentford-FC.png", headCoach: "Thomas Frank" },
  { name: "Everton FC", logo: "Everton-FC.png", headCoach: 10 },
  { name: "Fulham FC", logo: "Fulham-FC.png", headCoach: 17 },
  { name: "Ipswich-Town", logo: "Ipswich-Town.png", headCoach: 3 },
  {
    name: "Aston Villa FC",
    logo: "Aston-Villa-FC.png",
    headCoach: "Unai Emery",
  },
  { name: "Leicester-City FC", logo: "Leicester-City.png", headCoach: 9 },
  { name: "Liverpool FC", logo: "Liverpool-FC.png", headCoach: 9 },
  { name: "Manchester-City", logo: "Manchester-City.png", headCoach: 9 },
  { name: "Manchester-United", logo: "Manchester-United.png", headCoach: 9 },
  { name: "Nottingham Forest", logo: "Nottingham-Forest.png", headCoach: 9 },
  { name: "Southampton FC", logo: "Southampton-FC.png", headCoach: 9 },
  { name: "Tottenham Hotspur", logo: "Tottenham-Hotspur.png", headCoach: 9 },
  { name: "West-Ham-United", logo: "West-Ham-United.png", headCoach: 9 },
  { name: "Wolverhampton", logo: "Wolverhampton.png", headCoach: 9 },
  { name: "Newcastle United", logo: "Newcastle-United.png", headCoach: 9 },
];

const Cards = () => {
  const cards = document.querySelectorAll(".card");

  const [searchTerm, setSearchTerm] = useState("");

  const filterByName = (teams, searchTerm) => {
    return teams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredTeams = filterByName(teams, searchTerm);

  const handleMouseMove = (e) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--xPos", `${x}px`);
      card.style.setProperty("--yPos", `${y}px`);
    });
  };

  const getImage = (imageName) => {
    return require(`../assets/logos/${imageName}`);
  };

  return (
    <div className="w-full">
    <div className="fixed flex justify-center py-5 z-10 w-full">
        <input
        type="text"
        placeholder="Search for a team"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 outline-none bg-transparent border border-[rgba(0, 255, 241, 0.4)] w-full md:w-[600px] text-gray-400 rounded"
        />
    </div>
    <div className="cards">
        <div
        onMouseMove={handleMouseMove}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 p-4 sm:p-8"
        >
        {filteredTeams.map((team) => (
            <div className="card relative flex justify-center items-center rounded-lg transition-all duration-150 h-[250px] sm:h-[200px] w-[250px] sm:w-[200px]">
            <div className="card-content flex flex-col justify-center items-center gap-[16px] sm:gap-[26px] bg-[#13161c] rounded-lg transition-all duration-250 h-[calc(100%-2px)] w-[calc(100%-2px)]">
                <img
                className="logo w-[40px] sm:w-[50px]"
                src={`${getImage(team.logo)}`}
                alt={team.name}
                />
                <h2 className="text-md sm:text-lg font-normal opacity-45 transition-opacity duration-300">
                {team.name}
                </h2>
                <p className="text-xs sm:text-sm font-normal opacity-45 transition-opacity duration-300">
                {team.headCoach}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
    </div>
  );
};

export default Cards;
