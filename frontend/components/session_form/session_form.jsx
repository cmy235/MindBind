import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
    this.displaySignup = this.displaySignup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}); // either call login(user) or signup(user)
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  displayLogin() {
    return (
      <div className="modal-overlay">
      <div class="login-container">

      <h2 class="login-title">Login</h2>
      <br/>
      <form onSubmit={this.handleSubmit} className="login-form-modal">
          <br/>
        <div className="login-input">
          <label>
            <input type="text"
              placeholder="you@email.com"
              value={this.state.username}
              onChange={this.update('username')}
              className="input-username"
            />
          </label>
          <br/>
          <label>
            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="input-password"
            />
          </label>
          </div>
          <br/>
        <input className="modal-login-button" type="submit" value="Login"></input>
      <i className="fas fa-times-circle"
            onChange={this.props.closeModals}
            ></i>
      </form>
      </div>
      </div>
    );
  }


  displaySignup() {
    return (
      <div className="modal-overlay">
      <div class="signup-container">

      <h2 class="login-title">Sign Up via Email</h2>
      <br/>
    <form onSubmit={this.handleSubmit} className="signup-form-modal">
          <br/>

        <ul className="flex-outer">
          <section className="name-wrapper">
            <li>
                <input type="text"
                  placeholder="First Name"
                  value={this.state.firstname}
                  onChange={this.update('firstname')}
                  className="input-firstname"
                />
            </li>
            <br/>
          <li>
              <input type="text"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.update('lastname')}
                className="input-lastname"/>
          </li>
          </section>

          <br/>
        <li>
            <input type="text"
              placeholder="Email Address"
              value={this.state.username}
              onChange={this.update('username')}
              className="input-username"
            />
          </li>
          <br/>
        <li>
            <input type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="input-password"
            />
          </li>
          <br/>
        <li>
            <input type="password"
              placeholder="Confirm Password"
              value={this.state.password}
              onChange={this.update('password')}
              className="input-password"
            />
        <br/>
      </li>
          <br/>

        <input className="modal-signup-button" type="submit" value="Sign Up"></input>
      <i class="fas fa-times-circle icon-star-empty"></i>
            onChange={this.props.closeModals}
        </ul>
      </form>
      </div>
      </div>
    );
  }


  render() {
    console.log(this.props.processForm);
    console.log(this.state);
    return this.displayLogin();
  }

}

export default withRouter(SessionForm);
