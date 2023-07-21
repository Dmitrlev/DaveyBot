import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useTheme } from '../../../../hooks/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import {setMessageRead} from "../../../../store/reducers/chat/chat";

export const RenderClientMessage = ({ state, chatId, handler, activeTouch,modalTouchShow }) => {

  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { chatOutline, fontSize, time } = useSelector((state) => state.setting.settings);

  useEffect(() => {
    !state.messageRead && dispatch(setMessageRead({ chatId, messageId: state.messageId, messageRead: true }))
  }, []);

  return (
    <TouchableOpacity
      disabled={modalTouchShow}
      style={{
        ...styles.container,
        opacity: (modalTouchShow && !activeTouch) ? 0.4 : 1
      }}
      activeOpacity={1}
      onPress={(event) => handler.onLongPress(event, chatId, state.messageId, state.messageContent)}
      onPressIn={handler.onPressIn}
    >
      <View
        style={[
          styles.wrapper,
          theme && styles.containerDark,
          { borderWidth: chatOutline ? 1 : 0 },
        ]}
      >
        <View style={{...styles.block}}>
          <Text style={[styles.text, theme && styles.textDark, { fontSize }]}>
            {state.messageContent}

          </Text>
          {time &&
            <Text style={{ ...styles.time, fontSize: fontSize * 0.6 }}>
              {state.messageTime}
            </Text>
          }
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    marginHorizontal: 10,
  },
  wrapper: {
    backgroundColor: '#e9ecef',
    position: 'relative',
    maxWidth: '90%',
    alignSelf: 'flex-end',
    height: 'auto',
    padding: 10,
    paddingVertical: 7,
    borderRadius: 10,
    borderColor: 'rgba(88,96,105,0.3)',
  },
  block: {
    // backgroundColor: 'green',
  },
  containerDark: {
    backgroundColor: '#202a38',
  },
  text: {
    flex: 1,
    color: 'black',
  },
  textDark: {
    color: '#ffffffe0',
  },
  time: {
    left: 5,
    top: 3,
    opacity: 0.4,
    alignSelf: 'flex-end'
  },
});
