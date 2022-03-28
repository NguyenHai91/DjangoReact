
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login, getCart } from '../redux/actions/index';
import { useHistory, Redirect, NavLink } from 'react-router-dom';


class LoginPage extends Component {
  state = {
    email: 'admin@gmail.com',
    password: 'admin',
  }

  componentDidMount() {
    if (this.props.user) {
      return (<Redirect to="/" />);
    }
  }

  valueChange = (events) => {
    events.preventDefault();
    const target = events.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }

  loginUser = (events) => {
    events.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.login(this.state);
    }
  }

  disableSubmit = () => {
    if (!this.state.email || !this.state.password) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }
    return(
      <div className="container-fluid login">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 mix"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 mix">
            <form className="form" onSubmit={this.loginUser} action='post'>
              <div className="logo-ashion"><img src="assets/img/logo.png" /></div>
              <input className="username" type="text" value={this.state.email} onChange={this.valueChange} name="email" placeholder="email" />
              <input className="password" type="password" value={this.state.password} onChange={this.valueChange}  name="password" placeholder="password" />
              <button className="btn-login" type="submit" disabled={this.disableSubmit}>login</button>
              <div className="cover-forgot"><a className="forgot-password" href="#">Forgot password?</a></div>
            </form>
            <div className="cover-link-register"><span>Don't have an account? </span><NavLink to="/register">Register</NavLink></div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mix"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user_data.user,
    token: state.user_data.token,
    refresh: state.user_data.refresh,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    login: (user) => {
      dispatch(login(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);