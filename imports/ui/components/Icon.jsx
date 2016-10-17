import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {

  handleMouseOver(event) {
    let element = event.target
    $(element).css("color", "#A1DAED")
    $(element).animate({fontSize: "5em"}, 75)
  }

  handleMouseOut(event) {
    let element = event.target
    $(element).css("color", "white")
    $(element).animate({fontSize: "3em"}, 75)
  }

  render() {
    return (
      <a className="icons" onMouseLeave={this.handleMouseOut} onMouseEnter={this.handleMouseOver} target="blank" href={this.props.link} >
        <i id={this.props.id} className={"fa " + this.props.name} ></i>
      </a>
    );
  }
}

Icon.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
