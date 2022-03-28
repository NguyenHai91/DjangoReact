
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProductsBestSeller, getProductsFeatured, getProductsTrend} from "../redux/actions";
import {NavLink} from "react-router-dom";


class Trend extends Component {
  componentDidMount() {
    this.props.fetchProductsTrend();
    this.props.fetchProductsBestSeller();
    this.props.fetchProductsFeatured();
  }

  render() {
    return(
      <section className="trend spad">
            <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
            <div className="section-title">
              <h4>Hot Trend</h4>
            </div>
            {this.props.trend.map((item, index) => {
              return(
                  <div className="trend__item">
                    <div className="trend__item__pic">
                    <img src={`http://127.0.0.1:8000${item.image}`} alt="" />
                  </div>
                  <div className="trend__item__text">
                  <h6 className="trend__item__title"><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></h6>
                  <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ {item.price}</div>
                  </div>
                  </div>
              );
            })}
            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
            <div className="section-title">
            <h4>Best seller</h4>
            </div>
            {this.props.bestseller.map((item, index) => {
              return(
                  <div className="trend__item">
                  <div className="trend__item__pic">
                  <img src={`http://127.0.0.1:8000${item.image}`} alt="image" />
                  </div>
                  <div className="trend__item__text">
                  <h6 className="trend__item__title"><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></h6>
                  <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ {item.price}</div>
                  </div>
                  </div>
              );
            })}

            </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="trend__content">
            <div className="section-title">
            <h4>Featured</h4>
            </div>
            {this.props.featured.map((item, index) => {
              return(
                  <div className="trend__item">
                  <div className="trend__item__pic">
                  <img src={`http://127.0.0.1:8000${item.image}`} alt="image" />
                  </div>
                  <div className="trend__item__text">
                  <h6 className="trend__item__title"><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></h6>
                  <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ {item.price}</div>
                  </div>
                  </div>
              );
            })}


            </div>
            </div>
            </div>
            </div>
            </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trend: state.trend,
    bestseller: state.bestseller,
    featured: state.featured,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsTrend: () => {
      dispatch(getProductsTrend());
    },
    fetchProductsBestSeller: () => {
      dispatch(getProductsBestSeller());
    },
    fetchProductsFeatured: () => {
      dispatch(getProductsFeatured());
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Trend);