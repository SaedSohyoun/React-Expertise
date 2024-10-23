import React, { useState } from 'react';
import './App.css';
import CreateMessage from './components/CreatMessage';
import MessageList from './components/MessageList';

function App() {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="container">
            <h1>Twitter Clone</h1>
            <CreateMessage addMessage={addMessage} />
            <MessageList messages={messages} />
        </div>
    );
}

export default App;
