import React, { useState } from "react";
import "./Sidebar.css";
import money from "/src/assets/Money.png";
import addTransaction from "/src/assets/addmoney.png";
import dashboard from "/src/assets/dashboard.png";
import income from "/src/assets/salary.png"

const Sidebar = ({ setEle }) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const handleProfileClick = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  const handleNavClick = (element) => {
    setEle(element);
  };

  return (
    <div className="sideBar">
      <img src={money} alt="Karchulu" onClick={() => handleNavClick("Dashboard")}/>
      <div className="itemsContainer">
        <img src={dashboard} alt="dashboard" onClick={() => handleNavClick("Dashboard")}/>
        <img src={addTransaction} alt="new transaction" onClick={() => handleNavClick("Track expense")}/>
        <img src={income} alt="new transaction" onClick={() => handleNavClick("Income")}/>
      </div>
      <div className="profile-picture">
        <img
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          alt="Profile"
          onClick={handleProfileClick}
        />
        {isSubNavOpen && (
          <div className="sub-navigation">
            <p onClick={() => handleNavClick("Profile")} >Profile</p>
            <p onClick={() => handleNavClick("Settings")}>Settings</p>
            <p onClick={() => handleNavClick("Logout")}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
