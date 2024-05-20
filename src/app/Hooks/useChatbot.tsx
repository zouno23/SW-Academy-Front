import { useState, useEffect } from 'react';
import { Chatbot } from '../Actions/ChatBotAction';
import { AxiosResponseType } from '../Actions/AxiosTypes';

interface Message {
  type: 'user' | 'assistant';
  text: string;
}

const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedMessages = localStorage.getItem('chatbot-messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []); // Only run once on component mount

  const sendMessage = async (text: string) => {
    try {
      // Send the user's message to the server
      setMessages((prevMessages) => [...prevMessages, { type: 'user', text }]);
      const { error, response } = await Chatbot(text);
      console.log(response)
  
      // Check if there is an error
      if(error) throw error
  
      // Update the chat messages with the user's input and the server response
      
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { type: 'assistant', text:response.text }]);
        localStorage.setItem('chatbot-messages', JSON.stringify(messages));
      }, 50);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        sendMessage(inputValue.trim());
        setInputValue('');
      }
    }
  };

  return { messages, inputValue, setInputValue, sendMessage, handleKeyDown };
};

export default useChatbot;
