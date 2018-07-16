import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import { News } from './components/News';

class App extends Component {
  render() {
    return (
     <Router>

        <Route exact path="/" component = {Home} />
        <Route path="/About" component = {About} />
        <Route path ="/News" component = {News} />

     </Router>  
      
    );
  }
}

export default App;
