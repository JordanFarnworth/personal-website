import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
var MobileDetect = require('mobile-detect');
import Icon from './Icon.jsx';

// App component - represents the whole app
export default class App extends Component {
  componentDidMount() {
    detecter = new MobileDetect(window.navigator.userAgent);
    isMobile = detecter.match('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini')
    if(isMobile){
      $('video').hide()
      $('body').css("background-image", "url(https://s3-us-west-2.amazonaws.com/videos-jordan/monitor-933392.jpg)");
    }
  }

  handleMobile() {
    console.log("handling...");
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
      <div id="Container">
        <div id="Video">
          <video preload="preload" id="video" autoPlay="autoplay" loop="loop">
            <source src="https://s3-us-west-2.amazonaws.com/videos-jordan/code.mp4" type="video/mp4"></source>
          </video>
          <div id="Message">
            <h1>Jordan Farnworth</h1>
            <img className="img-responsive center-block" id="main-img" src="https://s3-us-west-2.amazonaws.com/videos-jordan/me.jpg" ></img>
            <p>Full Stack Developer</p>
            <p>at <span><a id="inst-link" href="https://www.instructure.com/" target="_blank" >Instructure</a></span></p>
            <p>farnworth.jordan@gmail.com</p>
            <div id="icons">
              {this.renderIcons()}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
