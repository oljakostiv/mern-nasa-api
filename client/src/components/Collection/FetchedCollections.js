import React from "react";
import {connect} from 'react-redux'

export default ({collections}) => {
    if (!collections.length) {
        return <button className="btn btn-flat">Open Mars!</button>
    }
    return(
        <div>Coll</div>
    )
}
