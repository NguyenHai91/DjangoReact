

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class RegisterPage extends Component {

  register = (events) => {
    events.preventDefault();
  }

  render() {
    return(
      <div className="container-fluid login">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mix"></div>
            <div className="col-lg-4 col-md-4 col-sm-12 mix">
              <form className="form" method="POST" onSubmit={this.register}>
                <div className="logo-ashion"><img src="assets/img/logo.png" /></div>
                <input className="username" type="text" value="" name="username" placeholder="email or phone" />
                <input className="first-name" type="text" value="" name="first-name" placeholder="first name" />
                <input className="last-name" type="text" value="" name="last-name" placeholder="last name" />
                <input className="phone" type="text" value="" name="phone" placeholder="phone" />
                <input className="password" type="password" value="" name="password" placeholder="password" />
                <input className="re-password" type="password" value="" name="re-password" placeholder="re-password" />
                <button className="btn-login" type="submit">Register</button>
                <div className="cover-forgot"><p className="forgot-password">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p></div>
              </form>
              <div className="cover-link-register"><span>Have an account? </span><NavLink to="/login">Login</NavLink></div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mix"></div>
          </div>
        </div>
      );
  }
}

export default RegisterPage;