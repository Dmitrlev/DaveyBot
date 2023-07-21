import React, { useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

export const TextGeneratorSquare = () => {
  const borderWidthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderWidthAnim, {
          toValue: 3,
          duration: 700,
          useNativeDriver: false,
        }),
        Animated.timing(borderWidthAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  const squareStyle = {
    width: '60%',
    height: '60%',
    borderWidth: borderWidthAnim,
    borderColor: 'grey',
    borderRadius: 2,
  };

  return <Animated.View style={squareStyle} />;
};
