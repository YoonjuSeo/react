import React, { Component } from 'react';
import Yoonju from './Yoonju'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome</p>
        <Yoonju name="Soma" age="3" fur="brown"/>
        <Yoonju name="Clover" age = "2" fur="white"/>
      </div>
    );
  }
}

export default App;
