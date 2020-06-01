import React from 'react';
import '../../styles/Message.scss';

function Message({message}){
    const styles ={
        color: message.color,
        border: `1.5px solid ${message.color}`
    };

    return (
        <div className="message" style={styles}>
            {message.msg}
        </div>
    );
};

export default Message;