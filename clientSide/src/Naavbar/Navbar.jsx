import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setEle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleNavClick = (element) => {
    setEle(element);
  };

  return (
    <div className="navbar">
      <div className="brand">Karchula lekka</div>
      <div className="nav-items">
        <a onClick={() => handleNavClick("Dashboard")}>Dashboard</a>
        <a onClick={() => handleNavClick("Track expense")}>Track expense</a>
        <a onClick={() => handleNavClick("Report")}>Report</a>
      </div>
      <div className="profile">
        <img
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          alt="Profile Picture"
          className="profile-pic"
          id="profile-pic"
          onClick={toggleDropdown}
        />
        <div
          className={`dropdown ${dropdownVisible ? "active" : ""}`}
          id="dropdown-menu"
        >
          <a onClick={() => handleNavClick("Profile")}>Profile</a>
          <a onClick={() => handleNavClick("Logout")}>Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
