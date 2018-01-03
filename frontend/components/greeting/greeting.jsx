import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ logout, currentUser }) => {
  if (currentUser) {
    return greetingLogout(currentUser, logout);
  } else {
    return sessionLinks();
  }
};


const greetingLogout =  (currentUser, logout) => (
  <div className="header-class">
    <h2 className="headerName">{currentUser.username}</h2>
    <button onClick={logout}>Log Out</button>
  </div>
);

const sessionLinks = () => (
    <nav className="main-nav">
      <header className="logo-container">
        MindBind
      </header>
      <div className="login-signup-container">
        <div className="login-button">
          <Link to="/login">Login</Link>
        </div>
        <div className="signup-button">
          <Link to="/signup">Get Started</Link>
        </div>
      </div>
    </nav>
);

export default Greeting;


// send them to their dashboards page
// show logout option (navbar in header)
