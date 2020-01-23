import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./componets/HomePage";

class App extends React.Component {
  render() {
    return (
        <HomePage firstName="David" />
      );
  }

}

export default App;
