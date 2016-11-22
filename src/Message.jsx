import React, {Component} from 'react';

class Message extends Component {

  render() {

    console.log("Rendering <Message/>");

    let messageClass;

    if(this.props.origin === 'incoming')
    {
      messageClass = "message triangle-isosceles incoming-message";
    }else {
      messageClass = "message triangle-isosceles outgoing-message";
    }

    return (
      <div className={messageClass}>
        <div className="padding-left-right-10px"><span>{this.props.userName}</span></div>
        <div className="padding-left-right-10px"><span>{this.props.content}</span></div>
        <div className="padding-left-right-10px"><span>{this.props.timestamp}</span></div>
      </div>

    );
  }
}

export default Message;
