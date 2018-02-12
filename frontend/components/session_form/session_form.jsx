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

  demoSubmit(){
    return (
      <input type="submit"
        id="demo-user"
        onClick={() => this.setState({username: "demoUser", password: "starwars"})}
        value="DEMO" />
    );
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/decks');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModals();
    // throw error unless this.state.password == this.state.passwordConfirm
    const user = this.state;
    if (this.state.password == this.state.passwordConfirm) {
      this.props.processForm({user}).then( () => this.props.history.push('/decks'));
    } else {
      {/* throw errors */}
    }
  }

  renderErrors() {
    debugger
    if (this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="error-outer"
              key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  displayLogin() {
    debugger
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
            <div onClick={this.props.closeModals}>
              <i class="fas fa-times-circle icon-star-empty"></i>
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
                    value={this.state.passwordConfirm}
                    onChange={this.update('passwordConfirm')}
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
