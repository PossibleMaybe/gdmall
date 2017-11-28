import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Video from './components/Video/Video';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route path="/body" component={Body} />
          <Route path="/footer" component={Footer} />
          <ul>
            <li>
              <Link to="/body">Body</Link>
              <Link to="/footer">Footer</Link>
            </li>
          </ul>
        </div>
      </Router>

    );
  }
}

export default App;
