import React, { useState } from 'react';

function CreateMessage({ addMessage }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            addMessage(message);
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type je bericht hier..."
            />
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default CreateMessage;
