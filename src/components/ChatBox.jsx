// src/components/ChatBox.jsx
import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatBox = ({ messages }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-grow p-4  overflow-y-auto w-3/4 mx-auto">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatBox;
