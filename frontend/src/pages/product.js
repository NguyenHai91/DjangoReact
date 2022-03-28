
import Category from '../components/category';
import Product from '../components/product';
import Trend from '../components/trend';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  requestListProducts,
  getProductWithNameCategory,
  addProductToCart,
  addProductToWishlist
} from '../redux/actions/index';
import {NavLink} from "react-router-dom";


class ProductPage extends Component {

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    const {category} = this.props.location.state;
    this.props.fetchProductWithNameCategory(category);
  }

  addProductToCart = (id) => {
    this.props.addProductToCart(id);
  };

  addProductToWishlist = (id) => {
    this.props.addProductToWishlist(id);
  };

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix">
            <div className="product__item">
            <div style={{backgroundImage: `url(http://127.0.0.1:8000${product.image})`}} className="product__item__pic set-bg" data-setbg={`http://127.0.0.1:8000${product.image}`}>
            <ul className="product__hover">
              <li><a href={`http://127.0.0.1:8000${product.image}`} className="image-popup"><span className="arrow_expand"></span></a></li>
              <li onClick={() => this.addProductToWishlist(product.id)}><span className="add-wishlist"><span className="icon_heart_alt"></span></span></li>
              <li onClick={() => this.addProductToCart(product.id)}><span className="add-wishlist"><span className="icon_bag_alt"></span></span></li>
            </ul>
            </div>
            <div className="product__item__text">
            <h6><NavLink to={`/product/${product.id}`}>{product.title}</NavLink></h6>
            <div className="product__price">${product.price}</div>
            </div>
            </div>
            </div>
        );
      });
    }
    return result;
  }
  
  render() {
    return(
      <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="section-title">
                <h4>New product</h4>
                </div>
              </div>
              <div className="col-lg-8 col-md-8">
              </div>
            </div>
            <div className="row property__gallery">
              { this.showProducts(this.props.products) }
            </div>
          </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductWithNameCategory: (name_cate) => {
      dispatch(getProductWithNameCategory(name_cate));
    },
    addProductToCart: (id) => {
      dispatch(addProductToCart(id));
    },
    addProductToWishlist: (id) => {
      dispatch(addProductToWishlist(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);