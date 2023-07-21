import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

export const HeaderSettings = () => {

  const navigate = useNavigation();
  const { fontSize } = useSelector(state => state.setting.settings);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigate.goBack()}
      >
        <Ionicons name="md-help-circle-outline" size={25} color='#586069'/>
      </TouchableOpacity>
      <Text style={{...styles.nameScreen, fontSize}}>Настройки</Text>
      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigate.goBack()}
      >
        <Ionicons
          name="ios-arrow-back"
          size={25}
          color='#586069'
          style={{
            transform: [{rotateZ: '-90deg'}]
          }}
        />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    borderBottomColor: "rgba(88,96,105,0.24)",
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  btnBack: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  nameScreen: {
    alignSelf: 'center',
    fontWeight: 700,
    color: '#586069',
  },
  question: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
})