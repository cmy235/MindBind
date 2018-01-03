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
    <nav className="login-signup">
      {/*<Link to="/login">Login</Link>or
      <Link to="/signup">Sign up!</Link>*/}
    </nav>
);

export default Greeting;


// send them to their dashboards page
// show logout option (navbar in header)
