// Application entrypoint.
// Load up the application styles
require("../styles/application.scss");
// require("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));
