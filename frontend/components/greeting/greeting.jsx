import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ logout, currentUser, openModal1, openModal2 }) => {
  if (currentUser) {
    return greetingLogout(currentUser, logout);
  } else {
    return sessionLinks(openModal1, openModal2);
  }
};


const greetingLogout =  (currentUser, logout) => (
  <div className="header-class">
    <h2 className="headerName">{currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = (openModal1, openModal2) => (
    <nav className="main-nav">
      
      <header className="logo-container">
        <div className="mindbind-title-one">
          MIND
        </div>
        <div className="mindbind-title-two">
          BIND
        </div>
      </header>

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
);

export default Greeting;


// send them to their dashboards page
// show logout option (navbar in header)
