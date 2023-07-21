import { Text, Animated, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {deleteChat, setChatFixed} from "../../../store/reducers/chat/chat";

export const OptionsModal = ({ dataOptionsModal, handler }) => {
  const { blockY, blockX, id, chatFixed } = dataOptionsModal;
  const dispatch = useDispatch();

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
          dispatch(setChatFixed({ chatFixed: !chatFixed, chatId: id }));
          handler.onPressIn()
        }}
      >
        <AntDesign name="pushpino" size={13} color={"black"} />
        <Text style={styles.text}>{chatFixed ? 'Открепить' : 'Закрепить'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          dispatch(deleteChat({chatId: id}));
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
