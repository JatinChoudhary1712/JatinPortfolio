import { useState } from 'react';

const ChatBot = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full">
      {/* Close button */}
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close chat"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>

      {/* Your existing chatbot content */}
      <div className="mt-4">
        {/* Your chat messages and input field */}
      </div>
    </div>
  );
};

export default ChatBot; 