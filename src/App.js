import React from "react";
import { Router } from 'react-router-dom';
import history from './utilities/history.js';
import Routes from './utilities/routes.js';
class App extends React.Component {
  
  render() {
    return (
      <Router history={history}>
      <Routes />
    </Router>
    );
  }
}
export default App;
