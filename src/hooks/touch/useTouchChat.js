import {useEffect, useState} from "react";
import {Dimensions, BackHandler, Keyboard, KeyboardEvent } from 'react-native';


export const useTouchChat = () => {

  const screenWidth = Dimensions.get('window').width;

  const [dataOptionsModal, setDataOptionsModal] = useState({
    show: false,
    blockX: 0,
    blockY: 0,
  });

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
    return () => Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
  }, [])

  const handleBackPress = () => {
    setDataOptionsModal({...dataOptionsModal, show: false});
  }

  const handleKeyboardDidHide = () => {
    setDataOptionsModal({...dataOptionsModal, show: false});
  }

  const top = 93

  const onLongPress = (event, chatId, messageId, content) => {
    const { pageX, pageY } = event.nativeEvent;
    if(dataOptionsModal.show) {
      setDataOptionsModal({...dataOptionsModal, show: false});
    } else {
      if(pageX > screenWidth - 120) {
        setDataOptionsModal({
          show: true,
          blockX: screenWidth - 150,
          blockY: pageY - top,
          chatId,
          messageId,
          content,
        });
      } else if (pageX < 60) {
        setDataOptionsModal({
          show: true,
          blockX: 30,
          blockY: pageY - top,
          chatId,
          messageId,
          content,
        });
      } else {
        setDataOptionsModal({
          show: true,
          blockX: pageX - 60,
          blockY: pageY - top,
          chatId,
          messageId,
          content,
        });
      }
    }
  };

  const onPressIn = () => {
    dataOptionsModal.show && setDataOptionsModal({...dataOptionsModal, show: false})
  };

  return {
    handler: {
      onLongPress,
      onPressIn
    },
    dataOptionsModal
  };
}