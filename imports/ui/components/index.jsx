import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from '../components/Icon.jsx';
var MobileDetect = require('mobile-detect');

export class Index extends Component {
  constructor(props) {
    super(props)
  }

  listIcons() {
    return [
      {_id: 1, name: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100009464020291'},
      {_id: 2, name: 'fa-twitter', link: 'https://twitter.com'},
      {_id: 3, name: 'fa-linkedin-square', link: 'https://www.linkedin.com/in/jordan-farnworth-55820587'},
      {_id: 4, name: 'fa-github-alt', link: 'https://github.com/jordanfarnworth'}
    ]
  }

  renderIcons() {
    return this.listIcons().map((icon) => (
      <Icon id={icon._id} key={icon._id} name={icon.name} link={icon.link} />
    ));
  }

  render() {
    return (
      <div id="main">
        <h1>Jordan Farnworth</h1>
        <img className="img-responsive center-block" id="main-img" src="https://s3-us-west-2.amazonaws.com/videos-jordan/me.jpg" ></img>
        <p>Full Stack Developer</p>
        <p>at <span><a id="inst-link" href="https://www.instructure.com/" target="_blank" >Instructure</a></span></p>
        <p>farnworth.jordan@gmail.com</p>
        <div id="icons">
          {this.renderIcons()}
        </div>
      </div>
    );
  }
}
