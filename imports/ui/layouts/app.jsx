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


  isMobile() {
    var detecter = new MobileDetect(window.navigator.userAgent);
    return(detecter.match('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini'));
  }

  listIcons() {
    return [
      {_id: 1, name: 'fa-facebook', link: 'https://www.facebook.com/profile.php?id=100009464020291'},
      {_id: 2, name: 'fa-twitter', link: 'https://twitter.com'},
      {_id: 3, name: 'fa-linkedin', link: 'https://www.linkedin.com/in/jordan-farnworth-55820587'},
      {_id: 4, name: 'fa-github-alt', link: 'https://github.com/jordanfarnworth'}
    ]
  }

  listHistoryTemplates() {
    var col_four = "col-md-4 col-sm-4 col-xs-4 col-lg-4";
    return [
      {
        _id: 1,
        name: 'Instructure',
        link: 'https://www.instructure.com',
        color: "56b4f7",
        description: "          \n          \nFullstack Developer \nWorked on flagship app Canvas \nBuilt Independant LTIs\nUsed a variety of integrations",
        colStrings: col_four,
        fadeString: "fade-down-right",
        image: "instructure.png"
      },
      {
        _id: 2,
        name: 'Compworks',
        link: 'https://compworkspc.herokuapp.com',
        color: "333333",
        description: "Windows OS Hardware and Software Specialist\nConfigured Client Domains \nConfigured PC and Server Hardware \n",
        colStrings: col_four,
        fadeString: "fade-up",
        image: "compworks.png"
      },
      {
        _id: 3,
        name: 'BrightBytes',
        color: "f7ac56",
        link: 'http://brightbytes.net',
        description: "          \n          \nFullstack Web Developer \nRuby on Rails \nReactJS\nCustom Style Library",
        colStrings: col_four,
        fadeString: "fade-down-left",
        image: "brightbytes.png"
      }
    ]
  }

  listLogos() {
    return [
      {_id: 1, name: 'ajax'},
      {_id: 2, name: 'amazon'},
      {_id: 3, name: 'android'},
      {_id: 4, name: 'angular'},
      {_id: 5, name: 'ansible'},
      {_id: 6, name: 'assembly'},
      {_id: 7, name: 'backbone'},
      {_id: 14, name: 'ember'},
      {_id: 9, name: 'csharp'},
      {_id: 10, name: 'cucumber'},
      {_id: 11, name: 'digitalocean'},
      {_id: 12, name: 'docker'},
      {_id: 13, name: 'ecma'},
      {_id: 8, name: 'blackberry'},
      {_id: 15, name: 'git'},
      {_id: 16, name: 'handlebars'},
      {_id: 17, name: 'heroku'},
      {_id: 18, name: 'ios'},
      {_id: 19, name: 'java'},
      {_id: 20, name: 'javascript'},
      {_id: 21, name: 'jenkins'},
      {_id: 22, name: 'jquery'},
      {_id: 23, name: 'linux'},
      {_id: 24, name: 'meteor'},
      {_id: 25, name: 'mongo'},
      {_id: 26, name: 'mysql'},
      {_id: 27, name: 'net'},
      {_id: 28, name: 'node'},
      {_id: 29, name: 'psql'},
      {_id: 30, name: 'python'},
      {_id: 31, name: 'rails'},
      {_id: 32, name: 'react'},
      {_id: 33, name: 'rest'},
      {_id: 34, name: 'html'},
      {_id: 35, name: 'capybara'},
      {_id: 36, name: 'ruby'}
    ]
  }

  toggleCharge() {
    Interdimensional.toggle();
  }

  render() {
    return (
      <div id="myControl">
        {React.cloneElement(this.props.children, {charge: this.charge, toggleCharge: this.toggleCharge, icons: this.listIcons, historyTemplates: this.listHistoryTemplates, logos: this.listLogos, isMobile: this.isMobile.bind(this) })}
      </div>
    );
  }
}
