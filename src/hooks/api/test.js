// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import OpenAI from 'openai-api';
//
// const openai = new OpenAI('YOUR_API_KEY');
//
// const ChatGPT = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//
//   useEffect(() => {
//     const fetchAIResponse = async () => {
//       if (!input) return;
//
//       setIsLoading(true);
//       setMessages(prevMessages => [...prevMessages, { content: input, sender: 'user' }]);
//
//       try {
//         await openai.complete({
//           engine: 'davinci',
//           prompt: messages.map(message => message.content).join('\n'),
//           maxTokens: 30,
//           temperature: 0.7,
//           n: 1,
//           stop: '\n',
//         })
//
//         const aiResponse = response.data.choices[0].text.trim();
//         setMessages(prevMessages => [...prevMessages, { content: aiResponse, sender: 'ai' }]);
//         setInput('');
//       } catch (error) {
//         console.error(error);
//       }
//
//       setIsLoading(false);
//     };
//
//     fetchAIResponse();
//   }, [input]);
//
//   const handleMessageSend = () => {
//     if (isLoading) return;
//
//     setInput(inputValue);
//   };
//
//   return (
//     <View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <TextInput
//           value={input}
//           onChangeText={setInput}
//           placeholder="Type your message..."
//           style={{ flex: 1, marginRight: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
//         />
//         <Button title="Send" onPress={handleMessageSend} disabled={isLoading} />
//       </View>
//
//       {messages.map((message, index) => (
//         <View key={index} style={{ marginTop: 10 }}>
//           <Text style={{ fontWeight: 'bold' }}>{message.sender === 'user' ? 'You:' : 'AI:'}</Text>
//           <Text>{message.content}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };
//
// export default ChatGPT;