import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Icon from '../components/Icon.jsx';
import Logo from '../components/logo.jsx';
import HistoryTemplate from '../components/historyTemplates.jsx';
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

  renderHistoryTemplates(){
    var dataAos = this.dataAos;
    var isMobile = this.props.isMobile;
    return this.props.historyTemplates().map((template) => (
      <HistoryTemplate color={template.color} dataAos={dataAos} isMobile={isMobile} _id={template._id} name={template.name} image={template.image} link={template.link} description={template.description} colStrings={template.colStrings} fadeString={template.fadeString} key={template._id}></HistoryTemplate>
    ));
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
              <img className="center-block img-responsive" id="bb-logo" src="brightbytes.png" ></img>
            </a>
          </div>
          {this.renderBreaks(1)}
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
          {this.renderBreaks(12)}
          <h2 data-aos={this.dataAos("fade-down")}>Professional History Highlights</h2>

          <div id="historyTemplates" className="row">
            {this.renderHistoryTemplates()}
          </div>
        </div>

        <div id="clients">

        </div>

        <div className="text-center" id="social-media">
          {this.renderIcons()}
        </div>
      </div>
    );
  }
}
