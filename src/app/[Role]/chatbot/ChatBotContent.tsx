"use client"
import React, { useEffect, useRef } from 'react';
import useChatbot from '../../Hooks/useChatbot';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const ChatBotContent = () => {
  const { messages, inputValue, setInputValue, sendMessage, handleKeyDown } = useChatbot();
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-5  bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full  m-10 p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">AI Chatbot</h1>
        <div ref={messagesContainerRef} className=" flex flex-col h-[500px] p-3 bg-gray-100 dark:bg-gray-850 rounded-lg overflow-y-auto">
          
        {messages.map((message, index) => (
  <div key={index} className={`mb-4 ${message.type === 'user'? 'self-end' : 'self-start'} max-w-[80%]`}>
    <p className="text-xs text-gray-600 dark:text-gray-400 ml-2 mr-2">{message.type === 'user'? 'User' : 'IA'}</p>
    <div className={`bg-${message.type === 'user'? 'blue-500' : 'gray-200'} dark:bg-${message.type === 'user'? 'gray-700' : 'gray-700'} rounded-lg p-3 `}>
      <p className={`text-${message.type === 'user'? 'white' : 'gray-800'} dark:text-${message.type === 'user'? 'gray-200' : 'gray-200'}`}>{message.text}</p>
    </div>
  </div>
))}
        </div>
        <div className="flex items-center mt-4">
          <Input
            className="flex-1 rounded-lg bg-gray-200 dark:bg-gray-700 border-none focus:ring-0 focus:outline-none px-4 py-2 text-gray-800 dark:text-gray-200"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            type="text"
          />
          <Button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2" onClick={() => sendMessage(inputValue)}>Send</Button>
        </div>
      </div>
     </div>
  );
};

export default ChatBotContent;
