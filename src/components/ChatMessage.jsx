// src/components/ChatMessage.jsx
import React from 'react';
import Markdown from 'react-markdown';

const ChatMessage = ({ message }) => {
  const isUser = message.type === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 w-full`}>
      <div className={`rounded-lg  ${isUser ? 'bg-orange-400 text-white' : 'bg-gray-300 text-black'} px-2 py-1`} style={{ maxWidth: '70%' }}>
       <Markdown>{message.content}</Markdown> 
      </div>
    </div>
  );
};

export default ChatMessage;
