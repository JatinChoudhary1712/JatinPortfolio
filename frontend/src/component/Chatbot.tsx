// src/components/Chatbot.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { X } from 'lucide-react'; // Import X icon for close button

interface Message {
  sender: 'User' | 'Assistant' | string;
  text: string;
}

const Chatbot: React.FC = () => {
  const BOT_NAME = 'Neural J';
  const [userMessage, setUserMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const BACKEND_URL = process.env.NODE_ENV === 'production' 
    ? 'https://jatinportfoliobackend.onrender.com'  // Updated Render URL
    : 'http://localhost:4000';  // Use localhost for development

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    // 1. Add user message to the chat
    setChatHistory((prev) => [...prev, { sender: 'User', text: userMessage }]);

    try {
      // 2. Send message to your backend API using environment variable
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // 3. Append the bot's response
      setChatHistory((prev) => [
        ...prev,
        { sender: BOT_NAME, text: data.reply },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev,
        { sender: BOT_NAME, text: 'Sorry, I am having trouble connecting to the server. Please try again later.' },
      ]);
    }

    setUserMessage('');
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        <FontAwesomeIcon icon={faRobot} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-md rounded-lg w-80 p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className='text-xl font-bold flex items-center gap-2'>
          <FontAwesomeIcon icon={faRobot} className="text-blue-500" />
          Neural J
        </h1>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <div className="h-64 overflow-y-auto mb-2">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.sender !== 'User' ? 'text-black' : 'text-gray-800'
            }`}
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-2 py-1 flex-grow"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button 
          className="bg-black text-white px-4 py-1 rounded-r"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;