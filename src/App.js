import React, { Component } from 'react';
import Yoonju from './Yoonju'
import AddInfo from './AddInfo'

class App extends Component {
  state = {
    info : [
      {name: 'Soma', age:3, color:'brown', id:1},
      {name: 'Clover', age:2, color:'white', id:2},
      {name: 'Chance', age:1, color:'brown', id:3}
    ]
  }
  AddInfo=(item)=>{
    //console.log(info);
    item.id = Math.random();
    let info =[...this.state.info, item];
    this.setState({
      info : info
    });
  }
  deleteInfo = (id) =>{
    let info = this.state.info.filter(item=>{
      return item.id !== id
    });
    this.setState({
      info: info
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <Yoonju info={this.state.info} deleteInfo={this.deleteInfo}/>
        <AddInfo addInfo={this.addInfo}/>
      </div>
    );
  }
}

export default App;
