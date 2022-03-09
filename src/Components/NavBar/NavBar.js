import "./NavBar.css";
import { SideBarData } from "./SideBarData";
import { Route, Link, Routes } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { useState } from "react";
import Main from "../Main/Main";
import App from "../../App";

const NavBar = ({ removeData }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleQueryRemoval = () => {
    removeData();
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div className="logo-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="logo">
              <ImIcons.ImEyePlus className="eye-icon" /> Track
            </h2>
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path} onClick={handleQueryRemoval}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
