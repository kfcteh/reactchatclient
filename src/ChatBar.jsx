import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {

    super(props);
    this.state = {newMessage: 'Type a message and hit ENTER'};
    this.onChangeNewMessage = this.onChangeNewMessage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChangeCurrentUser = this.onChangeCurrentUser.bind(this);
    
  }

  handleKeyPress(event) {

    if(event.key === 'Enter') {
      console.log('Enter Key Pressed!!!!!!!!');

      var messageObject = {
        username : this.props.currentUser,
        message : this.state.message
      }

      this.props.sendMessageToServer(messageObject);
    }

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
      <div id="flexBox">
        <div id="username-label">
          <label>User Name</label>
        </div>
        <div id="username">
          <input type="text" placeholder={this.props.currentUser} onChange={this.onChangeCurrentUser} onKeyDown={this.handleKeyPress}/>
        </div>
        <div id="new-message">
          <input type="text" placeholder={this.state.newMessage} onChange={this.onChangeNewMessage} onKeyDown={this.handleKeyPress}/>
        </div>
     </div>
    );
  }
}

export default ChatBar;
