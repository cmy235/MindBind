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
  <div className="main-nav">
    <h2 className="headerName">{currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = (openModal1, openModal2) => (
    <nav className="main-nav">
      <ul>

      <div className="logo-container">
        <a href="/">
        <li>
          <img src="app/assets/images/mind.png"></img>
        </li>
        <li>
        <div className="mindbind-title-one">
          MIND
        </div>
      </li>
      <li>
        <div className="mindbind-title-two">
          BIND
        </div>
      </li>
        </a>
      </div>
    </ul>

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
