import React from "react";

export default ({collection}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h5 className="card-title">{collection.name}</h5>
            </div>
        </div>
    )
};
