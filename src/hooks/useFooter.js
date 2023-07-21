import {useGptMessage} from "./api/useGptMessage";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setChatValue} from "../store/reducers/chat/chat";

export const useFooter = (state) => {
  const { sendMessage, cancelRequest } = useGptMessage();
  const dispatch = useDispatch();

  const { chatValue, chatLoader, chatId } = state;
  const [activeSubmit, setActiveSubmit] = useState(false);


  const checkActiveSubmit = text => text.trim() !== "";

  useEffect(() => {
    setActiveSubmit(checkActiveSubmit(chatValue))
  }, [chatValue])

  const onSubmit = () => {
    if (activeSubmit) {
      sendMessage(chatValue, chatId);
      setActiveSubmit(false);
    }
  };


  const onChangeValue = (chatValue) => {
    dispatch(setChatValue({ chatValue, chatId }));
  };

  return {
    chatValue,
    onChangeValue,
    activeSubmit,
    chatLoader,
    onSubmit,
    cancelRequest
  }
}