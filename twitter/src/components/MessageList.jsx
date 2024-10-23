import React from 'react';
import Message from './Message';

function MessageList({ messages }) {
    return (
        <ul>
            {messages.map((msg, index) => (
                <Message key={index} text={msg} />
            ))}
        </ul>
    );
}

export default MessageList;
