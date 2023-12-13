import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Home as HomeIcon,
  Headphones as HeadphonesIcon,
  Person as PersonIcon,
  Podcasts as PodcastsIcon,
} from "@mui/icons-material";
import logo from "../assets/logo.svg";
import "../style/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "rgb(56, 56, 56)",
        borderBottom: "1px solid white",
        opacity: 0.8,
        zIndex: "999",
      }}
    >
      <Toolbar className="header-container">
        <div className="header-container">
          <IconButton edge="start" className="logo">
           <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          </IconButton>
          <Link to="/"><Button id="nav-button" className="nav-button" startIcon={<HomeIcon />}>
            HOME
          </Button></Link>
          <Link to="/podcasts"><Button id="nav-button" className="nav-button" startIcon={<PodcastsIcon />}>
            PODCASTS
          </Button></Link>
         <Button id="nav-button"
            className="nav-button"
            startIcon={<HeadphonesIcon />}
            onClick={handleButtonClick}
          >
            LIBRARY
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className="library-menu"
            id="library-menu"
          >
            <Link className="drop" to="/music"><MenuItem>Music</MenuItem></Link>
            <Link className="drop" to="/latest"><MenuItem>Podcasts</MenuItem></Link>
          </Menu>
        </div>
        <div className="header-container">
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            className="search-input"
          />
          <Link to="/"><Button className="person-button">
            <PersonIcon />
          </Button></Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
