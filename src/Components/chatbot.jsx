import React, { useState } from 'react';
import "../css/chatbot.css";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a chatbot reply
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Hello! How can I help you?', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot">
      {/* Floating Icon */}
      {!isOpen && (
        <button
          className="chatbot-icon"
          onClick={() => setIsOpen(true)}
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with us!</span>
            <button onClick={() => setIsOpen(false)} className="close-button">
              ✖
            </button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
