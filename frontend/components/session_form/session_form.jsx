import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
    this.displaySignup = this.displaySignup.bind(this);
  }

  demoSubmit() {
    return (
      <input type="submit"
        id="demo-user"
        onClick={() => this.setState({username: "demoUser", password: "starwars"})}
        value="DEMO" />
    );
  }

  closeAndClear() {
    this.props.clearErrors();
    this.props.closeModals();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/decks');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors() {
    if  ((this.state.password != this.state.passwordConfirm) && (this.state.passwordConfirm.length != 0)) {
      return(
        <ul className="err-container">

          <li className="error-outer"><i className="fas fa-exclamation ex-point"></i>Passwords must match
          </li>
        </ul>
      );
    } else if (this.props.errors){
      return(

        <ul className="err-container">

          {this.props.errors.map((error, i) => (
            <li className="error-outer"
              key={`error-${i}`}><i className="fas fa-exclamation ex-point"></i>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  displayLogin() {
    return (
      <div className="modal-overlay">
        <div class="login-container">

          <h2 class="login-title">Login</h2>
          <br/>
          <form onSubmit={this.handleSubmit} className="login-form-modal">
            <br/>
            <div className="errors-login">
              {this.renderErrors()}
            </div>

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
            <div onClick={() => this.closeAndClear()}>
              <i class="fas fa-times-circle icon-star"></i>
            </div>

            <button onClick={() => (this.setState({
                username: "demoUser",
                password: "starwars"
              }))} className="modal-login-button">Demo</button>
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
            <form onSubmit={this.handleSubmit}
              className="signup-form-modal">
              <br/>
              <div className="errors-signup">
                {this.renderErrors()}
              </div>
              <ul className="flex-outer">
                <div className="name-container">
                  <section className="name-wrapper-first">
                    <li>
                      <input type="text"
                        placeholder="First Name"
                        value={this.state.firstname}
                        onChange={this.update('firstname')}
                        className="input-firstname"
                        />
                    </li>
                  </section>
                  <section className="name-wrapper-last">
                    <br/>
                    <li>
                      <input type="text"
                        placeholder="Last Name"
                        value={this.state.lastname}
                        onChange={this.update('lastname')}
                        className="input-lastname"/>
                    </li>
                  </section>
                </div>

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
                    value={this.state.passwordConfirm}
                    onChange={this.update('passwordConfirm')}
                    className="input-password"
                    />
                  <br/>
                </li>
                <br/>
                <hr/>
                <input className="modal-signup-button" type="submit" value="Sign Up"></input>
                <div onClick={() => this.closeAndClear()}>
                  <i class="fas fa-times-circle icon-star"></i>
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
