
import React, { Component } from 'react';
import { getCart, deleteItemInCart, updateQuantityItem } from '../redux/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class CartPage extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchProductsInCart();
  }
  
  updateQuantity = (id_item, quantity) => {
      this.props.updateQuantityItem(id_item, quantity);
  }

  deleteItem = (id_item) => {
    this.props.deleteItemInCart(id_item);
  }

  checkout = () => {
    if(this.props.cart && this.props.cart.items.length > 0) {
      if (this.props.user) {
        this.props.history.push('checkout');
      } else {
        this.props.history.push('login');
      }
    }
  }

  disableCheckout = () => {
    if(this.props.cart.items && this.props.cart.items.length > 0) {
      return false;
    }
    return true;
  }

  showProductsInCart = (cart) => {
    let eleProducts = null;
    if (cart.items && cart.items.length > 0)
    { 
      const items =  cart.items;
        eleProducts = items.map((item, index) => {
          return(
              <tr key={index}>
                <td className="table-id"><div className="item-id">{index+1}</div></td>
                <td className="table-image"><img className="item-img table-td" src={item.product.image} /></td>
                <td className="table-name"><div className="item-name">{item.product.title}</div></td>
                <td className="table-qty"><div className="item-qty">
                  <button type='button' className="btn btn-sub" onClick={() => this.updateQuantity(item.id, -1)}>-</button>
                  <input className="" type="text" name="quantity" value={item.quantity} readOnly/>
                  <button type='button' className="btn btn-plus" onClick={() => this.updateQuantity(item.id, +1)}>+</button>
                </div></td>
                <td className="table-price"><div className="item-price">$ {item.product.price}</div></td>
                <td className="table-action">
                  <button type='button' className="btn btn-del" onClick={() => this.deleteItem(item.id)}>
                    <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
          );
        });
    } else {
      eleProducts = (
        <tr>
          <td className="not-item">Cart is empty!</td>
        </tr>
      );
    }
    return eleProducts;
  }

  showDetailProducts = (cart) => {
    let eleListProducts = null;
    if(cart.items && cart.items.length > 0) {
      return(
        eleListProducts = cart.items.map((item, index) => {
          return(
            <tr key={index} className="item">
              <td>{item.product.title}</td>
              <td className="td-quantity">{item.quantity}</td>
              <td>${item.product.price}/item</td>
            </tr>
          );
        })
      );
    }
    return eleListProducts;
  }
  render() {
    const cart = this.props.cart;
    return(
      <div className="container-fluid main cart-cover">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 mix">
            <table className="table-cart">
              <tbody>
                {this.showProductsInCart(cart)}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 mix">
            <div className="details_order">
              <h6 className="title">Details Order</h6>
              <table className="list-item table-details">
                <thead className="head">
                  <tr>
                    <th className="col-title">item</th>
                    <th className="col-quantity">quantity</th>
                    <th className="col-amounts">price</th>
                  </tr>
                </thead>
                <tbody>
                  {this.showDetailProducts(cart)}
                </tbody>
              </table>
              <div className="total_amount">Total Tax: $ {cart.totalTax}</div>
              <div className="total_amount">Total Amount: $ {cart.totalAmount}</div>
              <div className="cover-checkout">
                <button type='button' disabled={this.disableCheckout()} className="btn-checkout btn btn-success" onClick={this.checkout}>checkout</button>
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
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsInCart: () => {
      dispatch(getCart());
    },
    deleteItemInCart: (id) => {
      dispatch(deleteItemInCart(id));
    },
    updateQuantityItem: (id_item, num) => {
      dispatch(updateQuantityItem(id_item, num));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartPage));