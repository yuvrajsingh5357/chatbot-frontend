// src/components/ChatInput.jsx
import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [prompt, setPrompt] = useState('');

  const handleSend = () => {
    if (prompt.trim()) {
      onSend(prompt);
      setPrompt('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex items-center border-t">
      <input
        type="text"
        placeholder="Type your message here..."
        className="flex-grow border rounded-full py-2 px-4 mr-2"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="bg-blue-500 text-white rounded-full py-2 px-4"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
