import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/chatbot/ask",
        { question: input }
      );
      const botMessage = { role: "assistant", content: response.data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, something went wrong.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.length === 0 ? (
                <div className="placeholder-message">
                  Say something to start chatting!
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className={msg.role}>
                    {msg.content}
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleSubmit} className="chatbot-input-form">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type a message..."
                required
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
      <button className="chatbot-icon" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default Chatbot;
