import React, { Component, PropTypes } from 'react';

export default class HistoryTemplate extends Component {

  componentWillMount(){
    // debugger
  }

  handleMouseOver(){
    $("#" + this.props.name + "_" + this.props._id).css("background-color", "#" + this.props.color)
    $("#" + this.props.name + "_" + this.props._id + " h5").css("color", "white")
  }

  handleMouseOut(){
    $("#" + this.props.name + "_" + this.props._id).css("background-color", "white")
    $("#" + this.props.name + "_" + this.props._id + " h5").css("color", "#5a98fc")
  }

  prevent(){
    event.preventDefault()
  }

  renderDescription(){
    var strings = this.props.description.split("\n").map((string, index) => (
      <h5 onMouseOver={this.prevent()} onMouseOut={this.prevent()} key={this.props._id + this.props.name + index.toString()} id={"desc-" + this.props._id.toString()}> {string} </h5>
    ));
    return <div id={"desc-" + this.props._id} className="text-center">{strings}</div>
  }

  render() {
    return (
      <div id={this.props.name + "_" + this.props._id} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)} data-aos={this.props.isMobile() ? "" : this.props.fadeString} className={this.props.colStrings + "text-center historyBlock"} >
        <img onMouseOver={this.prevent()} onMouseOut={this.prevent()} src={this.props.image} id={"history-image-" + this.props._id.toString()} className="img-responsive history-image"></img>
        {this.renderDescription()}
      </div>
    );
  }
}
