import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function HelpSupport() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, I'm your assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Dummy bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your query. Our team will get back to you shortly 😊" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-blue-100 m-4">
      {/* Header */}
      <div className="bg-purple-600 text-white p-4 text-lg font-semibold shadow-md">
        Help & Support Assistant
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-purple-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 shadow-md rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t flex items-center gap-2">
        <FaUserCircle className="text-gray-500 text-2xl" />
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
}
