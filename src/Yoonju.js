import React from 'react'
//ninjas == info
//ninja == item

const Yoonju =({info, deleteInfo})=>{
    return (
        <div className="info-list">
            {
                info.map(item=>{
                    return(
                        <div className="item" key={item.id}>
                            <div>Name: {item.name}</div>
                            <div>Age: {item.age}</div>
                            <div>Color: {item.color}</div>
                            <button onClick={()=>{deleteInfo(item.id)}}>Delete item</button>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Yoonju;