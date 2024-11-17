import React, { useState } from "react";
import "../css/chatbot.css"; // Import the CSS file

function chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {s
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {/* Floating Icon */}
      <div className="floating-icon" onClick={toggleChat}>
        💬
      </div>

      {/* Chatbot UI with animation */}
      {isChatOpen && (
        <div className="chat-window">
          <ChatBot />
        </div>
      )}
    </div>
  );
}

export default chatbot;
