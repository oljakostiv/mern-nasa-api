import React from "react";
import {connect} from "react-redux";
import {createCollection} from "../redux/Actions";

class CreateCollectionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();

        const {name} = this.state;

        if (name.trim()) {
            return
        }

        const newCollection = {
            name, id: Date.now().toString()
        };

        this.props.createCollection(newCollection)
        this.setState({name: ''});
    }

    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }

    render() {
        return (
            <form className="col s12" onSubmit={this.submitHandler}>
                <div className="row">
                    <div className="input-field col s6">
                        <label htmlFor="icon_prefix2">Add name</label>
                        <input type="text"
                               className="materialize-textarea input-color"
                               id="title"
                               value={this.state.name}
                               name="name"
                               onChange={this.changeInputHandler}/>
                    </div>
                    <button className="btn-floating waves-effect waves-light black" type="submit">
                        <span className="t15">+</span>
                    </button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createCollection
}

export default connect(null, mapDispatchToProps)(CreateCollectionForm);
