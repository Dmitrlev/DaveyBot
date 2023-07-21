import {useState} from "react";
import { Dimensions } from 'react-native';

export const useTouchLists = () => {


  const screenWidth = Dimensions.get('window').width;

  const [dataOptionsModal, setDataOptionsModal] = useState({
    show: false,
    blockX: 0,
    blockY: 0,
  });

  const top = 93

  const onLongPress = (event, id, chatFixed) => {
    const { pageX, pageY } = event.nativeEvent;
    if(pageX > screenWidth - 120) {
      setDataOptionsModal({
        show: true,
        blockX: screenWidth - 150,
        blockY: pageY - top - 50,
        id,
        chatFixed
      });
    } else if (pageX < 60) {
      setDataOptionsModal({
        show: true,
        blockX: 30,
        blockY: pageY - top - 50,
        id,
        chatFixed
      });
    } else {
      setDataOptionsModal({
        show: true,
        blockX: pageX - 60,
        blockY: pageY - top - 50,
        id,
        chatFixed
      });
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