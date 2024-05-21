// "use client"
// import React, { useState } from 'react';

// const HomePage = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState('');

//   const sendMessage = (message: string) => {
//     // Call the Gemini API to get a response
//     const response = {
//       text: 'This is a response from the Gemini API',
//     };

//     // Add the user message to the messages array
//     setMessages((prevMessages) => [...prevMessages, message]);

//     // Add the bot response to the messages array
//     setMessages((prevMessages) => [...prevMessages, response.text]);
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       if (inputValue.trim() !== '') {
//         sendMessage(inputValue.trim());
//         setInputValue('');
//       }
//     }
//   };

//   return (
//     <div className="chatbox">
//       <div className="messages">
//         {messages.map((message, index) => (
//           <div key={index}>{message}</div>
//         ))}
//       </div>
//       <input
//         type="text"
//         className="input"
//         value={inputValue}
//         onChange={(event) => setInputValue(event.target.value)}
//         onKeyDown={handleKeyDown}
//       />
//     </div>
//   );
// };

// export default HomePage;


// // import axios from 'axios';
// // import { useState } from "react";

// // const HomePage = () => {
// //   const [userInput, setUserInput] = useState('');
// //   const [response, setResponse] = useState('');

// //   const handleSubmit = async (event:any) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:9000/chatbot', { userInput });
// //       setResponse(response.data.text);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Chat with AI</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           value={userInput}
// //           onChange={(event) => setUserInput(event.target.value)}
// //           placeholder="Type something..."
// //         />
// //         <button type="submit">Send</button>
// //       </form>
// //       <p>{response}</p>
// //     </div>
// //   );
// // };

// // export default HomePage;