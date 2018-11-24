import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
      </div>
      </Router>
    );
  }
}

export default App;
