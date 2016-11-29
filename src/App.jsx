import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import newId from './utils/newid.js';

class App extends Component {

  constructor (props) {

    super(props);

    this.sendMessageToServer = this.sendMessageToServer.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
    this.recievedMessageFromServer = this.recievedMessageFromServer.bind(this);
    this.updateMessages = this.updateMessages.bind(this);
    this.sendPongToServer = this.sendPongToServer.bind(this);

    var data= {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    };
    //this.state = {data : data};
    this.state = {data : data,
                  connection : null
                };
  }

  recievedMessageFromServer(e) {

    var msgObject = JSON.parse(e.data);

    if(msgObject.data === 'ping')
    {
      console.log('recieved ping!');
      this.sendPongToServer();
    }else {
      msgObject.origin = "incoming";
      console.log('incoming message!');
      this.updateMessages(msgObject);
    }
  }

  updateMessages(msgObject)
  {
    msgObject.key = newId();
    var data = this.state.data
    data.messages = data.messages.concat(msgObject);
    this.setState({data : data});
  }

  componentDidMount() {

    console.log("componentDidMount <App />");
    var conn = new WebSocket('wss://nodewschatserver.herokuapp.com');
    //var conn = new WebSocket('ws://localhost:4000');
    conn.onopen = function(e) {
      console.log("Connection established!");
      console.log(e);
    };

    conn.onmessage = this.recievedMessageFromServer;

    this.setState({connection : conn});
  }

  changeCurrentUser(currentUser) {

    var data = this.state.data;
    data.currentUser.name = currentUser;
    this.setState({data : data});
  }

  sendPongToServer() {

    this.state.connection.send('{"data": "pong"}');

  }

  sendMessageToServer(messageObject) {

    var moment = require('moment');
    var messageObject = {origin:"outgoing",username: messageObject.username, content: messageObject.message, timestamp: moment().format('h:mm:ss a')};
    this.state.connection.send(JSON.stringify(messageObject));
    this.updateMessages(messageObject);

  }

  render() {

    console.log("Rendering <App/>");

    return (
      <div>
        <nav className="navbar padding-top-bottom">
          <p className="navbar-item has-text-centered">
            <img src="http://boardperfect.azurewebsites.net/Images/support.png" alt="Chat logo" style={{height: 30, width: 30}}/>
          </p>

          <p className="navbar-item has-text-centered">
            <span className="title">React Chat Application</span>
          </p>
        </nav>
        <MessageList messageList={this.state.data.messages} />
        <footer>
        <ChatBar currentUser={this.state.data.currentUser.name} sendMessageToServer={this.sendMessageToServer} changeCurrentUser={this.changeCurrentUser}/>
        </footer>
      </div>
    );
  }
}
export default App;
