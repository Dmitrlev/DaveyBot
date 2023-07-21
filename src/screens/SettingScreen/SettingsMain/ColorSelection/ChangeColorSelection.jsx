import React from 'react';
import { StyleSheet, View } from 'react-native';
import {ColorPicker} from 'react-native-color-picker';

export const ChangeColorSelection = ({ state }) => {
  const { color, setColor } = state;

  const onColorChange = (selectedColor) => {
    setColor(hsvToHex({...selectedColor}));
  };

  function hsvToHex({h, s, v}) {
    const rgb = hsvToRgb(h, s, v);
    const rHex = rgb.r.toString(16).padStart(2, '0');
    const gHex = rgb.g.toString(16).padStart(2, '0');
    const bHex = rgb.b.toString(16).padStart(2, '0');
    return `#${rHex}${gHex}${bHex}`;
  }

  return (
    <View style={styles.container}>
      <ColorPicker
        style={{
          width: 250,
          height: 300,
        }}

        defaultColor={color}
        onColorChange={onColorChange}
        hideSliders
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'none',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function hsvToRgb(h, s, v) {
  let r, g, b;
  const c = v * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = v - c;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}
