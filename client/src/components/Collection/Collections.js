import React from "react";
import {connect} from 'react-redux'
import CollectionCard from "./CollectionCard";
import './Collection.css';

export default ({collections}) => {
    if (!collections.length) {
        return (
                <div className="m5r">
                    <button className="btn btn-flat btn-text">Show up!</button>
                </div>
            )
    }
    return collections.map(collection => <CollectionCard collection={collection} key={collection}/>)
};
