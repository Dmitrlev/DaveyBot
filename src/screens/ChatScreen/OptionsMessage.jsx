import {Text, Animated, StyleSheet, TouchableOpacity} from "react-native";
import React, { useEffect, useRef } from "react";
import { AntDesign, MaterialCommunityIcons  } from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {deleteMessage} from "../../store/reducers/chat/chat";
import { Clipboard } from 'react-native';

export const OptionsMessage = ({ dataOptionsModal, handler }) => {
  const dispatch = useDispatch();
  const { blockY, blockX, chatId, messageId, content} = dataOptionsModal;

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Запуск анимации при открытии блока OptionsModal
    Animated.spring(animation, {
      toValue: 1,
      stiffness: 300,
      damping: 20,
      useNativeDriver: true,
    }).start();
  }, []);

  const scale = animation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 1],
  });

  const copyToClipboard = async () => {
    await Clipboard.setString(String(content));
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          top: blockY,
          left: blockX,
          transform: [{ scale }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          copyToClipboard().then(r => null)
          handler.onPressIn()
        }}
      >
        <MaterialCommunityIcons name="content-copy" size={13} color="black" />
        <Text style={styles.text}>{'Скопировать'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          dispatch(deleteMessage({ chatId, messageId }));
          handler.onPressIn()
        }}
      >
        <AntDesign name="delete" size={13} color={"black"} />
        <Text style={styles.text}>Удалить</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "rgba(88,96,105,0.11)",
    borderWidth: 1,
    overflow: "hidden",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15
  },
});
