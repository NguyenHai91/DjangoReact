
import React, {Component} from 'react';

class Banner extends Component {
  render() {
    return(
      <section className="banner set-bg" style={{backgroundImage: "url('assets/img/banner/banner-1.jpg')"}} data-setbg="assets/img/banner/banner-1.jpg">
            <div className="container">
            <div className="row">
            <div className="col-xl-7 col-lg-8 m-auto">
            <div className="banner__slider owl-carousel">
            <div className="banner__item">
            <div className="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            <div className="banner__item">
            <div className="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            <div className="banner__item">
            <div className="banner__text">
            <span>The Chloe Collection</span>
            <h1>The Project Jacket</h1>
            <a href="#">Shop now</a>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>
            
    );
  }
}

export default Banner;