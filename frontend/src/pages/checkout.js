
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {checkout} from '../redux/actions/index';



class Checkout extends Component {
  state = {
    first_name: 'admin',
    last_name: 'nguyen',
    phone: '0909123789',
    address: '123 viet nam',
    city: 'Ho Chi Minh'
  };
  valueChange = (events) => {
    events.preventDefault();
    const target = events.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  }

  checkout = () => {
    if (this.props.cart.items.length > 0) {
      if (this.first_name !== '' && 
        this.last_name !== '' && 
        this.state.phone !== '' && 
        this.state.address !== '') 
      {
        this.props.checkout(this.state);
        this.props.history.push('success');
      }
    }
  }

  render() {
    const cart = this.props.cart;
    return (
      <div className="container-fluid checkout-cover">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 mix">
            <form className="form form-checkout">
              <input className="first-name" type="text" value={this.state.first_name} name="first_name" placeholder="first name" onChange={this.valueChange} />
              <input className="last-name" type="text" value={this.state.last_name} name="last_name" placeholder="last name" onChange={this.valueChange} />
              <input className="phone" type="text" value={this.state.phone} name="phone" placeholder="phone" onChange={this.valueChange} />
              <textarea className="address" rows="5" value={this.state.address} name="address" placeholder="address" onChange={this.valueChange} />
              <input className="city" type="text" value={this.state.city} name="city" placeholder="city" onChange={this.valueChange} />
            </form>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 mix">
            <div className="details_order">
              <h6 className="title">Details Order</h6>
              <table className="list-item table-details">
                <thead className="head">
                  <tr>
                    <th className="col-title">item name</th>
                    <th className="col-quantity">quantity</th>
                    <th className="col-amounts">amounts</th>
                  </tr>
                </thead>
                <tbody>
                {cart.items.map((item, index) => {
                  return(
                    <tr key={index} className="item">
                      <td>Buttons tweed blazer</td>
                      <td className="td-quantity">{item.quantity}</td>
                      <td>$ {item.quantity * item.product.price}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
              <div className="total_amount">Total Tax: ${cart.totalTax}</div>
              <div className="total_amount">Total Amount: ${cart.totalAmount}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mix">
          <div className="cover-submit">
            <button className="btn-checkout btn btn-success" onClick={this.checkout}>Submit</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const  mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const  mapDispatchToProps = (dispatch, props) => {
  return {
    checkout: (data) => {
      dispatch(checkout(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));