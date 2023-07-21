import {TouchableOpacity, View, StyleSheet, Text} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

export const HeaderLists = ({setShowModalNewChat, handler, activeOption}) => {

  const navigate = useNavigation();
  const { fontSize } = useSelector(state => state.setting.settings);

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        ...styles.container,
        opacity: activeOption ? 0.4 : 1
      }}
      onPressIn={handler.onPressIn}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigate.navigate('Setting')}
      >
        <Ionicons
          name="settings-outline"
          size={25}
          color='#586069'
        />
      </TouchableOpacity>
      <Text style={{...styles.nameLists, fontSize}}>Чаты</Text>
      <TouchableOpacity
        style={styles.add}
        onPress={() => setShowModalNewChat(true)}
      >
        <Ionicons
          name="add"
          size={25}
          color='#586069'
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    borderBottomColor: "rgba(88,96,105,0.24)",
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  add: {
    alignSelf: 'flex-start',
    padding: 15,
    paddingHorizontal: 20,
  },
  back: {
    alignSelf: 'flex-end',
    padding: 15,
    paddingHorizontal: 20,
  },
  nameLists: {
    alignSelf: 'center',
    fontWeight: 700,
    color: '#586069'
  }
})