import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native';
import {useSelector} from "react-redux";

export const ToggleSwitch = ({
  isEnabled = false,
  setIsEnabled,
}) => {
  const toggleColor = useState(new Animated.Value(0))[0];
  const primaryColor = useSelector(state => state.setting.settings.primaryColor);

  useEffect(() => {
    Animated.timing(toggleColor, {
      toValue: isEnabled ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const { dx } = gestureState;
      if (dx >= -39 && dx <= 0) {
        toggleColor.setValue(dx / -39);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      const { dx } = gestureState;
      if (dx >= -20 && dx <= 0 && !isEnabled) {
        handleToggle();
      } else if (dx <= -20 && dx >= -39 && isEnabled) {
        handleToggle();
      } else {
        Animated.spring(toggleColor, {
          toValue: isEnabled ? 1 : 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const interpolatedColor = toggleColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(88,96,105,0.3)', primaryColor],
  });

  return (
    <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
      <Animated.View style={[styles.container, { backgroundColor: interpolatedColor }]}>
        <Animated.View
          style={[styles.toggleCircle, { left: toggleColor.interpolate({
              inputRange: [0, 1],
              outputRange: [5, 35]
            }) }]}
          {...panResponder.panHandlers}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 35,
    borderRadius: 10,
    flexDirection: 'row',
    position: 'relative',
  },
  toggleCircle: {
    top: 5,
    width: 25,
    height: 25,
    borderRadius: 7,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 1,
  },
});
