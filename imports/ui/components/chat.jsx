import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Input } from 'react-bootstrap';
import { Messages } from '../../../lib/collections';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import { Mongo } from 'meteor/mongo';
import { createContainer } from 'meteor/react-meteor-data';

export class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {messages: [], messageText: ""};


    this.helpers = {
      messages() {
        return Messages.find().fetch();
      }
    }
  }

  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.login));
  }

   componentWillMount() {
     this.state.messages = this.helpers.messages()
     this.setState(this.state)
   }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  renderMessages(){
    return this.helpers.messages().map((message) => (
      <p>{message.text}</p>
    ));
  }

  insertMessages(event){
    if(event.charCode == 13){
      let text = this.refs.messageText.value
      Messages.insert({userId: Meteor.user()._id, text: text, timestamp: Date.now()});
    } else {
      debugger
    }
  }

  render() {
    return (
      <div id="main">
        <h1>Instant messages</h1>
        <div id="login" ref="login">
        </div>
        <Grid>
          <Row>
            <Col md={12} >
              <div className="well" id="chats" >
                <div id="messages_frd" >
                  {this.renderMessages()}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <input ref="messageText" onKeyDown={this.insertMessages.bind(this)} ref="messageText" />
            </Col>
          </Row>
          <h5>Press enter to send message</h5>
        </Grid>
      </div>
    );
  }
}

Chat.propTypes = {
  currentUser: React.PropTypes.object,
  messages: React.PropTypes.array,
  listLoading: React.PropTypes.bool
};

export default createContainer((props) => {
  var handle = Meteor.subscribe('messages');

  return {
    currentUser: Meteor.user(),
    messages: Messages.find({}).fetch(),
    listLoading: ! handle.ready()
  };
}, Chat);
