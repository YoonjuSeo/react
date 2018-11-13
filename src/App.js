import React, { Component } from 'react';
import Yoonju from './Yoonju'

class App extends Component {
  state = {
    info : [
      {name: 'Soma', age:'3', color:'brown', id:1},
      {name: 'Clover', age:'2', color:'white', id:2},
      {name: 'Chance', age:'1', color:'brown', id:3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome</p>
        <Yoonju info={this.state.info}/>
      </div>
    );
  }
}

export default App;
