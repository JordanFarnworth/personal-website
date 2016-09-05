import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Icon extends Component {
  handleMouseOver(event) {
    let element = event.target
    $(element).css("color", "#A1DAED")
    $(element).animate({fontSize: "5em"}, 500)
  }

  handleMouseOut(event) {
    let element = event.target
    $(element).css("color", "white")
    $(element).animate({fontSize: "3em"}, 300)
  }

  render() {
    return (
      <a onMouseLeave={this.handleMouseOut} onMouseEnter={this.handleMouseOver} href={this.props.link} >
        <i id={this.props.id} className={"fa " + this.props.name} ></i>
      </a>
    );
  }
}

Icon.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
