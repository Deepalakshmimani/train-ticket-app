import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import trainImg from "../assets/logo.avif";
import { useAppContext } from "../context/AppContext";

function Sidebar() {
  const {user,setUser,setShowLoginUser,navigate}=useAppContext();

  const logout=async()=>
  {
    setUser(null);
    navigate('/');
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink to="/"><img src={trainImg} className="logo-img" alt="logo" />
        <span>Ticket</span></NavLink>
      </div>


      <ul>
        <li>
          <NavLink to="/dashboard" className="menu-link">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/trains" className="menu-link">Train List</NavLink>
        </li>
        <li>
          <NavLink to="/chat" className="menu-link">Help / Chatbot</NavLink>
        </li>
        {user &&<li>
          <NavLink onClick={logout} to="/logout" className="menu-link-logout">Logout</NavLink>
        </li>}
      </ul>
    </div>
  );
}

export default Sidebar;