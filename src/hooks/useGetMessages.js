// import {useState} from "react";
// import axios from "axios";
//
// const CLIENT = 'CLIENT';
// const DAVID = 'DAVID';
//
// export const useGetMessages = () => {
//
//   const [messages, setMessages] = useState([]);
//
//   const askMessage = async (message) => {
//     try {
//       const requestBody = {
//         model: 'gpt-3.5-turbo',
//         messages: [{ role: 'system', content: message }],
//       };
//
//       const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer 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',
//         },
//       });
//       await onSetMessages(CLIENT, response.data.choices[0].message.content);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   const onSetMessages = (isWho, content) => {
//     setMessages([
//       ...messages,
//       {
//         id: (messages.length !== 0) ? messages[messages.length - 1].id + 1 : 1,
//         content: content,
//         isWho: isWho,
//       },
//     ]);
//   };
//
//   return {messages, onSetMessages, askMessage};
// };
//
