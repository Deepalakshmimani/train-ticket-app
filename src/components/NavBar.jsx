import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";


function Navbar() {
  const {user,setUser,setShowUserLogin,navigate}=useAppContext();
  return (

    <nav className="navbar">

      <ul className="nav-links">
        <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
        {user && <li><NavLink to="/bookings" className="nav-link">My Bookings</NavLink></li>}
        <li><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>

      <div className="right-section">
        {user && <div onClick={()=>navigate('/notifications')}className="notification">
          🔔
          <span className="badge">3</span>
        </div>}

        {!user? (<NavLink onClick={()=>setShowUserLogin(true)} to="/login" className="auth-link">
          Login
        </NavLink>):
        <div onClick={()=>navigate("/profile")}>
          <img src={assets.profile_icon} className="profile-icon"/>
        </div>
          
          
          }
      </div>

    </nav>
  );
}

export default Navbar;