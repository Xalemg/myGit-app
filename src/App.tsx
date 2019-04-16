import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LandingPage from "./containers/landingPage/LandingPage";
import Home from "./containers/MenuAppBar/MenuAppBar";
class App extends Component<any,any> {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      </div>
      </Router>
    );
  }
}

export default App;
