import {StyleSheet, View} from "react-native";
import React from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const screenDetails = (
  Component = <></>,
  padding_top = true,
) => {

  const insets = useSafeAreaInsets();
  const insetTop = insets.top;
  const insetBottom = insets.bottom;

  return (props) => {
    return (
      <View
        style={{
          ...styles.container,
          paddingBottom: insetBottom,
          paddingTop: padding_top ? insetTop : 0
        }}
      >
        <Component {...props} />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255,255,255)',
    flex: 1,
  },
  shadowTop: {
    position: "absolute",
    top: 0,
    left: -50,
    width: '150%',
    opacity: 0.9,
    backgroundColor: 'transparent',
  },
  shadowBottom: {
    position: "absolute",
    bottom: 0,
    left: -50,
    backgroundColor: 'transparent',
    width: '150%',
    opacity: 0.7,
  }
});