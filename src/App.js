import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about_me" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </AppHolder>
    );
  }
}

export default App;

const AppHolder = styled.div `
  text-align: center;
  background-color: #1e0707;
  height: 100%;
`
