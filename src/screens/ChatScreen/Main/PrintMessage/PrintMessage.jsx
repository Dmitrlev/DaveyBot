import React, { useEffect, useRef } from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';
import {useSelector} from "react-redux";

export const PrintMessage = () => {

  const {chatOutline, primaryColor} = useSelector(state => state.setting.settings);

  const dot1Position = useRef(new Animated.Value(0)).current;
  const dot2Position = useRef(new Animated.Value(0)).current;
  const dot3Position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animate();
  }, []);

  const duration = 100;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot1Position, {
          toValue: -5,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(dot2Position, {
          toValue: -5,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(dot3Position, {
          toValue: -5,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(dot1Position, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(dot2Position, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
        Animated.timing(dot3Position, {
          toValue: 0,
          duration,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.ease),
        }),
      ]),
      { iterations: -1 }
    ).start();
  };

  return (
    <View
      style={[
        styles.container,
        {borderWidth: chatOutline ? 1 : 0,}
      ]}
    >
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot1Position }], backgroundColor: primaryColor }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot2Position }], backgroundColor: primaryColor }]} />
      <Animated.View style={[styles.dot, { transform: [{ translateY: dot3Position }], backgroundColor: primaryColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingTop: 15,
    borderRadius: 10,
    gap: 3,
    alignSelf: 'flex-start',
    borderColor: 'rgba(88,96,105,0.3)',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
  },
});
