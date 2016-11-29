import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {

    super(props);
    this.state = {newMessage: 'Type a message and hit ENTER'};
    this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChangeCurrentUser = this.onChangeCurrentUser.bind(this);
    this.handleButtonPush = this.handleButtonPush.bind(this);
    this.sendMessageToServer = this.sendMessageToServer.bind(this);

  }
  handleButtonPush() {

    this.sendMessageToServer();


  }

  handleKeyPress(event) {

    if(event.key === 'Enter') {
      console.log('Enter Key Pressed!!!!!!!!');
      this.sendMessageToServer();
    }

  }
  sendMessageToServer() {

    var messageObject = {
      username : this.props.currentUser,
      message : this.state.message
    }

    this.props.sendMessageToServer(messageObject);

  }

  onChangeCurrentUser(event) {

    this.props.changeCurrentUser(event.target.value);

  }

  onChangeNewMessage(event) {

    this.setState({message: event.target.value});

  }
  render() {

    console.log("Rendering <ChatBar/>");

    return (

      <div className="control is-grouped padding-left-right">
        <p className="control">
          <input className="input is-large" type="text" placeholder={this.props.currentUser} onChange={this.onChangeCurrentUser} onKeyDown={this.handleKeyPress}/>
        </p>
        <p className="control is-expanded">
          <input className="input is-large" type="text" placeholder={this.state.newMessage} onChange={this.onChangeNewMessage} onKeyDown={this.handleKeyPress}/>
        </p>
        <p className="control">
          <a className="button is-primary send-button" onClick={this.handleButtonPush}>
            SEND
          </a>
        </p>
     </div>
    );
  }
}

export default ChatBar;
