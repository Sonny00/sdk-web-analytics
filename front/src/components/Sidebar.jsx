import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './styles.css'; // Import du fichier CSS que vous avez fourni

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "HeatMap",
      icon: <FaUserAlt />
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
  ];

  return (
    <div className="App">
      <div
        className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}
        style={{ minWidth: isOpen ? "250px" : "40px" }}
      >
        <div className="sidebar__button" onClick={toggle}>
          <FaBars />
        </div>
        <ul>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="sidebar__listItem"
              activeClassName="active"
            >
              <div className="sidebar__icon">{item.icon}</div>
              <span style={{ display: isOpen ? "inline" : "none" }}>{item.name}</span>
            </NavLink>
          ))}
        </ul>
      </div>
      <main className="content">{children}</main>
    </div>
  );
};

export default Sidebar;
