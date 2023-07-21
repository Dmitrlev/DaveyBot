import {ScrollView, StyleSheet, Image, View, TouchableOpacity} from "react-native";
import { RenderDavidMessage } from "./RenderDavidMessage/RenderDavidMessage";
import { RenderClientMessage } from "./RenderClientMessage/RenderClientMessage";
import {useRef, useState} from "react";
import {PrintMessage} from "./PrintMessage/PrintMessage";

export const Main = ({state, handler, dataOptionsModal}) => {

  const {chatMessages, chatPrint, chatId} = state;

  const scrollViewRef = useRef(null);
  const blockRef  = useRef(null);
  const [animated, setAnimated] = useState(false);

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated });
    !animated && setAnimated(true);
  };


  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={handler.onPressIn}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        // onKeyboardWillShow={handleKeyboardShow}
      >
        <View style={styles.wrapper} ref={blockRef}>
          {chatMessages.map((message, index) => {
            return message.messageSender === "DAVID" ? (
              <RenderDavidMessage
                activeTouch={dataOptionsModal.messageId === message.messageId}
                modalTouchShow={dataOptionsModal.show}
                handler={handler}
                chatId={chatId}
                key={index}
                state={message}
              />)
              :
              <RenderClientMessage
                activeTouch={dataOptionsModal.messageId === message.messageId}
                modalTouchShow={dataOptionsModal.show}
                handler={handler}
                chatId={chatId}
                key={index}
                state={message}
              />
            })
          }
          {chatPrint && <PrintMessage />}
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "column",
    gap: 10,
    paddingVertical: 15,
  },
  messagesItem: {
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
  }
});

// const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
// const handleScroll = (event) => {
//   const currentScrollPosition = event.nativeEvent.contentOffset.y;
//   setPreviousScrollPosition(currentScrollPosition);
// };
// const [value,setValue] = useState(1);
// const handleKeyboardShow = (frames) => {
//   console.log(previousScrollPosition)
//   // const { x, y } = scrollViewRef.current.contentOffset;
//   scrollViewRef.current.scrollTo({ y: previousScrollPosition + frames.endCoordinates.height, animated: true });
// };