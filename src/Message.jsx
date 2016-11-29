import React, {Component} from 'react';

class Message extends Component {

  render() {

    console.log("Rendering <Message/>");

    let messageClass;

    if(this.props.origin === 'incoming')
    {
      messageClass = "column is-half is-offset-6 margin-top-bottom";
    }else {
      messageClass = "column is-half margin-top-bottom";
    }

    return (
      <div className={messageClass}>
        <div className="padding-left-right-10px"><span><b>{this.props.userName}</b></span></div>
        <div className="padding-left-right-10px"><span>{this.props.content}</span></div>
        <div className="padding-left-right-10px"><span>{this.props.timestamp}</span></div>
      </div>

    );
  }
}

export default Message;
