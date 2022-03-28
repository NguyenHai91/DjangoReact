
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToWishlist, getWishlist, deleteItemInWishlist, addWishlistToCart } from '../redux/actions/index';


class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getWishlist();
  }

  deleteItem = (id) => {
    this.props.deleteItemInWishlist(id);
  };

  addCart = (idProduct, idItem) => {
    this.props.addItemToCart(idProduct, idItem);
  };

  showItemsInWishlist = (items) => {
    let elementItems = null;
    {if (items.length > 0) {
      elementItems = items.map((item, index) => {
        return (
            <tr key={index}>
              <td className="table-id"><div className="item-id">{index+1}</div></td>
              <td className="table-image"><img className="item-img table-td" src={item.product.image} /></td>
              <td className="table-name"><div className="item-name">{item.product.title}</div></td>
              <td className="table-price"><div className="item-price">$ {item.product.price}</div></td>
              <td className="table-add-cart"><div className=" btn-add-cart" onClick={() => this.addCart(item.product.id, item.id)}>add cart</div></td>
              <td className="table-action">
                <button type='button' className="btn btn-del" onClick={() => this.deleteItem(item.id)}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>
              </td>
            </tr>
        );
      });
    } else {
      elementItems = (
        <tr>
          <td className="not-item">Wishlist is empty!</td>
        </tr>
      );
    }}
    return elementItems;
  }

  render() {
    const {wishlist} = this.props;
    return(
      <div className="container-fluid main wishlist">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 mix">
            <table className="table-cart">
              <tbody>
                { this.showItemsInWishlist(wishlist.items) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProductToWishlist: (id) => {
      dispatch(addProductToWishlist(id));
    },
    addItemToCart: (idProduct, idItem) => {
      dispatch(addWishlistToCart(idProduct, idItem));
    },
    deleteItemInWishlist: (index) => {
      dispatch(deleteItemInWishlist(index));
    },
    getWishlist: () => {
      dispatch(getWishlist());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);