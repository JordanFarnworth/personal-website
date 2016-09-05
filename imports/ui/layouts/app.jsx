import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from '../components/Icon.jsx';
import { Navigation } from '../components/navigation.jsx';
var MobileDetect = require('mobile-detect');

export class App extends Component {
  constructor(props) {
    super(props)

    if(this.props.location.pathname === '/'){
      location.replace("/index");
    }
  }
  componentDidMount() {
    detecter = new MobileDetect(window.navigator.userAgent);
    isMobile = detecter.match('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini')
    if(isMobile){
      $('video').hide()
      $('body').css("background-image", "url(https://s3-us-west-2.amazonaws.com/videos-jordan/monitor-933392.jpg)");
    }
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
