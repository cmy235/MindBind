import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.deployLogout = this.deployLogout.bind(this);
  }

  render() {
    if (this.props.currentUser) {
      return this.navbarLog();
    } else {
      return this.sessionLinks();
    }
  }

  deployLogout() {
    this.props.logout();
    this.props.history.push("/");
  }

  navbarLog () {
    return(
      <div className="main-nav-current-user">
        <h2 className="headerName">Hello, {this.props.currentUser.username}!</h2>
        <button className="logout-button"
          onClick={this.deployLogout}
          >Log Out</button>
        <Link to="/decks">
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
        </Link>
      </div>
    );
  }

  sessionLinks (){
    return(
      <div>
        <div className="background-img">
          <nav className="main-nav">
            <a href="/decks/">
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
                onClick={this.props.openModal1}
                >Login</button>
              <button
                className="signup-button"
                onClick={this.props.openModal2}
                >Get Started</button>

            </div>
          </nav>
        </div>
        <div className="greeting">The World's Best Flashcards</div>
        <div className="bottom-boxes">
          <div className="box-1"
            onClick={this.props.openModal2}>
            Browse Flashcards
          </div>
          <div className="box-2"
            onClick={this.props.openModal2}
            >Make Flashcards</div>
          <div className="box-3"
            onClick={this.props.openModal2}
            >Make Me Smarter!</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
