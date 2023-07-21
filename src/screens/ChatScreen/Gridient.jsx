import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';
import tinycolor from 'tinycolor2';

export const Gradient = ({ primaryColor, offset = 20}) => {
  const complementaryColors = getComplementaryColors(primaryColor, offset);

  return (
    <View style={[styles.image]}>
      <Svg height="100%" width="100%">
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {complementaryColors.map((color, index) => (
              <Stop key={index} offset={`${(index * 100) / (complementaryColors.length - 1)}%`} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
      </Svg>
    </View>
  );
};

const getComplementaryColors = (color, num) => {
  const primary = tinycolor(color);
  const complementaryColors = [];
  for (let i = 0; i < 4; i++) {
    const offset = i * num; // Измените значение смещения (offset) по вашему желанию
    const complementary = primary.spin(offset).saturate(20).lighten(5); // Измените значения смещения (spin), насыщенности (saturate) и яркости (lighten) по вашему желанию
    complementaryColors.push(complementary.toHexString());
  }
  return complementaryColors;
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
