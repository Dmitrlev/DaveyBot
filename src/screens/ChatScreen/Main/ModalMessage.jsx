import React, { useRef, useEffect } from 'react';
import {View, StyleSheet, Animated, Text, TouchableOpacity} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export const ModalMessage = ({ dataModal, showBlockEXIT}) => {
  const { blockX, blockY } = dataModal;
  const blockRef = useRef(null);
  const scaleAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 9, // Коэффициент трения
      tension: 200, // Коэффициент напряжения
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  const buttons = [
    {
      name: 'Удалить',
      callback () {},
      Ionicons: 'trash-outline',
    },
    {
      name: 'Скопировать',
      callback () {},
      Ionicons: 'ios-copy-outline',
    },
    {
      name: 'Переслать',
      callback () {},
      Ionicons: 'arrow-forward-outline',
    }
  ]

  return (
    <Animated.View
      style={[
        styles.container,
        { left: blockX, top: blockY, transform: [{ scale: scaleAnim }] },
      ]}
    >
      {buttons.map((btn, index) => {
        return (
          <TouchableOpacity
            style={styles.blockBtn}
            onPress={() => {
              btn.callback();
              showBlockEXIT()
            }}
            key={index}
          >
            <Ionicons
              name={btn.Ionicons}
              size={15}
              color='#586069'
            />
            <Text style={styles.name}>{btn.name}</Text>
          </TouchableOpacity>
        )
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 130,
    paddingVertical : 5,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderColor: 'rgba(88,96,105,0.3)',
    borderWidth: 1,
    zIndex: 100
  },
  blockBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,

  },
  name: {
  }
});
