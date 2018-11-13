import React, { Component } from 'react';

const Yoonju =(props)=>{
    //console.log(this.props);
    const{info}= props;
    const infoList = info.map(item => {
        return (
        <div className = "yoonju" key={item.id}> {/* key has to be unique */}
            <div>Name : {item.name}</div>
            <div>Age: {item.age}</div>
            <div>Color: {item.color}</div>
        </div>
        )
    })
    return(
        <div className="info-list">
            {infoList}
        </div>
    )
}

export default Yoonju