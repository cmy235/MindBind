import React from 'react';
import { Link } from 'react-router-dom'

const greetingLogic = ({ currentUser, logout }) => (
  
)

const Greeting = ({ currentUser, logout }) => (
  if (currentUser) {
    return(
    <div className="header-class">
      <h2 className="headerName">{currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
        // send them to their dashboards page!
        // show logout option (navbar in header)
    </div>
    )
  } else {
    return(
      sessionLinks();
    )
  }
);

const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>or
      <Link to="/signup">Sign up!</Link>
    </nav>
);

export default Greeting;
