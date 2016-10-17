import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from '../components/Icon.jsx';
import Logo from '../components/logo.jsx';
import AOS from 'aos';
import Parallax from 'parallax-scroll';
var MobileDetect = require('mobile-detect');

export class Index extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount(){
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    if(this.props.isMobile()){
      Interdimensional.charge();
    }
  }

  componentDidMount(){
    Interdimensional.kick();
    $("#main").animate({ scrollTop: 0 }, "fast");
    $('#intro').css("background-image", "url(space.jpg)");
    if(this.props.isMobile()){
      $('#skills').css("height", "1875");
      $('#intro').css("height", "850");
    }else{
      var parallax = new Parallax('#skills', {
        speed: 0.2
      });
      parallax.animate();
      var parallaxMain = new Parallax('#main-img', {
        speed: 0.1
      });
      parallaxMain.animate();
    }
  }


  renderLogos() {
    return this.props.logos().map((logo) => (
      <Logo id={logo._id} key={logo._id} name={logo.name} height={logo.height} isMobile={this.props.isMobile} />
    ));
  }

  renderIcons() {
    return this.props.icons().map((icon) => (
      <Icon id={icon._id} key={icon._id} name={icon.name} link={icon.link} />
    ));
  }

  renderBreaks(count){
    var breaks = []
    for(var i = 0; i < count; i++){
      breaks.push(<br key={i} ></br>)
    }
    return(breaks)
  }

  dataAos(string){
    if(this.props.isMobile()){
      return;
    }
    return string;
  }

  render() {
    return (
      <div id="main" >
        <div id="intro">
          {this.renderBreaks(3)}
          <img data-aos={this.dataAos("flip-left")} data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="img-responsive img-circle " id="main-img" src="https://s3-us-west-2.amazonaws.com/videos-jordan/me.jpg" ></img>
          {this.renderBreaks(1)}
          <h1 data-aos={this.dataAos("zoom-out")} >Jordan Farnworth</h1>
          {this.renderBreaks(1)}
          <div data-aos={this.dataAos("zoom-out")} >
            <h3>Full Stack Web Developer - Data Scientist - Contract Programming Consultant</h3>
            {this.renderBreaks(1)}
            <a href="http://brightbytes.net/" target="blank" >
              <img className="center-block" id="bb-logo" src="brightbytes.png" ></img>
            </a>
          </div>
          <p>farnworth.jordan@gmail.com</p>
        </div>

        <div id="skills">
          <div>
            <h2 data-aos={this.dataAos("zoom-out")} id="good-at" className="text-center">Things I am good at</h2>
            <div className="row">
              {this.renderLogos()}
            </div>
          </div>
        </div>

        <div id="history">
          <h1>History</h1>
        </div>

        <div id="clients">
          <h1>Clients</h1>
        </div>

        <div id="social-media">
          <h1>Social Media</h1>
          {this.renderIcons()}
        </div>
      </div>
    );
  }
}
