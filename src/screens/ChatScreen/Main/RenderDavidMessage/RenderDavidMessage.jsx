import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {renderMessages} from "./renderMessages";
import {CodeSyntaxHighlighter} from "./CodeSyntaxHighlighter";
import {useTheme} from "../../../../hooks/useTheme";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setMessageRead} from "../../../../store/reducers/chat/chat";


export const RenderDavidMessage = ({state, chatId, handler, activeTouch, modalTouchShow}) => {

  const dispatch = useDispatch();
  const {theme} = useTheme();
  const {chatOutline, fontSize, time} = useSelector(state => state.setting.settings);

  useEffect(() => {
    !state.messageRead && dispatch(setMessageRead({ chatId, messageId: state.messageId, messageRead: true }))
  }, []);

  return (
    <TouchableOpacity
      disabled={modalTouchShow}
      activeOpacity={1}
      style={{
        ...styles.container,
        opacity: (modalTouchShow && !activeTouch) ? 0.4 : 1
      }}
      onPress={(event) => handler.onLongPress(event, chatId, state.messageId, state.messageContent)}
      onPressIn={handler.onPressIn}
    >
      <View style={[
        styles.block,
        theme && styles.containerDark,
        {borderWidth: chatOutline ? 1 : 0,}
      ]}>
        {renderMessages(state.messageContent).map((item, index) => {
          if(item.type === 'text') {
            return (
              <Text
                key={index}
                style={[
                  styles.messagesText,
                  theme && styles.messagesTextDark,
                  {fontSize: fontSize}]}
              >{item.content}</Text>
            )
          } else if(item.type === 'code') {
            return (
              <View key={index} style={styles.codeContainer}>
                <CodeSyntaxHighlighter key={index} item={item}/>
              </View>
            )
          }
        })}
        {time &&
          <Text style={{
            ...styles.time,
            fontSize: fontSize * 0.6
          }}>{state.messageTime}</Text>}
      </View>
      {/*{state.settings &&*/}
      {/*  <ModalMessage*/}
      {/*    showBlockEXIT={() => dispatch(setSettings({chatId, id, settings: false}))}*/}
      {/*    dataModal={dataModal}*/}
      {/*  />*/}
      {/*}*/}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 10,
  },
  wrapper: {
  },
  block: {
    backgroundColor: '#ffffff',
    maxWidth: '90%',
    alignSelf: 'flex-start',
    height: 'auto',
    padding: 10,
    paddingVertical: 7,
    borderRadius: 10,
    borderColor: 'rgba(88,96,105,0.3)',
  },
  containerDark: {
    backgroundColor: '#21262d',
  },
  messagesText: {
    color: 'black'
  },
  messagesTextDark: {
    color: '#ffffffe0'
  },
  codeContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#282828',
  },
  code: {
    fontSize: 14,
  },
  time: {
    left: 5,
    top: 5,
    alignSelf: 'flex-end',
    opacity: 0.4
  }
})