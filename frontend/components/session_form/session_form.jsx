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
    this.props.processForm({user});
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
            <input type="text"
              placeholder="you@email.com"
              value={this.state.username}
              onChange={this.update('username')}
              className="input-username"
            />
          <br/>

            <input type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="input-password"
            />

          </div>
          <br/>
        <hr/>
        <input className="modal-login-button" type="submit" value="Login"></input>
            <div onClick={this.props.closeModals}>
            <i class="fas fa-times-circle icon-star-empty"></i>
            </div>
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
    <form onSubmit={this.handleSubmit}
       className="signup-form-modal">

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
        <hr/>
        <input className="modal-signup-button" type="submit" value="Sign Up"></input>
        <div onClick={this.props.closeModals}>
        <i class="fas fa-times-circle icon-star-empty"></i>
        </div>
        </ul>
      </form>
      </div>
      </div>
    );
  }


  render() {
    if (this.props.type === 'signup'){
      return this.displaySignup();
    } else if (this.props.type === 'login'){
      return this.displayLogin();
    }
  }

}

export default withRouter(SessionForm);
