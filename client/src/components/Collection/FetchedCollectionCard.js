import React from "react";


export default (props) => {
    const {item, item: {img_src: imgUrl}} = props;

    const path = 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/';
    return (
        <div className="card">
                   <div className="card-content">
                       <h5 className="card-title">{item.title}</h5>
                       <img style={{width: '200px'}} src={path + imgUrl} alt="mars"/>
                  </div>
               </div>
    )
};
