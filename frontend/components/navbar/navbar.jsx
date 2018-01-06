import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, currentUser, openModal1, openModal2 }) => {
  if (currentUser) {
    return navbarLog(currentUser, logout);
  } else {
    return sessionLinks(openModal1, openModal2);
  }
};


const navbarLog =  (currentUser, logout) => (
  <div className="main-nav-current-user">
    <h2 className="headerName">Hello, {currentUser.username}!</h2>
    <button className="logout-button"
      onClick={logout}>Log Out</button>

      <a href="/">
      <ul className="logo-container">
        <li>
      
        </li>
        <li className="mindbind-title-one">
          MIND
        </li>
      <li  className="mindbind-title-two">
          BIND
        </li>
      </ul>
    </a>
  </div>
);

const sessionLinks = (openModal1, openModal2) => (
    <div className="background-img">
    <nav className="main-nav">
      <a href="/">
      <ul className="logo-container">
        <li>
        <img src={window.img.head}></img>
        </li>
        <li className="mindbind-title-one">
          MIND
        </li>
      <li  className="mindbind-title-two">
          BIND
        </li>
      </ul>
    </a>

    <div className="login-signup-container">
      <button className="login-button"
        onClick={openModal1}
        >Login</button>
      <button
        className="signup-button"
        onClick={openModal2}
        >Get Started</button>
    </div>
    </nav>
  </div>
);

export default Navbar;

// send them to their dashboards page
// show logout option (navbar in header)
