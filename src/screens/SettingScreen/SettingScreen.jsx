import {View, StyleSheet} from "react-native";
import {HeaderSettings} from "./HeaderSettings";
import {SettingsMain} from "./SettingsMain/SettingsMain";

export const SettingScreen = () => {

  return (
    <View style={styles.container}>
      <HeaderSettings />
      <SettingsMain />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})