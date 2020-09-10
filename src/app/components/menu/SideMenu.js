import React from "react";
import "../../styles/App.css";

const SideMenu = ({ changeCategory, category }) => {
  const links = [
    { name: "TENNIS", category: "tennis" },
    { name: "RUNNING", category: "running" },
    { name: "FOOTBALL", category: "foot" },
    { name: "BASKETBALL", category: "basket" },
    { name: "FITNESS-CARDIO", category: "fitness" },
  ];
  return (

    <div className="col-sm-2 sidebar">
      <ul>
        {links.map((link, index) => (
          <li
            className={`${link.category === category && "active"} `}
            key={index}
            onClick={() => changeCategory(link.category)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default SideMenu;
