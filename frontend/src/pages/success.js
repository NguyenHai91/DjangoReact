
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Success extends Component {

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container-fluid success-cover">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mix">
              <div className="message-success">
                <p>Your ordering successfully!</p>
                <p>Thank you</p>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mix">
          <div className="cover-submit">
            <button className="btn-go-purchasing btn btn-default" onClick={this.goHome}>Go on purchase</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Success);