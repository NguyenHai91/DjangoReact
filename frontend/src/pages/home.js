
import Category from '../components/category';
import Banner from '../components/banner';
import Trend from '../components/trend';
import Discount from '../components/discount';
import Services from '../components/services';
import Socials from '../components/socials';
import Product from '../components/product';
import React, {Component} from 'react';


class HomePage extends Component {

  render() {
    return(
      <div>
        <Category />
        <Product />
        <Banner />
        <Trend />
        <Discount />
        <Services />
        <Socials />
      </div>
    );
  }
}

export default HomePage;