// src/App.jsx
import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (prompt) => {
    setMessages([...messages, { type: "user", content: prompt }]);
    // Fetch response from the backend ( endpoint: http://localhost:8080/generate-response)
    fetch("http://localhost:8080/generate-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ prompt }),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: data },
        ]);
      });
  };

  return (
    <>
      {/* <div className="flex w-screen"> */}
        {/* <Sidebar /> */}
        <div className="flex flex-col h-screen bg-gray-100 pb-16 w-full">
          <ChatHeader />
          <ChatBox messages={messages} />
          <ChatInput onSend={handleSend} />
        </div>
      {/* </div> */}
    </> 
  );
};

export default App;
