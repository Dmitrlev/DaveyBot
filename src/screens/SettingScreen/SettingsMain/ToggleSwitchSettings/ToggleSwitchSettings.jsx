import {Text, View, StyleSheet} from "react-native";
import React from "react";
import {ToggleSwitch} from "../../../../components/ToggleSwitch/ToggleSwitch";

export const ToggleSwitchSettings = ({
  name,
  nameItemStyle,
  isEnabled,
  setIsEnabled,
}) => {
  return (
    <View style={styles.container}>
      <Text style={nameItemStyle}>{name}</Text>
      <ToggleSwitch
        isEnabled={isEnabled}
        setIsEnabled={setIsEnabled}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})