import React from 'react';
import PropTypes from 'prop-types';
import '../../pages/CollectionsPage/style.css'

export default function UserMessage (props) {
    let message = props.message;
    if (typeof message === 'object') {
        message = props.message.message;
    }
    return (
        <div className="user-message">{message}</div>
    );
}

UserMessage.propTypes = {
    message: PropTypes.string
};
