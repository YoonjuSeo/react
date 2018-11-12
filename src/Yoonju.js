import React, { Component } from 'react';

class Yoonju extends Component{
    render(){
        //console.log(this.props);
        const{name,age,fur}= this.props;
        return(
            <div className = "yoonju">
                <div>Name : {name}</div>
                <div>Age: {age}</div>
                <div>Fur: {fur}</div>
            </div>
        )
    }
}

export default Yoonju