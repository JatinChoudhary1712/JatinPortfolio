// src/components/Chatbot.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

interface Message {
  sender: 'User' | 'Assistant' | string;
  text: string;
}

const Chatbot: React.FC = () => {
  const BOT_NAME = 'Neural J';
  const [userMessage, setUserMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    // 1. Add user message to the chat
    setChatHistory((prev) => [...prev, { sender: 'User', text: userMessage }]);

    try {
      // 2. Send message to your backend API using environment variable
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      const response = await axios.post(`${apiUrl}/api/chat`, {
        message: userMessage,
      });

      // 3. Append the bot's response
      setChatHistory((prev) => [
        ...prev,
        { sender: BOT_NAME, text: response.data.reply },
      ]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { sender: BOT_NAME, text: 'An error occurred. Please try again.' },
      ]);
    }

    setUserMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 shadow-md rounded-lg w-80 p-4">
       <h1 className='text-center text-xl font-bold flex items-center justify-center gap-2 bg-gray-300 p-2 rounded-lg'>
        <FontAwesomeIcon icon={faRobot} className="text-blue-500" />
        Neural J  (Neural J AI Powered by OpenAI)
      </h1>
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
      <div className="flex" >
        
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