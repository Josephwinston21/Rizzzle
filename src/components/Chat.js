import React, { useState, useEffect } from 'react';
import { initiateVoiceCall, initiateVideoCall } from '../utils/twilioUtils';
import { sendMessageToBackendAPI } from '../utils/api';

const Chat = ({ conversation }) => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState(conversation);

    useEffect(() => {
        setChatHistory(conversation);
    }, [conversation]);

    const sendMessage = async () => {
        if (message.trim()) {
            const newMessage = {
                sender: 'You',
                text: message,
                timestamp: new Date().toISOString(),
            };

            // Update chat history locally
            setChatHistory([...chatHistory, newMessage]);

            try {
                // Send the message to the backend
                await sendMessageToBackendAPI(newMessage);
                console.log('Message sent to backend successfully');
            } catch (error) {
                console.error('Failed to send message:', error);
                // Handle message send failure (e.g., show an error to the user)
            }

            // Clear the message input field
            setMessage('');
        }
    };

    return (
        <div className="chat">
            <div className="messages">
                {chatHistory.map((msg, index) => (
                    <div key={index} className="message">
                        <p><strong>{msg.sender}:</strong> {msg.text} <small>{new Date(msg.timestamp).toLocaleTimeString()}</small></p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div className="call-options">
                <button onClick={() => initiateVoiceCall()}>Voice Call</button>
                <button onClick={() => initiateVideoCall()}>Video Call</button>
            </div>
        </div>
    );
}

// API call to send the message to the backend
const sendMessageToBackendAPI = async (message) => {
    const response = await fetch('/api/chat/sendMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    return await response.json();
};

export default Chat;


//Instructions: Enter your Twilio API credentials in the twilioUtils.js utility.
