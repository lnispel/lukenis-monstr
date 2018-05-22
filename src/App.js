import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import Portfolio from './components/Portfolio.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import PageShell from './components/PageShell'
import styled from 'styled-components';
import Drilldown from 'react-router-drilldown';
import { Router, Route} from 'react-router-dom';
import Header from './components/Header.js';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <AppHolder>
        <Router
        history={history}
        >
          <div>
            <Header/>
            <Drilldown>
              <Route exact path="/" component={PageShell(Home)}/>
              <Route path="/about_me" component={PageShell(About)}/>
              <Route path="/portfolio" component={PageShell(Portfolio)}/>
              <Route path="/contact" component={PageShell(Contact)}/>
            </Drilldown>
          </div>
        </Router>
      </AppHolder>
    );
  }
}

export default App;

const AppHolder = styled.div `
  text-align: center;
  background: linear-gradient(#efefef, #f4eded);
  min-height: 100%;
  height: fit-content;
`
