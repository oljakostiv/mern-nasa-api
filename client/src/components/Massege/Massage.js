import React from 'react';
import PropTypes from 'prop-types';

export default function Message (props) {
    let message = props.message;
    if (typeof message === 'object') {
        message = props.message.message;
    }
    return (
        <div className="message">{message}</div>
    );
}

Message.propTypes = {
    userMessage: PropTypes.string
};
