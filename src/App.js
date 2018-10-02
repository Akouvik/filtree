import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tree from './filetree/components/Tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className='tree'>
          <Tree />
        </div>

        <div className='footer'>
          <p> Footer. </p>
        </div>

      </div>
    );
  }
}

export default App;
