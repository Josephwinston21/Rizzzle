import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

const ChatPage = ({ conversation }) => {
    return (
        <div className="chat-page">
            <Header />
            <Chat conversation={conversation} />
            <Footer />
        </div>
    );
}

export default ChatPage;
