import React, { useEffect, useState } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

export const Loader = ({duration = 300, backgroundColor = 'white', size = 5, gap = 5}) => {
  const [fadeAnim1] = useState(new Animated.Value(1)); // Прозрачность первой точки
  const [fadeAnim2] = useState(new Animated.Value(1)); // Прозрачность второй точки
  const [fadeAnim3] = useState(new Animated.Value(1)); // Прозрачность третьей точки

  useEffect(() => {
    animateLoader(); // Запускаем анимацию при монтировании компонента
  }, []);

  const animateLoader = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim1, {
          toValue: 0, // Прозрачность первой точки становится 0
          duration, // Длительность анимации
          easing: Easing.linear, // Равномерная анимация
          useNativeDriver: true, // Использование нативного драйвера для оптимизации
        }),
        Animated.timing(fadeAnim2, {
          toValue: 0, // Прозрачность второй точки становится 0
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim3, {
          toValue: 0, // Прозрачность третьей точки становится 0
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim1, {
          toValue: 1, // Прозрачность первой точки становится 1
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim2, {
          toValue: 1, // Прозрачность второй точки становится 1
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim3, {
          toValue: 1, // Прозрачность третьей точки становится 1
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.wrapper, gap}}>
        <Animated.View style={{ opacity: fadeAnim1}}>
          <View style={{...styles.item, backgroundColor, width: size, height: size}} />
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim2}}>
          <View style={{...styles.item, backgroundColor, width: size, height: size}} />
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnim3}}>
          <View style={{...styles.item, backgroundColor, width: size, height: size}} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  wrapper: {
    flexDirection: 'row',
  },
  item: {
    borderRadius: 5,
    backgroundColor: '#ffffff'
  }
})

