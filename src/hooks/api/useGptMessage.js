import { useDispatch, useSelector } from "react-redux";
import { addNewMessage, setChatLoader, setChatPrint, setChatValue } from "../../store/reducers/chat/chat";
import { arrayParsing, arrayParsingAll } from "../../parsing/api/arrayParsing";
import { onInstance } from "./instance";
import axios from "axios";
import { useRef } from "react";

export const useGptMessage = () => {
  const dispatch = useDispatch();
  const { quantityPreviousMessages, quantityPreviousMessagesAll, key } = useSelector((state) => state.setting.settings);
  const chats = useSelector((state) => state.chat.data);

  // Используем useRef для сохранения ссылки на cancelTokenSource между вызовами
  const cancelTokenSourceRef = useRef();

  const sendMessage = (value, chatId) => {
    // Если cancelTokenSource уже существует, отменяем предыдущий запрос
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel('Request canceled by user');
    }

    // Создаем новый объект CancelToken перед каждым запросом
    const cancelTokenSource = axios.CancelToken.source();
    cancelTokenSourceRef.current = cancelTokenSource; // Сохраняем ссылку в useRef

    const thisPreviousMessages = (chats.find((chat) => chat.chatId === chatId)).chatMessages;

    dispatch(setChatLoader({ chatId, chatLoader: true }));
    dispatch(setChatValue({ chatId, chatValue: "" }));
    dispatch(
      addNewMessage({
        chatId,
        messageSender: "CLIENT",
        messageContent: value,
        messageError: false,
      })
    );
    const messages = [
      ...(quantityPreviousMessagesAll ? arrayParsingAll(thisPreviousMessages) : arrayParsing(thisPreviousMessages, quantityPreviousMessages)),
      { role: "user", content: value },
    ];

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
    };

    setTimeout(() => dispatch(setChatPrint({ chatPrint: true, chatId })), 500);

    // Отправляем запрос с передачей объекта cancelToken в параметрах запроса
    onInstance(key)
      .post('https://api.openai.com/v1/chat/completions', requestBody, {
        cancelToken: cancelTokenSource.token,
      })
      .then((response) => {
        dispatch(setChatPrint({ chatPrint: false, chatId }));
        setTimeout(() => {
          dispatch(
            addNewMessage({
              chatId,
              messageSender: "DAVID",
              messageContent: response.data.choices[0].message.content,
              messageError: false,
            })
          );
          dispatch(setChatLoader({ chatId, chatLoader: false }));
        }, 100);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Запрос был отменен:', error.message);
        } else {
          dispatch(setChatPrint({ chatPrint: false, chatId }));
          dispatch(setChatLoader({ chatId, chatLoader: false }));
          alert(`Произошла ошибка: ${error}`);
        }
      });
  };

  // Функция для отмены запроса
  const cancelRequest = (chatId) => {
    dispatch(setChatPrint({ chatPrint: false, chatId }));
    dispatch(setChatLoader({ chatId, chatLoader: false }));
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel('Request canceled by user');
      cancelTokenSourceRef.current = null; // Сбрасываем ссылку на текущий объект CancelToken
    }
  };

  return { sendMessage, cancelRequest };
};
