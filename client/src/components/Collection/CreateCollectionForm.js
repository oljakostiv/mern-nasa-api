import React from "react";

export default class CreateCollectionForm extends React.Component {
    constructor(props) {
        super(props);
    this.state = {}
    }

    submitHandler = event => {
        event.preventDefault()
    }
    render() {
        return(
            <form className="col s12" onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="input-field col s6">
                        <label htmlFor="icon_prefix2">Add name</label>
                        <input type="text" className="materialize-textarea input-color" id="title"/>
                    </div>
                    <button className="btn-floating waves-effect waves-light black" type="submit">
                        <span className="t15">+</span>
                    </button>
                </div>
            </form>
        )
    }
}
