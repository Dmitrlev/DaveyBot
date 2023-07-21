import {StyleSheet, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useTheme} from "../../hooks/useTheme";
import {useSelector} from "react-redux";

export const Submit = ({callback, active}) => {

  const {theme} = useTheme();
  const primaryColor = useSelector(state => state.setting.settings.primaryColor);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? primaryColor : 'transparent'
      }}
      onPress={() => callback()}
    >
      <View style={styles.wrapper}>
        <Ionicons name="send" size={20} color={active ? 'white' : '#586069'} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {

  },
  wrapper: {
    opacity: 0.9,
    paddingLeft: 3
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 20,
    borderBottomWidth: 10,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    borderLeftColor: 'transparent',
    transform: [{ rotate: '90deg' }],
  },
  arrow: {
    position: 'absolute',
    top: 20,
    left: 30,
  },
})