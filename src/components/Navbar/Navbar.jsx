import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("theme--dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("theme--dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>

        {/* Dark Mode Toggle Button */}
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            // 🌙 Crescent Moon Icon (Dark Mode)
            <svg className="dark-mode-toggle__icon moon" width="30" height="30" viewBox="0 0 24 24">
              <defs>
                <mask id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                  <circle cx="18" cy="6" r="6" fill="black"/> 
                </mask>
              </defs>
              <circle cx="12" cy="12" r="8" fill="white" mask="url(#moon-mask)"/>
            </svg>
          ) : (
            // ☀️ Sun Icon (Light Mode)
            <svg className="dark-mode-toggle__icon sun" width="30" height="30" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="6" fill="yellow"/>
              <path d="M12 3V1M21 12h2M12 21v2M1 12H3M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M18.4 5.6l1.4-1.4M5.6 18.4l-1.4 1.4" 
                    stroke="yellow" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>

      </div>
    </div>
  );
}

export default Navbar;
