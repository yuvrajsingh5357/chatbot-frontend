import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async (prompt) => {
    if (!prompt?.trim() || loading) {
      return;
    }

    // Add user message immediately
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content: prompt,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/generate-response",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            chatId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      // Store chatId returned from backend
      if (!chatId && data.chatId) {
        setChatId(data.chatId);
      }

      // Add bot response
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: data.response,
        },
      ]);
    } catch (error) {
      console.error("Error while fetching response:", error);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content:
            "Sorry, I couldn't process your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startNewChat = () => {
    setMessages([]);
    setChatId(null);
  };

  return (
    <>
      {/* Uncomment if Sidebar is needed */}
      {/* <div className="flex w-screen">
        <Sidebar onNewChat={startNewChat} />
      */}

      <div className="flex flex-col h-screen bg-gray-100 pb-16 w-full">
        <ChatHeader />

        <ChatBox
          messages={messages}
          loading={loading}
        />

        <ChatInput
          onSend={handleSend}
          disabled={loading}
        />
      </div>

      {/* </div> */}
    </>
  );
};

export default App;
