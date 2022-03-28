
import React, {Component} from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import jwtDecode from 'jwt-decode';
import { logout, getCart, getWishlist } from '../../redux/actions/index';


const CustomLink = ({label, to, isExact}) => {
  return (
    <Route path={to} exact={isExact} children={(match) => {
      return (
        <NavLink to={to} exact className=''>{label}</NavLink>
      );
    }} />
  );
}


class Header extends Component {

  componentDidMount() {
    this.props.getCart();
    this.props.getWishlist();
  }

  logout = () => {
    this.props.logout();
  }

  authUser = () => {
    if (this.props.user) {
      return(
        <div className="header__right__auth">
            <div className="user">
              {this.props.user}
              <div className="sub-menu-user">
                <div className="profile">profiles</div>
                <div className="logout" onClick={this.logout}>logout</div>
              </div>
            </div>
        </div>
      );
    } else {
      return (
        <div className="header__right__auth">
          <a href="/login">Login</a>
        </div>
      );
    }
  }

  render() {
    if (this.props.user) {
      const decoded = jwtDecode(this.props.token);
      const accessExp = parseInt(decoded.exp) * 1000;
      if (accessExp < Date.now()) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
      }
    }
    const cartItems = this.props.cart.items ? this.props.cart.items.length : 0;
    const wishlistItems = this.props.wishlist.count ? this.props.wishlist.count : 0;

    return (
      <header className="header">
              <div className="container-fluid">
              <div className="row">
              <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
              <a href="/"><img src="assets/img/logo.png" alt="logo"/></a>
              </div>
              </div>
              <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
              <ul>
                <li><NavLink to={{pathname:'/', state: {'prevPath': '/'}}} exact>Home</NavLink></li>
                <li><NavLink to={{pathname:'/men', state: {'category': 'men'}}} exact>Men</NavLink></li>
                <li><NavLink to={{pathname:'/women', state: {'category': 'women', 'prevPath': '/products'}}} exact>Women's</NavLink></li>
                <li><NavLink to={{pathname:'/kids', state: {'category':'kids', 'prevPath': '/products'}}}>Kids</NavLink></li>
                <li><NavLink to={{pathname:'/accessories', state: {'category':'accessories', 'prevPath': '/products'}}}>accessories</NavLink> </li>
                <li><NavLink to='/product'>About</NavLink></li>
              </ul>
              </nav>
              </div>
              <div className="col-lg-3">
              <div className="header__right">
              {this.props.user ? (
                <div className="header__right__auth">
                    <div className="user">
                      {this.props.user}
                      <div className="sub-menu-user">
                        <div className="profile">profiles</div>
                        <div className="logout" onClick={this.logout}>logout</div>
                      </div>
                    </div>
                </div>
                ) : (
                  <div className="header__right__auth">
                    <NavLink to="/login">Login</NavLink>
                  </div>
                )}
              <ul className="header__right__widget">
                <li><span className="icon_search search-switch"></span></li>
                <li>
                  <NavLink to="/wishlist"><span className="icon_heart_alt"></span>
                    <div className="tip">{wishlistItems}</div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cart"><span className="icon_bag_alt"></span>
                    <div className="tip">{cartItems}</div>
                  </NavLink>
                </li>
              </ul>
              </div>
              </div>
              </div>
              <div className="canvas__open">
              <i className="fa fa-bars"></i>
              </div>
              </div>
              </header>
                
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user_data.user,
    token: state.user_data.token,
    cart: state.cart,
    wishlist: state.wishlist,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {
      dispatch(logout());
    },
    getCart: () => {
      dispatch(getCart());
    },
    getWishlist: () => {
      dispatch(getWishlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);