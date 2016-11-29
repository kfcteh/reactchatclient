import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    console.log("Rendering <MessageList/>");
    var messages = this.props.messageList.map(function(message){
                       return (<div key={message.key}><Message origin={message.origin} timestamp={message.timestamp} userName={message.username} content={message.content}/></div>);
                     })
    return (
      <div className="box message-list">
      {messages}
        {/* <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div> */}
      </div>
    );
  }
}

export default MessageList;
