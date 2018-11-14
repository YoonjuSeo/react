import React from 'react';

const Yoonju =({info})=>{
//     const infoList = info.map(item => {
//         return (
//         <div className = "yoonju" key={item.id}> {/* key has to be unique */}
//             <div>Name : {item.name}</div>
//             <div>Age: {item.age}</div>
//             <div>Color: {item.color}</div>
//         </div>
//         )
//     });
    return(
        <div className="info-list">
            {
                info.map(item =>{
                    return item.age >20?(
                        <div className = "item" key={item.id}>
                            <div>Name: {info.name}</div>
                            <div>Age: {info.age}</div>
                            <div>Color: {info.color}</div>
                        </div>
                    ) :null
                })
            }
        </div>
    );
}

export default Yoonju;