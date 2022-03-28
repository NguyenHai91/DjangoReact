
import React, {Component} from 'react';
import { getProduct, addProductToCart, addProductToWishlist } from '../redux/actions/index';
import {connect} from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


class ProductDetailsPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.props.fetchProduct(id);
  }

  addItemToCart = (id) => {
    if (this.props.user) {
      this.props.addItemToCart(id);
    } else {
      this.props.history.push('/login');
    }
  }

  addProductToWishlist = (idProduct) => {
    if (this.props.user) {
      const id = parseInt(idProduct);
      this.props.addProductToWishlist(id);
    } else {
      this.props.history.push('/login');
    }
  }
  
  render() {
    const { product } = this.props;
    if (!product) {
      return ('Product not found!');
    }
    return(
      <div className="product-details">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mix">
            <div className="product__item">
              <div className="product__item__pic set-bg" data-setbg={`http://127.0.0.1:8000${product.image}`} style={{backgroundImage: `url(http://127.0.0.1:8000${product.image})`}}>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mix">
          <div className="product__item__text">
              <h6>{product.title}</h6>
              <p>Brand: <span>Adida</span></p>
              <div className="rating">Rating: 
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="product__price">$ {product.price}</div>
              <div className="cover-button">
                <button type='button' className="btn btn-danger btn-wishlist" onClick={() => this.addProductToWishlist(product.id)}><span className="icon_heart_alt"></span></button>
                <button type='button' className="btn btn-success" onClick={() => this.addItemToCart(product.id)}>add cart</button>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user_data.user,
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    fetchProduct: (id) => {
      dispatch(getProduct(id));
    },
    addItemToCart: (id) => {
      dispatch(addProductToCart(id));
    },
    addProductToWishlist: (product) => {
      dispatch(addProductToWishlist(product));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetailsPage));