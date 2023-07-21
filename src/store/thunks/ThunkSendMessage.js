// import { API } from "../../api/API";
// import {addMessage, setIsLoader} from "../reducers/chat/chat";
// import { Audio } from "expo-av";
// import soundFile from '../../assets/sounds/telegram-soundin.mp3';
// import soundFile2 from '../../assets/sounds/Sound_17216.mp3';
//
// export const ThunkSendMessage = (value, chatId) => {
//   return async (dispatch, getState) => {
//
//     const state = await getState();
//     const previousMessages = await state.chat.chatsAll.find(chat => chat.chatId === chatId).messages;
//
//
//     const {
//       quantityPreviousMessages,
//       quantityPreviousMessagesAll
//     } = await state.setting;
//
//     await dispatch(setIsLoader({
//       chatId,
//       isLoader: true,
//     }));
//
//     await soundNotificationActivate(soundFile);
//     await dispatch(addMessage({
//       chatId,
//       isWho: 'CLIENT',
//       content: value,
//     }));
//
//     API.sendMessage({
//       value,
//       previousMessages,
//       quantityPreviousMessages,
//       quantityPreviousMessagesAll
//     })
//       .then(response => {
//         soundNotificationActivate(soundFile2);
//         dispatch(addMessage({
//           chatId,
//           isWho: 'DAVID',
//           content: response.data.choices[0].message.content
//         }));
//
//         dispatch(setIsLoader({
//           chatId,
//           isLoader: false,
//         }));
//       })
//       .catch(error => {
//         dispatch(setIsLoader({
//           chatId,
//           isLoader: false,
//         }));
//         console.log(error)
//         alert(`Произошла ошибка:, ${error}`)
//       });
//   }
// };
//
// const soundNotificationActivate = async (mp3) => {
//   const { sound } = await Audio.Sound.createAsync(mp3);
//   await sound.playAsync();
// };
