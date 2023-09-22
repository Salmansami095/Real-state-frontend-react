import React from 'react';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import img from "../../images/ssgroup3.png";
import './NavBar.css'; 

function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-light custom-navbar">
      <div className="navbar-logo">
        <img
          src={img} 
          alt="Logo"
        />
      </div>
      <div className="user-icon">
        <IconButton className="iconn" aria-label="user-profile">
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </div>
    </nav>
    </>
  );
}

export default Navbar;