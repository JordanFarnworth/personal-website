import React, { Component, PropTypes } from 'react';
var MobileDetect = require('mobile-detect');

export default class Logo extends Component {

  determinAos(){
    if(this.props.isMobile()){
      return;
    }
    return this.props.id % 2 === 0 ? "fade-up-right" : "fade-up-left"
  }

  render() {
    return (
      <div key={this.props.id} data-aos={this.determinAos()} className="col-md-2 col-sm-4 col-xs-4 col-lg-2 text-center logo-wrapper">
        <img className="logo-img img-responsive text-center" src={this.props.name+ ".png"}></img>
      </div>
    );
  }
}

Logo.propTypes = {
  name: PropTypes.string.isRequired
};
