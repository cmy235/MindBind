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
        <i class="far fa-times-circle"
            onClick={closeModals}
            ></i>
      </form>
      </div>
      </div>
    );
  }


  displaySignup() {
    return (
      <div class="signup-container">
        <form onSubmit={this.handleSubmit} className="signup-form-modal">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
  }

  render() {
    return (
      this.displayLogin()
    );
  }


}

export default withRouter(SessionForm);
