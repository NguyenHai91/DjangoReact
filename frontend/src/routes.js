
import Reac, {Component} from 'react';
import {Route, Switch, withRouter, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import ProductPage from './pages/product';
import ProductDetailsPage from './pages/product_details';
import NotFound from './pages/NotFound';
import CartPage from './pages/cart';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Checkout from './pages/checkout';
import Success from './pages/success';
import Wishlist from './pages/wishlist';
import {connect} from "react-redux";



class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route
          path='/' exact
          component={({location}) => <HomePage location={location}/>}
        />
        <Route
          path='/category/:id/details' exact
          component={({location, match}) => <ProductPage location={location} match={match}/>}
        />
        <Route
          path='/product/:id' exact
          component={({location, match}) => <ProductDetailsPage location={location} match={match}/>}
        />
        <Route
          path='/men' exact
          component={({location, match}) => <ProductPage location={location} match={match}/>}
        />
        <Route
          path='/women' exact
          component={({location, match}) => <ProductPage location={location} match={match}/>}
        />
        <Route
          path='/kids' exact
          component={({location, match}) => <ProductPage location={location} match={match}/>}
        />
        <Route
          path='/accessories' exact
          component={({location, match}) => <ProductPage location={location} match={match} />}
        />
        <Route
          path='/cart' exact
          render={({location, match}) => (this.props.user ? <CartPage location={location} match={match} /> : <Redirect to="/login"/>)}
        />
        <Route
          path='/wishlist' exact
          component={({location, match}) => (this.props.user ? <Wishlist location={location} match={match} /> : <Redirect to="/login"/>)}
        />
        <Route
          path='/login' exact
          component={({location}) => <LoginPage location={location} />}
        />
        <Route
          path='/register' exact
          component={({location}) => <RegisterPage location={location}/>}
        />
        <Route
          path='/checkout' exact
          component={({location}) => <Checkout location={location} />}
        />
        <Route
          path='/success' exact
          component={({location}) => <Success location={location} />}
        />
        <Route
          path='' exact
          component={() => <HomePage/>}
        />
      </Switch>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user_data.user,
  }
};

export default connect(mapStateToProps)(MyRouter);