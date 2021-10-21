import React from "react";
import {connect} from 'react-redux';
import CollectionCard from "./CollectionCard";
import './Collection.css';

const Collections = ({syncCollections}) => {
    if (!syncCollections.length) {
        return (
                <div className="m5r">
                    {/*<button className="btn btn-flat btn-text">Show up!</button>*/}
                    <h4>No content!</h4>
                </div>
            )
    }
    return syncCollections.map(collection => <CollectionCard collection={collection} key={collection.id}/>);
};

const mapStateToProps = state => {
    return {
        syncCollections: state.collection.collections
    }
}

export default connect(mapStateToProps, null)(Collections);
