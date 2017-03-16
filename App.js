import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './Header.css';
import Header from './Header';
import Panel from './Panel';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Panel />
      </div>  
    );
  }
}

export default App;
